export function HomeHero() {
  return (
    <section className="mx-auto flex min-h-[78vh] max-w-7xl flex-col justify-end px-6 pb-16 pt-20 md:px-10 md:pb-24">
      <p className="mb-7 text-sm uppercase tracking-[0.16em] text-[#6B6B6B]">
        Adhvaid MV · Brand Strategy & Creative Thinking
      </p>

      <h1 className="font-display max-w-5xl text-5xl font-medium leading-[0.98] tracking-[-0.065em] sm:text-7xl md:text-8xl">
        Ideas grounded in insight.
        <br />
        Designed for people.
      </h1>

      <div className="mt-10 flex flex-col gap-6 border-t border-[#111111]/15 pt-6 md:flex-row md:items-end md:justify-between">
        <p className="max-w-md text-base leading-relaxed text-[#6B6B6B] md:text-lg">
          I develop strategy-led brand ideas, campaigns and creative concepts
          that make brands feel more meaningful.
        </p>

        <a
          href="#work"
          className="inline-flex w-fit items-center gap-3 border-b border-[#111111] pb-1 text-sm font-medium transition-opacity hover:opacity-60"
        >
          View selected work <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}