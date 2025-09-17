# Supabase MCP Server (local)

A minimal JSON-RPC server over stdio exposing safe tools to read/write Supabase tables. Intended for local MCP-enabled tools (e.g., Claude Code). Keep this server local; do not expose it publicly.

## Features
- Tools
  - `supabase_select` — select rows with simple equality filters and row limit (max 200)
  - `supabase_insert` — insert a row into allowed tables
  - `supabase_update` — update rows by equality filters
  - `supabase_delete` — delete rows by equality filters
- Table whitelist: `mcps`, `packages`, `package_items`, `community_posts`, `community_comments`, `blog_posts`
- Uses `SUPABASE_SERVICE_ROLE_KEY` (or `SUPABASE_ANON_KEY` for read-only)

## Setup

1) Install deps
```
cd servers/supabase-mcp
npm install
```

2) Env
```
cp .env.example .env.local
# Fill in SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY
# Optional: restrict writes to only these tables (default shown)
# SUPABASE_MCP_WRITE_TABLES=community_posts,community_comments
```

3) Run
```
npm run dev
```

The server reads JSON-RPC 2.0 on stdin and writes responses to stdout.

## VS Code MCP example

Add to your `settings.json`:
```json
{
  "mcp.servers": {
    "supabase": {
      "command": "npm",
      "args": ["run", "dev"],
      "cwd": "./servers/supabase-mcp",
      "env": {
        "SUPABASE_URL": "${env:NEXT_PUBLIC_SUPABASE_URL}",
        "SUPABASE_SERVICE_ROLE_KEY": "${env:SUPABASE_SERVICE_ROLE_KEY}"
      }
    }
  }
}
```

## Example tool calls

- Select top MCPs
```
{
  "jsonrpc":"2.0",
  "id":1,
  "method":"tools/call",
  "params":{
    "name":"supabase_select",
    "arguments":{
      "table":"mcps",
      "columns":["id","name","rating","downloads"],
      "orderBy":"rating",
      "ascending":false,
      "limit":10
    }
  }
}
```

- Insert a community post
```
{
  "jsonrpc":"2.0",
  "id":2,
  "method":"tools/call",
  "params":{
    "name":"supabase_insert",
    "arguments":{
      "table":"community_posts",
      "values":{
        "user_id":"user_123",
        "title":"Hello MCP",
        "content":"First post"
      }
    }
  }
}
```

## Notes
- This server trusts the Service Role key. Keep it local. If you want to expose it, add auth and finer-grained allowlists.
- To make it read-only, set only `SUPABASE_URL` and `SUPABASE_ANON_KEY`.
- Update the whitelist (`ALLOWED_TABLES`) in `src/index.ts` as needed.
