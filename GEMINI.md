# Project Overview

This is a Next.js 14 web application called "MCP Directory". Its primary purpose is to help users discover, bundle, and install Model Context Protocol (MCP) configurations. The application provides a browsable catalog of MCPs, a package builder to create custom installers, and an AI-powered creator to generate new MCPs from natural language prompts.

The frontend is built with React 18, TypeScript, and styled with Tailwind CSS and shadcn/ui. It uses Framer Motion for animations. Authentication is handled by Clerk.

The backend is a Next.js API route that uses OpenRouter to generate MCP configurations from user prompts. It has a fallback to a local stub generator if the OpenRouter API key is not configured. The application is designed for deployment on Vercel.

# Building and Running

**Installation:**

```bash
npm install
```

**Environment Variables:**

Copy the `.env.example` file to `.env.local` and set the following variables:

```
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_...
CLERK_SECRET_KEY=sk_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

# Optional: OpenRouter (for live AI generation)
OPENROUTER_API_KEY=sk-or-...
```

**Running the development server:**

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

**Building for production:**

```bash
npm run build
```

**Linting:**

```bash
npm run lint
```

**Type Checking:**

```bash
npm run type-check
```

# Development Conventions

*   The project follows the standard Next.js project structure.
*   Styling is done with Tailwind CSS and shadcn/ui.
*   Components are written in TypeScript and use React 18.
*   The application uses a Content Security Policy (CSP) to enhance security.
*   API routes have rate limiting and CSRF protection.
*   The project includes configuration for Vercel deployment.
