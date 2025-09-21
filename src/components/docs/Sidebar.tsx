"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DOCS, CATEGORY_LABELS, getDocsByCategory } from "@/content/docs/manifest";
import { cn } from "@/lib/utils";
import { ChevronRight, FileText, Search } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface SidebarProps {
  className?: string;
  onClose?: () => void;
}

export function Sidebar({ className, onClose }: SidebarProps) {
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState("");
  const docsByCategory = getDocsByCategory();

  const filteredDocs = searchQuery
    ? DOCS.filter(
        (doc) =>
          doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          doc.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : null;

  return (
    <div className={cn("w-64 border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60", className)}>
      <div className="sticky top-0 p-4 border-b bg-background/95 backdrop-blur">
        <div className="flex items-center gap-2 mb-4">
          <FileText className="h-5 w-5" />
          <span className="font-semibold">Documentation</span>
        </div>
        
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search docs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
      </div>

      <div className="p-4 space-y-6 max-h-[calc(100vh-200px)] overflow-y-auto">
        {filteredDocs ? (
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-2">
              Search Results ({filteredDocs.length})
            </h3>
            <div className="space-y-1">
              {filteredDocs.map((doc) => (
                <Link
                  key={doc.slug}
                  href={doc.path}
                  onClick={onClose}
                  className={cn(
                    "block px-3 py-2 text-sm rounded-md hover:bg-muted transition-colors",
                    pathname === doc.path && "bg-muted font-medium"
                  )}
                >
                  <div className="font-medium">{doc.title}</div>
                  <div className="text-xs text-muted-foreground mt-1 line-clamp-2">
                    {doc.description}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          Object.entries(docsByCategory).map(([category, docs]) => (
            <div key={category}>
              <h3 className="text-sm font-medium text-muted-foreground mb-2">
                {CATEGORY_LABELS[category as keyof typeof CATEGORY_LABELS]}
              </h3>
              <div className="space-y-1">
                {docs.map((doc) => (
                  <Link
                    key={doc.slug}
                    href={doc.path}
                    onClick={onClose}
                    className={cn(
                      "flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-muted transition-colors",
                      pathname === doc.path && "bg-muted font-medium"
                    )}
                  >
                    <ChevronRight className="h-3 w-3 opacity-50" />
                    {doc.title}
                  </Link>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}