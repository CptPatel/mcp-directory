/*
  Minimal MCP-like JSON-RPC server over stdio for Supabase.
  Tools:
    - supabase_select: safe SELECTs with table whitelist, simple filters, limit
    - supabase_insert: whitelist tables; insert one row
    - supabase_update: whitelist tables; update by equality filters
    - supabase_delete: whitelist tables; delete by equality filters

  This is intentionally simple and safe. Keep it local; do not expose to the internet without additional auth.
*/
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";

const SUPABASE_URL = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || "";
// Prefer service role for writes; will fall back to anon for read-only
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY || "";

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  console.error("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY/ANON_KEY in env");
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false, autoRefreshToken: false },
});

// Restrict to safe tables
const ALLOWED_TABLES = new Set([
  "mcps",
  "packages",
  "package_items",
  "community_posts",
  "community_comments",
  "blog_posts",
]);

const WhereSchema = z.record(z.string(), z.union([z.string(), z.number(), z.boolean()]));

const SelectInput = z.object({
  table: z.string(),
  columns: z.array(z.string()).optional(),
  where: WhereSchema.optional(),
  orderBy: z.string().optional(),
  ascending: z.boolean().optional(),
  limit: z.number().int().positive().max(200).optional(),
});

const InsertInput = z.object({
  table: z.string(),
  values: z.record(z.string(), z.any()),
});

const UpdateInput = z.object({
  table: z.string(),
  where: WhereSchema,
  values: z.record(z.string(), z.any()),
});

const DeleteInput = z.object({
  table: z.string(),
  where: WhereSchema,
});

type JSONValue = any;

async function handleSelect(args: JSONValue) {
  const input = SelectInput.parse(args);
  if (!ALLOWED_TABLES.has(input.table)) throw new Error("table not allowed");
  const cols = input.columns?.length ? input.columns.join(",") : "*";
  let q = supabase.from(input.table).select(cols);
  if (input.where) {
    for (const [k, v] of Object.entries(input.where)) {
      q = q.eq(k, v as any);
    }
  }
  if (input.orderBy) q = q.order(input.orderBy, { ascending: input.ascending ?? true });
  if (input.limit) q = q.limit(input.limit);
  const { data, error } = await q;
  if (error) throw error;
  return data;
}

async function handleInsert(args: JSONValue) {
  const input = InsertInput.parse(args);
  if (!ALLOWED_TABLES.has(input.table)) throw new Error("table not allowed");
  const { data, error } = await supabase.from(input.table).insert(input.values).select("*");
  if (error) throw error;
  return data;
}

async function handleUpdate(args: JSONValue) {
  const input = UpdateInput.parse(args);
  if (!ALLOWED_TABLES.has(input.table)) throw new Error("table not allowed");
  let q = supabase.from(input.table).update(input.values);
  for (const [k, v] of Object.entries(input.where)) {
    q = q.eq(k, v as any);
  }
  const { data, error } = await q.select("*");
  if (error) throw error;
  return data;
}

async function handleDelete(args: JSONValue) {
  const input = DeleteInput.parse(args);
  if (!ALLOWED_TABLES.has(input.table)) throw new Error("table not allowed");
  let q = supabase.from(input.table).delete();
  for (const [k, v] of Object.entries(input.where)) {
    q = q.eq(k, v as any);
  }
  const { data, error } = await q.select("*");
  if (error) throw error;
  return data;
}

// JSON-RPC plumbing over stdio
process.stdin.setEncoding("utf8");
let buffer = "";

type Request = {
  jsonrpc: "2.0";
  id?: number | string | null;
  method: string;
  params?: any;
};

function reply(id: any, result: any) {
  const msg = JSON.stringify({ jsonrpc: "2.0", id, result });
  process.stdout.write(msg + "\n");
}

function replyError(id: any, message: string) {
  const msg = JSON.stringify({ jsonrpc: "2.0", id, error: { code: -32000, message } });
  process.stdout.write(msg + "\n");
}

function toolsList() {
  return {
    tools: [
      {
        name: "supabase_select",
        description: "Select rows from a whitelisted table with simple equality filters.",
        input_schema: SelectInput.safeParse({}).success
          ? SelectInput._def.openapi?.schema || SelectInputToJsonSchema()
          : SelectInputToJsonSchema(),
      },
      {
        name: "supabase_insert",
        description: "Insert a row into a whitelisted table.",
        input_schema: InsertInputToJsonSchema(),
      },
      {
        name: "supabase_update",
        description: "Update rows in a whitelisted table by equality filters.",
        input_schema: UpdateInputToJsonSchema(),
      },
      {
        name: "supabase_delete",
        description: "Delete rows in a whitelisted table by equality filters.",
        input_schema: DeleteInputToJsonSchema(),
      },
    ],
  };
}

// Minimal JSON schema emitters for zod (simple)
function SelectInputToJsonSchema() {
  return {
    type: "object",
    properties: {
      table: { type: "string" },
      columns: { type: "array", items: { type: "string" } },
      where: { type: "object", additionalProperties: true },
      orderBy: { type: "string" },
      ascending: { type: "boolean" },
      limit: { type: "integer", minimum: 1, maximum: 200 },
    },
    required: ["table"],
  } as const;
}
function InsertInputToJsonSchema() {
  return {
    type: "object",
    properties: {
      table: { type: "string" },
      values: { type: "object", additionalProperties: true },
    },
    required: ["table", "values"],
  } as const;
}
function UpdateInputToJsonSchema() {
  return {
    type: "object",
    properties: {
      table: { type: "string" },
      where: { type: "object", additionalProperties: true },
      values: { type: "object", additionalProperties: true },
    },
    required: ["table", "where", "values"],
  } as const;
}
function DeleteInputToJsonSchema() {
  return {
    type: "object",
    properties: {
      table: { type: "string" },
      where: { type: "object", additionalProperties: true },
    },
    required: ["table", "where"],
  } as const;
}

async function handleRequest(req: Request) {
  const { id, method, params } = req;
  try {
    if (method === "initialize") {
      return reply(id, { serverInfo: { name: "supabase-mcp", version: "0.1.0" } });
    }
    if (method === "ping") {
      return reply(id, {});
    }
    if (method === "tools/list") {
      return reply(id, toolsList());
    }
    if (method === "tools/call") {
      const name = params?.name as string;
      const args = params?.arguments;
      if (name === "supabase_select") {
        const data = await handleSelect(args);
        return reply(id, { content: [{ type: "text", text: JSON.stringify(data, null, 2) }] });
      }
      if (name === "supabase_insert") {
        const data = await handleInsert(args);
        return reply(id, { content: [{ type: "text", text: JSON.stringify(data, null, 2) }] });
      }
      if (name === "supabase_update") {
        const data = await handleUpdate(args);
        return reply(id, { content: [{ type: "text", text: JSON.stringify(data, null, 2) }] });
      }
      if (name === "supabase_delete") {
        const data = await handleDelete(args);
        return reply(id, { content: [{ type: "text", text: JSON.stringify(data, null, 2) }] });
      }
      throw new Error(`Unknown tool: ${name}`);
    }
    throw new Error(`Unknown method: ${method}`);
  } catch (e: any) {
    return replyError(id, e.message || String(e));
  }
}

process.stdin.on("data", (chunk) => {
  buffer += chunk;
  let index: number;
  while ((index = buffer.indexOf("\n")) >= 0) {
    const line = buffer.slice(0, index).trim();
    buffer = buffer.slice(index + 1);
    if (!line) continue;
    try {
      const req = JSON.parse(line) as Request;
      handleRequest(req);
    } catch (err) {
      // best-effort error report
      process.stdout.write(
        JSON.stringify({ jsonrpc: "2.0", id: null, error: { code: -32700, message: "Parse error" } }) + "\n"
      );
    }
  }
});

process.stdin.on("end", () => process.exit(0));

