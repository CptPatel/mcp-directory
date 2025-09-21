import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import DashboardClient from "./DashboardClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - MCP Directory",
  description: "Manage your MCPs, packages, and AI creations in your personal dashboard.",
  alternates: {
    canonical: "https://mcpdirectory.app/dashboard",
  },
};

export default async function DashboardPage() {
  const { userId } = await auth();
  
  if (!userId) {
    redirect("/");
  }

  return <DashboardClient />;
}