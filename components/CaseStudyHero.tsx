import Link from "next/link";
import Image from "next/image";

type CaseStudyHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  summary: string;
  imageSrc: string;
  imageAlt: string;
  meta: string;
  disclaimer: string;
};

export function CaseStudyHero({
  eyebrow,
  title,
  summary,
  imageSrc,
  imageAlt,
  meta,
  disclaimer,
}: CaseStudyHeroProps) {
  return (
    <section className="relative min-h-[560px] w-full overflow-hidden bg-[#111111] text-white md:aspect-[2/1] md:min-h-[640px]">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        quality={90}
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/35" />

      <div className="absolute inset-0">
        <div className="mx-auto flex h-full max-w-7xl flex-col justify-between px-6 py-8 md:px-10 md:py-12">
          <div className="flex flex-col gap-3">
  <Link
    href="/"
    className="w-fit text-xs uppercase tracking-[0.16em] text-white/80 transition-opacity hover:opacity-60"
  >
    ← Investigations
  </Link>

  <p className="text-xs uppercase tracking-[0.16em] text-white/70">
    {eyebrow}
  </p>
</div>
          <div className="max-w-4xl">
            <h1 className="font-display text-[2.7rem] font-medium leading-[0.9] tracking-[-0.07em] sm:text-7xl lg:text-8xl">
              {title}
            </h1>

            <p className="mt-7 max-w-lg text-base leading-relaxed text-white/80 md:text-lg">
              {summary}
            </p>
          </div>

          <div className="flex flex-col gap-2 border-t border-white/30 pt-4 text-xs text-white/70 md:flex-row md:items-center md:justify-between">
            <p>{meta}</p>
            <p>{disclaimer}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
