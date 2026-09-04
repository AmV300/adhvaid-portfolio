import Link from "next/link";
import type { Metadata } from "next";
import { CaseStudyHero } from "@/components/CaseStudyHero";
import { CaseStudyImage } from "@/components/CaseStudyImage";
import { CaseStudyNav } from "@/components/CaseStudyNav";
import { HeroFilmFrames } from "@/components/HeroFilmFrames";
import { AldiStrategySequence } from "@/components/AldiStrategySequence";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Care, Not Compromise",
  description:
    "An independent brand strategy investigation exploring how Aldi could make value feel more human.",
};

const navigation = [
  { label: "Overview", href: "#overview" },
  { label: "Challenge", href: "#challenge" },
  { label: "Insight", href: "#insight" },
  { label: "Strategy", href: "#strategy" },
  { label: "Big Idea", href: "#big-idea" },
  { label: "Expressions", href: "#expressions" },
  { label: "Journey", href: "#journey" },
  { label: "Reflection", href: "#reflection" },
];

export default function AldiCaseStudy() {
  return (
    <main className="aldi-case-study min-h-screen bg-[#FAFAF8] text-[#111111]">
      <SiteHeader />

      <CaseStudyHero
        eyebrow="Aldi UK · Independent Spec Project"
        title={
          <>
            Care,
            <br />
            {" "}
            Not Compromise
          </>
        }
        summary="Reframing value from what people save to what those savings make possible."
        imageSrc="/images/aldi/aldi-cover.png"
        imageAlt="A parent helping their child at a kitchen table beside an Aldi shopping bag"
        meta="Brand Strategy · Consumer Insight · Campaign Platform"
        disclaimer="Not affiliated with or endorsed by Aldi."
      />

      <CaseStudyNav items={navigation} />

      <article className="mx-auto max-w-7xl space-y-28 px-6 pb-28 pt-20 md:space-y-40 md:px-10 md:pb-40 md:pt-28">
        <section id="overview" className="case-study-anchor">
          <div className="flex items-baseline justify-between gap-4 border-t border-[#111111]/15 pt-5">
            <p className="text-xs uppercase tracking-[0.2em] text-[#6B6B6B] md:text-sm">
              Project Overview
            </p>
            <p className="text-xs uppercase tracking-[0.24em] tabular-nums text-[#9A9A93] md:text-sm">
              01 <span className="text-[#C7C6BF]">/ 08</span>
            </p>
          </div>

          <h2 className="font-display mt-14 max-w-[68rem] text-[3rem] font-medium leading-[0.9] tracking-[-0.065em] md:mt-24 md:text-[6.5rem]">
            Making value feel like care.
          </h2>

          <div className="mt-12 max-w-2xl md:mt-16">
            <p className="text-xl leading-[1.5] text-[#2E2E2B] md:text-2xl">
              A brand strategy investigation that reframes Aldi&apos;s low
              prices around the care behind everyday savings.
            </p>

            <p className="mt-6 max-w-xl text-sm leading-relaxed text-[#7A7A74]">
              <span className="font-medium text-[#4F4F4A]">Approach:</span>{" "}
              desk research into shopper pressure, Aldi&apos;s public value
              positioning and category communication, followed by a
              speculative strategic hypothesis.
            </p>
          </div>

          <dl className="mt-16 grid border-t border-[#111111]/15 md:mt-24 md:grid-cols-3">
            <div className="pt-8 md:pr-10">
              <dt className="text-xs uppercase tracking-[0.18em] text-[#8A8A84]">
                Role
              </dt>
              <dd className="mt-5 text-[1.1rem] leading-[1.5] text-[#2E2E2B]">
                Brand Strategy
                <br />
                Consumer Insight
                <br />
                Campaign Development
              </dd>
            </div>

            <div className="border-t border-[#111111]/12 pt-8 md:border-l md:border-t-0 md:px-10">
              <dt className="text-xs uppercase tracking-[0.18em] text-[#8A8A84]">
                Challenge
              </dt>
              <dd className="mt-5 max-w-xs text-[1.1rem] leading-[1.5] text-[#2E2E2B]">
                Reframing affordability into emotional value.
              </dd>
            </div>

            <div className="border-t border-[#111111]/12 pt-8 md:border-l md:border-t-0 md:pl-10">
              <dt className="text-xs uppercase tracking-[0.18em] text-[#8A8A84]">
                Deliverables
              </dt>
              <dd className="mt-5 text-[1.1rem] leading-[1.5] text-[#2E2E2B]">
                Campaign Platform
                <br />
                Customer Experience
                <br />
                Film and Digital Concepts
              </dd>
            </div>
          </dl>
        </section>

        <section
          id="challenge"
          className="case-study-anchor"
        >
          <div className="flex items-baseline justify-between gap-4 border-t border-[#111111]/15 pt-5">
            <p className="text-xs uppercase tracking-[0.2em] text-[#6B6B6B] md:text-sm">
              The Challenge
            </p>
            <p className="text-xs uppercase tracking-[0.24em] tabular-nums text-[#9A9A93] md:text-sm">
              02 <span className="text-[#C7C6BF]">/ 08</span>
            </p>
          </div>

          <h2 className="font-display mt-14 max-w-[56rem] text-[2.4rem] font-medium leading-[0.98] tracking-[-0.055em] md:mt-20 md:text-[4rem]">
            How could Aldi make value feel less transactional and more human?
          </h2>

          <p className="mt-10 max-w-2xl text-xl leading-[1.5] text-[#2E2E2B] md:mt-12 md:text-2xl">
            Aldi has built strong trust around affordability. But price alone
            is increasingly difficult to own as an emotional position. The
            opportunity was not to change what Aldi offers, but to explore
            what those savings represent in people&apos;s lives.
          </p>

          <div className="mx-auto mt-16 grid max-w-5xl gap-10 border-y border-[#111111]/15 py-10 text-center md:mt-24 md:grid-cols-[0.65fr_1.35fr] md:items-center md:gap-16 md:text-left">
            <div className="flex flex-col items-center md:items-start">
              <p className="font-display text-[4.5rem] font-medium leading-none tracking-[-0.075em] md:text-[7rem]">
                78%
              </p>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#6B6B6B]">
                of financially pressured shoppers are buying cheaper
                groceries.
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.12em] text-[#8A8A84]">
                Source: Kantar, 2024
              </p>
            </div>

            <div className="grid gap-8 text-left sm:grid-cols-[1fr_auto_1fr] sm:items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-[#6B6B6B]">
                  Functional value
                </p>
                <p className="mt-4 leading-relaxed">
                  Lower prices
                  <br />
                  Saving money
                  <br />
                  Everyday affordability
                </p>
              </div>

              <p
                aria-hidden="true"
                className="justify-self-center text-2xl text-[#8A8A84] sm:rotate-[-90deg]"
              >
                ↓
              </p>

              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-[#6B6B6B]">
                  Emotional opportunity
                </p>
                <p className="mt-4 leading-relaxed">
                  What savings protect
                  <br />
                  What savings enable
                  <br />
                  What savings make possible
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="insight"
          className="case-study-anchor bg-[#F1F0EB] px-6 py-16 md:px-14 md:py-24"
        >
          <div className="section-heading-grid grid gap-10 md:grid-cols-[minmax(0,0.72fr)_minmax(0,1.8fr)]">
            <p className="section-eyebrow text-xs uppercase tracking-[0.18em] text-[#6B6B6B] md:text-sm">
              The Human Insight
            </p>

            <div className="max-w-5xl">
              <p className="font-display text-4xl font-medium leading-[1.02] tracking-[-0.055em] md:text-6xl">
                People don&apos;t budget because they want to.
              </p>

              <p className="mt-8 font-display text-4xl font-medium leading-[1.02] tracking-[-0.055em] text-[#65655F] md:text-6xl">
                They do it because they care.
              </p>
            </div>
          </div>

          <div className="-mx-6 mt-14 bg-[#E4E2D8] px-6 py-9 md:-mx-14 md:px-14 md:py-12">
            <div className="grid gap-9 md:grid-cols-[minmax(0,0.72fr)_minmax(0,1.8fr)]">
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-[#6B6B6B]">
                  Behind the basket
                </p>
                <p className="mt-4 max-w-[13rem] text-sm leading-relaxed text-[#6B6B6B]">
                  The reason rarely appears on the shopping list.
                </p>
              </div>

              <div>
                <p className="font-display max-w-3xl text-3xl font-medium leading-tight tracking-[-0.045em] md:text-4xl">
                  Every saving protects something beyond the shop.
                </p>

                <div className="mt-9 grid gap-x-8 gap-y-0 sm:grid-cols-2">
                  {[
                    ["01", "A family meal"],
                    ["02", "A child’s opportunity"],
                    ["03", "A personal goal"],
                    ["04", "A little extra security"],
                  ].map(([number, observation]) => (
                    <div
                      key={observation}
                      className="flex min-h-20 items-center justify-between gap-6 border-t border-[#111111]/15"
                    >
                      <p className="text-sm text-[#4F4F4A]">{observation}</p>
                      <p className="text-xs text-[#7C7C75]">{number}</p>
                    </div>
                  ))}
                </div>

                <p className="mt-9 max-w-2xl text-lg leading-relaxed text-[#5F5F5A]">
                  Comparing prices, planning meals and sticking to a list can be
                  acts of discipline and responsibility. Customers do not need
                  sympathy; they need their effort to be recognised.
                </p>
              </div>
            </div>
          </div>
        </section>

        <AldiStrategySequence />

        <section id="expressions" className="case-study-anchor">
          <div className="section-heading-grid grid gap-10 md:grid-cols-[minmax(0,0.72fr)_minmax(0,1.8fr)]">
            <p className="section-eyebrow text-xs uppercase tracking-[0.18em] text-[#6B6B6B] md:text-sm">
              Campaign Expression
            </p>

            <div>
              <h2 className="font-display max-w-4xl text-4xl font-medium leading-[1.02] tracking-[-0.055em] md:text-6xl">
                One strategy, expressed throughout everyday shopping.
              </h2>

              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[#6B6B6B]">
                The platform lives wherever customers experience Aldi. Each
                touchpoint recognises care without assuming why an individual
                customer chooses to save.
              </p>
            </div>
          </div>

          <div className="mt-20 space-y-28 md:space-y-40">
            <section className="grid gap-10 md:grid-cols-12 md:items-center">
              <div className="md:col-span-5">
                <p className="text-xs uppercase tracking-[0.14em] text-[#6B6B6B]">
                  01 · Receipt
                </p>
                <h3 className="font-display mt-5 text-4xl font-medium leading-tight tracking-[-0.05em] md:text-5xl">
                  A receipt that recognises the choice.
                </h3>
                <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#6B6B6B]">
                  At checkout, the concept adds one line beneath the existing
                  savings total. It repeats the exact amount saved and frames
                  it as money kept—recognising the decision without inventing a
                  personal goal.
                </p>
              </div>

              <div className="flex min-h-[520px] items-center justify-center bg-[#E8E5DB] p-8 md:col-span-7 md:p-14">
                <div className="w-full max-w-sm bg-[#FFFEFA] px-8 py-10 text-center">
                  <p className="text-sm font-bold tracking-[0.18em]">ALDI</p>
                  <div className="my-8 border-y border-dashed border-[#111111]/30 py-7">
                    <p className="text-xs uppercase tracking-[0.14em] text-[#6B6B6B]">
                      Today&apos;s saving
                    </p>
                    <p className="font-display mt-3 text-5xl font-medium tracking-[-0.06em]">
                      £8.40
                    </p>
                  </div>
                  <p className="font-display text-2xl font-medium leading-tight tracking-[-0.04em]">
                    You saved £8.40 today.
                    <br />
                    £8.40 kept for
                    <br />
                    whatever matters next.
                  </p>
                  <p className="mt-8 text-[0.65rem] uppercase tracking-[0.16em] text-[#8A8A84]">
                    Care, Not Compromise
                  </p>
                </div>
              </div>
            </section>

            <section className="grid gap-10 md:grid-cols-12 md:items-center">
              <div className="order-2 grid gap-5 bg-[#E8E5DB] p-7 sm:grid-cols-2 md:order-1 md:col-span-7 md:p-10">
                <div className="min-h-[420px] bg-[#102A43] p-7 text-[#F8F7F2]">
                  <p className="text-xs uppercase tracking-[0.14em] text-white/60">
                    Your savings
                  </p>
                  <p className="mt-2 text-sm text-white/70">This month</p>
                  <p className="font-display mt-12 text-6xl font-medium tracking-[-0.07em]">
                    £32.60
                  </p>
                  <div className="mt-28 border-t border-white/20 pt-5">
                    <p className="text-sm text-white/70">Over six months</p>
                    <p className="mt-2 text-2xl font-medium">£186.40</p>
                  </div>
                </div>

                <div className="min-h-[420px] bg-[#FFFEFA] p-7">
                  <p className="text-xs uppercase tracking-[0.14em] text-[#6B6B6B]">
                    What matters to you?
                  </p>
                  <p className="font-display mt-8 text-3xl font-medium leading-tight tracking-[-0.045em]">
                    Give your progress a meaning of your own.
                  </p>
                  <div className="mt-16 space-y-3 text-sm">
                    <p className="border-b border-[#111111]/15 pb-3">Family</p>
                    <p className="border-b border-[#111111]/15 pb-3">
                      Future plans
                    </p>
                    <p className="border-b border-[#111111]/15 pb-3">
                      Personal goals
                    </p>
                  </div>
                </div>
              </div>

              <div className="order-1 md:order-2 md:col-span-5">
                <p className="text-xs uppercase tracking-[0.14em] text-[#6B6B6B]">
                  02 · App Experience
                </p>
                <h3 className="font-display mt-5 text-4xl font-medium leading-tight tracking-[-0.05em] md:text-5xl">
                  Seeing value accumulate.
                </h3>
                <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#6B6B6B]">
                  The app helps customers recognise progress over time and
                  privately connect it to a goal they choose. No badges,
                  streaks or competition—this is reflection, not gamification.
                </p>
              </div>
            </section>

            <section>
              <div className="grid gap-10 md:grid-cols-12 md:items-start">
                <div className="md:col-span-5">
                  <p className="text-xs uppercase tracking-[0.14em] text-[#6B6B6B]">
                    03 · In-store
                  </p>
                  <h3 className="font-display mt-5 text-4xl font-medium leading-tight tracking-[-0.05em] md:text-5xl">
                    Bringing meaning into the everyday shop.
                  </h3>
                </div>

                <p className="max-w-2xl text-lg leading-relaxed text-[#6B6B6B] md:col-span-7 md:self-end">
                  The campaign appears sparingly in the environment. It
                  recognises thoughtful choices without covering the store in
                  emotional messaging or replacing useful price information.
                </p>
              </div>

              <div className="mt-12 grid gap-4 md:grid-cols-12 md:gap-5">
                {/* Dominant statement — the one you read first. Quiet setup,
                    bold payoff, centred so the space reads as intentional. */}
                <div className="flex min-h-[300px] flex-col justify-center bg-[#102A43] p-8 text-[#F8F7F2] md:col-span-8 md:min-h-[460px] md:p-14">
                  <p className="font-display text-2xl font-normal leading-[1.05] tracking-[-0.02em] text-white/40 md:text-[1.75rem]">
                    Good food today.
                  </p>
                  <p className="font-display mt-1 text-[2.6rem] font-medium leading-[0.94] tracking-[-0.05em] md:mt-2 md:text-[4.25rem]">
                    More room tomorrow.
                  </p>
                </div>

                {/* Secondary — smaller, cream, clearly subordinate */}
                <div className="flex min-h-[220px] flex-col justify-center bg-[#E8E5DB] p-8 text-[#111111] md:col-span-4 md:min-h-[460px] md:p-11">
                  <p className="font-display text-lg font-normal leading-[1.05] tracking-[-0.02em] text-[#6B6B6B] md:text-xl">
                    Value that leaves
                  </p>
                  <p className="font-display mt-1 text-[2rem] font-medium leading-[0.98] tracking-[-0.045em] md:mt-2 md:text-[2.6rem]">
                    space for what matters.
                  </p>
                </div>

                {/* Closing line — full width, inline emphasis */}
                <div className="flex min-h-[150px] items-center bg-[#102A43] p-8 text-[#F8F7F2] md:col-span-12 md:min-h-[190px] md:p-14">
                  <p className="font-display text-[2rem] font-medium leading-[1] tracking-[-0.045em] md:text-[3rem]">
                    <span className="font-normal text-white/40">
                      Your choices create{" "}
                    </span>
                    more than savings.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <div className="grid gap-10 md:grid-cols-12">
                <div className="md:col-span-5">
                  <p className="text-xs uppercase tracking-[0.14em] text-[#6B6B6B]">
                    04 · Hero Film
                  </p>
                  <h3 className="font-display mt-5 text-4xl font-medium leading-tight tracking-[-0.05em] md:text-5xl">
                    The yes that matters.
                  </h3>
                  <p className="mt-6 max-w-md text-lg leading-relaxed text-[#6B6B6B]">
                    A film that follows careful choices from the shopping list
                    to the moment they make possible.
                  </p>
                </div>

                <div className="md:col-span-7">
                  <div className="mt-9">
                    <HeroFilmFrames />
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="grid gap-10 md:grid-cols-12 md:items-end">
                <div className="md:col-span-5">
                  <CaseStudyImage
                    src="/images/aldi/aldi-everyday-2.webp"
                    alt="A quiet family moment at home"
                    className="aspect-[3/4]"
                  />
                </div>

                <div className="md:col-span-7 md:pb-4">
                  <p className="text-xs uppercase tracking-[0.14em] text-[#6B6B6B]">
                    05 · Social
                  </p>
                  <p className="font-display max-w-2xl text-3xl font-medium leading-tight tracking-[-0.045em] md:text-5xl">
                    Small choices. More room for the moments that matter.
                  </p>
                  <p className="mt-7 max-w-xl text-lg leading-relaxed text-[#6B6B6B]">
                    A portrait-led social system keeps the focus on ordinary
                    life beyond the shop. The writing connects practical
                    savings to possibility without inventing a personal story
                    for the customer.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </section>

        <section
          id="journey"
          className="case-study-anchor"
        >
          <div className="section-heading-grid grid gap-10 md:grid-cols-[minmax(0,0.72fr)_minmax(0,1.8fr)]">
            <p className="section-eyebrow text-xs uppercase tracking-[0.18em] text-[#6B6B6B] md:text-sm">
              Connected Journey
            </p>

            <h2 className="font-display max-w-4xl text-4xl font-medium leading-[1.02] tracking-[-0.055em] md:text-6xl">
              One idea. Four moments of recognition.
            </h2>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden bg-[#111111]/15 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                number: "01",
                phase: "Before the shop",
                action: "Reframe value",
                description:
                  "Film and social introduce saving as an expression of care, not sacrifice.",
                touchpoint: "Campaign + Social",
              },
              {
                number: "02",
                phase: "During the shop",
                action: "Support the choice",
                description:
                  "In-store messages recognise thoughtful decisions without interrupting useful price information.",
                touchpoint: "In-store",
              },
              {
                number: "03",
                phase: "At checkout",
                action: "Make progress visible",
                description:
                  "The receipt repeats the exact amount saved and frames it as money kept.",
                touchpoint: "Receipt",
              },
              {
                number: "04",
                phase: "After the shop",
                action: "Let meaning continue",
                description:
                  "The app helps customers connect accumulated savings to a goal they choose for themselves.",
                touchpoint: "App experience",
              },
            ].map(({ number, phase, action, description, touchpoint }) => (
              <article
                key={number}
                className="flex min-h-72 flex-col bg-[#E9E7DE] p-7 md:p-8"
              >
                <div className="flex items-center justify-between gap-5 text-xs uppercase tracking-[0.12em] text-[#6B6B6B]">
                  <p>{number}</p>
                  <p>{phase}</p>
                </div>

                <h3 className="font-display mt-12 text-3xl font-medium leading-tight tracking-[-0.045em]">
                  {action}
                </h3>
                <p className="mt-5 text-sm leading-relaxed text-[#5F5F5A]">
                  {description}
                </p>

                <p className="mt-auto border-t border-[#111111]/15 pt-5 text-xs uppercase tracking-[0.12em] text-[#6B6B6B]">
                  {touchpoint}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="reflection"
          className="case-study-anchor bg-[#F1F0EB] px-6 py-16 md:px-14 md:py-24"
        >
          <p className="text-xs uppercase tracking-[0.18em] text-[#6B6B6B] md:text-sm">
            Reflection
          </p>

          <h2 className="font-display mt-8 max-w-4xl text-4xl font-medium leading-[1.02] tracking-[-0.055em] md:text-5xl">
            Recognition without assumption.
          </h2>

          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-[#5F5F5A]">
            The platform is strongest when Aldi acknowledges the effort behind
            saving without claiming to know why any individual customer does
            it.
          </p>

          <div className="mt-14 grid gap-8 border-t border-[#111111]/15 pt-7 md:grid-cols-3">
            <div>
              <h3 className="text-xs uppercase tracking-[0.14em] text-[#6B6B6B]">
                What worked
              </h3>
              <p className="mt-4 leading-relaxed">
                The strategy builds on Aldi&apos;s established strength in
                affordability rather than attempting to replace it.
              </p>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-[0.14em] text-[#6B6B6B]">
                What required care
              </h3>
              <p className="mt-4 leading-relaxed">
                Emotional branding around money must remain respectful and
                avoid assuming an individual customer&apos;s circumstances.
              </p>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-[0.14em] text-[#6B6B6B]">
                What I would test
              </h3>
              <p className="mt-4 leading-relaxed">
                Customer response, emotional resonance, preferred
                personalisation and which touchpoints create genuine value.
              </p>
            </div>
          </div>

          <p className="mt-12 max-w-2xl text-lg font-medium leading-relaxed tracking-[-0.02em]">
            I learned that strong strategy can reveal new meaning inside a
            benefit people already understand.
          </p>
        </section>

        <section className="pb-4 pt-8 text-center">
          <p className="font-display mx-auto max-w-5xl text-4xl font-medium leading-[1.03] tracking-[-0.055em] md:text-7xl">
            Value is not only what remains on the receipt.
          </p>
          <p className="font-display mx-auto mt-6 max-w-5xl text-4xl font-medium leading-[1.03] tracking-[-0.055em] text-[#6B6B6B] md:text-7xl">
            It is what becomes possible afterwards.
          </p>

          <p className="mt-12 text-xs uppercase tracking-[0.18em] text-[#6B6B6B]">
            Care, Not Compromise
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-9">
            <a
              href="/presentations/aldi-brand-strategy-deck.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center gap-3 border-b border-[#111111] py-2 text-sm font-medium"
            >
              View full strategy deck <span aria-hidden="true">↗</span>
            </a>

            <Link
              href="/work/move-softly"
              className="inline-flex min-h-11 items-center gap-3 border-b border-[#111111]/35 py-2 text-sm text-[#6B6B6B] transition-colors hover:text-[#111111]"
            >
              Next investigation <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
