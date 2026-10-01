"use client";
import Link from "next/link";
interface MeetingsErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}
export default function MeetingsError({
  error,
  reset,
}: MeetingsErrorProps) {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-xl border border-red-200 bg-red-50 p-8 text-center shadow-sm">
        <p className="text-sm font-bold uppercase tracking-wider text-red-700">
          Something went wrong
        </p>
        <h1 className="mt-2 text-3xl font-bold text-zinc-800">
          Unable to load meetings
        </h1>
        <p className="mt-4 text-zinc-700">
          We could not complete your request. Please try again.
        </p>
        {error.digest && (
          <p className="mt-2 text-sm text-zinc-600">
            Error reference: {error.digest}
          </p>
        )}
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <button
            type="button"
            onClick={() => reset()}
            className="rounded-lg bg-blue-800 px-5 py-3 font-semibold text-white transition hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2"
          >
            Try Again
          </button>
          <Link
            href="/meetings"
            className="rounded-lg border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2"
          >
            Back to Meetings
          </Link>
        </div>
      </div>
    </main>
  );
}