import { AboutContact } from "@/components/AboutContact";
import {
  HomeOpeningSequence,
} from "@/components/HomeHero";
import { SelectedWork } from "@/components/SelectedWork";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#111111]">
      <HomeOpeningSequence />

      <SelectedWork projects={projects} />

      <AboutContact />
    </main>
  );
}
