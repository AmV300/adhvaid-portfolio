export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-16 md:px-10 md:py-20"
    >
      <div>
        <p className="text-sm uppercase tracking-[0.16em] text-[#6B6B6B]">
          Contact
        </p>

        <h2 className="font-display mt-4 text-4xl font-medium tracking-[-0.055em] md:text-6xl">
          Let&apos;s make something
          <br />
          meaningful.
        </h2>
      </div>

      <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm">
        <a
          href="mailto:your-email@example.com"
          className="border-b border-[#111111] pb-1 transition-opacity hover:opacity-60"
        >
          Email me
        </a>

        <a
          href="#"
          className="border-b border-[#111111] pb-1 transition-opacity hover:opacity-60"
        >
          LinkedIn
        </a>

        <a
          href="#"
          className="border-b border-[#111111] pb-1 transition-opacity hover:opacity-60"
        >
          Download CV
        </a>
      </div>

      <p className="text-xs text-[#6B6B6B]">
        © 2026 Adhvaid MV. Selected Work.
      </p>
    </footer>
  );
}