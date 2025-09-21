"use client";

import { CATEGORY_LABELS, getDocBySlug } from "@/content/docs/manifest";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, Tag } from "lucide-react";

interface DocMetaProps {
  slug: string;
}

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
});

export function DocMeta({ slug }: DocMetaProps) {
  const doc = getDocBySlug(slug);

  if (!doc) return null;

  const formattedDate = dateFormatter.format(new Date(doc.updatedAt));

  return (
    <div className="mb-8 rounded-xl border bg-muted/40 px-4 py-3 text-sm">
      <div className="flex flex-wrap items-center gap-2">
        <Badge variant="secondary">{CATEGORY_LABELS[doc.category]}</Badge>
        <Badge variant="outline" className="bg-background/80 dark:bg-background/40">
          {doc.version}
        </Badge>
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-4 text-muted-foreground dark:text-slate-300">
        <span className="inline-flex items-center gap-2">
          <CalendarDays className="h-4 w-4" aria-hidden />
          <span>Updated {formattedDate}</span>
        </span>
        <span className="inline-flex items-center gap-2">
          <Clock className="h-4 w-4" aria-hidden />
          <span>{doc.readingTimeMinutes} min read</span>
        </span>
      </div>
      {doc.tags?.length ? (
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <Tag className="h-4 w-4 text-muted-foreground" aria-hidden />
          <div className="flex flex-wrap gap-2">
            {doc.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="bg-background/60 text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
