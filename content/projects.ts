import type { Project, WorkImage } from "@/content/types";
import { extraProjects } from "@/content/projects-extra";

const atelie = {
  capa: {
    src: "/work/atelie-norte/atelie-norte-capa.svg",
    alt: "Cartaz do Ateliê Norte com um vaso de cerâmica em terracota sobre papel quente.",
    caption: "O selo parte de um vaso frontal, legível mesmo pequeno.",
  },
  pesquisa: {
    src: "/work/atelie-norte/atelie-norte-pesquisa.svg",
    alt: "Três fichas de conversa no ateliê, com anotações e amostras de barro.",
    caption: "As fichas seguem a forma da peça, não a coleção.",
  },
  conceito: {
    src: "/work/atelie-norte/atelie-norte-conceito.svg",
    alt: "Três estudos do vaso ao lado de uma paleta curta de barro e terracota.",
    caption: "Três desenhos antes de qualquer aplicação.",
  },
  estrutura: {
    src: "/work/atelie-norte/atelie-norte-estrutura.svg",
    alt: "Duas páginas de catálogo com uma peça por folha e margem larga.",
    caption: "O impresso define a ordem das páginas do site.",
  },
  interface: {
    src: "/work/atelie-norte/atelie-norte-interface.svg",
    alt: "Página do catálogo digital com quatro peças e o selo no canto.",
    caption: "A grelha de quatro colunas repete o catálogo.",
  },
  interfaceMobile: {
    src: "/work/atelie-norte/atelie-norte-interface-mobile.svg",
    alt: "Versão estreita do catálogo, com uma peça por tela e um único pedido de reserva.",
    caption: "No celular, uma peça por vez e um só pedido: reservar.",
  },
  prototipo: {
    src: "/work/atelie-norte/atelie-norte-prototipo.svg",
    alt: "Carimbo circular, etiqueta e a primeira dobra do catálogo lado a lado.",
    caption: "O mesmo desenho serve o carimbo, a etiqueta e a capa.",
  },
} satisfies Record<string, WorkImage>;

const linha = {
  capa: {
    src: "/work/linha-clara/linha-clara-capa.svg",
    alt: "Composição com uma coluna estreita de leitura e muita margem em papel claro.",
    caption: "A coluna estreita é o produto, não um detalhe.",
  },
  pesquisa: {
    src: "/work/linha-clara/linha-clara-pesquisa.svg",
    alt: "Duas páginas de ensaio com uma passagem marcada e anotações na margem.",
    caption: "A leitura atual foi medida: linha longa demais, nota no meio do parágrafo.",
  },
  conceito: {
    src: "/work/linha-clara/linha-clara-conceito.svg",
    alt: "Três escalas de texto empilhadas, da mais miúda à do título.",
    caption: "Três tamanhos. O corpo não cresce com a tela.",
  },
  interface: {
    src: "/work/linha-clara/linha-clara-interface.svg",
    alt: "Tela de leitura com a coluna ao centro e o progresso na margem direita.",
    caption: "Notas e progresso moram na margem.",
  },
} satisfies Record<string, WorkImage>;

const campo = {
  capa: {
    src: "/work/campo/campo-capa.svg",
    alt: "Composição de frutos e verduras em círculos verdes, palha e terracota.",
    caption: "A feira lembrada como banca, não como grade de supermercado.",
  },
  pesquisa: {
    src: "/work/campo/campo-pesquisa.svg",
    alt: "Mapa simples de barracas da feira, com uma banca destacada.",
    caption: "O pedido começa pela banca que a pessoa já conhece.",
  },
  conceito: {
    src: "/work/campo/campo-conceito.svg",
    alt: "Quatro blocos em sequência: banca, itens, cesta e confirmação.",
    caption: "Quatro passos, do tamanho de uma mão.",
  },
  estrutura: {
    src: "/work/campo/campo-estrutura.svg",
    alt: "Lista de itens de uma banca com controles de mais e menos.",
    caption: "Quantidade com mais e menos. O teclado fica para o peso.",
  },
  passos: {
    src: "/work/campo/campo-passos.svg",
    alt: "Quatro telas pequenas mostrando banca, itens, cesta e uma frase de confirmação.",
    caption: "A confirmação é uma frase, não um código.",
  },
  interface: {
    src: "/work/campo/campo-interface.svg",
    alt: "Tela de celular com a cesta da semana e o total no pé da página.",
    caption: "A cesta permanece visível enquanto a pessoa muda de banca.",
  },
  prototipo: {
    src: "/work/campo/campo-prototipo.svg",
    alt: "Três celulares em sequência sobre a mesa da feira, do primeiro item à frase final.",
    caption: "O protótipo foi lido em pé, entre uma banca e outra.",
  },
} satisfies Record<string, WorkImage>;

export const projects: Project[] = [
  {
    slug: "atelie-norte",
    title: "Ateliê Norte",
    year: "2025",
    discipline: "marca",
    role: "Identidade e site",
    summary:
      "Identidade para um ateliê de cerâmica que precisa caber num carimbo, numa embalagem e num catálogo curto.",
    cover: atelie.capa,
    accent: "#c46a3a",
    brief: {
      problem:
        "O ateliê vendia pelo Instagram e por uma folha impressa. O nome mudava de peso conforme a peça, e o site antigo parecia um tema genérico de loja.",
      approach:
        "Partir do carimbo de 18 mm. O que não sobrevive nesse tamanho não entra no sistema: paleta, desenho do vaso e a grelha do catálogo.",
      outcomes: [
        "O símbolo é um vaso visto de frente, desenhado para gravar em argila sem detalhes internos.",
        "A paleta vem do barro cru, do engobe claro e de um terracota de queima.",
        "O site repete a grelha de quatro colunas do catálogo impresso, para a peça ter o mesmo respiro nos dois suportes.",
      ],
    },
    stages: [
      {
        id: "pesquisa",
        title: "Pesquisa",
        summary:
          "Conversas no ateliê e leitura das peças que já saíam com a marca irregular. O pedido da clientela nomeava a forma, não a coleção.",
        decisions: [
          "O público pede a peça pelo nome da forma.",
          "A referência de luz passou a ser a janela, não o estúdio escuro.",
          "O Instagram fica como vitrine. O site fica como catálogo estável.",
        ],
        images: [atelie.pesquisa],
      },
      {
        id: "conceito",
        title: "Conceito",
        summary:
          "Três desenhos do vaso e uma paleta curta, antes de cartão, sacola ou página.",
        decisions: [
          "O vaso frontal ganhou do perfil, porque o perfil some no carimbo.",
          "Duas cores de barro bastam. A terceira era decoração.",
          "Caixa alta só no selo, nunca no texto corrido.",
        ],
        images: [atelie.conceito],
      },
      {
        id: "estrutura",
        title: "Estrutura",
        summary:
          "O catálogo impresso define a ordem do site: capa com o selo, índice pela forma da peça, uma peça por página.",
        decisions: [
          "Medida e tempo de queima aparecem antes do preço.",
          "A capa não usa fotografia. Usa o selo grande.",
          "O índice segue a forma, não a data.",
        ],
        images: [atelie.estrutura],
      },
      {
        id: "interface",
        title: "Interface",
        summary:
          "O site em duas larguras, com a mesma margem do impresso. Um único pedido: reservar.",
        decisions: [
          "Serifa só no nome da peça.",
          "Sem carrinho. A reserva volta para o ateliê.",
          "O selo no canto permanece pequeno e fixo.",
        ],
        images: [atelie.interface, atelie.interfaceMobile],
      },
      {
        id: "prototipo",
        title: "Protótipo",
        summary:
          "Carimbo, etiqueta e a primeira dobra do catálogo saíram do mesmo arquivo, antes do protótipo no navegador.",
        decisions: [
          "A etiqueta usa o desenho do carimbo. Muda o suporte, não o traço.",
          "O papel veio antes da tela.",
        ],
        images: [atelie.prototipo],
      },
    ],
    gallery: [
      atelie.capa,
      atelie.conceito,
      atelie.prototipo,
      atelie.interface,
      atelie.interfaceMobile,
      atelie.estrutura,
    ],
  },
  {
    slug: "linha-clara",
    title: "Linha Clara",
    year: "2026",
    discipline: "interface",
    role: "Interface de leitura",
    summary:
      "Uma superfície de leitura longa em que a medida da linha, a margem e o progresso importam mais que a capa.",
    cover: linha.capa,
    accent: "#1e2a30",
    brief: {
      problem:
        "Ensaios longos estavam num layout de blog, com a linha larga demais e notas no meio do parágrafo.",
      approach:
        "Tratar a leitura como o produto. Definir a medida da linha e o que pode interromper o texto antes de desenhar a navegação.",
      outcomes: [
        "A coluna fica entre 62 e 72 caracteres. No desktop, cresce a margem, não a linha.",
        "Notas e progresso moram na margem, nunca entre parágrafos.",
        "O modo noturno ficou de fora desta versão: a paleta é a do papel, e o contraste foi medido nela.",
      ],
    },
    stages: [
      {
        id: "pesquisa",
        title: "Pesquisa",
        summary:
          "Leitura dos ensaios no layout atual, marcando onde a linha cansa e onde uma nota quebra o parágrafo.",
        decisions: [
          "A largura útil passava de 90 caracteres no desktop.",
          "O sumário competia com o texto em vez de servir a margem.",
          "Quem lê no celular já tinha a medida certa. O problema era a tela larga.",
        ],
        images: [linha.pesquisa],
      },
      {
        id: "conceito",
        title: "Conceito",
        summary:
          "Três tamanhos de texto e uma regra: o corpo não acompanha a largura da janela.",
        decisions: [
          "Título, corpo e nota. Nada além disso na primeira versão.",
          "A nota entra na margem a partir de uma largura mínima.",
          "Sem imagem no meio do ensaio, a menos que o texto pare.",
        ],
        images: [linha.conceito],
      },
      {
        id: "estrutura",
        title: "Estrutura",
        summary:
          "A estrutura foi fechada em palavras, antes do desenho da tela: coluna, margem e o que não pode entrar entre parágrafos.",
        decisions: [
          "Um ensaio por endereço, sem listagem no caminho da leitura.",
          "O progresso é a posição na margem, não uma barra no topo.",
          "Compartilhar fica no fim do texto.",
        ],
        images: [],
      },
      {
        id: "interface",
        title: "Interface",
        summary:
          "A tela larga mostra a coluna no centro e o progresso na margem. A tela estreita guarda a mesma medida e esconde a margem.",
        decisions: [
          "O corpo permanece no mesmo tamanho nas duas larguras.",
          "O título usa a serifa do ensaio, o restante usa a interface.",
          "Nenhum elemento colorido além do marcador de progresso.",
        ],
        images: [linha.interface],
      },
    ],
    gallery: [linha.capa, linha.pesquisa, linha.conceito, linha.interface],
  },
  {
    slug: "campo",
    title: "Campo",
    year: "2025",
    discipline: "produto",
    role: "Fluxo de pedido",
    summary:
      "Pedido semanal de uma feira, desenhado para quem escolhe a cesta no celular entre uma banca e outra.",
    cover: campo.capa,
    accent: "#2f6a45",
    brief: {
      problem:
        "A feira recebia pedidos por mensagem. O produtor só via o total à noite, e o cliente repetia o mesmo texto toda semana.",
      approach:
        "Um fluxo de quatro passos que cabe numa mão: banca, itens, cesta, confirmação. Sem conta obrigatória no primeiro pedido.",
      outcomes: [
        "O pedido começa pela banca, porque é assim que a feira é lembrada.",
        "Quantidades usam mais e menos grandes. O teclado numérico fica para o peso.",
        "A confirmação é uma frase legível para ler em voz alta na banca, não um código de pedido.",
      ],
    },
    stages: [
      {
        id: "pesquisa",
        title: "Pesquisa",
        summary:
          "Acompanhamento de um sábado de feira e leitura das mensagens da semana. O mapa mental das pessoas é a banca, não o produto.",
        decisions: [
          "Ninguém descreve a feira como um catálogo único.",
          "O pedido se repete. A cesta da semana anterior é o melhor ponto de partida.",
          "A conexão no local falha. O fluxo precisa concluir com poucas trocas.",
        ],
        images: [campo.pesquisa],
      },
      {
        id: "conceito",
        title: "Conceito",
        summary:
          "Quatro passos nomeados com a linguagem da feira, sem cadastro na frente.",
        decisions: [
          "Banca, itens, cesta, confirmação. Nessa ordem.",
          "A conta fica para quem quer repetir o pedido na semana seguinte.",
          "O produtor recebe a frase, não uma planilha.",
        ],
        images: [campo.conceito],
      },
      {
        id: "estrutura",
        title: "Estrutura",
        summary:
          "Cada passo tem uma tela e uma saída clara. A cesta acompanha o rodapé para a pessoa não perder o total ao mudar de banca.",
        decisions: [
          "Mais e menos no lugar do campo numérico para unidades.",
          "Peso abre o teclado só quando a banca vende a granel.",
          "Voltar uma etapa não apaga a cesta.",
        ],
        images: [campo.estrutura, campo.passos],
      },
      {
        id: "interface",
        title: "Interface",
        summary:
          "Tipo grande, alvos folgados e a cor da banca como único acento. O restante fica no papel da feira.",
        decisions: [
          "O nome da banca é o título da tela de itens.",
          "O total em reais fica sempre no rodapé.",
          "Nada de ilustração de alimento na lista: a foto da banca já fez esse trabalho.",
        ],
        images: [campo.interface],
      },
      {
        id: "prototipo",
        title: "Protótipo",
        summary:
          "Três telas lidas em pé, no corredor da feira, com sol na tela e uma mão ocupada.",
        decisions: [
          "O botão de confirmar ficou na zona do polegar.",
          "A frase final cabe numa mensagem, sem corte.",
        ],
        images: [campo.prototipo],
      },
    ],
    gallery: [
      campo.capa,
      campo.conceito,
      campo.passos,
      campo.interface,
      campo.prototipo,
      campo.estrutura,
    ],
  },
  ...extraProjects,
];
