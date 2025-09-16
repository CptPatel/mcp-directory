"use client";

import { PackageProvider } from "@/contexts/PackageContext";
import { ThemeProvider } from "next-themes";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <PackageProvider>{children}</PackageProvider>
    </ThemeProvider>
  );
}