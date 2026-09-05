import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sacrament Meeting Planner | Kevin Minchakpu",
  description:
    "Plan, review, and view current and past sacrament meeting programs, including announcements, hymns, prayers, ward business, speakers, and musical numbers.",
};

export default function Home() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-orange-400">
          Sacrament Meeting Planner
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Plan, review, and view sacrament meeting programs.
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          View current and past meeting agendas, including announcements,
          hymns, prayers, ward business, speakers, and musical numbers.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/meetings"
            className="rounded-lg bg-blue-700 px-5 py-3 font-semibold text-white transition hover:bg-blue-800"
          >
            View Meetings
          </Link>
          <Link
            href="/meetings/current"
            className="rounded-lg border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Current Meeting
          </Link>
        </div>
      </div>
    </section>
  );
}