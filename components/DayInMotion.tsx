import { CardCarousel, type CarouselCard } from "@/components/CardCarousel";

const moments = [
  {
    time: "06:42",
    label: "The Commute",
    title: "Before the day finds its rhythm.",
    description:
      "The first steps arrive before the body has fully caught up. The promise begins here, not after the rush is over.",
    image: "/images/move-softly/move-softly-commute-hq.webp",
    alt: "A person commuting through the city",
  },
  {
    time: "09:17",
    label: "The Rush",
    title: "The pace changes. The feeling should not.",
    description:
      "Crowded platforms, quick crossings and constant direction changes turn movement into the background of the day.",
    image: "/images/move-softly/move-softly-pace-hq.webp",
    alt: "A person moving through a busy day",
  },
  {
    time: "15:48",
    label: "The Long Stretch",
    title: "Hours in, the day is still asking.",
    description:
      "Reliability matters most when the day has already asked for more than expected and still is not finished.",
    image: "/images/move-softly/move-softly-stretch-hq.webp",
    alt: "A person continuing through a long day",
  },
  {
    time: "19:06",
    label: "The Return",
    title: "The last steps deserve what the first ones had.",
    description:
      "The walk home is not an afterthought. It is where the promise proves it never clocked out.",
    image: "/images/move-softly/move-softly-return-hq.webp",
    alt: "A person walking home",
  },
];

const cards: CarouselCard[] = moments.map((moment) => ({
  key: moment.time,
  image: moment.image,
  cardLabel: `Show ${moment.time} — ${moment.label}`,
  eyebrow: `${moment.time} / ${moment.label}`,
  title: moment.title,
  description: moment.description,
}));

export function DayInMotion() {
  return (
    <section className="overflow-hidden bg-[#E9E4D6] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.16em] text-[#6B6B6B]">
            A Day in Motion
          </p>

          <h2 className="font-display mt-6 text-5xl font-medium leading-[0.98] tracking-[-0.06em] md:text-7xl">
            One day. No pause button.
          </h2>
        </div>

        <CardCarousel
          cards={cards}
          variant="light"
          ariaLabel="A day in motion, four moments"
        />
      </div>
    </section>
  );
}
