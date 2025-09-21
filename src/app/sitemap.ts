import { MetadataRoute } from 'next'
import { DOCS } from '@/content/docs/manifest'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mcpdirectory.app'
  const currentDate = new Date('2025-09-21')
 
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
      priority: 0.9,
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
 
  // Documentation pages with proper categorization and priorities
  const docPages = DOCS.map((doc) => {
    const updated = doc.updatedAt ? new Date(doc.updatedAt) : currentDate
    // Higher priority for popular setup guides
    let priority = 0.75
    if (doc.category === 'cli' || doc.category === 'ide') {
      priority = 0.85
    } else if (doc.category === 'deploy') {
      priority = 0.8
    } else if (doc.category === 'testing') {
      priority = 0.8 // Testing docs are important for troubleshooting
    }
    
    // Boost priority for common setup guides
    if (doc.slug.includes('cursor') || doc.slug.includes('vscode') || doc.slug.includes('claude') || doc.slug.includes('common-errors')) {
      priority = 0.9
    }
    
    return {
      url: `${baseUrl}${doc.path}`,
      lastModified: updated,
      changeFrequency: 'monthly' as const,
      priority,
    }
  })
 
  return [...corePages, ...blogPages, ...docPages]
}
