import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/admin";

export async function DELETE(_: Request, { params }: { params: { id: string; mcpId: string } }) {
  try {
    const { userId } = await auth();
    if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    const id = params.id;
    const mcpId = Number(params.mcpId);
    if (!Number.isFinite(mcpId)) return NextResponse.json({ error: "Invalid mcpId" }, { status: 400 });

    const { data: pkg, error: pkgErr } = await supabaseAdmin
      .from("packages")
      .select("id, user_id")
      .eq("id", id)
      .single();
    if (pkgErr || !pkg) return NextResponse.json({ error: "Not found" }, { status: 404 });
    if (pkg.user_id !== userId) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

    const { error: delErr } = await supabaseAdmin
      .from("package_items")
      .delete()
      .eq("package_id", id)
      .eq("mcp_id", mcpId);
    if (delErr) throw delErr;

    // bump updated_at
    await supabaseAdmin.from("packages").update({ updated_at: new Date().toISOString() }).eq("id", id);

    return NextResponse.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });
  } catch (e: any) {
    console.error("DELETE /api/packages/[id]/items/[mcpId]", e);
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}

