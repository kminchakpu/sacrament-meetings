"use server";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {
  addMeeting,
  updateMeeting as updateMeetingInDatabase,
  deleteMeeting as deleteMeetingFromDatabase,
} from "@/lib/meetings-db";

export type State = {
  errors?: {
    date?: string[];
    meetingType?: string[];
    presiding?: string[];
    conducting?: string[];
    openingHymnNumber?: string[];
    openingHymnTitle?: string[];
    openingPrayer?: string[];
    sacramentHymnNumber?: string[];
    sacramentHymnTitle?: string[];
    closingHymnNumber?: string[];
    closingHymnTitle?: string[];
    closingPrayer?: string[];
  };
  message?: string | null;
};

const MeetingFormSchema = z.object({
  date: z.string().min(1, "Meeting date is required."),
  meetingType: z.enum(
    ["testimony", "regular", "stake", "general", "special"],
    {
      message: "Meeting type is required.",
    }
  ),
  presiding: z
    .string()
    .trim()
    .min(1, "Presiding leader is required."),
  conducting: z
    .string()
    .trim()
    .min(1, "Conducting leader is required."),
  openingHymnNumber: z.coerce
    .number()
    .int("Opening hymn number must be a whole number.")
    .positive("Opening hymn number must be greater than 0."),
  openingHymnTitle: z
    .string()
    .trim()
    .min(1, "Opening hymn title is required."),
  openingPrayer: z
    .string()
    .trim()
    .min(1, "Opening prayer is required."),
  sacramentHymnNumber: z.coerce
    .number()
    .int("Sacrament hymn number must be a whole number.")
    .positive("Sacrament hymn number must be greater than 0."),
  sacramentHymnTitle: z
    .string()
    .trim()
    .min(1, "Sacrament hymn title is required."),
  closingHymnNumber: z.coerce
    .number()
    .int("Closing hymn number must be a whole number.")
    .positive("Closing hymn number must be greater than 0."),
  closingHymnTitle: z
    .string()
    .trim()
    .min(1, "Closing hymn title is required."),
  closingPrayer: z
    .string()
    .trim()
    .min(1, "Closing prayer is required."),
});

export async function createMeeting(
  _prevState: State,
  formData: FormData
): Promise<State> {
  const validatedFields = MeetingFormSchema.safeParse({
    date: formData.get("date"),
    meetingType: formData.get("meetingType"),
    presiding: formData.get("presiding"),
    conducting: formData.get("conducting"),
    openingHymnNumber: formData.get("openingHymnNumber"),
    openingHymnTitle: formData.get("openingHymnTitle"),
    openingPrayer: formData.get("openingPrayer"),
    sacramentHymnNumber: formData.get("sacramentHymnNumber"),
    sacramentHymnTitle: formData.get("sacramentHymnTitle"),
    closingHymnNumber: formData.get("closingHymnNumber"),
    closingHymnTitle: formData.get("closingHymnTitle"),
    closingPrayer: formData.get("closingPrayer"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please correct the errors below.",
    };
  }

  const data = validatedFields.data;

  try {
    await addMeeting({
      date: data.date,
      meetingType: data.meetingType,
      presiding: data.presiding,
      conducting: data.conducting,
      announcements: [],
      openingHymn: {
        number: data.openingHymnNumber,
        title: data.openingHymnTitle,
      },
      openingPrayer: data.openingPrayer,
      wardBusiness: [],
      stakeBusiness: false,
      sacramentHymn: {
        number: data.sacramentHymnNumber,
        title: data.sacramentHymnTitle,
      },
      speakers: [],
      closingHymn: {
        number: data.closingHymnNumber,
        title: data.closingHymnTitle,
      },
      closingPrayer: data.closingPrayer,
    });
  } catch (error) {
    console.error("Failed to create meeting:", error);
    throw new Error(
      "Unable to create the meeting. Please try again."
    );
  }

  revalidatePath("/meetings");
  redirect("/meetings");
}

export async function updateMeeting(
  id: number,
  _prevState: State,
  formData: FormData
): Promise<State> {
  const validatedFields = MeetingFormSchema.safeParse({
    date: formData.get("date"),
    meetingType: formData.get("meetingType"),
    presiding: formData.get("presiding"),
    conducting: formData.get("conducting"),
    openingHymnNumber: formData.get("openingHymnNumber"),
    openingHymnTitle: formData.get("openingHymnTitle"),
    openingPrayer: formData.get("openingPrayer"),
    sacramentHymnNumber: formData.get("sacramentHymnNumber"),
    sacramentHymnTitle: formData.get("sacramentHymnTitle"),
    closingHymnNumber: formData.get("closingHymnNumber"),
    closingHymnTitle: formData.get("closingHymnTitle"),
    closingPrayer: formData.get("closingPrayer"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please correct the errors below.",
    };
  }

  const data = validatedFields.data;

  try {
    const meeting = await updateMeetingInDatabase(id, {
      date: data.date,
      meetingType: data.meetingType,
      presiding: data.presiding,
      conducting: data.conducting,
      openingHymn: {
        number: data.openingHymnNumber,
        title: data.openingHymnTitle,
      },
      openingPrayer: data.openingPrayer,
      sacramentHymn: {
        number: data.sacramentHymnNumber,
        title: data.sacramentHymnTitle,
      },
      closingHymn: {
        number: data.closingHymnNumber,
        title: data.closingHymnTitle,
      },
      closingPrayer: data.closingPrayer,
    });

    if (!meeting) {
      throw new Error("Meeting not found.");
    }
  } catch (error) {
    console.error("Failed to update meeting:", error);
    throw new Error(
      "Unable to update the meeting. Please try again."
    );
  }

  revalidatePath("/meetings");
  revalidatePath(`/meetings/${id}`);
  redirect("/meetings");
}

export async function deleteMeeting(id: number): Promise<void> {
  try {
    const deleted = await deleteMeetingFromDatabase(id);

    if (!deleted) {
      throw new Error("Meeting not found.");
    }
  } catch (error) {
    console.error("Failed to delete meeting:", error);
    throw new Error(
      "Unable to delete the meeting. Please try again."
    );
  }

  revalidatePath("/meetings");
}