import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Code, Terminal, CheckCircle, Lightbulb } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Create a Custom MCP Server from Scratch - Complete Guide 2025",
  description: "Learn how to create a custom MCP server step-by-step. Complete tutorial with TypeScript and Python examples, best practices, and deployment guide for Model Context Protocol development.",
  keywords: "create custom MCP server, MCP server development, Model Context Protocol tutorial, custom MCP guide, MCP TypeScript, MCP Python, how to build MCP",
  openGraph: {
    title: "How to Create a Custom MCP Server from Scratch - Complete Guide",
    description: "Step-by-step tutorial to build your own Model Context Protocol server with code examples",
    type: "article",
    url: "https://mcpdirectory.app/blog/how-to-create-custom-mcp-server",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Create a Custom MCP Server from Scratch",
    description: "Complete tutorial with TypeScript and Python examples",
  },
};

export default function CreateCustomMCPServerPage() {
  return (
    <div className="container px-4 py-8 mx-auto max-w-4xl">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="secondary">Tutorial</Badge>
          <Badge variant="outline">15 min read</Badge>
          <Badge variant="outline">Beginner Friendly</Badge>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          How to Create a Custom MCP Server from Scratch
        </h1>
        <p className="text-xl text-muted-foreground mb-6">
          Learn how to build your own Model Context Protocol server with step-by-step instructions, 
          code examples, and best practices for both TypeScript and Python implementations.
        </p>
        <div className="text-sm text-muted-foreground">
          Published on January 15, 2025 • Updated for MCP SDK v1.0.2
        </div>
      </div>

      {/* Table of Contents */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="#what-is-mcp" className="text-primary hover:underline">1. What is a Model Context Protocol Server?</Link></li>
            <li><Link href="#prerequisites" className="text-primary hover:underline">2. Prerequisites and Setup</Link></li>
            <li><Link href="#typescript-implementation" className="text-primary hover:underline">3. Creating an MCP Server with TypeScript</Link></li>
            <li><Link href="#python-implementation" className="text-primary hover:underline">4. Creating an MCP Server with Python</Link></li>
            <li><Link href="#testing" className="text-primary hover:underline">5. Testing Your Custom MCP Server</Link></li>
            <li><Link href="#deployment" className="text-primary hover:underline">6. Deployment and Distribution</Link></li>
            <li><Link href="#best-practices" className="text-primary hover:underline">7. Best Practices and Tips</Link></li>
          </ul>
        </CardContent>
      </Card>

      {/* Article Content */}
      <article className="prose prose-lg max-w-none">
        <section id="what-is-mcp" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Code className="h-6 w-6" />
            What is a Model Context Protocol Server?
          </h2>
          <p className="text-muted-foreground mb-4">
            A Model Context Protocol (MCP) server is a standardized way to extend AI assistants with custom functionality. 
            Instead of building separate plugins for each AI platform, MCPs provide a universal interface that works 
            across different AI tools like Claude, ChatGPT, and others.
          </p>
          <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
            <div className="flex items-start gap-3">
              <Lightbulb className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <p className="font-medium text-blue-900 dark:text-blue-100 mb-1">Why Create Custom MCPs?</p>
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  Custom MCPs allow you to integrate your specific tools, databases, APIs, and workflows 
                  directly into AI assistants, making them more powerful and tailored to your needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="prerequisites" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Terminal className="h-6 w-6" />
            Prerequisites and Setup
          </h2>
          <p className="mb-4">Before we start creating your custom MCP server, make sure you have:</p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              Node.js 18+ or Python 3.8+ installed
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              Basic knowledge of TypeScript/JavaScript or Python
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              An AI assistant that supports MCPs (Claude Desktop, VS Code, Cursor, Windsurf, etc.)
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              A code editor (VS Code recommended)
            </li>
          </ul>
        </section>

        <section id="typescript-implementation" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Creating an MCP Server with TypeScript</h2>
          <p className="mb-4">
            Let's create a simple MCP server that provides weather information. This example will demonstrate 
            the core concepts you need to build any custom MCP.
          </p>
          
          <div className="bg-gray-900 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre className="text-green-400 text-sm">
{`// package.json
{
  "name": "weather-mcp-server",
  "version": "1.0.0",
  "type": "module",
  "dependencies": {
    "@modelcontextprotocol/sdk": "^1.0.2",
    "axios": "^1.7.0"
  },
  "scripts": {
    "start": "node dist/index.js",
    "build": "tsc",
    "dev": "tsx src/index.ts"
  },
  "devDependencies": {
    "tsx": "^4.7.0",
    "typescript": "^5.3.0"
  }
}`}
            </pre>
          </div>

          <div className="bg-gray-900 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre className="text-green-400 text-sm">
{`// src/index.ts
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import axios from 'axios';

class WeatherMCPServer {
  private server: Server;

  constructor() {
    this.server = new Server(
      {
        name: 'weather-mcp-server',
        version: '1.0.0',
      },
      {
        capabilities: {
          tools: {},
        },
      }
    );

    this.setupToolHandlers();
  }

  private setupToolHandlers() {
    // Register the get_weather tool
    this.server.setRequestHandler('tools/list', async () => {
      return {
        tools: [
          {
            name: 'get_weather',
            description: 'Get current weather for a city',
            inputSchema: {
              type: 'object',
              properties: {
                city: {
                  type: 'string',
                  description: 'City name',
                },
              },
              required: ['city'],
            },
          },
        ],
      };
    });

    // Handle tool calls
    this.server.setRequestHandler('tools/call', async (request) => {
      const { name, arguments: args } = request.params;

      if (name === 'get_weather') {
        const { city } = args as { city: string };
        
        try {
          // Replace with your weather API
          const response = await axios.get(
            \`https://api.openweathermap.org/data/2.5/weather?q=\${city}&appid=YOUR_API_KEY&units=metric\`
          );
          
          const weather = response.data;
          
          return {
            content: [
              {
                type: 'text',
                text: \`Weather in \${city}: \${weather.main.temp}°C, \${weather.weather[0].description}\`,
              },
            ],
          };
        } catch (error) {
          return {
            content: [
              {
                type: 'text',
                text: \`Error getting weather for \${city}: \${error.message}\`,
              },
            ],
            isError: true,
          };
        }
      }

      throw new Error(\`Unknown tool: \${name}\`);
    });
  }

  async run() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
  }
}

const server = new WeatherMCPServer();
server.run().catch(console.error);`}
            </pre>
          </div>
        </section>

        <section id="python-implementation" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Creating an MCP Server with Python</h2>
          <p className="mb-4">
            Here's the same weather MCP server implemented in Python using the MCP SDK:
          </p>
          
          <div className="bg-gray-900 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre className="text-green-400 text-sm">
{`# requirements.txt
mcp>=1.0.0
requests>=2.32.0
pydantic>=2.5.0`}
            </pre>
          </div>

          <div className="bg-gray-900 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre className="text-green-400 text-sm">
{`# weather_mcp_server.py
import asyncio
import json
import requests
from mcp.server import Server
from mcp.server.stdio import stdio_server
from mcp.types import Tool, TextContent

app = Server("weather-mcp-server")

@app.list_tools()
async def list_tools() -> list[Tool]:
    return [
        Tool(
            name="get_weather",
            description="Get current weather for a city",
            inputSchema={
                "type": "object",
                "properties": {
                    "city": {
                        "type": "string",
                        "description": "City name"
                    }
                },
                "required": ["city"]
            }
        )
    ]

@app.call_tool()
async def call_tool(name: str, arguments: dict) -> list[TextContent]:
    if name == "get_weather":
        city = arguments.get("city")
        
        try:
            # Replace with your weather API key
            response = requests.get(
                f"https://api.openweathermap.org/data/2.5/weather?q={city}&appid=YOUR_API_KEY&units=metric"
            )
            response.raise_for_status()
            weather = response.json()
            
            return [
                TextContent(
                    type="text",
                    text=f"Weather in {city}: {weather['main']['temp']}°C, {weather['weather'][0]['description']}"
                )
            ]
        except Exception as e:
            return [
                TextContent(
                    type="text",
                    text=f"Error getting weather for {city}: {str(e)}"
                )
            ]
    
    raise ValueError(f"Unknown tool: {name}")

async def main():
    async with stdio_server() as streams:
        await app.run(streams[0], streams[1])

if __name__ == "__main__":
    asyncio.run(main())`}
            </pre>
          </div>
        </section>

        <section id="testing" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Testing Your Custom MCP Server</h2>
          <p className="mb-4">
            Once you've built your MCP server, you need to test it to ensure it works correctly:
          </p>
          <ol className="list-decimal list-inside space-y-3 mb-6">
            <li><strong>Build your server:</strong> Compile TypeScript or ensure Python dependencies are installed</li>
            <li><strong>Configure your AI assistant:</strong> Add your MCP server to your AI tool's configuration</li>
            <li><strong>Test the connection:</strong> Verify the MCP server starts without errors</li>
            <li><strong>Test functionality:</strong> Try calling your custom tools through the AI assistant</li>
          </ol>
        </section>

        <section id="deployment" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Deployment and Distribution</h2>
          <p className="mb-4">
            To share your custom MCP server with others, you can:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>Publish to npm (for TypeScript/JavaScript MCPs) with @modelcontextprotocol scope</li>
            <li>Publish to PyPI (for Python MCPs) with proper MCP metadata</li>
            <li>Create a GitHub repository with installation instructions and MCP manifest</li>
            <li>Submit to the official MCP servers repository on GitHub</li>
            <li>List in the MCP Directory for broader community discovery</li>
            <li>Use the MCP installer tools for easy distribution</li>
          </ul>
        </section>

        <section id="best-practices" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Best Practices and Tips</h2>
          <div className="space-y-4">
            <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
              <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">✅ Do:</h3>
              <ul className="text-green-800 dark:text-green-200 text-sm space-y-1">
                <li>• Provide clear, descriptive tool names and descriptions</li>
                <li>• Include comprehensive input validation</li>
                <li>• Handle errors gracefully with helpful messages</li>
                <li>• Document your MCP server thoroughly</li>
                <li>• Test with multiple AI assistants</li>
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
              <h3 className="font-semibold text-red-900 dark:text-red-100 mb-2">❌ Don't:</h3>
              <ul className="text-red-800 dark:text-red-200 text-sm space-y-1">
                <li>• Expose sensitive information in error messages</li>
                <li>• Make blocking calls without proper timeout handling</li>
                <li>• Ignore input validation and sanitization</li>
                <li>• Create overly complex tool interfaces</li>
                <li>• Forget to handle edge cases and errors</li>
              </ul>
            </div>
          </div>
        </section>
      </article>

      {/* CTA Section */}
      <div className="mt-16 p-8 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Create Your Custom MCP?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Skip the manual coding and use our AI-powered MCP creator to generate a custom 
          Model Context Protocol server tailored to your specific needs in minutes.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/create">
              Create Custom MCP with AI
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/browse">
              Browse Existing MCPs
            </Link>
          </Button>
        </div>
      </div>

      {/* Related Articles */}
      <div className="mt-12">
        <h3 className="text-xl font-bold mb-4">Related Articles</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <h4 className="font-semibold mb-2">
                <Link href="/blog/best-mcps-2025" className="hover:text-primary">
                  The 25 Best MCPs Every Developer Should Know
                </Link>
              </h4>
              <p className="text-sm text-muted-foreground">
                Discover the most popular and useful MCPs for your development workflow.
              </p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <h4 className="font-semibold mb-2">
                <Link href="/blog/create-custom-mcp-ai-assistant" className="hover:text-primary">
                  Create a Custom MCP in 10 Minutes
                </Link>
              </h4>
              <p className="text-sm text-muted-foreground">
                Quick tutorial for building MCPs that work with AI assistants.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}