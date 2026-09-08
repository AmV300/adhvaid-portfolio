"use client";

import { useInViewOnce } from "@/lib/useInViewOnce";

export function AboutContact() {
  const { ref, isVisible } = useInViewOnce<HTMLElement>({ threshold: 0.12 });

  return (
    <section
      ref={ref}
      id="about"
      data-visible={isVisible}
      aria-labelledby="about-title"
      className="about-contact"
    >
      <div className="about-contact-shell">
        <div className="about-contact-intro">
          <div className="about-contact-heading">
            <p className="about-contact-label">About</p>
            <h2 id="about-title">A little about how I see things.</h2>
          </div>

          <p className="about-contact-copy">
            I’m drawn to the moment when a small observation starts to reveal
            something larger. Strategy helps me find its shape; writing and
            film help me turn it into something people can feel.
          </p>
        </div>

        <div id="contact" className="about-contact-line">
          <p className="about-contact-label">Contact</p>

          <a
            href="mailto:adhvaidmv@gmail.com"
            className="about-email"
          >
            <span>adhvaidmv@gmail.com</span>
            <span aria-hidden="true">↗</span>
          </a>

          <div className="about-secondary-links">
            <a href="/documents/adhvaid-mv-resume.pdf" download>
              CV <span aria-hidden="true">↓</span>
            </a>
            <a
              href="https://www.linkedin.com/in/adhvaid-mv/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <p className="about-copyright">© 2026 Adhvaid MV</p>
      </div>
    </section>
  );
}
