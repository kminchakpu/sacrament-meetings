import Link from "next/link";
import NavLinks from "./NavLinks";

export default function Header() {
  const currentDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
  }).format(new Date());

  return (
    <header className="relative border-b border-orange-200 bg-stone-800 shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        <div>
          <Link
            href="/"
            className="font-play text-xl font-bold text-slate-200 sm:text-2xl"
          >
            Sacrament Meeting Planner
          </Link>
          <p className="font-play mt-1 text-sm text-orange-200">
            {currentDate}
          </p>
        </div>
        <NavLinks />
      </div>
    </header>
  );
}