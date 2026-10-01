"use client";
import Link from "next/link";
import { useActionState } from "react";
import {
  updateMeeting,
  type State,
} from "@/lib/actions";
import type { SacramentMeeting } from "@/lib/types";
interface EditMeetingFormProps {
  meeting: SacramentMeeting;
}
const initialState: State = {
  message: null,
  errors: {},
};
export default function EditMeetingForm({
  meeting,
}: EditMeetingFormProps) {
  const updateMeetingWithId = updateMeeting.bind(
    null,
    meeting.id
  );
  const [state, formAction, isPending] = useActionState(
    updateMeetingWithId,
    initialState
  );
  return (
    <form action={formAction} className="mt-8 space-y-8">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="date"
            className="mb-2 block font-medium text-zinc-800"
          >
            Meeting Date
          </label>
          <input
            id="date"
            name="date"
            type="date"
            defaultValue={meeting.date}
            aria-describedby="date-error"
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-zinc-800 outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-700/20"
          />
          <div
            id="date-error"
            aria-live="polite"
            className="mt-2 text-sm text-red-700"
          >
            {state.errors?.date?.map((error) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        </div>
        <div>
          <label
            htmlFor="meetingType"
            className="mb-2 block font-medium text-zinc-800"
          >
            Meeting Type
          </label>
          <select
            id="meetingType"
            name="meetingType"
            defaultValue={meeting.meetingType}
            aria-describedby="meetingType-error"
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-zinc-800 outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-700/20"
          >
            <option value="testimony">Testimony</option>
            <option value="regular">Regular</option>
            <option value="stake">Stake</option>
            <option value="general">General</option>
            <option value="special">Special</option>
          </select>
          <div
            id="meetingType-error"
            aria-live="polite"
            className="mt-2 text-sm text-red-700"
          >
            {state.errors?.meetingType?.map((error) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        </div>
        <div>
          <label
            htmlFor="presiding"
            className="mb-2 block font-medium text-zinc-800"
          >
            Presiding
          </label>
          <input
            id="presiding"
            name="presiding"
            type="text"
            defaultValue={meeting.presiding}
            aria-describedby="presiding-error"
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-zinc-800 outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-700/20"
          />
          <div
            id="presiding-error"
            aria-live="polite"
            className="mt-2 text-sm text-red-700"
          >
            {state.errors?.presiding?.map((error) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        </div>
        <div>
          <label
            htmlFor="conducting"
            className="mb-2 block font-medium text-zinc-800"
          >
            Conducting
          </label>
          <input
            id="conducting"
            name="conducting"
            type="text"
            defaultValue={meeting.conducting}
            aria-describedby="conducting-error"
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-zinc-800 outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-700/20"
          />
          <div
            id="conducting-error"
            aria-live="polite"
            className="mt-2 text-sm text-red-700"
          >
            {state.errors?.conducting?.map((error) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        </div>
      </div>
      <fieldset className="rounded-xl border border-slate-200 p-5">
        <legend className="px-2 text-lg font-bold text-zinc-800">
          Opening
        </legend>
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="openingHymnNumber"
              className="mb-2 block font-medium text-zinc-800"
            >
              Opening Hymn Number
            </label>
            <input
              id="openingHymnNumber"
              name="openingHymnNumber"
              type="number"
              min="1"
              defaultValue={meeting.openingHymn.number}
              aria-describedby="openingHymnNumber-error"
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-zinc-800 outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-700/20"
            />
            <div
              id="openingHymnNumber-error"
              aria-live="polite"
              className="mt-2 text-sm text-red-700"
            >
              {state.errors?.openingHymnNumber?.map((error) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          </div>
          <div>
            <label
              htmlFor="openingHymnTitle"
              className="mb-2 block font-medium text-zinc-800"
            >
              Opening Hymn Title
            </label>
            <input
              id="openingHymnTitle"
              name="openingHymnTitle"
              type="text"
              defaultValue={meeting.openingHymn.title}
              aria-describedby="openingHymnTitle-error"
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-zinc-800 outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-700/20"
            />
            <div
              id="openingHymnTitle-error"
              aria-live="polite"
              className="mt-2 text-sm text-red-700"
            >
              {state.errors?.openingHymnTitle?.map((error) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="openingPrayer"
              className="mb-2 block font-medium text-zinc-800"
            >
              Opening Prayer
            </label>
            <input
              id="openingPrayer"
              name="openingPrayer"
              type="text"
              defaultValue={meeting.openingPrayer}
              aria-describedby="openingPrayer-error"
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-zinc-800 outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-700/20"
            />
            <div
              id="openingPrayer-error"
              aria-live="polite"
              className="mt-2 text-sm text-red-700"
            >
              {state.errors?.openingPrayer?.map((error) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          </div>
        </div>
      </fieldset>
      <fieldset className="rounded-xl border border-slate-200 p-5">
        <legend className="px-2 text-lg font-bold text-zinc-800">
          Sacrament
        </legend>
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="sacramentHymnNumber"
              className="mb-2 block font-medium text-zinc-800"
            >
              Sacrament Hymn Number
            </label>
            <input
              id="sacramentHymnNumber"
              name="sacramentHymnNumber"
              type="number"
              min="1"
              defaultValue={meeting.sacramentHymn.number}
              aria-describedby="sacramentHymnNumber-error"
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-zinc-800 outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-700/20"
            />
            <div
              id="sacramentHymnNumber-error"
              aria-live="polite"
              className="mt-2 text-sm text-red-700"
            >
              {state.errors?.sacramentHymnNumber?.map((error) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          </div>
          <div>
            <label
              htmlFor="sacramentHymnTitle"
              className="mb-2 block font-medium text-zinc-800"
            >
              Sacrament Hymn Title
            </label>
            <input
              id="sacramentHymnTitle"
              name="sacramentHymnTitle"
              type="text"
              defaultValue={meeting.sacramentHymn.title}
              aria-describedby="sacramentHymnTitle-error"
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-zinc-800 outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-700/20"
            />
            <div
              id="sacramentHymnTitle-error"
              aria-live="polite"
              className="mt-2 text-sm text-red-700"
            >
              {state.errors?.sacramentHymnTitle?.map((error) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          </div>
        </div>
      </fieldset>
      <fieldset className="rounded-xl border border-slate-200 p-5">
        <legend className="px-2 text-lg font-bold text-zinc-800">
          Closing
        </legend>
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="closingHymnNumber"
              className="mb-2 block font-medium text-zinc-800"
            >
              Closing Hymn Number
            </label>
            <input
              id="closingHymnNumber"
              name="closingHymnNumber"
              type="number"
              min="1"
              defaultValue={meeting.closingHymn.number}
              aria-describedby="closingHymnNumber-error"
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-zinc-800 outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-700/20"
            />
            <div
              id="closingHymnNumber-error"
              aria-live="polite"
              className="mt-2 text-sm text-red-700"
            >
              {state.errors?.closingHymnNumber?.map((error) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          </div>
          <div>
            <label
              htmlFor="closingHymnTitle"
              className="mb-2 block font-medium text-zinc-800"
            >
              Closing Hymn Title
            </label>
            <input
              id="closingHymnTitle"
              name="closingHymnTitle"
              type="text"
              defaultValue={meeting.closingHymn.title}
              aria-describedby="closingHymnTitle-error"
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-zinc-800 outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-700/20"
            />
            <div
              id="closingHymnTitle-error"
              aria-live="polite"
              className="mt-2 text-sm text-red-700"
            >
              {state.errors?.closingHymnTitle?.map((error) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="closingPrayer"
              className="mb-2 block font-medium text-zinc-800"
            >
              Closing Prayer
            </label>
            <input
              id="closingPrayer"
              name="closingPrayer"
              type="text"
              defaultValue={meeting.closingPrayer}
              aria-describedby="closingPrayer-error"
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-zinc-800 outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-700/20"
            />
            <div
              id="closingPrayer-error"
              aria-live="polite"
              className="mt-2 text-sm text-red-700"
            >
              {state.errors?.closingPrayer?.map((error) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          </div>
        </div>
      </fieldset>
      {state.message && (
        <div
          aria-live="polite"
          className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700"
        >
          {state.message}
        </div>
      )}
      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={isPending}
          className="rounded-lg bg-blue-800 px-6 py-3 font-semibold text-white transition hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isPending ? "Saving..." : "Save Changes"}
        </button>
        <Link
          href={`/meetings/${meeting.id}`}
          className="rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2"
        >
          Cancel
        </Link>
      </div>
    </form>
  );
}