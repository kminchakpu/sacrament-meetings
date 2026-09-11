import Link from "next/link";
import type { SacramentMeeting } from "@/lib/types";

interface MeetingCardProps {
  meeting: SacramentMeeting;
}

export default function MeetingCard({
  meeting,
}: MeetingCardProps) {
  return (
    <article className="rounded-xl border border-slate-200 bg-[#1D2F6F] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-white">
            {new Date(`${meeting.date}T00:00:00`).toLocaleDateString(
              "en-US",
              {
                dateStyle: "long",
              }
            )}
          </p>

          <h2 className="mt-2 text-xl font-bold text-amber-200">
            {meeting.meetingType.charAt(0).toUpperCase() +
              meeting.meetingType.slice(1)}{" "}
            Meeting
          </h2>
        </div>

        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium capitalize text-slate-600">
          {meeting.meetingType}
        </span>
      </div>

      <div className="mt-5 space-y-2 text-sm text-slate-200">
        <p>
          <span className="font-semibold text-amber-300">
            Presiding:
          </span>{" "}
          {meeting.presiding}
        </p>

        <p>
          <span className="font-semibold text-amber-300">
            Conducting:
          </span>{" "}
          {meeting.conducting}
        </p>
      </div>

      <Link
        href={`/meetings/${meeting.id}`}
        className="mt-6 inline-block font-semibold text-yellow-500 hover:text-slate-200"
      >
        View Meeting →
      </Link>
    </article>
  );
}