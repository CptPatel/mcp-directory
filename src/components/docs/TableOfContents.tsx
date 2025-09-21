"use client";

import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";

interface TocLeaf {
  id: string;
  text: string;
  level: number;
  children: TocLeaf[];
}

interface TableOfContentsProps {
  className?: string;
}

const HEADING_SELECTOR = "[data-doc-toc] h2, [data-doc-toc] h3";

function buildTocTree(headings: HTMLElement[]): TocLeaf[] {
  const tree: TocLeaf[] = [];
  const seen = new Set<string>();
  let currentSection: TocLeaf | null = null;

  headings.forEach((heading) => {
    if (!heading.id) return;
    if (heading.dataset.tocIgnore !== undefined) return;

    const id = heading.id;
    if (seen.has(id)) return;
    seen.add(id);

    const level = Number.parseInt(heading.tagName.charAt(1), 10);
    const text = heading.textContent?.trim() ?? "";
    const node: TocLeaf = { id, text, level, children: [] };

    if (level <= 2) {
      tree.push(node);
      currentSection = node;
    } else if (level === 3 && currentSection) {
      currentSection.children.push(node);
    } else {
      const parent = tree[tree.length - 1];
      if (parent) parent.children.push(node);
      else tree.push(node);
    }
  });

  return tree;
}

export function TableOfContents({ className }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<HTMLElement[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const found = Array.from(document.querySelectorAll<HTMLElement>(HEADING_SELECTOR));
    setHeadings(found);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-120px 0px -70%" }
    );

    found.forEach((heading) => observer.observe(heading));

    return () => observer.disconnect();
  }, []);

  const toc = useMemo(() => buildTocTree(headings), [headings]);

  if (toc.length === 0) return null;

  const renderItems = (items: TocLeaf[], depth = 0) => (
    <ul className={cn(depth === 0 ? "space-y-2" : "space-y-1 pl-4 border-l border-border/40 ml-2")}>
      {items.map((item) => {
        const isActive = activeId === item.id || item.children.some((child) => child.id === activeId);
        return (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={cn(
                "block text-sm text-muted-foreground transition-colors hover:text-foreground",
                isActive && "text-foreground font-medium"
              )}
            >
              {item.text}
            </a>
            {item.children.length > 0 && renderItems(item.children, depth + 1)}
          </li>
        );
      })}
    </ul>
  );

  return (
    <div className={cn("w-64 pl-4", className)}>
      <div className="sticky top-24">
        <h4 className="text-sm font-medium mb-4">On this page</h4>
        <nav className="space-y-2">
          {renderItems(toc)}
        </nav>
      </div>
    </div>
  );
}
