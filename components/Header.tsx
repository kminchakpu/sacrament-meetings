import Link from "next/link";
import NavLinks from "./NavLinks";

export default function Header() {
  const currentDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
  }).format(new Date());

  return (
    <header className="border-b border-orange-200 bg-stone-800 shadow-sm">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <Link
            href="/"
            className="text-xl font-bold text-slate-200 sm:text-2xl"
          >
            Sacrament Meeting Planner
          </Link>

          <p className="mt-1 text-sm text-orange-200">
            {currentDate}
          </p>
        </div>

        <NavLinks />
      </div>
    </header>
  );
}