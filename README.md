# MCP Directory

> Setup Multiple MCPs in Minutes, Not Hours

MCP Directory is the ultimate platform for discovering, bundling, and deploying Model Context Protocol configurations with one-click installation. Browse verified MCPs, create custom packages with our AI-powered MCP Creator, and streamline your AI workflow setup.

## 🚀 Features

- **🤖 AI MCP Creator** - Generate custom MCPs using natural language descriptions powered by OpenRouter
- **1,200+ Verified MCPs** - Curated collection of Model Context Protocol configurations
- **One-Click Installation** - Deploy multiple MCPs instantly with automated setup
- **Package Builder** - Create custom bundles of MCPs for your specific needs
- **Multi-Stack Support** - Works with VS Code, Cursor, Windsurf, Claude Code, Gemini CLI, JetBrains
- **Community Driven** - Ratings, reviews, and community-verified configurations
- **Secure & Reliable** - All MCPs reviewed for safety and compatibility
- **Sandbox Testing** - Test AI-generated MCPs in a secure environment before deployment

## 🛠 Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **UI**: Tailwind CSS, Radix UI, Lucide Icons
- **State Management**: React Context API
- **Database**: Supabase
- **AI Integration**: OpenRouter API (GPT-4, Claude-3, Gemini, etc.)
- **Payments**: Stripe
- **Code Execution**: Sandboxed testing environment
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/mcp-directory.git
cd mcp-directory
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Configure your environment variables:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
STRIPE_SECRET_KEY=your_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
OPENROUTER_API_KEY=your_openrouter_api_key
NEXT_PUBLIC_AI_SANDBOX_URL=your_sandbox_environment_url
```

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🚀 Deployment

### Quick Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/mcp-directory)

### Manual Deployment

For detailed deployment instructions including GitHub setup, environment configuration, and production deployment, see [DEPLOYMENT.md](./DEPLOYMENT.md).

**Quick Steps:**
1. Push code to GitHub repository
2. Connect repository to Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy automatically on every push to main branch

### Environment Variables for Production

Required environment variables for deployment:
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_live_...
CLERK_SECRET_KEY=sk_live_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
```

## 🏗 Project Structure

```
mcpdir/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── browse/         # MCP browsing page
│   │   ├── packages/       # Package builder page
│   │   ├── create/         # AI MCP Creator page
│   │   ├── community/      # Community features
│   │   └── docs/           # Documentation
│   ├── components/         # Reusable UI components
│   │   ├── ai/            # AI-specific components
│   │   └── sandbox/       # Sandbox testing components
│   ├── contexts/          # React Context providers
│   ├── data/              # Static data and configurations
│   ├── lib/               # Utility functions
│   │   ├── ai/            # AI integration utilities
│   │   └── sandbox/       # Sandbox execution utilities
│   └── templates/         # MCP templates for AI generation
├── public/                # Static assets
└── package.json
```

## 🎯 Usage

### 🤖 Create Custom MCPs with AI
1. Visit `/create` to access the AI MCP Creator
2. Describe your desired MCP functionality in natural language
3. Select your preferred AI model (GPT-4, Claude-3, Gemini, etc.)
4. Review and test the generated MCP in our sandbox environment
5. Refine through iterative AI conversations
6. Save to your library or add directly to a package

### Browse MCPs
1. Visit `/browse` to explore available MCPs
2. Filter by category, rating, or search by keywords
3. View detailed information about each MCP
4. Add community-created and AI-generated MCPs to your packages

### Build Packages
1. Go to `/packages` to access the package builder
2. Add MCPs to your current package (from directory or AI-created)
3. Configure package name and description
4. Generate installation scripts or save for later

### Install MCPs
1. Generate an installation script from your package
2. Copy the script to your terminal
3. Run the script to install all MCPs in your package

### AI MCP Creator Examples

**Example 1: Database Query Helper**
```
"Create an MCP that helps me query my PostgreSQL database using natural language. 
I want to be able to ask questions like 'show me all users created last week' 
and get the SQL query generated automatically."
```

**Example 2: Git Workflow Assistant**
```
"I need an MCP that automates my git workflow. It should help me create 
feature branches, commit with conventional commit messages, and create 
pull requests with proper templates."
```

**Example 3: API Documentation Generator**
```
"Build an MCP that can analyze my REST API endpoints and automatically 
generate OpenAPI documentation with examples and proper descriptions."
```

## 🤖 AI Features & Pricing

### Free Tier
- 5 AI MCP generations per month
- Access to basic AI models
- Sandbox testing environment
- Community template library

### Pro Tier ($9.99/month)
- 100 AI MCP generations per month
- Access to premium AI models (GPT-4, Claude-3)
- Advanced template customization
- Priority support

### Enterprise Tier ($49.99/month)
- Unlimited AI MCP generations
- Custom model training
- Team collaboration features
- Private MCP templates
- Dedicated support

## 🔧 AI Model Support

Our AI MCP Creator supports multiple leading AI models through OpenRouter:

- **GPT-4** - Best for complex logic and comprehensive MCPs
- **Claude-3** - Excellent for code quality and security-focused MCPs
- **Gemini Pro** - Great for performance-optimized MCPs
- **Mixtral** - Cost-effective option for simpler MCPs
- **CodeLlama** - Specialized for code generation tasks

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌟 Support

- ⭐ Star this repository if you find it helpful
- 🐛 Report bugs via [GitHub Issues](https://github.com/your-username/mcp-directory/issues)
- 💬 Join our [Discord Community](https://discord.gg/mcp-directory)
- 📧 Email us at support@mcp-directory.com

## 🔗 Links

- [Website](https://mcp-directory.com)
- [Documentation](https://docs.mcp-directory.com)
- [Community](https://community.mcp-directory.com)
- [Twitter](https://twitter.com/mcpdirectory)

---

Built with ❤️ by the MCP Directory Team