import Link from "next/link";
import NavLinks from "./NavLinks";
import SignOutButton from "./auth/SignOutButton";
import { auth } from "@/auth";
export default async function Header() {
  const session = await auth();
  const currentDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
  }).format(new Date());
  return (
    <header className="header relative">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        <div>
          <Link
            href="/"
            className="font-play text-xl font-bold text-slate-200 sm:text-2xl"
          >
            Sacrament Meeting Planner
          </Link>
          <p className="font-play mt-1 text-sm text-orange-200">
            Karu Ward | {currentDate}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <NavLinks />
          {session?.user ? (
            <SignOutButton />
          ) : (
            <Link
              href="/login"
              className="rounded-md bg-amber-300 px-4 py-2 text-sm font-semibold text-[#1D2F6F] transition hover:bg-orange-200"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}