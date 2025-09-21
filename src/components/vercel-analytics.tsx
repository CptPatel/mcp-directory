'use client';

import { Suspense } from 'react';

// Optional Vercel Analytics - only loads if package is installed
export function VercelAnalytics() {
  try {
    // Dynamic import to avoid build errors if package isn't installed
    const { Analytics } = require('@vercel/analytics/react');
    return <Analytics />;
  } catch (error) {
    // Package not installed, return null
    return null;
  }
}

// Optional Vercel Speed Insights - only loads if package is installed
export function VercelSpeedInsights() {
  try {
    // Dynamic import to avoid build errors if package isn't installed
    const { SpeedInsights } = require('@vercel/speed-insights/react');
    return <SpeedInsights />;
  } catch (error) {
    // Package not installed, return null
    return null;
  }
}

// Combined component with error boundary
export function VercelComponents() {
  return (
    <Suspense fallback={null}>
      <VercelAnalytics />
      <VercelSpeedInsights />
    </Suspense>
  );
}