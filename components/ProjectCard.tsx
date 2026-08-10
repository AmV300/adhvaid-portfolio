"use client";

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
      className="investigation-card group block py-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] focus-visible:ring-offset-4 md:py-16"
      aria-label={`View ${project.title} case study`}
    >
      <article className="grid items-stretch gap-8 md:grid-cols-12 md:gap-10">
        <div
          data-cursor="view"
          className={`investigation-card-media relative aspect-[4/3] overflow-hidden bg-[#E9E8E3] md:col-span-7 ${
            project.imagePosition === "right"
              ? "md:order-2"
              : "md:order-1"
          }`}
        >
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes="(min-width: 768px) 58vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.018] motion-reduce:transition-none"
          />
        </div>

        <div
          className={`investigation-card-details flex min-h-0 flex-col justify-between md:col-span-5 ${
            project.imagePosition === "right"
              ? "md:order-1"
              : "md:order-2"
          }`}
        >
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
              className="mt-9 inline-flex min-h-11 items-center gap-3 border-b border-[#111111] py-2 text-sm font-medium"
              aria-hidden="true"
            >
              View investigation
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
