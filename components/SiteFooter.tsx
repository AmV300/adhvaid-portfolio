"use client";

import { useEffect, useRef, useState } from "react";

export function SiteFooter() {
  const footerRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const footer = footerRef.current;

    if (!footer) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      id="contact"
      data-visible={isVisible}
      className="conversation-section flex min-h-[88svh] flex-col bg-[#191917] text-[#F5F4EF]"
    >
      <div className="section-heading-grid mx-auto grid w-full max-w-7xl flex-1 content-center gap-12 px-6 py-24 md:grid-cols-[minmax(0,0.72fr)_minmax(0,1.8fr)] md:px-10 md:py-32">
        <p className="conversation-label section-eyebrow text-xs uppercase tracking-[0.18em] text-[#AAA9A3] md:text-sm">
          Conversation
        </p>

        <div>
          <h2 className="conversation-title section-heading font-display max-w-4xl font-medium tracking-[-0.06em]">
            If something here made you curious, let&apos;s talk.
          </h2>

          <p className="conversation-copy mt-9 max-w-2xl text-lg leading-relaxed text-[#BDBCB5] md:text-xl">
            For strategy roles, creative collaborations, or a thoughtful
            conversation.
          </p>

          <div className="conversation-links mt-12 flex flex-col items-start gap-5 text-base md:flex-row md:flex-wrap md:gap-x-10">
            <a
              href="mailto:adhvaidmv@gmail.com"
              className="group inline-flex min-h-11 items-center gap-3 border-b border-[#F5F4EF]/50 py-2 transition-colors hover:border-[#F5F4EF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5F4EF] focus-visible:ring-offset-4 focus-visible:ring-offset-[#191917]"
            >
              adhvaidmv@gmail.com
              <span
                aria-hidden="true"
                className="transition-transform duration-300 ease-out group-hover:translate-x-1"
              >
                →
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/adhvaid-mv/"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex min-h-11 items-center gap-3 border-b border-[#F5F4EF]/50 py-2 transition-colors hover:border-[#F5F4EF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5F4EF] focus-visible:ring-offset-4 focus-visible:ring-offset-[#191917]"
            >
              LinkedIn
              <span
                aria-hidden="true"
                className="transition-transform duration-300 ease-out group-hover:translate-x-1"
              >
                ↗
              </span>
            </a>

            <a
              href="/documents/adhvaid-mv-resume.pdf"
              download
              className="group inline-flex min-h-11 items-center gap-3 border-b border-[#F5F4EF]/50 py-2 transition-colors hover:border-[#F5F4EF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5F4EF] focus-visible:ring-offset-4 focus-visible:ring-offset-[#191917]"
            >
              Download CV
              <span
                aria-hidden="true"
                className="transition-transform duration-300 ease-out group-hover:translate-y-0.5"
              >
                ↓
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 border-t border-[#F5F4EF]/15 px-6 py-7 text-xs text-[#92918B] sm:flex-row sm:items-center sm:justify-between md:px-10">
        <p>May you leave noticing a little more than when you arrived.</p>
        <p>© 2026 Adhvaid MV</p>
      </div>
    </footer>
  );
}
