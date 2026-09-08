"use client";

import { ProjectCard } from "@/components/ProjectCard";
import { useInViewOnce } from "@/lib/useInViewOnce";
import type { Project } from "@/lib/projects";

type SelectedWorkProps = {
  projects: Project[];
};

export function SelectedWork({ projects }: SelectedWorkProps) {
  const { ref, isVisible } = useInViewOnce<HTMLElement>({
    threshold: 0.08,
    rootMargin: "0px 0px -4% 0px",
  });

  return (
    <section
      ref={ref}
      id="investigations"
      data-visible={isVisible}
      aria-labelledby="selected-work-title"
      className="home-selected-work"
    >
      <div className="selected-work-shell">
        <header className="work-introduction">
          <div className="work-introduction-copy">
            <p className="work-kicker">Selected work</p>
            <h2 id="selected-work-title">It starts with noticing.</h2>
            <p>
              I turn observation into brand ideas and stories—through strategy,
              writing, film and photography.
            </p>
          </div>
        </header>

        <div className="selected-projects">
          {projects.map((project, index) => (
            <ProjectCard key={project.number} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
