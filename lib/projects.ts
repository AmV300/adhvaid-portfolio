export type Project = {
  number: string;
  title: string;
  client: string;
  type: string;
  description: string;
  href: string;
  colour: string;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "Care, Not Compromise",
    client: "Aldi UK",
    type: "Brand Strategy · Campaign Platform",
    description:
      "A speculative strategy that reframes Aldi’s value around the care behind everyday choices.",
    href: "/work/aldi",
    colour: "bg-[#D9B75D]",
  },
  {
    number: "02",
    title: "Move Softly",
    client: "Concept Footwear Campaign",
    type: "Creative Strategy · Brand Identity",
    description:
      "A conceptual campaign exploring comfort as a constant companion through movement and emotion.",
    href: "/work/move-softly",
    colour: "bg-[#DEDCD5]",
  },
];