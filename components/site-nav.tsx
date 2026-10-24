"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { ThemeToggle } from "@/components/theme-toggle";

const sections = [
  { id: "sobre", label: "Sobre" },
  { id: "servicos", label: "Serviços" },
  { id: "projetos", label: "Projetos" },
  { id: "faq", label: "FAQ" },
] as const;

const focus =
  "rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current";

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
    <div className={`flex flex-wrap items-center justify-between gap-x-4 gap-y-3 ${strong}`}>
      <Link href="/" className={`text-[15px] font-medium tracking-tight ${focus}`}>
        Ricardo
      </Link>
      <nav
        aria-label="Seções"
        className="order-3 flex w-full flex-wrap items-center gap-x-4 gap-y-2 text-[13px] min-[900px]:order-none min-[900px]:ml-auto min-[900px]:w-auto"
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
          <a href="#contato" className={`inline-flex items-center gap-1.5 transition-colors min-[900px]:ml-2 ${strong} ${focus}`}>
            Contato
            <span aria-hidden="true">→</span>
          </a>
        ) : (
          <Link href="/#contato" scroll={false} className={`inline-flex items-center gap-1.5 transition-colors min-[900px]:ml-2 ${strong} ${focus}`}>
            Contato
            <span aria-hidden="true">→</span>
          </Link>
        )}
      </nav>
      <ThemeToggle />
    </div>
  );
}
