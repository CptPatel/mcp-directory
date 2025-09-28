import { TempoInit } from "@/components/tempo-init";
import { WebVitals } from "@/components/web-vitals";

import { AnimatedNavBar } from "@/components/ui/animated-navbar";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { cookies } from "next/headers";
import "./globals.css";
import Providers from "./providers";
import { GoogleAdsense } from "@/components/google-adsense";
import { VercelComponents } from "@/components/vercel-analytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://mcpdirectory.app'),
  title: {
    default: "MCP Directory - Setup Multiple MCPs in Minutes, Not Hours",
    template: "%s | MCP Directory"
  },
  description: "Discover, bundle, and deploy Model Context Protocol configurations with one-click installation. Browse 1,200+ verified MCPs, create custom packages, and streamline your AI workflow setup.",
  keywords: [
    "MCP", "Model Context Protocol", "AI tools", "automation", "package manager", 
    "one-click install", "AI workflow", "development tools", "productivity",
    "Claude Desktop", "Cursor IDE", "VSCode", "MCP servers", "AI development",
    "MCP setup", "MCP installation", "MCP deployment", "MCP troubleshooting"
  ],
  authors: [{ name: "MCP Directory Team", url: "https://mcpdirectory.app" }],
  creator: "MCP Directory",
  publisher: "MCP Directory",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mcpdirectory.app",
    title: "MCP Directory - Setup Multiple MCPs in Minutes",
    description: "The ultimate directory for Model Context Protocol configurations. Discover, bundle, and deploy 1,200+ verified MCPs with ease.",
    siteName: "MCP Directory",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MCP Directory - Model Context Protocol Hub"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MCP Directory - Setup Multiple MCPs in Minutes",
    description: "Discover, bundle, and deploy Model Context Protocol configurations with one-click installation.",
    creator: "@mcpdirectory",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://mcpdirectory.app",
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "technology",
  classification: "Developer Tools",
  other: {
    'google-analytics': 'G-TQC2G4XLXH',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const nonce = cookies().get('csp-nonce')?.value;
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
          {/* AdSense - Primary method */}
          <script 
            async 
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5450113862618776"
            crossOrigin="anonymous"
          />
          <GoogleAdsense />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <meta name="theme-color" content="#000000" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-title" content="MCP Directory" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="msapplication-config" content="/browserconfig.xml" />
          <link rel="alternate" type="application/rss+xml" title="MCP Directory RSS Feed" href="/feed.xml" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
          <Script
            id="structured-data"
            type="application/ld+json"
            nonce={nonce}
            dangerouslySetInnerHTML={{
              __html: JSON.stringify([
                {
                  "@context": "https://schema.org",
                  "@type": "WebApplication",
                  "name": "MCP Directory",
                  "alternateName": "Model Context Protocol Directory",
                  "description": "Discover, bundle, and deploy Model Context Protocol configurations with one-click installation. AI-powered MCP creation tools included.",
                  "url": "https://mcpdirectory.app",
                  "applicationCategory": "DeveloperApplication",
                  "operatingSystem": "Any",
                  "browserRequirements": "Requires JavaScript. Requires HTML5.",
                  "softwareVersion": "2.1.0",
                  "datePublished": "2024-12-01",
                  "dateModified": "2025-09-21",
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD",
                    "availability": "https://schema.org/InStock"
                  },
                  "author": {
                    "@type": "Organization",
                    "name": "MCP Directory Team",
                    "url": "https://mcpdirectory.app"
                  },
                  "featureList": [
                    "1,200+ verified MCPs",
                    "AI-powered MCP creation",
                    "One-click installation",
                    "Multi-stack support",
                    "Package builder",
                    "Community features",
                    "Comprehensive documentation",
                    "IDE integrations",
                    "Deployment guides"
                  ],
                  "screenshot": "https://mcpdirectory.app/og-image.png",
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.8",
                    "ratingCount": "12000",
                    "bestRating": "5",
                    "worstRating": "1"
                  },
                  "mainEntity": {
                    "@type": "SoftwareApplication",
                    "name": "MCP Directory",
                    "applicationCategory": "DeveloperApplication",
                    "downloadUrl": "https://mcpdirectory.app",
                    "operatingSystem": "Web Browser"
                  }
                },
                {
                  "@context": "https://schema.org",
                  "@type": "Organization",
                  "name": "MCP Directory",
                  "url": "https://mcpdirectory.app",
                  "logo": "https://mcpdirectory.app/logo.png",
                  "sameAs": [
                    "https://twitter.com/mcpdirectory",
                    "https://github.com/mcpdirectory"
                  ],
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "contactType": "customer service",
                    "url": "https://mcpdirectory.app/community"
                  }
                },
                {
                  "@context": "https://schema.org",
                  "@type": "WebSite",
                  "name": "MCP Directory",
                  "url": "https://mcpdirectory.app",
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": {
                      "@type": "EntryPoint",
                      "urlTemplate": "https://mcpdirectory.app/browse?q={search_term_string}"
                    },
                    "query-input": "required name=search_term_string"
                  }
                }
              ])
            }}
          />
          {/* Google Analytics */}
          {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (process.env.NODE_ENV !== 'development' || process.env.NEXT_PUBLIC_GA_DEBUG) && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
              />
              <script
                nonce={nonce}
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                      page_title: document.title,
                      page_location: window.location.href,
                      debug_mode: ${process.env.NODE_ENV === 'development'}
                    });
                  `,
                }}
              />
            </>
          )}
        </head>
        <body className={inter.className}>
          <Providers>
            <div className="min-h-screen bg-background flex flex-col">
              <AnimatedNavBar />
              <main className="flex-1 pt-16 md:pt-20">
                {children}
              </main>
              <Footer />
            </div>
            <Toaster />
          </Providers>
          <TempoInit />
          <WebVitals />
          <VercelComponents />
        </body>
      </html>
    </ClerkProvider>
  );
}