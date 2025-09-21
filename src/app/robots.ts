import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/auth/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/auth/'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/auth/'],
      }
    ],
    sitemap: 'https://mcpdirectory.app/sitemap.xml',
    host: 'https://mcpdirectory.app',
  }
}