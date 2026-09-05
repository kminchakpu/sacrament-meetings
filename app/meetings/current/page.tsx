// app/meetings/current/page.tsx

import MeetingDetail from "@/components/MeetingDetail";
import { getMeetings } from "@/lib/meetings-db";
import type { SacramentMeeting } from "@/lib/types";
import { redirect } from "next/navigation";

function getMostRecentSunday(): string {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const sunday = new Date(today);
  sunday.setDate(today.getDate() - dayOfWeek);
  return sunday.toISOString().split("T")[0];
}

export default function CurrentMeetingPage() {
  const sunday = getMostRecentSunday();
  const meetings = getMeetings(sunday);

  if (meetings.length === 0) {
    redirect("/meetings");
  }

  const currentMeeting: SacramentMeeting = meetings[0];

  return <MeetingDetail meeting={currentMeeting} />;
}