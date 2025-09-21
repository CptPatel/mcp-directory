import * as React from 'react'
import type { MDXComponents } from 'mdx/types'
import { cn } from '@/lib/utils'
import { CodeBlock } from '@/components/docs/CodeBlock'

const slugify = (value: string | undefined) =>
  value?.toString().toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '') ?? ''

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ className, ...props }) => (
      <h1
        className={cn(
          'scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl mb-6',
          className
        )}
        {...props}
      />
    ),
    h2: ({ className, ...props }) => (
      <h2
        className={cn(
          'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mt-12 mb-4',
          className
        )}
        id={slugify(props.children as string)}
        {...props}
      />
    ),
    h3: ({ className, ...props }) => (
      <h3
        className={cn(
          'scroll-m-20 text-2xl font-semibold tracking-tight mt-8 mb-4',
          className
        )}
        id={slugify(props.children as string)}
        {...props}
      />
    ),
    h4: ({ className, ...props }) => (
      <h4
        className={cn(
          'scroll-m-20 text-xl font-semibold tracking-tight mt-6 mb-3',
          className
        )}
        {...props}
      />
    ),
    p: ({ className, ...props }) => (
      <p
        className={cn('leading-7 [&:not(:first-child)]:mt-6 text-slate-700 dark:text-slate-200', className)}
        {...props}
      />
    ),
    ul: ({ className, ...props }) => (
      <ul className={cn('my-6 ml-6 list-disc text-slate-700 dark:text-slate-200', className)} {...props} />
    ),
    ol: ({ className, ...props }) => (
      <ol className={cn('my-6 ml-6 list-decimal text-slate-700 dark:text-slate-200', className)} {...props} />
    ),
    li: ({ className, ...props }) => (
      <li className={cn('mt-2', className)} {...props} />
    ),
    blockquote: ({ className, ...props }) => (
      <blockquote
        className={cn(
          'mt-6 border-l-2 border-slate-300 pl-6 italic text-slate-700 dark:border-slate-600 dark:text-slate-200',
          className
        )}
        {...props}
      />
    ),
    img: ({ className, alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => (
      // eslint-disable-next-line @next/next/no-img-element
      <img className={cn('rounded-md border', className)} alt={alt} {...props} />
    ),
    hr: ({ ...props }) => <hr className="my-4 md:my-8" {...props} />,
    table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
      <div className="my-6 w-full overflow-y-auto">
        <table className={cn('w-full', className)} {...props} />
      </div>
    ),
    tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
      <tr className={cn('m-0 border-t p-0 even:bg-muted/70', className)} {...props} />
    ),
    th: ({ className, ...props }) => (
      <th
        className={cn(
          'border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right',
          className
        )}
        {...props}
      />
    ),
    td: ({ className, ...props }) => (
      <td
        className={cn(
          'border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right',
          className
        )}
        {...props}
      />
    ),
    pre: ({ className, children, ...props }) => (
      <CodeBlock className={className} {...props}>
        {children}
      </CodeBlock>
    ),
    code: ({ className, ...props }) => (
      <code
        className={cn(
          'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold dark:bg-slate-800/80',
          className
        )}
        {...props}
      />
    ),
    ...components,
  }
}

