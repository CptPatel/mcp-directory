import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search } from "@/components/docs/Search";
import { Breadcrumbs } from "@/components/docs/Breadcrumbs";
import { CATEGORY_LABELS, DocCategory, getDocsByCategory } from "@/content/docs/manifest";
import {
  ArrowRight,
  Bug,
  Cloud,
  Code2,
  Compass,
  Server,
  Terminal,
  TimerReset,
} from "lucide-react";

export const metadata: Metadata = {
  title: "MCP Documentation - Complete Guide to Model Context Protocol",
  description:
    "Comprehensive documentation for Model Context Protocol. Learn to install, configure, and deploy MCP servers across IDEs, CLIs, and cloud platforms.",
  keywords:
    "MCP documentation, Model Context Protocol guide, MCP setup, MCP installation, MCP deployment, AI development",
  alternates: {
    canonical: "https://mcpdirectory.app/docs",
  },
  openGraph: {
    title: "MCP Documentation - Complete Guide to Model Context Protocol",
    description:
      "Comprehensive documentation for Model Context Protocol setup, deployment, and troubleshooting.",
    url: "https://mcpdirectory.app/docs",
    siteName: "MCP Directory",
  },
  twitter: {
    card: "summary_large_image",
    title: "MCP Documentation - Complete Guide to Model Context Protocol",
    description:
      "Comprehensive documentation for Model Context Protocol setup, deployment, and troubleshooting.",
    site: "@mcpdirectory",
  },
};

const categoryIcons: Record<DocCategory, React.ComponentType<{ className?: string }>> = {
  cli: Terminal,
  ide: Code2,
  deploy: Server,
  testing: Bug,
};

const quickLinkIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  'Deployment & Ops': Cloud,
  'Testing & Debugging': Bug,
  'CLI Tools': Terminal,
  IDEs: Code2,
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

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
});

function formatDate(value: string) {
  return dateFormatter.format(new Date(value));
}

export default function DocsPage() {
  const docsByCategory = getDocsByCategory();

  return (
    <div>
      <Breadcrumbs />

      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">MCP Documentation</h1>
        <p className="text-xl text-muted-foreground mb-6 max-w-3xl dark:text-slate-200">
          Complete guides for installing, configuring, and deploying Model Context Protocol servers across different environments and platforms.
        </p>

        <div className="max-w-md">
          <Search />
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3" data-toc-ignore>
          Quick Links
        </h2>
        <p className="text-muted-foreground mb-5 max-w-3xl dark:text-slate-300">
          Jump straight into our most requested Model Context Protocol guides across deployment, debugging, CLI tooling, and IDE integrations.
        </p>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {quickLinkGroups.map((group) => {
            const Icon = quickLinkIcons[group.title] ?? Compass;
            return (
              <Card key={group.title} className="h-full">
                <CardHeader className="pb-3 space-y-2">
                  <div className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                    <Icon className="h-4 w-4" aria-hidden />
                    <span>{group.title}</span>
                  </div>
                  <CardDescription className="text-muted-foreground dark:text-slate-300">
                    {group.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <ul className="space-y-2 text-sm">
                    {group.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="inline-flex items-center gap-1 text-primary hover:underline"
                        >
                          {link.title}
                          <ArrowRight className="h-3 w-3" aria-hidden />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <div className="space-y-10">
        {Object.entries(docsByCategory).map(([category, docs]) => {
          const Icon = categoryIcons[category as DocCategory];
          const label = CATEGORY_LABELS[category as DocCategory];
          const sortedDocs = [...docs].sort((a, b) => a.title.localeCompare(b.title));
          return (
            <section key={category}>
              <div className="mb-4 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" aria-hidden />
                </div>
                <h2 className="text-2xl font-bold" data-toc-ignore>
                  {label}
                </h2>
                <Badge variant="secondary">{sortedDocs.length} guides</Badge>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {sortedDocs.map((doc) => (
                  <Card key={doc.slug} className="flex h-full flex-col border-border/70 hover:border-primary/40 transition-colors">
                    <CardHeader className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Badge variant="outline" className="bg-background/80 dark:bg-background/40">
                          {doc.version}
                        </Badge>
                        <span className="inline-flex items-center gap-1 text-muted-foreground">
                          <TimerReset className="h-4 w-4" aria-hidden />
                          {doc.readingTimeMinutes} min read
                        </span>
                      </div>
                      <CardTitle className="text-xl leading-snug">
                        <Link href={doc.path} className="hover:text-primary transition-colors">
                          {doc.title}
                        </Link>
                      </CardTitle>
                      <CardDescription className="line-clamp-3 text-muted-foreground dark:text-slate-300">
                        {doc.description}
                      </CardDescription>
                      <div className="flex flex-wrap gap-2">
                        {doc.tags.slice(0, 4).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs font-normal">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardHeader>
                    <CardFooter className="mt-auto flex items-center justify-between text-sm text-muted-foreground dark:text-slate-300">
                      <span>Updated {formatDate(doc.updatedAt)}</span>
                      <Link
                        href={doc.path}
                        className="inline-flex items-center gap-1 text-primary hover:underline"
                      >
                        Read guide
                        <ArrowRight className="h-3 w-3" aria-hidden />
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <div className="mt-12 rounded-xl border bg-muted/50 p-6">
        <h3 className="text-lg font-semibold mb-2">Need help?</h3>
        <p className="text-muted-foreground mb-4 max-w-2xl dark:text-slate-300">
          Can't find what you're looking for? Check out our community resources or contribute to the documentation.
        </p>
        <div className="flex flex-wrap gap-4 text-sm">
          <Link href="/community" className="text-primary hover:underline">
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
