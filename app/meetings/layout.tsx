import Link from "next/link";

export default function MeetingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <div className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-6xl flex-wrap gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link
            href="/meetings"
            className="font-medium text-slate-700 hover:text-blue-700"
          >
            All Meetings
          </Link>

          <Link
            href="/meetings/current"
            className="font-medium text-slate-700 hover:text-blue-700"
          >
            Current Sunday
          </Link>
        </div>
      </div>

      {children}
    </section>
  );
}