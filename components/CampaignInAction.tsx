"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, KeyboardEvent, PointerEvent } from "react";

const posters = [
  {
    title: "The Rush",
    description: "Held through the morning crowd.",
    position: "12.7% 50%",
  },
  {
    title: "The Stretch",
    description: "Still steady, hours in.",
    position: "50.8% 50%",
  },
  {
    title: "The Return",
    description: "The last steps, same as the first.",
    position: "88.9% 50%",
  },
];

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

export function CampaignInAction() {
  const [active, setActive] = useState(0);
  const deckRef = useRef<HTMLDivElement>(null);
  const pointerStart = useRef<number | null>(null);
  const didSwipe = useRef(false);
  const wheelLocked = useRef(false);

  const move = (direction: 1 | -1) => {
    setActive((current) =>
      (current + direction + posters.length) % posters.length,
    );
  };

  const positionFor = (index: number): "center" | "left" | "right" => {
    if (index === active) return "center";
    if (index === (active + 1) % posters.length) return "right";
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
        (current + (event.deltaX > 0 ? 1 : -1) + posters.length) %
        posters.length,
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
  }, []);

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    pointerStart.current = event.clientX;
    didSwipe.current = false;
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (pointerStart.current === null) return;

    const distance = event.clientX - pointerStart.current;
    pointerStart.current = null;

    if (Math.abs(distance) < 45) return;
    didSwipe.current = true;
    move(distance < 0 ? 1 : -1);
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

  return (
    <section id="campaign-in-action" className="scroll-mt-20 overflow-hidden bg-[#24372A] py-24 text-white md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.16em] text-white/65">
            Campaign in Action
          </p>

          <h2 className="font-display mt-6 text-5xl font-medium leading-[0.98] tracking-[-0.06em] md:text-7xl">
            Held through the rush, the stretch and the return.
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/65">
            Three poster executions follow one promise across the changing
            pace of a single day.
          </p>
        </div>

        <div
          ref={deckRef}
          className="relative mt-12 h-[31rem] touch-pan-y select-none outline-none sm:h-[38rem] md:mt-16 md:h-[42rem] lg:h-[44rem]"
          style={{ perspective: "1400px", overscrollBehaviorX: "none" }}
          role="region"
          aria-label="Move Softly campaign posters"
          aria-roledescription="carousel"
          tabIndex={0}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerCancel={() => {
            pointerStart.current = null;
          }}
          onKeyDown={handleKeyDown}
        >
          {posters.map((poster, index) => {
            const position = positionFor(index);

            return (
              <button
                key={poster.title}
                type="button"
                aria-label={`Show ${poster.title} poster`}
                aria-current={position === "center" ? "true" : undefined}
                onClick={() => {
                  if (!didSwipe.current) setActive(index);
                  didSwipe.current = false;
                }}
                className="absolute left-1/2 top-1/2 aspect-[3/4] w-[72%] max-w-[26rem] overflow-hidden bg-[#111111] outline-none transition-[transform,opacity,filter,box-shadow] duration-[1050ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#24372A] motion-reduce:transition-none sm:w-[58%] md:w-[40%] lg:w-[36%]"
                style={{
                  ...cardPositions[position],
                  backgroundImage:
                    "url('/images/move-softly/move-softly-poster-hq.webp')",
                  backgroundPosition: poster.position,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "375% auto",
                }}
              />
            );
          })}
        </div>

        <div className="border-t border-white/20 pt-5">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div aria-live="polite">
              <p className="text-sm uppercase tracking-[0.14em] text-white/60">
                0{active + 1} / {posters[active].title}
              </p>
              <p className="mt-2 text-base text-white/80">
                {posters[active].description}
              </p>
            </div>

            <div className="flex items-center justify-between gap-6 sm:justify-end">
              <p className="text-xs uppercase tracking-[0.14em] text-white/45">
                Swipe or scroll sideways
              </p>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => move(-1)}
                  className="grid size-11 place-items-center rounded-full border border-white/25 text-lg text-white/75 outline-none transition-colors hover:border-white/60 hover:text-white focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#24372A]"
                  aria-label="Previous poster"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={() => move(1)}
                  className="grid size-11 place-items-center rounded-full border border-white/25 text-lg text-white/75 outline-none transition-colors hover:border-white/60 hover:text-white focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#24372A]"
                  aria-label="Next poster"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
