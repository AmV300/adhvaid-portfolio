"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function SiteHeader() {
  // The header is sticky for the whole page, so it needs a ground of its own
  // once content starts passing underneath it. At the very top it stays
  // transparent, which keeps the opening screen looking untouched.
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const update = () => setIsScrolled(window.scrollY > 8);

    update();
    window.addEventListener("scroll", update, { passive: true });

    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header data-scrolled={isScrolled} className="site-header">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:gap-6 sm:px-6 sm:py-6 md:px-10"
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
