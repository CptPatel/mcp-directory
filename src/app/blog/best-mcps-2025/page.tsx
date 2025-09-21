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
    name: "GitHub Integration MCP",
    description: "Complete GitHub integration with repository management, issue tracking, and PR automation",
    category: "Development",
    downloads: "45.2k",
    rating: 4.9,
    verified: true,
    features: ["Repository management", "Issue tracking", "PR automation", "Code review"],
    useCase: "Essential for any developer working with GitHub repositories"
  },
  {
    rank: 2,
    name: "Database Query MCP",
    description: "Universal database connector supporting PostgreSQL, MySQL, MongoDB, and Redis",
    category: "Database",
    downloads: "38.7k",
    rating: 4.8,
    verified: true,
    features: ["Multi-database support", "Query optimization", "Schema introspection", "Data visualization"],
    useCase: "Perfect for database administrators and backend developers"
  },
  {
    rank: 3,
    name: "AWS CLI Helper MCP",
    description: "Simplified AWS operations with natural language commands for all major services",
    category: "Cloud",
    downloads: "32.1k",
    rating: 4.7,
    verified: true,
    features: ["EC2 management", "S3 operations", "Lambda deployment", "Cost monitoring"],
    useCase: "Must-have for cloud engineers and DevOps professionals"
  },
  {
    rank: 4,
    name: "Docker Manager MCP",
    description: "Container lifecycle management with Docker and Docker Compose integration",
    category: "DevOps",
    downloads: "29.8k",
    rating: 4.8,
    verified: true,
    features: ["Container management", "Image building", "Compose orchestration", "Health monitoring"],
    useCase: "Essential for containerized application development"
  },
  {
    rank: 5,
    name: "Slack Workspace MCP",
    description: "Team communication automation with message sending and channel management",
    category: "Communication",
    downloads: "27.3k",
    rating: 4.6,
    verified: true,
    features: ["Message automation", "Channel management", "User notifications", "Bot integration"],
    useCase: "Great for team collaboration and automated notifications"
  }
];

const categories = [
  {
    name: "Development Tools",
    count: 8,
    description: "MCPs for code management, version control, and development workflows",
    topMCPs: ["GitHub Integration", "VS Code Manager", "Git Helper", "Code Review Assistant"]
  },
  {
    name: "Database & Storage",
    count: 6,
    description: "Database connectors, query builders, and data management tools",
    topMCPs: ["Database Query MCP", "Redis Manager", "MongoDB Helper", "SQL Builder"]
  },
  {
    name: "Cloud & Infrastructure",
    count: 7,
    description: "Cloud platform integrations and infrastructure management",
    topMCPs: ["AWS CLI Helper", "Azure Manager", "GCP Tools", "Kubernetes Controller"]
  },
  {
    name: "Communication",
    count: 4,
    description: "Team communication and notification systems",
    topMCPs: ["Slack Workspace", "Discord Bot", "Email Assistant", "Teams Integration"]
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
            45M+ Total Downloads
          </Badge>
          <Badge variant="secondary" className="text-sm">
            <Shield className="h-4 w-4 mr-1" />
            All Verified & Tested
          </Badge>
          <Badge variant="secondary" className="text-sm">
            4.8+ Average Rating
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