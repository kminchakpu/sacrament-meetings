import type { SacramentMeeting } from "@/lib/types";

interface MeetingDetailProps {
  meeting: SacramentMeeting;
}

export default function MeetingDetail({
  meeting,
}: MeetingDetailProps) {
  return (
    <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <header className="border-b border-slate-200 pb-6">
        <p className="text-sm font-semibold uppercase tracking-wider text-orange-300">
          Sacrament Meeting
        </p>

        <h1 className="mt-2 text-3xl font-bold text-slate-200 sm:text-4xl">
          {new Date(`${meeting.date}T00:00:00`).toLocaleDateString(
            "en-US",
            {
              dateStyle: "long",
            }
          )}
        </h1>

        <div className="mt-4 grid gap-2 text-sm text-slate-200 sm:grid-cols-2">
          <p>
            <strong>Meeting Type:</strong>{" "}
            <span className="capitalize">
              {meeting.meetingType}
            </span>
          </p>

          <p>
            <strong>Presiding:</strong> {meeting.presiding}
          </p>

          <p>
            <strong>Conducting:</strong> {meeting.conducting}
          </p>
        </div>
      </header>

      <div className="mt-8 space-y-8">
        {meeting.announcements &&
          meeting.announcements.length > 0 && (
            <section>
              <h2 className="text-xl font-bold text-slate-200">
                Announcements
              </h2>

              <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-200">
                {meeting.announcements.map((announcement) => (
                  <li key={announcement}>{announcement}</li>
                ))}
              </ul>
            </section>
          )}

        <section>
          <h2 className="text-xl font-bold text-slate-200">
            Opening
          </h2>

          <div className="mt-3 space-y-2 text-slate-200">
            <p>
              <strong>Opening Hymn:</strong>{" "}
              {meeting.openingHymn.number} —{" "}
              {meeting.openingHymn.title}
            </p>

            <p>
              <strong>Opening Prayer:</strong>{" "}
              {meeting.openingPrayer}
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-200">
            Ward Business
          </h2>

          {meeting.wardBusiness.length > 0 ? (
            <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-200">
              {meeting.wardBusiness.map((item) => (
                <li key={item.description}>
                  {item.description}
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-3 text-slate-200">
              No ward business scheduled.
            </p>
          )}

          <p className="mt-4 text-slate-200">
            <strong>Stake Business:</strong>{" "}
            {meeting.stakeBusiness ? "Yes" : "No"}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-200">
            Sacrament
          </h2>

          <p className="mt-3 text-slate-200">
            <strong>Hymn:</strong>{" "}
            {meeting.sacramentHymn.number} —{" "}
            {meeting.sacramentHymn.title}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-200">
            Speakers and Musical Numbers
          </h2>

          <div className="mt-4 space-y-4">
            {meeting.speakers.map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="rounded-lg bg-slate-50 p-4"
              >
                <p className="font-semibold text-slate-900">
                  {item.name}
                </p>

                <p className="mt-1 text-sm capitalize text-blue-700">
                  {item.type.replace("-", " ")}
                </p>

                {item.topic && (
                  <p className="mt-2 text-slate-600">
                    {item.topic}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-200">
            Closing
          </h2>

          <div className="mt-3 space-y-2 text-slate-200">
            <p>
              <strong>Closing Hymn:</strong>{" "}
              {meeting.closingHymn.number} —{" "}
              {meeting.closingHymn.title}
            </p>

            <p>
              <strong>Closing Prayer:</strong>{" "}
              {meeting.closingPrayer}
            </p>
          </div>
        </section>
      </div>
    </article>
  );
}