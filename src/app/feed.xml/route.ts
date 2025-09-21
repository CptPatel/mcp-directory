import { DOCS } from '@/content/docs/manifest'

export async function GET() {
  const baseUrl = 'https://mcpdirectory.app'
  
  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>MCP Directory - Model Context Protocol Hub</title>
    <description>Latest updates, guides, and news about Model Context Protocol development and the MCP ecosystem</description>
    <link>${baseUrl}</link>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    
    <item>
      <title>How to Create a Custom MCP Server from Scratch - Complete 2025 Guide</title>
      <description>Learn to create custom Model Context Protocol servers with our comprehensive tutorial. Step-by-step guide with TypeScript and Python examples, best practices, testing, and deployment for MCP development.</description>
      <link>${baseUrl}/blog/how-to-create-custom-mcp-server</link>
      <guid>${baseUrl}/blog/how-to-create-custom-mcp-server</guid>
      <pubDate>Fri, 20 Sep 2025 00:00:00 GMT</pubDate>
      <category>Tutorial</category>
      <category>Development</category>
    </item>
    
    <item>
      <title>30 Best MCPs Every Developer Should Know in 2025</title>
      <description>Discover the 30 best Model Context Protocols for 2025. Our expert-curated list includes essential MCPs for GitHub, databases, search, and AI development with 2M+ downloads.</description>
      <link>${baseUrl}/blog/best-mcps-2025</link>
      <guid>${baseUrl}/blog/best-mcps-2025</guid>
      <pubDate>Fri, 20 Sep 2025 00:00:00 GMT</pubDate>
      <category>Reviews</category>
      <category>Lists</category>
    </item>
    
    ${DOCS.slice(0, 10).map((doc) => `
    <item>
      <title>${doc.title}</title>
      <description>${doc.description}</description>
      <link>${baseUrl}${doc.path}</link>
      <guid>${baseUrl}${doc.path}</guid>
      <pubDate>${new Date(doc.updatedAt).toUTCString()}</pubDate>
      <category>Documentation</category>
      <category>${doc.category}</category>
    </item>`).join('')}
  </channel>
</rss>`

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}