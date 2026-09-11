import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    default: "Sacrament Meetings | Kevin Minchakpu",
    template: "%s | Sacrament Meeting Planner",
  },
  description:
    "View and manage current and past sacrament meeting programs, including hymns, prayers, announcements, speakers, and ward business.",
};

export default function MeetingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <div className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-6xl flex-wrap gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link
            href="/meetings"
            className="font-medium text-slate-700 hover:text-blue-700"
          >
            All Meetings
          </Link>
          <Link
            href="/meetings/current"
            className="font-medium text-slate-700 hover:text-blue-700"
          >
            Current Sunday
          </Link>
        </div>
      </div>
      {children}
    </section>
  );
}