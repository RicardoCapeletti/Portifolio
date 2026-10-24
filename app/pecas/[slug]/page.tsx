import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CoverArt } from "@/components/cover-art";
import { categoryHref, getPortfolioPiece, neighboringPieces, portfolioPieces } from "@/content/portfolio";

export const dynamicParams = false;

export function generateStaticParams() {
  return portfolioPieces.map((piece) => ({ slug: piece.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const piece = getPortfolioPiece(slug);
  if (!piece) {
    return { title: "Peça não encontrada" };
  }

  return {
    title: piece.title,
    description: piece.summary,
    openGraph: {
      title: piece.title,
      description: piece.summary,
      locale: "pt_BR",
      type: "article",
    },
  };
}

export default async function PecaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const piece = getPortfolioPiece(slug);
  if (!piece) {
    notFound();
  }

  const { previous, next } = neighboringPieces(piece.slug);

  return (
    <main id="conteudo" tabIndex={-1} className="mx-auto w-full max-w-6xl px-5 py-12 focus:outline-none sm:px-8">
      <p className="text-sm tracking-[0.18em] text-muted-foreground uppercase">
        <Link href={categoryHref(piece.category)} className="rounded-sm hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">
          {piece.category}
        </Link>
      </p>
      <h1 className="mt-4 font-display text-5xl font-medium tracking-tight sm:text-7xl">{piece.title}</h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">{piece.summary}</p>
      <CoverArt piece={piece} className="mt-8 aspect-[16/9] w-full rounded-[1.5rem]" />
      <dl className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <dt className="text-[11px] tracking-[0.16em] text-muted-foreground uppercase">Categoria</dt>
          <dd className="mt-1 text-sm">{piece.category}</dd>
        </div>
        <div>
          <dt className="text-[11px] tracking-[0.16em] text-muted-foreground uppercase">Ano</dt>
          <dd className="mt-1 text-sm">{piece.year}</dd>
        </div>
        <div>
          <dt className="text-[11px] tracking-[0.16em] text-muted-foreground uppercase">Contexto</dt>
          <dd className="mt-1 text-sm">{piece.context}</dd>
        </div>
        <div>
          <dt className="text-[11px] tracking-[0.16em] text-muted-foreground uppercase">Papel</dt>
          <dd className="mt-1 text-sm">{piece.role}</dd>
        </div>
      </dl>
      <p className="mt-8 max-w-2xl text-base leading-relaxed">{piece.description}</p>
      <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
        <Link href="/#projetos" scroll={false} className="tracking-[0.14em] uppercase hover:text-foreground">
          Voltar aos projetos
        </Link>
        {previous ? (
          <Link href={`/pecas/${previous.slug}`} className="hover:text-foreground">
            Anterior: {previous.title}
          </Link>
        ) : null}
        {next ? (
          <Link href={`/pecas/${next.slug}`} className="hover:text-foreground">
            Próxima: {next.title}
          </Link>
        ) : null}
      </div>
    </main>
  );
}
