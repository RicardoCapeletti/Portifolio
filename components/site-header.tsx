"use client";

import { usePathname } from "next/navigation";

import { SiteNav } from "@/components/site-nav";

function isHome(path: string): boolean {
  const normalized = path.length > 1 && path.endsWith("/") ? path.slice(0, -1) : path;
  return normalized === "/";
}

export function SiteHeader() {
  const home = isHome(usePathname());

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-2 sm:px-4 sm:pt-2.5">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-4 focus:z-10 focus:rounded-full focus:bg-[var(--palette-graphite)] focus:px-3 focus:py-2 focus:text-[var(--palette-cream)] focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-[var(--palette-gold)]"
      >
        Ir para o conteúdo
      </a>
      <div className="mx-auto flex max-w-[1500px] justify-end">
        <div
          className={`relative flex h-11 items-center rounded-[0.7rem] border border-[var(--palette-gold-dark)] bg-[var(--palette-graphite)]/95 text-[var(--palette-cream)] shadow-[0_12px_40px_rgb(0_0_0/0.28)] backdrop-blur-md ${
            home ? "w-fit px-1.5" : "w-full px-4"
          }`}
        >
          <SiteNav showWordmark={!home} />
        </div>
      </div>
    </header>
  );
}
