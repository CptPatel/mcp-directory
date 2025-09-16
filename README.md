# MCP Directory

> Setup Multiple MCPs in minutes, not hours

MCP Directory helps you discover, bundle, and install Model Context Protocol (MCP) configurations. Browse a curated catalog, build packages, and generate custom MCPs with AI.

## Features

- AI MCP Creator (functional)
  - Generate MCP definitions from natural language using OpenRouter (or a local stub fallback)
  - Add generated MCPs directly to your package
- Package Builder
  - Build and save bundles of MCPs, then generate installers
  - Bash and PowerShell scripts with copy and download
- Browse Catalog
  - Search, filter, and sort a demo catalog of MCPs
- Polished UI
  - Mobile-friendly navigation, dark mode, animated components (Tailwind + shadcn/ui + Framer Motion)
- Security & Observability
  - Nonce-based CSP, HSTS, security headers, API no-store caching
  - Rate limiting and same-origin checks on API routes
  - Vercel Speed Insights and Web Analytics

## Tech Stack

- Next.js 14 (App Router), React 18, TypeScript
- Tailwind CSS, shadcn/ui (Radix), Framer Motion, Lucide
- Clerk for authentication
- OpenRouter (optional) for AI generation
- Vercel for deployment

## Live Pages

- `/` — Landing
- `/browse` — Catalog
- `/packages` — Package Builder
- `/create` — AI Creator (requires sign-in)
- `/sign-in`, `/sign-up` — Auth routes (Clerk)

## Quick Start

1) Install
- `npm install`

2) Env vars
- Copy `.env.example` to `.env.local` and set:
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

3) Run
- `npm run dev` ? http://localhost:3000

## Deployment (Vercel)

- Connect the repo and set the same env vars for Preview/Production.
- Web Analytics and Speed Insights are already wired in the root layout.
- Caching
  - API & auth routes: `no-store` + `Vary: Authorization, Cookie`
  - Static assets: `public, max-age=31536000, immutable`

## Security

- Nonce-based CSP with minimal allowlists (Clerk, Vercel analytics, OpenRouter)
- HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, COOP
- Same-origin checks and rate limiting on API routes
- No tokens are stored in localStorage; only non-sensitive preferences/data

## Development Notes

- AI Creator
  - Functional panel lives on `/create` and calls `POST /api/creator`
  - If `OPENROUTER_API_KEY` is missing or errors occur, the API provides a stub MCP
- Installer
  - Uses `installCommand` when present, with category fallbacks otherwise
  - Bash and PowerShell variants available in the UI

## Contributing

- Fork, branch, and open a PR
- Please keep UI changes responsive and accessible
- Security issues: open a private issue or contact maintainers

## License

MIT — see `LICENSE`
