import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

function generateNonce(): string {
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  let binary = "";
  for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
  return btoa(binary);
}

// Simple in-memory rate limiting for API routes (demo only; not durable across instances)
const buckets = new Map<string, { ts: number; count: number }>();
function isRateLimited(key: string, limit = 60, windowMs = 60_000) {
  const now = Date.now();
  const rec = buckets.get(key) ?? { ts: now, count: 0 };
  if (now - rec.ts > windowMs) {
    rec.ts = now;
    rec.count = 0;
  }
  rec.count += 1;
  buckets.set(key, rec);
  return rec.count > limit;
}

// Known crawler user agents that should bypass rate limiting
const CRAWLER_USER_AGENTS = [
  'googlebot',
  'bingbot',
  'slurp',
  'duckduckbot',
  'baiduspider',
  'yandexbot',
  'facebookexternalhit',
  'twitterbot',
  'linkedinbot',
  'whatsapp',
  'telegrambot'
];

function isCrawler(userAgent: string): boolean {
  const ua = userAgent.toLowerCase();
  return CRAWLER_USER_AGENTS.some(crawler => ua.includes(crawler));
}

// Define protected routes
const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)',
  '/create(.*)',
]);

export default clerkMiddleware((auth, req) => {
  // Protect routes that require authentication
  if (isProtectedRoute(req)) {
    auth().protect();
  }

  const res = NextResponse.next();
  const userAgent = req.headers.get('user-agent') || '';

  // Skip middleware processing for static files and Next.js internals
  const pathname = req.nextUrl.pathname;
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api/auth') ||
    pathname.includes('.') && !pathname.startsWith('/api/')
  ) {
    return res;
  }

  const nonce = generateNonce();
  const isDevelopment = process.env.NODE_ENV === 'development';
  const scriptSrc = isDevelopment 
    ? `'self' 'nonce-${nonce}' 'unsafe-eval' 'unsafe-inline' https://va.vercel-scripts.com https://vitals.vercel-insights.com https://*.clerk.com https://*.clerk.accounts.dev https://www.googletagmanager.com https://pagead2.googlesyndication.com`
    : `'self' 'nonce-${nonce}' https://va.vercel-scripts.com https://vitals.vercel-insights.com https://*.clerk.com https://*.clerk.accounts.dev https://www.googletagmanager.com https://pagead2.googlesyndication.com`;

  const csp = [
    "default-src 'self'",
    `script-src ${scriptSrc}`,
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "img-src 'self' data: https:",
    "font-src 'self' https://fonts.gstatic.com",
    "connect-src 'self' https://va.vercel-scripts.com https://vitals.vercel-insights.com https://openrouter.ai https://*.clerk.com https://*.clerk.accounts.dev https://www.google-analytics.com https://analytics.google.com https://pagead2.googlesyndication.com",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self' https://*.clerk.com https://*.clerk.accounts.dev",
    "object-src 'none'",
    "upgrade-insecure-requests",
  ].join("; ");

  // Set security headers
  res.headers.set("Content-Security-Policy", csp);
  res.headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload");
  res.headers.set("X-Frame-Options", "DENY");
  res.headers.set("X-Content-Type-Options", "nosniff");
  res.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  res.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  res.headers.set("Cross-Origin-Opener-Policy", "same-origin");

  // Rate limit API routes but exempt crawlers
  const ip = (req.headers.get("x-real-ip") || req.headers.get("x-forwarded-for") || "unknown").toString();
  const path = req.nextUrl.pathname;
  if (path.startsWith("/api") && !isCrawler(userAgent)) {
    const key = `${ip}:${path}`;
    if (isRateLimited(key)) {
      return new NextResponse("Rate limit exceeded", {
        status: 429,
        headers: {
          "Cache-Control": "no-store",
          Vary: "Authorization, Cookie",
        },
      });
    }
  }

  // CSRF: enforce same-origin for state-changing methods (but exempt crawlers)
  const method = req.method?.toUpperCase() || "GET";
  if (["POST", "PUT", "PATCH", "DELETE"].includes(method) && !isCrawler(userAgent)) {
    const origin = req.headers.get("origin") || "";
    const referer = req.headers.get("referer") || "";
    const allowed = req.nextUrl.origin;
    if ((origin && !origin.startsWith(allowed)) && (referer && !referer.startsWith(allowed))) {
      return new NextResponse("Invalid CSRF token", { status: 403, headers: { "Cache-Control": "no-store" } });
    }
  }

  // Set cache control for dynamic routes
  if (path.startsWith("/api") || path.startsWith("/sign-in") || path.startsWith("/sign-up") || path.startsWith("/auth")) {
    res.headers.set("Cache-Control", "no-store");
    res.headers.set("Vary", "Authorization, Cookie");
  }

  // Expose nonce for server components via HttpOnly cookie
  res.cookies.set("csp-nonce", nonce, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: "strict",
    path: "/",
  });

  return res;
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};