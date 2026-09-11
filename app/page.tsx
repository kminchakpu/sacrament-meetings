import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sacrament Meeting Planner | Kevin Minchakpu",
  description:
    "Plan, review, and view current and past sacrament meeting programs, including announcements, hymns, prayers, ward business, speakers, and musical numbers.",
};

export default function Home() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">
            Sacrament Meeting Planner
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-800 sm:text-5xl">
            Plan, review, and view sacrament meeting programs.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-700">
            View current and past meeting agendas, including announcements,
            hymns, prayers, ward business, speakers, and musical numbers.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/meetings"
              className=" font-play rounded-lg bg-blue-700 px-5 py-3 font-semibold text-white transition hover:bg-blue-800"
            >
              View Meetings
            </Link>
            <Link
              href="/meetings/current"
              className="font-play rounded-lg border border-slate-300 bg-slate-800 px-5 py-3 font-semibold text-slate-200 transition hover:bg-slate-50 hover:text-slate-900"
            >
              Current Meeting
            </Link>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-md shadow-xl">
          <Image
            src="/images/meetinghouse.jpg"
            alt="Karu Ward Meeting House"
            width={800}
            height={600}
            priority
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}