"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useUser } from "@clerk/nextjs";
import { usePackage } from "@/contexts/PackageContext";
import { Package, Sparkles, Star, Download, Plus, ArrowRight, Zap, Users, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function DashboardClient() {
  const { user } = useUser();
  const { currentPackage, savedPackages } = usePackage();

  const stats = [
    {
      title: "Saved Packages",
      value: savedPackages.length,
      icon: Package,
      description: "Custom MCP bundles you've created"
    },
    {
      title: "Current Package MCPs",
      value: currentPackage.mcps.length,
      icon: Plus,
      description: "MCPs in your active package"
    },
    {
      title: "AI Generations",
      value: "0", // This would come from a database in a real app
      icon: Sparkles,
      description: "MCPs created with AI"
    },
    {
      title: "Community Contributions",
      value: "0", // This would come from a database in a real app
      icon: Users,
      description: "MCPs shared with community"
    }
  ];

  const recentActivity = [
    {
      type: "package_created",
      title: "Created new package",
      description: currentPackage.name,
      time: "Just now",
      icon: Package
    },
    {
      type: "mcp_added",
      title: "Added MCP to package",
      description: "GitHub Integration MCP",
      time: "2 hours ago",
      icon: Plus
    }
  ];

  return (
    <div className="container px-4 py-8 mx-auto max-w-7xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">
          Welcome back, {user?.firstName || "Developer"}! 👋
        </h1>
        <p className="text-muted-foreground">
          Manage your MCPs, packages, and AI creations from your dashboard
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
                <div className="p-2 bg-primary/10 rounded-lg">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-2">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Quick Actions
              </CardTitle>
              <CardDescription>
                Jump into your most common tasks
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <Button className="h-auto p-6 flex flex-col items-start gap-2" asChild>
                  <Link href="/create">
                    <div className="flex items-center gap-2 w-full">
                      <Sparkles className="h-5 w-5" />
                      <span className="font-semibold">Create with AI</span>
                    </div>
                    <p className="text-sm text-left opacity-90">
                      Generate custom MCPs using natural language
                    </p>
                  </Link>
                </Button>
                
                <Button variant="outline" className="h-auto p-6 flex flex-col items-start gap-2" asChild>
                  <Link href="/browse">
                    <div className="flex items-center gap-2 w-full">
                      <Package className="h-5 w-5" />
                      <span className="font-semibold">Browse MCPs</span>
                    </div>
                    <p className="text-sm text-left text-muted-foreground">
                      Discover and add MCPs to your packages
                    </p>
                  </Link>
                </Button>
                
                <Button variant="outline" className="h-auto p-6 flex flex-col items-start gap-2" asChild>
                  <Link href="/packages">
                    <div className="flex items-center gap-2 w-full">
                      <Download className="h-5 w-5" />
                      <span className="font-semibold">Package Builder</span>
                    </div>
                    <p className="text-sm text-left text-muted-foreground">
                      Build and manage your MCP packages
                    </p>
                  </Link>
                </Button>
                
                <Button variant="outline" className="h-auto p-6 flex flex-col items-start gap-2" asChild>
                  <Link href="/community">
                    <div className="flex items-center gap-2 w-full">
                      <Users className="h-5 w-5" />
                      <span className="font-semibold">Join Community</span>
                    </div>
                    <p className="text-sm text-left text-muted-foreground">
                      Connect with other MCP developers
                    </p>
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Current Package */}
          {currentPackage.mcps.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="h-5 w-5" />
                  Current Package: {currentPackage.name}
                </CardTitle>
                <CardDescription>
                  {currentPackage.mcps.length} MCPs ready for installation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {currentPackage.mcps.slice(0, 3).map((mcp) => (
                    <div key={mcp.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">{mcp.name}</p>
                        <p className="text-sm text-muted-foreground">{mcp.category} • by {mcp.author}</p>
                      </div>
                      <Badge variant="outline">{mcp.size}</Badge>
                    </div>
                  ))}
                  {currentPackage.mcps.length > 3 && (
                    <p className="text-sm text-muted-foreground text-center">
                      +{currentPackage.mcps.length - 3} more MCPs
                    </p>
                  )}
                </div>
                <Button className="w-full mt-4" asChild>
                  <Link href="/packages">
                    Manage Package
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="p-2 bg-muted rounded-lg">
                      <activity.icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{activity.title}</p>
                      <p className="text-xs text-muted-foreground">{activity.description}</p>
                      <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Saved Packages */}
          <Card>
            <CardHeader>
              <CardTitle>Saved Packages</CardTitle>
              <CardDescription>
                Your MCP package library
              </CardDescription>
            </CardHeader>
            <CardContent>
              {savedPackages.length > 0 ? (
                <div className="space-y-3">
                  {savedPackages.slice(0, 3).map((pkg) => (
                    <div key={pkg.id} className="p-3 border rounded-lg">
                      <p className="font-medium text-sm">{pkg.name}</p>
                      <p className="text-xs text-muted-foreground">{pkg.mcps.length} MCPs</p>
                    </div>
                  ))}
                  {savedPackages.length > 3 && (
                    <p className="text-sm text-muted-foreground text-center">
                      +{savedPackages.length - 3} more packages
                    </p>
                  )}
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="/packages">View All Packages</Link>
                  </Button>
                </div>
              ) : (
                <div className="text-center py-4">
                  <Package className="h-8 w-8 mx-auto mb-2 opacity-50" />
                  <p className="text-sm text-muted-foreground">No saved packages yet</p>
                  <Button size="sm" className="mt-2" asChild>
                    <Link href="/packages">Create Package</Link>
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}