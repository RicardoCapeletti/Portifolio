export const portfolioCategories = [
  "Logos",
  "Banners",
  "Web design",
  "Cartões",
  "Design de produtos",
] as const;

export type PortfolioCategory = (typeof portfolioCategories)[number];

export type CoverShape = "mark" | "banner" | "screen" | "card" | "object";

export type PortfolioPiece = {
  slug: string;
  title: string;
  category: PortfolioCategory;
  year: string;
  summary: string;
  featured?: boolean;
  cover: {
    from: string;
    to: string;
    shape: CoverShape;
  };
};

export const categoryNotes: Record<PortfolioCategory, string> = {
  Logos: "Símbolo e wordmark que continuam legíveis quando a marca encolhe.",
  Banners: "Campanhas com uma hierarquia só e um foco que se lê de passagem.",
  "Web design": "Páginas com ritmo editorial, margem larga e leitura sem pressa.",
  Cartões: "Impressos curtos: tipo, margem e um gesto que cabe na mão.",
  "Design de produtos": "Volume, material e detalhe para objetos que se reconhecem no uso.",
};

export const portfolioPieces: PortfolioPiece[] = [
  {
    slug: "selo-lume",
    title: "Selo Lume",
    category: "Logos",
    year: "2026",
    summary: "Símbolo circular para um ateliê de luz. O mesmo desenho serve o carimbo e o favicon.",
    cover: { from: "#1c1917", to: "#d6d3d1", shape: "mark" },
  },
  {
    slug: "marca-bruma",
    title: "Marca Bruma",
    category: "Logos",
    year: "2025",
    summary: "Wordmark baixo e largo, pensado para a fachada e para o canto de uma página.",
    cover: { from: "#312e81", to: "#c4b5fd", shape: "mark" },
  },
  {
    slug: "monograma-patio",
    title: "Monograma Pátio",
    category: "Logos",
    year: "2025",
    summary: "Duas letras que se encontram no centro. Funciona em uma cor só.",
    cover: { from: "#7c2d12", to: "#fdba74", shape: "mark" },
  },
  {
    slug: "faixa-clara",
    title: "Faixa Clara",
    category: "Banners",
    year: "2026",
    summary: "Banner de abertura com uma linha de tipo e muito campo vazio.",
    cover: { from: "#0f172a", to: "#7dd3fc", shape: "banner" },
  },
  {
    slug: "campanha-vera",
    title: "Campanha Vera",
    category: "Banners",
    year: "2025",
    summary: "Série curta para uma estação. Cada peça repete a mesma faixa e troca a cor.",
    cover: { from: "#3f6212", to: "#d9f99d", shape: "banner" },
  },
  {
    slug: "pagina-oficina",
    title: "Página Oficina",
    category: "Web design",
    year: "2026",
    summary: "Homepage com coluna estreita, margem larga e um único pedido de contato.",
    cover: { from: "#172554", to: "#93c5fd", shape: "screen" },
  },
  {
    slug: "leitura-larga",
    title: "Leitura Larga",
    category: "Web design",
    year: "2025",
    summary: "Página de texto em que o corpo não cresce com a tela.",
    cover: { from: "#3b0764", to: "#e9d5ff", shape: "screen" },
  },
  {
    slug: "cartao-mio",
    title: "Cartão Mio",
    category: "Cartões",
    year: "2026",
    summary: "Cartão de visita com o nome grande e o restante numa linha só.",
    cover: { from: "#18181b", to: "#a1a1aa", shape: "card" },
  },
  {
    slug: "convite-quinta",
    title: "Convite Quinta",
    category: "Cartões",
    year: "2025",
    summary: "Convite dobrado. A hora fica na capa, o endereço na parte de dentro.",
    cover: { from: "#881337", to: "#fecdd3", shape: "card" },
  },
  {
    slug: "volume-quarto",
    title: "Volume Quarto",
    category: "Design de produtos",
    year: "2026",
    summary: "Objeto compacto: tampa, corpo e um reflexo. A forma se reconhece de lado.",
    featured: true,
    cover: { from: "#2e1065", to: "#c4b5fd", shape: "object" },
  },
  {
    slug: "peca-costa",
    title: "Peça Costa",
    category: "Design de produtos",
    year: "2025",
    summary: "Estudo de um frasco baixo. O rótulo ocupa só uma faixa vertical.",
    cover: { from: "#1c1917", to: "#a8a29e", shape: "object" },
  },
  {
    slug: "caixa-norte",
    title: "Caixa Norte",
    category: "Design de produtos",
    year: "2024",
    summary: "Embalagem com uma abertura só. A marca aparece quando a caixa fecha.",
    cover: { from: "#134e4a", to: "#99f6e4", shape: "object" },
  },
];

export function categoryAnchor(category: PortfolioCategory): string {
  switch (category) {
    case "Logos":
      return "logos";
    case "Banners":
      return "banners";
    case "Web design":
      return "web-design";
    case "Cartões":
      return "cartoes";
    case "Design de produtos":
      return "produtos";
    default: {
      const exhaustive: never = category;
      return exhaustive;
    }
  }
}

export function categoryFromAnchor(anchor: string): PortfolioCategory | "todos" {
  const match = portfolioCategories.find((category) => categoryAnchor(category) === anchor);
  return match ?? "todos";
}

export function categoryFromQuery(value: string | null | undefined): PortfolioCategory | "todos" {
  if (!value) return "todos";
  const named = portfolioCategories.find((category) => category === value);
  if (named) return named;
  return categoryFromAnchor(value);
}

export function categoryHref(category: PortfolioCategory | "todos"): string {
  if (category === "todos") return "/#projetos";
  return `/?categoria=${encodeURIComponent(category)}#projetos`;
}

export function neighboringPieces(slug: string): {
  previous?: PortfolioPiece;
  next?: PortfolioPiece;
} {
  const index = portfolioPieces.findIndex((piece) => piece.slug === slug);
  return {
    previous: index > 0 ? portfolioPieces[index - 1] : undefined,
    next:
      index >= 0 && index < portfolioPieces.length - 1 ? portfolioPieces[index + 1] : undefined,
  };
}

export function piecesIn(category: PortfolioCategory): PortfolioPiece[] {
  return portfolioPieces.filter((piece) => piece.category === category);
}

export function getPortfolioPiece(slug: string): PortfolioPiece | undefined {
  return portfolioPieces.find((piece) => piece.slug === slug);
}

export function getFeaturedPiece(): PortfolioPiece {
  const featured = portfolioPieces.find((piece) => piece.featured);
  const fallback = featured ?? portfolioPieces[0];
  if (!fallback) {
    throw new Error("Cadastre ao menos uma peça em content/portfolio.ts.");
  }
  return fallback;
}
