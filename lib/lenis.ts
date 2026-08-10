import type Lenis from "lenis";

// Holds the active Lenis instance so imperative scrolls elsewhere in the app
// (e.g. the homepage keyboard chapter navigation) can route through Lenis
// instead of calling native scrollTo, which would fight Lenis's smoothing.
let activeLenis: Lenis | null = null;

export function setActiveLenis(instance: Lenis | null) {
  activeLenis = instance;
}

export function getActiveLenis(): Lenis | null {
  return activeLenis;
}
