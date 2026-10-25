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
import { assetSrc } from "@/lib/assets";

const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--palette-gold)]";

const tileBackgrounds = [
  "/tiles/tile-1.webp",
  "/tiles/tile-2.webp",
  "/tiles/tile-3.webp",
  "/tiles/tile-4.webp",
  "/tiles/tile-5.webp",
  "/tiles/tile-6.webp",
  "/tiles/tile-7.webp",
  "/tiles/tile-8.webp",
  "/tiles/tile-9.webp",
] as const;

function tileBackground(index: number): (typeof tileBackgrounds)[number] {
  const image = tileBackgrounds[index];
  if (image) return image;
  return tileBackgrounds[0];
}

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
  image,
}: {
  href: string;
  kicker: string;
  title: string;
  note: string;
  image: string;
}) {
  return (
    <Link href={href} className={`gate-tile group flex h-full min-h-[13.5rem] flex-col justify-end p-5 sm:min-h-52 sm:p-6 ${focus}`}>
      <img
        src={assetSrc(image)}
        alt=""
        className="pointer-events-none absolute inset-0 size-full object-cover transition duration-700 ease-out group-hover:scale-[1.04] group-hover:brightness-110 group-focus-visible:scale-[1.04] group-focus-visible:brightness-110"
      />
      <span
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(11, 11, 13, 0.94) 0%, rgba(11, 11, 13, 0.78) 26%, rgba(11, 11, 13, 0.34) 54%, rgba(11, 11, 13, 0.08) 100%)",
        }}
        aria-hidden="true"
      />
      <span className="relative" style={{ textShadow: "0 1px 12px rgba(11, 11, 13, 0.8)" }}>
        <span className="block text-[11px] tracking-[0.18em] text-[var(--palette-gold)] uppercase">{kicker}</span>
        <span className="mt-2 block text-[clamp(1.35rem,2vw,1.85rem)] leading-tight font-medium tracking-[-0.03em] text-[var(--palette-cream)]">
          {title}
        </span>
        <span className="gate-note text-sm leading-snug text-[var(--palette-gray)]">{note}</span>
      </span>
    </Link>
  );
}

function TileFace({ tile, image }: { tile: HomeTile; image: string }) {
  switch (tile.kind) {
    case "service":
      return (
        <GateTile
          href={categoryHref(tile.name)}
          kicker="Serviço"
          title={tile.name}
          note={categoryNotes[tile.name]}
          image={image}
        />
      );
    case "sobre":
      return <GateTile href="/sobre" kicker="Estúdio" title="Sobre" note={profile.about[0]} image={image} />;
    case "contato":
      return <GateTile href="/contato" kicker="Escreva" title="Contato" note={profile.email} image={image} />;
    case "piece":
      return (
        <GateTile
          href={`/pecas/${tile.piece.slug}`}
          kicker={tile.piece.category}
          title={tile.piece.title}
          note={tile.piece.summary}
          image={image}
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
      className="mx-auto flex min-h-[calc(100svh-var(--site-header))] w-full max-w-[1500px] flex-col gap-2 px-3 pb-2 focus:outline-none sm:px-4 sm:pb-3"
    >
      <h1 className="sr-only">Desenhar presença com clareza</h1>
      <img
        src={assetSrc("/banner.webp")}
        alt={profile.name}
        className="aspect-[1168/300] w-full rounded-[0.7rem] border border-[rgb(141_113_60/42%)] object-cover object-center"
      />
      <ul className="gate-grid grid flex-1 grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3">
        {tiles.map((tile, index) => (
          <li key={tileKey(tile)} className="min-h-0">
            <TileFace tile={tile} image={tileBackground(index)} />
          </li>
        ))}
      </ul>
    </main>
  );
}
