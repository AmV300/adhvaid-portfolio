import Link from "next/link";
import { CaseStudyImage } from "@/components/CaseStudyImage";
import { CaseStudyHero } from "@/components/CaseStudyHero";
import { HeroFilmFrames } from "@/components/HeroFilmFrames";
import { CaseStudyNav } from "@/components/CaseStudyNav";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { SiteHeader } from "@/components/SiteHeader";
const navigation = [
  { label: "Overview", href: "#overview" },
  { label: "Big Idea", href: "#big-idea" },
  { label: "Insight", href: "#insight" },
  { label: "Strategy", href: "#strategy" },
  { label: "Process", href: "#process" },
  { label: "Experience", href: "#experience" },
  { label: "Campaign", href: "#campaign" },
  { label: "Reflection", href: "#reflection" },
];

const processSteps = [
  "Research",
  "Insight",
  "Strategy",
  "Experience",
  "Campaign",
];

export default function AldiCaseStudy() {
  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#111111]">
      <SiteHeader />

      <CaseStudyHero
  eyebrow="Aldi UK · Independent Spec Project"
  title={
    <>
      Care,
      <br />
      Not Compromise
    </>
  }
  summary="Reframing value from what people save to what those savings make possible."
  imageSrc="/images/aldi/aldi-cover.png"
  imageAlt="A mother helping her child with schoolwork at home"
  meta="Brand Strategy · Campaign Platform"
  disclaimer="Not affiliated with or endorsed by Aldi."
/>

     <CaseStudyNav items={navigation} />

<div className="mx-auto max-w-7xl px-6 pb-28 pt-16 md:px-10 md:pt-20">
  <article className="max-w-4xl space-y-28">
          <section id="overview" className="scroll-mt-10">
            <p className="text-sm uppercase tracking-[0.16em] text-[#6B6B6B]">
              Project Overview
            </p>

            <h2 className="font-display mt-5 max-w-3xl text-4xl font-medium leading-tight tracking-[-0.05em] md:text-5xl">
              Aldi has earned trust through price. This project explores how it
              could earn recognition through care.
            </h2>

            <div className="mt-10 grid border-t border-[#111111]/15 sm:grid-cols-2">
              <div className="border-b border-[#111111]/15 py-5 sm:pr-8">
                <p className="text-xs uppercase tracking-[0.14em] text-[#6B6B6B]">
                  Challenge
                </p>
                <p className="mt-2 leading-relaxed">
                  Move beyond a purely transactional relationship with
                  price-conscious customers.
                </p>
              </div>

              <div className="border-b border-[#111111]/15 py-5 sm:pl-8">
                <p className="text-xs uppercase tracking-[0.14em] text-[#6B6B6B]">
                  Opportunity
                </p>
                <p className="mt-2 leading-relaxed">
                  Make the everyday discipline of budgeting feel recognised,
                  useful and human.
                </p>
              </div>

              <div className="border-b border-[#111111]/15 py-5 sm:pr-8">
                <p className="text-xs uppercase tracking-[0.14em] text-[#6B6B6B]">
                  Output
                </p>
                <p className="mt-2 leading-relaxed">
                  A positioning platform, customer journey, experience ideas and
                  campaign concept.
                </p>
              </div>

              <div className="border-b border-[#111111]/15 py-5 sm:pl-8">
                <p className="text-xs uppercase tracking-[0.14em] text-[#6B6B6B]">
                  Context
                </p>
                <p className="mt-2 leading-relaxed">
                  Independent brand strategy and campaign concept for Aldi UK.
                </p>
              </div>
            </div>
          </section>

          <section id="role" className="scroll-mt-10">
            <p className="text-sm uppercase tracking-[0.16em] text-[#6B6B6B]">
              My Role
            </p>

            <div className="mt-5 grid gap-8 border-t border-[#111111]/15 pt-6 md:grid-cols-2">
              <p className="font-display text-3xl font-medium leading-tight tracking-[-0.04em]">
                Independent strategy and creative concept development.
              </p>

              <ul className="space-y-2 text-[#6B6B6B]">
                <li>Research synthesis</li>
                <li>Consumer insight and customer journey</li>
                <li>Brand positioning and platform</li>
                <li>Experience concept development</li>
                <li>Campaign and social content direction</li>
              </ul>
            </div>
          </section>

          <section
            id="big-idea"
            className="scroll-mt-10 border-y border-[#111111]/15 py-16 md:py-24"
          >
            <p className="text-sm uppercase tracking-[0.16em] text-[#6B6B6B]">
              The Big Idea
            </p>

            <h2 className="font-display mt-8 max-w-4xl text-5xl font-medium leading-[0.96] tracking-[-0.065em] md:text-7xl">
              Care isn&apos;t measured by what you spend.
              <br />
              <span className="text-[#6B6B6B]">
                It&apos;s measured by what you make possible.
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#6B6B6B]">
              Every list, every choice and every small no can lead to the yes
              that matters. The platform gives emotional meaning to the savings
              Aldi already enables.
            </p>
          </section>

          <section id="insight" className="scroll-mt-10">
            <p className="text-sm uppercase tracking-[0.16em] text-[#6B6B6B]">
              The Human Insight
            </p>

            <h2 className="font-display mt-5 max-w-3xl text-4xl font-medium leading-tight tracking-[-0.05em] md:text-5xl">
              People don&apos;t budget because they want to. They budget because
              they care.
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="bg-[#E8E5DB] p-6 md:p-8">
                <p className="text-xs uppercase tracking-[0.14em] text-[#6B6B6B]">
                  Audience
                </p>
                <p className="font-display mt-4 text-3xl font-medium tracking-[-0.04em]">
                  Emma, 32
                </p>
                <p className="mt-4 leading-relaxed text-[#6B6B6B]">
                  A primary school teacher and mother of two in Leeds. She plans
                  meals, checks prices and sticks to a list so she can give her
                  children opportunities without added stress.
                </p>
              </div>

              <div className="border border-[#111111]/15 p-6 md:p-8">
                <p className="text-xs uppercase tracking-[0.14em] text-[#6B6B6B]">
                  Customer Journey
                </p>
                <div className="mt-5 space-y-5">
                  <p>
                    <span className="font-medium">Before:</span> determined and
                    hopeful while planning carefully.
                  </p>
                  <p>
                    <span className="font-medium">During:</span> focused, but
                    weighed down by constant trade-offs.
                  </p>
                  <p>
                    <span className="font-medium">After:</span> relieved and
                    proud when the total confirms her effort.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="strategy" className="scroll-mt-10">
            <p className="text-sm uppercase tracking-[0.16em] text-[#6B6B6B]">
              Strategic Response
            </p>

            <h2 className="font-display mt-5 text-4xl font-medium tracking-[-0.05em] md:text-5xl">
              Bring care into the everyday.
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="border-t border-[#111111]/20 pt-5">
                <p className="text-sm text-[#6B6B6B]">01</p>
                <h3 className="mt-4 text-lg font-medium">
                  Build relationships, not transactions
                </h3>
                <p className="mt-3 leading-relaxed text-[#6B6B6B]">
                  Show up before, during and after every shop.
                </p>
              </div>

              <div className="border-t border-[#111111]/20 pt-5">
                <p className="text-sm text-[#6B6B6B]">02</p>
                <h3 className="mt-4 text-lg font-medium">
                  Make everyday decisions meaningful
                </h3>
                <p className="mt-3 leading-relaxed text-[#6B6B6B]">
                  Recognise the care behind customers&apos; choices, not just the
                  money they save.
                </p>
              </div>

              <div className="border-t border-[#111111]/20 pt-5">
                <p className="text-sm text-[#6B6B6B]">03</p>
                <h3 className="mt-4 text-lg font-medium">
                  Reduce mental load
                </h3>
                <p className="mt-3 leading-relaxed text-[#6B6B6B]">
                  Use personalisation to simplify planning, never to encourage
                  unnecessary spending.
                </p>
              </div>
            </div>
          </section>

          <section id="process" className="scroll-mt-10">
            <p className="text-sm uppercase tracking-[0.16em] text-[#6B6B6B]">
              Process
            </p>

            <h2 className="font-display mt-5 text-4xl font-medium tracking-[-0.05em] md:text-5xl">
              From market pressure to a human platform.
            </h2>

            <div className="mt-10">
              <ProcessTimeline steps={processSteps} />
            </div>

            <div className="mt-12 grid gap-6 border-t border-[#111111]/15 pt-6 md:grid-cols-2">
              <p className="font-display text-2xl font-medium tracking-[-0.04em]">
                The strategic shift
              </p>

              <div className="space-y-3 text-[#6B6B6B]">
                <p>Saves money → Recognises why people save</p>
                <p>Transactional → Relationship driven</p>
                <p>Price-led → People-led</p>
                <p>Functional value → Emotional value</p>
              </div>
            </div>
          </section>

          <section id="experience" className="scroll-mt-10">
            <CaseStudyImage
  src="/images/aldi/aldi-everyday-2.webp"
  alt="A quiet moment at home representing the care behind everyday choices"
className="mb-10 max-w-md aspect-[3/4]"
/>
            <p className="text-sm uppercase tracking-[0.16em] text-[#6B6B6B]">
              Brand Experiences
            </p>

            <h2 className="font-display mt-5 text-4xl font-medium tracking-[-0.05em] md:text-5xl">
              Care made tangible before, during and after the shop.
            </h2>

            <div className="mt-10 divide-y divide-[#111111]/15 border-y border-[#111111]/15">
              <div className="grid gap-4 py-7 md:grid-cols-3">
                <p className="font-display text-3xl font-medium">The App</p>
                <p className="md:col-span-2">
                  A planning companion, not another loyalty programme. Meal
                  planning, shared family lists, budget tracking and savings
                  milestones make preparation simpler and calmer.
                </p>
              </div>

              <div className="grid gap-4 py-7 md:grid-cols-3">
                <p className="font-display text-3xl font-medium">In-store</p>
                <p className="md:col-span-2">
                  Store language moves beyond price claims to recognise the
                  effort behind careful choices: “Planning ahead looks good on
                  you.”
                </p>
              </div>

              <div className="grid gap-4 py-7 md:grid-cols-3">
                <p className="font-display text-3xl font-medium">Receipt</p>
                <p className="md:col-span-2">
                  The receipt extends the relationship by showing what today’s
                  savings make possible: “One step closer to the school trip.”
                </p>
              </div>
            </div>
          </section>

          <section id="campaign" className="scroll-mt-10">
            <p className="text-sm uppercase tracking-[0.16em] text-[#6B6B6B]">
              Campaign Expression
            </p>

            <h2 className="font-display mt-5 text-4xl font-medium tracking-[-0.05em] md:text-5xl">
              A quiet acknowledgement of everyday care.
            </h2>

            <HeroFilmFrames />

            <div className="mt-10 grid gap-px overflow-hidden bg-[#111111]/15 sm:grid-cols-5">
              {[
                "She plans carefully.",
                "She compares and considers.",
                "She chooses for more than today.",
                "Her effort is recognised.",
                "She can say yes to tomorrow.",
              ].map((scene, index) => (
                <div key={scene} className="min-h-48 bg-[#E8E5DB] p-5">
                  <p className="text-xs text-[#6B6B6B]">0{index + 1}</p>
                  <p className="mt-8 text-sm leading-relaxed">{scene}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 border-l-2 border-[#D9B75D] pl-5">
              <p className="font-display text-2xl font-medium tracking-[-0.04em]">
                Stories and posts that reflect real life.
              </p>
              <p className="mt-3 max-w-2xl leading-relaxed text-[#6B6B6B]">
                Helpful social content celebrates careful choices rather than
                encouraging more spending: practical meal-planning carousels,
                relatable Stories and useful Reels.
              </p>
            </div>
          </section>

          <section
            id="reflection"
            className="scroll-mt-10 border-t border-[#111111]/15 pt-12"
          ><CaseStudyImage
  src="/images/aldi/aldi-tomorrow.png"
  alt="A parent watching their child walk to school"
  className="mb-10 aspect-[3/2]"
/>
            <p className="text-sm uppercase tracking-[0.16em] text-[#6B6B6B]">
              Reflection
            </p>

            <h2 className="font-display mt-5 max-w-3xl text-4xl font-medium leading-tight tracking-[-0.05em] md:text-5xl">
              The strategy does not change what Aldi sells. It changes what
              those savings mean.
            </h2>

            <p className="mt-7 max-w-2xl leading-relaxed text-[#6B6B6B]">
              This project explored how a well-established functional promise
              can become more emotionally meaningful when it acknowledges the
              discipline, pride and care behind everyday budgeting.
            </p>
          </section>

          <section className="border-t border-[#111111]/15 pt-12">
            <a
              href="/presentations/aldi-brand-strategy-deck.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 border-b border-[#111111] pb-1 text-sm font-medium transition-opacity hover:opacity-60"
            >
              View the original presentation <span aria-hidden="true">↗</span>
            </a>

            <Link
              href="/#work"
              className="ml-8 inline-flex items-center gap-3 border-b border-[#111111]/30 pb-1 text-sm text-[#6B6B6B] transition-colors hover:text-[#111111]"
            >
              Back to selected work <span aria-hidden="true">←</span>
            </Link>
          </section>
        </article>
      </div>
    </main>
  );
}