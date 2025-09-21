import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation - MCP Directory Setup Guide",
  description: "Complete setup instructions for Model Context Protocol configurations across all major development environments including VS Code, Cursor, Windsurf, Claude Code, and more.",
  keywords: "MCP setup, VS Code MCP, Cursor MCP, Windsurf MCP, Claude Code MCP, Gemini CLI MCP, installation guide, development tools",
  openGraph: {
    title: "Documentation - MCP Directory Setup Guide",
    description: "Complete setup instructions for Model Context Protocol configurations across all major development environments",
    type: "website",
    url: "https://mcpdirectory.app/docs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Documentation - MCP Directory Setup Guide",
    description: "Complete setup instructions for Model Context Protocol configurations across all major development environments",
  },
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}