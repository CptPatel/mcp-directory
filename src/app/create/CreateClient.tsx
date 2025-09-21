"use client";

import AICreatorClient from "./AICreatorClient";
import AIGeneratorPanel from "./AIGeneratorPanel";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Lock, Zap } from "lucide-react";

export default function CreateClient() {
  return (
    <>
      <SignedIn>
        <AICreatorClient />
        <AIGeneratorPanel />
      </SignedIn>
      <SignedOut>
        <div className="container px-4 py-16 mx-auto max-w-2xl text-center">
          <Card className="border-2 border-dashed border-primary/20">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-primary/10">
                  <Lock className="h-12 w-12 text-primary" />
                </div>
              </div>
              <CardTitle className="text-2xl flex items-center justify-center gap-2">
                <Sparkles className="h-6 w-6 text-purple-600" />
                AI MCP Creator
              </CardTitle>
              <CardDescription className="text-lg">
                Sign in to access our powerful AI-powered MCP creation tools
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-sm text-muted-foreground space-y-2">
                <p className="flex items-center justify-center gap-2">
                  <Zap className="h-4 w-4 text-yellow-500" />
                  Generate MCPs using natural language
                </p>
                <p className="flex items-center justify-center gap-2">
                  <Sparkles className="h-4 w-4 text-purple-500" />
                  Access to GPT-4, Claude-3, and more AI models
                </p>
                <p className="flex items-center justify-center gap-2">
                  <Lock className="h-4 w-4 text-green-500" />
                  Secure sandbox testing environment
                </p>
              </div>
              
              <div className="flex flex-col gap-3">
                <SignInButton mode="modal">
                  <Button size="lg" className="w-full">
                    Sign In to Create MCPs
                  </Button>
                </SignInButton>
                <p className="text-xs text-muted-foreground">
                  New to MCP Directory? Signing in will create your account automatically.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </SignedOut>
    </>
  );
}