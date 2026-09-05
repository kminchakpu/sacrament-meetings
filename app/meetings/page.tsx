import type { Metadata } from "next";
import MeetingCard from "@/components/MeetingCard";
import type { SacramentMeeting } from "@/lib/types";

export const metadata: Metadata = {
  title: "Sacrament Meetings | Kevin Minchakpu",
  description:
    "View current and past sacrament meeting programs, including meeting details and information from previous sacrament meetings.",
};

async function getMeetings(): Promise<SacramentMeeting[]> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/meetings`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch meetings.");
  }

  return response.json();
}

export default async function MeetingsPage() {
  const meetings = await getMeetings();

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div>
        <p className="text-sm font-semibold uppercase tracking-wider text-orange-300">
          Meetings
        </p>
        <h1 className="mt-2 text-3xl font-bold text-slate-200 sm:text-4xl">
          Sacrament Meetings
        </h1>
        <p className="mt-4 max-w-2xl text-slate-200">
          View current and past sacrament meeting programs.
        </p>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {meetings.map((meeting) => (
          <MeetingCard
            key={meeting.id}
            meeting={meeting}
          />
        ))}
      </div>
    </main>
  );
}