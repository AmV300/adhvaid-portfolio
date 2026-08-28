"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { SiteHeader } from "@/components/SiteHeader";

function clamp(value: number) {
  return Math.min(1, Math.max(0, value));
}

function CocoaMark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`thorntons-cocoa-mark ${className}`}
      role="img"
      aria-label="Thorntons cocoa pod mark"
    />
  );
}

export function ThorntonsExperience() {
  const rootRef = useRef<HTMLElement>(null);
  const positioningRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const sections = Array.from(root.querySelectorAll<HTMLElement>("[data-scroll-progress]"));
    let frame = 0;

    const update = () => {
      frame = 0;
      const viewport = window.innerHeight;
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        // Let each composition complete while it is still comfortably in view.
        // The previous viewport-to-full-section calculation only reached 1 as
        // the section was leaving, which made the resolved state easy to miss.
        const travel = Math.max(rect.height - viewport, viewport);
        const rawProgress = (-rect.top + viewport * 0.15) / travel;
        const progress = clamp(rawProgress / 0.72);
        section.style.setProperty("--progress", progress.toFixed(4));
      });
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  useEffect(() => {
    const section = positioningRef.current;
    if (!section) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      section.style.setProperty("--positioning-reveal", "0%");
      section.classList.add("is-visible", "is-complete");
      return;
    }

    let frame = 0;
    const update = () => {
      frame = 0;

      const rect = section.getBoundingClientRect();
      const viewport = window.innerHeight;
      const start = viewport * 0.2;
      const end = viewport * -0.18;
      const progress = clamp((start - rect.top) / (start - end));

      section.style.setProperty(
        "--positioning-reveal",
        `${((1 - progress) * 100).toFixed(2)}%`,
      );

      section.classList.toggle("is-visible", progress > 0.01);
      section.classList.toggle("is-complete", progress >= 0.985);
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return (
    <main ref={rootRef} className="thorntons-page">
      <div className="thorntons-shell-header">
        <SiteHeader />
      </div>

      <section className="thorntons-hero" aria-labelledby="thorntons-title">
        <div className="thorntons-hero-grain" aria-hidden="true" />
        <p className="thorntons-kicker">Thorntons / Independent speculative rebrand</p>
        <div className="thorntons-hero-mark-wrap">
          <Image
            src="/images/thorntons/thorntons-logo.png"
            width={2400}
            height={953}
            priority
            alt="Thorntons wordmark with cocoa pod symbol"
            className="thorntons-hero-mark"
          />
          <Image
            src="/images/thorntons/thorntons-tagline.png"
            width={2400}
            height={189}
            priority
            alt="Chocolate Heaven since 1911"
            className="thorntons-hero-tagline"
          />
        </div>
        <div className="thorntons-hero-copy">
          <h1 id="thorntons-title">Can heritage feel desirable again?</h1>
          <p>Brand repositioning · Visual identity · Brand experience</p>
        </div>
        <p className="thorntons-scroll-note">Scroll to unwrap the thinking</p>
      </section>

      <section id="problem" className="thorntons-strategy" data-scroll-progress>
        <div className="thorntons-strategy-sticky">
          <div className="thorntons-year-block">
            <p>The inheritance</p>
            <strong>1911</strong>
            <span>More than a century of recognition.</span>
          </div>
          <div className="thorntons-strategy-steps">
            <article>
              <span>01 / Recognition</span>
              <h2>A familiar name had lost its premium edge.</h2>
              <p>
                The original project identified a brand caught between mass accessibility and premium perception.
              </p>
            </article>
            <article>
              <span>02 / Competitive shift</span>
              <h2>Premium chocolate had moved on.</h2>
              <p>
                Distinctive packaging, product stories and experience made craft easier to see - while Thorntons remained familiar.
              </p>
            </article>
            <article>
              <span>03 / The tension</span>
              <h2>Known by many.<br />Desired by fewer.</h2>
              <p>Heritage remained. Its expression no longer carried the same desire.</p>
            </article>
          </div>
        </div>
      </section>

      <section
        ref={positioningRef}
        className="thorntons-positioning"
        aria-labelledby="thorntons-positioning-title"
      >
        <p className="thorntons-section-label">The positioning problem</p>
        <div className="thorntons-positioning-layout">
          <figure className="thorntons-map">
            <figcaption className="thorntons-map-caption">
              Perceptual map showing Thorntons moving from a familiar, mass-market
              position toward contemporary premium craft.
            </figcaption>

            <span className="thorntons-map-axis thorntons-map-axis--x" aria-hidden="true" />
            <span className="thorntons-map-axis thorntons-map-axis--y" aria-hidden="true" />

            <span className="thorntons-map-label thorntons-map-label--traditional">Traditional</span>
            <span className="thorntons-map-label thorntons-map-label--craft">Contemporary craft</span>
            <span className="thorntons-map-label thorntons-map-label--mass">Mass</span>
            <span className="thorntons-map-label thorntons-map-label--premium">Premium</span>

            <svg
              className="thorntons-map-journey"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="M 41 62 C 51 61, 64 44, 74.5 31.5" />
              <path className="thorntons-map-arrow" d="M 71.1 31.8 L 74.5 31.5 L 73.2 35.4" />
            </svg>

            <div className="thorntons-map-point thorntons-map-point--today">
              <span className="thorntons-map-dot" aria-hidden="true" />
              <p><strong>Thorntons today</strong><span>Familiar heritage</span></p>
            </div>
            <div className="thorntons-map-point thorntons-map-point--proposed">
              <span className="thorntons-map-dot" aria-hidden="true" />
              <p><strong>Proposed Thorntons</strong><span>Contemporary craft</span></p>
            </div>
          </figure>

          <div className="thorntons-positioning-statement">
            <h2 id="thorntons-positioning-title">
              From familiar heritage <em>to contemporary craft.</em>
            </h2>
            <p>
              The aim is not to abandon Thorntons&apos; heritage, but to make it signal
              quality, craftsmanship and desirability.
            </p>
          </div>
        </div>
      </section>

      <section id="question" className="thorntons-question" data-scroll-progress>
        <div className="thorntons-question-inner">
          <p>The strategic question</p>
          <h2>
            How could Thorntons make its heritage feel like evidence of quality,
            <em> rather than evidence of age?</em>
          </h2>
        </div>
      </section>

      <section className="thorntons-insight" data-scroll-progress>
        <p className="thorntons-section-label">The insight</p>
        <div className="thorntons-insight-chain" aria-label="Heritage becomes craft, and craft creates value">
          <span>Heritage</span><i>becomes</i><span>Craft</span><i>creates</i><span>Value</span>
        </div>
        <div className="thorntons-insight-statement">
          <h2>
            Heritage only creates value
            <em>when people can feel the craft behind it.</em>
          </h2>
          <p className="thorntons-insight-copy">
            Thorntons did not need to abandon its history. The opportunity was to make it relevant again through cocoa, making and contemporary indulgence.
          </p>
        </div>
        <div className="thorntons-shift">
          <div><span>From</span><p>Traditional high-street chocolate</p></div>
          <div><span>To</span><p>Contemporary British chocolate craftsmanship</p></div>
        </div>
      </section>

      <section id="direction" className="thorntons-direction" data-scroll-progress>
        <div className="thorntons-direction-heading">
          <p className="thorntons-section-label">Creative direction</p>
          <h2>From confectionery to chocolate craft.</h2>
        </div>
        <div className="thorntons-collage" aria-label="Creative direction imagery">
          <figure className="thorntons-collage-a">
            <Image src="/images/thorntons/cocoa-pod.jpg" fill sizes="(max-width: 800px) 75vw, 34vw" alt="Cocoa pod and cocoa beans in warm low light" />
            <figcaption>Tactile</figcaption>
          </figure>
          <figure className="thorntons-collage-b">
            <Image src="/images/thorntons/dark-chocolate.jpg" fill sizes="(max-width: 800px) 70vw, 30vw" alt="Dark chocolate pieces arranged on a black surface" />
            <figcaption>Rich</figcaption>
          </figure>
          <figure className="thorntons-collage-c">
            <Image src="/images/thorntons/chocolate-still-life.jpg" fill sizes="(max-width: 800px) 65vw, 26vw" alt="Chocolate still life on a warm cream surface" />
            <figcaption>Warm</figcaption>
          </figure>
        </div>
      </section>

      <section id="identity" className="thorntons-identity" data-scroll-progress>
        <p className="thorntons-section-label">Identity idea</p>
        <h2>An identity rooted in the ingredient itself.</h2>
        <div className="thorntons-logo-stage">
          <div className="thorntons-logo-lockup">
            <Image src="/images/thorntons/thorntons-logo.png" width={2400} height={953} alt="Refined Thorntons signature with cocoa pod" />
            <Image src="/images/thorntons/thorntons-tagline.png" width={2400} height={189} alt="Chocolate Heaven since 1911" className="thorntons-identity-tagline" />
          </div>
          <p>A familiar name, given a more crafted expression.</p>
        </div>
        <div className="thorntons-symbol-grid">
          <div className="thorntons-symbol-copy">
            <p className="thorntons-section-label">The cocoa signature</p>
            <h3>From ingredient to imprint.</h3>
            <p>The symbol reconnects the finished chocolate with where its character begins.</p>
          </div>
          <div className="thorntons-symbol-stage">
            <CocoaMark className="thorntons-cocoa-svg" />
            <p className="thorntons-symbol-note">One signature, shaped by the material it meets.</p>
            <div className="thorntons-application-grid">
              <article className="thorntons-application">
                <div className="thorntons-application-surface thorntons-application-surface--engraved">
                  <Image
                    src="/images/thorntons/cocoa-engraved.png"
                    fill
                    sizes="(max-width: 800px) calc(100vw - 3rem), 24vw"
                    alt="Cocoa pod mark engraved into dark chocolate"
                  />
                </div>
                <h4>Engraved</h4>
                <p>Recessed into dark chocolate.</p>
              </article>
              <article className="thorntons-application">
                <div className="thorntons-application-surface thorntons-application-surface--embossed">
                  <Image
                    src="/images/thorntons/cocoa-embossed.png"
                    fill
                    sizes="(max-width: 800px) calc(100vw - 3rem), 24vw"
                    alt="Cocoa pod mark embossed into warm cream paper"
                  />
                </div>
                <h4>Embossed</h4>
                <p>Pressed into warm cream packaging.</p>
              </article>
              <article className="thorntons-application">
                <div className="thorntons-application-surface thorntons-application-surface--stamped">
                  <Image
                    src="/images/thorntons/cocoa-stamped.png"
                    fill
                    sizes="(max-width: 800px) calc(100vw - 3rem), 24vw"
                    alt="Cocoa pod mark stamped in brown ink on uncoated paper"
                  />
                </div>
                <h4>Stamped</h4>
                <p>Printed on an uncoated wrapper.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="thorntons-palette" aria-label="Thorntons colour palette">
        <div className="thorntons-palette-panel thorntons-palette-cocoa">
          <p>Cocoa</p><span>#2E1C19</span>
        </div>
        <div className="thorntons-gold-rule" aria-hidden="true" />
        <div className="thorntons-palette-panel thorntons-palette-cream">
          <p>Cream</p><span>#EDE5DD</span>
        </div>
        <p className="thorntons-palette-caption">A palette taken from chocolate itself.</p>
      </section>

      <section id="packaging" className="thorntons-packaging" data-scroll-progress>
        <div className="thorntons-packaging-copy">
          <p className="thorntons-section-label">Packaging system</p>
          <h2>One identity.<br />Different<br /><span>expressions of</span><br />chocolate.</h2>
          <p>A proposed range architecture turns the original mockups into a coherent product family.</p>
        </div>
        <div className="thorntons-pack-stack" aria-label="Concept packaging range">
          <article className="thorntons-pack thorntons-pack--dark">
            <div className="thorntons-pack-brand">
              <CocoaMark />
              <span className="thorntons-pack-name">Thorntons</span>
            </div>
            <div className="thorntons-pack-product">
              <span>Origins</span>
              <strong>70%<br />Dark</strong>
            </div>
            <div className="thorntons-pack-info">
              <span>Single origin</span>
              <small>Ecuador · 90g</small>
            </div>
          </article>
          <article className="thorntons-pack thorntons-pack--caramel">
            <div className="thorntons-pack-brand">
              <CocoaMark />
              <span className="thorntons-pack-name">Thorntons</span>
            </div>
            <div className="thorntons-pack-product">
              <span>Indulgence</span>
              <strong>Sea Salt<br />Caramel</strong>
            </div>
            <div className="thorntons-pack-info">
              <span>Milk chocolate</span>
              <small>36% cocoa · 90g</small>
            </div>
          </article>
          <article className="thorntons-pack thorntons-pack--signature">
            <div className="thorntons-pack-brand">
              <CocoaMark />
              <span className="thorntons-pack-name">Thorntons</span>
            </div>
            <div className="thorntons-pack-product">
              <span>Gifting</span>
              <strong>Signature<br />Collection</strong>
            </div>
            <div className="thorntons-pack-info">
              <span>Assorted chocolates</span>
              <small>24 pieces · 290g</small>
            </div>
          </article>
        </div>
      </section>

      <section className="thorntons-gifting" data-scroll-progress>
        <div className="thorntons-gift-copy">
          <p className="thorntons-section-label">The gifting ritual</p>
          <h2>For someone worth savouring it with.</h2>
          <p>The brand becomes physical in the small pause before a box is opened.</p>
        </div>
        <div className="thorntons-gift-stage" aria-label="Thorntons gift box opening">
          <div className="thorntons-gift-lid"><span className="thorntons-gift-name">Thorntons</span><CocoaMark /></div>
          <div className="thorntons-gift-base">
            {Array.from({ length: 12 }).map((_, index) => <i key={index} />)}
          </div>
        </div>
      </section>

      <section className="thorntons-voice">
        <p className="thorntons-section-label">Brand voice</p>
        <article><span>Knowledgeable, never pretentious</span><h2>Dark cocoa. Roasted hazelnut. Nothing there by accident.</h2></article>
        <article><span>Indulgent, not excessive</span><h2>Made slowly. Worth eating slowly.</h2></article>
        <article><span>Warm, not ceremonial</span><h2>For sharing, gifting, or keeping entirely to yourself.</h2></article>
      </section>

      <section id="experience" className="thorntons-atelier" data-scroll-progress>
        <div className="thorntons-atelier-sticky">
          <div className="thorntons-atelier-intro">
            <p className="thorntons-section-label">Brand experience</p>
            <h2>Make the craft visible.</h2>
            <p>Thorntons Chocolate Atelier turns the repositioning into something people can participate in.</p>
          </div>
          <div className="thorntons-workbench">
            <article>
              <span>01 / Discover</span><h3>Choose</h3><p>Explore cocoa, flavour notes and inclusions.</p>
              <Image src="/images/thorntons/cocoa-texture.jpg" fill sizes="70vw" alt="Cocoa and chocolate texture" />
            </article>
            <article>
              <span>02 / Make</span><h3>Temper</h3><p>Learn the movement, temperature and patience behind the finish.</p>
              <Image src="/images/thorntons/workshop.jpg" fill sizes="70vw" alt="Chocolate-making workshop" />
            </article>
            <article>
              <span>03 / Personalise</span><h3>Finish</h3><p>Create the bar, its label and the moment it is given.</p>
              <Image src="/images/thorntons/box-mockup.png" fill sizes="70vw" alt="Original Thorntons box mockup held in two hands" />
            </article>
          </div>
        </div>
      </section>

      <section className="thorntons-measure">
        <div>
          <p className="thorntons-section-label">What success would mean</p>
          <h2>Measures, not manufactured results.</h2>
        </div>
        <dl>
          <div><dt>Brand</dt><dd>Stronger association with craftsmanship and premium quality.</dd></div>
          <div><dt>Engagement</dt><dd>Workshop participation, saves, shares and earned content.</dd></div>
          <div><dt>Commercial</dt><dd>Premium-range sales, gifting conversion and basket value.</dd></div>
          <div><dt>Experience</dt><dd>Repeat attendance and post-event purchase behaviour.</dd></div>
        </dl>
      </section>

      <section className="thorntons-finale">
        <Image src="/images/thorntons/gift-box-dark.jpg" fill sizes="100vw" alt="Open chocolate gift box in deep red light" />
        <div className="thorntons-finale-shade" />
        <div>
          <p>Thorntons / Speculative rebrand</p>
          <h2>A century of heritage,<br /><em>made desirable again.</em></h2>
          <span>Brand strategy · Identity · Experience</span>
        </div>
      </section>

      <section className="thorntons-handoff">
        <p>The brand world recedes. The portfolio continues.</p>
        <Link href="/work/aldi">Next investigation <span aria-hidden="true">→</span></Link>
        <Link href="/#investigations">All investigations</Link>
      </section>
    </main>
  );
}
