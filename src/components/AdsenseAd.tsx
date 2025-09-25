"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle: any;
  }
}

export const AdsenseAd = ({
  slot,
  format = "auto",
  responsive = true,
}: {
  slot: string;
  format?: string;
  responsive?: boolean;
}) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error(err);
    }
  }, []);

  if (process.env.NODE_ENV !== "production") {
    return (
      <div
        style={{
          background: "#e9e9e9",
          color: "#666",
          textAlign: "center",
          padding: "20px",
          border: "1px solid #ccc",
        }}
      >
        Adsense Ad Unit ({slot})
      </div>
    );
  }

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-5450113862618776"
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive={responsive.toString()}
    ></ins>
  );
};
