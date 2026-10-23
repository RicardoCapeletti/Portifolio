import type { Metadata } from "next";

import { WorkGrid } from "@/components/work-grid";
import { getProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Trabalho",
  description:
    "Estudos de caso com imagens e o fluxo de design de cada projeto.",
  openGraph: {
    title: "Trabalho",
    description:
      "Estudos de caso com imagens e o fluxo de design de cada projeto.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function TrabalhoPage() {
  return (
    <main id="conteudo" className="mx-auto w-full max-w-6xl px-5 pt-28 pb-16 sm:px-8">
      <p className="text-sm tracking-[0.18em] text-muted-foreground uppercase">
        Estudos de caso
      </p>
      <h1 className="mt-4 max-w-3xl font-display text-5xl font-medium tracking-tight sm:text-7xl">
        Trabalho
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed">
        Imagens e o fluxo de cada projeto. Filtre pela disciplina para ver
        produto, interface ou marca.
      </p>
      <div className="mt-12">
        <WorkGrid projects={getProjects()} />
      </div>
    </main>
  );
}
