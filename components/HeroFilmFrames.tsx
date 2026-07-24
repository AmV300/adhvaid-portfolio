import Image from "next/image";

type FilmFrameProps = {
  number: string;
  title: string;
  description: string;
  children: React.ReactNode;
};

function FilmFrame({ number, title, description, children }: FilmFrameProps) {
  return (
    <article>
      {children}

      <p className="mt-3 text-xs text-[#6B6B6B]">{number}</p>
      <h3 className="mt-1 text-sm font-medium">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[#6B6B6B]">
        {description}
      </p>
    </article>
  );
}

export function HeroFilmFrames() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <FilmFrame
        number="01"
        title="The weight of responsibility"
        description="Before everyone else wakes up, she plans for the people she loves."
      >
        <div className="relative aspect-[512/420] overflow-hidden bg-[#E8E5DB]">
          <Image
            src="/images/aldi/aldi-film.png"
            alt="A mother planning a household budget at a kitchen table"
            width={1536}
            height={1024}
            className="absolute left-0 top-0 h-auto w-[305%] max-w-none"
          />
        </div>
      </FilmFrame>

      <FilmFrame
        number="02"
        title="Every choice has a reason"
        description="She compares and chooses carefully because every choice is about more than today."
      >
        <div className="relative aspect-[512/420] overflow-hidden bg-[#E8E5DB]">
          <Image
            src="/images/aldi/aldi-film.png"
            alt="A mother comparing products in an Aldi store"
            width={1536}
            height={1024}
                        className="absolute -left-[105.4%] top-0 h-auto w-[315%] max-w-none"
                        />
        </div>
      </FilmFrame>

      <FilmFrame
        number="03"
        title="The store understands her"
        description="Small messages in the right places make her effort feel seen."
      >
        <div className="relative aspect-[512/420] overflow-hidden bg-[#E8E5DB]">
          <Image
            src="/images/aldi/aldi-film.png"
            alt="A mother shopping in an Aldi store"
            width={1536}
            height={1024}
className="absolute -left-[203.4%] top-0 h-auto w-[305%] max-w-none"          />
        </div>
      </FilmFrame>

      <FilmFrame
        number="04"
        title="The moment of recognition"
        description="The receipt reminds her what today’s choices make possible."
      >
        <div className="relative aspect-[604/377] overflow-hidden bg-[#E8E5DB]">
          <Image
            src="/images/aldi/aldi-film.png"
            alt="An Aldi receipt showing money saved today"
            width={1536}
            height={1024}
            className="absolute left-0 top-[-141%] h-auto w-[254%] max-w-none"
          />
        </div>
      </FilmFrame>

      <FilmFrame
        number="05"
        title="The yes that matters"
        description="Because of today, she can say yes to the moments that matter most."
      >
        <div className="relative aspect-[604/377] overflow-hidden bg-[#E8E5DB]">
          <Image
            src="/images/aldi/aldi-film.png"
            alt="A mother and child celebrating a school-trip opportunity"
            width={1536}
            height={1024}
            className="absolute -left-full top-[-141%] h-auto w-[254%] max-w-none"
          />
        </div>
      </FilmFrame>
    </div>
  );
}