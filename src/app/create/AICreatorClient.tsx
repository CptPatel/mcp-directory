"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Zap, Code, TestTube, Package, Bot, Cpu, Brain } from "lucide-react";
import Link from "next/link";
import { usePackage } from "@/contexts/PackageContext";

export default function AICreatorClient() {
  const { currentPackage } = usePackage();
  const [currentStep, setCurrentStep] = useState<'prompt' | 'generate' | 'test' | 'save'>('prompt');
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="container px-4 py-4 mx-auto max-w-7xl relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-indigo-500/5 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Interactive cursor glow */}
        <div 
          className="absolute w-64 h-64 bg-gradient-radial from-purple-500/10 to-transparent rounded-full transition-all duration-500 ease-out"
          style={{
            left: mousePosition.x - 128,
            top: mousePosition.y - 128,
          }}
        />
      </div>

      {/* Header */}
      <div className="text-center mb-12 relative z-10">
        <div className={`flex justify-center mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Badge variant="secondary" className="text-sm bg-gradient-to-r from-purple-50 to-blue-50 text-purple-700 border-purple-200/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 px-6 py-2">
            <Bot className="h-4 w-4 mr-2 animate-pulse" />
            AI-Powered MCP Creation
            <Sparkles className="h-4 w-4 ml-2" />
          </Badge>
        </div>
        
        <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block">Create Custom MCPs with</span>{" "}
          <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent animate-gradient-x bg-300% inline-block">
            AI Magic
          </span>
        </h1>
        
        <p className={`text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Describe your desired MCP functionality in plain English and watch as our advanced AI generates 
          <span className="text-foreground font-semibold"> production-ready code</span> tailored to your exact needs.
        </p>
        
        {/* Current Package Status */}
        {currentPackage.mcps.length > 0 && (
          <div className={`inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-muted/50 to-muted/30 backdrop-blur-sm rounded-full text-sm border border-border/50 shadow-lg transition-all duration-1000 delay-600 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Package className="h-4 w-4 text-purple-600" />
            <span>Current package: <strong className="text-purple-700">{currentPackage.name}</strong> ({currentPackage.mcps.length} MCPs)</span>
          </div>
        )}
      </div>

      {/* Progress Steps */}
      <div className={`flex justify-center mb-12 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center space-x-6 bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
          {[
            { key: 'prompt', icon: Brain, label: 'Describe', color: 'from-purple-500 to-pink-500' },
            { key: 'generate', icon: Cpu, label: 'Generate', color: 'from-blue-500 to-cyan-500' },
            { key: 'test', icon: TestTube, label: 'Test', color: 'from-green-500 to-emerald-500' },
            { key: 'save', icon: Package, label: 'Save', color: 'from-orange-500 to-red-500' }
          ].map((step, index) => (
            <div key={step.key} className="flex items-center group">
              <div className={`relative flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 ${
                currentStep === step.key 
                  ? `bg-gradient-to-br ${step.color} text-white shadow-lg scale-110` 
                  : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:scale-105'
              }`}>
                <step.icon className={`h-5 w-5 transition-all duration-300 ${currentStep === step.key ? 'animate-pulse' : 'group-hover:animate-bounce'}`} />
                {currentStep === step.key && (
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent" />
                )}
              </div>
              <span className={`ml-3 text-sm font-semibold transition-colors duration-300 ${
                currentStep === step.key ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground'
              }`}>
                {step.label}
              </span>
              {index < 3 && (
                <div className={`w-12 h-0.5 mx-6 rounded-full transition-colors duration-300 ${
                  currentStep === step.key ? 'bg-gradient-to-r from-purple-500 to-blue-500' : 'bg-muted-foreground/30'
                }`} />
              )}
            </div>
          ))}
        </div>
      </div>  
      {/* Main Content Area */}
      <div className="grid lg:grid-cols-3 gap-8 relative z-10">
        {/* Left Column - AI Interface */}
        <div className={`lg:col-span-2 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Card className="h-full card-premium border-0 shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <CardHeader className="relative z-10">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="p-2 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 text-white shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  <Bot className="h-6 w-6 group-hover:animate-pulse" />
                </div>
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  AI MCP Creator
                </span>
              </CardTitle>
              <CardDescription className="text-lg text-muted-foreground">
                Describe what you want your MCP to do, and our advanced AI will generate production-ready code for you.
              </CardDescription>
            </CardHeader>
            
            <CardContent className="relative z-10">
              <div className="space-y-8">
                {/* Prompt Input Area - Enhanced Placeholder */}
                <div className="min-h-[450px] border-2 border-dashed border-purple-200/50 rounded-2xl flex items-center justify-center bg-gradient-to-br from-purple-50/50 to-blue-50/50 backdrop-blur-sm group-hover:border-purple-300/50 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="text-center text-muted-foreground relative z-10">
                    <div className="relative mb-6">
                      <Sparkles className="h-16 w-16 mx-auto mb-4 text-purple-400 animate-pulse" />
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full animate-bounce" />
                      <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
                    </div>
                    <p className="text-xl font-semibold mb-3 text-gradient-purple">AI Conversation Interface</p>
                    <p className="text-sm max-w-md mx-auto leading-relaxed">
                      This will be your intelligent conversational interface where you can describe your MCP requirements 
                      and iterate with AI to create the perfect solution.
                    </p>
                    <div className="mt-6 flex justify-center gap-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                      <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                    </div>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-4">
                  <Button className="flex-1 btn-premium text-lg py-6 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                    <Sparkles className="h-5 w-5 mr-3 group-hover:animate-spin" />
                    Generate MCP with AI
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-2 h-2 bg-white/50 rounded-full animate-pulse" />
                    </div>
                  </Button>
                  <Button variant="outline" className="px-8 py-6 hover:bg-muted/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                    <TestTube className="h-5 w-5 mr-2 group-hover:animate-bounce" />
                    Test & Validate
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Info & Examples */}
        <div className={`space-y-6 transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Quick Examples */}
          <Card className="card-premium border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <CardHeader className="relative z-10">
              <CardTitle className="text-xl flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 text-white shadow-lg">
                  <Sparkles className="h-4 w-4" />
                </div>
                Example Prompts
              </CardTitle>
              <CardDescription>
                Try these examples to get started with AI generation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 relative z-10">
              {[
                {
                  title: "Database Helper",
                  prompt: "Create an MCP that helps me query my PostgreSQL database using natural language",
                  icon: "🗄️"
                },
                {
                  title: "Git Assistant", 
                  prompt: "Build an MCP that automates git workflows with conventional commits",
                  icon: "🔀"
                },
                {
                  title: "API Generator",
                  prompt: "Generate an MCP that creates REST API documentation from code",
                  icon: "🔌"
                }
              ].map((example, index) => (
                <div key={index} className="p-4 border border-border/50 rounded-xl hover:bg-gradient-to-r hover:from-green-50/50 hover:to-emerald-50/50 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg group/item backdrop-blur-sm">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl group-hover/item:animate-bounce">{example.icon}</div>
                    <div className="flex-1">
                      <p className="font-semibold text-sm mb-2 group-hover/item:text-green-700 transition-colors duration-300">{example.title}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed group-hover/item:text-green-600 transition-colors duration-300">{example.prompt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Model Selection */}
          <Card className="card-premium border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <CardHeader className="relative z-10">
              <CardTitle className="text-xl flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 text-white shadow-lg">
                  <Cpu className="h-4 w-4" />
                </div>
                AI Model Selection
              </CardTitle>
              <CardDescription>
                Choose your preferred AI model for generation
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="space-y-3">
                {[
                  { name: "GPT-4", description: "Best for complex logic", tier: "Pro", color: "from-purple-500 to-pink-500", icon: "🧠" },
                  { name: "Claude-3", description: "Great for code quality", tier: "Pro", color: "from-orange-500 to-red-500", icon: "🎯" },
                  { name: "Mixtral", description: "Fast and efficient", tier: "Free", color: "from-green-500 to-emerald-500", icon: "⚡" }
                ].map((model, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-border/50 rounded-xl hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-indigo-50/50 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg group/model backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                      <div className="text-xl group-hover/model:animate-pulse">{model.icon}</div>
                      <div>
                        <p className="font-semibold text-sm group-hover/model:text-blue-700 transition-colors duration-300">{model.name}</p>
                        <p className="text-xs text-muted-foreground group-hover/model:text-blue-600 transition-colors duration-300">{model.description}</p>
                      </div>
                    </div>
                    <Badge 
                      variant={model.tier === "Pro" ? "default" : "secondary"} 
                      className={`text-xs transition-all duration-300 ${model.tier === "Pro" ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-lg' : 'hover:bg-green-100'}`}
                    >
                      {model.tier}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="card-premium border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <CardHeader className="relative z-10">
              <CardTitle className="text-xl flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 text-white shadow-lg">
                  <Zap className="h-4 w-4" />
                </div>
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 relative z-10">
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full justify-start hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 hover:border-orange-200 transition-all duration-300 hover:scale-105 hover:shadow-lg group/btn backdrop-blur-sm" 
                asChild
              >
                <Link href="/browse">
                  <Package className="h-4 w-4 mr-3 group-hover/btn:animate-bounce" />
                  Browse Existing MCPs
                  <div className="ml-auto opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300">
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse" />
                  </div>
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full justify-start hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 hover:border-orange-200 transition-all duration-300 hover:scale-105 hover:shadow-lg group/btn backdrop-blur-sm" 
                asChild
              >
                <Link href="/packages">
                  <Zap className="h-4 w-4 mr-3 group-hover/btn:animate-pulse" />
                  View My Packages
                  <div className="ml-auto opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300">
                    <div className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse" />
                  </div>
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}