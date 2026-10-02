export default function Loading() {
  return (
    <div className="container-page py-10" role="status" aria-busy="true">
      <div className="h-8 w-2/3 max-w-md motion-safe:animate-pulse rounded bg-surface-2" />
      <div className="mt-4 h-4 w-full max-w-xl motion-safe:animate-pulse rounded bg-surface-2" />
      <div className="mt-2 h-4 w-4/5 max-w-lg motion-safe:animate-pulse rounded bg-surface-2" />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="aspect-[8/5] motion-safe:animate-pulse rounded-lg bg-surface-2" />
        ))}
      </div>
    </div>
  );
}
