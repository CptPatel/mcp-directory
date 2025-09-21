export type DocEntry = {
  slug: string;
  path: string;
  title: string;
  description: string;
  category: 'cli' | 'ide' | 'deploy' | 'testing';
  updatedAt: string;
};

export const DOCS: DocEntry[] = [
  // CLI Tools
  {
    slug: 'codex-cli-installation',
    path: '/docs/codex-cli-installation',
    title: 'How to Install and Use MCPs with Codex CLI',
    description: 'Complete guide to installing and configuring MCP servers with Codex CLI for AI-powered development.',
    category: 'cli',
    updatedAt: '2025-09-21T00:00:00.000Z',
  },
  {
    slug: 'gemini-cli-setup',
    path: '/docs/gemini-cli-setup',
    title: 'Getting Started with MCPs in Gemini CLI',
    description: 'Step-by-step setup guide for integrating Model Context Protocol servers with Gemini CLI.',
    category: 'cli',
    updatedAt: '2025-09-21T00:00:00.000Z',
  },
  {
    slug: 'claude-cli',
    path: '/docs/claude-cli',
    title: 'Running MCPs with Claude CLI (Examples + Troubleshooting)',
    description: 'Learn to run MCP servers with Claude CLI, including practical examples and common troubleshooting solutions.',
    category: 'cli',
    updatedAt: '2025-09-21T00:00:00.000Z',
  },
  {
    slug: 'terminal-cli',
    path: '/docs/terminal-cli',
    title: 'Using MCPs in Terminal (Universal CLI Setup)',
    description: 'Universal guide for setting up and using MCP servers in any terminal environment.',
    category: 'cli',
    updatedAt: '2025-09-21T00:00:00.000Z',
  },

  // IDEs
  {
    slug: 'cursor-setup',
    path: '/docs/cursor-setup',
    title: 'How to Install and Use MCPs in Cursor IDE',
    description: 'Complete setup guide for connecting and running MCP servers from Cursor IDE with troubleshooting tips.',
    category: 'ide',
    updatedAt: '2025-09-21T00:00:00.000Z',
  },
  {
    slug: 'windsurf-setup',
    path: '/docs/windsurf-setup',
    title: 'Running MCPs in Windsurf IDE',
    description: 'Step-by-step guide to configure and use Model Context Protocol servers in Windsurf IDE.',
    category: 'ide',
    updatedAt: '2025-09-21T00:00:00.000Z',
  },
  {
    slug: 'vscode-integration',
    path: '/docs/vscode-integration',
    title: 'MCPs in VSCode – Complete Setup Guide',
    description: 'Comprehensive guide for integrating MCP servers with Visual Studio Code for enhanced AI development.',
    category: 'ide',
    updatedAt: '2025-09-21T00:00:00.000Z',
  },
  {
    slug: 'jetbrains-integration',
    path: '/docs/jetbrains-integration',
    title: 'MCP Setup in JetBrains IDEs (PyCharm, IntelliJ, WebStorm)',
    description: 'Configure Model Context Protocol servers in JetBrains IDEs including PyCharm, IntelliJ IDEA, and WebStorm.',
    category: 'ide',
    updatedAt: '2025-09-21T00:00:00.000Z',
  },
  {
    slug: 'claude-desktop',
    path: '/docs/claude-desktop',
    title: 'Connecting MCPs in Claude Desktop (Mac & Windows)',
    description: 'Complete guide to connecting and managing MCP servers in Claude Desktop for Mac and Windows.',
    category: 'ide',
    updatedAt: '2025-09-21T00:00:00.000Z',
  },

  // Deployment & Ops
  {
    slug: 'docker-deployment',
    path: '/docs/docker-deployment',
    title: 'Running MCP Servers in Docker',
    description: 'Deploy and manage MCP servers using Docker containers with security best practices and examples.',
    category: 'deploy',
    updatedAt: '2025-09-21T00:00:00.000Z',
  },
  {
    slug: 'kubernetes',
    path: '/docs/kubernetes',
    title: 'Deploying MCP Servers on Kubernetes Clusters',
    description: 'Scale MCP servers on Kubernetes with deployment manifests, service discovery, and monitoring.',
    category: 'deploy',
    updatedAt: '2025-09-21T00:00:00.000Z',
  },
  {
    slug: 'vercel-deployment',
    path: '/docs/vercel-deployment',
    title: 'Serverless MCP Deployment on Vercel',
    description: 'Deploy MCP servers as serverless functions on Vercel with edge computing and global distribution.',
    category: 'deploy',
    updatedAt: '2025-09-21T00:00:00.000Z',
  },
  {
    slug: 'aws-lambda',
    path: '/docs/aws-lambda',
    title: 'Deploying MCPs on AWS Lambda',
    description: 'Run MCP servers on AWS Lambda with API Gateway integration and cost-effective scaling.',
    category: 'deploy',
    updatedAt: '2025-09-21T00:00:00.000Z',
  },
  {
    slug: 'github-actions',
    path: '/docs/github-actions',
    title: 'Automating MCP Workflows with GitHub Actions',
    description: 'Automate MCP server deployment, testing, and distribution using GitHub Actions CI/CD pipelines.',
    category: 'deploy',
    updatedAt: '2025-09-21T00:00:00.000Z',
  },
  {
    slug: 'remote-mcp',
    path: '/docs/remote-mcp',
    title: 'Connecting to Remote MCP Servers',
    description: 'Configure and connect to remote MCP servers with authentication, security, and network considerations.',
    category: 'deploy',
    updatedAt: '2025-09-21T00:00:00.000Z',
  },

  // Testing & Debugging
  {
    slug: 'testing-mcp',
    path: '/docs/testing-mcp',
    title: 'Debugging & Testing MCPs with MCP Inspector',
    description: 'Debug and test MCP servers using MCP Inspector and other debugging tools for reliable development.',
    category: 'testing',
    updatedAt: '2025-09-21T00:00:00.000Z',
  },
  {
    slug: 'common-errors',
    path: '/docs/common-errors',
    title: '10 Most Common MCP Setup Errors (and Fixes)',
    description: 'Troubleshoot the most common MCP setup errors with step-by-step solutions and prevention tips.',
    category: 'testing',
    updatedAt: '2025-09-21T00:00:00.000Z',
  },
  {
    slug: 'connection-refused',
    path: '/docs/connection-refused',
    title: 'Fixing MCP Server Connection Refused',
    description: 'Resolve MCP server connection refused errors with network, firewall, and configuration troubleshooting.',
    category: 'testing',
    updatedAt: '2025-09-21T00:00:00.000Z',
  },
  {
    slug: 'authentication-errors',
    path: '/docs/authentication-errors',
    title: 'MCP Authentication & API Key Fixes',
    description: 'Fix MCP authentication issues, API key problems, and permission errors with detailed solutions.',
    category: 'testing',
    updatedAt: '2025-09-21T00:00:00.000Z',
  },
  {
    slug: 'deployment-errors',
    path: '/docs/deployment-errors',
    title: 'Fixing MCP Deployment Issues in Docker/Vercel',
    description: 'Troubleshoot MCP deployment problems in Docker containers and Vercel serverless environments.',
    category: 'testing',
    updatedAt: '2025-09-21T00:00:00.000Z',
  },
  {
    slug: 'mcp-not-showing',
    path: '/docs/mcp-not-showing',
    title: "Why MCPs Don't Show Up in Claude Desktop",
    description: 'Diagnose and fix issues when MCP servers are not appearing or working in Claude Desktop application.',
    category: 'testing',
    updatedAt: '2025-09-21T00:00:00.000Z',
  },
];

export const CATEGORY_LABELS = {
  cli: 'CLI Tools',
  ide: 'IDEs',
  deploy: 'Deployment & Ops',
  testing: 'Testing & Debugging',
} as const;

export function getDocsByCategory() {
  return DOCS.reduce((acc, doc) => {
    if (!acc[doc.category]) {
      acc[doc.category] = [];
    }
    acc[doc.category].push(doc);
    return acc;
  }, {} as Record<string, DocEntry[]>);
}

export function getDocBySlug(slug: string) {
  return DOCS.find(doc => doc.slug === slug);
}