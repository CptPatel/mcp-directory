"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Star, MessageCircle, Users, TrendingUp, Award, ExternalLink, Heart, Share2 } from "lucide-react";

const communityStats = [
  { label: "Active Members", value: "12,847", icon: Users },
  { label: "MCPs Shared", value: "1,234", icon: Share2 },
  { label: "Reviews Posted", value: "5,678", icon: Star },
  { label: "Questions Answered", value: "3,456", icon: MessageCircle }
];

const topContributors = [
  {
    name: "Alex Chen",
    username: "@alexchen",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex",
    contributions: 47,
    badge: "Top Contributor",
    speciality: "Database MCPs"
  },
  {
    name: "Sarah Johnson",
    username: "@sarahj",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    contributions: 38,
    badge: "MCP Expert",
    speciality: "Development Tools"
  },
  {
    name: "Mike Rodriguez",
    username: "@mikerod",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=mike",
    contributions: 31,
    badge: "Community Helper",
    speciality: "Cloud Integration"
  }
];

const recentDiscussions = [
  {
    title: "Best practices for GitHub MCP configuration",
    author: "DevMaster",
    replies: 23,
    likes: 45,
    category: "Development",
    timeAgo: "2 hours ago",
    isHot: true
  },
  {
    title: "Troubleshooting Slack MCP connection issues",
    author: "TeamLead",
    replies: 12,
    likes: 28,
    category: "Communication",
    timeAgo: "4 hours ago",
    isHot: false
  },
  {
    title: "New Database MCP with MongoDB support",
    author: "DataEngineer",
    replies: 18,
    likes: 67,
    category: "Database",
    timeAgo: "6 hours ago",
    isHot: true
  },
  {
    title: "VS Code MCP extension not loading",
    author: "CodeNewbie",
    replies: 8,
    likes: 15,
    category: "Support",
    timeAgo: "8 hours ago",
    isHot: false
  }
];

const featuredMCPs = [
  {
    name: "AI Code Review Assistant",
    author: "CodeQuality Team",
    rating: 4.9,
    downloads: "8.2k",
    description: "Automated code review with AI-powered suggestions and best practice recommendations.",
    isNew: true
  },
  {
    name: "Multi-Cloud Deployment",
    author: "CloudOps",
    rating: 4.7,
    downloads: "5.4k",
    description: "Deploy applications across AWS, Azure, and GCP with unified commands.",
    isNew: false
  },
  {
    name: "Smart Documentation Generator",
    author: "DocBot",
    rating: 4.8,
    downloads: "6.7k",
    description: "Generate comprehensive documentation from your codebase automatically.",
    isNew: true
  }
];

export default function CommunityClient() {
  return (
    <div className="container px-4 py-8 mx-auto max-w-4xl">
      {/* Coming Soon Header */}
      <div className="text-center py-20">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 mb-6">
            <Users className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Community
            <span className="block text-2xl md:text-3xl text-muted-foreground font-normal mt-2">
              Coming Soon
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            We're building an amazing community platform where developers can share knowledge, 
            contribute MCPs, and collaborate on AI-powered development tools.
          </p>
        </div>

        {/* Features Preview */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-lg border bg-card">
            <MessageCircle className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Discussions</h3>
            <p className="text-sm text-muted-foreground">Share knowledge and get help from the community</p>
          </div>
          <div className="p-6 rounded-lg border bg-card">
            <Share2 className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">MCP Sharing</h3>
            <p className="text-sm text-muted-foreground">Contribute and discover community-created MCPs</p>
          </div>
          <div className="p-6 rounded-lg border bg-card">
            <Award className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Recognition</h3>
            <p className="text-sm text-muted-foreground">Get recognized for your contributions and expertise</p>
          </div>
        </div>

        {/* Notify Me */}
        <div className="bg-muted/50 rounded-lg p-8 mb-8">
          <h3 className="text-xl font-semibold mb-4">Get Notified When We Launch</h3>
          <p className="text-muted-foreground mb-6">
            Be the first to know when our community platform goes live!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-2 rounded-md border border-input bg-background"
            />
            <Button>
              Notify Me
            </Button>
          </div>
        </div>

        {/* Current Options */}
        <div className="space-y-4">
          <p className="text-muted-foreground">In the meantime, connect with us:</p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com/mcpdirectory/mcpdirectory" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://twitter.com/mcpdirectory" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Twitter
              </a>
            </Button>
          </div>
        </div>
      </div>


    </div>
  );
}