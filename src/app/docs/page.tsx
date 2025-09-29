import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, ArrowRight, Search, Zap, Code, Settings, Bug } from "lucide-react";
import { DOCS, CATEGORY_LABELS, getDocsByCategory } from "@/content/docs/manifest";

export const metadata: Metadata = {
  title: "MCP Documentation - Complete Model Context Protocol Setup Guide | MCP Directory",
  description: "Complete documentation for Model Context Protocol setup. Learn to install MCPs in Cursor, VS Code, Claude Desktop, and deploy with Docker. Troubleshoot common errors with step-by-step guides.",
  keywords: "Model Context Protocol documentation, MCP setup guide, install MCP Cursor, MCP VS Code, Claude Desktop MCP, MCP Docker deployment, MCP troubleshooting, MCP CLI setup, MCP server configuration",
  openGraph: {
    title: "MCP Documentation - Complete Setup & Deployment Guide",
    description: "Master Model Context Protocol with our comprehensive documentation. Setup guides for all IDEs, deployment options, and troubleshooting solutions.",
    type: "website",
    url: "https://mcpdirectory.app/docs",
    siteName: "MCP Directory",
  },
  twitter: {
    card: "summary_large_image",
    title: "MCP Documentation - Complete Setup & Deployment Guide",
    description: "Master Model Context Protocol with comprehensive setup guides for all IDEs and deployment platforms.",
    site: "@mcpdirectory",
  },
  alternates: {
    canonical: "https://mcpdirectory.app/docs",
  },
};

const categoryIcons = {
  cli: Code,
  ide: Settings,
  deploy: Zap,
  testing: Bug,
};

const categoryDescriptions = {
  cli: "Command-line tools and terminal setup guides for MCP servers",
  ide: "IDE integrations for Cursor, VS Code, Claude Desktop, and more",
  deploy: "Production deployment guides for Docker, Kubernetes, and serverless",
  testing: "Debugging tools and troubleshooting common MCP issues",
};

export default function DocsPage() {
  const docsByCategory = getDocsByCategory();
  const totalDocs = DOCS.length;
  const totalReadTime = DOCS.reduce((acc, doc) => acc + doc.readingTimeMinutes, 0);

  return (
    <div className="container px-4 py-8 mx-auto max-w-6xl">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Model Context Protocol Documentation
        </h1>
        <p className="text-xl text-muted-foreground mb-6 max-w-4xl mx-auto">
          Complete setup guides for Model Context Protocol servers. Learn to install MCPs in any IDE, 
          deploy to production, and troubleshoot common issues with our comprehensive documentation.
        </p>
        <div className="flex justify-center gap-4 flex-wrap mb-8">
          <Badge variant="secondary" className="text-sm">
            <BookOpen className="h-4 w-4 mr-1" />
            {totalDocs} Guides
          </Badge>
          <Badge variant="secondary" className="text-sm">
            <Clock className="h-4 w-4 mr-1" />
            {totalReadTime} min total
          </Badge>
          <Badge variant="secondary" className="text-sm">
            MCP SDK v2.1.0
          </Badge>
        </div>
        
        {/* Quick Search */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <input
              type="text"
              placeholder="Search documentation..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      </div>

      {/* Popular Guides */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">🔥 Most Popular Setup Guides</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DOCS.filter(doc => 
            doc.slug.includes('cursor') || 
            doc.slug.includes('claude-desktop') || 
            doc.slug.includes('common-errors')
          ).slice(0, 3).map((doc) => (
            <Card key={doc.slug} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline">{CATEGORY_LABELS[doc.category]}</Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    {doc.readingTimeMinutes} min
                  </div>
                </div>
                <CardTitle className="text-lg hover:text-primary transition-colors">
                  <Link href={doc.path}>
                    {doc.title}
                  </Link>
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {doc.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {doc.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={doc.path}>
                      Read Guide
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-8">📚 Complete Documentation</h2>
        <div className="space-y-8">
          {Object.entries(docsByCategory).map(([category, docs]) => {
            const Icon = categoryIcons[category as keyof typeof categoryIcons];
            return (
              <div key={category} className="border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{CATEGORY_LABELS[category as keyof typeof CATEGORY_LABELS]}</h3>
                    <p className="text-muted-foreground text-sm">
                      {categoryDescriptions[category as keyof typeof categoryDescriptions]}
                    </p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {docs.map((doc) => (
                    <Card key={doc.slug} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h4 className="font-medium text-sm hover:text-primary transition-colors">
                            <Link href={doc.path}>
                              {doc.title}
                            </Link>
                          </h4>
                          <div className="flex items-center text-xs text-muted-foreground shrink-0">
                            <Clock className="h-3 w-3 mr-1" />
                            {doc.readingTimeMinutes}m
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                          {doc.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-1">
                            {doc.tags.slice(0, 2).map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs px-1 py-0">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <Button variant="ghost" size="sm" asChild className="h-6 px-2 text-xs">
                            <Link href={doc.path}>
                              Read
                              <ArrowRight className="h-3 w-3 ml-1" />
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-muted/50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Need Help Getting Started?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Can't find what you're looking for? Join our community for support or create a custom MCP 
          tailored to your specific needs with our AI-powered generator.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Button size="lg" asChild>
            <Link href="/create">
              Create Custom MCP
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/community">
              Join Community
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/browse">
              Browse MCPs
            </Link>
          </Button>
        </div>
      </section>

      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            "headline": "Model Context Protocol Documentation",
            "description": "Complete documentation for Model Context Protocol setup, deployment, and troubleshooting",
            "author": {
              "@type": "Organization",
              "name": "MCP Directory"
            },
            "publisher": {
              "@type": "Organization",
              "name": "MCP Directory",
              "logo": {
                "@type": "ImageObject",
                "url": "https://mcpdirectory.app/logo.png"
              }
            },
            "datePublished": "2025-09-21",
            "dateModified": "2025-09-21",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://mcpdirectory.app/docs"
            },
            "articleSection": "Documentation",
            "keywords": "Model Context Protocol, MCP setup, documentation, IDE integration, deployment"
          })
        }}
      />
    </div>
  );
}