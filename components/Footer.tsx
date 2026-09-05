export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-stone-800">
      <div className="font-play mx-auto max-w-6xl px-4 py-8 text-center text-sm text-slate-200 sm:px-6 lg:px-8">
        <p>
          Sacrament Meeting Planner | Designed & Developed by{" "}
          <a
            href="https://kevinminchakpu.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-1 underline-offset-4 transition-colors hover:text-orange-300"
          >
            Kevin Cross Minchakpu
          </a>{" "}
          | WDD 430
        </p>
        <p className="mt-2">
          Meeting information for members and leaders.
        </p>
      </div>
    </footer>
  );
}