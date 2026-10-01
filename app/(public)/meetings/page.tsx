import type { Metadata } from "next";
import MeetingCard from "@/components/MeetingCard";
import MeetingSearch from "@/components/MeetingSearch";
import Pagination from "@/components/Pagination";
import {
  getMeetings,
  getMeetingsTotalPages,
} from "@/lib/meetings-db";

export const metadata: Metadata = {
  title: "Sacrament Meetings | Kevin Minchakpu",
  description:
    "View current and past sacrament meeting programs, including meeting details and information from previous sacrament meetings.",
};

interface MeetingsPageProps {
  searchParams: Promise<{
    query?: string;
    page?: string;
  }>;
}

export default async function MeetingsPage({
  searchParams,
}: MeetingsPageProps) {
   const params = await searchParams;
  const query = params.query ?? "";
  const parsedPage = Number(params.page);
  const currentPage =
    Number.isInteger(parsedPage) && parsedPage > 0
      ? parsedPage
      : 1;

  const [meetings, totalPages] = await Promise.all([
    getMeetings(query, currentPage),
    getMeetingsTotalPages(query),
  ]);

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div>
        <p className="text-sm font-bold uppercase tracking-wider text-slate-600">
          Meetings
        </p>
        <h1 className="mt-2 text-3xl font-bold text-zinc-800 sm:text-4xl">
          Sacrament Meetings
        </h1>
        <p className="mt-4 max-w-2xl text-zinc-800">
          View current and past sacrament meeting programs.
        </p>
      </div>

      <MeetingSearch />

      {meetings.length > 0 ? (
        <>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {meetings.map((meeting) => (
              <MeetingCard
                key={meeting.id}
                meeting={meeting}
              />
            ))}
          </div>

          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
          />
        </>
      ) : (
        <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-zinc-700">
            No meetings found.
          </p>
        </div>
      )}
    </main>
  );
}