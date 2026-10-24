"use client";

import { usePathname } from "next/navigation";

import { SiteNav } from "@/components/site-nav";

function normalize(path: string): string {
  if (path.length > 1 && path.endsWith("/")) {
    return path.slice(0, -1);
  }
  return path;
}

export function SiteHeader() {
  const pathname = normalize(usePathname());

  if (pathname === "/") {
    return null;
  }

  return (
    <header className="border-b border-[var(--landing-line)] bg-[var(--landing-frame)] px-4 py-4 text-[var(--landing-ink)] sm:px-6">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-[var(--landing-frame)] focus:px-3 focus:py-2 focus:outline focus:outline-2 focus:outline-offset-2"
      >
        Ir para o conteúdo
      </a>
      <div className="mx-auto max-w-[1600px]">
        <SiteNav tone="bar" />
      </div>
    </header>
  );
}
