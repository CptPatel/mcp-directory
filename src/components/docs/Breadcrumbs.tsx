import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { CATEGORY_LABELS, getDocBySlug } from "@/content/docs/manifest";

interface BreadcrumbsProps {
  slug?: string;
}

export function Breadcrumbs({ slug }: BreadcrumbsProps) {
  const doc = slug ? getDocBySlug(slug) : null;
  const crumbs = doc
    ? [CATEGORY_LABELS[doc.category], ...(doc.breadcrumbs ?? [doc.title])]
    : [];

  return (
    <nav className="mb-6 flex items-center flex-wrap gap-1 text-sm text-muted-foreground">
      <Link href="/" className="hover:text-foreground transition-colors" aria-label="Back to home">
        <Home className="h-4 w-4" />
      </Link>
      <ChevronRight className="h-4 w-4" aria-hidden />
      <Link href="/docs" className="hover:text-foreground transition-colors">
        Docs
      </Link>
      {crumbs.map((label, index) => {
        const isLast = index === crumbs.length - 1;
        return (
          <span key={`${label}-${index}`} className="flex items-center gap-1">
            <ChevronRight className="h-4 w-4" aria-hidden />
            <span className={isLast ? 'text-foreground font-medium' : 'hover:text-foreground transition-colors'}>
              {label}
            </span>
          </span>
        );
      })}
    </nav>
  );
}
