"use client";

import { ReactLenis, type LenisRef } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { setActiveLenis } from "@/lib/lenis";

export function SmoothScroll({ children }: { children: ReactNode }) {
  const lenisRef = useRef<LenisRef>(null);
  const pathname = usePathname();
  // Start enabled; if the visitor prefers reduced motion we drop Lenis and
  // fall back to native scrolling.
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setEnabled(!query.matches);
    apply();
    query.addEventListener("change", apply);
    return () => query.removeEventListener("change", apply);
  }, []);

  // Publish the instance so imperative scrolls (keyboard chapter nav) can use
  // Lenis rather than native scrollTo.
  useEffect(() => {
    setActiveLenis(enabled ? (lenisRef.current?.lenis ?? null) : null);
    return () => setActiveLenis(null);
  }, [enabled]);

  // On route change, land the new page at the top (unless it carries a hash
  // target) so it never inherits the previous page's scroll offset or an
  // in-flight smooth animation.
  useEffect(() => {
    if (typeof window !== "undefined" && !window.location.hash) {
      lenisRef.current?.lenis?.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  if (!enabled) {
    return <>{children}</>;
  }

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{
        // Middle-ground feel: no fixed `duration` (which caused a heavy eased
        // tail), with a moderate lerp — some glide, but still responsive.
        lerp: 0.12,
        smoothWheel: true,
        // Smoothly scroll same-page hash links; cross-page links fall through
        // to the Next.js router untouched (Lenis only intercepts anchors whose
        // pathname matches the current page).
        anchors: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
