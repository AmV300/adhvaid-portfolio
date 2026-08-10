"use client";

import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

type CursorVariant = "default" | "link" | "view";

// Elements that should switch the cursor to its "link" (grown) state.
const LINK_SELECTOR =
  'a, button, [role="button"], input, textarea, select, summary, label[for], [data-cursor="link"]';

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [variant, setVariant] = useState<CursorVariant>("default");
  const [visible, setVisible] = useState(false);

  // Raw pointer position; springs give the follow a slight eased lag.
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springConfig = { damping: 30, stiffness: 450, mass: 0.5 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  // Only enable on devices with a fine pointer (mouse) and no reduced-motion.
  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setEnabled(fine.matches && !reduced.matches);
    apply();
    fine.addEventListener("change", apply);
    reduced.addEventListener("change", apply);
    return () => {
      fine.removeEventListener("change", apply);
      reduced.removeEventListener("change", apply);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const onMove = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      setVisible(true);

      const target = event.target as HTMLElement | null;
      if (!target) return;

      if (target.closest('[data-cursor="view"]')) {
        setVariant("view");
      } else if (target.closest(LINK_SELECTOR)) {
        setVariant("link");
      } else {
        setVariant("default");
      }
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    document.documentElement.classList.add("has-custom-cursor");

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  const isView = variant === "view";

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9999]"
      style={{ x: springX, y: springY }}
    >
      <motion.div
        className="flex items-center justify-center rounded-full will-change-transform"
        style={{
          width: 40,
          height: 40,
          x: "-50%",
          y: "-50%",
          backgroundColor: isView ? "#111111" : "#ffffff",
          mixBlendMode: isView ? "normal" : "difference",
        }}
        animate={{
          scale: isView ? 2.3 : variant === "link" ? 1 : 0.28,
          opacity: visible ? (variant === "link" ? 0.7 : 1) : 0,
        }}
        transition={{ type: "spring", stiffness: 260, damping: 22, mass: 0.5 }}
      >
        <AnimatePresence>
          {isView && (
            <motion.span
              key="view-label"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.18 }}
              className="select-none text-[7px] font-medium uppercase tracking-[0.16em] text-white"
            >
              View
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
