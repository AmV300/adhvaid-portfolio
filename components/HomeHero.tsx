"use client";

import { SiteHeader } from "@/components/SiteHeader";
import { useScrollChapterKeys } from "@/lib/useScrollChapterKeys";
import { useEffect, useRef } from "react";

function clamp(value: number) {
  return Math.min(1, Math.max(0, value));
}

function scrollEase(start: number, end: number, value: number) {
  const progress = clamp((value - start) / (end - start));
  return progress * progress * (3 - 2 * progress);
}

export function HomeOpeningSequence() {
  const sequenceRef = useRef<HTMLDivElement>(null);

  useScrollChapterKeys(sequenceRef, { chapters: 4, exitOffsetVh: 0.28 });

  useEffect(() => {
    const sequence = sequenceRef.current;

    if (!sequence) {
      return;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let animationFrame = 0;
    let activeChapter = "";

    const updateSequence = () => {
      animationFrame = 0;

      const bounds = sequence.getBoundingClientRect();
      const progress = Math.min(
        3,
        Math.max(0, -bounds.top / window.innerHeight),
      );

      if (reducedMotion) {
        const thoughtIsActive = progress < 0.55;
        const introductionIsActive = progress >= 0.55 && progress < 1.55;
        const nextActiveChapter =
          thoughtIsActive
            ? "thought"
            : introductionIsActive
              ? "introduction"
              : "investigations";
        sequence.style.setProperty(
          "--thought-main-opacity",
          thoughtIsActive ? "1" : "0",
        );
        sequence.style.setProperty(
          "--thought-support-opacity",
          thoughtIsActive ? "1" : "0",
        );
        sequence.style.setProperty(
          "--thought-invitation-opacity",
          thoughtIsActive ? "1" : "0",
        );
        sequence.style.setProperty("--thought-main-y", "0px");
        sequence.style.setProperty("--thought-support-y", "0px");
        sequence.style.setProperty("--thought-invitation-y", "0px");
        sequence.style.setProperty(
          "--practice-screen-opacity",
          introductionIsActive ? "1" : "0",
        );
        sequence.style.setProperty("--practice-screen-y", "0px");
        sequence.style.setProperty(
          "--intro-label-opacity",
          introductionIsActive ? "1" : "0",
        );
        sequence.style.setProperty(
          "--intro-title-opacity",
          introductionIsActive ? "1" : "0",
        );
        sequence.style.setProperty(
          "--intro-copy-opacity",
          introductionIsActive ? "1" : "0",
        );
        sequence.style.setProperty("--intro-label-y", "0px");
        sequence.style.setProperty("--intro-title-y", "0px");
        sequence.style.setProperty("--intro-copy-y", "0px");
        sequence.style.setProperty(
          "--investigations-screen-opacity",
          nextActiveChapter === "investigations" ? "1" : "0",
        );
        sequence.style.setProperty("--investigations-screen-y", "0px");
        sequence.style.setProperty(
          "--investigations-label-opacity",
          nextActiveChapter === "investigations" ? "1" : "0",
        );
        sequence.style.setProperty(
          "--investigations-title-opacity",
          nextActiveChapter === "investigations" ? "1" : "0",
        );
        sequence.style.setProperty(
          "--investigations-copy-opacity",
          progress >= 2.35 ? "1" : "0",
        );
        sequence.style.setProperty(
          "--investigations-meta-opacity",
          progress >= 2.35 ? "1" : "0",
        );
        sequence.style.setProperty("--investigations-label-y", "0px");
        sequence.style.setProperty("--investigations-title-y", "0px");
        sequence.style.setProperty("--investigations-copy-y", "0px");
        sequence.style.setProperty("--investigations-meta-y", "0px");

        if (nextActiveChapter !== activeChapter) {
          activeChapter = nextActiveChapter;
          sequence.dataset.activeChapter = activeChapter;
        }

        return;
      }

      const thoughtExit = scrollEase(0.28, 0.74, progress);
      const mainEntrance = 1;
      const supportEntrance = 1;
      const invitationEntrance = 1;
      const practiceEntrance = scrollEase(0.28, 0.46, progress);
      const introLabelEntrance = scrollEase(0.34, 0.54, progress);
      const introTitleEntrance = scrollEase(0.44, 0.68, progress);
      const introCopyEntrance = scrollEase(0.56, 0.82, progress);
      const introductionExit = scrollEase(1.28, 1.74, progress);
      const investigationsEntrance = scrollEase(1.28, 1.46, progress);
      const investigationsLabelEntrance = scrollEase(1.34, 1.54, progress);
      const investigationsTitleEntrance = scrollEase(1.44, 1.68, progress);
      const investigationsCopyEntrance = scrollEase(2.08, 2.5, progress);
      const investigationsMetaEntrance = scrollEase(2.2, 2.62, progress);
      const nextActiveChapter =
        progress < 0.55
          ? "thought"
          : progress < 1.55
            ? "introduction"
            : "investigations";
      sequence.style.setProperty(
        "--thought-main-opacity",
        String(mainEntrance * (1 - thoughtExit)),
      );
      sequence.style.setProperty(
        "--thought-support-opacity",
        String(supportEntrance * (1 - thoughtExit)),
      );
      sequence.style.setProperty(
        "--thought-invitation-opacity",
        String(invitationEntrance * (1 - thoughtExit)),
      );
      sequence.style.setProperty(
        "--thought-main-y",
        `${12 * (1 - mainEntrance) - 8 * thoughtExit}px`,
      );
      sequence.style.setProperty(
        "--thought-support-y",
        `${10 * (1 - supportEntrance) - 7 * thoughtExit}px`,
      );
      sequence.style.setProperty(
        "--thought-invitation-y",
        `${8 * (1 - invitationEntrance) - 6 * thoughtExit}px`,
      );
      sequence.style.setProperty(
        "--practice-screen-opacity",
        String(practiceEntrance * (1 - introductionExit)),
      );
      sequence.style.setProperty(
        "--practice-screen-y",
        `${8 * (1 - practiceEntrance) - 6 * introductionExit}px`,
      );
      sequence.style.setProperty(
        "--intro-label-opacity",
        String(introLabelEntrance * (1 - introductionExit)),
      );
      sequence.style.setProperty(
        "--intro-title-opacity",
        String(introTitleEntrance * (1 - introductionExit)),
      );
      sequence.style.setProperty(
        "--intro-copy-opacity",
        String(introCopyEntrance * (1 - introductionExit)),
      );
      sequence.style.setProperty(
        "--intro-label-y",
        `${8 * (1 - introLabelEntrance) - 6 * introductionExit}px`,
      );
      sequence.style.setProperty(
        "--intro-title-y",
        `${10 * (1 - introTitleEntrance) - 6 * introductionExit}px`,
      );
      sequence.style.setProperty(
        "--intro-copy-y",
        `${10 * (1 - introCopyEntrance) - 6 * introductionExit}px`,
      );
      sequence.style.setProperty(
        "--investigations-screen-opacity",
        String(investigationsEntrance),
      );
      sequence.style.setProperty(
        "--investigations-screen-y",
        `${8 * (1 - investigationsEntrance)}px`,
      );
      sequence.style.setProperty(
        "--investigations-label-opacity",
        String(investigationsLabelEntrance),
      );
      sequence.style.setProperty(
        "--investigations-title-opacity",
        String(investigationsTitleEntrance),
      );
      sequence.style.setProperty(
        "--investigations-copy-opacity",
        String(investigationsCopyEntrance),
      );
      sequence.style.setProperty(
        "--investigations-meta-opacity",
        String(investigationsMetaEntrance),
      );
      sequence.style.setProperty(
        "--investigations-label-y",
        `${8 * (1 - investigationsLabelEntrance)}px`,
      );
      sequence.style.setProperty(
        "--investigations-title-y",
        `${10 * (1 - investigationsTitleEntrance)}px`,
      );
      sequence.style.setProperty(
        "--investigations-copy-y",
        `${10 * (1 - investigationsCopyEntrance)}px`,
      );
      sequence.style.setProperty(
        "--investigations-meta-y",
        `${8 * (1 - investigationsMetaEntrance)}px`,
      );

      if (nextActiveChapter !== activeChapter) {
        activeChapter = nextActiveChapter;
        sequence.dataset.activeChapter = activeChapter;
      }
    };

    const requestUpdate = () => {
      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(updateSequence);
      }
    };

    updateSequence();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);

      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <div
      ref={sequenceRef}
      className="home-opening-sequence"
      data-active-chapter="thought"
    >
      <div className="home-opening-stage">
        <HomeIntroduction />
        <div className="home-practice-screen">
          <SiteHeader />
          <HomeProfessionalIntroduction />
        </div>
        <div className="home-investigations-screen">
          <SiteHeader />
          <HomeInvestigationsIntroduction />
        </div>
      </div>

      <div className="home-opening-track" aria-hidden="true">
        <div data-home-chapter="thought" className="home-chapter-stop" />
        <div
          data-home-chapter="introduction"
          className="home-chapter-stop"
        />
        <div
          id="investigations"
          data-home-chapter="investigations"
          className="home-chapter-stop"
        />
        <div
          data-home-chapter="investigations-work"
          className="home-chapter-stop"
        />
      </div>
    </div>
  );
}

export function HomeIntroduction() {
  return (
    <section className="home-opening-thought">
      <div className="mx-auto flex min-h-[100svh] max-w-7xl items-center px-6 py-20 md:px-10 md:py-28">
        <div className="max-w-5xl">
          <p className="home-thought-role mb-7 text-xs font-medium uppercase tracking-[0.16em] text-[#6B6B6B] sm:text-sm">
            Junior Creative Strategist
            <span className="mx-2 text-[#A4A49D]" aria-hidden="true">
              ·
            </span>
            Content Creator
          </p>

          <h1 className="home-thought-primary font-display text-[clamp(2.55rem,12vw,3rem)] font-medium leading-[0.98] tracking-[-0.06em] sm:text-7xl md:text-8xl">
            Every person carries a different world.
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
  return (
    <section
      aria-labelledby="investigations-screen-title"
      className="flex min-h-[78svh] items-center border-t border-[#111111]/15"
    >
      <div className="mx-auto flex min-h-[78svh] w-full max-w-7xl flex-col justify-center px-6 py-14 md:px-10 md:py-16">
        <div className="grid items-center gap-10 md:grid-cols-[minmax(0,0.72fr)_minmax(0,1.8fr)]">
          <p className="home-investigations-label text-xs uppercase tracking-[0.18em] text-[#6B6B6B] md:text-sm">
            Investigations
          </p>

          <div>
            <h2
              id="investigations-screen-title"
              className="home-investigations-title font-display text-[clamp(2.25rem,4vw,3.625rem)] font-medium leading-[1.02] tracking-[-0.05em]"
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
              <p>02 case studies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomeProfessionalIntroduction() {
  return (
    <section
      aria-labelledby="introduction-title"
      className="flex min-h-[78svh] items-center border-t border-[#111111]/15"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-14 md:grid-cols-[minmax(0,0.72fr)_minmax(0,1.8fr)] md:px-10 md:py-20">
        <p className="home-intro-label text-xs uppercase tracking-[0.18em] text-[#6B6B6B] md:text-sm">
          What I do
        </p>

        <div>
          <h2
            id="introduction-title"
            className="home-intro-title font-display text-[clamp(2.25rem,4vw,3.625rem)] font-medium leading-[1.02] tracking-[-0.05em]"
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
