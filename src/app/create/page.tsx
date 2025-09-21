import type { Metadata } from "next";
import CreateClient from "./CreateClient";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Create Custom MCP Server with AI | MCP Directory",
  description: "Create custom Model Context Protocol servers in minutes using AI. Generate TypeScript and Python MCP servers with natural language descriptions.",
  keywords: "create custom MCP, MCP server generator, AI MCP creator, Model Context Protocol development, custom MCP server, MCP AI generator",
  openGraph: {
    title: "Create Custom MCP Server with AI",
    description: "Generate custom Model Context Protocol servers in minutes using AI",
    type: "website",
    url: "https://mcpdirectory.app/create",
    siteName: "MCP Directory",
  },
  twitter: {
    card: "summary_large_image",
    title: "Create Custom MCP Server with AI",
    description: "Generate custom Model Context Protocol servers in minutes using AI",
    site: "@mcpdirectory",
  },
  alternates: {
    canonical: "https://mcpdirectory.app/create",
  },
};

export default function CreatePage() {
  return <CreateClient />;
}
