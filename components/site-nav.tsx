"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { SectionJump } from "@/components/section-jump";
import { ThemeToggle } from "@/components/theme-toggle";

const sections = [
  { id: "sobre", label: "Sobre" },
  { id: "servicos", label: "Serviços" },
  { id: "projetos", label: "Projetos" },
  { id: "faq", label: "FAQ" },
] as const;

const focus =
  "rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--palette-gold)]";

function normalize(path: string): string {
  if (path.length > 1 && path.endsWith("/")) {
    return path.slice(0, -1);
  }
  return path;
}

export function SiteNav({ tone }: { tone: "hero" | "bar" }) {
  const onHome = normalize(usePathname()) === "/";
  const muted =
    tone === "hero" ? "text-white/75 hover:text-white" : "text-[var(--landing-muted)] hover:text-[var(--landing-ink)]";
  const strong = tone === "hero" ? "text-white" : "text-[var(--landing-ink)]";

  return (
    <div className={`@container flex flex-wrap items-center gap-x-3 gap-y-2 ${strong}`}>
      <Link href="/" className={`text-[15px] font-medium tracking-tight ${focus}`}>
        Ricardo
      </Link>
      <nav
        aria-label="Seções"
        className="ml-auto hidden items-center gap-x-4 text-[13px] @min-[40rem]:flex"
      >
        {sections.map((item) =>
          onHome ? (
            <a key={item.id} href={`#${item.id}`} className={`transition-colors ${muted} ${focus}`}>
              {item.label}
            </a>
          ) : (
            <Link key={item.id} href={`/#${item.id}`} scroll={false} className={`transition-colors ${muted} ${focus}`}>
              {item.label}
            </Link>
          ),
        )}
        {onHome ? (
          <a href="#contato" className={`ml-2 inline-flex items-center gap-1.5 text-[var(--palette-gold)] transition-colors hover:text-[var(--palette-gold-light)] ${focus}`}>
            Contato
            <span aria-hidden="true">→</span>
          </a>
        ) : (
          <Link href="/#contato" scroll={false} className={`ml-2 inline-flex items-center gap-1.5 text-[var(--palette-gold)] transition-colors hover:text-[var(--palette-gold-light)] ${focus}`}>
            Contato
            <span aria-hidden="true">→</span>
          </Link>
        )}
      </nav>
      <div className="ml-auto flex items-center gap-2 @min-[40rem]:ml-2">
        <SectionJump tone={tone} />
        <ThemeToggle />
      </div>
    </div>
  );
}
