import { spawn } from "node:child_process";

type RpcReq = { jsonrpc: "2.0"; id: number; method: string; params?: any };
type RpcRes = { jsonrpc: "2.0"; id: number | null; result?: any; error?: any };

async function main() {
  const child = spawn(process.platform === "win32" ? "npm.cmd" : "npm", ["run", "dev"], {
    cwd: process.cwd(),
    stdio: ["pipe", "pipe", "inherit"],
    env: process.env,
  });

  const send = (msg: RpcReq) => child.stdin.write(JSON.stringify(msg) + "\n");

  const responses = new Map<number, (res: RpcRes) => void>();
  let buf = "";
  child.stdout.setEncoding("utf8");
  child.stdout.on("data", (chunk) => {
    buf += chunk;
    let idx;
    while ((idx = buf.indexOf("\n")) >= 0) {
      const line = buf.slice(0, idx).trim();
      buf = buf.slice(idx + 1);
      if (!line) continue;
      try {
        const res: RpcRes = JSON.parse(line);
        const cb = responses.get((res.id as number) || -1);
        if (cb) cb(res);
      } catch (e) {
        console.error("Parse error:", line);
      }
    }
  });

  const call = (id: number, method: string, params?: any) =>
    new Promise<RpcRes>((resolve) => {
      responses.set(id, (res) => resolve(res));
      send({ jsonrpc: "2.0", id, method, params });
    });

  await call(1, "initialize", {});
  await call(2, "tools/list", {});

  // Insert a post
  const postTitle = `MCP Test ${Date.now()}`;
  const ins = await call(3, "tools/call", {
    name: "supabase_insert",
    arguments: {
      table: "community_posts",
      values: { user_id: "user_mcp_local", title: postTitle, content: "Hello from MCP server test" },
    },
  });
  const insertedText = ins.result?.content?.[0]?.text || "[]";
  const inserted = JSON.parse(insertedText)[0];
  console.log("inserted:", inserted);

  // Update the post
  const upd = await call(4, "tools/call", {
    name: "supabase_update",
    arguments: {
      table: "community_posts",
      where: { id: inserted.id },
      values: { content: "Updated content" },
    },
  });
  console.log("updated:", upd.result?.content?.[0]?.text);

  // Delete the post
  const del = await call(5, "tools/call", {
    name: "supabase_delete",
    arguments: {
      table: "community_posts",
      where: { id: inserted.id },
    },
  });
  console.log("deleted:", del.result?.content?.[0]?.text);

  child.kill();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
