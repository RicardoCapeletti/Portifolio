"use client";

import { useState } from "react";

const questions = [
  {
    q: "Que tipo de peça entra no portfólio?",
    a: "Logos, banners, web design, cartões e design de produtos. Cada estudo mostra a peça e a decisão que a formou.",
  },
  {
    q: "Como um trabalho começa?",
    a: "Com um problema pequeno o bastante para acompanhar até a entrega. A pesquisa fica no caso, não numa pasta separada.",
  },
  {
    q: "O que fica visível além da capa?",
    a: "Anotações, alternativas que ficaram de fora e o caminho entre o esboço e a peça final.",
  },
] as const;

export function FaqList() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mt-6 border-t border-[var(--palette-gold-dark)]/50">
      {questions.map((item, index) => {
        const open = openIndex === index;
        const panelId = `faq-resposta-${index}`;
        return (
          <div key={item.q} className="border-b border-[var(--palette-gold-dark)]/50">
            <button
              id={`faq-pergunta-${index}`}
              type="button"
              aria-expanded={open}
              aria-controls={panelId}
              className="flex w-full cursor-pointer items-center justify-between gap-4 rounded-sm py-3.5 text-left text-sm text-[var(--palette-cream)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--palette-gold)]"
              onClick={() => setOpenIndex(open ? null : index)}
            >
              {item.q}
              <span className="text-[var(--palette-gold)]" aria-hidden="true">
                {open ? "–" : "+"}
              </span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={`faq-pergunta-${index}`}
              aria-hidden={open ? undefined : true}
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
              <div className="overflow-hidden">
                <p className="max-w-md pb-4 text-sm leading-relaxed text-[var(--palette-gray)]">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
