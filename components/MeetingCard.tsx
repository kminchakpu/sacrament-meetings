import Link from "next/link";
import { deleteMeeting } from "@/lib/actions";
import type { SacramentMeeting } from "@/lib/types";
interface MeetingCardProps {
  meeting: SacramentMeeting;
}
export default function MeetingCard({
  meeting,
}: MeetingCardProps) {
  const deleteMeetingWithId = deleteMeeting.bind(
    null,
    meeting.id
  );
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
      <div className="mt-6 flex flex-wrap items-center gap-4">
        <Link
          href={`/meetings/${meeting.id}`}
          className="font-semibold text-yellow-500 transition hover:text-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 focus:ring-offset-[#1D2F6F]"
        >
          View Meeting →
        </Link>
        <Link
          href={`/meetings/${meeting.id}/edit`}
          className="rounded-lg border border-slate-50 px-4 py-2 text-sm font-semibold text-amber-200 transition hover:bg-amber-300 hover:text-[#1D2F6F] focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 focus:ring-offset-[#1D2F6F]"
        >
          Edit
        </Link>
        <form action={deleteMeetingWithId}>
          <button
            type="submit"
            className="rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-slate-50 transition hover:bg-red-200 hover:text-red-900 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-offset-2 focus:ring-offset-[#1D2F6F]"
            aria-label={`Delete meeting from ${meeting.date}`}
          >
            Delete
          </button>
        </form>
      </div>
    </article>
  );
}