import LoginForm from "@/components/auth/LoginForm";
export const metadata = {
  title: "Login | Sacrament Meeting Planner",
  description: "Sign in to manage sacrament meeting schedules and details.",
};
export default function LoginPage() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="font-play text-3xl font-bold text-[#1D2F6F]">
            Bishopric Login
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Sign in to manage sacrament meeting schedules and details.
          </p>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}