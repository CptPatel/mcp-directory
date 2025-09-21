import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "MCP Blog - Learn Model Context Protocol Development | MCP Directory",
  description: "Master Model Context Protocol development with our comprehensive guides. Learn to create custom MCP servers, discover the best MCPs in 2025, and build AI-powered development tools with step-by-step tutorials.",
  keywords: "Model Context Protocol, MCP development, create custom MCP server, MCP tutorial, best MCPs 2025, MCP guide, AI development tools, MCP SDK, MCP server development, Claude MCP, VS Code MCP",
  openGraph: {
    title: "MCP Blog - Master Model Context Protocol Development",
    description: "Comprehensive guides for Model Context Protocol development. Learn to create custom MCP servers and discover the best MCPs for AI development.",
    type: "website",
    url: "https://mcpdirectory.app/blog",
    siteName: "MCP Directory",
  },
  twitter: {
    card: "summary_large_image",
    title: "MCP Blog - Master Model Context Protocol Development",
    description: "Comprehensive guides for Model Context Protocol development. Learn to create custom MCP servers and discover the best MCPs.",
    site: "@mcpdirectory",
  },
  alternates: {
    canonical: "https://mcpdirectory.app/blog",
  },
};

const blogPosts = [
  {
    slug: "how-to-create-custom-mcp-server",
    title: "How to Create a Custom MCP Server from Scratch",
    excerpt: "Step-by-step guide to building your own Model Context Protocol server with TypeScript and Python examples using the latest MCP SDK v2.1.",
    category: "Tutorial",
    readTime: "15 min read",
    publishedAt: "2025-09-15",
    featured: true,
    keywords: ["create custom MCP server", "MCP development", "Model Context Protocol tutorial"]
  },
  {
    slug: "best-mcps-2025",
    title: "The 30 Best MCPs Every Developer Should Know in 2025",
    excerpt: "Discover the most popular and useful Model Context Protocol configurations that are transforming AI development workflows in late 2025.",
    category: "Guide",
    readTime: "12 min read",
    publishedAt: "2025-09-18",
    featured: true,
    keywords: ["best MCPs", "top MCPs", "MCP recommendations"]
  },
  {
    slug: "mcp-directory-complete-guide",
    title: "MCP Directory: The Complete Guide to Model Context Protocols",
    excerpt: "Everything you need to know about MCPs, from basic concepts to advanced implementation strategies with the latest September 2025 updates.",
    category: "Guide",
    readTime: "20 min read",
    publishedAt: "2025-09-10",
    featured: true,
    keywords: ["MCP Directory", "Model Context Protocol", "MCP guide"]
  },
  {
    slug: "create-custom-mcp-ai-assistant",
    title: "Create a Custom MCP for Your AI Assistant in 10 Minutes",
    excerpt: "Quick tutorial on building a custom MCP that integrates with Claude Desktop, VS Code, Cursor, Windsurf, and other AI assistants using the latest 2025 tools.",
    category: "Quick Start",
    readTime: "10 min read",
    publishedAt: "2025-09-12",
    featured: false,
    keywords: ["create custom MCP", "AI assistant MCP", "MCP integration"]
  },
  {
    slug: "mcp-vs-plugins-comparison",
    title: "MCPs vs Traditional Plugins: Why MCPs Dominated 2025",
    excerpt: "Compare Model Context Protocols with traditional plugin systems and understand how MCPs revolutionized AI development throughout 2025.",
    category: "Analysis",
    readTime: "8 min read",
    publishedAt: "2025-09-08",
    featured: false,
    keywords: ["MCP vs plugins", "Model Context Protocol benefits", "AI development"]
  },
  {
    slug: "mcp-setup-guide-vscode",
    title: "Complete MCP Setup Guide for VS Code and Claude Desktop",
    excerpt: "Detailed walkthrough for setting up Model Context Protocol servers in VS Code, Claude Desktop, and other popular development environments in 2025.",
    category: "Setup Guide",
    readTime: "12 min read",
    publishedAt: "2025-09-05",
    featured: false,
    keywords: ["MCP setup", "VS Code MCP", "Claude Desktop MCP", "MCP installation"]
  },
  {
    slug: "what-is-model-context-protocol",
    title: "What is the Model Context Protocol? Complete 2025 Guide",
    excerpt: "Comprehensive introduction to Model Context Protocol (MCP) - what it is, how it works, and why it transformed AI development workflows in 2025.",
    category: "Beginner Guide",
    readTime: "18 min read",
    publishedAt: "2025-09-01",
    featured: false,
    keywords: ["what is MCP", "Model Context Protocol explained", "MCP beginner guide"]
  },
  {
    slug: "top-mcp-use-cases",
    title: "Top 15 Use Cases for Custom MCPs in Enterprise Development",
    excerpt: "Real-world examples of how companies used custom MCPs to streamline their development workflows throughout 2025 with proven enterprise implementations.",
    category: "Case Study",
    readTime: "14 min read",
    publishedAt: "2025-08-28",
    featured: false,
    keywords: ["MCP use cases", "enterprise MCPs", "custom MCP examples"]
  }
];

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="container px-4 py-8 mx-auto max-w-6xl">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Model Context Protocol Development Blog
        </h1>
        <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
          Master Model Context Protocol development with expert tutorials. Learn to create custom MCP servers, 
          discover the best MCPs for 2025, and build powerful AI development tools with our step-by-step guides.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Badge variant="secondary" className="text-sm">
            <TrendingUp className="h-4 w-4 mr-1" />
            Latest MCP Tutorials
          </Badge>
          <Badge variant="secondary" className="text-sm">
            Step-by-Step Guides
          </Badge>
          <Badge variant="secondary" className="text-sm">
            Best Practices
          </Badge>
        </div>
      </div>

      {/* Featured Posts */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Featured Articles</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPosts.map((post) => (
            <Card key={post.slug} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline">{post.category}</Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <CardTitle className="text-lg hover:text-primary transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(post.publishedAt).toLocaleDateString()}
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={`/blog/${post.slug}`}>
                      Read More
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* All Posts */}
      <section>
        <h2 className="text-2xl font-bold mb-6">All Articles</h2>
        <div className="space-y-6">
          {regularPosts.map((post) => (
            <Card key={post.slug} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant="outline">{post.category}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(post.publishedAt).toLocaleDateString()}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-muted-foreground">
                      {post.excerpt}
                    </p>
                  </div>
                  <Button variant="outline" asChild>
                    <Link href={`/blog/${post.slug}`}>
                      Read Article
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-16 text-center bg-muted/50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Ready to Create Your Own MCP?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Use our AI-powered MCP creator to generate custom Model Context Protocol servers 
          tailored to your specific needs in minutes.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/create">
              Create Custom MCP
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/browse">
              Browse Best MCPs
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}