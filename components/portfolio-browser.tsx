"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { CoverArt } from "@/components/cover-art";
import {
  categoryFromQuery,
  categoryHref,
  categoryNotes,
  piecesIn,
  portfolioCategories,
  portfolioPieces,
  type PortfolioCategory,
} from "@/content/portfolio";

const focus =
  "rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--palette-gold)]";

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
    <ul>
      {portfolioCategories.map((name) => {
        const piece = piecesIn(name)[0];
        const selected = active === name;
        return (
          <li key={name} className="border-b border-[var(--palette-gold-dark)]/40 last:border-b-0">
            <Link
              href={categoryHref(name)}
              scroll={false}
              onClick={settleOnProjects}
              aria-current={selected ? "true" : undefined}
              className={`grid grid-cols-[minmax(0,1fr)_3.25rem] items-center gap-x-3 gap-y-1 py-3.5 transition-colors min-[900px]:grid-cols-[minmax(0,0.9fr)_4.25rem_minmax(0,1.15fr)] min-[900px]:gap-3 ${focus} ${selected ? "bg-white/5" : "hover:bg-white/5"}`}
            >
              <span className={`col-start-1 row-start-1 text-[15px] leading-tight font-medium tracking-tight ${selected ? "text-[var(--palette-gold)]" : "text-[var(--palette-cream)]"}`}>
                {name}
              </span>
              {piece ? (
                <CoverArt
                  piece={piece}
                  className="landing-thumb col-start-2 row-span-2 row-start-1 h-12 rounded-lg min-[900px]:row-span-1 min-[900px]:h-14"
                />
              ) : null}
              <span className="col-start-1 row-start-2 text-[12px] leading-snug text-[var(--palette-gray)] min-[900px]:col-start-3 min-[900px]:row-start-1">
                {categoryNotes[name]}
              </span>
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

function ProjectList({ active }: { active: PortfolioCategory | "todos" }) {
  const visible =
    active === "todos" ? portfolioPieces : portfolioPieces.filter((piece) => piece.category === active);
  const countLabel = visible.length === 1 ? "1 peça" : `${visible.length} peças`;

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-3xl font-medium tracking-[-0.03em] text-[var(--palette-cream)] min-[900px]:text-4xl">Projetos</h2>
          <p className="mt-2 text-sm text-[var(--palette-gray)]">{countLabel}</p>
        </div>
        <div role="group" aria-label="Filtrar por categoria" className="flex flex-wrap gap-x-4 gap-y-2 text-[13px]">
          <Link
            href={categoryHref("todos")}
            scroll={false}
            onClick={settleOnProjects}
            aria-current={active === "todos" ? "true" : undefined}
            className={active === "todos" ? `text-[var(--palette-gold)] ${focus}` : `text-[var(--palette-gray)] hover:text-[var(--palette-cream)] ${focus}`}
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
                    : `text-[var(--palette-gray)] hover:text-[var(--palette-cream)] ${focus}`
                }
              >
                {category}
              </Link>
            );
          })}
        </div>
      </div>
      <ul className="mt-6 grid grid-cols-2 gap-3 min-[900px]:grid-cols-4">
        {visible.map((piece) => (
          <li key={piece.slug}>
            <Link
              href={`/pecas/${piece.slug}`}
              className={`group block overflow-hidden rounded-2xl bg-[var(--palette-black)] text-[var(--palette-cream)] ring-1 ring-[var(--palette-gold-dark)]/45 ${focus}`}
            >
              <CoverArt piece={piece} className="landing-thumb aspect-[4/3] w-full" />
              <span className="block px-3 py-3">
                <span className="block text-sm font-medium tracking-tight">{piece.title}</span>
                <span className="mt-1 line-clamp-2 text-[12px] leading-snug text-[var(--palette-gray)]">{piece.summary}</span>
                <span className="mt-2 block text-[11px] tracking-[0.12em] text-[var(--palette-gold)] uppercase">{piece.category}</span>
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
