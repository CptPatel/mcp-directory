import PackagesClient from "./PackagesClient";
import type { Metadata } from "next";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Package Builder - Create Custom MCP Bundles | MCP Directory",
  description: "Build custom MCP packages with our intuitive package builder. Bundle multiple Model Context Protocols for one-click installation across your development environment.",
  keywords: "MCP package builder, custom MCP bundles, MCP installation, package manager, Model Context Protocol packages, one-click install",
  openGraph: {
    title: "Package Builder - Create Custom MCP Bundles",
    description: "Build custom MCP packages with our intuitive package builder",
    type: "website",
    url: "https://mcp-directory.com/packages",
  },
  twitter: {
    card: "summary_large_image",
    title: "Package Builder - Create Custom MCP Bundles",
    description: "Build custom MCP packages with our intuitive package builder",
  },
};

export default function PackagesPage() {
  return <PackagesClient />;
}