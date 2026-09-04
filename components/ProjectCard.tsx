"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { Project } from "@/lib/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const reduceMotion = useReducedMotion();

  // Subtle parallax: the image drifts vertically at a slightly different rate
  // than the surrounding text as the card passes through the viewport.
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [-18, 18],
  );

  useEffect(() => {
    const card = cardRef.current;

    if (!card) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    observer.observe(card);

    return () => observer.disconnect();
  }, []);

  return (
    <Link
      ref={cardRef}
      href={project.href}
      data-visible={isVisible}
      data-media={project.imagePosition}
      className="investigation-card group block py-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] focus-visible:ring-offset-4 md:py-16"
      aria-label={`View ${project.title} case study`}
    >
      <article className="investigation-card-grid">
        <div className="investigation-card-media relative overflow-hidden bg-[#E9E8E3]">
          <motion.div
            className="absolute inset-x-0 -inset-y-6 will-change-transform"
            style={{ y: imageY }}
          >
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              sizes="(min-width: 768px) 58vw, 100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none"
            />
          </motion.div>

          {/* Soft overlay that fades in on hover so the card feels responsive
              before clicking. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B1E33]/35 via-[#0B1E33]/8 to-transparent opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 motion-reduce:transition-none"
          />
        </div>

        <div className="investigation-card-details flex min-h-0 flex-col justify-between">
          <div className="text-xs uppercase tracking-[0.14em] text-[#6B6B6B]">
            <p>Investigation {project.number}</p>
          </div>

          <div className="mt-10">
            <p className="text-sm uppercase tracking-[0.08em] text-[#6B6B6B]">
              {project.client}
            </p>

            <p className="mt-3 text-xs font-medium uppercase tracking-[0.13em] text-[#363636]">
              {project.type}
            </p>

            <h3 className="font-display mt-7 max-w-lg text-4xl font-medium leading-[0.96] tracking-[-0.055em] md:text-5xl lg:text-6xl">
              {project.title}
            </h3>

            <p className="mt-6 max-w-md text-lg font-medium leading-snug tracking-[-0.02em] text-[#242424]">
              {project.question}
            </p>

            <p className="mt-4 max-w-md text-base leading-relaxed text-[#6B6B6B]">
              {project.description}
            </p>

            <span
              className="mt-9 inline-flex min-h-11 items-center gap-3 py-2 text-sm font-medium"
              aria-hidden="true"
            >
              {/* The rule belongs to the label, so it stops where the words
                  stop rather than running on under the arrow. */}
              <span className="border-b border-[#111111] pb-1.5">
                View investigation
              </span>
              <span className="transition-transform duration-300 ease-out group-hover:translate-x-1">
                →
              </span>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
