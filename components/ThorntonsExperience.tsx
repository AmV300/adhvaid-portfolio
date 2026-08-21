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
    <svg
      viewBox="0 0 160 210"
      className={className}
      role="img"
      aria-label="Simplified cocoa pod symbol"
    >
      <path className="thorntons-pod-line" d="M78 17C41 44 25 87 35 130c9 38 34 61 48 67 16-8 42-35 47-76 6-45-17-84-52-104Z" />
      <path className="thorntons-pod-line thorntons-pod-line--late" d="M78 19c14 29 18 59 11 88-7 31-7 60-4 87M78 19C59 50 55 83 63 111c8 29 13 55 20 83" />
      {[61, 86, 112, 138].map((cy) => (
        <ellipse key={cy} className="thorntons-pod-seed" cx="78" cy={cy} rx="11" ry="7" />
      ))}
      <path className="thorntons-pod-line thorntons-pod-line--late" d="M86 23c28-13 49-5 60 2-22 5-32 20-37 38" />
    </svg>
  );
}

export function ThorntonsExperience() {
  const rootRef = useRef<HTMLElement>(null);

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

      <section className="thorntons-positioning" aria-label="Competitive positioning">
        <p className="thorntons-section-label">The positioning problem</p>
        <div className="thorntons-axis">
          <div className="thorntons-axis-labels"><span>Mass</span><span>Premium</span></div>
          <div className="thorntons-axis-line"><span className="thorntons-axis-dot" /></div>
          <p>Thorntons</p>
        </div>
        <div className="thorntons-axis thorntons-axis--answer">
          <div className="thorntons-axis-labels"><span>Traditional</span><span>Contemporary craft</span></div>
          <div className="thorntons-axis-line"><span className="thorntons-axis-dot" /></div>
          <p>Repositioning the value of heritage</p>
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
          <div>
            <p className="thorntons-section-label">The cocoa signature</p>
            <h3>From ingredient to imprint.</h3>
            <p>The symbol reconnects the finished chocolate with where its character begins.</p>
          </div>
          <div className="thorntons-symbol-stage">
            <CocoaMark className="thorntons-cocoa-svg" />
            <span>Engraved</span><span>Embossed</span><span>Stamped</span>
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
          <h2>One identity.<br />Different expressions of chocolate.</h2>
          <p>A proposed range architecture turns the original mockups into a coherent product family.</p>
        </div>
        <div className="thorntons-pack-stack" aria-label="Concept packaging range">
          <article className="thorntons-pack thorntons-pack--dark">
            <CocoaMark />
            <span>Thorntons</span><strong>70% Dark</strong><small>Single origin · Ecuador</small>
          </article>
          <article className="thorntons-pack thorntons-pack--caramel">
            <CocoaMark />
            <span>Thorntons</span><strong>Sea Salt Caramel</strong><small>Milk chocolate · 36% cocoa</small>
          </article>
          <article className="thorntons-pack thorntons-pack--signature">
            <CocoaMark />
            <span>Thorntons</span><strong>Signature Collection</strong><small>24 chocolates</small>
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
          <div className="thorntons-gift-lid"><span>Thorntons</span><CocoaMark /></div>
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
              <Image src="/images/thorntons/atelier-discover.png" fill sizes="70vw" alt="Embossed dark chocolate bar surrounded by cocoa nibs and hazelnuts" />
            </article>
            <article>
              <span>02 / Make</span><h3>Temper</h3><p>Learn the movement, temperature and patience behind the finish.</p>
              <Image src="/images/thorntons/atelier-temper.png" fill sizes="70vw" alt="Chocolatier tempering melted chocolate on a marble slab" />
            </article>
            <article>
              <span>03 / Personalise</span><h3>Finish</h3><p>Create the bar, its label and the moment it is given.</p>
              <Image src="/images/thorntons/atelier-finish.png" fill sizes="70vw" alt="Hands holding a ribbon-tied Thorntons gift box" />
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
        <Image src="/images/thorntons/gift-box-open.png" fill sizes="100vw" alt="Open box of assorted dark chocolates dusted with cocoa" />
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
