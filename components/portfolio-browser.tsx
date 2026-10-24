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

function useActiveCategory(): PortfolioCategory | "todos" {
  const params = useSearchParams();
  return categoryFromQuery(params.get("categoria"));
}

function ProjectList({ active }: { active: PortfolioCategory | "todos" }) {
  const visible =
    active === "todos" ? portfolioPieces : portfolioPieces.filter((piece) => piece.category === active);
  const countLabel = visible.length === 1 ? "1 peça" : `${visible.length} peças`;
  const title = active === "todos" ? "Projetos" : active;
  const intro = active === "todos" ? "Peças de cada serviço, com o caminho que as formou." : categoryNotes[active];

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-medium tracking-[-0.03em] text-[var(--landing-ink)] lg:text-4xl">{title}</h1>
          <p className="mt-2 max-w-md text-sm text-[var(--landing-muted)]">{intro}</p>
          <p className="mt-2 text-sm text-[var(--landing-muted)]">{countLabel}</p>
        </div>
        <div role="group" aria-label="Filtrar por categoria" className="flex flex-wrap gap-x-4 gap-y-2 text-[13px]">
          <Link
            href={categoryHref("todos")}
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
      <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((piece) => (
          <li key={piece.slug}>
            <Link
              href={`/pecas/${piece.slug}`}
              className={`mosaic-tile flex h-full flex-col overflow-hidden bg-[var(--palette-graphite)] text-[var(--palette-cream)] ${focus}`}
            >
              <CoverArt piece={piece} className="aspect-[4/3] w-full" />
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
