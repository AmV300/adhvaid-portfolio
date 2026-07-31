import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 sm:py-6 md:px-10">
      <nav
        aria-label="Primary navigation"
        className="flex items-center justify-between gap-3 sm:gap-6"
      >
        <Link
          href="/"
          aria-label="Adhvaid MV home"
          className="inline-flex min-h-11 shrink-0 items-center rounded-sm py-2 text-xs font-semibold tracking-[-0.03em] outline-none focus-visible:ring-2 focus-visible:ring-[#111111] focus-visible:ring-offset-4 sm:text-sm"
        >
          AMV.
        </Link>

        <div className="site-header-links flex min-w-0 items-center gap-2.5 overflow-x-auto text-[0.72rem] text-[#6B6B6B] sm:gap-6 sm:text-sm">
          <Link href="/#investigations" className="inline-flex min-h-11 items-center whitespace-nowrap rounded-sm py-2 outline-none transition-colors hover:text-[#111111] focus-visible:ring-2 focus-visible:ring-[#111111] focus-visible:ring-offset-2">
            Investigations
          </Link>
          <Link href="/#about" className="inline-flex min-h-11 items-center whitespace-nowrap rounded-sm py-2 outline-none transition-colors hover:text-[#111111] focus-visible:ring-2 focus-visible:ring-[#111111] focus-visible:ring-offset-2">
            Observer
          </Link>
          <Link href="/#contact" className="inline-flex min-h-11 items-center whitespace-nowrap rounded-sm py-2 outline-none transition-colors hover:text-[#111111] focus-visible:ring-2 focus-visible:ring-[#111111] focus-visible:ring-offset-2">
            Conversation
          </Link>
        </div>
      </nav>
    </header>
  );
}
