import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI MCP Creator - Generate Custom MCPs with AI | MCP Directory",
  description: "Create custom Model Context Protocol configurations using natural language. Our AI-powered tool generates production-ready MCP code tailored to your specific requirements in minutes.",
  keywords: "AI MCP creator, generate MCP, custom MCP, AI code generation, Model Context Protocol, OpenRouter, GPT-4, Claude-3, natural language programming",
  openGraph: {
    title: "AI MCP Creator - Generate Custom MCPs with AI",
    description: "Create custom Model Context Protocol configurations using natural language and AI",
    type: "website",
    url: "https://mcpdirectory.app/create",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI MCP Creator - Generate Custom MCPs with AI",
    description: "Create custom Model Context Protocol configurations using natural language and AI",
  },
};

export default function CreateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}