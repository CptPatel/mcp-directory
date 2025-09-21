# MCP Directory Documentation System

This document explains how to add and manage documentation pages in the MCP Directory docs system.

## Overview

The docs system uses:
- **MDX** for content with YAML frontmatter
- **Next.js App Router** for routing
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **shadcn/ui** for components

## File Structure

```
src/
├── app/(docs)/docs/
│   ├── layout.tsx              # Docs layout with sidebar and TOC
│   ├── page.tsx                # Main docs index page
│   └── [slug]/
│       └── page.mdx            # Individual doc pages
├── components/docs/
│   ├── Sidebar.tsx             # Left navigation sidebar
│   ├── TableOfContents.tsx     # Right TOC with scroll spy
│   ├── Breadcrumbs.tsx         # Navigation breadcrumbs
│   └── Search.tsx              # Client-side search
├── content/docs/
│   └── manifest.ts             # Central docs registry
└── lib/
    └── mdx.ts                  # MDX utilities and frontmatter parsing
```

## Adding a New Documentation Page

### 1. Update the Manifest

First, add your new page to `src/content/docs/manifest.ts`:

```typescript
export const DOCS: DocEntry[] = [
  // ... existing docs
  {
    slug: 'your-new-page',
    path: '/docs/your-new-page',
    title: 'Your New Page Title',
    description: 'Brief description of what this page covers',
    category: 'cli', // or 'ide', 'deploy', 'testing'
    updatedAt: '2025-09-21T00:00:00.000Z',
  },
];
```

### 2. Create the MDX File

Create `src/app/(docs)/docs/your-new-page/page.mdx`:

```mdx
---
title: "Your New Page Title"
description: "Brief description of what this page covers"
slug: "your-new-page"
category: "cli"
updatedAt: "2025-09-21T00:00:00.000Z"
ogImage: "/og/docs-your-page.png"
faqs:
  - q: "Common question about this topic?"
    a: "Answer to the common question."
  - q: "Another frequently asked question?"
    a: "Another helpful answer."
---

import { Breadcrumbs } from "@/components/docs/Breadcrumbs";
import Script from "next/script";

<Breadcrumbs slug="your-new-page" />

# Your New Page Title

<Script id="faq-jsonld" type="application/ld+json">
{JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Common question about this topic?",
      "acceptedAnswer": { "@type": "Answer", "text": "Answer to the common question." }
    }
  ]
})}
</Script>

## Overview

Brief overview of what this page covers...

## Section 1

Content for section 1...

### Subsection

More detailed content...

## Code Examples

```bash
# Example command
npm install your-package
```

```javascript
// Example code
const example = "Hello World";
```

## FAQ

### Common question about this topic?

Answer to the common question.

### Another frequently asked question?

Another helpful answer.

---

**Last updated:** September 21, 2025

**Edit this page:** [your-new-page/page.mdx](https://github.com/modelcontextprotocol/docs/edit/main/docs/your-new-page/page.mdx)
```

### 3. Required Frontmatter Fields

Every documentation page must include these frontmatter fields:

- `title`: Page title (used in H1 and metadata)
- `description`: Brief description for SEO and search
- `slug`: URL slug (must match directory name)
- `category`: One of 'cli', 'ide', 'deploy', 'testing'
- `updatedAt`: ISO date string for last update

### 4. Optional Frontmatter Fields

- `ogImage`: Custom Open Graph image path
- `faqs`: Array of FAQ objects for JSON-LD schema

## Content Guidelines

### Headings

- Use `#` for the main title (H1) - should match frontmatter title
- Use `##` for main sections (H2)
- Use `###` for subsections (H3)
- Avoid going deeper than H3 for better TOC readability

### Code Blocks

Use fenced code blocks with language specification:

```bash
# Shell commands
npm install package-name
```

```javascript
// JavaScript code
const config = { server: 'localhost' };
```

```json
{
  "config": "JSON configuration"
}
```

### Links

- Use relative links for internal pages: `[Other Doc](/docs/other-page)`
- Use absolute links for external resources
- Always include `target="_blank" rel="noopener noreferrer"` for external links

### Images

- Store images in `public/docs/` directory
- Use descriptive alt text
- Optimize images for web (WebP preferred)

## SEO Features

### Automatic SEO

The system automatically generates:
- Unique page titles and descriptions
- Canonical URLs
- Open Graph and Twitter Card metadata
- JSON-LD structured data for FAQs
- Sitemap entries

### FAQ Schema

Include FAQs in frontmatter to generate JSON-LD schema:

```yaml
faqs:
  - q: "Question text?"
    a: "Answer text."
```

## Search Integration

Pages are automatically indexed for search by:
- Title
- Description
- Content headings
- Category

No additional configuration needed.

## Categories

Use these predefined categories:

- `cli`: Command-line tools and interfaces
- `ide`: Integrated Development Environments
- `deploy`: Deployment and operations
- `testing`: Testing and debugging

## Best Practices

### Content Structure

1. Start with a clear overview
2. Include prerequisites/requirements
3. Provide step-by-step instructions
4. Add troubleshooting section
5. Include FAQ section
6. End with "Last updated" and "Edit this page" links

### Writing Style

- Use clear, concise language
- Write in second person ("you")
- Include practical examples
- Explain complex concepts simply
- Use bullet points and numbered lists

### Code Examples

- Provide complete, working examples
- Include error handling where relevant
- Show both success and failure cases
- Use realistic placeholder values

## Testing

Before publishing:

1. Test all code examples
2. Verify all links work
3. Check responsive design
4. Validate frontmatter YAML
5. Ensure proper heading hierarchy

## Deployment

Changes are automatically deployed when:
1. MDX files are added/updated
2. Manifest is updated
3. Changes are pushed to main branch

The sitemap and search index update automatically.

## Troubleshooting

### Common Issues

**Page not appearing in sidebar:**
- Check manifest entry exists
- Verify category is correct
- Ensure slug matches directory name

**Search not working:**
- Verify title and description in frontmatter
- Check for YAML syntax errors
- Ensure page is in manifest

**TOC not generating:**
- Use proper heading hierarchy (H2, H3)
- Ensure headings have unique IDs
- Check for MDX syntax errors

**SEO metadata missing:**
- Verify all required frontmatter fields
- Check for YAML formatting issues
- Ensure canonical URL is correct

### Getting Help

- Check existing documentation pages for examples
- Review the manifest structure
- Test locally before deploying
- Ask for help in the community Discord

## Contributing

To contribute to documentation:

1. Fork the repository
2. Create a new branch for your changes
3. Add/update documentation following this guide
4. Test your changes locally
5. Submit a pull request

All documentation contributions are welcome!