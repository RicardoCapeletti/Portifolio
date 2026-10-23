import type { Project, WorkImage } from "@/content/types";

const bruma = {
  capa: {
    src: "/work/bruma/capa.svg",
    alt: "Frasco escuro sobre papel claro, com o nome Bruma e uma linha dourada.",
    caption: "O nome cabe numa linha na altura do vidro.",
  },
  pesquisa: {
    src: "/work/bruma/pesquisa.svg",
    alt: "Três tamanhos do mesmo frasco, do vidro de 30 ml até a página.",
    caption: "O desenho é testado no frasco antes da caixa.",
  },
  conceito: {
    src: "/work/bruma/conceito.svg",
    alt: "A palavra Bruma em grande, um fio dourado e o frasco ao lado.",
    caption: "Uma palavra, um fio e o resto é ar.",
  },
  estrutura: {
    src: "/work/bruma/estrutura.svg",
    alt: "Duas páginas: a nota de saída à esquerda e o frasco à direita.",
    caption: "Cada fragrância ocupa uma página, começando pela nota de saída.",
  },
  interface: {
    src: "/work/bruma/interface.svg",
    alt: "Página da fragrância Figo verde, com reserva e muito espaço em branco.",
    caption: "A história só entra depois da nota.",
  },
} satisfies Record<string, WorkImage>;

const malha = {
  capa: {
    src: "/work/malha/capa.svg",
    alt: "Grade de pontos com um caminho azul da origem ao destino.",
    caption: "A rota é a peça. O mapa fica atrás.",
  },
  pesquisa: {
    src: "/work/malha/pesquisa.svg",
    alt: "Rua desenhada pela calçada, ao lado de um tempo de doze minutos a pé.",
    caption: "O tempo medido é o de quem anda.",
  },
  conceito: {
    src: "/work/malha/conceito.svg",
    alt: "Três cartões: travessia, calçada e passo.",
    caption: "Só entra na tela o que ajuda a atravessar a próxima esquina.",
  },
  estrutura: {
    src: "/work/malha/estrutura.svg",
    alt: "Linha azul em ângulos retos até um ponto, com nove minutos ao lado.",
    caption: "A linha quebra na esquina, não no meio da rua.",
  },
  interface: {
    src: "/work/malha/interface.svg",
    alt: "Tela escura com o destino Praça da Luz e o botão começar a andar.",
    caption: "O destino é o título. O mapa cabe na metade de baixo.",
  },
} satisfies Record<string, WorkImage>;

const orbe = {
  capa: {
    src: "/work/orbe/capa.svg",
    alt: "Céu noturno com uma lua grande, um anel fino e o nome Orbe.",
    caption: "A noite é o fundo. A lua é o registro.",
  },
  pesquisa: {
    src: "/work/orbe/pesquisa.svg",
    alt: "Três fichas escuras, cada uma com um círculo de tamanho diferente.",
    caption: "As pessoas descrevem o que viram, não o catálogo.",
  },
  conceito: {
    src: "/work/orbe/conceito.svg",
    alt: "Três círculos alinhados: lugar, visto e hora.",
    caption: "Três campos. O resto fica opcional.",
  },
  estrutura: {
    src: "/work/orbe/estrutura.svg",
    alt: "Tela noturna com a frase três pontos acima do telhado e a hora 22:40.",
    caption: "A frase vem antes do mapa.",
  },
  interface: {
    src: "/work/orbe/interface.svg",
    alt: "Celular escuro com uma lua e o botão guardar a noite.",
    caption: "Guardar a noite é a única ação da primeira tela.",
  },
} satisfies Record<string, WorkImage>;

const largo = {
  capa: {
    src: "/work/largo/capa.svg",
    alt: "Fundo preto com uma letra L construída em blocos claros e o nome Largo.",
    caption: "O espécime é a marca. O nome fica numa linha fina.",
  },
  pesquisa: {
    src: "/work/largo/pesquisa.svg",
    alt: "Quatro cards iguais de loja, com barras no lugar da prova tipográfica.",
    caption: "O site antigo igualava todas as famílias.",
  },
  conceito: {
    src: "/work/largo/conceito.svg",
    alt: "Frase de prova em tamanho de título sobre fundo preto: A pressa faz o tipo largo.",
    caption: "A página abre no tamanho em que a letra se justifica.",
  },
  estrutura: {
    src: "/work/largo/estrutura.svg",
    alt: "Prova enorme das letras A e a, com o nome da família embaixo.",
    caption: "Cada família ganha uma prova escrita para ela.",
  },
  interface: {
    src: "/work/largo/interface.svg",
    alt: "Página branca com um título grande e um botão de licença no canto.",
    caption: "O uso da licença aparece numa linha, antes do preço.",
  },
} satisfies Record<string, WorkImage>;

const vigilia = {
  capa: {
    src: "/work/vigilia/capa.svg",
    alt: "Planta de uma sala com uma cadeira e um arco de luz.",
    caption: "A sala silenciosa, desenhada antes da interface.",
  },
  pesquisa: {
    src: "/work/vigilia/pesquisa.svg",
    alt: "Um formulário longo ao lado de um cartão que só diz livre.",
    caption: "O cadastro pedia mais do que a sala tinha para oferecer.",
  },
  conceito: {
    src: "/work/vigilia/conceito.svg",
    alt: "Seis colunas da noite, duas marcadas como livres.",
    caption: "A grade mostra o vazio antes de pedir o nome.",
  },
  estrutura: {
    src: "/work/vigilia/estrutura.svg",
    alt: "Grade de horários da sala silenciosa, com alguns blocos ocupados.",
    caption: "Livre é o estado normal. Ocupada é a exceção.",
  },
  interface: {
    src: "/work/vigilia/interface.svg",
    alt: "Tela noturna com a sala 2 e um horário marcado em amarelo.",
    caption: "Depois das 22h o chrome escurece e a grade permanece legível.",
  },
} satisfies Record<string, WorkImage>;

const costa = {
  capa: {
    src: "/work/costa/capa.svg",
    alt: "Horizonte com sol sobre o mar e a frase entrar às 16:10.",
    caption: "A primeira resposta é uma hora, não um gráfico.",
  },
  pesquisa: {
    src: "/work/costa/pesquisa.svg",
    alt: "Três painéis separados: maré, vento e onda.",
    caption: "A decisão estava espalhada em três lugares.",
  },
  conceito: {
    src: "/work/costa/conceito.svg",
    alt: "Painel azul com a palavra Entrar e o horário 16:10.",
    caption: "Uma frase que dá para ler com areia na mão.",
  },
  estrutura: {
    src: "/work/costa/estrutura.svg",
    alt: "Tela de hoje com a palavra Entrar, uma barra de tempo e uma nota sobre amanhã.",
    caption: "Hoje fica enorme. Amanhã cabe numa nota.",
  },
  interface: {
    src: "/work/costa/interface.svg",
    alt: "Celular claro com Entrar, 16:10 e uma barra de maré.",
    caption: "A causa da frase fica um toque atrás.",
  },
} satisfies Record<string, WorkImage>;

export const extraProjects: Project[] = [
  {
    slug: "bruma",
    title: "Bruma",
    year: "2025",
    discipline: "marca",
    role: "Identidade",
    summary:
      "Casa que lança uma fragrância por estação. O nome precisa viver no vidro, na caixa e numa página quase vazia.",
    cover: bruma.capa,
    accent: "#1c2430",
    brief: {
      problem:
        "A marca antiga ocupava o frasco com três tipografias e um selo dourado. Em 30 ml não sobrava silêncio para o cheiro.",
      approach:
        "Uma palavra, um fio e muito ar. O que não cabe na altura do vidro não entra no sistema.",
      outcomes: [
        "O nome é desenhado para a curva do frasco, numa linha só.",
        "A caixa usa o mesmo fio, sem ícone extra.",
        "O site é uma página por fragrância, e a nota de saída vem antes da história.",
      ],
    },
    stages: [
      {
        id: "pesquisa",
        title: "Pesquisa",
        summary:
          "Medição do vidro, da caixa e da distância em que o nome ainda se lê na prateleira.",
        decisions: [
          "O frasco de 30 ml é a prova. O site vem depois.",
          "Dourado em área grande cansava. Virou um fio.",
          "As pessoas pedem a fragrância pela nota, não pela estação.",
        ],
        images: [bruma.pesquisa],
      },
      {
        id: "conceito",
        title: "Conceito",
        summary:
          "O sistema é o nome em uma família, um fio na cor do linho e o vazio em volta.",
        decisions: [
          "Sem monograma. A palavra já é curta.",
          "Caixa alta só na estação, nunca no nome.",
          "Uma fragrância por vez na capa.",
        ],
        images: [bruma.conceito],
      },
      {
        id: "estrutura",
        title: "Estrutura",
        summary:
          "A página segue a ordem em que o cheiro chega: saída, coração, fundo. A história fica no fim.",
        decisions: [
          "A nota de saída é o título da página.",
          "Ingredientes entram como lista curta, não como parágrafo.",
          "Reservar substitui o carrinho.",
        ],
        images: [bruma.estrutura],
      },
      {
        id: "interface",
        title: "Interface",
        summary:
          "A tela larga repete a margem da caixa. O frasco não vira ilustração: a página é tipográfica.",
        decisions: [
          "O fio dourado marca só o nome da casa.",
          "O botão usa a cor do vidro, não um verde de loja.",
          "Não há menu de coleções. Há a estação atual.",
        ],
        images: [bruma.interface],
      },
    ],
    gallery: [bruma.capa, bruma.conceito, bruma.interface, bruma.estrutura, bruma.pesquisa],
  },
  {
    slug: "malha",
    title: "Malha",
    year: "2026",
    discipline: "interface",
    role: "Interface de rota",
    summary:
      "Caminhos a pé para atravessar a cidade sem pressa. A rota mostra calçada, sombra e o tempo de quem anda.",
    cover: malha.capa,
    accent: "#2457d6",
    brief: {
      problem:
        "Os mapas de carro desenham a rua pelo meio. Quem anda precisa da calçada, da travessia e de um tempo que não é o do automóvel.",
      approach:
        "A linha da rota é a peça principal. O que não ajuda a atravessar a próxima esquina sai da tela.",
      outcomes: [
        "O tempo mostrado é de passo, não de trânsito.",
        "A travessia aparece antes do nome da rua.",
        "À noite o chão escurece e a linha permanece azul.",
      ],
    },
    stages: [
      {
        id: "pesquisa",
        title: "Pesquisa",
        summary:
          "Caminhadas com o mapa do carro aberto, marcando onde a linha cortava a rua em vez de seguir a calçada.",
        decisions: [
          "O erro mais comum era a rota pelo eixo da via.",
          "As pessoas olham o tempo antes do nome da rua.",
          "Sombra importa no meio do dia e some dos apps de carro.",
        ],
        images: [malha.pesquisa],
      },
      {
        id: "conceito",
        title: "Conceito",
        summary:
          "Três informações e nenhuma a mais na primeira versão: travessia, calçada e duração do passo.",
        decisions: [
          "Sem camada de trânsito.",
          "Sem alternativa de carro na mesma tela.",
          "O destino é uma frase, não um pin genérico.",
        ],
        images: [malha.conceito],
      },
      {
        id: "estrutura",
        title: "Estrutura",
        summary:
          "A linha quebra nas esquinas. Cada segmento cabe numa instrução curta, lida sem parar de andar.",
        decisions: [
          "Uma instrução por esquina.",
          "A duração total fica perto do destino, não num cabeçalho de app.",
          "Voltar não recalcula do zero: continua do ponto em que a pessoa está.",
        ],
        images: [malha.estrutura],
      },
      {
        id: "interface",
        title: "Interface",
        summary:
          "Tela escura para uso na rua. A linha azul é a única cor, e o botão de começar fica na zona do polegar.",
        decisions: [
          "O nome do destino é o título.",
          "O mapa ocupa a metade de baixo, sem controles por cima da linha.",
          "Começar a andar é maior do que salvar a rota.",
        ],
        images: [malha.interface],
      },
    ],
    gallery: [malha.capa, malha.estrutura, malha.interface, malha.conceito, malha.pesquisa],
  },
  {
    slug: "orbe",
    title: "Orbe",
    year: "2026",
    discipline: "produto",
    role: "Fluxo de registro",
    summary:
      "Diário para quem olha o céu. Registrar a noite sem transformar a observação num formulário.",
    cover: orbe.capa,
    accent: "#efeae2",
    brief: {
      problem:
        "Os apps de astronomia abrem num mapa cheio de camadas. Quem só quer anotar o que viu desiste antes da primeira estrela.",
      approach:
        "Uma observação é uma frase, uma hora e um pedaço de céu. O catálogo fica atrás, para quem pedir.",
      outcomes: [
        "O registro começa pelo que foi visto, não pela lista de objetos.",
        "O lugar entra como bairro, a menos que a pessoa peça coordenada.",
        "A noite anterior reaparece, porque o hábito é voltar ao mesmo quintal.",
      ],
    },
    stages: [
      {
        id: "pesquisa",
        title: "Pesquisa",
        summary:
          "Leitura de cadernos de observação e dos apps que as pessoas abriam e fechavam na primeira tela.",
        decisions: [
          "O relato começa com uma frase, nunca com um código de objeto.",
          "Mapa estelar na abertura afastava quem observa do quintal.",
          "A hora importa mais do que a duração.",
        ],
        images: [orbe.pesquisa],
      },
      {
        id: "conceito",
        title: "Conceito",
        summary:
          "Três círculos: lugar, o que foi visto e a hora. Qualquer campo a mais é um passo extra.",
        decisions: [
          "Sem conta para a primeira noite.",
          "Equipamento é opcional e fica fechado.",
          "A lua grande é o estado vazio, não uma ilustração decorativa.",
        ],
        images: [orbe.conceito],
      },
      {
        id: "estrutura",
        title: "Estrutura",
        summary:
          "A frase ocupa o título. A hora fica num bloco separado, legível no escuro.",
        decisions: [
          "O teclado abre na frase, não num buscador de estrelas.",
          "Ontem à noite é o atalho, não um arquivo.",
          "Apagar uma observação não pede confirmação em três passos.",
        ],
        images: [orbe.estrutura],
      },
      {
        id: "interface",
        title: "Interface",
        summary:
          "Fundo de céu, tipo claro e um único botão claro o bastante para achar sem lanterna forte.",
        decisions: [
          "O amarelo marca a ação, não as estrelas.",
          "Não há barra de navegação na tela de registro.",
          "A lua some quando a frase está sendo escrita, para não competir.",
        ],
        images: [orbe.interface],
      },
    ],
    gallery: [orbe.capa, orbe.conceito, orbe.interface, orbe.estrutura, orbe.pesquisa],
  },
  {
    slug: "largo",
    title: "Largo",
    year: "2026",
    discipline: "marca",
    role: "Identidade tipográfica",
    summary:
      "Fundição pequena em que o espécime é o produto. O nome da casa não compete com as letras à venda.",
    cover: largo.capa,
    accent: "#f4f1ea",
    brief: {
      problem:
        "O site parecia uma loja de temas. As famílias entravam em cards iguais, sem uma prova de texto que mostrasse o desenho.",
      approach:
        "A página abre no espécime, em tamanho de título. O nome Largo fica numa linha fina, sempre no mesmo lugar.",
      outcomes: [
        "Cada família ganha uma frase de prova escrita para ela.",
        "O nome da fundição usa a própria família de texto, sem um logo à parte.",
        "A licença diz o uso numa linha, antes do preço.",
      ],
    },
    stages: [
      {
        id: "pesquisa",
        title: "Pesquisa",
        summary:
          "Comparação de catálogos em que a letra só aparecia pequena, dentro de um card com botão de compra.",
        decisions: [
          "A prova em título é o que faz a pessoa ficar.",
          "Cards iguais apagam a diferença entre famílias.",
          "O preço sem o uso gera a pergunta errada.",
        ],
        images: [largo.pesquisa],
      },
      {
        id: "conceito",
        title: "Conceito",
        summary:
          "Fundo escuro, uma frase grande e o nome da família numa legenda. Nada de moldura de produto.",
        decisions: [
          "A frase de prova não é um pangrama genérico.",
          "Uma família por abertura de página.",
          "O logo desenhado à parte foi descartado.",
        ],
        images: [largo.conceito],
      },
      {
        id: "estrutura",
        title: "Estrutura",
        summary:
          "A página de família é uma prova: tamanho, nome e uma linha de contexto. A licença fica no fim.",
        decisions: [
          "O espécime ocupa a primeira dobra.",
          "Estilos da família entram como uma lista, não como grade de cards.",
          "Texto de interface do site usa a família de texto da casa.",
        ],
        images: [largo.estrutura],
      },
      {
        id: "interface",
        title: "Interface",
        summary:
          "Página clara para ler a prova por mais tempo. O botão de licença permanece pequeno no canto.",
        decisions: [
          "O botão não flutua sobre a letra.",
          "O uso da licença é uma linha, não um acordeão.",
          "Não há carrinho. Há uma licença nomeada.",
        ],
        images: [largo.interface],
      },
    ],
    gallery: [largo.capa, largo.conceito, largo.estrutura, largo.interface, largo.pesquisa],
  },
  {
    slug: "vigilia",
    title: "Vigília",
    year: "2025",
    discipline: "interface",
    role: "Interface de reserva",
    summary:
      "Reservas da sala silenciosa de uma biblioteca aberta de noite. Poucas palavras, horário visível, lugar marcado.",
    cover: vigilia.capa,
    accent: "#2c3330",
    brief: {
      problem:
        "O sistema pedia cadastro, curso e motivo antes de mostrar se a sala estava livre naquela hora.",
      approach:
        "A grade da noite vem primeiro. A pessoa vê o vazio e só então diz o nome.",
      outcomes: [
        "Horário livre é o estado normal da tela, não um filtro.",
        "A reserva cabe em duas frases: sala e intervalo.",
        "Depois das 22h o chrome escurece e a grade continua legível.",
      ],
    },
    stages: [
      {
        id: "pesquisa",
        title: "Pesquisa",
        summary:
          "Acompanhamento do balcão à noite e leitura do formulário que barrava a reserva.",
        decisions: [
          "A pergunta real é se a sala está livre.",
          "Motivo da reserva não muda a disponibilidade.",
          "Quem chega depois das 22h lê mal telas brancas.",
        ],
        images: [vigilia.pesquisa],
      },
      {
        id: "conceito",
        title: "Conceito",
        summary:
          "A noite vira uma fileira de intervalos. Livre e ocupada se distinguem sem legenda longa.",
        decisions: [
          "Dois estados bastam na primeira vista.",
          "A sala silenciosa é a única sala deste fluxo.",
          "Não há calendário mensal na abertura.",
        ],
        images: [vigilia.conceito],
      },
      {
        id: "estrutura",
        title: "Estrutura",
        summary:
          "Grade de intervalos iguais. Ocupar um bloco não rearruma os outros.",
        decisions: [
          "Intervalos de uma hora, que é como a biblioteca já empresta a sala.",
          "O nome da pessoa entra depois do toque no horário.",
          "Cancelar devolve o bloco ao estado livre sem e-mail de confirmação.",
        ],
        images: [vigilia.estrutura],
      },
      {
        id: "interface",
        title: "Interface",
        summary:
          "Modo noturno como padrão depois das 22h. O horário escolhido acende; o resto permanece quieto.",
        decisions: [
          "Amarelo só no intervalo selecionado.",
          "O nome da sala é o título, não um seletor.",
          "Confirmar fica no fim da lista, depois do horário visto.",
        ],
        images: [vigilia.interface],
      },
    ],
    gallery: [vigilia.capa, vigilia.conceito, vigilia.interface, vigilia.estrutura, vigilia.pesquisa],
  },
  {
    slug: "costa",
    title: "Costa",
    year: "2025",
    discipline: "produto",
    role: "Fluxo da maré",
    summary:
      "A hora de entrar no mar numa praia só. Menos previsão genérica, mais uma frase que dá para ler com areia na mão.",
    cover: costa.capa,
    accent: "#1f4e5f",
    brief: {
      problem:
        "Para decidir se entrava na água, a pessoa cruzava maré, vento e ondulação em três apps e ainda assim chutava.",
      approach:
        "Uma praia, um dia, uma recomendação em frase. Os gráficos ficam um toque atrás.",
      outcomes: [
        "A primeira tela responde entrar ou esperar, com a hora.",
        "Vento e maré aparecem como a causa da frase, não como painel.",
        "Amanhã fica ao lado. Hoje fica enorme.",
      ],
    },
    stages: [
      {
        id: "pesquisa",
        title: "Pesquisa",
        summary:
          "Manhãs na areia observando a troca de aplicativos até a decisão de entrar ou ficar.",
        decisions: [
          "Ninguém quer o litoral inteiro. Quer esta praia.",
          "A decisão cabe numa frase.",
          "Gráfico sem frase era ignorado.",
        ],
        images: [costa.pesquisa],
      },
      {
        id: "conceito",
        title: "Conceito",
        summary:
          "O conceito é a frase em tamanho de título: entrar, ou esperar, e a hora.",
        decisions: [
          "Dois verbos, não uma escala de zero a dez.",
          "A causa da frase é secundária.",
          "Sem conta. A praia é fixa.",
        ],
        images: [costa.conceito],
      },
      {
        id: "estrutura",
        title: "Estrutura",
        summary:
          "Hoje ocupa a página. Amanhã é uma nota. A barra só mostra o quanto do dia ainda serve.",
        decisions: [
          "A hora fica colada ao verbo.",
          "Não há mapa da costa.",
          "Atualizar não troca a praia.",
        ],
        images: [costa.estrutura],
      },
      {
        id: "interface",
        title: "Interface",
        summary:
          "Tipo grande, fundo claro por causa do sol na tela, e a causa da recomendação num segundo passo.",
        decisions: [
          "O verbo usa a cor do mar.",
          "A hora usa o amarelo do sol, para separar da ação.",
          "Ver a causa não cobre a frase.",
        ],
        images: [costa.interface],
      },
    ],
    gallery: [costa.capa, costa.conceito, costa.interface, costa.estrutura, costa.pesquisa],
  },
];
