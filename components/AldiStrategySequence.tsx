"use client";

import { useEffect, useRef } from "react";
import { useScrollChapterKeys } from "@/lib/useScrollChapterKeys";

function clamp(value: number) {
  return Math.min(1, Math.max(0, value));
}

function scrollEase(start: number, end: number, value: number) {
  const progress = clamp((value - start) / (end - start));
  return progress * progress * (3 - 2 * progress);
}

export function AldiStrategySequence() {
  const sequenceRef = useRef<HTMLElement>(null);

  useScrollChapterKeys(sequenceRef, { chapters: 3 });

  useEffect(() => {
    const sequence = sequenceRef.current;

    if (!sequence) {
      return;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let animationFrame = 0;

    const updateSequence = () => {
      animationFrame = 0;

      const bounds = sequence.getBoundingClientRect();
      const progress = Math.min(
        2,
        Math.max(0, -bounds.top / window.innerHeight),
      );

      if (reducedMotion) {
        const ideaIsActive = progress >= 1.45;

        sequence.style.setProperty(
          "--aldi-strategy-opacity",
          ideaIsActive ? "0" : "1",
        );
        sequence.style.setProperty(
          "--aldi-shift-opacity",
          progress >= 0.55 && !ideaIsActive ? "1" : "0",
        );
        sequence.style.setProperty("--aldi-strategy-y", "0px");
        sequence.style.setProperty("--aldi-shift-y", "0px");
        sequence.style.setProperty(
          "--aldi-idea-opacity",
          ideaIsActive ? "1" : "0",
        );
        sequence.style.setProperty("--aldi-idea-y", "0px");
        sequence.style.setProperty(
          "--aldi-idea-content-opacity",
          ideaIsActive ? "1" : "0",
        );
        sequence.style.setProperty("--aldi-idea-content-y", "0px");
        return;
      }

      const shiftEntrance = scrollEase(0.42, 0.92, progress);
      const strategyExit = scrollEase(1.18, 1.52, progress);
      const ideaEntrance = scrollEase(1.18, 1.5, progress);
      const ideaContentEntrance = scrollEase(1.3, 1.82, progress);

      sequence.style.setProperty(
        "--aldi-strategy-opacity",
        String(1 - strategyExit),
      );
      sequence.style.setProperty(
        "--aldi-strategy-y",
        `${-8 * strategyExit}px`,
      );
      sequence.style.setProperty(
        "--aldi-shift-opacity",
        String(shiftEntrance * (1 - strategyExit)),
      );
      sequence.style.setProperty(
        "--aldi-shift-y",
        `${12 * (1 - shiftEntrance) - 6 * strategyExit}px`,
      );
      sequence.style.setProperty(
        "--aldi-idea-opacity",
        String(ideaEntrance),
      );
      sequence.style.setProperty(
        "--aldi-idea-y",
        `${10 * (1 - ideaEntrance)}px`,
      );
      sequence.style.setProperty(
        "--aldi-idea-content-opacity",
        String(ideaContentEntrance),
      );
      sequence.style.setProperty(
        "--aldi-idea-content-y",
        `${12 * (1 - ideaContentEntrance)}px`,
      );
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
    <section
      id="strategy"
      ref={sequenceRef}
      className="aldi-strategy-sequence scroll-mt-24"
      aria-label="Strategic opportunity and big idea"
    >
      <div className="aldi-strategy-stage">
        <div className="aldi-strategy-layer">
          <div className="aldi-strategy-inner">
            <p className="text-xs uppercase tracking-[0.18em] text-[#6B6B6B] md:text-sm">
              Strategic Opportunity
            </p>

            <div className="aldi-strategy-content">
              <div className="max-w-4xl">
                <p className="text-xs uppercase tracking-[0.14em] text-[#6B6B6B]">
                  The unresolved opportunity
                </p>
                <p className="font-display mt-5 text-4xl font-medium leading-[1.02] tracking-[-0.055em] md:text-6xl">
                  Aldi already proves what customers save.
                </p>
                <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[#6B6B6B] md:text-xl">
                  But the number is only half the story.
                </p>
              </div>

              <p className="aldi-strategy-shift font-display text-center text-[clamp(2.8rem,6.2vw,6.25rem)] font-medium leading-[0.94] tracking-[-0.065em]">
                What does every saving
                <br />
                make possible?
              </p>
            </div>
          </div>
        </div>

        <div className="aldi-idea-layer">
          <div className="aldi-idea-inner">
            <p className="text-xs uppercase tracking-[0.18em] text-[#AAA9A3] md:text-sm">
              The Big Idea
            </p>

            <div className="aldi-idea-content">
              <h2 className="font-display mt-10 max-w-5xl text-[clamp(3.75rem,9vw,8rem)] font-medium uppercase leading-[0.82] tracking-[-0.075em]">
                Care,
                <br />
                Not
                <br />
                Compromise
              </h2>

              <div className="mt-12 grid gap-8 border-t border-[#F6F5F0]/15 pt-7 md:mt-16 md:grid-cols-2 md:pt-8">
                <p className="max-w-xl text-xl leading-relaxed text-[#D0CFC8] md:text-2xl">
                  Affordability is not the compromise. It is what helps people
                  protect the choices that matter beyond the shop.
                </p>

                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-[#AAA9A3]">
                    Campaign line
                  </p>
                  <p className="mt-4 text-xl font-medium leading-relaxed md:text-2xl">
                    Save on the shop.
                    <br />
                    Keep more for what matters.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="aldi-strategy-track" aria-hidden="true">
        <div className="aldi-strategy-stop" />
        <div className="aldi-strategy-stop" />
        <div id="big-idea" className="aldi-strategy-stop scroll-mt-24" />
      </div>
    </section>
  );
}
