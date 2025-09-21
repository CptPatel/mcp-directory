import CommunityClient from "./CommunityClient";
import type { Metadata } from "next";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "MCP Community - Join 12,000+ Developers | MCP Directory",
  description: "Join the thriving MCP community with 12,000+ developers. Share knowledge, contribute MCPs, get support, and collaborate on Model Context Protocol projects.",
  keywords: "MCP community, Model Context Protocol community, developer community, MCP support, MCP contributors, Discord community",
  openGraph: {
    title: "MCP Community - Join 12,000+ Developers",
    description: "Join the thriving MCP community with 12,000+ developers sharing knowledge and building together",
    type: "website",
    url: "https://mcpdirectory.app/community",
  },
  twitter: {
    card: "summary_large_image",
    title: "MCP Community - Join 12,000+ Developers",
    description: "Join the thriving MCP community with 12,000+ developers sharing knowledge and building together",
  },
};

export default function Page() {
  return <CommunityClient />;
}