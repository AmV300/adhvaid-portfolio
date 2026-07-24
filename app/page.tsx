import { AboutPreview } from "@/components/AboutPreview";
import { HomeHero } from "@/components/HomeHero";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#111111]">
      <SiteHeader />
      <HomeHero />

      <section
        id="work"
        className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28"
      >
        <SectionHeading title="Selected Work" detail="02 case studies" />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.number} project={project} />
          ))}
        </div>

        <p className="mt-6 text-sm text-[#6B6B6B]">
          More work coming soon.
        </p>
      </section>

      <AboutPreview />
      <SiteFooter />
    </main>
  );
}