export function AboutPreview() {
  return (
    <section className="border-y border-[#111111]/15">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:px-10 md:py-28">
        <p className="text-sm uppercase tracking-[0.16em] text-[#6B6B6B]">
          About
        </p>

        <div>
          <h2 className="font-display max-w-xl text-3xl font-medium leading-tight tracking-[-0.045em] md:text-4xl">
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
  );
}