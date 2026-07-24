import Link from "next/link";
import type { Project } from "@/lib/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={project.href}
      className="group block focus:outline-none focus:ring-2 focus:ring-[#111111] focus:ring-offset-4"
      aria-label={`View ${project.title} case study`}
    >
      <article
        className={`flex min-h-[460px] flex-col justify-between p-6 transition-transform duration-300 group-hover:-translate-y-1 md:min-h-[560px] md:p-8 ${project.colour}`}
      >
        <div className="flex items-start justify-between">
          <p className="text-sm">{project.number}</p>

          <span
            className="text-2xl transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          >
            ↗
          </span>
        </div>

        <div>
          <p className="mb-3 text-sm text-[#111111]/65">{project.client}</p>

          <h3 className="font-display max-w-md text-4xl font-medium leading-[0.95] tracking-[-0.055em] md:text-5xl">
            {project.title}
          </h3>

          <p className="mt-6 max-w-sm text-sm leading-relaxed text-[#111111]/70">
            {project.description}
          </p>

          <p className="mt-8 text-xs uppercase tracking-[0.12em] text-[#111111]/60">
            {project.type}
          </p>
        </div>
      </article>
    </Link>
  );
}