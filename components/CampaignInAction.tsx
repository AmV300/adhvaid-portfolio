const posters = [
  {
    title: "The Rush",
    description: "Comfort in the rush.",
  position: "12.7% 50%",
  },
  {
    title: "The Stretch",
    description: "Comfort in the stretch.",
    position: "50.8% 50%",
  },
  {
    title: "The Return",
    description: "Comfort in the return.",
  position: "88.9% 50%",
  },
];

export function CampaignInAction() {
  return (
    <section className="bg-[#24372A] py-24 text-white md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.16em] text-white/65">
            Campaign in Action
          </p>

          <h2 className="font-display mt-6 text-5xl font-medium leading-[0.98] tracking-[-0.06em] md:text-7xl">
            Comfort in the rush, the stretch and the return.
          </h2>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3 md:gap-6">
          {posters.map((poster, index) => (
            <div key={poster.title}>
              <div
                className="aspect-[3/4] overflow-hidden bg-[#111111]"
                style={{
                  backgroundImage:
                    "url('/images/move-softly/move-softly-poster.png')",
                  backgroundPosition: poster.position,
                  backgroundRepeat: "no-repeat",
                 backgroundSize: "375% auto",
                }}
              />

              <div className="mt-4 border-t border-white/20 pt-4">
                <p className="text-sm uppercase tracking-[0.14em] text-white/60">
                  0{index + 1} / {poster.title}
                </p>
                <p className="mt-2 text-sm text-white/75">
                  {poster.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}