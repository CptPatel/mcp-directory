import type { MetadataRoute } from 'next'
import { DOCS } from '@/content/docs/manifest'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mcpdirectory.app'
  const currentDate = new Date()
  
  // Core pages
  const corePages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/browse`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/create`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/dashboard`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/packages`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/docs`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/community`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.7,
    },
  ]

  // Blog pages
  const blogPages = [
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/how-to-create-custom-mcp-server`,
      lastModified: new Date('2025-09-20'),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/best-mcps-2025`,
      lastModified: new Date('2025-09-20'),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
  ]

  // Documentation pages
  const docsPages: MetadataRoute.Sitemap = DOCS.map(doc => ({
    url: `${baseUrl}${doc.path}`,
    lastModified: new Date(doc.updatedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [...corePages, ...blogPages, ...docsPages]
}
