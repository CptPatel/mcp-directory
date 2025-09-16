# Changelog

All notable changes to the MCP Directory project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Vercel Speed Insights and Web Analytics components in root layout
- Clerk sign-in/sign-up routes at `/sign-in` and `/sign-up`
- Functional AI Creator panel on `/create` with OpenRouter integration and stub fallback
- API route `POST /api/creator` for MCP generation
- PowerShell installer variant alongside Bash; UI tabs with Copy/Download
- Mobile nav drawer (hamburger) with Theme switcher and auth controls
- Nonce-based CSP with per-request nonce via HttpOnly cookie
- Basic rate limiting and CSRF enforcement for API routes

### Changed
- Converted not-found (404) to Client Component to avoid server-side event handler serialization
- Polished mobile UX: safe-area padding, full-width CTAs, larger tap targets, filter toolbar wrapping
- Improved installer generation to prefer `installCommand` when present and add category fallbacks
- Consolidated security headers between middleware and Next headers (removed duplicate CSP from Next headers)

### Fixed
- Google OAuth 404 by adding explicit Clerk auth routes
- TypeScript error for missing `generateInstallScriptPS` import in `PackagesClient`

### Security
- Global security headers: HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, COOP
- Nonce-based Content Security Policy with tight allowlists (Clerk, Vercel analytics, OpenRouter)
- `Cache-Control: no-store` + `Vary: Authorization, Cookie` for API/auth; `immutable` caching for static assets

### Fixed
- Removed auth requirement from "Create" navbar item for better accessibility
- Created CopyButton component to isolate onClick handlers from server components
- Added comprehensive deployment configuration
- Created GitHub setup scripts for easy repository initialization

### Added
- Initial project setup with Next.js 14 and TypeScript
- Comprehensive project documentation (README.md, PRD.md, DESIGN_SYSTEM.md)
- Premium UI design system with animations and dark mode support
- Animated navbar with scroll-responsive behavior using Framer Motion
- Clerk authentication integration with protected routes
- AI-powered MCP creation interface (placeholder)
- Browse MCPs page with search and filtering capabilities
- Package builder for custom MCP bundles
- Community page for developer engagement
- Comprehensive documentation with setup guides for 7+ development environments
- SEO optimization with metadata, structured data, and sitemap
- Premium animations and glassmorphism effects
- Responsive design for mobile and desktop

### Technical Implementation
- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Authentication**: Clerk integration with server-side auth
- **Animations**: Framer Motion for premium interactions
- **UI Components**: Radix UI with custom styling
- **Icons**: Lucide React icons
- **Type Safety**: Full TypeScript implementation

### Pages Implemented
- `/` - Landing page with hero section and feature showcase
- `/browse` - MCP directory with search and filtering
- `/create` - AI-powered MCP creation tool
- `/packages` - Package builder interface
- `/dashboard` - User dashboard (auth required)
- `/community` - Community engagement page
- `/docs` - Comprehensive setup documentation

### Components Created
- `AnimatedNavBar` - Scroll-responsive navigation with auth integration
- `Button` - Customizable button component with variants
- `Card` - Flexible card component for content display
- `Badge` - Status and category indicators
- `Tabs` - Tabbed interface for documentation
- Various UI primitives and layout components

### Build & Deployment Fixes
- Fixed CSS syntax error in globals.css (stray '/' character)
- Resolved Next.js App Router client/server component conflicts
- Added `"use client"` directives where needed for interactive components
- Fixed onClick handler serialization issues during static generation
- Added `dynamic = 'force-dynamic'` exports for pages with interactive elements
- Created separate layout files for metadata in client components

### Known Issues Fixed
- ✅ CSS build errors due to malformed selectors
- ✅ Event handler serialization during static generation
- ✅ Client/server component boundary violations
- ✅ Navbar "Create" item not visible (removed auth requirement)

### Development Environment
- Node.js with npm package management
- ESLint configuration (needs installation)
- Environment variables setup for Clerk authentication
- Git repository initialization ready

## [0.1.0] - Initial Development

### Project Structure
```
mcpdir/
├── src/
│   ├── app/                 # Next.js App Router pages
│   ├── components/          # Reusable UI components
│   ├── lib/                 # Utility functions
│   └── styles/             # Global styles
├── public/                 # Static assets
├── docs/                   # Project documentation
└── .kiro/                  # Kiro AI assistant specs
```

### Environment Setup
- Next.js 14.2.23
- TypeScript configuration
- Tailwind CSS with custom design system
- Clerk authentication keys required
- Vercel deployment ready

---

## Development Notes

### Rollback Points
- **Initial Setup**: Clean Next.js installation with basic structure
- **UI System**: After implementing design system and basic components
- **Authentication**: After Clerk integration completion
- **Build Fixes**: After resolving all build and deployment issues

### Future Roadmap
- [ ] Implement actual AI MCP generation functionality
- [ ] Add real MCP data and search functionality
- [ ] Implement package creation and sharing
- [ ] Add user profiles and MCP management
- [ ] Integrate with GitHub for MCP storage
- [ ] Add analytics and usage tracking
- [ ] Implement MCP testing and validation
- [ ] Add collaborative features and reviews

### Deployment Checklist
- [x] Fix all build errors
- [x] Resolve client/server component issues
- [x] Set up environment variables
- [ ] Configure Clerk production keys
- [ ] Set up Vercel deployment
- [ ] Configure custom domain
- [ ] Set up monitoring and analytics

### Critical Files for Deployment
- `package.json` - Dependencies and scripts
- `next.config.js` - Next.js configuration
- `.env.local` - Environment variables (not committed)
- `tailwind.config.js` - Styling configuration
- `tsconfig.json` - TypeScript configuration
