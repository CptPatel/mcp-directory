import { NextResponse } from "next/server";
import { z } from "zod";

type ReqBody = {
  prompt?: string;
  model?: string;
};

// Simple in-memory rate limit (per instance). For production, use a durable store.
const rlStore = new Map<string, { count: number; reset: number }>();
const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQ = 30; // per IP per window

function getClientIp(req: Request) {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  const xrip = req.headers.get("x-real-ip");
  if (xrip) return xrip;
  try {
    return (new URL(req.url)).hostname;
  } catch {
    return "unknown";
  }
}

function rateLimitKey(req: Request) {
  return `creator:${getClientIp(req)}`;
}

function checkRateLimit(req: Request) {
  const key = rateLimitKey(req);
  const now = Date.now();
  const entry = rlStore.get(key);
  if (!entry || entry.reset < now) {
    rlStore.set(key, { count: 1, reset: now + WINDOW_MS });
    return { allowed: true, remaining: MAX_REQ - 1, reset: now + WINDOW_MS };
  }
  if (entry.count >= MAX_REQ) {
    return { allowed: false, remaining: 0, reset: entry.reset };
  }
  entry.count++;
  return { allowed: true, remaining: MAX_REQ - entry.count, reset: entry.reset };
}

export async function POST(req: Request) {
  // Basic CSRF check: require same-origin
  const origin = req.headers.get("origin") || req.headers.get("referer") || "";
  const reqOrigin = (() => {
    try { return new URL(req.url).origin; } catch { return ""; }
  })();
  if (origin && !origin.startsWith(reqOrigin)) {
    return NextResponse.json({ error: "Invalid origin" }, { status: 403, headers: { "Cache-Control": "no-store" } });
  }

  // Rate limit
  const rl = checkRateLimit(req);
  if (!rl.allowed) {
    return NextResponse.json({ error: "Rate limit exceeded. Try again later." }, {
      status: 429,
      headers: {
        "Cache-Control": "no-store",
        "Retry-After": Math.ceil((rl.reset - Date.now()) / 1000).toString(),
      },
    });
  }
  try {
    const { prompt = "", model = "openrouter/auto" } = (await req.json()) as ReqBody;

    if (!prompt || prompt.trim().length < 8) {
      return NextResponse.json({ error: "Prompt is required" }, { status: 400, headers: { "Cache-Control": "no-store" } });
    }

    const apiKey = process.env.OPENROUTER_API_KEY;

    // Fallback local generator if no API key configured
    if (!apiKey) {
      const stub = buildStubFromPrompt(prompt);
      return NextResponse.json({ source: "stub", mcp: stub }, { headers: { "Cache-Control": "no-store" } });
    }

    // Call OpenRouter chat completions
    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        messages: [
          {
            role: "system",
            content:
              "You are an assistant that generates Model Context Protocol (MCP) server definitions. Always return strictly-formatted JSON with keys: name, description, category (Development|Database|Communication|Productivity|Cloud), tags (array of strings), author, size (like '2.3 MB'), installCommand (single-line command to install or run the MCP). Do not include markdown or code fences.",
          },
          {
            role: "user",
            content: `Create an MCP based on this request: ${prompt}. Return JSON only.`,
          },
        ],
        temperature: 0.2,
      }),
      // Ensure Edge compatibility
      cache: "no-store",
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("OpenRouter error:", text);
      const stub = buildStubFromPrompt(prompt);
      return NextResponse.json({ source: "stub", mcp: stub, warning: "OpenRouter call failed; returned stub" }, { status: 200, headers: { "Cache-Control": "no-store" } });
    }

    const data = await res.json();
    const content: string = data?.choices?.[0]?.message?.content ?? "{}";

    let parsed: any;
    try {
      parsed = JSON.parse(content);
    } catch {
      // Attempt to extract JSON block
      const match = content.match(/\{[\s\S]*\}/);
      if (match) {
        parsed = JSON.parse(match[0]);
      }
    }

    if (!parsed || typeof parsed !== "object" || !parsed.name) {
      const stub = buildStubFromPrompt(prompt);
      return NextResponse.json({ source: "fallback", mcp: stub }, { status: 200 });
    }

    const normalized = normalizeMCP(parsed);
    const schema = z.object({
      id: z.number().optional(),
      name: z.string().min(1),
      description: z.string().min(1),
      category: z.string().min(1),
      tags: z.array(z.string()).default([]),
      verified: z.boolean().optional(),
      author: z.string().min(1),
      lastUpdated: z.string().optional(),
      size: z.string().optional(),
      installCommand: z.string().min(1),
      downloads: z.string().optional(),
      rating: z.number().optional(),
    });
    const safe = schema.safeParse(normalized);
    if (!safe.success) {
      const stub = buildStubFromPrompt(prompt);
      return NextResponse.json({ source: "validated-fallback", mcp: stub }, { status: 200, headers: { "Cache-Control": "no-store" } });
    }

    return NextResponse.json({ source: "openrouter", mcp: safe.data }, { headers: { "Cache-Control": "no-store" } });
  } catch (e) {
    console.error("/api/creator error", e);
    return NextResponse.json({ error: "Unexpected error" }, { status: 500, headers: { "Cache-Control": "no-store" } });
  }
}

function normalizeMCP(obj: any) {
  const name = String(obj.name ?? "Custom MCP");
  return {
    id: Date.now(),
    name,
    description: String(obj.description ?? "Generated by AI MCP Creator"),
    rating: 5.0,
    downloads: "0",
    category: String(obj.category ?? "Development"),
    tags: Array.isArray(obj.tags) ? obj.tags.map(String) : [],
    verified: false,
    author: String(obj.author ?? "AI Creator"),
    lastUpdated: "just now",
    size: String(obj.size ?? "1.0 MB"),
    installCommand: String(obj.installCommand ?? "echo \"Install steps go here\"")
  };
}

function buildStubFromPrompt(prompt: string) {
  const p = prompt.toLowerCase();
  if (p.includes("github")) {
    return normalizeMCP({
      name: "GitHub Helper",
      description: "Manage issues, PRs, and repos via MCP.",
      category: "Development",
      tags: ["github", "issues", "pull requests"],
      installCommand: "npm install -g github-helper-mcp",
      size: "2.2 MB",
    });
  }
  if (p.includes("database") || p.includes("sql") || p.includes("postgres")) {
    return normalizeMCP({
      name: "Database Helper",
      description: "Query and manage databases with natural language.",
      category: "Database",
      tags: ["sql", "postgres", "mysql"],
      installCommand: "pip install database-helper-mcp",
      size: "3.1 MB",
    });
  }
  if (p.includes("slack") || p.includes("chat")) {
    return normalizeMCP({
      name: "Slack Connector",
      description: "Send messages and manage channels via MCP.",
      category: "Communication",
      tags: ["slack", "chat", "bot"],
      installCommand: "curl -sSL https://install.slack-connector-mcp.com | bash",
      size: "1.8 MB",
    });
  }
  return normalizeMCP({
    name: "Custom MCP",
    description: "Generated from your prompt.",
    category: "Productivity",
    tags: ["custom"],
    installCommand: "echo \"Add install steps here\"",
    size: "1.0 MB",
  });
}
