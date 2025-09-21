"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, FileText, Search as SearchIcon, X } from "lucide-react";

import { DOCS, CATEGORY_LABELS, getDocsByCategory } from "@/content/docs/manifest";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

interface SidebarProps {
  className?: string;
  onClose?: () => void;
}

export function Sidebar({ className, onClose }: SidebarProps) {
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState("");
  const docsByCategory = useMemo(() => getDocsByCategory(), []);

  const currentDoc = useMemo(
    () => DOCS.find((doc) => doc.path === pathname),
    [pathname]
  );


const initialOpen = useMemo(() => {
  const categories = Object.keys(docsByCategory);
  if (currentDoc) {
    return [currentDoc.category];
  }
  return categories.length ? [categories[0]] : [];
}, [currentDoc, docsByCategory]);

const [openSections, setOpenSections] = useState<string[]>(() => initialOpen);

useEffect(() => {
  if (currentDoc && !openSections.includes(currentDoc.category)) {
    setOpenSections((prev) => [...prev, currentDoc.category]);
  }
}, [currentDoc, openSections]);

  const toggleSection = (category: string) => {
    setOpenSections((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  const filteredDocs = useMemo(() => {
    if (!searchQuery.trim()) return null;
    const query = searchQuery.toLowerCase();
    return DOCS.filter(
      (doc) =>
        doc.title.toLowerCase().includes(query) ||
        doc.description.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const activeLinkRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    if (activeLinkRef.current) {
      activeLinkRef.current.scrollIntoView({ block: "center" });
    }
  }, [pathname]);

  return (
    <aside
      className={cn(
        "w-72 border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        className
      )}
    >
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur border-b p-4">

<div className="flex items-center justify-between gap-3 mb-4">
  <div className="flex items-center gap-2">
    <FileText className="h-5 w-5" />
    <span className="font-semibold">Documentation</span>
  </div>
  {onClose && (
    <button
      type="button"
      onClick={onClose}
      className="lg:hidden inline-flex h-8 w-8 items-center justify-center rounded-md border border-border/60 text-muted-foreground hover:bg-muted/80"
      aria-label="Close docs navigation"
    >
      <X className="h-4 w-4" />
    </button>
  )}
</div>

        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search guides..."
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            className="pl-9"
          />
        </div>
      </div>

      <div className="p-4 space-y-6 max-h-[calc(100vh-140px)] overflow-y-auto">
        {filteredDocs ? (
          <div>
            <h3 className="text-xs font-semibold uppercase text-muted-foreground tracking-wide mb-3">
              Search Results ({filteredDocs.length})
            </h3>
            <div className="space-y-1">
              {filteredDocs.map((doc) => {
                const isActive = pathname === doc.path;
                return (
                  <Link
                    key={doc.slug}
                    href={doc.path}
                    onClick={onClose}
                    className={cn(
                      "block rounded-lg border border-transparent px-3 py-2 text-sm transition-colors hover:border-border hover:bg-muted/60",
                      isActive && "border-primary/40 bg-primary/10 text-foreground"
                    )}
                  >
                    <div className="font-medium">{doc.title}</div>
                    <div className="text-xs text-muted-foreground mt-1 line-clamp-2">
                      {doc.description}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ) : (
          Object.entries(docsByCategory).map(([category, docs]) => {
            const isOpen = openSections.includes(category);
            return (
              <div key={category} className="space-y-2">
                <button
                  type="button"
                  onClick={() => toggleSection(category)}
                  className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm font-semibold text-foreground hover:bg-muted/70"
                >
                  <span>{CATEGORY_LABELS[category as keyof typeof CATEGORY_LABELS]}</span>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 text-muted-foreground transition-transform",
                      isOpen ? "rotate-180" : "rotate-0"
                    )}
                  />
                </button>
                {isOpen && (
                  <div className="space-y-1 pl-2">
                    {docs.map((doc) => {
                      const isActive = pathname === doc.path;
                      return (
                        <Link
                          key={doc.slug}
                          href={doc.path}
                          onClick={onClose}
                          ref={isActive ? activeLinkRef : undefined}
                          className={cn(
                            "flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-muted/60",
                            isActive && "bg-primary/10 text-foreground font-medium border border-primary/40"
                          )}
                          aria-current={isActive ? "page" : undefined}
                        >
                          <span className="inline-block h-1.5 w-1.5 rounded-full bg-border" aria-hidden />
                          <span className="truncate">{doc.title}</span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </aside>
  );
}
