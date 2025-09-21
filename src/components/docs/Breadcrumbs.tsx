import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { CATEGORY_LABELS, getDocBySlug } from "@/content/docs/manifest";

interface BreadcrumbsProps {
  slug?: string;
}

export function Breadcrumbs({ slug }: BreadcrumbsProps) {
  const doc = slug ? getDocBySlug(slug) : null;

  return (
    <nav className="flex items-center space-x-1 text-sm text-muted-foreground mb-6">
      <Link href="/" className="hover:text-foreground transition-colors">
        <Home className="h-4 w-4" />
      </Link>
      <ChevronRight className="h-4 w-4" />
      <Link href="/docs" className="hover:text-foreground transition-colors">
        Docs
      </Link>
      {doc && (
        <>
          <ChevronRight className="h-4 w-4" />
          <span className="text-muted-foreground">
            {CATEGORY_LABELS[doc.category]}
          </span>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground font-medium">{doc.title}</span>
        </>
      )}
    </nav>
  );
}