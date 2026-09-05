"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/meetings",
    label: "Meetings",
  },
  {
    href: "/meetings/current",
    label: "Current Meeting",
  },
];

export default function NavLinks() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const checkIsActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    if (href === "/meetings") {
      return (
        pathname === "/meetings" ||
        (
          pathname.startsWith("/meetings/") &&
          pathname !== "/meetings/current"
        )
      );
    }

    if (href === "/meetings/current") {
      return pathname === "/meetings/current";
    }

    return pathname === href;
  };

  return (
    <nav aria-label="Main navigation">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label="Toggle navigation menu"
        className="flex h-10 w-10 items-center justify-center rounded-md border border-orange-300 text-slate-200 transition hover:bg-stone-700 md:hidden"
      >
        <div className="flex flex-col gap-1.5">
          <span
            className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${
              isOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-current transition-opacity duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${
              isOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </div>
      </button>
      <ul className="hidden items-center gap-4 text-base font-medium sm:gap-6 md:flex">
        {links.map((link) => {
          const isActive = checkIsActive(link.href);

          return (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-md px-4 py-2 transition-all duration-300 ${
                  isActive
                    ? "bg-orange-300 font-semibold text-slate-950"
                    : "text-slate-200 hover:bg-stone-700 hover:text-orange-300"
                }`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
      {isOpen && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full z-50 border-t border-orange-200 bg-stone-800 shadow-lg md:hidden"
        >
          <ul className="mx-auto max-w-6xl space-y-1 px-4 py-4 sm:px-6">
            {links.map((link) => {
              const isActive = checkIsActive(link.href);

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={`block rounded-md px-4 py-3 transition-all duration-300 ${
                      isActive
                        ? "bg-orange-300 font-semibold text-slate-950"
                        : "text-slate-200 hover:bg-stone-700 hover:text-orange-300"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}