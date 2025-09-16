import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

function generateNonce(): string {
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  let binary = "";
  for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
  return btoa(binary);
}

// Simple in-memory rate limiting for API routes (demo only; not durable across instances)
const buckets = new Map<string, { ts: number; count: number }>();
function isRateLimited(key: string, limit = 60, windowMs = 60_000) {
  const now = Date.now();
  const rec = buckets.get(key) ?? { ts: now, count: 0 };
  if (now - rec.ts > windowMs) {
    rec.ts = now;
    rec.count = 0;
  }
  rec.count += 1;
  buckets.set(key, rec);
  return rec.count > limit;
}

export default clerkMiddleware((auth, req) => {
  const res = NextResponse.next();

  const nonce = generateNonce();
  const csp = [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}' https://va.vercel-scripts.com https://vitals.vercel-insights.com https://*.clerk.com https://*.clerk.accounts.dev`,
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "img-src 'self' data: https:",
    "font-src 'self' https://fonts.gstatic.com",
    "connect-src 'self' https://va.vercel-scripts.com https://vitals.vercel-insights.com https://openrouter.ai https://*.clerk.com https://*.clerk.accounts.dev",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self' https://*.clerk.com https://*.clerk.accounts.dev",
    "object-src 'none'",
    "upgrade-insecure-requests",
  ].join("; ");

  res.headers.set("Content-Security-Policy", csp);
  res.headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload");
  res.headers.set("X-Frame-Options", "DENY");
  res.headers.set("X-Content-Type-Options", "nosniff");
  res.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  res.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  res.headers.set("Cross-Origin-Opener-Policy", "same-origin");

  // Rate limit API routes
  const ip = (req.headers.get("x-real-ip") || req.headers.get("x-forwarded-for") || "unknown").toString();
  const path = req.nextUrl.pathname;
  if (path.startsWith("/api")) {
    const key = `${ip}:${path}`;
    if (isRateLimited(key)) {
      return new NextResponse("Rate limit exceeded", {
        status: 429,
        headers: {
          "Cache-Control": "no-store",
          Vary: "Authorization, Cookie",
        },
      });
    }
  }

  // CSRF: enforce same-origin for state-changing methods
  const method = req.method?.toUpperCase() || "GET";
  if (["POST", "PUT", "PATCH", "DELETE"].includes(method)) {
    const origin = req.headers.get("origin") || "";
    const referer = req.headers.get("referer") || "";
    const allowed = req.nextUrl.origin;
    if ((origin && !origin.startsWith(allowed)) && (referer && !referer.startsWith(allowed))) {
      return new NextResponse("Invalid CSRF token", { status: 403, headers: { "Cache-Control": "no-store" } });
    }
  }
  const p = req.nextUrl.pathname;
  if (p.startsWith("/api") || p.startsWith("/sign-in") || p.startsWith("/sign-up") || p.startsWith("/auth")) {
    res.headers.set("Cache-Control", "no-store");
    res.headers.set("Vary", "Authorization, Cookie");
  }
  // Expose nonce for server components via HttpOnly cookie
  res.cookies.set("csp-nonce", nonce, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    path: "/",
  });
  return res;
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
