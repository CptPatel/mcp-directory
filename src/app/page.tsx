import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "MCP Directory - Create Custom Model Context Protocols with AI",
  description: "Create custom MCP servers in minutes with AI, browse 2,500+ verified Model Context Protocols, and deploy one-click installations with ready-to-use scripts. Learn best practices from step-by-step Model Context Protocol tutorials in the MCP blog and stay ahead with fresh workflow guides.",
  keywords: "Model Context Protocol, MCP Directory, create custom MCP, MCP servers, AI development tools, Claude MCP, VS Code MCP, MCP creator, Model Context Protocol tutorials, MCP blog, MCP guides, AI workflow automation",
  openGraph: {
    title: "MCP Directory - Create Custom Model Context Protocols with AI",
    description: "Create custom MCP servers in minutes with AI, browse 2,500+ verified Model Context Protocols, deploy one-click installations, and master the workflow with tutorials from the MCP blog.",
    type: "website",
    url: "https://mcpdirectory.app",
    siteName: "MCP Directory",
  },
  twitter: {
    card: "summary_large_image",
    title: "MCP Directory - Create Custom Model Context Protocols with AI",
    description: "Create custom MCP servers in minutes, browse 2,500+ verified Model Context Protocols, and learn from our MCP tutorial library.",
    site: "@mcpdirectory",
  },
  alternates: {
    canonical: "https://mcpdirectory.app",
  },
};

export default function Page() {
  return <HomeClient />;
}