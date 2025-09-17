import { spawn } from "node:child_process";

type RpcReq = { jsonrpc: "2.0"; id: number; method: string; params?: any };
type RpcRes = { jsonrpc: "2.0"; id: number | null; result?: any; error?: any };

async function main() {
  const child = spawn(process.platform === "win32" ? "npx.cmd" : "npx", ["tsx", "src/index.ts"], {
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
  const list = await call(2, "tools/list", {});
  console.log("tools:", list.result?.tools?.map((t: any) => t.name));

  const sel = await call(3, "tools/call", {
    name: "supabase_select",
    arguments: {
      table: "mcps",
      columns: ["id", "name", "category", "rating", "downloads"],
      orderBy: "id",
      ascending: false,
      limit: 1,
    },
  });
  const payload = sel.result?.content?.[0]?.text || "";
  console.log("select result:", payload);

  child.kill();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

