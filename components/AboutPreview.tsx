"use client";

import { useEffect, useRef, useState } from "react";

export function AboutPreview() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
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
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      data-visible={isVisible}
      aria-labelledby="observer-title"
      className="observer-section bg-[#F1F0EB]"
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-12 md:grid-cols-[minmax(0,0.72fr)_minmax(0,1.8fr)]">
          <p className="observer-label text-xs uppercase tracking-[0.18em] text-[#6B6B6B] md:text-sm">
            The Observer
          </p>

          <div>
            <h2
              id="observer-title"
              className="observer-title font-display max-w-4xl text-[clamp(3.25rem,6.8vw,6.6rem)] font-medium leading-[0.92] tracking-[-0.065em]"
            >
              I create to understand.
            </h2>

            <div className="observer-copy mt-10 grid max-w-4xl gap-6 text-[clamp(1.1rem,1.65vw,1.4rem)] leading-[1.55] text-[#5F5F5F] md:grid-cols-2 md:gap-10">
              <p>
                Observation often begins with something easy to miss: light
                slipping through a familiar place, a memory held by an object,
                or the pause before someone answers.
              </p>
              <p>
                Writing, photography, strategy, film and drawing are different
                ways of staying with those details until a clearer idea
                emerges.
              </p>
            </div>
          </div>
        </div>

        <div
          aria-label="Selected writing and photography"
          className="observer-fragments mt-12 flex flex-col gap-5 border-t border-[#111111]/15 pt-6 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 md:mt-16"
        >
          <p className="text-xs uppercase tracking-[0.16em] text-[#6B6B6B] sm:mr-2">
            Also making
          </p>

          <a
            href="https://www.instagram.com/my.hollow_frames/"
            target="_blank"
            rel="noreferrer"
            aria-label="View Adhvaid's photography on Instagram (Hollow Frames)"
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#111111]/25 px-4 py-2 text-sm transition-colors hover:border-[#111111] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F1F0EB]"
          >
            <span className="text-[#6B6B6B]">Photography</span>
            <span aria-hidden="true" className="text-[#6B6B6B]">→</span>
            <span className="font-medium">@hollow_frames</span>
            <span aria-hidden="true">↗</span>
          </a>

          <a
            href="https://www.instagram.com/paper_crumples/"
            target="_blank"
            rel="noreferrer"
            aria-label="Read Adhvaid's writing on Instagram (Paper Crumples)"
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#111111]/25 px-4 py-2 text-sm transition-colors hover:border-[#111111] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F1F0EB]"
          >
            <span className="text-[#6B6B6B]">Writing</span>
            <span aria-hidden="true" className="text-[#6B6B6B]">→</span>
            <span className="font-medium">@paper_crumples</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
