import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Star, Download, Shield, TrendingUp, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "30 Best MCPs Every Developer Should Know in 2025 - Top Model Context Protocols",
  description: "Discover the 30 best Model Context Protocols for 2025. Our expert-curated list includes essential MCPs for GitHub, databases, search, and AI development. Find the top-rated MCPs with 2M+ downloads.",
  keywords: "best MCPs 2025, top Model Context Protocols, best MCP servers, MCP recommendations, popular MCPs, essential MCPs, GitHub MCP, PostgreSQL MCP, Brave Search MCP, Slack MCP, filesystem MCP, top MCP list, MCP directory",
  openGraph: {
    title: "25 Best MCPs Every Developer Should Know in 2025",
    description: "Expert-curated list of the top 25 Model Context Protocol servers for developers. Includes GitHub, database, search, and productivity MCPs with 500K+ total downloads.",
    type: "article",
    url: "https://mcpdirectory.app/blog/best-mcps-2025",
    siteName: "MCP Directory",
    publishedTime: "2025-09-18T00:00:00.000Z",
    modifiedTime: "2025-09-20T00:00:00.000Z",
    authors: ["MCP Directory Team"],
  },
  twitter: {
    card: "summary_large_image",
    title: "25 Best MCPs Every Developer Should Know in 2025",
    description: "Expert-curated list of top Model Context Protocol servers with 500K+ downloads",
    site: "@mcpdirectory",
  },
  alternates: {
    canonical: "https://mcpdirectory.app/blog/best-mcps-2025",
  },
};

const bestMCPs = [
  {
    rank: 1,
    name: "Filesystem MCP",
    description: "Official MCP server for secure file system operations with advanced read/write capabilities and intelligent directory traversal",
    category: "Development",
    downloads: "485.3k",
    rating: 4.9,
    verified: true,
    features: ["File operations", "Directory traversal", "Content search", "Security controls", "AI-powered file analysis"],
    useCase: "Essential for any AI assistant that needs to work with local files and directories"
  },
  {
    rank: 2,
    name: "GitHub MCP",
    description: "Official GitHub MCP server for comprehensive repository management, issue tracking, and automated pull request workflows",
    category: "Development", 
    downloads: "398.7k",
    rating: 4.8,
    verified: true,
    features: ["Repository management", "Issue tracking", "PR automation", "Advanced search", "Code analysis"],
    useCase: "Must-have for developers working with GitHub repositories and project management"
  },
  {
    rank: 3,
    name: "PostgreSQL MCP",
    description: "Advanced database MCP server for PostgreSQL with intelligent query execution, schema inspection, and AI-powered data analysis",
    category: "Database",
    downloads: "287.1k",
    rating: 4.9,
    verified: true,
    features: ["SQL queries", "Schema inspection", "Data analysis", "Connection pooling", "Query optimization"],
    useCase: "Perfect for database administrators and backend developers using PostgreSQL"
  },
  {
    rank: 4,
    name: "Brave Search MCP",
    description: "Enhanced web search capabilities using Brave Search API with real-time information retrieval and AI-powered result filtering",
    category: "Search",
    downloads: "276.4k",
    rating: 4.7,
    verified: true,
    features: ["Web search", "Real-time results", "Privacy-focused", "API integration", "Result filtering"],
    useCase: "Essential for AI assistants that need current web information and search capabilities"
  },
  {
    rank: 5,
    name: "Slack MCP",
    description: "Official Slack MCP server for advanced team communication, channel management, and intelligent message automation",
    category: "Communication",
    downloads: "265.8k",
    rating: 4.6,
    verified: true,
    features: ["Message sending", "Channel management", "User lookup", "File sharing", "Workflow automation"],
    useCase: "Great for team collaboration and automated Slack workflows"
  }
];

const categories = [
  {
    name: "Development Tools",
    count: 18,
    description: "MCPs for code management, version control, and development workflows",
    topMCPs: ["Filesystem MCP", "GitHub MCP", "Git MCP", "VS Code MCP", "Docker MCP"]
  },
  {
    name: "Database & Storage",
    count: 12,
    description: "Database connectors, query builders, and data management tools",
    topMCPs: ["PostgreSQL MCP", "SQLite MCP", "MySQL MCP", "Redis MCP", "MongoDB MCP"]
  },
  {
    name: "Search & Information",
    count: 10,
    description: "Web search, information retrieval, and knowledge access tools",
    topMCPs: ["Brave Search MCP", "Google Search MCP", "Wikipedia MCP", "Web Scraper MCP", "Perplexity MCP"]
  },
  {
    name: "Communication & Productivity",
    count: 15,
    description: "Team communication, productivity, and workflow automation",
    topMCPs: ["Slack MCP", "Email MCP", "Calendar MCP", "Notion MCP", "Linear MCP"]
  }
];

export default function BestMCPs2025Page() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "25 Best MCPs Every Developer Should Know in 2025",
    "description": "Expert-curated list of the top 25 Model Context Protocol servers for developers. Includes GitHub, database, search, and productivity MCPs with 500K+ total downloads.",
    "author": {
      "@type": "Organization",
      "name": "MCP Directory Team",
      "url": "https://mcpdirectory.app"
    },
    "publisher": {
      "@type": "Organization",
      "name": "MCP Directory",
      "url": "https://mcpdirectory.app",
      "logo": {
        "@type": "ImageObject",
        "url": "https://mcpdirectory.app/logo.png"
      }
    },
    "datePublished": "2025-09-18T00:00:00.000Z",
    "dateModified": "2025-09-20T00:00:00.000Z",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://mcpdirectory.app/blog/best-mcps-2025"
    },
    "articleSection": "Technology",
    "keywords": ["Model Context Protocol", "MCP", "AI Development", "Developer Tools", "GitHub MCP", "PostgreSQL MCP"],
    "about": [
      {
        "@type": "Thing",
        "name": "Model Context Protocol",
        "description": "A standardized protocol for extending AI assistants with custom functionality"
      },
      {
        "@type": "Thing", 
        "name": "AI Development Tools",
        "description": "Software tools and protocols for building AI-powered applications"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="container px-4 py-8 mx-auto max-w-6xl">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex justify-center gap-2 mb-4">
          <Badge variant="secondary" className="bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-800">
            <Award className="h-4 w-4 mr-1" />
            Editor's Choice 2025
          </Badge>
          <Badge variant="outline">Updated Monthly</Badge>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          The 30 Best Model Context Protocols Every Developer Should Know in 2025
        </h1>
        <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
          Discover the top-rated Model Context Protocol servers that transformed AI development in 2025. 
          Our expert-curated list features the most popular MCPs with over 2M total downloads, 
          including essential tools for GitHub, databases, search, and productivity workflows.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Badge variant="secondary" className="text-sm">
            <TrendingUp className="h-4 w-4 mr-1" />
            2M+ Total Downloads
          </Badge>
          <Badge variant="secondary" className="text-sm">
            <Shield className="h-4 w-4 mr-1" />
            All Verified & Tested
          </Badge>
          <Badge variant="secondary" className="text-sm">
            4.8+ Average Rating
          </Badge>
          <Badge variant="secondary" className="text-sm">
            85+ Official MCPs
          </Badge>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-4 gap-6 mb-12">
        {categories.map((category) => (
          <Card key={category.name} className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-primary mb-2">{category.count}</div>
              <div className="font-semibold mb-2">{category.name}</div>
              <div className="text-sm text-muted-foreground">{category.description}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Top 5 MCPs */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">🏆 Top 5 MCPs of 2025</h2>
        <div className="space-y-6">
          {bestMCPs.map((mcp) => (
            <Card key={mcp.rank} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold text-lg">
                      #{mcp.rank}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-bold">{mcp.name}</h3>
                        {mcp.verified && <Shield className="h-5 w-5 text-green-500" />}
                        <Badge variant="outline">{mcp.category}</Badge>
                      </div>
                      <p className="text-muted-foreground">{mcp.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 mb-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{mcp.rating}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Download className="h-4 w-4" />
                      {mcp.downloads}
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {mcp.features.map((feature) => (
                      <Badge key={feature} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="bg-muted/50 rounded-lg p-3 mb-4">
                  <p className="text-sm"><strong>Best for:</strong> {mcp.useCase}</p>
                </div>
                
                <div className="flex gap-3">
                  <Button asChild>
                    <Link href="/browse">
                      Add to Package
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                  <Button variant="outline">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Categories Overview */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">MCPs by Category</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((category) => (
            <Card key={category.name} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {category.name}
                  <Badge variant="secondary">{category.count} MCPs</Badge>
                </CardTitle>
                <p className="text-muted-foreground">{category.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Popular MCPs:</h4>
                  <div className="flex flex-wrap gap-1">
                    {category.topMCPs.map((mcp) => (
                      <Badge key={mcp} variant="outline" className="text-xs">
                        {mcp}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full mt-4" asChild>
                  <Link href={`/browse?category=${category.name.toLowerCase().replace(' ', '-')}`}>
                    Explore {category.name}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How We Choose */}
      <section className="mb-12">
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-center">How We Choose the Best MCPs</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Download className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Popularity</h3>
                <p className="text-sm text-muted-foreground">Download counts, usage statistics, and community adoption</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">Quality</h3>
                <p className="text-sm text-muted-foreground">User ratings, code quality, documentation, and maintenance</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">Reliability</h3>
                <p className="text-sm text-muted-foreground">Security audits, update frequency, and community trust</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* CTA Section */}
      <div className="text-center bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Ready to Build Your MCP Package?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Browse our complete directory of 2,500+ verified MCPs and create custom packages 
          tailored to your development workflow.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/browse">
              Browse All MCPs
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/create">
              Create Custom MCP
            </Link>
          </Button>
        </div>
      </div>
    </div>
    </>
  );
}