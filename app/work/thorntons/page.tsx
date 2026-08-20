import type { Metadata } from "next";
import { ThorntonsExperience } from "@/components/ThorntonsExperience";

export const metadata: Metadata = {
  title: "Can Heritage Feel Desirable Again?",
  description:
    "An independent Thorntons brand repositioning exploring how heritage could become contemporary chocolate craft.",
};

export default function ThorntonsCaseStudy() {
  return <ThorntonsExperience />;
}
