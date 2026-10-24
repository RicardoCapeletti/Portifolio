import { PlusIcon } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

import { CoverArt } from "@/components/cover-art";
import { FaqList } from "@/components/faq-list";
import { ProjectGrid, ProjectGridFallback, ServiceRows, ServiceRowsFallback } from "@/components/portfolio-browser";
import { SiteNav } from "@/components/site-nav";
import { profile } from "@/content/profile";
import { getFeaturedPiece, portfolioPieces } from "@/content/portfolio";

const avatarTones = [
  "linear-gradient(145deg, #f3d0be, #c4846a)",
  "linear-gradient(160deg, #f6e2c4, #c4965c)",
  "linear-gradient(160deg, #d5d8e4, #7d8498)",
  "linear-gradient(160deg, #e4d4f5, #8d74c9)",
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
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-3 focus:py-2 focus:text-neutral-950 focus:outline focus:outline-2 focus:outline-offset-2"
      >
        Ir para o conteúdo
      </a>
      <div className="mx-auto grid w-full max-w-[1600px] items-stretch gap-3 p-3 sm:p-4 min-[900px]:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] min-[900px]:gap-4">
        <div id="painel" className="flex h-full flex-col overflow-hidden rounded-[1.7rem] bg-white text-neutral-950">
          <section
            id="inicio"
            className="landing-hero flex min-h-[100svh] flex-1 flex-col px-5 pt-5 pb-6 text-white sm:px-8 sm:pt-7 min-[900px]:min-h-[920px] min-[900px]:px-10"
          >
            <header className="landing-rise">
              <SiteNav tone="hero" />
            </header>

            <div className="landing-rise landing-rise-2 relative mt-14 sm:mt-20 min-[900px]:mt-24">
              <h1 className="max-w-[11ch] text-[clamp(2.7rem,6.4vw,5.6rem)] leading-[0.88] font-medium tracking-[-0.045em]">
                <span className="block text-white">Desenhar</span>
                <span className="block text-white/55">presença</span>
                <span className="block text-white">com</span>
                <span className="block text-white/55">clareza</span>
              </h1>
              <p className="mt-6 max-w-[16rem] text-[13px] leading-snug text-white/75 min-[900px]:absolute min-[900px]:top-2 min-[900px]:right-2 min-[900px]:mt-0 min-[900px]:max-w-[11.5rem] min-[900px]:text-right">
                O desenho bom aproxima uma ideia de quem precisa reconhecê-la.
              </p>
            </div>

            <div className="landing-rise landing-rise-3 mt-8">
              <AvatarRow count={4} size="size-10" ring="ring-2 ring-white/85" />
            </div>

            <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-12 text-neutral-950">
              <a href="#projetos" className="text-[12px] tracking-[0.16em] uppercase">
                Ver portfólio
              </a>
              <div className="flex items-center gap-2">
                {heroThumbs.map((piece) => (
                  <Link key={piece.slug} href={`/pecas/${piece.slug}`} aria-label={piece.title} className="landing-thumb block">
                    <CoverArt piece={piece} className="h-12 w-[4.25rem] rounded-lg" />
                  </Link>
                ))}
              </div>
              <a href="#sobre" className="inline-flex items-center gap-3 text-[12px] tracking-[0.16em] uppercase">
                Rolar
                <span className="landing-cue grid size-9 place-items-center rounded-full border border-neutral-950/25">
                  <PlusIcon className="size-4" aria-hidden="true" />
                </span>
              </a>
            </div>
          </section>

          <section id="sobre" className="scroll-mt-6 px-5 pt-2 pb-10 sm:px-8 min-[900px]:px-10 min-[900px]:pb-14">
            <div className="grid gap-8 min-[900px]:grid-cols-12 min-[900px]:gap-6">
              <h2 className="text-[clamp(1.7rem,2.5vw,2.7rem)] leading-[1.12] font-medium tracking-[-0.03em] text-neutral-950 min-[900px]:col-span-9">
                Cada peça guarda o caminho: a pesquisa, a alternativa que saiu e a forma que ficou{" "}
                <AvatarRow
                  count={3}
                  size="size-7"
                  ring="ring-2 ring-white"
                  className="mx-1.5 translate-y-[-0.08em] align-middle"
                />{" "}
                legível no logo, na página e no objeto.
              </h2>
              <div
                className="flex flex-row justify-end gap-3 min-[900px]:col-span-3 min-[900px]:row-span-2 min-[900px]:flex-col min-[900px]:items-end min-[900px]:justify-end"
                aria-hidden="true"
              >
                <span className="h-14 w-16 rounded-2xl bg-neutral-100 ring-1 ring-black/5 min-[900px]:h-16 min-[900px]:w-[4.6rem]" />
                <span className="h-14 w-16 rounded-2xl bg-neutral-100 ring-1 ring-black/5 min-[900px]:h-16 min-[900px]:w-[4.6rem]" />
                <span className="h-14 w-16 rounded-2xl bg-neutral-100 ring-1 ring-black/5 min-[900px]:h-16 min-[900px]:w-[4.6rem]" />
              </div>
              <div className="grid gap-4 sm:grid-cols-12 min-[900px]:col-span-9">
                <p className="text-[11px] tracking-[0.2em] text-neutral-500 uppercase sm:col-span-3">Sobre</p>
                <div className="sm:col-span-7">
                  <p className="max-w-sm text-sm leading-relaxed text-neutral-500">{profile.about[0]}</p>
                  <Link
                    href="/sobre"
                    className="mt-4 inline-flex items-center gap-1.5 text-[12px] tracking-[0.16em] text-neutral-950 uppercase"
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
          <div className="relative aspect-[5/4] overflow-hidden rounded-[1.35rem] bg-[#09090b]" aria-hidden="true">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_78%,rgba(120,78,48,0.42),transparent_62%)]" />
            <div className="absolute top-[8%] left-1/2 flex w-[40%] -translate-x-1/2 flex-col items-center">
              <div className="h-7 w-[36%] rounded-t-md bg-gradient-to-b from-zinc-300 to-zinc-600" />
              <div className="h-3 w-[66%] bg-gradient-to-r from-zinc-800 via-zinc-400 to-zinc-900" />
              <div className="relative h-52 w-full rounded-b-[1.8rem] rounded-t-lg bg-gradient-to-br from-zinc-200 via-zinc-500 to-zinc-950 shadow-[inset_8px_0_16px_rgba(255,255,255,0.2)]">
                <div className="absolute inset-y-7 left-[22%] w-px bg-white/50" />
                <div className="absolute top-10 right-3 left-7 h-10 rounded-sm bg-black/20" />
              </div>
            </div>
            <div className="absolute right-[8%] bottom-[10%] h-14 w-24 rounded-lg bg-gradient-to-br from-[#5a4034] to-[#140f0c]" />
          </div>

          <div className="grid grid-cols-2 gap-3" aria-hidden="true">
            <div className="relative aspect-square overflow-hidden rounded-[1.2rem] bg-[#102848]">
              <div className="absolute top-[18%] left-1/2 h-[30%] w-[36%] -translate-x-1/2 rounded-full bg-gradient-to-b from-[#e4c3ae] to-[#b07d64]" />
              <div className="absolute inset-x-[12%] bottom-0 h-[46%] rounded-t-[999px] bg-gradient-to-b from-[#1a3d6e] to-[#0b1c34]" />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-[1.2rem] bg-gradient-to-br from-[#102033] to-[#070d14]">
              <div className="absolute top-1/2 left-[16%] size-16 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,#f7f9ff_0%,#b7c8e2_26%,#1c334c_58%,transparent_72%)] min-[900px]:size-[4.5rem]" />
              <div className="absolute top-1/2 right-[16%] size-16 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,#f7f9ff_0%,#b7c8e2_26%,#1c334c_58%,transparent_72%)] min-[900px]:size-[4.5rem]" />
            </div>
          </div>

          <section
            id="servicos"
            aria-labelledby="servicos-titulo"
            className="scroll-mt-6 rounded-[1.35rem] bg-white px-4 py-2 text-neutral-950 ring-1 ring-black/5 sm:px-5 dark:ring-0"
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
              <p className="text-sm text-white/80">Peça em destaque</p>
              <p className="mt-1 max-w-[12rem] text-3xl leading-[1.05] font-medium tracking-tight">{featured.title}</p>
              <p className="mt-3 max-w-[12rem] text-sm leading-snug text-white/75">{featured.category}</p>
            </div>
            <div
              className="pointer-events-none absolute bottom-[-22%] left-1/2 size-64 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_32%_28%,#6a6284_0%,#221c36_42%,#07060d_72%)] shadow-[0_30px_50px_rgba(0,0,0,0.35)] min-[900px]:size-72"
              aria-hidden="true"
            >
              <span className="absolute top-[14%] left-[18%] h-16 w-24 rounded-full bg-white/20 blur-md" />
              <span className="absolute right-[18%] bottom-[28%] h-3 w-20 rounded-full bg-fuchsia-300/90 blur-[1px]" />
            </div>
            <span className="absolute bottom-5 left-6 text-xs text-white/70">
              {String(featuredIndex + 1).padStart(2, "0")}
            </span>
          </Link>

          <section
            id="faq"
            aria-labelledby="faq-titulo"
            className="scroll-mt-6 rounded-[1.35rem] bg-[#121216] px-4 py-6 text-white dark:bg-transparent dark:px-1 dark:py-4"
          >
            <div className="grid items-end gap-4 min-[900px]:grid-cols-[minmax(0,1.35fr)_minmax(0,0.8fr)]">
              <h2
                id="faq-titulo"
                className="text-[clamp(2.3rem,4.2vw,3.8rem)] leading-[0.9] font-medium tracking-[-0.04em]"
              >
                <span className="block">Perguntas</span>
                <span className="my-1 flex items-center gap-3 text-[0.38em] font-normal tracking-normal text-white/80">
                  <span className="h-px flex-1 bg-white/80" />
                  mais
                  <span className="h-px w-8 bg-white/40 min-[900px]:w-14" />
                </span>
                <span className="block">frequentes</span>
              </h2>
              <p className="pb-1 text-[12px] leading-relaxed text-white/55">
                Respostas curtas sobre o tipo de peça, o começo de um trabalho e o que fica visível no processo.
              </p>
            </div>
            <FaqList />
            <div id="contato" className="scroll-mt-6 pt-8">
              <p className="text-[11px] tracking-[0.18em] text-white/45 uppercase">Contato</p>
              <a className="mt-2 inline-block text-sm text-white hover:text-white/80" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
              <p className="mt-1 text-xs text-white/45">{profile.location}</p>
            </div>
          </section>
        </div>
      </div>

      <section id="projetos" className="scroll-mt-6 px-3 pb-10 sm:px-4">
        <div className="mx-auto max-w-[1600px] rounded-[1.35rem] bg-white/70 px-4 py-6 text-neutral-950 ring-1 ring-black/5 sm:px-6 dark:bg-white dark:ring-0">
          <Suspense fallback={<ProjectGridFallback />}>
            <ProjectGrid />
          </Suspense>
          <p className="mt-6 text-sm text-neutral-500">
            <Link href="/trabalho" className="underline decoration-neutral-300 underline-offset-4 hover:text-neutral-950">
              Estudos de caso
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
