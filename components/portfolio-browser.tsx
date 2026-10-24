"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { CoverArt } from "@/components/cover-art";
import {
  categoryAnchor,
  categoryFromAnchor,
  categoryNotes,
  piecesIn,
  portfolioCategories,
  portfolioPieces,
  type PortfolioCategory,
} from "@/content/portfolio";

function usePortfolioCategory(): PortfolioCategory | "todos" {
  const [category, setCategory] = useState<PortfolioCategory | "todos">("todos");

  useEffect(() => {
    const apply = () => {
      setCategory(categoryFromAnchor(window.location.hash.replace("#", "")));
    };
    apply();
    window.addEventListener("hashchange", apply);
    return () => window.removeEventListener("hashchange", apply);
  }, []);

  return category;
}

export function ServiceRows() {
  const active = usePortfolioCategory();

  return (
    <ul>
      {portfolioCategories.map((name) => {
        const piece = piecesIn(name)[0];
        const selected = active === name;
        return (
          <li key={name} className="border-b border-neutral-200 last:border-b-0">
            <a
              href={`#${categoryAnchor(name)}`}
              aria-current={selected ? "true" : undefined}
              className={`grid grid-cols-[minmax(0,1fr)_3.25rem] items-center gap-x-3 gap-y-1 py-3.5 transition-colors min-[900px]:grid-cols-[minmax(0,0.9fr)_4.25rem_minmax(0,1.15fr)] min-[900px]:gap-3 ${selected ? "bg-neutral-50" : "hover:bg-neutral-50"}`}
            >
              <span className="col-start-1 row-start-1 text-[15px] leading-tight font-medium tracking-tight text-neutral-950">
                {name}
              </span>
              {piece ? (
                <CoverArt
                  piece={piece}
                  className="landing-thumb col-start-2 row-span-2 row-start-1 h-12 rounded-lg min-[900px]:row-span-1 min-[900px]:h-14"
                />
              ) : null}
              <span className="col-start-1 row-start-2 text-[12px] leading-snug text-neutral-500 min-[900px]:col-start-3 min-[900px]:row-start-1">
                {categoryNotes[name]}
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export function ProjectGrid() {
  const active = usePortfolioCategory();
  const visible =
    active === "todos" ? portfolioPieces : portfolioPieces.filter((piece) => piece.category === active);
  const countLabel = visible.length === 1 ? "1 peça" : `${visible.length} peças`;

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-3xl font-medium tracking-[-0.03em] text-neutral-950 min-[900px]:text-4xl">Projetos</h2>
          <p className="mt-2 text-sm text-neutral-500">{countLabel}</p>
        </div>
        <div role="group" aria-label="Filtrar por categoria" className="flex flex-wrap gap-x-4 gap-y-2 text-[13px]">
          <a
            href="#projetos"
            aria-current={active === "todos" ? "true" : undefined}
            className={active === "todos" ? "text-neutral-950" : "text-neutral-500 hover:text-neutral-950"}
          >
            Todos
          </a>
          {portfolioCategories.map((category) => {
            const selected = active === category;
            return (
              <a
                key={category}
                id={categoryAnchor(category)}
                href={`#${categoryAnchor(category)}`}
                aria-current={selected ? "true" : undefined}
                className={selected ? "text-neutral-950 underline decoration-from-font underline-offset-4" : "text-neutral-500 hover:text-neutral-950"}
              >
                {category}
              </a>
            );
          })}
        </div>
      </div>
      <ul className="mt-6 grid grid-cols-2 gap-3 min-[900px]:grid-cols-4">
        {visible.map((piece) => (
          <li key={piece.slug}>
            <Link
              href={`/pecas/${piece.slug}`}
              className="group block overflow-hidden rounded-2xl bg-white text-neutral-950 ring-1 ring-black/5"
            >
              <CoverArt piece={piece} className="landing-thumb aspect-[4/3] w-full" />
              <span className="block px-3 py-3">
                <span className="block text-sm font-medium tracking-tight">{piece.title}</span>
                <span className="mt-1 block text-[12px] text-neutral-500">{piece.category}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
