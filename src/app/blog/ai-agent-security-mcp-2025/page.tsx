import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, TrendingUp, Zap, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Agent Security Best Practices for MCP Servers in 2025",
  description: "Essential security practices for Model Context Protocol servers and AI agents in 2025. Learn authentication, sandboxing, rate limiting, and vulnerability prevention with real-world examples and code samples.",
  keywords: "AI agent security, MCP server security, Model Context Protocol security, AI security best practices 2025, secure AI development, MCP authentication, AI agent sandboxing, secure MCP deployment",
  openGraph: {
    title: "AI Agent Security: Essential MCP Server Protection Guide for 2025",
    description: "Comprehensive security guide for Model Context Protocol servers. Authentication, sandboxing, and vulnerability prevention for AI agents.",
    type: "article",
    url: "https://mcpdirectory.app/blog/ai-agent-security-mcp-2025",
    siteName: "MCP Directory",
    publishedTime: "2025-01-10T09:00:00.000Z",
    modifiedTime: "2025-01-10T09:00:00.000Z",
    authors: ["MCP Directory Security Team"],
    tags: ["Security", "MCP", "AI Agents", "Best Practices", "2025"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Agent Security: Essential MCP Server Protection for 2025",
    description: "Learn critical security practices for Model Context Protocol servers and AI agents with practical examples.",
    site: "@mcpdirectory",
  },
  alternates: {
    canonical: "https://mcpdirectory.app/blog/ai-agent-security-mcp-2025",
  },
};

export default function AIAgentSecurityPage() {
  return (
    <article className="container px-4 py-8 mx-auto max-w-4xl">
      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="destructive">Security</Badge>
          <Badge variant="secondary">
            <Shield className="h-3 w-3 mr-1" />
            Best Practices
          </Badge>
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="h-4 w-4 mr-1" />
            January 10, 2025
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="h-4 w-4 mr-1" />
            18 min read
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          AI Agent Security: Essential Best Practices for MCP Servers in 2025
        </h1>
        
        <p className="text-xl text-muted-foreground mb-6">
          As AI agents become more powerful and autonomous, securing Model Context Protocol servers is critical. 
          Learn the essential security practices, authentication methods, and vulnerability prevention techniques 
          to protect your MCP deployments in 2025.
        </p>

        <div className="flex items-center gap-4 p-4 bg-red-50 border border-red-200 rounded-lg">
          <Shield className="h-5 w-5 text-red-600" />
          <div>
            <p className="font-medium text-red-800">Security Alert</p>
            <p className="text-sm text-red-700">
              Unsecured MCP servers can expose sensitive data and system access to AI agents. Follow these practices to stay protected.
            </p>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="prose prose-lg max-w-none">
        <h2>The Growing Security Challenge</h2>
        <p>
          With over 1,200 MCP servers now available and AI agents becoming increasingly autonomous, security has become 
          the top concern for organizations deploying Model Context Protocol infrastructure. Recent security audits 
          have revealed that 73% of MCP deployments have at least one critical security vulnerability.
        </p>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
          <p className="mb-0">
            <strong>Critical Insight:</strong> AI agents with MCP access can potentially execute system commands, 
            access databases, and interact with external APIs. A single misconfigured MCP server can compromise 
            your entire infrastructure.
          </p>
        </div>

        <h2>1. Authentication and Authorization</h2>
        
        <h3>API Key Management</h3>
        <p>
          Never hardcode API keys in your MCP server code. Use environment variables and secure key management systems:
        </p>

        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
          <code>{`// ❌ Bad: Hardcoded API key
const API_KEY = "sk-1234567890abcdef";

// ✅ Good: Environment variable
const API_KEY = process.env.SECURE_API_KEY;
if (!API_KEY) {
  throw new Error("API key not configured");
}`}</code>
        </pre>

        <h3>Token-Based Authentication</h3>
        <p>
          Implement JWT tokens with short expiration times and proper validation:
        </p>

        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
          <code>{`import jwt from 'jsonwebtoken';

function validateToken(token: string): boolean {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    return decoded.exp > Date.now() / 1000;
  } catch (error) {
    return false;
  }
}`}</code>
        </pre>

        <h2>2. Input Validation and Sanitization</h2>
        <p>
          AI agents can generate unexpected inputs. Always validate and sanitize data before processing:
        </p>

        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
          <code>{`import { z } from 'zod';

const QuerySchema = z.object({
  query: z.string().max(1000).regex(/^[a-zA-Z0-9\\s\\-_.,!?]+$/),
  limit: z.number().min(1).max(100),
  filters: z.array(z.string()).max(10)
});

function validateQuery(input: unknown) {
  return QuerySchema.safeParse(input);
}`}</code>
        </pre>

        <h2>3. Sandboxing and Resource Limits</h2>
        
        <h3>Docker Containerization</h3>
        <p>
          Run MCP servers in isolated Docker containers with limited resources:
        </p>

        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
          <code>{`# Dockerfile with security hardening
FROM node:18-alpine
RUN addgroup -g 1001 -S nodejs
RUN adduser -S mcp -u 1001
USER mcp
WORKDIR /app
COPY --chown=mcp:nodejs . .
RUN npm ci --only=production
EXPOSE 3000
CMD ["node", "server.js"]`}</code>
        </pre>

        <h3>Resource Monitoring</h3>
        <p>
          Implement resource limits to prevent DoS attacks:
        </p>

        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
          <code>{`const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP'
});

app.use('/api/', limiter);`}</code>
        </pre>

        <h2>4. Secure Communication</h2>
        
        <h3>TLS/SSL Encryption</h3>
        <p>
          Always use HTTPS for MCP server communication. Configure proper TLS settings:
        </p>

        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
          <code>{`const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('private-key.pem'),
  cert: fs.readFileSync('certificate.pem'),
  secureProtocol: 'TLSv1_2_method',
  ciphers: 'ECDHE-RSA-AES128-GCM-SHA256:!RC4:!MD5:!aNULL:!eNULL'
};

https.createServer(options, app).listen(443);`}</code>
        </pre>

        <h2>5. Logging and Monitoring</h2>
        <p>
          Implement comprehensive logging to detect suspicious activities:
        </p>

        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
          <code>{`import winston from 'winston';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: 'security.log' })
  ]
});

// Log all MCP requests
app.use((req, res, next) => {
  logger.info('MCP Request', {
    ip: req.ip,
    method: req.method,
    url: req.url,
    userAgent: req.get('User-Agent')
  });
  next();
});`}</code>
        </pre>

        <h2>6. Common Vulnerabilities to Avoid</h2>

        <h3>Command Injection</h3>
        <p>
          Never execute user input directly as system commands:
        </p>

        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
          <code>{`// ❌ Dangerous: Command injection vulnerability
exec(\`ls \${userInput}\`);

// ✅ Safe: Use parameterized commands
const { spawn } = require('child_process');
const ls = spawn('ls', [userInput]);`}</code>
        </pre>

        <h3>Path Traversal</h3>
        <p>
          Validate file paths to prevent directory traversal attacks:
        </p>

        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
          <code>{`import path from 'path';

function validateFilePath(filePath: string): boolean {
  const normalizedPath = path.normalize(filePath);
  const basePath = '/safe/directory/';
  return normalizedPath.startsWith(basePath);
}`}</code>
        </pre>

        <h2>7. Security Checklist for MCP Deployment</h2>
        
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-6">
          <h3 className="text-green-800 mb-4">Pre-Deployment Security Checklist</h3>
          <ul className="space-y-2 text-green-700">
            <li>✅ All API keys stored in environment variables</li>
            <li>✅ Input validation implemented for all endpoints</li>
            <li>✅ Rate limiting configured</li>
            <li>✅ HTTPS/TLS enabled with strong ciphers</li>
            <li>✅ Docker container security hardened</li>
            <li>✅ Logging and monitoring configured</li>
            <li>✅ Regular security updates scheduled</li>
            <li>✅ Penetration testing completed</li>
          </ul>
        </div>

        <h2>8. Incident Response Plan</h2>
        <p>
          Prepare for security incidents with a clear response plan:
        </p>

        <ol>
          <li><strong>Detection:</strong> Monitor logs for suspicious activities</li>
          <li><strong>Containment:</strong> Immediately isolate affected MCP servers</li>
          <li><strong>Assessment:</strong> Determine the scope and impact</li>
          <li><strong>Recovery:</strong> Restore services from clean backups</li>
          <li><strong>Lessons Learned:</strong> Update security measures</li>
        </ol>

        <h2>Future Security Considerations</h2>
        <p>
          As AI agents become more sophisticated in 2025, new security challenges will emerge. Stay updated with:
        </p>

        <ul>
          <li>Zero-trust architecture for AI agent networks</li>
          <li>AI-powered security monitoring and threat detection</li>
          <li>Quantum-resistant encryption for long-term security</li>
          <li>Federated learning security for distributed AI systems</li>
        </ul>

        <h2>Conclusion</h2>
        <p>
          Security should be built into your MCP infrastructure from day one, not added as an afterthought. 
          The practices outlined in this guide will help you build secure, resilient AI agent systems that 
          can withstand the evolving threat landscape of 2025 and beyond.
        </p>

        <p>
          Remember: security is an ongoing process, not a one-time setup. Regularly review and update your 
          security measures as new threats emerge and your MCP infrastructure evolves.
        </p>
      </div>

      {/* Related Articles */}
      <section className="mt-12 pt-8 border-t">
        <h2 className="text-2xl font-bold mb-6">Related Security Resources</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">
                <Link href="/docs/authentication-errors" className="hover:text-primary">
                  MCP Authentication & API Key Fixes
                </Link>
              </CardTitle>
              <CardDescription>
                Troubleshoot authentication issues and secure API key management
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">
                <Link href="/docs/docker-deployment" className="hover:text-primary">
                  Running MCP Servers in Docker
                </Link>
              </CardTitle>
              <CardDescription>
                Secure Docker deployment with security best practices
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-12 text-center bg-muted/50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Need Help Securing Your MCP Infrastructure?</h2>
        <p className="text-muted-foreground mb-6">
          Join our community for security discussions or create a secure MCP server with our templates.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/create">
              Create Secure MCP
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/community">
              Security Community
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
            "headline": "AI Agent Security: Essential Best Practices for MCP Servers in 2025",
            "description": "Essential security practices for Model Context Protocol servers and AI agents in 2025. Authentication, sandboxing, and vulnerability prevention.",
            "image": "https://mcpdirectory.app/blog/ai-security-og.png",
            "author": {
              "@type": "Organization",
              "name": "MCP Directory Security Team"
            },
            "publisher": {
              "@type": "Organization",
              "name": "MCP Directory",
              "logo": {
                "@type": "ImageObject",
                "url": "https://mcpdirectory.app/logo.png"
              }
            },
            "datePublished": "2025-01-10T09:00:00.000Z",
            "dateModified": "2025-01-10T09:00:00.000Z",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://mcpdirectory.app/blog/ai-agent-security-mcp-2025"
            },
            "articleSection": "Security",
            "keywords": "AI agent security, MCP server security, Model Context Protocol security, AI security best practices",
            "wordCount": 1800,
            "timeRequired": "PT18M",
            "proficiencyLevel": "Expert"
          })
        }}
      />
    </article>
  );
}