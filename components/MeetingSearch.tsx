"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function MeetingSearch() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);

    params.set("page", "1");

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="mt-8">
      <label
        htmlFor="meeting-search"
        className="sr-only"
      >
        Search meetings
      </label>
      <input
        id="meeting-search"
        type="search"
        placeholder="Search meetings..."
        defaultValue={searchParams.get("query")?.toString()}
        onChange={(event) => handleSearch(event.target.value)}
        aria-label="Search meetings"
        className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-zinc-800 outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-700/20"
      />
    </div>
  );
}