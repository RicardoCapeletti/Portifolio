import { PlusIcon } from "lucide-react";
import Link from "next/link";

import { profile } from "@/content/profile";
import { getFeaturedProject, getProject } from "@/lib/projects";

const nav = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#projetos", label: "Projetos" },
  { href: "#faq", label: "FAQ" },
] as const;

const avatarTones = [
  "linear-gradient(145deg, #f3d0be, #c4846a)",
  "linear-gradient(160deg, #f6e2c4, #c4965c)",
  "linear-gradient(160deg, #d5d8e4, #7d8498)",
  "linear-gradient(160deg, #e4d4f5, #8d74c9)",
] as const;

const services = [
  {
    name: "Logos",
    copy: "Símbolo e wordmark que continuam legíveis quando a marca encolhe.",
  },
  {
    name: "Banners",
    copy: "Campanhas com uma hierarquia só e um foco que se lê de passagem.",
  },
  {
    name: "Web design",
    copy: "Páginas com ritmo editorial, margem larga e leitura sem pressa.",
  },
  {
    name: "Cartões",
    copy: "Impressos curtos: tipo, margem e um gesto que cabe na mão.",
  },
  {
    name: "Design de produtos",
    copy: "Volume, material e detalhe para objetos que se reconhecem no uso.",
  },
] as const;

type ServiceName = (typeof services)[number]["name"];

const questions = [
  {
    q: "Que tipo de peça entra no portfólio?",
    a: "Logos, banners, web design, cartões e design de produtos. Cada estudo mostra a peça e a decisão que a formou.",
  },
  {
    q: "Como um trabalho começa?",
    a: "Com um problema pequeno o bastante para acompanhar até a entrega. A pesquisa fica no caso, não numa pasta separada.",
  },
  {
    q: "O que fica visível além da capa?",
    a: "Anotações, alternativas que ficaram de fora e o caminho entre o esboço e a peça final.",
  },
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

function ServiceMark({ name }: { name: ServiceName }) {
  switch (name) {
    case "Logos":
      return (
        <span className="grid size-9 place-items-center rounded-full bg-neutral-950 text-xs font-medium text-white">
          R
        </span>
      );
    case "Banners":
      return (
        <span className="flex w-11 flex-col gap-1">
          <span className="h-2.5 rounded-sm bg-neutral-900" />
          <span className="h-2.5 w-8 rounded-sm bg-neutral-400" />
        </span>
      );
    case "Web design":
      return (
        <span className="w-11 overflow-hidden rounded-md bg-white ring-1 ring-black/10">
          <span className="block h-2 bg-neutral-200" />
          <span className="m-1 block h-4 rounded-sm bg-gradient-to-br from-indigo-400 to-violet-500" />
        </span>
      );
    case "Cartões":
      return (
        <span className="relative h-8 w-11 rounded-md bg-gradient-to-br from-neutral-800 to-neutral-950">
          <span className="absolute top-1.5 right-1.5 h-1 w-4 rounded-full bg-white/70" />
        </span>
      );
    case "Design de produtos":
      return (
        <span className="flex flex-col items-center">
          <span className="h-1.5 w-3 rounded-t-sm bg-neutral-500" />
          <span className="h-7 w-5 rounded-b-md bg-gradient-to-b from-neutral-600 to-neutral-950" />
        </span>
      );
    default: {
      const exhaustive: never = name;
      return exhaustive;
    }
  }
}

function HeroThumbs() {
  return (
    <div className="flex items-center gap-2" aria-hidden="true">
      <span className="relative h-12 w-[4.25rem] overflow-hidden rounded-lg bg-gradient-to-br from-[#f0c7a4] to-[#8a4b38]">
        <span className="absolute inset-x-2 bottom-1.5 h-4 rounded-sm bg-black/25" />
      </span>
      <span className="relative h-12 w-[4.25rem] overflow-hidden rounded-lg bg-gradient-to-b from-[#7ea4d4] to-[#1d355f]">
        <span className="absolute top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-[#e7c2ae]" />
        <span className="absolute inset-x-2 bottom-0 h-5 rounded-t-full bg-[#16325c]" />
      </span>
      <span className="relative h-12 w-[4.25rem] overflow-hidden rounded-lg bg-[#0d1524]">
        <span className="absolute top-1/2 left-2 size-4 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,#fff_0%,#9db4d4_40%,transparent_70%)]" />
        <span className="absolute top-1/2 right-2 size-4 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,#fff_0%,#9db4d4_40%,transparent_70%)]" />
      </span>
    </div>
  );
}

export function LandingHome() {
  const project = getProject("orbe") ?? getFeaturedProject();

  return (
    <main id="conteudo" className="min-h-svh bg-[#070708] text-white">
      <a
        href="#painel"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-3 focus:py-2 focus:text-neutral-950"
      >
        Ir para o conteúdo
      </a>
      <div className="mx-auto grid w-full max-w-[1600px] items-stretch gap-3 p-3 sm:p-4 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:gap-4">
        <div
          id="painel"
          className="flex h-full flex-col overflow-hidden rounded-[1.7rem] bg-white text-neutral-950"
        >
          <section className="landing-hero flex min-h-[760px] flex-1 flex-col px-6 pt-6 pb-7 text-white sm:px-9 sm:pt-7 lg:min-h-[920px] lg:px-11">
            <header className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
              <Link
                href="/"
                className="text-[15px] font-medium tracking-tight text-white"
              >
                Ricardo
              </Link>
              <nav aria-label="Seções" className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-white/75">
                {nav.map((item) => (
                  <a key={item.href} href={item.href} className="transition-colors hover:text-white">
                    {item.label}
                  </a>
                ))}
                <a
                  href="#contato"
                  className="ml-1 inline-flex items-center gap-1.5 text-white sm:ml-4"
                >
                  Contato
                  <span aria-hidden="true">→</span>
                </a>
              </nav>
            </header>

            <div className="relative mt-16 sm:mt-20 lg:mt-24">
              <h1 className="max-w-[11ch] text-[clamp(3.4rem,6.5vw,5.75rem)] leading-[0.88] font-medium tracking-[-0.045em]">
                <span className="block text-white">Desenhar</span>
                <span className="block text-white/55">presença</span>
                <span className="block text-white">com</span>
                <span className="block text-white/55">clareza</span>
              </h1>
              <p className="mt-6 max-w-[15rem] text-[13px] leading-snug text-white/75 lg:absolute lg:top-2 lg:right-0 lg:mt-0 lg:max-w-[11.5rem] lg:text-right">
                O desenho bom aproxima uma ideia de quem precisa reconhecê-la.
              </p>
            </div>

            <div className="mt-8">
              <AvatarRow count={4} size="size-10" ring="ring-2 ring-white/85" />
            </div>

            <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-16 text-neutral-950">
              <a href="#projetos" className="text-[12px] tracking-[0.16em] uppercase">
                Ver portfólio
              </a>
              <HeroThumbs />
              <a href="#sobre" className="inline-flex items-center gap-3 text-[12px] tracking-[0.16em] uppercase">
                Rolar
                <span className="grid size-9 place-items-center rounded-full border border-neutral-950/25">
                  <PlusIcon className="size-4" aria-hidden="true" />
                </span>
              </a>
            </div>
          </section>

          <section id="sobre" className="scroll-mt-6 px-6 pt-2 pb-12 sm:px-9 lg:px-11 lg:pb-16">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-6">
              <h2 className="text-[clamp(1.85rem,2.55vw,2.75rem)] leading-[1.12] font-medium tracking-[-0.03em] text-neutral-950 lg:col-span-9">
                Cada peça guarda o caminho: a pesquisa, a alternativa que saiu e                 a forma que ficou{" "}
                <AvatarRow
                  count={3}
                  size="size-7"
                  ring="ring-2 ring-white"
                  className="mx-1.5 translate-y-[-0.08em] align-middle"
                />{" "}
                legível no logo, na página e no objeto.
              </h2>
              <div className="flex flex-row justify-end gap-3 lg:col-span-3 lg:row-span-2 lg:flex-col lg:items-end lg:justify-end" aria-hidden="true">
                <span className="h-16 w-[4.6rem] rounded-2xl bg-neutral-100 ring-1 ring-black/5" />
                <span className="h-16 w-[4.6rem] rounded-2xl bg-neutral-100 ring-1 ring-black/5" />
                <span className="h-16 w-[4.6rem] rounded-2xl bg-neutral-100 ring-1 ring-black/5" />
              </div>
              <div className="grid gap-4 sm:grid-cols-12 lg:col-span-9">
                <p className="text-[11px] tracking-[0.2em] text-neutral-500 uppercase sm:col-span-3">
                  Sobre
                </p>
                <div className="sm:col-span-7">
                  <p className="max-w-sm text-sm leading-relaxed text-neutral-500">
                    {profile.about[0]}
                  </p>
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

        <div className="flex flex-col gap-3 lg:gap-3.5">
          <div
            className="relative aspect-[5/4] overflow-hidden rounded-[1.35rem] bg-[#09090b]"
            aria-hidden="true"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_78%,rgba(120,78,48,0.42),transparent_62%)]" />
            <div className="absolute top-[7%] left-1/2 flex w-[42%] -translate-x-1/2 flex-col items-center">
              <div className="h-8 w-[36%] rounded-t-md bg-gradient-to-b from-zinc-400 to-zinc-700 shadow-[inset_-6px_0_12px_rgba(0,0,0,0.35)]" />
              <div className="h-3.5 w-[68%] bg-gradient-to-r from-zinc-800 via-zinc-500 to-zinc-900" />
              <div className="relative mt-px h-64 w-full rounded-b-[2rem] rounded-t-xl bg-gradient-to-br from-zinc-300 via-zinc-600 to-zinc-950 shadow-[inset_10px_0_18px_rgba(255,255,255,0.16),0_28px_40px_rgba(0,0,0,0.45)]">
                <div className="absolute inset-y-8 left-[22%] w-px bg-white/45" />
                <div className="absolute top-12 right-4 left-8 h-14 rounded-md bg-black/25" />
                <div className="absolute top-16 left-10 h-px w-10 bg-white/50" />
              </div>
            </div>
            <div className="absolute right-[8%] bottom-[9%] h-16 w-28 rounded-lg bg-gradient-to-br from-[#5a4034] to-[#140f0c] shadow-lg" />
          </div>

          <div className="grid grid-cols-2 gap-3" aria-hidden="true">
            <div className="relative aspect-square overflow-hidden rounded-[1.2rem] bg-[#102848]">
              <div className="absolute top-[18%] left-1/2 h-[30%] w-[36%] -translate-x-1/2 rounded-full bg-gradient-to-b from-[#e4c3ae] to-[#b07d64]" />
              <div className="absolute inset-x-[12%] bottom-0 h-[46%] rounded-t-[999px] bg-gradient-to-b from-[#1a3d6e] to-[#0b1c34]" />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-[1.2rem] bg-gradient-to-br from-[#102033] to-[#070d14]">
              <div className="absolute top-1/2 left-[16%] size-[4.5rem] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,#f7f9ff_0%,#b7c8e2_26%,#1c334c_58%,transparent_72%)]" />
              <div className="absolute top-1/2 right-[16%] size-[4.5rem] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,#f7f9ff_0%,#b7c8e2_26%,#1c334c_58%,transparent_72%)]" />
            </div>
          </div>

          <section
            id="servicos"
            aria-labelledby="servicos-titulo"
            className="scroll-mt-6 rounded-[1.35rem] bg-white px-5 py-3 text-neutral-950 sm:px-6"
          >
            <h2 id="servicos-titulo" className="sr-only">
              Serviços
            </h2>
            <ul>
              {services.map((service) => (
                <li
                  key={service.name}
                  className="grid grid-cols-[minmax(0,0.9fr)_4.25rem_minmax(0,1.15fr)] items-center gap-3 border-b border-neutral-200 py-3.5 last:border-b-0"
                >
                  <p className="text-[15px] leading-tight font-medium tracking-tight">
                    {service.name}
                  </p>
                  <div className="grid h-14 place-items-center" aria-hidden="true">
                    <ServiceMark name={service.name} />
                  </div>
                  <p className="text-[12px] leading-snug text-neutral-500">{service.copy}</p>
                </li>
              ))}
            </ul>
          </section>

          <Link
            id="projetos"
            href={`/trabalho/${project.slug}`}
            aria-label={`Ver projeto ${project.title}`}
            className="landing-project relative block min-h-[280px] scroll-mt-6 overflow-hidden rounded-[1.35rem] p-6"
          >
            <p className="text-sm text-white/80">Peça em destaque</p>
            <p className="mt-1 max-w-[12rem] text-3xl leading-none font-medium tracking-tight">
              {project.title}
            </p>
            <p className="mt-3 max-w-[14rem] text-sm leading-snug text-white/75">
              {project.role}
            </p>
            <div
              className="pointer-events-none absolute bottom-[-22%] left-1/2 size-72 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_32%_28%,#6a6284_0%,#221c36_42%,#07060d_72%)] shadow-[0_30px_50px_rgba(0,0,0,0.35)]"
              aria-hidden="true"
            >
              <span className="absolute top-[14%] left-[18%] h-16 w-24 rounded-full bg-white/20 blur-md" />
              <span className="absolute right-[18%] bottom-[28%] h-3 w-20 rounded-full bg-fuchsia-300/90 blur-[1px]" />
            </div>
            <span className="absolute bottom-5 left-6 text-xs text-white/70">01</span>
          </Link>

          <section id="faq" aria-labelledby="faq-titulo" className="scroll-mt-6 px-1 pt-4 pb-6">
            <div className="grid items-end gap-4 sm:grid-cols-[minmax(0,1.35fr)_minmax(0,0.8fr)]">
              <h2
                id="faq-titulo"
                className="text-[clamp(2.5rem,4.4vw,4rem)] leading-[0.9] font-medium tracking-[-0.04em]"
              >
                <span className="block">Perguntas</span>
                <span className="my-1 flex items-center gap-3 text-[0.38em] font-normal tracking-normal text-white/80">
                  <span className="h-px flex-1 bg-white/80" />
                  mais
                  <span className="h-px w-8 bg-white/40 sm:w-14" />
                </span>
                <span className="block">frequentes</span>
              </h2>
              <p className="pb-1 text-[12px] leading-relaxed text-white/55">
                Respostas curtas sobre o tipo de peça, o começo de um trabalho e o que fica visível no processo.
              </p>
            </div>
            <div className="mt-8 border-t border-white/15">
              {questions.map((item) => (
                <details key={item.q} className="group border-b border-white/15">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-3.5 text-sm text-white [&::-webkit-details-marker]:hidden">
                    {item.q}
                    <span className="text-white/50 group-open:hidden" aria-hidden="true">
                      +
                    </span>
                    <span className="hidden text-white/50 group-open:inline" aria-hidden="true">
                      –
                    </span>
                  </summary>
                  <p className="max-w-md pb-4 text-sm leading-relaxed text-white/60">{item.a}</p>
                </details>
              ))}
            </div>
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
    </main>
  );
}
