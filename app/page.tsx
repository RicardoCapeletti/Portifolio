import { HeroStage } from "@/components/hero-stage";
import { ProjectCard } from "@/components/project-card";
import { WordMarquee } from "@/components/word-marquee";
import { getFeaturedProject, getProjects } from "@/lib/projects";

export default function HomePage() {
  const featured = getFeaturedProject();
  const projects = getProjects();

  return (
    <main id="conteudo">
      <HeroStage featured={featured} projects={projects} />
      <WordMarquee />
      <section
        id="selecao"
        aria-labelledby="selecao-titulo"
        className="mx-auto w-full max-w-6xl scroll-mt-28 px-5 py-16 sm:px-8 sm:py-20"
      >
        <div className="flex items-end justify-between gap-4">
          <h2
            id="selecao-titulo"
            className="font-display text-3xl font-medium tracking-tight sm:text-4xl"
          >
            Seleção
          </h2>
          <p className="text-sm text-muted-foreground">
            {String(projects.length).padStart(2, "0")} estudos
          </p>
        </div>
        <ul className="mt-8 grid gap-6 md:grid-cols-3">
          {projects.map((project, index) => (
            <li key={project.slug} className="rise" style={{ animationDelay: `${index * 80}ms` }}>
              <ProjectCard project={project} priority={index === 0} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}