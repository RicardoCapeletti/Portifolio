"use client";

import Link from "next/link";

import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { href: "/#sobre", label: "Sobre" },
  { href: "/#servicos", label: "Serviços" },
  { href: "/#projetos", label: "Projetos" },
  { href: "/#faq", label: "FAQ" },
] as const;

export function SiteNav({ tone }: { tone: "hero" | "bar" }) {
  const muted = tone === "hero" ? "text-white/75 hover:text-white" : "text-[var(--landing-muted)] hover:text-[var(--landing-ink)]";
  const strong = tone === "hero" ? "text-white" : "text-[var(--landing-ink)]";

  return (
    <div className={`flex flex-wrap items-center justify-between gap-x-4 gap-y-3 ${strong}`}>
      <Link href="/" className="text-[15px] font-medium tracking-tight">
        Ricardo
      </Link>
      <nav
        aria-label="Seções"
        className="order-3 flex w-full flex-wrap items-center gap-x-4 gap-y-2 text-[13px] min-[900px]:order-none min-[900px]:ml-auto min-[900px]:w-auto"
      >
        {links.map((item) => (
          <Link key={item.href} href={item.href} className={`transition-colors ${muted}`}>
            {item.label}
          </Link>
        ))}
        <Link href="/#contato" className={`inline-flex items-center gap-1.5 transition-colors min-[900px]:ml-2 ${strong}`}>
          Contato
          <span aria-hidden="true">→</span>
        </Link>
      </nav>
      <ThemeToggle />
    </div>
  );
}
