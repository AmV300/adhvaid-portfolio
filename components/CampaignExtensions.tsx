import Image from "next/image";

const pressurePoints = [
  "Rushed mornings",
  "Packed platforms",
  "Hours standing",
  "No real pause",
];

export function CampaignExtensions() {
  return (
    <>
      <section className="overflow-hidden bg-[#F1EEE6] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <p className="text-sm uppercase tracking-[0.16em] text-[#6B6B6B] lg:col-span-3">
              Social Narrative
            </p>

            <div className="lg:col-span-9">
              <h2 className="font-display max-w-4xl text-5xl font-medium leading-[0.98] tracking-[-0.06em] md:text-7xl">
                From pressure to promise, one frame at a time.
              </h2>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#6B6B6B] md:text-xl">
                The carousel does not begin with the product. It begins with a
                feeling the audience already knows, then lets the campaign
                promise arrive as the release.
              </p>
            </div>
          </div>

          <ol className="mt-16 grid gap-5 md:mt-24 md:grid-cols-3 md:gap-6">
            <li className="relative aspect-[4/5] overflow-hidden bg-[#171914] text-white">
              <Image
                src="/images/move-softly/move-softly-commute.jpg"
                alt="A commuter crossing a busy city street"
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/5 to-black/75" />

              <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
                <p className="text-xs uppercase tracking-[0.16em] text-white/75">
                  01 / The pressure
                </p>
                <p className="font-display max-w-xs text-[clamp(2rem,3.2vw,3.5rem)] font-medium leading-[0.95] tracking-[-0.055em]">
                  Nobody asks how your feet feel by 6pm.
                </p>
              </div>
            </li>

            <li className="flex aspect-[4/5] flex-col justify-between bg-[#DED7C7] p-6 md:p-8">
              <p className="text-xs uppercase tracking-[0.16em] text-[#6B6B6B]">
                02 / The accumulation
              </p>

              <div>
                <p className="font-display max-w-sm text-[clamp(2.6rem,4.8vw,5rem)] font-medium leading-[0.9] tracking-[-0.065em]">
                  Every step
                  <br />
                  adds up.
                </p>

                <div className="mt-9 grid grid-cols-2 gap-x-5 gap-y-3 border-t border-[#111111]/25 pt-5 text-sm text-[#4E4E4A]">
                  {pressurePoints.map((point) => (
                    <p key={point}>{point}</p>
                  ))}
                </div>
              </div>

              <p className="max-w-xs text-sm leading-relaxed text-[#5F5F59]">
                The promise has to last longer than the moment it is first felt.
              </p>
            </li>

            <li className="relative aspect-[4/5] overflow-hidden bg-[#66774A] text-white">
              <div className="absolute bottom-0 right-0 h-[47%] w-[47%] overflow-hidden rounded-tl-[2.5rem]">
                <Image
                  src="/images/move-softly/move-softly-return.jpg"
                  alt="A person continuing their walk in the evening"
                  fill
                  sizes="(min-width: 768px) 17vw, 48vw"
                  className="object-cover"
                />
              </div>

              <div className="relative flex h-full flex-col p-6 md:p-8">
                <p className="text-xs uppercase tracking-[0.16em] text-white/70">
                  03 / The promise
                </p>

                <p className="font-display mt-auto max-w-[90%] pb-[50%] text-[clamp(2.3rem,4vw,4.4rem)] font-medium leading-[0.9] tracking-[-0.065em] md:pb-[52%]">
                  Comfort that doesn&apos;t clock out.
                </p>

                <p className="absolute bottom-7 left-6 max-w-[46%] text-sm leading-relaxed text-white/75 md:left-8">
                  Something steady while everything else changes pace.
                </p>
              </div>
            </li>
          </ol>

          <div className="mt-7 flex flex-col gap-3 text-xs uppercase tracking-[0.15em] text-[#6B6B6B] sm:flex-row sm:items-center sm:justify-between">
            <p>Social carousel</p>
            <p>Pressure → Accumulation → Promise</p>
          </div>
        </div>
      </section>

      <section className="bg-[#FAFAF8] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <p className="text-sm uppercase tracking-[0.16em] text-[#6B6B6B] lg:col-span-3">
              Campaign Touchpoints
            </p>

            <div className="lg:col-span-9">
              <h2 className="font-display max-w-4xl text-5xl font-medium leading-[0.98] tracking-[-0.06em] md:text-7xl">
                The idea meets people where the day moves.
              </h2>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#6B6B6B] md:text-xl">
                The same promise shifts scale without changing character: a
                quiet interruption in the station, then a more personal moment
                in the hand.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-6 lg:mt-24 lg:grid-cols-12">
            <article className="bg-[#D8D4CB] p-5 sm:p-8 lg:col-span-8 lg:p-12">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#171914] sm:aspect-[16/10]">
                <Image
                  src="/images/move-softly/move-softly-pace.jpg"
                  alt="A Move Softly out-of-home campaign placement in a transit setting"
                  fill
                  sizes="(min-width: 1024px) 66vw, 100vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/15 to-transparent" />

                <div className="absolute inset-y-0 left-0 flex w-[68%] flex-col justify-between p-6 text-white sm:w-[58%] sm:p-10">
                  <p className="text-xs uppercase tracking-[0.16em] text-white/70">
                    Move Softly
                  </p>
                  <div>
                    <p className="font-display text-[clamp(2.6rem,6vw,6.5rem)] font-medium leading-[0.82] tracking-[-0.07em]">
                      Made for
                      <br />
                      real life.
                    </p>
                    <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/75 sm:text-base">
                      From the first platform to the last walk home.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex items-start justify-between gap-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-[#6B6B6B]">
                    Out of home
                  </p>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-[#5F5F59]">
                    A restrained message placed inside the movement it speaks
                    to.
                  </p>
                </div>
                <p className="text-xs tracking-[0.16em] text-[#6B6B6B]">01</p>
              </div>
            </article>

            <article className="flex flex-col bg-[#24372A] p-5 text-white sm:p-8 lg:col-span-4">
              <div className="mx-auto w-full max-w-[23rem] rounded-[2.2rem] bg-[#111410] p-2.5 shadow-[0_30px_70px_rgba(0,0,0,0.25)]">
                <div className="overflow-hidden rounded-[1.7rem] bg-[#F1EEE6] text-[#111111]">
                  <div className="flex items-center justify-between px-4 py-3 text-[0.65rem] uppercase tracking-[0.14em]">
                    <p>Move Softly</p>
                    <p>•••</p>
                  </div>

                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src="/images/move-softly/move-softly-stretch.webp"
                      alt="Move Softly social campaign showing comfort during a long day"
                      fill
                      sizes="(min-width: 1024px) 25vw, 80vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <p className="font-display absolute bottom-5 left-5 max-w-[80%] text-3xl font-medium leading-[0.95] tracking-[-0.055em] text-white">
                      Still steady,
                      <br />
                      hours in.
                    </p>
                  </div>

                  <div className="px-4 py-4">
                    <div className="flex gap-3 text-sm" aria-hidden="true">
                      <span>♡</span>
                      <span>○</span>
                      <span>↗</span>
                    </div>
                    <p className="mt-3 text-xs leading-relaxed text-[#5F5F59]">
                      With you for the whole day—not just the destination.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-start justify-between gap-8 border-t border-white/20 pt-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-white/60">
                    Social
                  </p>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/70">
                    A closer, more immediate expression of the same campaign
                    thought.
                  </p>
                </div>
                <p className="text-xs tracking-[0.16em] text-white/60">02</p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
