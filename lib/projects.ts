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
};

export const projects: Project[] = [
  {
    number: "01",
    title: "Care, Not Compromise",
    client: "Aldi UK",
    type: "Brand Strategy · Campaign Platform",
    question: "How can Aldi make value feel more human?",
    description:
      "A brand strategy investigation exploring how Aldi could move beyond price communication and recognise the meaning behind everyday savings.",
    href: "/work/aldi",
    image: "/images/aldi/aldi-cover.png",
    imageAlt:
      "A parent and child at a kitchen table beside an Aldi shopping bag",
    imagePosition: "left",
  },
  {
    number: "02",
    title: "Comfort that doesn’t clock out",
    client: "Move Softly",
    type: "Brand Strategy · Creative Campaign",
    question: "How can a brand stay present through life in motion?",
    description:
      "A creative investigation exploring how a footwear brand can become a constant companion through the changing rhythms of everyday life.",
    href: "/work/move-softly",
    image: "/images/move-softly/move-softly-hero.png",
    imageAlt: "A commuter walking beside a city bridge",
    imagePosition: "right",
  },
  {
    number: "03",
    title: "Can heritage feel desirable again?",
    client: "Thorntons",
    type: "Brand Repositioning · Visual Identity",
    question: "How can heritage become an advantage again?",
    description:
      "A speculative rebrand repositioning a familiar British chocolate name around contemporary craft, cocoa and gifting.",
    href: "/work/thorntons",
    image: "/images/thorntons/gift-box-dark.jpg",
    imageAlt: "An open chocolate gift box in deep red light",
    imagePosition: "left",
  },
];
