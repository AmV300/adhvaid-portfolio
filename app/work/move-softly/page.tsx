import { MoveSoftlyHero } from "@/components/MoveSoftlyHero";
import { SiteHeader } from "@/components/SiteHeader";
import { DayInMotion } from "@/components/DayInMotion";
import { DesignPrinciples } from "@/components/DesignPrinciples";
import { CampaignInAction } from "@/components/CampaignInAction";

export default function MoveSoftlyCaseStudy() {
  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#111111]">
      <SiteHeader />
      <MoveSoftlyHero />
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
  <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
    <div className="lg:col-span-7">
      <p className="text-sm uppercase tracking-[0.16em] text-[#6B6B6B]">
        Comfort as a constant companion
      </p>

      <h2 className="font-display mt-6 max-w-3xl text-5xl font-medium leading-[0.98] tracking-[-0.06em] md:text-7xl">
        Comfort isn&apos;t a break from the day. It is what helps you move
        through it.
      </h2>
    </div>

    <div className="lg:col-span-5 lg:pt-16">
      <p className="max-w-md text-lg leading-relaxed text-[#6B6B6B]">
        Move Softly is a conceptual footwear campaign that reframes comfort as
        quiet support: there in the commute, the rush, the long stretch and the
        walk home.
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
            Designed For
          </p>
          <p>Young professionals, creatives and commuters.</p>
        </div>

        <div className="grid gap-2 border-b border-[#111111]/15 py-5">
          <p className="text-sm uppercase tracking-[0.14em] text-[#6B6B6B]">
            Output
          </p>
          <p>Campaign narrative, visuals and experience touchpoints.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<DayInMotion />
<DesignPrinciples />
<CampaignInAction />
<section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
  <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
    <div className="lg:col-span-7">
      <p className="text-sm uppercase tracking-[0.16em] text-[#6B6B6B]">
        Reflection
      </p>

      <h2 className="font-display mt-6 max-w-3xl text-5xl font-medium leading-[0.98] tracking-[-0.06em] md:text-7xl">
        Comfort is most meaningful when it quietly keeps up.
      </h2>
    </div>

    <div className="lg:col-span-5 lg:pt-16">
      <p className="max-w-md text-lg leading-relaxed text-[#6B6B6B]">
        Move Softly explores a more human role for footwear: not as a reward
        after a demanding day, but as steady support throughout it. The
        campaign turns that thought into a visual system that follows real life
        in motion.
      </p>

      <div className="mt-12 border-t border-[#111111]/15 pt-5">
        <p className="text-sm uppercase tracking-[0.14em] text-[#6B6B6B]">
          Original Presentation
        </p>

        <a
          href="/presentations/move-softly.pdf"
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center gap-3 border-b border-[#111111] pb-1 text-lg transition-opacity hover:opacity-60"
        >
          View the original presentation
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
  </div>
</section>
    </main>
  );
}