"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function AboutPreview() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
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
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      data-visible={isVisible}
      aria-labelledby="observer-title"
      className="observer-section bg-[#F1F0EB]"
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-12 md:grid-cols-[minmax(0,0.72fr)_minmax(0,1.8fr)]">
          <p className="observer-label text-xs uppercase tracking-[0.18em] text-[#6B6B6B] md:text-sm">
            The Observer
          </p>

          <div>
            <h2
              id="observer-title"
              className="observer-title font-display max-w-4xl text-[clamp(3.25rem,6.8vw,6.6rem)] font-medium leading-[0.92] tracking-[-0.065em]"
            >
              I create to understand.
            </h2>

            <div className="observer-copy mt-10 grid max-w-4xl gap-6 text-[clamp(1.1rem,1.65vw,1.4rem)] leading-[1.55] text-[#5F5F5F] md:grid-cols-2 md:gap-10">
              <p>
                Observation often begins with something easy to miss: light
                slipping through a familiar place, a memory held by an object,
                or the pause before someone answers.
              </p>
              <p>
                Writing, photography, strategy, film and drawing are different
                ways of staying with those details until a clearer idea
                emerges.
              </p>
            </div>
          </div>
        </div>

        <div
          aria-label="Selected writing and photography"
          className="observer-fragments mt-20 grid gap-12 md:mt-28 lg:grid-cols-12 lg:items-start lg:gap-10"
        >
          <figure className="observer-fragment lg:col-span-8">
            <a
              href="https://www.instagram.com/my.hollow_frames/"
              target="_blank"
              rel="noreferrer"
              aria-label="View Adhvaid's photography on Instagram"
              className="group block outline-none focus-visible:ring-2 focus-visible:ring-[#111111] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F1F0EB]"
            >
              <div className="relative aspect-[1440/754] overflow-hidden bg-[#D8D5CC]">
                <Image
                  src="/images/observer/hollow-frames-autumn.jpg"
                  alt="Autumn light seen through a narrow opening, photographed by Adhvaid"
                  fill
                  sizes="(min-width: 1024px) 66vw, 100vw"
                  quality={90}
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.012] motion-reduce:transition-none"
                />
              </div>
            </a>

            <figcaption className="mt-6 grid gap-4 border-t border-[#111111]/15 pt-5 sm:grid-cols-[0.55fr_1.45fr]">
              <p className="text-xs uppercase tracking-[0.14em] text-[#6B6B6B]">
                Photography / Hollow Frames
              </p>
              <div>
                <h3 className="font-display text-3xl font-medium leading-tight tracking-[-0.045em]">
                  Beautiful accidents.
                </h3>
                <p className="mt-3 max-w-lg leading-relaxed text-[#5F5F5A]">
                  Light, distance and the moments that appear only when the
                  frame slows down.
                </p>
                <a
                  href="https://www.instagram.com/my.hollow_frames/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex min-h-11 items-center gap-2 border-b border-[#111111]/35 py-2 text-sm transition-colors hover:border-[#111111]"
                >
                  View photographs <span aria-hidden="true">↗</span>
                </a>
              </div>
            </figcaption>
          </figure>

          <figure className="observer-fragment lg:col-span-4 lg:mt-28">
            <a
              href="https://www.instagram.com/paper_crumples/"
              target="_blank"
              rel="noreferrer"
              aria-label="Read Adhvaid's writing on Instagram"
              className="group block outline-none focus-visible:ring-2 focus-visible:ring-[#111111] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F1F0EB]"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[#E4E1D8]">
                <Image
                  src="/images/observer/paper-crumples-books.jpg"
                  alt="A handwritten reflection by Adhvaid about discovering a love of books in childhood"
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  quality={90}
                  className="object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-[1.012] motion-reduce:transition-none"
                />
              </div>
            </a>

            <figcaption className="mt-6 border-t border-[#111111]/15 pt-5">
              <p className="text-xs uppercase tracking-[0.14em] text-[#6B6B6B]">
                Writing / Paper Crumples
              </p>
              <h3 className="font-display mt-5 text-3xl font-medium leading-tight tracking-[-0.045em]">
                Thoughts given somewhere to unfold.
              </h3>
              <p className="mt-3 max-w-sm leading-relaxed text-[#5F5F5A]">
                Fragments of memory, books and ordinary life, kept long enough
                to become a page.
              </p>
              <a
                href="https://www.instagram.com/paper_crumples/"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex min-h-11 items-center gap-2 border-b border-[#111111]/35 py-2 text-sm transition-colors hover:border-[#111111]"
              >
                Read fragments <span aria-hidden="true">↗</span>
              </a>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
