import { DOCS } from '@/content/docs/manifest'

export async function GET() {
  const baseUrl = 'https://mcpdirectory.app'
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  <url>
    <loc>${baseUrl}/docs</loc>
    <lastmod>2025-09-21T00:00:00.000Z</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  ${DOCS.map((doc) => {
    const priority = doc.category === 'cli' || doc.category === 'ide' ? '0.85' : 
                    doc.category === 'deploy' ? '0.8' : '0.8'
    const boostPriority = doc.slug.includes('cursor') || doc.slug.includes('vscode') || 
                         doc.slug.includes('claude') || doc.slug.includes('common-errors') ? '0.9' : priority
    
    return `  <url>
    <loc>${baseUrl}${doc.path}</loc>
    <lastmod>${doc.updatedAt}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${boostPriority}</priority>
  </url>`
  }).join('\n')}
</urlset>`

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  })
}