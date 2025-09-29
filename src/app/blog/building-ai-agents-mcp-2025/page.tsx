import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, TrendingUp, Rocket, Code } from "lucide-react";

export const metadata: Metadata = {
  title: "Building AI Agents with MCP: Complete 2025 Developer Guide",
  description: "Learn to build powerful AI agents using Model Context Protocol in 2025. Complete guide with code examples, best practices, and real-world use cases for autonomous AI agent development.",
  keywords: "build AI agents MCP, Model Context Protocol agents, AI agent development 2025, autonomous AI agents, MCP agent tutorial, AI agent architecture, MCP SDK agents, intelligent agents MCP",
  openGraph: {
    title: "Building AI Agents with MCP: Complete 2025 Developer Guide",
    description: "Master AI agent development with Model Context Protocol. Code examples, architecture patterns, and best practices for building autonomous AI agents.",
    type: "article",
    url: "https://mcpdirectory.app/blog/building-ai-agents-mcp-2025",
    siteName: "MCP Directory",
    publishedTime: "2025-01-18T08:00:00.000Z",
    modifiedTime: "2025-01-18T08:00:00.000Z",
    authors: ["MCP Directory AI Team"],
    tags: ["AI Agents", "MCP", "Development", "Tutorial", "2025"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Building AI Agents with MCP: Complete 2025 Developer Guide",
    description: "Master AI agent development with Model Context Protocol. Code examples and best practices for autonomous AI agents.",
    site: "@mcpdirectory",
  },
  alternates: {
    canonical: "https://mcpdirectory.app/blog/building-ai-agents-mcp-2025",
  },
};

export default function BuildingAIAgentsPage() {
  return (
    <article className="container px-4 py-8 mx-auto max-w-4xl">
      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="secondary">Tutorial</Badge>
          <Badge variant="secondary">
            <Rocket className="h-3 w-3 mr-1" />
            AI Agents
          </Badge>
          <Badge variant="secondary">
            <TrendingUp className="h-3 w-3 mr-1" />
            2025 Guide
          </Badge>
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="h-4 w-4 mr-1" />
            January 18, 2025
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="h-4 w-4 mr-1" />
            22 min read
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Building AI Agents with MCP: Complete 2025 Developer Guide
        </h1>
        
        <p className="text-xl text-muted-foreground mb-6">
          Learn to build powerful, autonomous AI agents using Model Context Protocol. This comprehensive guide covers 
          architecture patterns, implementation strategies, and real-world examples for creating intelligent agents 
          that can interact with tools, APIs, and external systems.
        </p>

        <div className="flex items-center gap-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <Rocket className="h-5 w-5 text-blue-600" />
          <div>
            <p className="font-medium text-blue-800">What You'll Build</p>
            <p className="text-sm text-blue-700">
              A fully autonomous AI agent that can execute tasks, make decisions, and interact with multiple systems using MCP.
            </p>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="prose prose-lg max-w-none">
        <h2>The Rise of AI Agents in 2025</h2>
        <p>
          2025 has marked a turning point in AI development. We've moved beyond simple chatbots to sophisticated AI agents 
          capable of autonomous decision-making, tool usage, and complex task execution. Model Context Protocol (MCP) has 
          emerged as the standard for building these intelligent agents, providing a robust framework for AI-tool integration.
        </p>

        <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
          <p className="mb-0">
            <strong>Key Insight:</strong> AI agents built with MCP can autonomously interact with over 1,200 different 
            tools and services, making them incredibly versatile for business automation and development workflows.
          </p>
        </div>

        <h2>What Makes a Great AI Agent?</h2>
        <p>
          Before diving into implementation, let's understand the key characteristics of effective AI agents:
        </p>

        <ul>
          <li><strong>Autonomy:</strong> Can make decisions without constant human intervention</li>
          <li><strong>Reactivity:</strong> Responds to changes in the environment</li>
          <li><strong>Proactivity:</strong> Takes initiative to achieve goals</li>
          <li><strong>Social Ability:</strong> Interacts with other agents and humans</li>
          <li><strong>Tool Usage:</strong> Can effectively use external tools and APIs</li>
        </ul>

        <h2>MCP Agent Architecture</h2>
        <p>
          A well-designed MCP agent follows a layered architecture that separates concerns and enables scalability:
        </p>

        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
          <code>{`┌─────────────────────────────────────┐
│           Agent Controller          │
├─────────────────────────────────────┤
│         Decision Engine             │
├─────────────────────────────────────┤
│         Memory System               │
├─────────────────────────────────────┤
│         MCP Tool Manager            │
├─────────────────────────────────────┤
│    MCP Servers (Tools & Services)   │
└─────────────────────────────────────┘`}</code>
        </pre>

        <h2>Building Your First MCP Agent</h2>
        <p>
          Let's build a practical AI agent that can manage development workflows. This agent will be able to:
        </p>

        <ul>
          <li>Monitor GitHub repositories for new issues</li>
          <li>Analyze code quality and suggest improvements</li>
          <li>Create pull requests with fixes</li>
          <li>Send notifications via Slack</li>
        </ul>

        <h3>Step 1: Setting Up the Agent Foundation</h3>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
          <code>{`import { MCPClient } from '@modelcontextprotocol/sdk/client/index.js';
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js';

class DevWorkflowAgent {
  private mcpClients: Map<string, MCPClient> = new Map();
  private memory: AgentMemory;
  private decisionEngine: DecisionEngine;

  constructor() {
    this.memory = new AgentMemory();
    this.decisionEngine = new DecisionEngine();
    this.initializeMCPConnections();
  }

  private async initializeMCPConnections() {
    // Connect to GitHub MCP server
    const githubTransport = new StdioClientTransport({
      command: 'mcp-server-github',
      args: ['--token', process.env.GITHUB_TOKEN]
    });
    const githubClient = new MCPClient({
      name: 'dev-agent',
      version: '1.0.0'
    }, {
      capabilities: {}
    });
    
    await githubClient.connect(githubTransport);
    this.mcpClients.set('github', githubClient);

    // Connect to Slack MCP server
    const slackTransport = new StdioClientTransport({
      command: 'mcp-server-slack',
      args: ['--token', process.env.SLACK_TOKEN]
    });
    const slackClient = new MCPClient({
      name: 'dev-agent',
      version: '1.0.0'
    }, {
      capabilities: {}
    });
    
    await slackClient.connect(slackTransport);
    this.mcpClients.set('slack', slackClient);
  }
}`}</code>
        </pre>

        <h3>Step 2: Implementing the Decision Engine</h3>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
          <code>{`class DecisionEngine {
  async processTask(task: Task, context: AgentContext): Promise<Action[]> {
    const prompt = this.buildDecisionPrompt(task, context);
    
    // Use your preferred LLM (Claude, GPT-4, etc.)
    const response = await this.llm.complete({
      messages: [
        {
          role: 'system',
          content: 'You are an autonomous development agent. Analyze the task and determine the best sequence of actions.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      tools: this.getAvailableTools()
    });

    return this.parseActionsFromResponse(response);
  }

  private buildDecisionPrompt(task: Task, context: AgentContext): string {
    return \`
Task: \${task.description}
Context: \${JSON.stringify(context, null, 2)}
Available Tools: \${this.getToolDescriptions()}

Determine the optimal sequence of actions to complete this task.
Consider efficiency, error handling, and user impact.
    \`;
  }
}`}</code>
        </pre>

        <h3>Step 3: Memory System Implementation</h3>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
          <code>{`class AgentMemory {
  private shortTermMemory: Map<string, any> = new Map();
  private longTermMemory: VectorStore;
  private workingMemory: WorkingMemoryBuffer;

  constructor() {
    this.longTermMemory = new VectorStore({
      dimension: 1536, // OpenAI embedding dimension
      metric: 'cosine'
    });
    this.workingMemory = new WorkingMemoryBuffer(100); // Keep last 100 interactions
  }

  async remember(key: string, value: any, importance: number = 0.5) {
    // Store in short-term memory
    this.shortTermMemory.set(key, {
      value,
      timestamp: Date.now(),
      importance
    });

    // If important enough, store in long-term memory
    if (importance > 0.7) {
      const embedding = await this.generateEmbedding(JSON.stringify(value));
      await this.longTermMemory.add({
        id: key,
        vector: embedding,
        metadata: { value, timestamp: Date.now(), importance }
      });
    }
  }

  async recall(query: string, limit: number = 5): Promise<any[]> {
    const queryEmbedding = await this.generateEmbedding(query);
    const results = await this.longTermMemory.search(queryEmbedding, limit);
    
    return results.map(result => result.metadata.value);
  }
}`}</code>
        </pre>

        <h3>Step 4: Tool Execution and Error Handling</h3>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
          <code>{`class ToolManager {
  async executeTool(toolName: string, parameters: any, retries: number = 3): Promise<any> {
    const client = this.getClientForTool(toolName);
    
    for (let attempt = 1; attempt <= retries; attempt++) {
      try {
        const result = await client.callTool({
          name: toolName,
          arguments: parameters
        });

        // Log successful execution
        await this.memory.remember(\`tool_execution_\${Date.now()}\`, {
          tool: toolName,
          parameters,
          result,
          success: true,
          attempt
        }, 0.6);

        return result;
      } catch (error) {
        console.warn(\`Tool execution failed (attempt \${attempt}/\${retries}):\`, error);
        
        if (attempt === retries) {
          // Log failed execution
          await this.memory.remember(\`tool_execution_error_\${Date.now()}\`, {
            tool: toolName,
            parameters,
            error: error.message,
            success: false,
            attempts: retries
          }, 0.8);
          
          throw new ToolExecutionError(\`Failed to execute \${toolName} after \${retries} attempts\`, error);
        }
        
        // Wait before retry with exponential backoff
        await this.sleep(Math.pow(2, attempt) * 1000);
      }
    }
  }
}`}</code>
        </pre>

        <h2>Advanced Agent Patterns</h2>

        <h3>Multi-Agent Collaboration</h3>
        <p>
          For complex tasks, you can create specialized agents that work together:
        </p>

        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
          <code>{`class AgentOrchestrator {
  private agents: Map<string, Agent> = new Map();

  constructor() {
    this.agents.set('coder', new CodingAgent());
    this.agents.set('reviewer', new CodeReviewAgent());
    this.agents.set('deployer', new DeploymentAgent());
    this.agents.set('monitor', new MonitoringAgent());
  }

  async executeWorkflow(workflow: Workflow): Promise<WorkflowResult> {
    const results: Map<string, any> = new Map();
    
    for (const step of workflow.steps) {
      const agent = this.agents.get(step.agentType);
      if (!agent) {
        throw new Error(\`Unknown agent type: \${step.agentType}\`);
      }

      const context = this.buildStepContext(step, results);
      const result = await agent.execute(step.task, context);
      
      results.set(step.id, result);
      
      // Allow agents to communicate
      await this.broadcastStepCompletion(step, result);
    }

    return new WorkflowResult(results);
  }
}`}</code>
        </pre>

        <h2>Real-World Use Cases</h2>

        <h3>1. Customer Support Agent</h3>
        <p>
          An AI agent that can handle customer inquiries, access knowledge bases, and escalate complex issues:
        </p>

        <ul>
          <li>Connects to CRM systems via MCP</li>
          <li>Accesses product documentation</li>
          <li>Creates support tickets</li>
          <li>Schedules follow-up calls</li>
        </ul>

        <h3>2. DevOps Automation Agent</h3>
        <p>
          Automates deployment pipelines and infrastructure management:
        </p>

        <ul>
          <li>Monitors application health</li>
          <li>Automatically scales resources</li>
          <li>Handles incident response</li>
          <li>Updates documentation</li>
        </ul>

        <h3>3. Content Creation Agent</h3>
        <p>
          Generates and manages content across multiple platforms:
        </p>

        <ul>
          <li>Creates blog posts and social media content</li>
          <li>Optimizes for SEO</li>
          <li>Schedules publications</li>
          <li>Analyzes performance metrics</li>
        </ul>

        <h2>Best Practices for MCP Agents</h2>

        <h3>1. Design for Observability</h3>
        <p>
          Always implement comprehensive logging and monitoring:
        </p>

        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
          <code>{`class ObservableAgent extends BaseAgent {
  async execute(task: Task): Promise<Result> {
    const traceId = this.generateTraceId();
    
    try {
      this.logger.info('Task started', { traceId, task });
      
      const result = await super.execute(task);
      
      this.logger.info('Task completed', { traceId, result });
      this.metrics.incrementCounter('tasks_completed');
      
      return result;
    } catch (error) {
      this.logger.error('Task failed', { traceId, error });
      this.metrics.incrementCounter('tasks_failed');
      throw error;
    }
  }
}`}</code>
        </pre>

        <h3>2. Implement Circuit Breakers</h3>
        <p>
          Protect your agent from cascading failures:
        </p>

        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
          <code>{`class CircuitBreaker {
  private failures: number = 0;
  private lastFailureTime: number = 0;
  private state: 'CLOSED' | 'OPEN' | 'HALF_OPEN' = 'CLOSED';

  async execute<T>(operation: () => Promise<T>): Promise<T> {
    if (this.state === 'OPEN') {
      if (Date.now() - this.lastFailureTime > this.timeout) {
        this.state = 'HALF_OPEN';
      } else {
        throw new Error('Circuit breaker is OPEN');
      }
    }

    try {
      const result = await operation();
      this.onSuccess();
      return result;
    } catch (error) {
      this.onFailure();
      throw error;
    }
  }
}`}</code>
        </pre>

        <h2>Testing Your AI Agent</h2>
        <p>
          Testing AI agents requires a different approach than traditional software:
        </p>

        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
          <code>{`describe('DevWorkflowAgent', () => {
  let agent: DevWorkflowAgent;
  let mockMCPClients: Map<string, MockMCPClient>;

  beforeEach(() => {
    mockMCPClients = new Map();
    agent = new DevWorkflowAgent(mockMCPClients);
  });

  test('should handle GitHub issue creation workflow', async () => {
    // Arrange
    const task = new Task('Create issue for bug report', {
      repository: 'test/repo',
      title: 'Bug in login flow',
      description: 'Users cannot log in'
    });

    mockMCPClients.get('github').mockTool('create_issue', {
      id: 123,
      url: 'https://github.com/test/repo/issues/123'
    });

    // Act
    const result = await agent.execute(task);

    // Assert
    expect(result.success).toBe(true);
    expect(result.data.issueId).toBe(123);
    expect(mockMCPClients.get('github').getToolCalls()).toHaveLength(1);
  });
});`}</code>
        </pre>

        <h2>Deployment and Scaling</h2>
        <p>
          When deploying AI agents to production, consider these factors:
        </p>

        <h3>Container Orchestration</h3>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
          <code>{`# docker-compose.yml
version: '3.8'
services:
  ai-agent:
    build: .
    environment:
      - NODE_ENV=production
      - GITHUB_TOKEN=\${GITHUB_TOKEN}
      - SLACK_TOKEN=\${SLACK_TOKEN}
    volumes:
      - ./logs:/app/logs
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000/health"]
      interval: 30s
      timeout: 10s
      retries: 3

  redis:
    image: redis:alpine
    volumes:
      - redis_data:/data

volumes:
  redis_data:`}</code>
        </pre>

        <h2>Future of AI Agents</h2>
        <p>
          As we progress through 2025, AI agents are becoming more sophisticated. Key trends include:
        </p>

        <ul>
          <li><strong>Multi-modal capabilities:</strong> Agents that can process text, images, audio, and video</li>
          <li><strong>Federated learning:</strong> Agents that learn from collective experiences</li>
          <li><strong>Quantum integration:</strong> Leveraging quantum computing for complex decision-making</li>
          <li><strong>Ethical AI frameworks:</strong> Built-in ethical decision-making capabilities</li>
        </ul>

        <h2>Conclusion</h2>
        <p>
          Building AI agents with MCP opens up incredible possibilities for automation and intelligent task execution. 
          The key to success is starting with clear objectives, implementing robust error handling, and continuously 
          monitoring and improving your agent's performance.
        </p>

        <p>
          Remember that AI agents are powerful tools that require careful consideration of security, ethics, and user impact. 
          Always test thoroughly and implement proper safeguards before deploying to production environments.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
          <p className="mb-0">
            <strong>Next Steps:</strong> Start with a simple agent that performs one task well, then gradually add 
            complexity. The MCP ecosystem provides all the tools you need to build sophisticated AI agents that can 
            transform your workflows.
          </p>
        </div>
      </div>

      {/* Related Articles */}
      <section className="mt-12 pt-8 border-t">
        <h2 className="text-2xl font-bold mb-6">Related Development Guides</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">
                <Link href="/blog/how-to-create-custom-mcp-server" className="hover:text-primary">
                  How to Create a Custom MCP Server from Scratch
                </Link>
              </CardTitle>
              <CardDescription>
                Foundation knowledge for building the tools your AI agents will use
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">
                <Link href="/blog/ai-agent-security-mcp-2025" className="hover:text-primary">
                  AI Agent Security: Essential Best Practices for MCP
                </Link>
              </CardTitle>
              <CardDescription>
                Critical security practices for protecting your AI agent infrastructure
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-12 text-center bg-muted/50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Ready to Build Your AI Agent?</h2>
        <p className="text-muted-foreground mb-6">
          Start with our MCP server templates or browse existing tools to power your AI agent.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/create">
              Create MCP Server
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/browse">
              Browse MCP Tools
            </Link>
          </Button>
        </div>
      </section>

      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            "headline": "Building AI Agents with MCP: Complete 2025 Developer Guide",
            "description": "Learn to build powerful AI agents using Model Context Protocol in 2025. Complete guide with code examples and best practices.",
            "image": "https://mcpdirectory.app/blog/ai-agents-mcp-og.png",
            "author": {
              "@type": "Organization",
              "name": "MCP Directory AI Team"
            },
            "publisher": {
              "@type": "Organization",
              "name": "MCP Directory",
              "logo": {
                "@type": "ImageObject",
                "url": "https://mcpdirectory.app/logo.png"
              }
            },
            "datePublished": "2025-01-18T08:00:00.000Z",
            "dateModified": "2025-01-18T08:00:00.000Z",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://mcpdirectory.app/blog/building-ai-agents-mcp-2025"
            },
            "articleSection": "AI Development",
            "keywords": "AI agents, MCP, Model Context Protocol, autonomous agents, AI development",
            "wordCount": 2200,
            "timeRequired": "PT22M",
            "proficiencyLevel": "Intermediate"
          })
        }}
      />
    </article>
  );
}