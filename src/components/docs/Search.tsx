"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search as SearchIcon, Timer, X } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { CATEGORY_LABELS, DOCS } from "@/content/docs/manifest";
import { cn } from "@/lib/utils";

interface SearchProps {
  className?: string;
}

type ScoredDoc = {
  slug: string;
  path: string;
  title: string;
  description: string;
  category: keyof typeof CATEGORY_LABELS;
  readingTimeMinutes: number;
  version: string;
  score: number;
};

export function Search({ className }: SearchProps) {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const normalizedDocs = useMemo(
    () =>
      DOCS.map((doc) => ({
        ...doc,
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

  const filteredDocs = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return [];
    const tokens = normalized.split(/\s+/).filter(Boolean);
    if (!tokens.length) return [];

    const matches: ScoredDoc[] = [];
    normalizedDocs.forEach((doc) => {
      const tokenMatches = tokens.map((token) => ({
        token,
        inTitle: doc.title.toLowerCase().includes(token),
        inHaystack: doc.haystack.includes(token),
      }));
      if (!tokenMatches.every((match) => match.inHaystack)) return;
      const score = tokenMatches.reduce((acc, match) => acc + (match.inTitle ? 3 : 1), 0);
      matches.push({
        slug: doc.slug,
        path: doc.path,
        title: doc.title,
        description: doc.description,
        category: doc.category,
        readingTimeMinutes: doc.readingTimeMinutes,
        version: doc.version,
        score,
      });
    });

    return matches.sort((a, b) => b.score - a.score).slice(0, 8);
  }, [normalizedDocs, query]);

  const handleClose = () => {
    setQuery("");
    setIsOpen(false);
  };

  return (
    <div className={cn('relative', className)}>
      <div className="relative">
        <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
        <Input
          placeholder="Search documentation..."
          value={query}
          onChange={(event) => {
            const value = event.target.value;
            setQuery(value);
            setIsOpen(value.trim().length > 0);
          }}
          onFocus={() => setIsOpen(query.trim().length > 0)}
          className="pl-9 pr-9"
        />
        {query && (
          <button
            type="button"
            className="absolute right-2 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-md text-muted-foreground hover:bg-muted"
            onClick={handleClose}
            aria-label="Clear search"
          >
            <X className="h-3 w-3" aria-hidden />
          </button>
        )}
      </div>

      {isOpen && filteredDocs.length > 0 && (
        <div className="absolute top-full left-0 right-0 z-50 mt-2 max-h-96 overflow-y-auto rounded-md border bg-background shadow-lg">
          <div className="p-2">
            <div className="mb-2 px-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              {filteredDocs.length} result{filteredDocs.length !== 1 ? 's' : ''}
            </div>
            {filteredDocs.map((doc) => (
              <Link
                key={doc.slug}
                href={doc.path}
                onClick={handleClose}
                className="block rounded-md p-3 hover:bg-muted"
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="font-medium text-sm">{doc.title}</div>
                  <Badge variant="outline" className="text-xs">
                    {CATEGORY_LABELS[doc.category]}
                  </Badge>
                </div>
                <div className="mt-1 text-xs text-muted-foreground line-clamp-2">
                  {doc.description}
                </div>
                <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <Timer className="h-3 w-3" aria-hidden />
                    {doc.readingTimeMinutes} min read
                  </span>
                  <span>{doc.version}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {isOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
      )}
    </div>
  );
}
