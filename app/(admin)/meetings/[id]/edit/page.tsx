import type { Metadata } from "next";
import { notFound } from "next/navigation";
import EditMeetingForm from "@/components/EditMeetingForm";
import { getMeetingById } from "@/lib/meetings-db";
interface EditMeetingPageProps {
  params: Promise<{
    id: string;
  }>;
}
export const metadata: Metadata = {
  title: "Edit Meeting",
  description: "Edit an existing sacrament meeting program.",
};
export default async function EditMeetingPage({
  params,
}: EditMeetingPageProps) {
  const { id } = await params;
  const meetingId = Number(id);
  if (!Number.isInteger(meetingId) || meetingId <= 0) {
    notFound();
  }
  const meeting = await getMeetingById(meetingId);
  if (!meeting) {
    notFound();
  }
  return (
    <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <p className="text-sm font-bold uppercase tracking-wider text-slate-600">
          Admin
        </p>
        <h1 className="mt-2 text-3xl font-bold text-zinc-800">
          Edit Meeting
        </h1>
        <p className="mt-4 text-zinc-700">
          Update the sacrament meeting information below.
        </p>
        <EditMeetingForm meeting={meeting} />
      </div>
    </main>
  );
}