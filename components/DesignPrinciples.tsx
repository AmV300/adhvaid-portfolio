const principles = [
  {
    word: "Grounded",
    description:
      "Soft daylight, natural surfaces and lived-in city spaces give the campaign a calm sense of place.",
  },
  {
    word: "Steady",
    description:
      "A restrained palette and unforced compositions reflect the dependable support the idea promises.",
  },
  {
    word: "Sustained",
    description:
      "Each moment connects to the next, showing comfort as something that lasts beyond a single step.",
  },
];

export function DesignPrinciples() {
  return (
    <section className="border-y border-[#111111]/15 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <p className="text-sm uppercase tracking-[0.16em] text-[#6B6B6B]">
          Design Principles
        </p>

        <div className="mt-12 border-t border-[#111111]/15">
          {principles.map((principle, index) => (
            <div
              key={principle.word}
              className="grid gap-5 border-b border-[#111111]/15 py-8 md:grid-cols-12 md:items-baseline"
            >
              <p className="text-sm uppercase tracking-[0.14em] text-[#6B6B6B] md:col-span-1">
                0{index + 1}
              </p>

              <h2 className="font-display text-5xl font-medium leading-none tracking-[-0.06em] text-[#24372A] md:col-span-6 md:text-7xl">
                {principle.word}
              </h2>

              <p className="max-w-md leading-relaxed text-[#6B6B6B] md:col-span-5">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}