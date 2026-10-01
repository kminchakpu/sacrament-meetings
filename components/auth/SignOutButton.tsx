import { signOut } from "@/auth";
export default function SignOutButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut({ redirectTo: "/login" });
      }}
    >
      <button
        type="submit"
        className="rounded-md bg-amber-100 px-4 py-2 text-sm font-semibold text-[#1D2F6F] transition hover:bg-orange-200"
      >
        Sign Out
      </button>
    </form>
  );
}