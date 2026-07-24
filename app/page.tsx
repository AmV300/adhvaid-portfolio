const projects = [
  {
    number: "01",
    title: "Care, Not Compromise",
    client: "Aldi UK",
    type: "Brand Strategy · Campaign Platform",
    description:
      "A speculative strategy that reframes Aldi’s value around the care behind everyday choices.",
    colour: "bg-[#D9B75D]",
  },
  {
    number: "02",
    title: "Move Softly",
    client: "Concept Footwear Campaign",
    type: "Creative Strategy · Brand Identity",
    description:
      "A conceptual campaign exploring comfort as a constant companion through movement and emotion.",
    colour: "bg-[#DEDCD5]",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#111111]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
        <a href="#" className="text-sm font-semibold tracking-[-0.03em]">
          AM.
        </a>

        <a
          href="#contact"
          className="text-sm text-[#6B6B6B] transition-colors hover:text-[#111111]"
        >
          Let&apos;s talk
        </a>
      </nav>

      <section className="mx-auto flex min-h-[78vh] max-w-7xl flex-col justify-end px-6 pb-16 pt-20 md:px-10 md:pb-24">
        <p className="mb-7 text-sm uppercase tracking-[0.16em] text-[#6B6B6B]">
          Adhvaid MV · Brand Strategy & Creative Thinking
        </p>

        <h1 className="max-w-5xl text-5xl font-medium leading-[0.98] tracking-[-0.065em] sm:text-7xl md:text-8xl">
          Ideas grounded in insight.
          <br />
          Designed for people.
        </h1>

        <div className="mt-10 flex flex-col gap-6 border-t border-[#111111]/15 pt-6 md:flex-row md:items-end md:justify-between">
          <p className="max-w-md text-base leading-relaxed text-[#6B6B6B] md:text-lg">
            I develop strategy-led brand ideas, campaigns and creative concepts
            that make brands feel more meaningful.
          </p>

          <a
            href="#work"
            className="inline-flex w-fit items-center gap-3 border-b border-[#111111] pb-1 text-sm font-medium transition-opacity hover:opacity-60"
          >
            View selected work <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>

      <section
        id="work"
        className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28"
      >
        <div className="mb-10 flex items-baseline justify-between border-b border-[#111111]/15 pb-4">
          <h2 className="text-sm uppercase tracking-[0.16em] text-[#6B6B6B]">
            Selected Work
          </h2>
          <p className="text-sm text-[#6B6B6B]">02 case studies</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <a
              key={project.number}
              href="#"
              className="group block focus:outline-none focus:ring-2 focus:ring-[#111111] focus:ring-offset-4"
              aria-label={`View ${project.title} case study`}
            >
              <article
                className={`flex min-h-[460px] flex-col justify-between p-6 transition-transform duration-300 group-hover:-translate-y-1 md:min-h-[560px] md:p-8 ${project.colour}`}
              >
                <div className="flex items-start justify-between">
                  <p className="text-sm">{project.number}</p>
                  <span
                    className="text-2xl transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </div>

                <div>
                  <p className="mb-3 text-sm text-[#111111]/65">
                    {project.client}
                  </p>
                  <h3 className="max-w-md text-4xl font-medium leading-[0.95] tracking-[-0.055em] md:text-5xl">
                    {project.title}
                  </h3>
                  <p className="mt-6 max-w-sm text-sm leading-relaxed text-[#111111]/70">
                    {project.description}
                  </p>
                  <p className="mt-8 text-xs uppercase tracking-[0.12em] text-[#111111]/60">
                    {project.type}
                  </p>
                </div>
              </article>
            </a>
          ))}
        </div>

        <p className="mt-6 text-sm text-[#6B6B6B]">
          More work coming soon.
        </p>
      </section>

      <section className="border-y border-[#111111]/15">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:px-10 md:py-28">
          <p className="text-sm uppercase tracking-[0.16em] text-[#6B6B6B]">
            About
          </p>

          <div>
            <h2 className="max-w-xl text-3xl font-medium leading-tight tracking-[-0.045em] md:text-4xl">
              I connect consumer understanding with clear strategy and creative
              execution.
            </h2>

            <p className="mt-6 max-w-lg leading-relaxed text-[#6B6B6B]">
              My work explores how brands can become more human through
              thoughtful positioning, emotional insight and integrated campaign
              thinking.
            </p>
          </div>
        </div>
      </section>

      <footer
        id="contact"
        className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-16 md:px-10 md:py-20"
      >
        <div>
          <p className="text-sm uppercase tracking-[0.16em] text-[#6B6B6B]">
            Contact
          </p>
          <h2 className="mt-4 text-4xl font-medium tracking-[-0.055em] md:text-6xl">
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
    </main>
  );
}