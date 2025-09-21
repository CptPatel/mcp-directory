import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Star, Download, Shield, TrendingUp, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "25 Best MCPs Every Developer Should Know in 2025 - Top Model Context Protocols",
  description: "Discover the best MCPs for 2025. Our curated list of top Model Context Protocol configurations includes GitHub, database, cloud, and AI development tools that every developer needs.",
  keywords: "best MCPs 2025, top MCPs, best Model Context Protocols, MCP recommendations, popular MCPs, essential MCPs, MCP directory, top MCP list",
  openGraph: {
    title: "25 Best MCPs Every Developer Should Know in 2025",
    description: "Curated list of the most popular and useful Model Context Protocol configurations",
    type: "article",
    url: "https://mcpdirectory.app/blog/best-mcps-2025",
  },
  twitter: {
    card: "summary_large_image",
    title: "25 Best MCPs Every Developer Should Know in 2025",
    description: "Curated list of the most popular and useful Model Context Protocol configurations",
  },
};

const bestMCPs = [
  {
    rank: 1,
    name: "Filesystem MCP",
    description: "Official MCP server for secure file system operations with read/write capabilities and directory traversal",
    category: "Development",
    downloads: "125.3k",
    rating: 4.9,
    verified: true,
    features: ["File operations", "Directory traversal", "Content search", "Security controls"],
    useCase: "Essential for any AI assistant that needs to work with local files and directories"
  },
  {
    rank: 2,
    name: "GitHub MCP",
    description: "Official GitHub MCP server for repository management, issue tracking, and pull request automation",
    category: "Development", 
    downloads: "98.7k",
    rating: 4.8,
    verified: true,
    features: ["Repository management", "Issue tracking", "PR automation", "Search functionality"],
    useCase: "Must-have for developers working with GitHub repositories and project management"
  },
  {
    rank: 3,
    name: "PostgreSQL MCP",
    description: "Database MCP server for PostgreSQL with query execution, schema inspection, and data analysis",
    category: "Database",
    downloads: "87.1k",
    rating: 4.9,
    verified: true,
    features: ["SQL queries", "Schema inspection", "Data analysis", "Connection pooling"],
    useCase: "Perfect for database administrators and backend developers using PostgreSQL"
  },
  {
    rank: 4,
    name: "Brave Search MCP",
    description: "Web search capabilities using Brave Search API for real-time information retrieval",
    category: "Search",
    downloads: "76.4k",
    rating: 4.7,
    verified: true,
    features: ["Web search", "Real-time results", "Privacy-focused", "API integration"],
    useCase: "Essential for AI assistants that need current web information and search capabilities"
  },
  {
    rank: 5,
    name: "Slack MCP",
    description: "Official Slack MCP server for team communication, channel management, and message automation",
    category: "Communication",
    downloads: "65.8k",
    rating: 4.6,
    verified: true,
    features: ["Message sending", "Channel management", "User lookup", "File sharing"],
    useCase: "Great for team collaboration and automated Slack workflows"
  }
];

const categories = [
  {
    name: "Development Tools",
    count: 12,
    description: "MCPs for code management, version control, and development workflows",
    topMCPs: ["Filesystem MCP", "GitHub MCP", "Git MCP", "VS Code MCP"]
  },
  {
    name: "Database & Storage",
    count: 8,
    description: "Database connectors, query builders, and data management tools",
    topMCPs: ["PostgreSQL MCP", "SQLite MCP", "MySQL MCP", "Redis MCP"]
  },
  {
    name: "Search & Information",
    count: 6,
    description: "Web search, information retrieval, and knowledge access tools",
    topMCPs: ["Brave Search MCP", "Google Search MCP", "Wikipedia MCP", "Web Scraper MCP"]
  },
  {
    name: "Communication & Productivity",
    count: 9,
    description: "Team communication, productivity, and workflow automation",
    topMCPs: ["Slack MCP", "Email MCP", "Calendar MCP", "Notion MCP"]
  }
];

export default function BestMCPs2025Page() {
  return (
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
          The 25 Best MCPs Every Developer Should Know in 2025
        </h1>
        <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
          Our curated list of the most popular, useful, and well-maintained Model Context Protocol 
          configurations that will supercharge your AI development workflow.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Badge variant="secondary" className="text-sm">
            <TrendingUp className="h-4 w-4 mr-1" />
            500K+ Total Downloads
          </Badge>
          <Badge variant="secondary" className="text-sm">
            <Shield className="h-4 w-4 mr-1" />
            All Verified & Tested
          </Badge>
          <Badge variant="secondary" className="text-sm">
            4.8+ Average Rating
          </Badge>
          <Badge variant="secondary" className="text-sm">
            35+ Official MCPs
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
          Browse our complete directory of 1,200+ verified MCPs and create custom packages 
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
  );
}