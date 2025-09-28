import Script from "next/script";

export const GoogleAdsense = () => {
  // Always load AdSense script so Google can verify it
  return (
    <Script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5450113862618776"
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
};