import Image from "next/image";

const moments = [
  {
    number: "01",
    label: "The Commute",
    title: "The day begins in motion.",
    description:
      "Comfort sets a quieter tone before the pace of the day begins to build.",
    image: "/images/move-softly/move-softly-commute.jpg",
    alt: "A person commuting through the city",
  },
  {
    number: "02",
    label: "The Pace",
    title: "Movement becomes constant.",
    description:
      "Short distances, long routes and all the in-between moments ask the body to keep up.",
    image: "/images/move-softly/move-softly-pace.jpg",
    alt: "A person moving through a busy day",
  },
  {
    number: "03",
    label: "The Long Stretch",
    title: "Some days run longer than expected.",
    description:
      "Comfort should keep pace with the day, rather than asking for a pause from it.",
    image: "/images/move-softly/move-softly-stretch.webp",
    alt: "A person continuing through a long day",
  },
  {
    number: "04",
    label: "The Return",
    title: "The walk home still matters.",
    description:
      "Comfort is not a reward at the end of the day. It is proof that it stayed with you throughout it.",
    image: "/images/move-softly/move-softly-return.jpg",
    alt: "A person walking home",
  },
];

export function DayInMotion() {
  return (
    <section className="bg-[#E9E4D6] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.16em] text-[#6B6B6B]">
            A Day in Motion
          </p>

          <h2 className="font-display mt-6 text-5xl font-medium leading-[0.98] tracking-[-0.06em] md:text-7xl">
            From the first step out to the last step home.
          </h2>
        </div>

        <div className="mt-20 space-y-24 md:mt-28">
          {moments.map((moment, index) => (
            <article
              key={moment.number}
              className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-16"
            >
              <div
                className={`relative aspect-[4/5] overflow-hidden bg-[#D7D0C1] lg:col-span-7 ${
                  index % 2 === 1 ? "lg:order-2 lg:col-start-6" : ""
                }`}
              >
                <Image
                  src={moment.image}
                  alt={moment.alt}
                  fill
                  quality={90}
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div
                className={`lg:col-span-5 ${
                  index % 2 === 1 ? "lg:order-1 lg:col-start-1" : ""
                }`}
              >
                <p className="text-sm uppercase tracking-[0.16em] text-[#6B6B6B]">
                  {moment.number} / {moment.label}
                </p>

                <h3 className="font-display mt-5 text-3xl font-medium leading-[1.02] tracking-[-0.045em] md:text-4xl">
                  {moment.title}
                </h3>

                <p className="mt-5 max-w-md text-lg leading-relaxed text-[#6B6B6B]">
                  {moment.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}