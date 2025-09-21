import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search } from "@/components/docs/Search";
import { Breadcrumbs } from "@/components/docs/Breadcrumbs";
import { CATEGORY_LABELS, getDocsByCategory } from "@/content/docs/manifest";
import { FileText, Terminal, Code, Server, Bug } from "lucide-react";

export const metadata: Metadata = {
  title: "MCP Documentation - Complete Guide to Model Context Protocol",
  description: "Comprehensive documentation for Model Context Protocol. Learn to install, configure, and deploy MCP servers across IDEs, CLIs, and cloud platforms.",
  keywords: "MCP documentation, Model Context Protocol guide, MCP setup, MCP installation, MCP deployment, AI development",
  alternates: {
    canonical: "https://mcpdirectory.app/docs",
  },
  openGraph: {
    title: "MCP Documentation - Complete Guide to Model Context Protocol",
    description: "Comprehensive documentation for Model Context Protocol setup, deployment, and troubleshooting.",
    url: "https://mcpdirectory.app/docs",
    siteName: "MCP Directory",
  },
  twitter: {
    card: "summary_large_image",
    title: "MCP Documentation - Complete Guide to Model Context Protocol",
    description: "Comprehensive documentation for Model Context Protocol setup, deployment, and troubleshooting.",
    site: "@mcpdirectory",
  },
};

const categoryIcons = {
  cli: Terminal,
  ide: Code,
  deploy: Server,
  testing: Bug,
};

export default function DocsPage() {
  const docsByCategory = getDocsByCategory();

  return (
    <div>
      <Breadcrumbs />
      
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">MCP Documentation</h1>
        <p className="text-xl text-muted-foreground mb-6 max-w-3xl">
          Complete guides for installing, configuring, and deploying Model Context Protocol servers 
          across different environments and platforms.
        </p>
        
        <div className="max-w-md">
          <Search />
        </div>
      </div>

      <div className="grid gap-8">
        {Object.entries(docsByCategory).map(([category, docs]) => {
          const Icon = categoryIcons[category as keyof typeof categoryIcons];
          return (
            <section key={category}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">
                  {CATEGORY_LABELS[category as keyof typeof CATEGORY_LABELS]}
                </h2>
                <Badge variant="secondary">{docs.length} guides</Badge>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {docs.map((doc) => (
                  <Card key={doc.slug} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">
                        <Link 
                          href={doc.path}
                          className="hover:text-primary transition-colors"
                        >
                          {doc.title}
                        </Link>
                      </CardTitle>
                      <CardDescription className="line-clamp-2">
                        {doc.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>Updated {new Date(doc.updatedAt).toLocaleDateString()}</span>
                        <Link 
                          href={doc.path}
                          className="text-primary hover:underline"
                        >
                          Read guide →
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <div className="mt-12 p-6 bg-muted/50 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Need help?</h3>
        <p className="text-muted-foreground mb-4">
          Can't find what you're looking for? Check out our community resources or contribute to the documentation.
        </p>
        <div className="flex gap-4">
          <Link 
            href="/community" 
            className="text-primary hover:underline"
          >
            Join Community
          </Link>
          <Link 
            href="https://github.com/modelcontextprotocol/docs" 
            className="text-primary hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Edit on GitHub
          </Link>
        </div>
      </div>
    </div>
  );
}