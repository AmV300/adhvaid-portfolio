import Image from "next/image";

export function HomeOpeningSequence() {
  return (
    <section className="cinema-hero" aria-labelledby="home-name">
      <a className="cinema-skip" href="#investigations">Skip to selected work</a>
      <Image
        src="/images/home/golden-window.png"
        alt="Golden afternoon light through autumn trees, seen through a narrow, dark opening."
        fill
        preload
        quality={90}
        sizes="100vw"
        className="cinema-image"
      />
      <header className="cinema-header">
        <nav aria-label="Primary navigation">
          <a href="#investigations">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Let’s talk <span aria-hidden="true">↗</span></a>
        </nav>
      </header>
      <div className="cinema-title">
        <h1 id="home-name">Adhvaid <span>MV.</span></h1>
        <p className="cinema-eyebrow">Creative strategy &amp; visual storytelling</p>
      </div>
      <div className="cinema-bottom">
        <a href="#investigations" className="cinema-work-link">
          <span>Explore my work</span><span className="cinema-arrow" aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}
