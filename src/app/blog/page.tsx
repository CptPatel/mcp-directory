import type { Metadata } from "next";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  ArrowRight,
  TrendingUp,
  Star,
  Shield,
  Zap,
  Rocket,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "MCP Blog - Master Model Context Protocol Development in 2025 | MCP Directory",
  description:
    "Master Model Context Protocol development with expert tutorials for 2025. Learn to create custom MCP servers, AI agent security, framework comparisons, and discover the best MCPs with step-by-step guides.",
  keywords:
    "Model Context Protocol blog, MCP development 2025, create custom MCP server, MCP tutorial, best MCPs 2025, AI agent security, MCP vs LangChain, MCP guide, AI development tools, MCP SDK, secure MCP deployment",
  openGraph: {
    title: "MCP Blog - Master Model Context Protocol Development in 2025",
    description:
      "Expert tutorials for Model Context Protocol development. Learn to create custom MCP servers, security best practices, and discover the best MCPs for AI development.",
    type: "website",
    url: "https://mcpdirectory.app/blog",
    siteName: "MCP Directory",
  },
  twitter: {
    card: "summary_large_image",
    title: "MCP Blog - Master Model Context Protocol Development in 2025",
    description:
      "Expert tutorials for Model Context Protocol development. Security, frameworks, and best practices for AI developers.",
    site: "@mcpdirectory",
  },
  alternates: {
    canonical: "https://mcpdirectory.app/blog",
  },
};

const blogPosts = [
  {
    slug: "mcp-testing-debugging-guide-2025",
    title:
      "Complete MCP Testing & Debugging Guide: Master Model Context Protocol Troubleshooting in 2025",
    excerpt:
      "Master comprehensive testing and debugging techniques for Model Context Protocol servers. Learn unit testing, integration testing, performance testing, advanced debugging tools, and monitoring best practices.",
    category: "Testing",
    readTime: "30 min read",
    publishedAt: "2025-01-21",
    featured: true,
    trending: true,
    keywords: [
      "MCP testing guide",
      "Model Context Protocol debugging",
      "MCP troubleshooting",
    ],
    icon: Bug,
  },
  {
    slug: "mcp-performance-optimization-2025",
    title:
      "MCP Performance Optimization: 15 Proven Techniques to Speed Up Model Context Protocol Servers in 2025",
    excerpt:
      "Master Model Context Protocol performance with 15 battle-tested optimization techniques. Learn memory management, connection pooling, caching strategies, and real-time monitoring to build lightning-fast MCP servers.",
    category: "Performance",
    readTime: "25 min read",
    publishedAt: "2025-01-22",
    featured: true,
    trending: true,
    keywords: [
      "MCP performance optimization",
      "Model Context Protocol speed",
      "MCP server performance",
    ],
    icon: Zap,
  },
  {
    slug: "enterprise-mcp-deployment-2025",
    title:
      "Enterprise MCP Deployment Guide: Scale Model Context Protocol Servers for Fortune 500 Companies in 2025",
    excerpt:
      "Deploy Model Context Protocol servers at enterprise scale with multi-tenant architecture, enterprise-grade security, compliance frameworks (SOC2, GDPR, HIPAA), and disaster recovery strategies.",
    category: "Enterprise",
    readTime: "28 min read",
    publishedAt: "2025-01-20",
    featured: true,
    trending: true,
    keywords: [
      "enterprise MCP deployment",
      "Model Context Protocol enterprise",
      "MCP compliance",
    ],
    icon: Shield,
  },
  {
    slug: "building-ai-agents-mcp-2025",
    title: "Building AI Agents with MCP: Complete 2025 Developer Guide",
    excerpt:
      "Learn to build powerful, autonomous AI agents using Model Context Protocol. Complete guide with architecture patterns, code examples, and real-world use cases for intelligent agent development.",
    category: "Tutorial",
    readTime: "22 min read",
    publishedAt: "2025-01-18",
    featured: true,
    trending: false,
    keywords: [
      "build AI agents MCP",
      "autonomous AI agents",
      "AI agent development",
    ],
    icon: Rocket,
  },
  {
    slug: "mcp-vs-langchain-2025",
    title: "MCP vs LangChain: Which AI Framework Should You Choose in 2025?",
    excerpt:
      "Comprehensive comparison of Model Context Protocol vs LangChain for AI development. Performance benchmarks, use cases, and expert recommendations to help you choose the right framework.",
    category: "Comparison",
    readTime: "12 min read",
    publishedAt: "2025-01-15",
    featured: true,
    trending: false,
    keywords: [
      "MCP vs LangChain",
      "AI framework comparison",
      "Model Context Protocol vs LangChain",
    ],
    icon: Zap,
  },
  {
    slug: "ai-agent-security-mcp-2025",
    title:
      "AI Agent Security: Essential Best Practices for MCP Servers in 2025",
    excerpt:
      "Critical security practices for Model Context Protocol servers and AI agents. Learn authentication, sandboxing, vulnerability prevention, and incident response with real-world examples.",
    category: "Security",
    readTime: "18 min read",
    publishedAt: "2025-01-10",
    featured: true,
    trending: false,
    keywords: [
      "AI agent security",
      "MCP server security",
      "secure AI development",
    ],
    icon: Shield,
  },
  {
    slug: "how-to-create-custom-mcp-server",
    title: "How to Create a Custom MCP Server from Scratch",
    excerpt:
      "Step-by-step guide to building your own Model Context Protocol server with TypeScript and Python examples using the latest MCP SDK v2.1.",
    category: "Tutorial",
    readTime: "15 min read",
    publishedAt: "2025-01-05",
    featured: true,
    trending: false,
    keywords: [
      "create custom MCP server",
      "MCP development",
      "Model Context Protocol tutorial",
    ],
    icon: Star,
  },
  {
    slug: "best-mcps-2025",
    title: "The 30 Best MCPs Every Developer Should Know in 2025",
    excerpt:
      "Discover the most popular and useful Model Context Protocol configurations that are transforming AI development workflows in 2025.",
    category: "Guide",
    readTime: "12 min read",
    publishedAt: "2024-12-28",
    featured: false,
    trending: false,
    keywords: ["best MCPs", "top MCPs", "MCP recommendations"],
    icon: TrendingUp,
  },
];

export default function BlogPage() {
  const featuredPosts = blogPosts.filter((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);
  const trendingPosts = blogPosts.filter((post) => post.trending);

  return (
    <div className="container px-4 py-8 mx-auto max-w-6xl">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Model Context Protocol Development Blog
        </h1>
        <p className="text-xl text-muted-foreground mb-6 max-w-4xl mx-auto">
          Master Model Context Protocol development with expert tutorials for
          2025. Learn to create custom MCP servers, implement security best
          practices, compare AI frameworks, and discover the best MCPs with our
          comprehensive guides.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Badge variant="secondary" className="text-sm">
            <TrendingUp className="h-4 w-4 mr-1" />
            Latest 2025 Tutorials
          </Badge>
          <Badge variant="secondary" className="text-sm">
            <Shield className="h-4 w-4 mr-1" />
            Security Best Practices
          </Badge>
          <Badge variant="secondary" className="text-sm">
            <Zap className="h-4 w-4 mr-1" />
            Framework Comparisons
          </Badge>
          <Badge variant="secondary" className="text-sm">
            Step-by-Step Guides
          </Badge>
        </div>
      </div>

      {/* Trending Posts */}
      {trendingPosts.length > 0 && (
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="h-5 w-5 text-orange-500" />
            <h2 className="text-2xl font-bold">🔥 Trending Now</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingPosts.map((post) => {
              const Icon = post.icon;
              return (
                <Card
                  key={post.slug}
                  className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-orange-200"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Badge
                          variant="outline"
                          className="border-orange-300 text-orange-700"
                        >
                          <Icon className="h-3 w-3 mr-1" />
                          {post.category}
                        </Badge>
                        <Badge
                          variant="secondary"
                          className="bg-orange-100 text-orange-800"
                        >
                          Trending
                        </Badge>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-lg hover:text-primary transition-colors">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(post.publishedAt).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          },
                        )}
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
              );
            })}
          </div>
        </section>
      )}

      {/* Featured Posts */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">⭐ Featured Articles</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPosts
            .filter((post) => !post.trending)
            .map((post) => {
              const Icon = post.icon;
              return (
                <Card
                  key={post.slug}
                  className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">
                        <Icon className="h-3 w-3 mr-1" />
                        {post.category}
                      </Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-lg hover:text-primary transition-colors">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(post.publishedAt).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          },
                        )}
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
              );
            })}
        </div>
      </section>

      {/* All Posts */}
      {regularPosts.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">📚 All Articles</h2>
          <div className="space-y-6">
            {regularPosts.map((post) => {
              const Icon = post.icon;
              return (
                <Card
                  key={post.slug}
                  className="hover:shadow-md transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant="outline">
                            <Icon className="h-3 w-3 mr-1" />
                            {post.category}
                          </Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-1" />
                            {new Date(post.publishedAt).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              },
                            )}
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="h-4 w-4 mr-1" />
                            {post.readTime}
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">
                          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                        </h3>
                        <p className="text-muted-foreground">{post.excerpt}</p>
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
              );
            })}
          </div>
        </section>
      )}

      {/* Topics Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">🏷️ Popular Topics</h2>
        <div className="flex flex-wrap gap-3">
          {[
            "MCP Development",
            "AI Security",
            "Framework Comparison",
            "Best Practices",
            "Tutorial",
            "Deployment",
            "Authentication",
            "Docker",
            "TypeScript",
            "Python",
            "IDE Integration",
            "Troubleshooting",
            "Performance",
            "2025 Trends",
          ].map((topic) => (
            <Badge
              key={topic}
              variant="secondary"
              className="hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors"
            >
              {topic}
            </Badge>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="mb-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">
            📧 Stay Updated with MCP Development
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Get the latest Model Context Protocol tutorials, security updates,
            and best practices delivered to your inbox. Join 5,000+ AI
            developers staying ahead of the curve.
          </p>
          <div className="flex justify-center gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button>Subscribe</Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            No spam. Unsubscribe anytime. Privacy policy compliant.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-muted/50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">
          Ready to Create Your Own MCP?
        </h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Use our AI-powered MCP creator to generate custom Model Context
          Protocol servers tailored to your specific needs in minutes, or browse
          our directory of 1,200+ verified MCPs.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Button size="lg" asChild>
            <Link href="/create">
              Create Custom MCP
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/browse">Browse 1,200+ MCPs</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/docs">Read Documentation</Link>
          </Button>
        </div>
      </section>

      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "MCP Directory Blog",
            description:
              "Expert tutorials and guides for Model Context Protocol development",
            url: "https://mcpdirectory.app/blog",
            publisher: {
              "@type": "Organization",
              name: "MCP Directory",
              logo: {
                "@type": "ImageObject",
                url: "https://mcpdirectory.app/logo.png",
              },
            },
            blogPost: blogPosts.map((post) => ({
              "@type": "BlogPosting",
              headline: post.title,
              description: post.excerpt,
              url: `https://mcpdirectory.app/blog/${post.slug}`,
              datePublished: `${post.publishedAt}T10:00:00.000Z`,
              dateModified: `${post.publishedAt}T10:00:00.000Z`,
              author: {
                "@type": "Organization",
                name: "MCP Directory Team",
              },
              publisher: {
                "@type": "Organization",
                name: "MCP Directory",
              },
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": `https://mcpdirectory.app/blog/${post.slug}`,
              },
              keywords: post.keywords.join(", "),
            })),
          }),
        }}
      />
    </div>
  );
}
