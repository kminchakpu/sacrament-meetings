import type { Metadata } from "next";
import MeetingDetail from "@/components/MeetingDetail";
import { getMeetingById } from "@/lib/meetings-db";
import { notFound } from "next/navigation";

interface MeetingPageProps {
  params: Promise<{
    id: string;
  }>;
}

async function getMeeting(id: string) {
  const meetingId = Number(id);

  if (!Number.isInteger(meetingId) || meetingId <= 0) {
    return null;
  }

  return getMeetingById(meetingId);
}

export async function generateMetadata({
  params,
}: MeetingPageProps): Promise<Metadata> {
  const { id } = await params;
  const meeting = await getMeeting(id);

  if (!meeting) {
    return {
      title: "Meeting Not Found",
      description: "The requested sacrament meeting could not be found.",
    };
  }

  return {
    title: `Sacrament Meeting - ${meeting.date}`,
    description: `View the sacrament meeting program for ${meeting.date}, including hymns, prayers, announcements, speakers, ward business, and musical numbers.`,
  };
}

export default async function MeetingPage({
  params,
}: MeetingPageProps) {
  const { id } = await params;
  const meeting = await getMeeting(id);

  if (!meeting) {
    notFound();
  }

  return <MeetingDetail meeting={meeting} />;
}