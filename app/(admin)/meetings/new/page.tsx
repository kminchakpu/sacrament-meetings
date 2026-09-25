import type { Metadata } from "next";
import MeetingForm from "@/components/MeetingForm";
export const metadata: Metadata = {
  title: "Create Meeting",
  description: "Create a new sacrament meeting program.",
};
export default function NewMeetingPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <p className="text-sm font-bold uppercase tracking-wider text-slate-600">
          Admin
        </p>
        <h1 className="mt-2 text-3xl font-bold text-zinc-800">
          Create Meeting
        </h1>
        <p className="mt-4 text-zinc-700">
          Enter the sacrament meeting information below.
        </p>
        <MeetingForm />
      </div>
    </main>
  );
}