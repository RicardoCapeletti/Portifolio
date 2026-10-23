const words = [
  "Pesquisa",
  "Conceito",
  "Estrutura",
  "Interface",
  "Protótipo",
  "Marca",
  "Produto",
];

export function WordMarquee() {
  const loop = [...words, ...words];

  return (
    <div className="overflow-hidden border-y border-border" aria-hidden="true">
      <div className="marquee-track flex w-max gap-12 py-5">
        {loop.map((word, index) => (
          <span
            key={`${word}-${index}`}
            className="text-sm tracking-[0.22em] text-muted-foreground uppercase"
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}
