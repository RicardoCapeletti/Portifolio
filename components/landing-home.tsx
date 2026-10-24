import Link from "next/link";

import { profile } from "@/content/profile";
import {
  categoryHref,
  categoryNotes,
  getFeaturedPiece,
  portfolioCategories,
  portfolioPieces,
  type PortfolioCategory,
  type PortfolioPiece,
} from "@/content/portfolio";

const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--palette-gold)]";

type HomeTile =
  | { kind: "service"; name: PortfolioCategory }
  | { kind: "sobre" }
  | { kind: "contato" }
  | { kind: "piece"; piece: PortfolioPiece };

function homeTiles(): HomeTile[] {
  const featured = getFeaturedPiece();
  const companion = portfolioPieces.find((piece) => piece.slug !== featured.slug) ?? featured;
  return [
    ...portfolioCategories.map((name) => ({ kind: "service" as const, name })),
    { kind: "sobre" },
    { kind: "contato" },
    { kind: "piece", piece: featured },
    { kind: "piece", piece: companion },
  ];
}

function tileKey(tile: HomeTile): string {
  switch (tile.kind) {
    case "service":
      return tile.name;
    case "sobre":
      return "sobre";
    case "contato":
      return "contato";
    case "piece":
      return tile.piece.slug;
    default: {
      const neverTile: never = tile;
      return neverTile;
    }
  }
}

function GateTile({
  href,
  kicker,
  title,
  note,
}: {
  href: string;
  kicker: string;
  title: string;
  note: string;
}) {
  return (
    <Link href={href} className={`gate-tile flex h-full min-h-[13.5rem] flex-col justify-end p-5 sm:min-h-52 sm:p-6 ${focus}`}>
      <span className="relative">
        <span className="block text-[11px] tracking-[0.18em] text-[var(--palette-gold)] uppercase">{kicker}</span>
        <span className="mt-2 block text-[clamp(1.35rem,2vw,1.85rem)] leading-tight font-medium tracking-[-0.03em] text-[var(--palette-cream)]">
          {title}
        </span>
        <span className="gate-note text-sm leading-snug text-[var(--palette-gray)]">{note}</span>
      </span>
    </Link>
  );
}

function TileFace({ tile }: { tile: HomeTile }) {
  switch (tile.kind) {
    case "service":
      return (
        <GateTile
          href={categoryHref(tile.name)}
          kicker="Serviço"
          title={tile.name}
          note={categoryNotes[tile.name]}
        />
      );
    case "sobre":
      return <GateTile href="/sobre" kicker="Estúdio" title="Sobre" note={profile.about[0]} />;
    case "contato":
      return <GateTile href="/contato" kicker="Escreva" title="Contato" note={profile.email} />;
    case "piece":
      return (
        <GateTile
          href={`/pecas/${tile.piece.slug}`}
          kicker={tile.piece.category}
          title={tile.piece.title}
          note={tile.piece.summary}
        />
      );
    default: {
      const neverTile: never = tile;
      return neverTile;
    }
  }
}

export function LandingHome() {
  const tiles = homeTiles();

  return (
    <main
      id="conteudo"
      tabIndex={-1}
      className="mx-auto flex min-h-[calc(100svh-var(--site-header))] w-full max-w-[1500px] flex-col px-3 pb-2 focus:outline-none sm:px-4 sm:pb-3"
    >
      <h1 className="sr-only">Desenhar presença com clareza</h1>
      <ul className="gate-grid grid flex-1 grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3">
        {tiles.map((tile) => (
          <li key={tileKey(tile)} className="min-h-0">
            <TileFace tile={tile} />
          </li>
        ))}
      </ul>
    </main>
  );
}
