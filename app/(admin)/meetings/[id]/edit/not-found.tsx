import Link from "next/link";
export default function MeetingNotFound() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <p className="text-sm font-bold uppercase tracking-wider text-slate-600">
          404
        </p>
        <h1 className="mt-2 text-3xl font-bold text-zinc-800">
          Meeting not found
        </h1>
        <p className="mt-4 text-zinc-700">
          The meeting you are trying to edit does not exist.
        </p>
        <Link
          href="/meetings"
          className="mt-6 inline-block rounded-lg bg-blue-800 px-5 py-3 font-semibold text-white transition hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2"
        >
          Back to Meetings
        </Link>
      </div>
    </main>
  );
}