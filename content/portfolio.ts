export const portfolioCategories = [
  "Logos",
  "Banners",
  "Web design",
  "Cartões",
  "Design de produtos",
] as const;

export type PortfolioCategory = (typeof portfolioCategories)[number];

export type CoverMotif =
  | "seal"
  | "bars"
  | "arch"
  | "bands"
  | "poster"
  | "column"
  | "spread"
  | "app"
  | "ticket"
  | "fold"
  | "lamp"
  | "tin"
  | "vase";

export type PortfolioPiece = {
  slug: string;
  title: string;
  category: PortfolioCategory;
  year: string;
  context: string;
  role: string;
  summary: string;
  description: string;
  featured?: boolean;
  image?: string;
  cover: {
    from: string;
    to: string;
    motif: CoverMotif;
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
    slug: "leme",
    title: "Leme",
    category: "Logos",
    year: "2025",
    context: "Padaria Leme, Pinheiros",
    role: "Identidade visual",
    summary: "Selo da padaria de bairro, legível no saco de pão e no letreiro da esquina.",
    description:
      "A Leme abre cedo na Teodoro Sampaio e precisava de uma marca que coubesse no carimbo da embalagem e na fachada. O desenho parte de um pão visto de cima: um círculo e um risco. São duas cores, sem sombra. O nome entra em caixa baixa, curto o bastante para a sacola.",
    cover: { from: "#3f2a22", to: "#e7cbb4", motif: "seal" },
  },
  {
    slug: "marcenaria",
    title: "Marcenaria",
    category: "Logos",
    year: "2025",
    context: "Marcenaria",
    role: "Identidade visual",
    summary: "Monograma em bronze sobre preto, com o nome em caixa alta.",
    description:
      "O logotipo junta um monograma em bronze e o nome Marcenaria. O desenho lembra uma letra e o telhado de uma casa, sobre fundo preto. Abaixo do nome, a linha “planejando seus sonhos em madeira”.",
    image: "/tiles/marcenaria.webp",
    cover: { from: "#0b0b0d", to: "#c4895a", motif: "seal" },
  },
  {
    slug: "barro-alto",
    title: "Barro Alto",
    category: "Logos",
    year: "2024",
    context: "Ateliê Barro Alto, Vila Madalena",
    role: "Identidade visual",
    summary: "Wordmark de um ateliê de cerâmica, feito para a placa e para a etiqueta da peça.",
    description:
      "O Barro Alto vende peças únicas e não queria um símbolo competindo com o objeto. A marca é o nome, com um encontro entre as letras que lembra a boca de um vaso. Funciona em preto sobre o barro cru e em branco na vitrine. A etiqueta leva só isso.",
    cover: { from: "#4a342c", to: "#d7b7a3", motif: "bars" },
  },
  {
    slug: "mirante",
    title: "Mirante",
    category: "Logos",
    year: "2026",
    context: "Livraria Mirante, Santa Cecília",
    role: "Identidade visual",
    summary: "Monograma de uma livraria de mesa única, pensado para o marcador e a sacola.",
    description:
      "A Mirante cabe numa sala e numa mesa de lançamento. O monograma junta a inicial e uma linha de horizonte, no tamanho de um carimbo. Não há ícone extra. Quem entra lê o nome primeiro, no marcador de página e na sacola de papel.",
    cover: { from: "#1c2430", to: "#d5dbe6", motif: "arch" },
  },
  {
    slug: "som-lab",
    title: "SOM LAB",
    category: "Logos",
    year: "2026",
    context: "SOM LAB, escola de música",
    role: "Identidade visual",
    summary: "Wordmark branco sobre preto, com o O em forma de onda.",
    description:
      "O logotipo escreve SOM LAB em caixa alta, sobre fundo preto. O O vira um círculo com barras em ciano, no desenho de uma onda. Abaixo, a linha “escola de música”, espaçada. Nos cantos, barras verticais em verde-azulado.",
    image: "/tiles/som-lab.webp",
    cover: { from: "#0b0b0d", to: "#1a6b73", motif: "seal" },
  },
  {
    slug: "feira-da-vila",
    title: "Feira da Vila",
    category: "Banners",
    year: "2025",
    context: "Feira de domingo, Vila Romana",
    role: "Direção de arte",
    summary: "Série de faixas para a feira, com um recado só por peça.",
    description:
      "A feira precisava avisar horário, banca e o que acabou de chegar, sem parecer cartaz de supermercado. Cada faixa leva uma linha de texto e uma barra de cor. O conjunto se reconhece de longe, no gradil da praça. A mesma grelha serve o stories e o impresso.",
    cover: { from: "#1f4d32", to: "#e6f27a", motif: "bands" },
  },
  {
    slug: "casa-do-vale",
    title: "Casa do Vale",
    category: "Banners",
    year: "2026",
    context: "Pousada Casa do Vale, Serra da Mantiqueira",
    role: "Campanha",
    summary: "Campanha de inverno da pousada, com a data grande e o restante em silêncio.",
    description:
      "A Casa do Vale abre a temporada de frio com poucas vagas e um recado direto. Os banners repetem a mesma grelha: lugar, data e uma cor de madrugada. Não há foto de lareira. A série vale para o site e para o ponto de quem sobe a serra no fim de semana.",
    cover: { from: "#0e1c33", to: "#b7c9de", motif: "poster" },
  },
  {
    slug: "oficina-sul",
    title: "Oficina Sul",
    category: "Web design",
    year: "2025",
    context: "Marcenaria Oficina Sul, Ipiranga",
    role: "Web design",
    summary: "Página da marcenaria com uma peça por dobra e o orçamento no fim.",
    description:
      "A Oficina Sul recebe visita no galpão e não queria um catálogo infinito. O site mostra três móveis, o prazo e um formulário curto. A coluna é estreita, como a ficha que já usam na bancada. O telefone fica fixo no canto, do tamanho de quem liga do celular.",
    cover: { from: "#3a2a1c", to: "#f0e2cf", motif: "column" },
  },
  {
    slug: "margem",
    title: "Margem",
    category: "Web design",
    year: "2026",
    context: "Revista Margem, São Paulo",
    role: "Web design",
    summary: "Site da revista com a matéria longa no centro e a capa só na abertura.",
    description:
      "A Margem publica um ensaio por edição e se perdia num tema de blog. A página nova trata o texto como o produto: medida de linha, nota na lateral e a capa apenas no começo. O arquivo das edições fica numa lista, sem grade de miniaturas. Quem lê no celular encontra a mesma coluna.",
    cover: { from: "#24182f", to: "#efe6f4", motif: "spread" },
  },
  {
    slug: "horto-perdizes",
    title: "Horto Perdizes",
    category: "Web design",
    year: "2026",
    context: "Horto Perdizes, entrega de feira",
    role: "UI",
    summary: "Pedido semanal de hortifruti, com a banca primeiro e a cesta no fim.",
    description:
      "O Horto entrega caixa fechada para quem já conhece a feira do bairro. O fluxo começa pela banca, não por uma busca. São quatro passos: o que chegou, a quantidade, o dia e a confirmação. O botão de fechar o pedido é o único em cor. O restante fica em preto.",
    cover: { from: "#1d4a32", to: "#d7efc8", motif: "app" },
  },
  {
    slug: "marcenaria-cartao",
    title: "Marcenaria (cartão)",
    category: "Cartões",
    year: "2025",
    context: "Marcenaria",
    role: "Impresso",
    summary: "Cartão com o monograma em madeira, o nome em caixa alta e a linha de baixo.",
    description:
      "O cartão leva o mesmo monograma da marca, agora com veios de madeira, sobre fundo preto. O nome Marcenaria entra em caixa alta. Abaixo, a linha “planejando seus sonhos em madeira”, entre dois traços.",
    image: "/tiles/marcenaria-cartao.webp",
    cover: { from: "#1a120c", to: "#c4895a", motif: "ticket" },
  },
  {
    slug: "som-lab-cartao",
    title: "SOM LAB (cartão)",
    category: "Cartões",
    year: "2026",
    context: "SOM LAB, escola de música",
    role: "Impresso",
    summary: "Cartão preto com o wordmark branco e a linha “escola de música”.",
    description:
      "O cartão leva o mesmo wordmark da escola, sem as barras dos cantos. SOM LAB fica no centro, em branco. O O guarda a onda em ciano. Abaixo, a linha “escola de música”, sobre fundo preto.",
    image: "/tiles/som-lab-cartao.webp",
    cover: { from: "#0b0b0d", to: "#2ec4c7", motif: "ticket" },
  },
  {
    slug: "nara-flores",
    title: "Nara Flores",
    category: "Cartões",
    year: "2025",
    context: "Floricultura Nara, Vila Buarque",
    role: "Impresso",
    summary: "Cartão de visita com o nome grande e o endereço numa linha só.",
    description:
      "A Nara entrega buquê de bicicleta e o cartão precisava caber no bolso do avental. O nome ocupa a frente. No verso ficam a rua, o WhatsApp e o horário de sábado. O papel é cru, numa cor só, sem verniz. Quem recebe ainda lê o nome com o cartão na mão.",
    cover: { from: "#6d2438", to: "#f3d5dc", motif: "ticket" },
  },
  {
    slug: "mesa-posta",
    title: "Mesa Posta",
    category: "Cartões",
    year: "2024",
    context: "Clube de jantar Mesa Posta, Pinheiros",
    role: "Convite",
    summary: "Convite dobrado para o jantar mensal, com o menu do lado de dentro.",
    description:
      "A Mesa Posta reúne doze pessoas por mês num apartamento em Pinheiros. O convite dobra ao meio: fora, a data; dentro, o menu em três linhas. Quem guarda o papel ainda lê o prato principal. A tipografia é a mesma do cartaz da porta. Não há ilustração de taça.",
    cover: { from: "#4c1d2a", to: "#f0ddd4", motif: "fold" },
  },
  {
    slug: "luminaria-vao",
    title: "Luminária Vão",
    category: "Design de produtos",
    year: "2026",
    context: "Oficina Vão, Santa Cecília",
    role: "Design de produto",
    summary: "Luminária de mesa com o globo baixo e o fio escondido no pé.",
    description:
      "A Oficina Vão queria uma luminária que coubesse na mesa de jantar sem parecer abajur de hotel. O globo fica perto do tampo e a luz sai para baixo. O pé é um cilindro de alumínio, e o fio sobe por dentro. O nome entra gravado, pequeno, na base.",
    featured: true,
    cover: { from: "#161619", to: "#c5a059", motif: "lamp" },
  },
  {
    slug: "grao-miudo",
    title: "Grão Miúdo",
    category: "Design de produtos",
    year: "2025",
    context: "Torrefação Grão Miúdo, Mooca",
    role: "Embalagem",
    summary: "Lata de café com o lote na frente e a fazenda em três linhas atrás.",
    description:
      "O Grão Miúdo torra pouco e troca de lote toda semana. A lata precisava mostrar o nome do café maior que o da torrefação. A frente leva o lote e a data de torra. O verso guarda três linhas sobre a fazenda. A tampa volta a fechar, porque o pacote dura mais de um café.",
    cover: { from: "#2a211c", to: "#d4b483", motif: "tin" },
  },
  {
    slug: "serie-baixa",
    title: "Série Baixa",
    category: "Design de produtos",
    year: "2024",
    context: "Ateliê Barro Alto, Vila Madalena",
    role: "Design de produto",
    summary: "Vaso baixo de mesa, com a boca larga e a marca só na base.",
    description:
      "Depois da identidade, o ateliê pediu uma peça de entrada: estável na prateleira e simples de produzir. A boca é larga e a altura cabe numa mão. O selo fica na base, para não riscar o desenho do barro. A série se chama Baixa porque não compete com o arranjo.",
    cover: { from: "#8a4b32", to: "#f0d2bc", motif: "vase" },
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
  if (category === "todos") return "/projetos";
  return `/projetos?categoria=${encodeURIComponent(category)}`;
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
