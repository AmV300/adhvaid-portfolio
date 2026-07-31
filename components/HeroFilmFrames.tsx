import Image from "next/image";

export function HeroFilmFrames() {
  return (
    <div className="relative aspect-[604/377] w-full max-w-2xl overflow-hidden bg-[#E8E5DB]">
      <Image
        src="/images/aldi/aldi-film.png"
        alt="A mother and child sharing the moment a careful saving makes a school trip possible"
        width={1536}
        height={1024}
        className="absolute -left-full top-[-141%] h-auto w-[254%] max-w-none"
      />
    </div>
  );
}
