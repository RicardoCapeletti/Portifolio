import Link from "next/link";

import { ProjectCard } from "@/components/project-card";
import { profile } from "@/content/profile";
import { getFeaturedProject, getProjects } from "@/lib/projects";

export default function HomePage() {
  const featured = getFeaturedProject();
  const projects = getProjects();

  return (
    <main id="conteudo" className="mx-auto w-full max-w-6xl px-5 sm:px-8">
      <section className="rise grid gap-10 pt-14 pb-16 sm:pt-20 lg:grid-cols-12 lg:pt-24 lg:pb-20">
        <div className="lg:col-span-8">
          <p className="text-sm tracking-[0.18em] text-muted-foreground uppercase">
            {profile.location}
          </p>
          <h1 className="mt-4 font-display text-[3.1rem] leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
            O trabalho e o caminho até ele.
          </h1>
        </div>
        <div className="flex flex-col justify-end gap-6 lg:col-span-4">
          <p className="text-lg leading-relaxed">{profile.statement}</p>
          <p className="text-sm text-muted-foreground">{profile.role}</p>
          <Link href="/trabalho" className="text-sm text-primary">
            Ver todo o trabalho
          </Link>
        </div>
      </section>

      <section aria-labelledby="destaque" className="pb-20">
        <h2
          id="destaque"
          className="text-sm tracking-[0.18em] text-muted-foreground uppercase"
        >
          Em destaque
        </h2>
        <div className="mt-6">
          <ProjectCard project={featured} featured priority />
        </div>
      </section>

      <section aria-labelledby="selecao" className="pb-8">
        <h2
          id="selecao"
          className="text-sm tracking-[0.18em] text-muted-foreground uppercase"
        >
          Seleção
        </h2>
        <ul className="mt-8 grid gap-x-8 gap-y-12 md:grid-cols-6">
          {projects.map((project, index) => (
            <li
              key={project.slug}
              className={
                index === 0
                  ? "md:col-span-4"
                  : index === 1
                    ? "md:col-span-2"
                    : "md:col-span-3"
              }
            >
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
