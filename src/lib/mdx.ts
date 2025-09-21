import { readFileSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

export interface DocFrontmatter {
  title: string;
  description: string;
  slug: string;
  category: 'cli' | 'ide' | 'deploy' | 'testing';
  updatedAt: string;
  ogImage?: string;
  faqs?: Array<{
    q: string;
    a: string;
  }>;
}

export function parseMDXFrontmatter(filePath: string): DocFrontmatter {
  try {
    const fileContents = readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    return data as DocFrontmatter;
  } catch (error) {
    console.error(`Error parsing frontmatter for ${filePath}:`, error);
    throw error;
  }
}

export function getDocPath(slug: string): string {
  return join(process.cwd(), 'src', 'app', 'docs', slug, 'page.mdx');
}

export async function getDocFrontmatter(slug: string): Promise<DocFrontmatter> {
  const filePath = getDocPath(slug);
  return parseMDXFrontmatter(filePath);
}