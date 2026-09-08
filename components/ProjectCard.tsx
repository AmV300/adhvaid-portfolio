"use client";

import Image from "next/image";
import Link from "next/link";
import { useInViewOnce } from "@/lib/useInViewOnce";
import type { Project } from "@/lib/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { ref, isVisible } = useInViewOnce<HTMLElement>({
    threshold: 0.12,
  });

  return (
    <article
      ref={ref}
      data-visible={isVisible}
      data-project={index + 1}
      className="work-project"
    >
      <div className="work-project-composition">
        <Link
          href={project.href}
          className="work-project-image-link"
          aria-label={`View ${project.title} case study`}
        >
          <span className="work-project-image">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              sizes={index === 1 ? "(min-width: 768px) 48vw, 100vw" : "(min-width: 768px) 72vw, 100vw"}
              className="object-cover"
            />
          </span>
        </Link>

        <div className="work-project-copy">
          <div className="work-project-meta">
            <p>{project.client} · {project.type}</p>
            <p>{project.status}</p>
          </div>

          <Link href={project.href} className="work-project-title-link">
            <h3>{project.title}</h3>
          </Link>

          <p className="work-project-description">{project.description}</p>

          <Link href={project.href} className="work-project-link">
            <span>View project</span>
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
