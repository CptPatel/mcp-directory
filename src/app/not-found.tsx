"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Home, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container px-4 py-16 mx-auto max-w-2xl text-center">
      <Card>
        <CardHeader>
          <div className="flex justify-center mb-4">
            <div className="text-6xl font-bold text-muted-foreground">404</div>
          </div>
          <CardTitle className="text-2xl">Page Not Found</CardTitle>
          <CardDescription className="text-lg">
            The page you're looking for doesn't exist or has been moved.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-sm text-muted-foreground">
            <p>Here are some helpful links to get you back on track:</p>
          </div>
          
          <div className="grid gap-3">
            <Button asChild className="w-full">
              <Link href="/" className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                Go to Homepage
              </Link>
            </Button>
            
            <Button variant="outline" asChild className="w-full">
              <Link href="/browse" className="flex items-center gap-2">
                <Search className="h-4 w-4" />
                Browse MCPs
              </Link>
            </Button>
            
            <Button variant="outline" asChild className="w-full">
              <Link href="/create" className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full" />
                Create with AI
              </Link>
            </Button>
          </div>
          
          <div className="pt-4 border-t">
            <Button variant="ghost" onClick={() => window.history.back()} className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Go Back
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
