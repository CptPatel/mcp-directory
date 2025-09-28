import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/dashboard/', '/api/auth/', '/sign-in/', '/sign-up/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/dashboard/', '/api/auth/', '/sign-in/', '/sign-up/'],
        crawlDelay: 1,
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/dashboard/', '/api/auth/', '/sign-in/', '/sign-up/'],
        crawlDelay: 1,
      }
    ],
    sitemap: 'https://mcpdirectory.app/sitemap.xml',
    host: 'https://mcpdirectory.app',
  }
}