import { MetadataRoute } from 'next'
import { DOCS } from '@/content/docs/manifest'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mcpdirectory.app'
  const currentDate = new Date()
 
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
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/community`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.7,
    },
  ]
 
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
 
  const docPages = DOCS.map((doc) => {
    const updated = doc.updatedAt ? new Date(doc.updatedAt) : currentDate
    const priority = doc.category === 'cli' || doc.category === 'ide' ? 0.85 : doc.category === 'deploy' ? 0.8 : 0.75
    return {
      url: `${baseUrl}${doc.path}`,
      lastModified: updated,
      changeFrequency: 'monthly' as const,
      priority,
    }
  })
 
  return [...corePages, ...blogPages, ...docPages]
}
