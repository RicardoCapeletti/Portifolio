"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { CoverArt } from "@/components/cover-art";
import {
  categoryFromQuery,
  categoryHref,
  categoryNotes,
  portfolioCategories,
  portfolioPieces,
  type PortfolioCategory,
} from "@/content/portfolio";

const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--palette-gold)]";

function settleOnProjects() {
  window.setTimeout(() => {
    const node = document.getElementById("projetos");
    if (!node) return;
    const root = document.documentElement;
    const previous = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";
    node.scrollIntoView({ block: "start" });
    root.style.scrollBehavior = previous;
  }, 80);
}

function useActiveCategory(): PortfolioCategory | "todos" {
  const params = useSearchParams();
  return categoryFromQuery(params.get("categoria"));
}

function ServiceList({ active }: { active: PortfolioCategory | "todos" }) {
  return (
    <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
      {portfolioCategories.map((name) => {
        const selected = active === name;
        return (
          <li key={name}>
            <Link
              href={categoryHref(name)}
              scroll={false}
              onClick={settleOnProjects}
              aria-current={selected ? "true" : undefined}
              className={`mosaic-tile flex h-full min-h-40 flex-col justify-between bg-[var(--palette-graphite)] p-5 ${focus} ${selected ? "text-[var(--palette-gold)]" : "text-[var(--palette-cream)]"}`}
            >
              <span className="text-[15px] leading-tight font-medium tracking-tight">{name}</span>
              <span className="mt-6 text-[12px] leading-snug text-[var(--palette-gray)]">{categoryNotes[name]}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export function ServiceRows() {
  return <ServiceList active={useActiveCategory()} />;
}

export function ServiceRowsFallback() {
  return <ServiceList active="todos" />;
}

type SpanCycle = 0 | 1 | 2 | 3 | 4 | 5;

function tileSpan(index: number): string {
  const cycle = (index % 6) as SpanCycle;
  switch (cycle) {
    case 0:
      return "lg:col-span-7 lg:row-span-2";
    case 1:
    case 2:
      return "lg:col-span-5";
    case 3:
    case 4:
    case 5:
      return "lg:col-span-4";
    default: {
      const neverCycle: never = cycle;
      return neverCycle;
    }
  }
}

function ProjectList({ active }: { active: PortfolioCategory | "todos" }) {
  const visible =
    active === "todos" ? portfolioPieces : portfolioPieces.filter((piece) => piece.category === active);
  const countLabel = visible.length === 1 ? "1 peça" : `${visible.length} peças`;

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-3xl font-medium tracking-[-0.03em] text-[var(--landing-ink)] lg:text-4xl">Projetos</h2>
          <p className="mt-2 text-sm text-[var(--landing-muted)]">{countLabel}</p>
        </div>
        <div role="group" aria-label="Filtrar por categoria" className="flex flex-wrap gap-x-4 gap-y-2 text-[13px]">
          <Link
            href={categoryHref("todos")}
            scroll={false}
            onClick={settleOnProjects}
            aria-current={active === "todos" ? "true" : undefined}
            className={active === "todos" ? `text-[var(--palette-gold)] ${focus}` : `text-[var(--landing-muted)] hover:text-[var(--landing-ink)] ${focus}`}
          >
            Todos
          </Link>
          {portfolioCategories.map((category) => {
            const selected = active === category;
            return (
              <Link
                key={category}
                href={categoryHref(category)}
                scroll={false}
                onClick={settleOnProjects}
                aria-current={selected ? "true" : undefined}
                className={
                  selected
                    ? `text-[var(--palette-gold)] underline decoration-[var(--palette-gold)] decoration-from-font underline-offset-4 ${focus}`
                    : `text-[var(--landing-muted)] hover:text-[var(--landing-ink)] ${focus}`
                }
              >
                {category}
              </Link>
            );
          })}
        </div>
      </div>
      <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-12">
        {visible.map((piece, index) => (
          <li key={piece.slug} className={tileSpan(index)}>
            <Link
              href={`/pecas/${piece.slug}`}
              className={`mosaic-tile flex h-full flex-col bg-[var(--palette-graphite)] text-[var(--palette-cream)] ${focus}`}
            >
              <span className="block min-h-0 overflow-hidden lg:flex-1">
                <CoverArt piece={piece} className="landing-thumb aspect-[4/3] w-full lg:aspect-auto lg:h-full lg:min-h-52" />
              </span>
              <span className="border-t border-[var(--palette-gold-dark)]/50 px-4 py-4">
                <span className="block text-[11px] tracking-[0.14em] text-[var(--palette-gold)] uppercase">{piece.category}</span>
                <span className="mt-1 block text-base font-medium tracking-tight">{piece.title}</span>
                <span className="mt-1 line-clamp-2 text-[12px] leading-snug text-[var(--palette-gray)]">{piece.summary}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ProjectGrid() {
  return <ProjectList active={useActiveCategory()} />;
}

export function ProjectGridFallback() {
  return <ProjectList active="todos" />;
}
