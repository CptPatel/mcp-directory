"use client";

import * as React from "react";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CodeBlockProps extends React.HTMLAttributes<HTMLPreElement> {
  children: React.ReactNode;
}

export function CodeBlock({ children, className, ...props }: CodeBlockProps) {
  const [copied, setCopied] = React.useState(false);
  const textContent = React.useMemo(() => {
    const toText = (child: React.ReactNode): string => {
      if (typeof child === 'string') return child;
      if (typeof child === 'number') return child.toString();
      if (Array.isArray(child)) return child.map(toText).join('');
      if (React.isValidElement(child)) {
        return toText(child.props.children);
      }
      return '';
    };
    return toText(children).trim();
  }, [children]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy code', error);
    }
  };

  return (
    <div className="group relative">
      <Button
        type="button"
        variant="outline"
        size="sm"
        className="absolute right-4 top-4 z-10 hidden items-center gap-2 border-border/70 bg-background/80 backdrop-blur group-hover:flex"
        onClick={handleCopy}
      >
        <Copy className="h-4 w-4" aria-hidden />
        <span>{copied ? 'Copied' : 'Copy'}</span>
      </Button>
      <pre
        className={cn(
          "mb-4 mt-6 overflow-x-auto rounded-lg border border-border/60 bg-slate-950/90 py-4 text-sm text-slate-100 dark:bg-slate-900",
          className
        )}
        {...props}
      >
        {children}
      </pre>
    </div>
  );
}
