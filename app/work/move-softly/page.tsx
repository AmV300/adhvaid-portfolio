import Link from "next/link";
import type { Metadata } from "next";
import { MoveSoftlyHero } from "@/components/MoveSoftlyHero";
import { SiteHeader } from "@/components/SiteHeader";
import { DayInMotion } from "@/components/DayInMotion";
import { DesignPrinciples } from "@/components/DesignPrinciples";
import { CampaignInAction } from "@/components/CampaignInAction";
import { CampaignExtensions } from "@/components/CampaignExtensions";

export const metadata: Metadata = {
  title: "Move Softly",
  description:
    "A creative campaign investigation designed around the changing rhythms of everyday life.",
};

export default function MoveSoftlyCaseStudy() {
  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#111111]">
      <SiteHeader />
      <MoveSoftlyHero />
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="text-sm uppercase tracking-[0.16em] text-[#6B6B6B]">
              The Premise
            </p>

            <h2 className="font-display mt-6 max-w-3xl text-5xl font-medium leading-[0.98] tracking-[-0.06em] md:text-7xl">
              Relief shouldn&apos;t be something you wait for.
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pt-16">
            <p className="max-w-md text-lg leading-relaxed text-[#6B6B6B]">
              Most footwear advertising imagines the pause: the sofa, the
              weekend, the moment after. Move Softly asks what ease could feel
              like while life is still moving.
            </p>

            <div className="mt-12 border-t border-[#111111]/15">
              <div className="grid gap-2 border-b border-[#111111]/15 py-5">
                <p className="text-sm uppercase tracking-[0.14em] text-[#6B6B6B]">
                  Role
                </p>
                <p>Strategy, campaign concept and visual direction.</p>
              </div>

              <div className="grid gap-2 border-b border-[#111111]/15 py-5">
                <p className="text-sm uppercase tracking-[0.14em] text-[#6B6B6B]">
                  Audience
                </p>
                <p>Young professionals, creatives and commuters.</p>
              </div>

              <div className="grid gap-2 border-b border-[#111111]/15 py-5">
                <p className="text-sm uppercase tracking-[0.14em] text-[#6B6B6B]">
                  Output
                </p>
                <p>Campaign narrative, visual system and touchpoints.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#24372A] text-[#F5F1E8]">
        <div className="mx-auto flex min-h-[78svh] max-w-7xl flex-col justify-between px-6 py-16 md:px-10 md:py-20">
          <p className="text-xs uppercase tracking-[0.18em] text-white/60 md:text-sm">
            The Campaign Idea
          </p>

          <div className="py-16 md:py-20">
            <h2 className="font-display max-w-6xl text-[clamp(3.6rem,9vw,8rem)] font-medium leading-[0.86] tracking-[-0.075em]">
              Comfort that
              <br />
              doesn&apos;t clock out.
            </h2>

            <p className="mt-10 max-w-xl text-xl leading-relaxed text-white/70 md:text-2xl">
              Not a pause from real life. A steady presence through the rush,
              the stretch and the return.
            </p>
          </div>

          <div className="grid grid-cols-3 border-t border-white/20 pt-5 text-xs uppercase tracking-[0.14em] text-white/55">
            <p>The Rush</p>
            <p className="text-center">The Stretch</p>
            <p className="text-right">The Return</p>
          </div>
        </div>
      </section>

      <DayInMotion />
      <DesignPrinciples />
      <CampaignInAction />
      <CampaignExtensions />

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="text-sm uppercase tracking-[0.16em] text-[#6B6B6B]">
              Reflection
            </p>

            <h2 className="font-display mt-6 max-w-3xl text-5xl font-medium leading-[0.98] tracking-[-0.06em] md:text-7xl">
              Reliability is felt most when it never asks for attention.
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pt-16">
            <p className="max-w-md text-lg leading-relaxed text-[#6B6B6B]">
              Move Softly became less about promising softness and more about
              proving consistency. The campaign works when that promise remains
              present without asking the day—or the person moving through it—to
              slow down.
            </p>

            <p className="mt-8 max-w-md text-lg leading-relaxed text-[#6B6B6B]">
              The project taught me that emotional positioning becomes more
              convincing when it is expressed through a recognisable rhythm of
              life, not simply stated as a product benefit.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#E9E4D6] px-6 py-24 text-center md:px-10 md:py-32">
        <p className="font-display mx-auto max-w-5xl text-5xl font-medium leading-[0.95] tracking-[-0.065em] md:text-7xl">
          Comfort should not ask life to pause.
        </p>
        <p className="font-display mx-auto mt-5 max-w-5xl text-5xl font-medium leading-[0.95] tracking-[-0.065em] text-[#65705F] md:text-7xl">
          It should move with it.
        </p>

        <p className="mt-12 text-xs uppercase tracking-[0.18em] text-[#6B6B6B]">
          Move Softly
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-9">
          <a
            href="/presentations/move-softly.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center gap-3 border-b border-[#111111] py-2 text-sm font-medium"
          >
            View original presentation <span aria-hidden="true">↗</span>
          </a>

          <Link
            href="/work/aldi"
            className="inline-flex min-h-11 items-center gap-3 border-b border-[#111111]/35 py-2 text-sm text-[#6B6B6B] transition-colors hover:text-[#111111]"
          >
            Previous investigation <span aria-hidden="true">←</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
