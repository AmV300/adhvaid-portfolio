"use client";

import { useEffect } from "react";
import type { RefObject } from "react";
import { getActiveLenis } from "@/lib/lenis";

type ScrollChapterOptions = {
  chapters: number;
  exitOffsetVh?: number;
};

function isInteractiveTarget(target: EventTarget | null) {
  return (
    target instanceof HTMLElement &&
    Boolean(
      target.closest(
        "a, button, input, textarea, select, summary, [contenteditable='true']",
      ),
    )
  );
}

export function useScrollChapterKeys<T extends HTMLElement>(
  sectionRef: RefObject<T | null>,
  { chapters, exitOffsetVh = 0 }: ScrollChapterOptions,
) {
  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.defaultPrevented ||
        event.repeat ||
        event.altKey ||
        event.ctrlKey ||
        event.metaKey ||
        isInteractiveTarget(event.target)
      ) {
        return;
      }

      const key = event.key.toLowerCase();
      const isSpace = key === " " || key === "space";
      const direction =
        key === "pagedown" || (isSpace && !event.shiftKey)
          ? 1
          : key === "pageup" || (isSpace && event.shiftKey)
            ? -1
            : 0;

      if (!direction) {
        return;
      }

      const section = sectionRef.current;

      if (!section) {
        return;
      }

      const viewportHeight = window.innerHeight;
      const bounds = section.getBoundingClientRect();
      const isPinned = bounds.top <= 2 && bounds.bottom > 0;

      if (!isPinned) {
        return;
      }

      const rawProgress = -bounds.top / viewportHeight;
      const progress = Math.max(
        0,
        Math.min(chapters - 1, rawProgress),
      );
      const chapter =
        direction > 0
          ? Math.floor(progress + 0.08) + 1
          : rawProgress > chapters - 1 + 0.12
            ? chapters - 1
            : Math.ceil(progress - 0.08) - 1;

      event.preventDefault();

      const sectionTop = window.scrollY + bounds.top;
      const targetTop =
        chapter >= chapters
          ? sectionTop + section.offsetHeight - exitOffsetVh * viewportHeight
          : chapter < 0
            ? Math.max(0, sectionTop - viewportHeight)
            : sectionTop + chapter * viewportHeight;

      const lenis = getActiveLenis();

      if (lenis) {
        // Route through Lenis so its internal target stays in sync; a native
        // scrollTo here would be undone on the next Lenis frame.
        lenis.scrollTo(targetTop, { immediate: reducedMotion.matches });
      } else {
        window.scrollTo({
          top: targetTop,
          behavior: reducedMotion.matches ? "auto" : "smooth",
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [chapters, exitOffsetVh, sectionRef]);
}
