"use client";

import { useEffect, useRef, useState } from "react";

type InViewOptions = {
  threshold?: number;
  rootMargin?: string;
};

// Flips to true the first time the element enters the viewport, then stops
// observing. Sections use it to drive their `data-visible` reveal state.
export function useInViewOnce<T extends HTMLElement>({
  threshold = 0.16,
  rootMargin = "0px 0px -8% 0px",
}: InViewOptions = {}) {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, isVisible };
}
