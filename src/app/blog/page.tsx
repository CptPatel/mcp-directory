import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "MCP Blog - Learn to Create Custom MCP Servers | MCP Directory",
  description: "Learn how to create custom MCP servers, discover the best MCPs, and master Model Context Protocol development with our comprehensive guides and tutorials.",
  keywords: "create custom MCP, create custom MCP server, MCP tutorial, best MCPs, Model Context Protocol guide, MCP development, AI development tools",
  openGraph: {
    title: "MCP Blog - Learn to Create Custom MCP Servers",
    description: "Learn how to create custom MCP servers, discover the best MCPs, and master Model Context Protocol development",
    type: "website",
    url: "https://mcpdirectory.app/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "MCP Blog - Learn to Create Custom MCP Servers",
    description: "Learn how to create custom MCP servers, discover the best MCPs, and master Model Context Protocol development",
  },
};

const blogPosts = [
  {
    slug: "how-to-create-custom-mcp-server",
    title: "How to Create a Custom MCP Server from Scratch",
    excerpt: "Step-by-step guide to building your own Model Context Protocol server with TypeScript and Python examples.",
    category: "Tutorial",
    readTime: "15 min read",
    publishedAt: "2024-12-20",
    featured: true,
    keywords: ["create custom MCP server", "MCP development", "Model Context Protocol tutorial"]
  },
  {
    slug: "best-mcps-2024",
    title: "The 25 Best MCPs Every Developer Should Know in 2024",
    excerpt: "Discover the most popular and useful Model Context Protocol configurations that will supercharge your AI development workflow.",
    category: "Guide",
    readTime: "12 min read",
    publishedAt: "2024-12-18",
    featured: true,
    keywords: ["best MCPs", "top MCPs", "MCP recommendations"]
  },
  {
    slug: "mcp-directory-complete-guide",
    title: "MCP Directory: The Complete Guide to Model Context Protocols",
    excerpt: "Everything you need to know about MCPs, from basic concepts to advanced implementation strategies.",
    category: "Guide",
    readTime: "20 min read",
    publishedAt: "2024-12-15",
    featured: true,
    keywords: ["MCP Directory", "Model Context Protocol", "MCP guide"]
  },
  {
    slug: "create-custom-mcp-ai-assistant",
    title: "Create a Custom MCP for Your AI Assistant in 10 Minutes",
    excerpt: "Quick tutorial on building a custom MCP that integrates with Claude, ChatGPT, and other AI assistants.",
    category: "Quick Start",
    readTime: "10 min read",
    publishedAt: "2024-12-12",
    featured: false,
    keywords: ["create custom MCP", "AI assistant MCP", "MCP integration"]
  },
  {
    slug: "mcp-vs-plugins-comparison",
    title: "MCPs vs Traditional Plugins: Why MCPs Are the Future",
    excerpt: "Compare Model Context Protocols with traditional plugin systems and understand why MCPs are revolutionizing AI development.",
    category: "Analysis",
    readTime: "8 min read",
    publishedAt: "2024-12-10",
    featured: false,
    keywords: ["MCP vs plugins", "Model Context Protocol benefits", "AI development"]
  },
  {
    slug: "top-mcp-use-cases",
    title: "Top 10 Use Cases for Custom MCPs in Enterprise Development",
    excerpt: "Real-world examples of how companies are using custom MCPs to streamline their development workflows.",
    category: "Case Study",
    readTime: "14 min read",
    publishedAt: "2024-12-08",
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
          MCP Development Blog
        </h1>
        <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
          Learn how to create custom MCP servers, discover the best MCPs, and master 
          Model Context Protocol development with our comprehensive guides.
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