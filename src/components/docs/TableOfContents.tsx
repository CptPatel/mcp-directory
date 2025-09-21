"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  className?: string;
}

export function TableOfContents({ className }: TableOfContentsProps) {
  const [toc, setToc] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const headings = document.querySelectorAll("h2, h3");
    const tocItems: TocItem[] = Array.from(headings).map((heading) => ({
      id: heading.id,
      text: heading.textContent || "",
      level: parseInt(heading.tagName.charAt(1)),
    }));
    setToc(tocItems);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -66%" }
    );

    headings.forEach((heading) => observer.observe(heading));

    return () => observer.disconnect();
  }, []);

  if (toc.length === 0) return null;

  return (
    <div className={cn("w-64 pl-4", className)}>
      <div className="sticky top-24">
        <h4 className="text-sm font-medium mb-4">On this page</h4>
        <nav className="space-y-1">
          {toc.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                "block text-sm text-muted-foreground hover:text-foreground transition-colors",
                item.level === 3 && "pl-4",
                activeId === item.id && "text-foreground font-medium"
              )}
            >
              {item.text}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}