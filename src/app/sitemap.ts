import { MetadataRoute } from 'next'
 
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
      changeFrequency: 'weekly' as const,
      priority: 0.8,
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
      lastModified: new Date('2025-09-15'),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/best-mcps-2025`,
      lastModified: new Date('2025-09-18'),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    // Additional blog articles from the blog page data
    {
      url: `${baseUrl}/blog/mcp-directory-complete-guide`,
      lastModified: new Date('2025-09-10'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/create-custom-mcp-ai-assistant`,
      lastModified: new Date('2025-09-12'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/mcp-vs-plugins-comparison`,
      lastModified: new Date('2025-09-08'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/mcp-setup-guide-vscode`,
      lastModified: new Date('2025-09-05'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/what-is-model-context-protocol`,
      lastModified: new Date('2025-09-01'),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/top-mcp-use-cases`,
      lastModified: new Date('2025-08-28'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]

  return [...corePages, ...blogPages]
}