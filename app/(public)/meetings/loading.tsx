export default function Loading() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="animate-pulse">
        <div className="h-8 w-64 rounded bg-slate-200" />

        <div className="mt-4 h-4 max-w-xl rounded bg-slate-200" />

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="h-48 rounded-xl bg-slate-200" />
          <div className="h-48 rounded-xl bg-slate-200" />
        </div>
      </div>
    </main>
  );
}