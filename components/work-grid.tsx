"use client";

import { useState } from "react";

import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import type { Project } from "@/content/types";
import { filterProjects, type ProjectFilter } from "@/lib/projects";

const filters: { id: ProjectFilter; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "produto", label: "Produto" },
  { id: "interface", label: "Interface" },
  { id: "marca", label: "Marca" },
];

type WorkGridProps = {
  projects: Project[];
};

export function WorkGrid({ projects }: WorkGridProps) {
  const [filter, setFilter] = useState<ProjectFilter>("todos");
  const visible = filterProjects(projects, filter);
  const countLabel =
    visible.length === 1 ? "1 estudo" : `${visible.length} estudos`;

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div
          role="group"
          aria-label="Filtrar por disciplina"
          className="flex flex-wrap gap-2"
        >
          {filters.map((item) => {
            const selected = filter === item.id;
            return (
              <Button
                key={item.id}
                type="button"
                size="sm"
                variant={selected ? "default" : "outline"}
                aria-pressed={selected}
                onClick={() => setFilter(item.id)}
              >
                {item.label}
              </Button>
            );
          })}
        </div>
        <p className="text-sm text-muted-foreground" aria-live="polite">
          {countLabel}
        </p>
      </div>

      {visible.length === 0 ? (
        <div className="mt-10 border border-dashed border-border bg-card px-6 py-16 text-center">
          <p className="font-display text-3xl tracking-tight">
            Nada nesta disciplina.
          </p>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            Os estudos publicados estão nas outras categorias.
          </p>
        </div>
      ) : (
        <ul className="mt-10 grid gap-x-8 gap-y-12 md:grid-cols-2">
          {visible.map((project) => (
            <li key={project.slug}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
