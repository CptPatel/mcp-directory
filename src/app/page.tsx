import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "MCP Directory - Create Custom Model Context Protocols with AI",
  description: "Create custom MCP servers in minutes with AI, browse 2,500+ verified Model Context Protocols, and deploy one-click installations. The ultimate MCP Directory for developers.",
  keywords: "Model Context Protocol, MCP Directory, create custom MCP, MCP servers, AI development tools, Claude MCP, VS Code MCP, MCP creator",
  openGraph: {
    title: "MCP Directory - Create Custom Model Context Protocols with AI",
    description: "Create custom MCP servers in minutes with AI, browse 2,500+ verified Model Context Protocols, and deploy one-click installations.",
    type: "website",
    url: "https://mcpdirectory.app",
    siteName: "MCP Directory",
  },
  twitter: {
    card: "summary_large_image",
    title: "MCP Directory - Create Custom Model Context Protocols with AI",
    description: "Create custom MCP servers in minutes with AI, browse 2,500+ verified Model Context Protocols.",
    site: "@mcpdirectory",
  },
  alternates: {
    canonical: "https://mcpdirectory.app",
  },
};

export default function Page() {
  return <HomeClient />;
}