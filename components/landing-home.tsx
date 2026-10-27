import Link from "next/link";

import { profile } from "@/content/profile";
import { categoryHref, categoryNotes, type PortfolioCategory } from "@/content/portfolio";
import { assetSrc } from "@/lib/assets";

const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--palette-gold)]";

const mosaicServices = ["Logos", "Banners", "Web design", "Cartões"] as const satisfies readonly PortfolioCategory[];

const tileBackgrounds = [
  "/tiles/tile-1.webp",
  "/tiles/tile-2.webp",
  "/tiles/tile-3.webp",
  "/tiles/tile-4.webp",
  "/tiles/tile-6.webp",
  "/tiles/tile-7.webp",
] as const;

function tileBackground(index: number): (typeof tileBackgrounds)[number] {
  const image = tileBackgrounds[index];
  if (image) return image;
  return tileBackgrounds[0];
}

type HomeTile = { kind: "service"; name: PortfolioCategory } | { kind: "sobre" } | { kind: "contato" };

function homeTiles(): HomeTile[] {
  return [...mosaicServices.map((name) => ({ kind: "service" as const, name })), { kind: "sobre" }, { kind: "contato" }];
}

function tileKey(tile: HomeTile): string {
  switch (tile.kind) {
    case "service":
      return tile.name;
    case "sobre":
      return "sobre";
    case "contato":
      return "contato";
    default: {
      const neverTile: never = tile;
      return neverTile;
    }
  }
}

const tileScrim =
  "linear-gradient(to top, rgba(11, 11, 13, 0.94) 0%, rgba(11, 11, 13, 0.78) 26%, rgba(11, 11, 13, 0.34) 54%, rgba(11, 11, 13, 0.08) 100%)";

const coverImageClass =
  "pointer-events-none absolute inset-0 size-full object-cover transition duration-700 ease-out group-hover:scale-[1.04] group-hover:brightness-110 group-focus-visible:scale-[1.04] group-focus-visible:brightness-110";

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
    <Link
      href={href}
      className={`gate-tile group flex h-full min-h-[13.5rem] flex-col justify-end p-5 sm:min-h-52 sm:p-6 ${focus}`}
    >
      <img src={assetSrc(image)} alt="" className={coverImageClass} />
      <span className="pointer-events-none absolute inset-0" style={{ background: tileScrim }} aria-hidden="true" />
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
      <ul className="gate-grid grid flex-1 grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
        {tiles.map((tile, index) => (
          <li key={tileKey(tile)} className="min-h-0">
            <TileFace tile={tile} image={tileBackground(index)} />
          </li>
        ))}
      </ul>
    </main>
  );
}
