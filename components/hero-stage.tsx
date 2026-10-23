import { ChevronDownIcon } from "lucide-react";
import Link from "next/link";

import { profile } from "@/content/profile";
import type { Project } from "@/content/types";

const spots = [
  "lg:top-[22%] lg:left-[5%]",
  "lg:top-[26%] lg:right-[6%]",
  "lg:bottom-[20%] lg:left-[7%]",
] as const;

type HeroStageProps = {
  featured: Project;
  projects: Project[];
};

export function HeroStage({ featured, projects }: HeroStageProps) {
  const floating = projects.slice(0, spots.length);
  const total = String(projects.length).padStart(2, "0");

  return (
    <section className="px-3 pt-3 sm:px-4 sm:pt-4">
      <div className="relative isolate flex min-h-[calc(100svh-1.5rem)] flex-col overflow-hidden rounded-[2rem] border border-border bg-card/50">
        <div className="glow pointer-events-none absolute inset-[-12%]" aria-hidden="true" />
        <svg
          className="constellation pointer-events-none absolute inset-0 hidden h-full w-full text-foreground/25 lg:block"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <line x1="18" y1="28" x2="38" y2="16" stroke="currentColor" strokeWidth="0.12" />
          <line x1="82" y1="30" x2="64" y2="16" stroke="currentColor" strokeWidth="0.12" />
          <line x1="16" y1="74" x2="30" y2="58" stroke="currentColor" strokeWidth="0.12" />
        </svg>
        <div
          className="pointer-events-none absolute inset-x-0 bottom-[12%] flex justify-center gap-4"
          aria-hidden="true"
        >
          {["h-28", "h-40", "h-24", "h-36", "h-20"].map((height, index) => (
            <span
              key={height}
              className={`streak ${height}`}
              style={{ animationDelay: `${index * 0.7}s` }}
            />
          ))}
        </div>

        {floating.map((project, index) => (
          <Link
            key={project.slug}
            href={`/trabalho/${project.slug}`}
            className={`node absolute z-10 hidden items-center gap-3 rounded-full border border-border bg-background/55 px-3 py-2 text-left backdrop-blur-md lg:flex ${spots[index]}`}
            style={{ animationDelay: `${index * -1.8}s` }}
          >
            <span className="grid size-8 place-items-center rounded-full border border-border text-xs">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span>
              <span className="block text-sm">{project.title}</span>
              <span className="block text-xs text-muted-foreground">{project.year}</span>
            </span>
          </Link>
        ))}

        <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-5 pt-28 pb-24 text-center">
          <p className="rise inline-flex items-center gap-2 rounded-full border border-border bg-background/45 px-3 py-1.5 text-sm backdrop-blur-md">
            <span className="size-1.5 rounded-full bg-foreground" aria-hidden="true" />
            {profile.location}
            <span className="text-muted-foreground">{profile.role}</span>
          </p>
          <h1 className="rise rise-delay mt-6 font-display text-[2.7rem] leading-[0.98] font-medium tracking-[-0.045em] sm:text-6xl lg:text-7xl">
            O trabalho e o caminho até ele.
          </h1>
          <p className="rise rise-delay-2 mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {profile.statement}
          </p>
          <div className="rise rise-delay-3 mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={`/trabalho/${featured.slug}`}
              className="inline-flex h-11 items-center rounded-full bg-foreground px-5 text-sm text-background"
            >
              Abrir estudo
            </Link>
            <Link
              href="/trabalho"
              className="inline-flex h-11 items-center rounded-full border border-border bg-background/40 px-5 text-sm backdrop-blur-md"
            >
              Ver tudo
            </Link>
          </div>
          <ul className="mt-8 flex flex-wrap justify-center gap-2 lg:hidden">
            {floating.map((project) => (
              <li key={project.slug}>
                <Link
                  href={`/trabalho/${project.slug}`}
                  className="inline-flex rounded-full border border-border bg-background/50 px-3 py-1.5 text-sm backdrop-blur-md"
                >
                  {project.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative z-10 flex items-end justify-between gap-4 px-5 pb-5 sm:px-7 sm:pb-6">
          <a
            href="#selecao"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background/45 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur-md"
          >
            <ChevronDownIcon className="size-3.5" aria-hidden="true" />
            01 / {total} · Role
          </a>
          <p className="flex items-center gap-3 text-xs tracking-[0.18em] text-muted-foreground uppercase">
            Estudos
            <span className="flex gap-1" aria-hidden="true">
              <span className="h-0.5 w-8 rounded-full bg-foreground/80" />
              <span className="h-0.5 w-4 rounded-full bg-foreground/25" />
              <span className="h-0.5 w-4 rounded-full bg-foreground/25" />
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
