import BrowseClient from "./BrowseClient";
import type { Metadata } from "next";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Browse MCPs - 2,500+ Verified Model Context Protocols | MCP Directory",
  description: "Discover and browse over 2,500 verified Model Context Protocol configurations. Find MCPs for development, databases, communication, cloud services, and more.",
  keywords: "browse MCPs, Model Context Protocol directory, MCP catalog, development tools, database MCPs, communication MCPs, verified MCPs",
  openGraph: {
    title: "Browse MCPs - 2,500+ Verified Model Context Protocols",
    description: "Discover and browse over 2,500 verified Model Context Protocol configurations",
    type: "website",
    url: "https://mcpdirectory.app/browse",
    siteName: "MCP Directory",
  },
  twitter: {
    card: "summary_large_image",
    title: "Browse MCPs - 2,500+ Verified Model Context Protocols",
    description: "Discover and browse over 2,500 verified Model Context Protocol configurations",
    site: "@mcpdirectory",
  },
  alternates: {
    canonical: "https://mcpdirectory.app/browse",
  },
};

export default function BrowsePage() {
  return <BrowseClient />;
}