import type { Metadata } from "next";
import { Suspense } from "react";

import { ProjectGrid, ProjectGridFallback } from "@/components/portfolio-browser";

export const metadata: Metadata = {
  title: "Projetos",
  description: "Peças por serviço: logos, banners, web design, cartões e design de produtos.",
  openGraph: {
    title: "Projetos",
    description: "Peças por serviço: logos, banners, web design, cartões e design de produtos.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function ProjetosPage() {
  return (
    <main id="conteudo" tabIndex={-1} className="mx-auto w-full max-w-[1500px] px-4 py-12 focus:outline-none sm:px-6 lg:px-8">
      <Suspense fallback={<ProjectGridFallback />}>
        <ProjectGrid />
      </Suspense>
    </main>
  );
}
