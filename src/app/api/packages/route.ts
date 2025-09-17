import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/admin";

export async function GET() {
  try {
    const { userId } = await auth();
    if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { data, error } = await supabaseAdmin
      .from("packages")
      .select("id, name, description, updated_at:updated_at, created_at")
      .eq("user_id", userId)
      .order("updated_at", { ascending: false });
    if (error) throw error;

    // shape for UI
    const packages = (data || []).map((p: any) => ({
      id: p.id,
      name: p.name,
      description: p.description,
      lastModified: p.updated_at || p.created_at,
      mcps: [] as any[], // client will fetch details if needed
    }));

    return NextResponse.json({ packages }, { headers: { "Cache-Control": "no-store" } });
  } catch (e: any) {
    console.error("GET /api/packages", e);
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { userId } = await auth();
    if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const body = await req.json();
    const name: string = body?.name || "My MCP Package";
    const description: string = body?.description || "Custom MCP bundle";
    const items: Array<{ id: number; position?: number }> = Array.isArray(body?.mcps) ? body.mcps : [];

    // Ensure user row exists
    await supabaseAdmin.from("users").upsert({ id: userId }, { onConflict: "id" });

    // Create package
    const { data: pkgData, error: pkgErr } = await supabaseAdmin
      .from("packages")
      .insert({ user_id: userId, name, description })
      .select("id")
      .single();
    if (pkgErr) throw pkgErr;

    const packageId = pkgData?.id;

    // Insert items if provided
    if (packageId && items.length > 0) {
      const rows = items.map((it, idx) => ({ package_id: packageId, mcp_id: it.id, position: it.position ?? idx }));
      const { error: itemsErr } = await supabaseAdmin.from("package_items").insert(rows);
      if (itemsErr) throw itemsErr;
    }

    return NextResponse.json({ id: packageId }, { status: 201, headers: { "Cache-Control": "no-store" } });
  } catch (e: any) {
    console.error("POST /api/packages", e);
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}

