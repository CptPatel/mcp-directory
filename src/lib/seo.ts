import type { Metadata } from 'next';
import { getDocBySlug } from '@/content/docs/manifest';

export function generateDocMetadata(slug: string): Metadata {
  const doc = getDocBySlug(slug);
  
  if (!doc) {
    return {
      title: 'Documentation Not Found',
      description: 'The requested documentation page could not be found.',
    };
  }

  const url = `https://mcpdirectory.app${doc.path}`;

  return {
    title: doc.title,
    description: doc.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: doc.title,
      description: doc.description,
      url,
      siteName: 'MCP Directory',
      type: 'article',
      publishedTime: doc.updatedAt,
      modifiedTime: doc.updatedAt,
    },
    twitter: {
      card: 'summary_large_image',
      title: doc.title,
      description: doc.description,
      site: '@mcpdirectory',
    },
  };
}