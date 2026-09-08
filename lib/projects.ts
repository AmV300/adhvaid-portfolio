export type Project = {
  number: string;
  title: string;
  client: string;
  type: string;
  question: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
  imagePosition: "left" | "right";
  status: string;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "Care, Not Compromise",
    client: "Aldi UK",
    type: "Brand Strategy · Campaign Platform",
    question: "How can Aldi make value feel more human?",
    description:
      "Reframing everyday savings as an expression of care, not compromise.",
    href: "/work/aldi",
    image: "/images/aldi/aldi-cover.png",
    imageAlt:
      "A parent and child at a kitchen table beside an Aldi shopping bag",
    imagePosition: "left",
    status: "Independent speculative project",
  },
  {
    number: "02",
    title: "Comfort that doesn’t clock out",
    client: "Move Softly",
    type: "Brand Strategy · Creative Campaign",
    question: "How can a brand stay present through life in motion?",
    description:
      "Positioning comfort as a steady companion through the changing rhythms of everyday life.",
    href: "/work/move-softly",
    image: "/images/move-softly/move-softly-hero.png",
    imageAlt: "A commuter walking beside a city bridge",
    imagePosition: "right",
    status: "Independent concept project",
  },
  {
    number: "03",
    title: "Can heritage feel desirable again?",
    client: "Thorntons",
    type: "Brand Repositioning · Visual Identity",
    question: "How can heritage become an advantage again?",
    description:
      "Repositioning a familiar heritage name around contemporary chocolate craft and gifting.",
    href: "/work/thorntons",
    image: "/images/thorntons/gift-box-open.png",
    imageAlt: "Open box of assorted dark chocolates dusted with cocoa",
    imagePosition: "left",
    status: "Independent speculative rebrand",
  },
];
