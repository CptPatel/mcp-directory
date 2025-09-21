import { Metadata } from 'next'
import { DocEntry } from '@/content/docs/manifest'

export function generateDocMetadata(doc: DocEntry): Metadata {
  const title = `${doc.title} | MCP Directory`
  const description = doc.description
  const url = `https://mcpdirectory.app${doc.path}`
  
  return {
    title,
    description,
    keywords: [
      ...doc.tags,
      'MCP setup',
      'Model Context Protocol',
      'AI development',
      'tutorial',
      'guide'
    ],
    authors: [{ name: "MCP Directory Team", url: "https://mcpdirectory.app" }],
    openGraph: {
      title,
      description,
      url,
      type: 'article',
      publishedTime: doc.updatedAt,
      modifiedTime: doc.updatedAt,
      section: doc.category,
      tags: doc.tags,
      images: [
        {
          url: `/og-docs-${doc.category}.png`,
          width: 1200,
          height: 630,
          alt: `${doc.title} - MCP Directory Guide`
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`/og-docs-${doc.category}.png`],
    },
    alternates: {
      canonical: url,
    },
    other: {
      'article:author': 'MCP Directory Team',
      'article:section': doc.category,
      'article:tag': doc.tags.join(','),
      'article:published_time': doc.updatedAt,
      'article:modified_time': doc.updatedAt,
      'reading-time': `${doc.readingTimeMinutes} minutes`,
      'mcp-version': doc.version,
    },
  }
}

export function generateDocStructuredData(doc: DocEntry) {
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": doc.title,
    "description": doc.description,
    "url": `https://mcpdirectory.app${doc.path}`,
    "datePublished": doc.updatedAt,
    "dateModified": doc.updatedAt,
    "author": {
      "@type": "Organization",
      "name": "MCP Directory Team",
      "url": "https://mcpdirectory.app"
    },
    "publisher": {
      "@type": "Organization",
      "name": "MCP Directory",
      "url": "https://mcpdirectory.app",
      "logo": {
        "@type": "ImageObject",
        "url": "https://mcpdirectory.app/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://mcpdirectory.app${doc.path}`
    },
    "image": {
      "@type": "ImageObject",
      "url": `https://mcpdirectory.app/og-docs-${doc.category}.png`,
      "width": 1200,
      "height": 630
    },
    "keywords": doc.tags.join(", "),
    "articleSection": doc.category,
    "about": {
      "@type": "Thing",
      "name": "Model Context Protocol",
      "description": "A protocol for AI assistants to connect with external tools and data sources"
    },
    "teaches": doc.title,
    "educationalLevel": "intermediate",
    "timeRequired": `PT${doc.readingTimeMinutes}M`,
    "proficiencyLevel": "Intermediate",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://mcpdirectory.app"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Documentation",
          "item": "https://mcpdirectory.app/docs"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": doc.title,
          "item": `https://mcpdirectory.app${doc.path}`
        }
      ]
    }
  }
}