import { AboutPreview } from "@/components/AboutPreview";
import {
  HomeOpeningSequence,
} from "@/components/HomeHero";
import { ProjectCard } from "@/components/ProjectCard";
import { SiteFooter } from "@/components/SiteFooter";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#111111]">
      <HomeOpeningSequence />

      <section
        aria-label="Investigation case studies"
        className="relative z-10 mx-auto -mt-[28svh] max-w-7xl bg-[#FAFAF8] px-6 pb-20 md:px-10 md:pb-28"
      >
        <div className="space-y-8 md:space-y-14">
          {projects.map((project) => (
            <ProjectCard key={project.number} project={project} />
          ))}
        </div>
      </section>

      <AboutPreview />
      <SiteFooter />
    </main>
  );
}
