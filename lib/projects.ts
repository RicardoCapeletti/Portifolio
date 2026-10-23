import { projects } from "@/content/projects";
import type { Discipline, Project } from "@/content/types";

export type ProjectFilter = "todos" | Discipline;

export function getProjects(): Project[] {
  return projects;
}

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProject(): Project {
  const featured = projects[0];
  if (!featured) {
    throw new Error("Cadastre ao menos um projeto em content/projects.ts.");
  }
  return featured;
}

export function getNextProject(slug: string): Project | undefined {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1 || projects.length === 0) {
    return undefined;
  }
  return projects[(index + 1) % projects.length];
}

export function filterProjects(
  list: Project[],
  filter: ProjectFilter,
): Project[] {
  switch (filter) {
    case "todos":
      return list;
    case "produto":
    case "interface":
    case "marca":
      return list.filter((project) => project.discipline === filter);
    default: {
      const exhaustive: never = filter;
      return exhaustive;
    }
  }
}
