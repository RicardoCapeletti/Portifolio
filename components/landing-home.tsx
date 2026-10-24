import Link from "next/link";
import { Suspense } from "react";

import { CoverArt } from "@/components/cover-art";
import { FaqList } from "@/components/faq-list";
import { ProjectGrid, ProjectGridFallback, ServiceRows, ServiceRowsFallback } from "@/components/portfolio-browser";
import { profile } from "@/content/profile";
import { getFeaturedPiece } from "@/content/portfolio";

const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--palette-gold)]";

export function LandingHome() {
  const featured = getFeaturedPiece();

  return (
    <main
      id="conteudo"
      tabIndex={-1}
      className="min-h-svh overflow-x-clip bg-[var(--landing-frame)] text-[var(--landing-ink)] focus:outline-none"
    >
      <section
        id="inicio"
        className="mx-auto grid w-full max-w-[1500px] items-stretch gap-3 px-4 pt-6 pb-4 sm:px-6 lg:min-h-[calc(100svh-var(--site-header)-1.5rem)] lg:grid-cols-12 lg:px-8 lg:pt-8"
      >
        <div className="landing-rise flex flex-col justify-end py-6 lg:col-span-5 lg:py-10 lg:pr-8">
          <h1 className="max-w-[11ch] text-[clamp(2.5rem,6vw,5.4rem)] leading-[0.9] font-medium tracking-[-0.045em]">
            <span className="block">Desenhar</span>
            <span className="block text-[var(--landing-muted)]">presença</span>
            <span className="block">com</span>
            <span className="block text-[var(--landing-muted)]">clareza</span>
          </h1>
          <p className="mt-6 max-w-[22rem] text-sm leading-relaxed text-[var(--landing-muted)]">
            O desenho bom aproxima uma ideia de quem precisa reconhecê-la.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 text-[12px] tracking-[0.16em] uppercase">
            <a href="#projetos" className={`text-[var(--palette-gold)] hover:text-[var(--palette-gold-light)] ${focus}`}>
              Ver portfólio
            </a>
            <span className="h-3 w-px bg-[var(--palette-gold-dark)]" aria-hidden="true" />
            <Link href="/sobre" className={`hover:text-[var(--palette-gold)] ${focus}`}>
              Saiba mais
            </Link>
            <span className="h-3 w-px bg-[var(--palette-gold-dark)]" aria-hidden="true" />
            <a href="#contato" className={`hover:text-[var(--palette-gold)] ${focus}`}>
              Contato
            </a>
          </div>
        </div>

        <Link
          href={`/pecas/${featured.slug}`}
          aria-label={`Ver projeto ${featured.title}`}
          className="mosaic-tile landing-rise landing-rise-2 flex min-h-[22rem] flex-col bg-[var(--palette-graphite)] lg:col-span-7 lg:min-h-full"
        >
          <span className="block min-h-0 flex-1 overflow-hidden">
            <CoverArt piece={featured} className="landing-thumb h-full min-h-[16rem] w-full" />
          </span>
          <span className="border-t border-[var(--palette-gold-dark)]/50 px-5 py-4">
            <span className="block text-[11px] tracking-[0.16em] text-[var(--palette-gold)] uppercase">{featured.category}</span>
            <span className="mt-1 block text-2xl font-medium tracking-tight text-[var(--palette-cream)]">{featured.title}</span>
            <span className="mt-1 block max-w-md text-sm leading-snug text-[var(--palette-gray)]">{featured.summary}</span>
          </span>
        </Link>
      </section>

      <section id="sobre" className="mx-auto grid w-full max-w-[1500px] gap-10 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:py-28">
        <div className="border-t border-[var(--palette-gold-dark)] pt-8 lg:col-span-7">
          <p className="text-[11px] tracking-[0.2em] text-[var(--palette-gold)] uppercase">Sobre</p>
          <h2 className="mt-4 max-w-[18ch] text-[clamp(1.7rem,3vw,2.6rem)] leading-[1.15] font-medium tracking-[-0.03em]">
            Cada peça guarda o caminho: a pesquisa, a alternativa que saiu e a forma que ficou.
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-[var(--landing-muted)]">{profile.about[0]}</p>
          <Link
            href="/sobre"
            className={`mt-6 inline-flex text-[12px] tracking-[0.16em] text-[var(--palette-gold)] uppercase hover:text-[var(--palette-gold-light)] ${focus}`}
          >
            Saiba mais
          </Link>
        </div>
        <div id="contato" className="border-t border-[var(--palette-gold-dark)] pt-8 lg:col-span-4 lg:col-start-9">
          <p className="text-[11px] tracking-[0.2em] text-[var(--palette-gold)] uppercase">Contato</p>
          <a
            className={`mt-4 block text-lg text-[var(--landing-ink)] hover:text-[var(--palette-gold)] ${focus}`}
            href={`mailto:${profile.email}`}
          >
            {profile.email}
          </a>
          <p className="mt-2 text-sm text-[var(--landing-muted)]">{profile.location}</p>
        </div>
      </section>

      <section
        id="servicos"
        aria-labelledby="servicos-titulo"
        className="mx-auto w-full max-w-[1500px] px-4 pb-8 sm:px-6 lg:px-8"
      >
        <h2 id="servicos-titulo" className="sr-only">
          Serviços
        </h2>
        <Suspense fallback={<ServiceRowsFallback />}>
          <ServiceRows />
        </Suspense>
      </section>

      <section id="projetos" className="mx-auto w-full max-w-[1500px] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Suspense fallback={<ProjectGridFallback />}>
          <ProjectGrid />
        </Suspense>
        <p className="mt-8 text-sm text-[var(--palette-gray)]">
          <Link
            href="/trabalho"
            className={`text-[var(--palette-gold)] underline decoration-[var(--palette-gold-dark)] underline-offset-4 hover:text-[var(--palette-gold-light)] ${focus}`}
          >
            Estudos de caso
          </Link>
        </p>
      </section>

      <section id="faq" aria-labelledby="faq-titulo" className="mx-auto w-full max-w-[1500px] px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid gap-8 border-t border-[var(--palette-gold-dark)] pt-10 lg:grid-cols-12">
          <h2
            id="faq-titulo"
            className="text-[clamp(2rem,4vw,3.2rem)] leading-[0.95] font-medium tracking-[-0.04em] lg:col-span-4"
          >
            Perguntas frequentes
          </h2>
          <div className="lg:col-span-7 lg:col-start-6">
            <FaqList />
          </div>
        </div>
      </section>
    </main>
  );
}
