import Image from "next/image";

export function MoveSoftlyHero() {
  return (
    <section className="relative min-h-[78svh] overflow-hidden bg-[#24372A] text-white">
      <Image
        src="/images/move-softly/move-softly-hero.png"
        alt="A person moving through their day in comfortable footwear"
        fill
        priority
        quality={90}
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-[#24372A]/35" />

      <div className="relative mx-auto flex min-h-[78svh] max-w-7xl flex-col justify-between px-6 py-8 md:px-10 md:py-12">
        <p className="text-xs uppercase tracking-[0.16em] text-white/70">
          Move Softly · Concept Campaign
        </p>

        <div className="max-w-4xl">
          <h1 className="font-display text-6xl font-medium leading-[0.88] tracking-[-0.07em] sm:text-8xl lg:text-9xl">
            Move
            <br />
            Softly
          </h1>

          <p className="mt-8 max-w-md text-base leading-relaxed text-white/80 md:text-lg">
            Comfort that keeps pace with the rhythm of real life.
          </p>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/30 pt-4 text-xs text-white/70 md:flex-row md:items-center md:justify-between">
          <p>Brand Narrative · Campaign Concept</p>
          <p>Independent concept project</p>
        </div>
      </div>
    </section>
  );
}