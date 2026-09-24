"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
}

export default function Pagination({
  totalPages,
  currentPage,
}: PaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function createPageURL(pageNumber: number) {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());

    return `${pathname}?${params.toString()}`;
  }

  if (totalPages <= 1) {
    return null;
  }

  return (
    <nav
      className="mt-10 flex items-center justify-center gap-4"
      aria-label="Meetings pagination"
    >
      {currentPage > 1 ? (
        <Link
          href={createPageURL(currentPage - 1)}
          className="rounded-lg border border-slate-300 bg-white px-4 py-2 font-medium text-slate-700 transition hover:bg-slate-100"
        >
          Previous
        </Link>
      ) : (
        <span
          className="cursor-not-allowed rounded-lg border border-slate-200 bg-slate-100 px-4 py-2 font-medium text-slate-400"
          aria-disabled="true"
        >
          Previous
        </span>
      )}

      <span className="text-sm font-medium text-slate-700">
        Page {currentPage} of {totalPages}
      </span>

      {currentPage < totalPages ? (
        <Link
          href={createPageURL(currentPage + 1)}
          className="rounded-lg border border-slate-300 bg-white px-4 py-2 font-medium text-slate-700 transition hover:bg-slate-100"
        >
          Next
        </Link>
      ) : (
        <span
          className="cursor-not-allowed rounded-lg border border-slate-200 bg-slate-100 px-4 py-2 font-medium text-slate-400"
          aria-disabled="true"
        >
          Next
        </span>
      )}
    </nav>
  );
}