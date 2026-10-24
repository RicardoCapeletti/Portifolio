import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Lightbox } from "@/components/lightbox";
import { Workflow } from "@/components/workflow";
import { WorkImage } from "@/components/work-image";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { disciplineLabel } from "@/lib/discipline";
import { getNextProject, getProject, getProjects } from "@/lib/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return getProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) {
    return { title: "Projeto não encontrado" };
  }

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      locale: "pt_BR",
      type: "article",
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) {
    notFound();
  }

  const next = getNextProject(project.slug);

  return (
    <main id="conteudo" className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8">
      <p className="text-sm tracking-[0.18em] text-muted-foreground uppercase">
        <Link href="/trabalho" className="hover:text-foreground">
          Trabalho
        </Link>
      </p>
      <div
        className="mt-6 h-1 w-12"
        style={{ backgroundColor: project.accent }}
      />
      <h1 className="mt-6 font-display text-5xl font-medium tracking-tight sm:text-7xl">
        {project.title}
      </h1>
      <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
        <Badge variant="outline">{disciplineLabel(project.discipline)}</Badge>
        <span className="text-muted-foreground">{project.role}</span>
        <span className="text-muted-foreground">{project.year}</span>
      </div>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed">{project.summary}</p>

      <div className="relative mt-10 aspect-[16/10] overflow-hidden rounded-[1.75rem] border border-border bg-card">
        <WorkImage
          src={project.cover.src}
          alt={project.cover.alt}
          priority
          sizes="(min-width: 1024px) 1100px, 100vw"
          className="object-cover"
        />
      </div>
      <p className="mt-3 text-sm text-muted-foreground">{project.cover.caption}</p>

      <section aria-labelledby="contexto" className="mt-16">
        <h2 id="contexto" className="font-display text-3xl font-medium tracking-tight">
          Contexto
        </h2>
        <div className="mt-8 grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="text-sm tracking-[0.16em] text-muted-foreground uppercase">
              Problema
            </h3>
            <p className="mt-3 leading-relaxed">{project.brief.problem}</p>
          </div>
          <div>
            <h3 className="text-sm tracking-[0.16em] text-muted-foreground uppercase">
              Abordagem
            </h3>
            <p className="mt-3 leading-relaxed">{project.brief.approach}</p>
          </div>
        </div>
        <ol className="mt-12 grid gap-8 md:grid-cols-3">
          {project.brief.outcomes.map((outcome, index) => (
            <li key={outcome} className="rounded-[1.25rem] border border-border bg-card/70 p-5">
              <p className="font-display text-lg text-muted-foreground">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-3 leading-relaxed">{outcome}</p>
            </li>
          ))}
        </ol>
      </section>

      <Separator className="mt-16" />

      <section aria-labelledby="fluxo" className="mt-16">
        <h2 id="fluxo" className="font-display text-4xl font-medium tracking-tight sm:text-5xl">
          Fluxo
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
          As etapas seguem a ordem do trabalho. No trilho, as setas do teclado
          mudam de etapa quando ele está em foco.
        </p>
        <div className="mt-10">
          <Workflow stages={project.stages} />
        </div>
      </section>

      {project.gallery.length > 0 ? (
        <section aria-labelledby="galeria" className="mt-8">
          <h2 id="galeria" className="font-display text-4xl font-medium tracking-tight">
            Galeria
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            As imagens do projeto, na ordem de exposição. Abra para ver a
            legenda em tamanho maior.
          </p>
          <div className="mt-8">
            <Lightbox images={project.gallery} />
          </div>
        </section>
      ) : null}

      {next ? (
        <section className="mt-20 border-t border-border pt-10">
          <p className="text-sm tracking-[0.16em] text-muted-foreground uppercase">
            Próximo
          </p>
          <Link
            href={`/trabalho/${next.slug}`}
            className="group mt-4 block"
          >
            <p className="font-display text-4xl font-medium tracking-tight group-hover:opacity-70 sm:text-6xl">
              {next.title}
            </p>
            <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
              {next.summary}
            </p>
          </Link>
        </section>
      ) : null}
    </main>
  );
}
