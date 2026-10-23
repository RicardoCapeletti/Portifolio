import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { WorkImage } from "@/components/work-image";
import type { Project } from "@/content/types";
import { disciplineLabel } from "@/lib/discipline";

type ProjectCardProps = {
  project: Project;
  priority?: boolean;
  featured?: boolean;
};

export function ProjectCard({
  project,
  priority = false,
  featured = false,
}: ProjectCardProps) {
  return (
    <article>
      <Link
        href={`/trabalho/${project.slug}`}
        className="group block rounded-sm focus-visible:outline-offset-4"
      >
        <div
          className="relative aspect-[16/10] overflow-hidden bg-card"
          style={{ boxShadow: `inset 0 0 0 1px ${project.accent}22` }}
        >
          <WorkImage
            src={project.cover.src}
            alt={project.cover.alt}
            priority={priority}
            sizes={
              featured
                ? "(min-width: 1024px) 1100px, 100vw"
                : "(min-width: 768px) 40vw, 100vw"
            }
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
        </div>
        <div className="mt-4 flex items-baseline justify-between gap-4">
          <h3
            className={
              featured
                ? "font-display text-4xl tracking-tight group-hover:text-primary sm:text-5xl"
                : "font-display text-3xl tracking-tight group-hover:text-primary"
            }
          >
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground">{project.year}</p>
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <Badge variant="outline">{disciplineLabel(project.discipline)}</Badge>
          <p className="text-sm text-muted-foreground">{project.role}</p>
        </div>
        {featured ? (
          <p className="mt-4 max-w-2xl text-base leading-relaxed">
            {project.summary}
          </p>
        ) : null}
        {featured ? (
          <p className="mt-4 text-sm text-primary">Ver o fluxo</p>
        ) : null}
      </Link>
    </article>
  );
}
