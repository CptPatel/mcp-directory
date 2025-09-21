"use client";

import { useState } from "react";
import { Search as SearchIcon, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DOCS } from "@/content/docs/manifest";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface SearchProps {
  className?: string;
}

export function Search({ className }: SearchProps) {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const filteredDocs = query
    ? DOCS.filter(
        (doc) =>
          doc.title.toLowerCase().includes(query.toLowerCase()) ||
          doc.description.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 8)
    : [];

  return (
    <div className={cn("relative", className)}>
      <div className="relative">
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search documentation..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(e.target.value.length > 0);
          }}
          onFocus={() => setIsOpen(query.length > 0)}
          className="pl-9 pr-9"
        />
        {query && (
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
            onClick={() => {
              setQuery("");
              setIsOpen(false);
            }}
          >
            <X className="h-3 w-3" />
          </Button>
        )}
      </div>

      {isOpen && filteredDocs.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-background border rounded-md shadow-lg z-50 max-h-96 overflow-y-auto">
          <div className="p-2">
            <div className="text-xs text-muted-foreground mb-2 px-2">
              {filteredDocs.length} result{filteredDocs.length !== 1 ? 's' : ''}
            </div>
            {filteredDocs.map((doc) => (
              <Link
                key={doc.slug}
                href={doc.path}
                onClick={() => {
                  setQuery("");
                  setIsOpen(false);
                }}
                className="block p-3 hover:bg-muted rounded-md transition-colors"
              >
                <div className="font-medium text-sm">{doc.title}</div>
                <div className="text-xs text-muted-foreground mt-1 line-clamp-2">
                  {doc.description}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}