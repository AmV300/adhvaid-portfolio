"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, KeyboardEvent, PointerEvent } from "react";

export type CarouselCard = {
  key: string;
  /** Background image url shown on the card face. */
  image: string;
  /** CSS background-position (defaults to "center"). */
  backgroundPosition?: string;
  /** CSS background-size (defaults to "cover"). */
  backgroundSize?: string;
  /** Accessible label for the card button. */
  cardLabel: string;
  /** Small uppercase line in the meta area (e.g. "01 / The Rush" or "06:42 / The Commute"). */
  eyebrow: string;
  /** Optional headline shown in the meta area. */
  title?: string;
  /** Supporting copy shown in the meta area. */
  description: string;
};

const cardPositions: Record<"center" | "left" | "right", CSSProperties> = {
  center: {
    transform:
      "translate3d(-50%, -50%, 80px) rotateY(0deg) rotateZ(0deg) scale(1)",
    opacity: 1,
    zIndex: 30,
    filter: "brightness(1)",
    boxShadow: "0 38px 90px rgba(0, 0, 0, 0.36)",
  },
  left: {
    transform:
      "translate3d(calc(-50% - clamp(105px, 18vw, 270px)), -50%, -130px) rotateY(8deg) rotateZ(-3.5deg) scale(0.86)",
    opacity: 0.64,
    zIndex: 10,
    filter: "brightness(0.72)",
    boxShadow: "0 18px 45px rgba(0, 0, 0, 0.18)",
  },
  right: {
    transform:
      "translate3d(calc(-50% + clamp(105px, 18vw, 270px)), -50%, -130px) rotateY(-8deg) rotateZ(3.5deg) scale(0.86)",
    opacity: 0.64,
    zIndex: 20,
    filter: "brightness(0.72)",
    boxShadow: "0 18px 45px rgba(0, 0, 0, 0.18)",
  },
};

type Variant = "dark" | "light";

// Literal class strings per variant (Tailwind needs static classes to scan).
const variantStyles: Record<
  Variant,
  {
    card: string;
    eyebrow: string;
    title: string;
    description: string;
    hint: string;
    divider: string;
    navButton: string;
  }
> = {
  dark: {
    card: "absolute left-1/2 top-1/2 aspect-[3/4] w-[72%] max-w-[26rem] overflow-hidden bg-[#111111] outline-none transition-[transform,opacity,filter,box-shadow] duration-[1050ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#24372A] motion-reduce:transition-none sm:w-[58%] md:w-[40%] lg:w-[36%]",
    eyebrow: "text-sm uppercase tracking-[0.14em] text-white/60",
    title:
      "font-display mt-2 text-2xl font-medium leading-[1.05] tracking-[-0.045em] text-white md:text-3xl",
    description: "mt-2 text-base text-white/80",
    hint: "text-xs uppercase tracking-[0.14em] text-white/45",
    divider: "border-t border-white/20 pt-5",
    navButton:
      "grid size-11 place-items-center rounded-full border border-white/25 text-lg text-white/75 outline-none transition-colors hover:border-white/60 hover:text-white focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#24372A]",
  },
  light: {
    card: "absolute left-1/2 top-1/2 aspect-[3/4] w-[72%] max-w-[26rem] overflow-hidden bg-[#111111] outline-none transition-[transform,opacity,filter,box-shadow] duration-[1050ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform focus-visible:ring-2 focus-visible:ring-[#111111] focus-visible:ring-offset-4 focus-visible:ring-offset-[#E9E4D6] motion-reduce:transition-none sm:w-[58%] md:w-[40%] lg:w-[36%]",
    eyebrow: "text-sm uppercase tracking-[0.16em] text-[#6B6B6B]",
    title:
      "font-display mt-3 text-2xl font-medium leading-[1.05] tracking-[-0.045em] text-[#111111] md:text-3xl",
    description: "mt-4 max-w-md text-lg leading-relaxed text-[#6B6B6B]",
    hint: "text-xs uppercase tracking-[0.14em] text-[#6B6B6B]",
    divider: "border-t border-[#111111]/15 pt-5",
    navButton:
      "grid size-11 place-items-center rounded-full border border-[#111111]/25 text-lg text-[#111111]/75 outline-none transition-colors hover:border-[#111111]/60 hover:text-[#111111] focus-visible:ring-2 focus-visible:ring-[#111111] focus-visible:ring-offset-2 focus-visible:ring-offset-[#E9E4D6]",
  },
};

type CardCarouselProps = {
  cards: CarouselCard[];
  /** Colour scheme: "dark" (on dark backgrounds) or "light". */
  variant?: Variant;
  /** Accessible label for the carousel region. */
  ariaLabel: string;
};

export function CardCarousel({
  cards,
  variant = "dark",
  ariaLabel,
}: CardCarouselProps) {
  const [active, setActive] = useState(0);
  const deckRef = useRef<HTMLDivElement>(null);
  const pointerStart = useRef<number | null>(null);
  const didSwipe = useRef(false);
  const wheelLocked = useRef(false);

  const styles = variantStyles[variant];

  const move = (direction: 1 | -1) => {
    setActive((current) => (current + direction + cards.length) % cards.length);
  };

  const positionFor = (index: number): "center" | "left" | "right" => {
    if (index === active) return "center";
    if (index === (active + 1) % cards.length) return "right";
    return "left";
  };

  useEffect(() => {
    const deck = deckRef.current;
    if (!deck) return;

    let unlockTimer: number | undefined;
    const handleWheel = (event: globalThis.WheelEvent) => {
      if (
        Math.abs(event.deltaX) <= Math.abs(event.deltaY) ||
        Math.abs(event.deltaX) < 10
      ) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();
      if (wheelLocked.current) return;

      wheelLocked.current = true;
      setActive((current) =>
        (current + (event.deltaX > 0 ? 1 : -1) + cards.length) % cards.length,
      );
      unlockTimer = window.setTimeout(() => {
        wheelLocked.current = false;
      }, 900);
    };

    deck.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      deck.removeEventListener("wheel", handleWheel);
      if (unlockTimer) window.clearTimeout(unlockTimer);
    };
  }, [cards.length]);

  // A swipe only *begins* on the deck, but it must be *completed* wherever the
  // pointer is released — a fast or diagonal drag routinely lifts off the card
  // (or even off the deck) before releasing. Listening for pointerup on the
  // window instead of the deck catches every release, in both directions,
  // without capturing the pointer (which would retarget the card's click and
  // break tap-to-select).
  useEffect(() => {
    const finishSwipe = (event: globalThis.PointerEvent) => {
      if (pointerStart.current === null) return;

      const distance = event.clientX - pointerStart.current;
      pointerStart.current = null;

      if (Math.abs(distance) < 45) return;
      didSwipe.current = true;
      setActive(
        (current) =>
          (current + (distance < 0 ? 1 : -1) + cards.length) % cards.length,
      );
    };

    const cancelSwipe = () => {
      pointerStart.current = null;
    };

    window.addEventListener("pointerup", finishSwipe);
    window.addEventListener("pointercancel", cancelSwipe);
    return () => {
      window.removeEventListener("pointerup", finishSwipe);
      window.removeEventListener("pointercancel", cancelSwipe);
    };
  }, [cards.length]);

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    pointerStart.current = event.clientX;
    didSwipe.current = false;
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      move(1);
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      move(-1);
    }
  };

  const current = cards[active];

  return (
    <>
      <div
        ref={deckRef}
        className="relative mt-12 h-[31rem] touch-pan-y select-none outline-none sm:h-[38rem] md:mt-16 md:h-[42rem] lg:h-[44rem]"
        style={{ perspective: "1400px", overscrollBehaviorX: "none" }}
        role="region"
        aria-label={ariaLabel}
        aria-roledescription="carousel"
        tabIndex={0}
        onPointerDown={handlePointerDown}
        onKeyDown={handleKeyDown}
      >
        {cards.map((card, index) => {
          const position = positionFor(index);

          return (
            <button
              key={card.key}
              type="button"
              aria-label={card.cardLabel}
              aria-current={position === "center" ? "true" : undefined}
              onClick={() => {
                if (!didSwipe.current) setActive(index);
                didSwipe.current = false;
              }}
              className={styles.card}
              style={{
                ...cardPositions[position],
                backgroundImage: `url('${card.image}')`,
                backgroundPosition: card.backgroundPosition ?? "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: card.backgroundSize ?? "cover",
              }}
            />
          );
        })}
      </div>

      <div className={styles.divider}>
        {/* The deck above has a fixed height, so anchoring the controls to the
            top of this row keeps them in a constant spot no matter how long the
            active caption is. The caption flows *below* the controls (it is last
            in the visual order via flex-col-reverse on mobile / the left column
            on desktop), so varying copy length only grows downward and never
            shifts the arrows. */}
        <div className="flex flex-col-reverse gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div aria-live="polite" className="max-w-2xl">
            <p className={styles.eyebrow}>{current.eyebrow}</p>
            {current.title ? (
              <p className={styles.title}>{current.title}</p>
            ) : null}
            <p className={styles.description}>{current.description}</p>
          </div>

          <div className="flex items-center justify-between gap-6 sm:justify-end">
            <p className={styles.hint}>Swipe or scroll sideways</p>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => move(-1)}
                className={styles.navButton}
                aria-label="Previous card"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => move(1)}
                className={styles.navButton}
                aria-label="Next card"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
