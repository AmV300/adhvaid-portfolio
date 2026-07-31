"use client";

import { useEffect, useRef } from "react";

type Point = {
  x: number;
  y: number;
};

function catmullRom(points: Point[], progress: number) {
  const segmentCount = points.length - 1;
  const position = Math.min(progress, 0.999999) * segmentCount;
  const segment = Math.floor(position);
  const t = position - segment;
  const t2 = t * t;
  const t3 = t2 * t;

  const p0 = points[Math.max(0, segment - 1)];
  const p1 = points[segment];
  const p2 = points[Math.min(points.length - 1, segment + 1)];
  const p3 = points[Math.min(points.length - 1, segment + 2)];

  return {
    x:
      0.5 *
      (2 * p1.x +
        (-p0.x + p2.x) * t +
        (2 * p0.x - 5 * p1.x + 4 * p2.x - p3.x) * t2 +
        (-p0.x + 3 * p1.x - 3 * p2.x + p3.x) * t3),
    y:
      0.5 *
      (2 * p1.y +
        (-p0.y + p2.y) * t +
        (2 * p0.y - 5 * p1.y + 4 * p2.y - p3.y) * t2 +
        (-p0.y + 3 * p1.y - 3 * p2.y + p3.y) * t3),
  };
}

function smoothstep(start: number, end: number, value: number) {
  const amount = Math.min(1, Math.max(0, (value - start) / (end - start)));
  return amount * amount * (3 - 2 * amount);
}

export function ArrivalLeaf() {
  const leafRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const leaf = leafRef.current;

    if (!leaf) {
      return;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const width = window.innerWidth;
    const height = window.innerHeight;
    const start = { x: width * 0.05, y: height * 0.07 };
    const end = {
      x: Math.max(start.x + 80, width - 190),
      y: Math.max(start.y + 180, height - 96),
    };
    const distanceX = end.x - start.x;
    const distanceY = end.y - start.y;

    if (reducedMotion) {
      leaf.style.opacity = "1";
      leaf.style.transform = `translate3d(${end.x}px, ${end.y}px, 0)`;
      return;
    }

    const points: Point[] = [
      start,
      { x: start.x + distanceX * 0.14, y: start.y + distanceY * 0.14 },
      { x: start.x + distanceX * 0.29, y: start.y + distanceY * 0.07 },
      { x: start.x + distanceX * 0.43, y: start.y + distanceY * 0.35 },
      { x: start.x + distanceX * 0.59, y: start.y + distanceY * 0.43 },
      { x: start.x + distanceX * 0.74, y: start.y + distanceY * 0.6 },
      { x: start.x + distanceX * 0.9, y: start.y + distanceY * 0.82 },
      end,
    ];
    const frameCount = 480;
    const frames = Array.from({ length: frameCount + 1 }, (_, index) => {
      const time = index / frameCount;
      const travel =
        time < 0.5
          ? 4 * time * time * time
          : 1 - Math.pow(-2 * time + 2, 3) / 2;
      const point = catmullRom(points, travel);
      const nextPoint = catmullRom(points, Math.min(1, travel + 0.0025));
      const direction =
        (Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x) * 180) /
        Math.PI;
      const settling = smoothstep(0.79, 1, travel);
      const flutter =
        (Math.sin(time * Math.PI * 7.2) * 12 +
          Math.sin(time * Math.PI * 15.4) * 3.5) *
        (1 - settling);
      const rotation = (direction - 35) * (1 - settling) + flutter;
      const pitch =
        Math.sin(time * Math.PI * 5.8 + 0.65) * 34 * (1 - settling);
      const roll =
        Math.sin(time * Math.PI * 4.1 + 1.15) * 18 * (1 - settling);
      const flex =
        1 +
        Math.sin(time * Math.PI * 9.2 + 0.4) * 0.035 * (1 - settling);
      const scale =
        0.94 +
        Math.sin(Math.min(1, time * 1.8) * Math.PI * 0.5) * 0.06;

      return {
        offset: time,
        opacity: Math.min(1, time / 0.08),
        transform: `translate3d(${point.x}px, ${point.y}px, 0) perspective(180px) rotateZ(${rotation}deg) rotateX(${pitch}deg) rotateY(${roll}deg) skewX(${(flex - 1) * 75}deg) scale(${scale}, ${scale * flex})`,
      };
    });

    const animation = leaf.animate(frames, {
      duration: 5800,
      delay: 180,
      easing: "linear",
      fill: "both",
    });

    return () => animation.cancel();
  }, []);

  return (
    <svg
      ref={leafRef}
      aria-hidden="true"
      viewBox="0 0 48 48"
      className="home-arrival-mark h-7 w-7 text-[#7E806D] md:h-8 md:w-8"
    >
      <path
        d="M41.7 7.1c-10.4.1-20.5 3.5-27.1 10.5-4.9 5.2-7.2 11.6-7.5 20.4 8.3-.5 15.3-2.9 21-7.5 7.3-5.9 11.7-13.7 13.6-23.4Z"
        fill="currentColor"
      />
      <path
        d="M8.4 37.1c7.2-7.9 14.9-14.3 27.7-23.6"
        fill="none"
        stroke="#FAFAF8"
        strokeLinecap="round"
        strokeWidth="1.3"
      />
      <path
        d="M16.1 29.9c.2-3.3-.2-5.8-1.2-8.2M21.3 25.5c3.2-.1 6-.7 8.4-1.8M26.8 21.3c.6-2.6.5-4.7.1-6.6"
        fill="none"
        opacity=".7"
        stroke="#FAFAF8"
        strokeLinecap="round"
        strokeWidth=".85"
      />
      <path
        d="M40.9 8.1c-2.1 1.1-3.6 2.8-4.4 5.1M11.7 34.7c5.6-.9 10.5-3.1 14.8-6.7"
        fill="none"
        opacity=".24"
        stroke="#3F4337"
        strokeLinecap="round"
        strokeWidth=".9"
      />
    </svg>
  );
}
