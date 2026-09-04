"use client";

import { SiteHeader } from "@/components/SiteHeader";
import { projects } from "@/lib/projects";
import { useInViewOnce } from "@/lib/useInViewOnce";

// Word-by-word reveal for the hero headline. The whole line assembles on load
// in ~1.17s (last word: 100ms + 5 * 90ms delay, then a 620ms settle).
//
// This is deliberately pure CSS rather than a JS-driven animation: the H1 is
// the first thing on the page, and a keyframe keeps it independent of when (or
// whether) the animation loop runs. Reduced motion drops it to a static line.
function HeadlineReveal({ text }: { text: string }) {
  const words = text.split(" ");

  return (
    <>
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="home-thought-word"
          style={{ "--word-index": index } as React.CSSProperties}
        >
          {word}
          {index < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </>
  );
}

export function HomeOpeningSequence() {
  return (
    <>
      <SiteHeader />

      <HomeIntroduction />
      <HomeProfessionalIntroduction />
      <HomeInvestigationsIntroduction />
    </>
  );
}

export function HomeIntroduction() {
  return (
    <section className="home-opening-thought">
      <div className="mx-auto flex min-h-[calc(100svh-var(--header-height))] max-w-7xl items-center px-6 pb-20 pt-10 md:px-10 md:pb-28 md:pt-14">
        <div className="max-w-5xl">
          <p className="home-thought-role mb-7 text-xs font-medium uppercase tracking-[0.16em] text-[#6B6B6B] sm:text-sm">
            Junior Creative Strategist
            <span className="mx-2 text-[#A4A49D]" aria-hidden="true">
              ·
            </span>
            Content Creator
          </p>

          <h1 className="home-thought-primary font-display text-[clamp(2.55rem,12vw,3rem)] font-medium leading-[0.98] tracking-[-0.06em] sm:text-7xl md:text-8xl">
            <HeadlineReveal text="Every person carries a different world." />
          </h1>

          <div className="mt-9 max-w-2xl">
            <p className="home-thought-supporting text-lg leading-relaxed text-[#6B6B6B] md:text-xl">
              Worlds only become visible when we slow down.
            </p>
            <p className="home-thought-invitation mt-5 text-base font-medium tracking-[0.015em] text-[#363636] md:text-lg">
              Come walk with me.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomeInvestigationsIntroduction() {
  const { ref, isVisible } = useInViewOnce<HTMLElement>();

  return (
    <section
      ref={ref}
      id="investigations"
      data-visible={isVisible}
      aria-labelledby="investigations-screen-title"
      className="home-investigations-screen scroll-mt-[var(--header-height)] border-t border-[#111111]/15"
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="section-heading-grid grid gap-10 md:grid-cols-[minmax(0,0.72fr)_minmax(0,1.8fr)]">
          <p className="home-investigations-label section-eyebrow text-xs uppercase tracking-[0.18em] text-[#6B6B6B] md:text-sm">
            Investigations
          </p>

          <div>
            <h2
              id="investigations-screen-title"
              className="home-investigations-title section-heading font-display font-medium tracking-[-0.05em]"
            >
              Questions explored through strategy, stories, images and
              experiences.
            </h2>

            <div className="home-investigations-copy mt-7 max-w-[720px] text-[clamp(1.1rem,1.7vw,1.5rem)] leading-[1.5] text-[#6B6B6B]">
              <p>
                Selected case studies in brand strategy, campaign thinking and
                visual storytelling.
              </p>
            </div>

            <div className="home-investigations-meta mt-8 flex max-w-[720px] items-center gap-3 text-xs uppercase tracking-[0.14em] text-[#6B6B6B]">
              <p>Selected work</p>
              <span aria-hidden="true">·</span>
              <p>{String(projects.length).padStart(2, "0")} case studies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomeProfessionalIntroduction() {
  const { ref, isVisible } = useInViewOnce<HTMLElement>();

  return (
    <section
      ref={ref}
      data-visible={isVisible}
      aria-labelledby="introduction-title"
      className="home-practice-screen border-t border-[#111111]/15 bg-[#FAFAF8]"
    >
      <div className="section-heading-grid mx-auto grid w-full max-w-7xl gap-10 px-6 py-20 md:grid-cols-[minmax(0,0.72fr)_minmax(0,1.8fr)] md:px-10 md:py-28">
        <p className="home-intro-label section-eyebrow text-xs uppercase tracking-[0.18em] text-[#6B6B6B] md:text-sm">
          What I do
        </p>

        <div>
          <h2
            id="introduction-title"
            className="home-intro-title section-heading font-display font-medium tracking-[-0.05em]"
          >
            I’m Adhvaid.
          </h2>

          <div className="home-intro-copy mt-7 max-w-[720px] text-[clamp(1.1rem,1.7vw,1.5rem)] leading-[1.5] text-[#6B6B6B]">
            <p>
              I turn observation into brand ideas, campaign narratives and
              content through writing, film, photography and visual
              storytelling.
            </p>
            <p className="mt-5">
              I use different mediums depending on what the idea needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
