import { PlusIcon } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

import { CoverArt } from "@/components/cover-art";
import { FaqList } from "@/components/faq-list";
import { ProjectGrid, ProjectGridFallback, ServiceRows, ServiceRowsFallback } from "@/components/portfolio-browser";
import { profile } from "@/content/profile";
import { getFeaturedPiece, portfolioPieces } from "@/content/portfolio";

const avatarTones = [
  "linear-gradient(145deg, #e4c987, #c5a059)",
  "linear-gradient(160deg, #f5f3ee, #a6a6aa)",
  "linear-gradient(160deg, #8d713c, #161619)",
  "linear-gradient(160deg, #c5a059, #0b0b0d)",
] as const;

function AvatarRow({
  count,
  size,
  ring,
  className,
}: {
  count: number;
  size: string;
  ring: string;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center ${className ?? ""}`} aria-hidden="true">
      {avatarTones.slice(0, count).map((tone, index) => (
        <span
          key={tone}
          className={`-ml-2.5 rounded-full first:ml-0 ${size} ${ring}`}
          style={{ background: tone, zIndex: count - index }}
        />
      ))}
    </span>
  );
}

export function LandingHome() {
  const featured = getFeaturedPiece();
  const featuredIndex = portfolioPieces.findIndex((piece) => piece.slug === featured.slug);
  const heroThumbs = portfolioPieces.slice(0, 3);

  return (
    <main
      id="conteudo"
      tabIndex={-1}
      className="min-h-svh overflow-x-clip bg-[var(--landing-frame)] text-[var(--landing-ink)] focus:outline-none"
    >
      <div className="mx-auto grid w-full max-w-[1600px] items-stretch gap-3 p-3 sm:p-4 min-[900px]:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] min-[900px]:gap-4">
        <div id="painel" className="flex h-full flex-col overflow-hidden rounded-[1.7rem] bg-[var(--landing-panel)] text-[var(--landing-panel-ink)]">
          <section
            id="inicio"
            className="landing-hero flex min-h-[calc(100svh-var(--site-header)-1.5rem)] flex-1 flex-col px-5 pt-8 pb-6 text-[var(--palette-cream)] sm:px-8 sm:pt-10 min-[900px]:min-h-[calc(100svh-var(--site-header)-2rem)] min-[900px]:px-10"
          >
            <div className="landing-rise relative mt-6 sm:mt-10 min-[900px]:mt-14">
              <h1 className="max-w-[11ch] text-[clamp(2.7rem,6.4vw,5.6rem)] leading-[0.88] font-medium tracking-[-0.045em]">
                <span className="block text-[var(--palette-cream)]">Desenhar</span>
                <span className="block text-[var(--palette-gray)]">presença</span>
                <span className="block text-[var(--palette-cream)]">com</span>
                <span className="block text-[var(--palette-gray)]">clareza</span>
              </h1>
              <p className="mt-6 max-w-[16rem] text-[13px] leading-snug text-[var(--palette-gray)] min-[900px]:absolute min-[900px]:top-2 min-[900px]:right-2 min-[900px]:mt-0 min-[900px]:max-w-[11.5rem] min-[900px]:text-right">
                O desenho bom aproxima uma ideia de quem precisa reconhecê-la.
              </p>
            </div>

            <div className="landing-rise landing-rise-2 mt-8">
              <AvatarRow count={4} size="size-10" ring="ring-2 ring-[#0B0B0D]" />
            </div>

            <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-12 text-[var(--palette-cream)]">
              <a href="#projetos" className="text-[12px] tracking-[0.16em] text-[var(--palette-gold)] uppercase hover:text-[var(--palette-gold-light)]">
                Ver portfólio
              </a>
              <div className="flex items-center gap-2">
                {heroThumbs.map((piece) => (
                  <Link key={piece.slug} href={`/pecas/${piece.slug}`} aria-label={piece.title} className="landing-thumb block">
                    <CoverArt piece={piece} className="h-12 w-[4.25rem] rounded-lg" />
                  </Link>
                ))}
              </div>
              <a href="#sobre" className="inline-flex items-center gap-3 text-[12px] tracking-[0.16em] uppercase hover:text-[var(--palette-gold-light)]">
                Rolar
                <span className="landing-cue grid size-9 place-items-center rounded-full border border-[var(--palette-gold-dark)] text-[var(--palette-gold)]">
                  <PlusIcon className="size-4" aria-hidden="true" />
                </span>
              </a>
            </div>
          </section>

          <section id="sobre" className="px-5 pt-2 pb-10 sm:px-8 min-[900px]:px-10 min-[900px]:pb-14">
            <div className="grid gap-8 min-[900px]:grid-cols-12 min-[900px]:gap-6">
              <h2 className="text-[clamp(1.7rem,2.5vw,2.7rem)] leading-[1.12] font-medium tracking-[-0.03em] min-[900px]:col-span-9">
                Cada peça guarda o caminho: a pesquisa, a alternativa que saiu e a forma que ficou{" "}
                <AvatarRow
                  count={3}
                  size="size-7"
                  ring="ring-2 ring-[var(--landing-panel)]"
                  className="mx-1.5 translate-y-[-0.08em] align-middle"
                />{" "}
                legível no logo, na página e no objeto.
              </h2>
              <div
                className="flex flex-row justify-end gap-3 min-[900px]:col-span-3 min-[900px]:row-span-2 min-[900px]:flex-col min-[900px]:items-end min-[900px]:justify-end"
                aria-hidden="true"
              >
                <span className="h-14 w-16 rounded-2xl bg-[var(--palette-gold-dark)]/15 ring-1 ring-[var(--landing-line)] min-[900px]:h-16 min-[900px]:w-[4.6rem]" />
                <span className="h-14 w-16 rounded-2xl bg-[var(--palette-gold-dark)]/15 ring-1 ring-[var(--landing-line)] min-[900px]:h-16 min-[900px]:w-[4.6rem]" />
                <span className="h-14 w-16 rounded-2xl bg-[var(--palette-gold-dark)]/15 ring-1 ring-[var(--landing-line)] min-[900px]:h-16 min-[900px]:w-[4.6rem]" />
              </div>
              <div className="grid gap-4 sm:grid-cols-12 min-[900px]:col-span-9">
                <p className="text-[11px] tracking-[0.2em] text-[var(--landing-muted)] uppercase sm:col-span-3">Sobre</p>
                <div className="sm:col-span-7">
                  <p className="max-w-sm text-sm leading-relaxed text-[var(--landing-muted)]">{profile.about[0]}</p>
                  <Link
                    href="/sobre"
                    className="mt-4 inline-flex items-center gap-1.5 text-[12px] tracking-[0.16em] text-[var(--palette-gold)] uppercase hover:text-[var(--palette-gold-light)]"
                  >
                    Saiba mais
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="flex flex-col gap-3 min-[900px]:gap-3.5">
          <div className="relative aspect-[5/4] overflow-hidden rounded-[1.35rem] bg-[#0B0B0D]" aria-hidden="true">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_78%,rgba(197,160,89,0.28),transparent_62%)]" />
            <div className="absolute top-[8%] left-1/2 flex w-[40%] -translate-x-1/2 flex-col items-center">
              <div className="h-7 w-[36%] rounded-t-md bg-gradient-to-b from-zinc-300 to-zinc-600" />
              <div className="h-3 w-[66%] bg-gradient-to-r from-zinc-800 via-zinc-400 to-zinc-900" />
              <div className="relative h-52 w-full rounded-b-[1.8rem] rounded-t-lg bg-gradient-to-br from-zinc-200 via-zinc-500 to-zinc-950 shadow-[inset_8px_0_16px_rgba(255,255,255,0.2)]">
                <div className="absolute inset-y-7 left-[22%] w-px bg-white/50" />
                <div className="absolute top-10 right-3 left-7 h-10 rounded-sm bg-black/20" />
              </div>
            </div>
            <div className="absolute right-[8%] bottom-[10%] h-14 w-24 rounded-lg bg-gradient-to-br from-[#C5A059] to-[#161619]" />
          </div>

          <div className="grid grid-cols-2 gap-3" aria-hidden="true">
            <div className="relative aspect-square overflow-hidden rounded-[1.2rem] bg-[#161619]">
              <div className="absolute top-[18%] left-1/2 h-[30%] w-[36%] -translate-x-1/2 rounded-full bg-gradient-to-b from-[#E4C987] to-[#8D713C]" />
              <div className="absolute inset-x-[12%] bottom-0 h-[46%] rounded-t-[999px] bg-gradient-to-b from-[#2a241c] to-[#0B0B0D]" />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-[1.2rem] bg-gradient-to-br from-[#161619] to-[#0B0B0D]">
              <div className="absolute top-1/2 left-[16%] size-16 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,#F5F3EE_0%,#C5A059_26%,#161619_58%,transparent_72%)] min-[900px]:size-[4.5rem]" />
              <div className="absolute top-1/2 right-[16%] size-16 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,#F5F3EE_0%,#C5A059_26%,#161619_58%,transparent_72%)] min-[900px]:size-[4.5rem]" />
            </div>
          </div>

          <section
            id="servicos"
            aria-labelledby="servicos-titulo"
            className="rounded-[1.35rem] bg-[var(--landing-surface)] px-4 py-2 text-[var(--landing-on-surface)] ring-1 ring-[var(--landing-line)] sm:px-5"
          >
            <h2 id="servicos-titulo" className="sr-only">
              Serviços
            </h2>
            <Suspense fallback={<ServiceRowsFallback />}>
              <ServiceRows />
            </Suspense>
          </section>

          <Link
            href={`/pecas/${featured.slug}`}
            aria-label={`Ver projeto ${featured.title}`}
            className="landing-project relative block min-h-[260px] overflow-hidden rounded-[1.35rem] p-6"
          >
            <div className="relative z-10">
              <p className="text-sm text-[var(--palette-gold-light)]">Peça em destaque</p>
              <p className="mt-1 max-w-[12rem] text-3xl leading-[1.05] font-medium tracking-tight text-[var(--palette-cream)]">{featured.title}</p>
              <p className="mt-3 max-w-[12rem] text-sm leading-snug text-[var(--palette-gold)]">{featured.category}</p>
            </div>
            <div
              className="pointer-events-none absolute bottom-[-22%] left-1/2 size-64 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_32%_28%,#3a3428_0%,#161619_42%,#0B0B0D_72%)] shadow-[0_30px_50px_rgba(0,0,0,0.35)] min-[900px]:size-72"
              aria-hidden="true"
            >
              <span className="absolute top-[14%] left-[18%] h-16 w-24 rounded-full bg-white/20 blur-md" />
              <span className="absolute right-[18%] bottom-[28%] h-3 w-20 rounded-full bg-[#C5A059]/90 blur-[1px]" />
            </div>
            <span className="absolute bottom-5 left-6 text-xs text-[var(--palette-gold)]">
              {String(featuredIndex + 1).padStart(2, "0")}
            </span>
          </Link>

          <section
            id="faq"
            aria-labelledby="faq-titulo"
            className="rounded-[1.35rem] bg-[var(--landing-surface)] px-4 py-6 text-[var(--palette-cream)] ring-1 ring-[var(--landing-line)]"
          >
            <div className="grid items-end gap-4 min-[900px]:grid-cols-[minmax(0,1.35fr)_minmax(0,0.8fr)]">
              <h2
                id="faq-titulo"
                className="text-[clamp(2.3rem,4.2vw,3.8rem)] leading-[0.9] font-medium tracking-[-0.04em]"
              >
                <span className="block">Perguntas</span>
                <span className="my-1 flex items-center gap-3 text-[0.38em] font-normal tracking-normal text-[var(--palette-gold)]">
                  <span className="h-px flex-1 bg-[var(--palette-gold-dark)]" />
                  mais
                  <span className="h-px w-8 bg-[var(--palette-gold)] min-[900px]:w-14" />
                </span>
                <span className="block">frequentes</span>
              </h2>
              <p className="pb-1 text-[12px] leading-relaxed text-[var(--palette-gray)]">
                Respostas curtas sobre o tipo de peça, o começo de um trabalho e o que fica visível no processo.
              </p>
            </div>
            <FaqList />
            <div id="contato" className="pt-8">
              <p className="text-[11px] tracking-[0.18em] text-[var(--palette-gray)] uppercase">Contato</p>
              <a className="mt-2 inline-block text-sm text-[var(--palette-gold)] hover:text-[var(--palette-gold-light)]" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
              <p className="mt-1 text-xs text-[var(--palette-gray)]">{profile.location}</p>
            </div>
          </section>
        </div>
      </div>

      <section id="projetos" className="px-3 pb-10 sm:px-4">
        <div className="mx-auto max-w-[1600px] rounded-[1.35rem] bg-[var(--landing-surface)] px-4 py-6 text-[var(--landing-on-surface)] ring-1 ring-[var(--landing-line)] sm:px-6">
          <Suspense fallback={<ProjectGridFallback />}>
            <ProjectGrid />
          </Suspense>
          <p className="mt-6 text-sm text-[var(--palette-gray)]">
            <Link href="/trabalho" className="text-[var(--palette-gold)] underline decoration-[var(--palette-gold-dark)] underline-offset-4 hover:text-[var(--palette-gold-light)]">
              Estudos de caso
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
