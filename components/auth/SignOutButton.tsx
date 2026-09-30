"use client";
import { signOut } from "next-auth/react";
export default function SignOutButton() {
  return (
    <button
      type="button"
      onClick={() => signOut({ callbackUrl: "/login" })}
      className="rounded-md bg-[#1D2F6F] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#162456]"
    >
      Sign Out
    </button>
  );
}