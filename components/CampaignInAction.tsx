import { CardCarousel, type CarouselCard } from "@/components/CardCarousel";

const posterSprite = "/images/move-softly/move-softly-poster-hq.webp";

const posters = [
  {
    title: "The Rush",
    description: "Held through the morning crowd.",
    position: "12.7% 50%",
  },
  {
    title: "The Stretch",
    description: "Still steady, hours in.",
    position: "50.8% 50%",
  },
  {
    title: "The Return",
    description: "The last steps, same as the first.",
    position: "88.9% 50%",
  },
];

const cards: CarouselCard[] = posters.map((poster, index) => ({
  key: poster.title,
  image: posterSprite,
  backgroundPosition: poster.position,
  backgroundSize: "375% auto",
  cardLabel: `Show ${poster.title} poster`,
  eyebrow: `0${index + 1} / ${poster.title}`,
  description: poster.description,
}));

export function CampaignInAction() {
  return (
    <section
      id="campaign-in-action"
      className="scroll-mt-20 overflow-hidden bg-[#24372A] py-24 text-white md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.16em] text-white/65">
            Campaign in Action
          </p>

          <h2 className="font-display mt-6 text-5xl font-medium leading-[0.98] tracking-[-0.06em] md:text-7xl">
            Held through the rush, the stretch and the return.
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/65">
            Three poster executions follow one promise across the changing
            pace of a single day.
          </p>
        </div>

        <CardCarousel
          cards={cards}
          variant="dark"
          ariaLabel="Move Softly campaign posters"
        />
      </div>
    </section>
  );
}
