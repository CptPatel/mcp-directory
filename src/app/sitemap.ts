import { MetadataRoute } from "next";
import { DOCS } from "@/content/docs/manifest";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mcpdirectory.app";
  const currentDate = new Date("2025-01-22"); // Updated to current date

  const corePages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/browse`,
      lastModified: currentDate,
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/create`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/dashboard`,
      lastModified: currentDate,
      changeFrequency: "daily" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/packages`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/docs`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/community`,
      lastModified: currentDate,
      changeFrequency: "daily" as const,
      priority: 0.7,
    },
  ];

  // Enhanced blog pages with proper SEO structure
  const blogPages = [
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    // New trending/featured posts with high priority
    {
      url: `${baseUrl}/blog/mcp-performance-optimization-2025`,
      lastModified: new Date("2025-01-22"),
      changeFrequency: "monthly" as const,
      priority: 0.98, // Highest priority for newest trending content
    },
    {
      url: `${baseUrl}/blog/mcp-testing-debugging-guide-2025`,
      lastModified: new Date("2025-01-21"),
      changeFrequency: "monthly" as const,
      priority: 0.97, // High priority for trending content
    },
    {
      url: `${baseUrl}/blog/enterprise-mcp-deployment-2025`,
      lastModified: new Date("2025-01-20"),
      changeFrequency: "monthly" as const,
      priority: 0.96, // High priority for enterprise content
    },
    {
      url: `${baseUrl}/blog/building-ai-agents-mcp-2025`,
      lastModified: new Date("2025-01-18"),
      changeFrequency: "monthly" as const,
      priority: 0.95, // High priority for AI agent content
    },
    {
      url: `${baseUrl}/blog/mcp-vs-langchain-2025`,
      lastModified: new Date("2025-01-15"),
      changeFrequency: "monthly" as const,
      priority: 0.94, // High priority for comparison content
    },
    {
      url: `${baseUrl}/blog/ai-agent-security-mcp-2025`,
      lastModified: new Date("2025-01-10"),
      changeFrequency: "monthly" as const,
      priority: 0.93, // High priority for security content
    },
    // Existing popular posts
    {
      url: `${baseUrl}/blog/how-to-create-custom-mcp-server`,
      lastModified: new Date("2025-01-05"),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/best-mcps-2025`,
      lastModified: new Date("2024-12-28"),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
  ];

  // Documentation pages with enhanced categorization and priorities
  const docPages = DOCS.map((doc) => {
    const updated = doc.updatedAt ? new Date(doc.updatedAt) : currentDate;

    // Enhanced priority calculation based on content type and popularity
    let priority = 0.75;

    // High priority for setup and troubleshooting guides
    if (doc.category === "cli" || doc.category === "ide") {
      priority = 0.85;
    } else if (doc.category === "deploy") {
      priority = 0.8;
    } else if (doc.category === "testing") {
      priority = 0.8; // Testing docs are crucial for troubleshooting
    }

    // Boost priority for most popular setup guides (based on search volume)
    if (
      doc.slug.includes("cursor") ||
      doc.slug.includes("vscode") ||
      doc.slug.includes("claude-desktop") ||
      doc.slug.includes("common-errors") ||
      doc.slug.includes("authentication-errors")
    ) {
      priority = 0.9;
    }

    // Ultra-high priority for critical troubleshooting guides
    if (
      doc.slug.includes("connection-refused") ||
      doc.slug.includes("mcp-not-showing")
    ) {
      priority = 0.95;
    }

    return {
      url: `${baseUrl}${doc.path}`,
      lastModified: updated,
      changeFrequency: "monthly" as const,
      priority,
    };
  });

  // Additional SEO-focused pages that might exist
  const additionalPages = [
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    // Category pages for better SEO structure
    {
      url: `${baseUrl}/blog/category/tutorial`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/category/security`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/category/comparison`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/category/performance`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/category/enterprise`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/category/testing`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
  ];

  return [...corePages, ...blogPages, ...docPages, ...additionalPages];
}
