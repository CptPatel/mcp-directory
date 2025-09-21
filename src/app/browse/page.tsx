import BrowseClient from "./BrowseClient";
import type { Metadata } from "next";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Browse MCPs - 1,200+ Verified Model Context Protocols | MCP Directory",
  description: "Discover and browse over 1,200 verified Model Context Protocol configurations. Find MCPs for development, databases, communication, cloud services, and more.",
  keywords: "browse MCPs, Model Context Protocol directory, MCP catalog, development tools, database MCPs, communication MCPs, verified MCPs",
  openGraph: {
    title: "Browse MCPs - 1,200+ Verified Model Context Protocols",
    description: "Discover and browse over 1,200 verified Model Context Protocol configurations",
    type: "website",
    url: "https://mcpdirectory.app/browse",
  },
  twitter: {
    card: "summary_large_image",
    title: "Browse MCPs - 1,200+ Verified Model Context Protocols",
    description: "Discover and browse over 1,200 verified Model Context Protocol configurations",
  },
};

export default function BrowsePage() {
  return <BrowseClient />;
}