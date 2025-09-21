'use client';

import Script from 'next/script';

export function GoogleAnalytics() {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  // Don't load in development unless explicitly enabled
  if (process.env.NODE_ENV === 'development' && !process.env.NEXT_PUBLIC_GA_DEBUG) {
    console.log('Google Analytics disabled in development. Set NEXT_PUBLIC_GA_DEBUG=true to enable.');
    return null;
  }

  if (!GA_MEASUREMENT_ID) {
    console.warn('Google Analytics: NEXT_PUBLIC_GA_MEASUREMENT_ID not found');
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
        onLoad={() => {
          console.log('Google Analytics loaded successfully');
        }}
        onError={(e) => {
          console.error('Google Analytics failed to load:', e);
        }}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_title: document.title,
            page_location: window.location.href,
            debug_mode: ${process.env.NODE_ENV === 'development'}
          });
          console.log('Google Analytics configured with ID: ${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
}