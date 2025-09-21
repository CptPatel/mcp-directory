"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Download, Zap, Shield, ArrowRight, CheckCircle, Sparkles, Bot, Cpu, BookOpen } from "lucide-react";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HomeClient() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-10 opacity-50 hidden sm:block">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 dark:bg-purple-400/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-500/10 dark:bg-blue-400/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-indigo-500/10 dark:bg-indigo-400/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>
        
        {/* Interactive cursor glow */}
        <div 
          className="absolute w-96 h-96 bg-gradient-radial from-purple-500/5 dark:from-purple-400/10 to-transparent rounded-full transition-all duration-300 ease-out hidden sm:block"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="container px-4 py-8 mx-auto text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className={`flex justify-center mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <Badge variant="secondary" className="text-sm bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/50 dark:to-blue-900/50 text-purple-700 dark:text-purple-300 border-purple-200/50 dark:border-purple-700/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Bot className="h-4 w-4 mr-2 animate-pulse" />
              Trusted by 25,000+ developers
              <Sparkles className="h-4 w-4 ml-2" />
            </Badge>
          </div>
          
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block">Create Custom MCPs in</span>{" "}
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent animate-gradient-x bg-300% inline-block">
              Minutes
            </span>
            <span className="inline-block">, Not Hours</span>
          </h1>
          
          <p className={`text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Create custom MCP servers, discover the best MCPs, and deploy Model Context Protocol configurations with our{" "}
            <span className="text-foreground font-semibold">AI-powered MCP creator</span> and one-click installation. 
            The ultimate MCP Directory for developers building AI-powered workflows.
          </p>
          <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center transition-all duration-1000 delay-600 relative z-20 max-w-4xl mx-auto ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Primary CTA - Always visible */}
            <Button 
              size="lg" 
              className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 hover:from-purple-700 hover:via-blue-700 hover:to-indigo-700 shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 hover:-translate-y-1 group relative overflow-hidden" 
              asChild
            >
              <Link href="/create">
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 group-hover:animate-spin" />
                Create with AI
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
            
            {/* Secondary CTA */}
            <Button 
              size="lg" 
              className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-slate-900 to-slate-700 hover:from-slate-800 hover:to-slate-600 dark:from-slate-100 dark:to-slate-300 dark:hover:from-slate-200 dark:hover:to-slate-400 dark:text-slate-900 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 group" 
              asChild
            >
              <Link href="/browse">
                <Shield className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 group-hover:rotate-12 transition-transform duration-300" />
                Explore MCPs
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
          </div>
          
          {/* Secondary Navigation */}
          <div className={`flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center items-center mt-4 transition-all duration-1000 delay-700 relative z-20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Button 
              variant="outline" 
              size="default" 
              className="w-full sm:w-auto text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 border hover:bg-muted/50 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 group" 
              asChild
            >
              <Link href="/blog">
                <BookOpen className="h-4 w-4 mr-2 group-hover:animate-pulse" />
                MCP Blog
              </Link>
            </Button>

            <Button 
              variant="outline" 
              size="default" 
              className="w-full sm:w-auto text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 border hover:bg-muted/50 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 group" 
              asChild
            >
              <Link href="/docs">
                <Cpu className="h-4 w-4 mr-2 group-hover:animate-pulse" />
                Documentation
              </Link>
            </Button>
          </div>
          <div className={`flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6 mt-8 text-sm transition-all duration-1000 delay-800 relative z-20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {[
              { icon: CheckCircle, text: "2,500+ verified MCPs", color: "text-emerald-500" },
              { icon: Zap, text: "AI-powered creation", color: "text-purple-500" },
              { icon: Shield, text: "Enterprise secure", color: "text-blue-500" },
              { icon: Sparkles, text: "Free forever", color: "text-indigo-500" }
            ].map((item, index) => (
              <div 
                key={index}
                className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-muted/30 dark:bg-muted/20 backdrop-blur-sm border border-border/50 dark:border-border/30 hover:bg-muted/50 dark:hover:bg-muted/40 transition-all duration-300 hover:scale-105 group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <item.icon className={`h-4 w-4 ${item.color} group-hover:animate-pulse`} />
                <span className="text-xs sm:text-sm text-muted-foreground dark:text-muted-foreground group-hover:text-foreground dark:group-hover:text-foreground transition-colors duration-300 whitespace-nowrap">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container px-4 py-16 mx-auto relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-transparent">
            Why Choose MCP Directory?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            The most comprehensive platform for Model Context Protocol management with cutting-edge AI capabilities
          </p>
        </div>
        
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {[
            {
              icon: Sparkles,
              title: "AI-Powered Creation",
              description: "Generate custom MCPs using natural language. Our AI understands your requirements and creates production-ready code instantly.",
              href: "/create",
              buttonText: "Try AI Creator",
              gradient: "from-purple-500 to-pink-500",
              delay: "0ms"
            },
            {
              icon: Shield,
              title: "Enterprise Security",
              description: "All MCPs are automatically scanned for vulnerabilities and reviewed by our security team for enterprise-grade safety.",
              href: "/community",
              buttonText: "Security Details",
              gradient: "from-blue-500 to-cyan-500",
              delay: "200ms"
            },
            {
              icon: Zap,
              title: "Lightning Fast Setup",
              description: "Deploy multiple MCPs in minutes with our one-click installation. No complex configuration or manual setup required.",
              href: "/packages",
              buttonText: "Quick Start",
              gradient: "from-orange-500 to-red-500",
              delay: "400ms"
            }
          ].map((feature, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden border-0 bg-gradient-to-br from-white/50 to-white/30 dark:from-slate-800/50 dark:to-slate-900/30 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2"
              style={{ animationDelay: feature.delay }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-500`} />
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-white/20 dark:from-white/10 to-transparent rounded-full group-hover:scale-150 transition-transform duration-700" />
              
              <CardHeader className="text-center relative z-10 pb-4">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-6 mx-auto shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                  <feature.icon className="h-8 w-8 text-white group-hover:animate-pulse" />
                </div>
                <CardTitle className="text-xl font-bold mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-slate-900 group-hover:to-slate-600 dark:group-hover:from-slate-100 dark:group-hover:to-slate-300 group-hover:bg-clip-text transition-all duration-300">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors duration-300">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="text-center relative z-10">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="group-hover:bg-white/80 group-hover:border-transparent group-hover:shadow-lg transition-all duration-300 hover:scale-105" 
                  asChild
                >
                  <Link href={feature.href}>
                    {feature.buttonText}
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Popular MCPs Preview */}
      <section className="container px-4 py-16 mx-auto bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Most Popular MCPs</h2>
            <p className="text-muted-foreground">
              Discover the top-rated Model Context Protocol configurations
            </p>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Sample MCP Cards */}
            {[
              {
                name: "GitHub Integration",
                description: "Connect repositories, manage issues, and automate workflows with natural language commands",
                rating: 4.8,
                downloads: "125.5k",
                category: "Development",
                verified: true,
                isPopular: true
              },
              {
                name: "Database Tools",
                description: "Query and manage databases with natural language. Supports PostgreSQL, MySQL, and MongoDB",
                rating: 4.9,
                downloads: "98.1k",
                category: "Database",
                verified: true,
                isPopular: true
              },
              {
                name: "Slack Connector",
                description: "Integrate with Slack for team communication, notifications, and channel management",
                rating: 4.6,
                downloads: "67.2k",
                category: "Communication",
                verified: true,
                isPopular: false
              },
              {
                name: "AWS CLI Helper",
                description: "Simplified AWS operations with natural language commands for EC2, S3, Lambda, and more",
                rating: 4.6,
                downloads: "89.7k",
                category: "Cloud",
                verified: true,
                isPopular: true
              },
              {
                name: "Docker Manager",
                description: "Manage Docker containers, images, and compose files with natural language",
                rating: 4.8,
                downloads: "76.2k",
                category: "Development",
                verified: true,
                isPopular: false
              },
              {
                name: "VS Code Extension Manager",
                description: "Manage VS Code extensions, settings, and workspaces through natural language",
                rating: 4.7,
                downloads: "54.4k",
                category: "Development",
                verified: true,
                isPopular: false
              }
            ].map((mcp, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] border-border/50 hover:border-border bg-card/50 backdrop-blur-sm"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  animation: isVisible ? 'fadeInUp 0.6s ease-out forwards' : 'none'
                }}
              >
                <CardHeader className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-muted/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-lg" />
                  <div className="flex items-start justify-between relative z-10">
                    <div>
                      <CardTitle className="text-lg flex items-center gap-2 group-hover:text-primary transition-colors duration-300">
                        {mcp.name}
                        {mcp.verified && <Shield className="h-4 w-4 text-green-500 group-hover:animate-pulse" />}
                        {mcp.isPopular && (
                          <Badge variant="secondary" className="text-xs bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 group-hover:scale-110 transition-transform duration-300">
                            Popular
                          </Badge>
                        )}
                      </CardTitle>
                      <Badge variant="outline" className="mt-1 group-hover:bg-primary/10 group-hover:border-primary/30 transition-colors duration-300">
                        {mcp.category}
                      </Badge>
                    </div>
                  </div>
                  <CardDescription className="mt-2 group-hover:text-foreground/80 transition-colors duration-300">
                    {mcp.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1 group-hover:text-yellow-600 transition-colors duration-300">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 group-hover:animate-pulse" />
                        {mcp.rating}
                      </div>
                      <div className="flex items-center gap-1 group-hover:text-blue-600 transition-colors duration-300">
                        <Download className="h-4 w-4 group-hover:animate-bounce" />
                        {mcp.downloads}
                      </div>
                    </div>
                    <Button 
                      size="sm" 
                      className="group-hover:bg-primary group-hover:scale-105 transition-all duration-300 shadow-sm group-hover:shadow-md" 
                      asChild
                    >
                      <Link href="/browse">
                        Add to Package
                        <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
              <Link href="/browse">
                View All 2,500+ MCPs
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Supported Stacks Section */}
      <section className="container px-4 py-16 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Works With Your Favorite Tools</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            MCP Directory supports all major development environments and AI coding assistants
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {[
            { name: "VS Code", icon: "💻" },
            { name: "Cursor", icon: "🎯" },
            { name: "Windsurf", icon: "🏄" },
            { name: "Claude Code", icon: "🤖" },
            { name: "Gemini CLI", icon: "💎" },
            { name: "JetBrains", icon: "🚀" },
            { name: "OpenAI Codex", icon: "🧠" }
          ].map((stack, index) => (
            <div key={index} className="text-center p-3 sm:p-4 rounded-lg border hover:shadow-md transition-all duration-300 hover:scale-105 group">
              <div className="text-2xl sm:text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">{stack.icon}</div>
              <div className="text-xs sm:text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">{stack.name}</div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button variant="outline" asChild>
            <Link href="/docs">
              View Setup Instructions
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container px-4 py-16 mx-auto text-center bg-muted/50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Streamline Your AI Workflow?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of developers already using MCP Directory to build better AI-powered applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md mx-auto">
            <Button size="lg" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4" asChild>
              <Link href="/packages">
                Start Building Your Package
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4" asChild>
              <Link href="/community">
                Join Community
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

