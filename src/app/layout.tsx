import { TempoInit } from "@/components/tempo-init";
import { WebVitals } from "@/components/web-vitals";
import { AnimatedNavBar } from "@/components/ui/animated-navbar";
import { Toaster } from "@/components/ui/toaster";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { cookies } from "next/headers";
import "./globals.css";
import Providers from "./providers";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

// Force dynamic rendering for all pages
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const fetchCache = 'force-no-store';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MCP Directory - Setup Multiple MCPs in Minutes, Not Hours",
  description: "Discover, bundle, and deploy Model Context Protocol configurations with one-click installation. Browse verified MCPs, create custom packages, and streamline your AI workflow setup.",
  keywords: "MCP, Model Context Protocol, AI tools, automation, package manager, one-click install, AI workflow, development tools, productivity",
  authors: [{ name: "MCP Directory Team" }],
  creator: "MCP Directory",
  publisher: "MCP Directory",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mcpdirectory.app",
    title: "MCP Directory - Setup Multiple MCPs in Minutes",
    description: "The ultimate directory for Model Context Protocol configurations. Discover, bundle, and deploy MCPs with ease.",
    siteName: "MCP Directory",
  },
  twitter: {
    card: "summary_large_image",
    title: "MCP Directory - Setup Multiple MCPs in Minutes",
    description: "Discover, bundle, and deploy Model Context Protocol configurations with one-click installation.",
    creator: "@mcpdirectory",
  },
  verification: {
    google: "your-google-verification-code",
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
          <Script
            id="structured-data"
            type="application/ld+json"
            nonce={nonce}
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebApplication",
                "name": "MCP Directory",
                "description": "Discover, bundle, and deploy Model Context Protocol configurations with one-click installation. AI-powered MCP creation tools included.",
                "url": "https://mcpdirectory.app",
                "applicationCategory": "DeveloperApplication",
                "operatingSystem": "Any",
                "browserRequirements": "Requires JavaScript. Requires HTML5.",
                "softwareVersion": "1.0",
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
                  "Community features"
                ],
                "screenshot": "https://mcpdirectory.app/og-image.png",
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.8",
                  "ratingCount": "12000"
                }
              })
            }}
          />
        </head>
        <body className={inter.className}>
          <Providers>
            <div className="min-h-screen bg-background">
              <AnimatedNavBar />
              <div className="pt-16 md:pt-20">
                {children}
              </div>
            </div>
            <Toaster />
          </Providers>
          <TempoInit />
          <WebVitals />
          <SpeedInsights />
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
}
