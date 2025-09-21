import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search } from "@/components/docs/Search";
import { Breadcrumbs } from "@/components/docs/Breadcrumbs";
import { CATEGORY_LABELS, getDocsByCategory } from "@/content/docs/manifest";
import { FileText, Terminal, Code, Server, Bug, ArrowRight } from "lucide-react";

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


const quickLinkGroups = [
  {
    title: 'Deployment & Ops',
    description: 'Deploy MCP servers across containers, serverless, and CI/CD tooling.',
    links: [
      { title: 'Running MCP Servers in Docker', href: '/docs/docker-deployment' },
      { title: 'Deploying MCP Servers on Kubernetes Clusters', href: '/docs/kubernetes' },
      { title: 'Serverless MCP Deployment on Vercel', href: '/docs/vercel-deployment' },
      { title: 'Deploying MCPs on AWS Lambda', href: '/docs/aws-lambda' },
      { title: 'Automating MCP Workflows with GitHub Actions', href: '/docs/github-actions' },
      { title: 'Connecting to Remote MCP Servers', href: '/docs/remote-mcp' },
    ],
  },
  {
    title: 'Testing & Debugging',
    description: 'Troubleshoot MCP connectivity, auth, and runtime reliability.',
    links: [
      { title: 'Debugging & Testing MCPs with MCP Inspector', href: '/docs/testing-mcp' },
      { title: '10 Most Common MCP Setup Errors (and Fixes)', href: '/docs/common-errors' },
      { title: 'Fixing MCP Server Connection Refused', href: '/docs/connection-refused' },
      { title: 'MCP Authentication & API Key Fixes', href: '/docs/authentication-errors' },
      { title: 'Fixing MCP Deployment Issues in Docker/Vercel', href: '/docs/deployment-errors' },
      { title: "Why MCPs Don't Show Up in Claude Desktop", href: '/docs/mcp-not-showing' },
    ],
  },
  {
    title: 'CLI Tools',
    description: 'Spin up MCP tooling inside command-line workflows.',
    links: [
      { title: 'How to Install and Use MCPs with Codex CLI', href: '/docs/codex-cli-installation' },
      { title: 'Getting Started with MCPs in Gemini CLI', href: '/docs/gemini-cli-setup' },
      { title: 'Running MCPs with Claude CLI (Examples + Troubleshooting)', href: '/docs/claude-cli' },
      { title: 'Using MCPs in Terminal (Universal CLI Setup)', href: '/docs/terminal-cli' },
    ],
  },
  {
    title: 'IDEs',
    description: 'Integrate MCP servers with AI-powered editors.',
    links: [
      { title: 'How to Install and Use MCPs in Cursor IDE', href: '/docs/cursor-setup' },
      { title: 'Running MCPs in Windsurf IDE', href: '/docs/windsurf-setup' },
      { title: 'MCPs in VSCode - Complete Setup Guide', href: '/docs/vscode-integration' },
      { title: 'MCP Setup in JetBrains IDEs (PyCharm, IntelliJ, WebStorm)', href: '/docs/jetbrains-integration' },
      { title: 'Connecting MCPs in Claude Desktop (Mac & Windows)', href: '/docs/claude-desktop' },
    ],
  },
];

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


<section className="mb-10">
  <h2 className="text-2xl font-semibold mb-3">Quick Links</h2>
  <p className="text-muted-foreground mb-5 max-w-3xl">Jump straight into our most requested Model Context Protocol guides across deployment, debugging, CLI tooling, and IDE integrations.</p>
  <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
    {quickLinkGroups.map((group) => (
      <Card key={group.title} className="h-full">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg" data-toc-ignore>{group.title}</CardTitle>
          <CardDescription>{group.description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <ul className="space-y-2 text-sm">
            {group.links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="inline-flex items-center gap-1 text-primary hover:underline">
                  {link.title}
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    ))}
  </div>
</section>

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