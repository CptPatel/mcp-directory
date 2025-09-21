"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { DOCS, CATEGORY_LABELS, type DocCategory, getDocsByCategory } from "@/content/docs/manifest";
import { cn } from "@/lib/utils";
import { ChevronDown, FileText, Filter, Search as SearchIcon, X } from "lucide-react";

interface SidebarProps {
  className?: string;
  onClose?: () => void;
}

const categoryOrder: DocCategory[] = ['cli', 'ide', 'deploy', 'testing'];

type ScoredDoc = {
  doc: typeof DOCS[number];
  score: number;
};

export function Sidebar({ className, onClose }: SidebarProps) {
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<DocCategory | 'all'>('all');

  const docsByCategory = useMemo(() => getDocsByCategory(), []);

  const currentDoc = useMemo(
    () => DOCS.find((doc) => doc.path === pathname),
    [pathname]
  );

  const [openSections, setOpenSections] = useState<string[]>(() =>
    currentDoc ? [currentDoc.category] : categoryOrder.length ? [categoryOrder[0]] : []
  );

  useEffect(() => {
    if (currentDoc && !openSections.includes(currentDoc.category)) {
      setOpenSections((prev) => [...prev, currentDoc.category]);
    }
  }, [currentDoc, openSections]);

  useEffect(() => {
    if (activeFilter !== 'all' && !openSections.includes(activeFilter)) {
      setOpenSections((prev) => [...prev, activeFilter]);
    }
  }, [activeFilter, openSections]);

  const toggleSection = (category: string) => {
    setOpenSections((prev) =>
      prev.includes(category) ? prev.filter((item) => item !== category) : [...prev, category]
    );
  };

  const normalizedDocs = useMemo(() =>
    DOCS.map((doc) => ({
      doc,
      haystack: [
        doc.title,
        doc.description,
        CATEGORY_LABELS[doc.category],
        ...(doc.tags ?? []),
      ]
        .join(' ')
        .toLowerCase(),
    })),
    []
  );

  const searchResults = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return null;
    const tokens = query.split(/\s+/).filter(Boolean);
    if (!tokens.length) return null;

    const matches: ScoredDoc[] = [];
    normalizedDocs.forEach(({ doc, haystack }) => {
      const tokenMatches = tokens.map((token) => ({
        token,
        inTitle: doc.title.toLowerCase().includes(token),
        inHaystack: haystack.includes(token),
      }));
      if (!tokenMatches.every((match) => match.inHaystack)) return;
      const score = tokenMatches.reduce((acc, match) => acc + (match.inTitle ? 3 : 1), 0);
      matches.push({ doc, score });
    });

    return matches
      .sort((a, b) => b.score - a.score)
      .map(({ doc }) => doc)
      .filter((doc) => activeFilter === 'all' || doc.category === activeFilter);
  }, [activeFilter, normalizedDocs, searchQuery]);

  const activeLinkRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    if (activeLinkRef.current) {
      activeLinkRef.current.scrollIntoView({ block: 'center' });
    }
  }, [pathname]);

  const renderCategory = (category: DocCategory) => {
    const docs = docsByCategory[category];
    if (!docs?.length) return null;
    const isOpen = openSections.includes(category);

    return (
      <div key={category} className="space-y-2">
        <button
          type="button"
          onClick={() => toggleSection(category)}
          className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm font-semibold text-foreground hover:bg-muted/70"
        >
          <span>{CATEGORY_LABELS[category]}</span>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Badge variant="outline" className="border-border/60 bg-background/50">
              {docs.length}
            </Badge>
            <ChevronDown
              className={cn('h-4 w-4 transition-transform', isOpen ? 'rotate-180' : 'rotate-0')}
              aria-hidden
            />
          </div>
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
                    'flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-muted/60',
                    isActive && 'border border-primary/40 bg-primary/10 text-foreground font-medium'
                  )}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span
                    className={cn('inline-block h-1.5 w-1.5 rounded-full bg-border', isActive && 'bg-primary')}
                    aria-hidden
                  />
                  <span className="truncate">{doc.title}</span>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  return (
    <aside
      className={cn(
        'w-72 border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60',
        className
      )}
    >
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur border-b p-4">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5" aria-hidden />
            <span className="font-semibold">Documentation</span>
          </div>
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="lg:hidden inline-flex h-8 w-8 items-center justify-center rounded-md border border-border/60 text-muted-foreground hover:bg-muted/80"
              aria-label="Close docs navigation"
            >
              <X className="h-4 w-4" aria-hidden />
            </button>
          )}
        </div>

        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
          <Input
            placeholder="Search guides or keywords..."
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            className="pl-9"
          />
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
          <Filter className="h-3 w-3 text-muted-foreground" aria-hidden />
          {(['all', ...categoryOrder] as const).map((option) => {
            const label = option === 'all' ? 'All' : CATEGORY_LABELS[option];
            const isActive = activeFilter === option;
            return (
              <button
                key={option}
                type="button"
                onClick={() => setActiveFilter(option)}
                className={cn(
                  'rounded-full border px-3 py-1 transition-colors',
                  isActive
                    ? 'border-primary/40 bg-primary/10 text-primary'
                    : 'border-border/60 text-muted-foreground hover:border-border'
                )}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="max-h-[calc(100vh-160px)] overflow-y-auto p-4 space-y-6">
        {searchResults ? (
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Search Results ({searchResults.length})
            </h3>
            <div className="space-y-1">
              {searchResults.map((doc) => {
                const isActive = pathname === doc.path;
                return (
                  <Link
                    key={doc.slug}
                    href={doc.path}
                    onClick={onClose}
                    className={cn(
                      'block rounded-lg border border-transparent px-3 py-2 text-sm transition-colors hover:border-border hover:bg-muted/60',
                      isActive && 'border-primary/40 bg-primary/10 text-foreground'
                    )}
                  >
                    <div className="font-medium">{doc.title}</div>
                    <div className="mt-1 text-xs text-muted-foreground line-clamp-2">
                      {doc.description}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ) : (
          categoryOrder
            .filter((category) => activeFilter === 'all' || activeFilter === category)
            .map(renderCategory)
        )}
      </div>
    </aside>
  );
}
