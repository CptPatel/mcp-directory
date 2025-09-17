# MCP Configs — Kiro / Editors

This folder contains example configs for MCP clients to launch your local Supabase MCP server.

Two options:

1) Use the custom server in this repo (quick start)
   - Path: `servers/supabase-mcp`
   - Pros: Already wired for your schema; read/write tools; easy to edit
   - Cons: Not the official package
   - Config examples:
     - `KIRO.example.json`
     - `VS_CODE.settings.example.json`

2) Use the official Supabase MCP server (recommended long‑term)
   - Repo: https://github.com/supabase-community/supabase-mcp
   - Clone locally into: `servers/supabase-mcp-official` (this path is gitignored)
   - Pros: Maintained by Supabase community; aligns with docs
   - Cons: Separate repo to clone
   - Add a config like `KIRO.example.json` but with `cwd` set to `./servers/supabase-mcp-official` and the official start script.

Security
- Read/write uses the Supabase Service Role key. Keep servers local only.
- For read‑only, set `SUPABASE_ANON_KEY` and remove the service role key.
- `.gitignore` ignores the official clone and local env files.

