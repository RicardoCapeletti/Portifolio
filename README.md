# Portfólio de design

Site estático para mostrar imagens e o fluxo de trabalho de cada projeto: pesquisa, conceito, estrutura, interface e protótipo. Feito com Next.js, TypeScript e Tailwind, pronto para GitHub Pages.

Os três estudos de caso iniciais são exemplos. Troque os textos e as imagens antes de publicar como portfólio pessoal.

## Rodar em local

```bash
npm install
npm run dev
```

O site abre em [http://127.0.0.1:4317](http://127.0.0.1:4317).

## Acrescentar um projeto

1. Coloque as imagens em `public/work/<slug>/`. Caminhos no conteúdo começam com `/work/<slug>/arquivo.svg`.
2. Adicione um objeto em [`content/projects.ts`](content/projects.ts), com `slug`, disciplina (`produto`, `interface` ou `marca`), contexto e etapas.
3. Uma etapa pode ficar sem imagens: a página mostra o texto da decisão e não desenha uma moldura vazia.
4. Rode `npm run build`. A home, o índice e a rota do estudo passam a incluir o projeto.

Nome, frase, e-mail e links ficam em [`content/profile.ts`](content/profile.ts).

## Build estático

```bash
npm run build
```

O export fica em `out/`. Imagens não passam pelo otimizador do Next, porque o GitHub Pages não roda servidor.

## Publicar no GitHub Pages

1. No repositório, abra **Settings → Pages**.
2. Em **Build and deployment**, escolha **Source: GitHub Actions**.
3. O workflow [`.github/workflows/pages.yml`](.github/workflows/pages.yml) publica a pasta `out/` a cada push na branch `main`.

### Site de usuário ou de projeto

- Site de usuário (`usuario.github.io`): deixe `NEXT_PUBLIC_BASE_PATH` vazio.
- Site de projeto (`usuario.github.io/nome-do-repo`): crie uma variável de Actions chamada `NEXT_PUBLIC_BASE_PATH` com o valor `/nome-do-repo` (barra no início, sem barra no fim).

Opcional: `NEXT_PUBLIC_SITE_URL` com a URL absoluta (`https://usuario.github.io` ou `https://usuario.github.io/nome-do-repo`) para a base dos metadados.

As duas variáveis ficam em **Settings → Secrets and variables → Actions → Variables**. Sem elas, o build assume a raiz do domínio.
