import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="container px-4 py-8 mx-auto max-w-6xl">
      {/* Header Skeleton */}
      <div className="text-center mb-12">
        <Skeleton className="h-4 w-32 mx-auto mb-4" />
        <Skeleton className="h-12 w-96 mx-auto mb-6" />
        <Skeleton className="h-6 w-[600px] mx-auto mb-8" />
        <div className="flex justify-center gap-4">
          <Skeleton className="h-12 w-32" />
          <Skeleton className="h-12 w-32" />
          <Skeleton className="h-12 w-32" />
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Skeleton className="h-96 w-full rounded-xl" />
        </div>
        <div className="space-y-6">
          <Skeleton className="h-48 w-full rounded-xl" />
          <Skeleton className="h-48 w-full rounded-xl" />
          <Skeleton className="h-32 w-full rounded-xl" />
        </div>
      </div>
    </div>
  );
}