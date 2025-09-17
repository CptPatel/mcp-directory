import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/admin";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  try {
    const { userId } = await auth();
    if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    const id = params.id;

    // Ensure ownership
    const { data: pkg, error: pkgErr } = await supabaseAdmin
      .from("packages")
      .select("id, user_id, name, description, updated_at")
      .eq("id", id)
      .single();
    if (pkgErr) return NextResponse.json({ error: "Not found" }, { status: 404 });
    if (pkg.user_id !== userId) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

    // Join items
    const { data: items, error: itemsErr } = await supabaseAdmin
      .from("package_items")
      .select("mcp:mcps(id, name, description, category, tags, author, size, install_command, rating, downloads, last_updated), position")
      .eq("package_id", id)
      .order("position", { ascending: true });
    if (itemsErr) throw itemsErr;

    const mcps = (items || []).map((row: any) => ({
      id: row.mcp.id,
      name: row.mcp.name,
      description: row.mcp.description,
      category: row.mcp.category,
      tags: row.mcp.tags || [],
      author: row.mcp.author,
      size: row.mcp.size,
      installCommand: row.mcp.install_command,
      rating: row.mcp.rating,
      downloads: row.mcp.downloads,
      lastUpdated: row.mcp.last_updated,
    }));

    return NextResponse.json({ id: pkg.id, name: pkg.name, description: pkg.description, lastModified: pkg.updated_at, mcps }, { headers: { "Cache-Control": "no-store" } });
  } catch (e: any) {
    console.error("GET /api/packages/[id]", e);
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    const { userId } = await auth();
    if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    const id = params.id;
    const body = await req.json();
    const name: string | undefined = body?.name;
    const description: string | undefined = body?.description;

    // Ensure ownership
    const { data: pkg, error: pkgErr } = await supabaseAdmin
      .from("packages")
      .select("id, user_id")
      .eq("id", id)
      .single();
    if (pkgErr || !pkg) return NextResponse.json({ error: "Not found" }, { status: 404 });
    if (pkg.user_id !== userId) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

    const updates: any = {};
    if (typeof name === "string") updates.name = name;
    if (typeof description === "string") updates.description = description;
    updates.updated_at = new Date().toISOString();

    const { error: updErr } = await supabaseAdmin
      .from("packages")
      .update(updates)
      .eq("id", id);
    if (updErr) throw updErr;

    return NextResponse.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });
  } catch (e: any) {
    console.error("PUT /api/packages/[id]", e);
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  try {
    const { userId } = await auth();
    if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    const id = params.id;

    const { data: pkg, error: pkgErr } = await supabaseAdmin
      .from("packages")
      .select("id, user_id")
      .eq("id", id)
      .single();
    if (pkgErr || !pkg) return NextResponse.json({ error: "Not found" }, { status: 404 });
    if (pkg.user_id !== userId) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

    const { error: delErr } = await supabaseAdmin
      .from("packages")
      .delete()
      .eq("id", id);
    if (delErr) throw delErr;

    return NextResponse.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });
  } catch (e: any) {
    console.error("DELETE /api/packages/[id]", e);
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}

