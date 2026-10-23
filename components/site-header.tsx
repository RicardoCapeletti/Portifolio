"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { ThemeToggle } from "@/components/theme-toggle";
import { profile } from "@/content/profile";
import { cn } from "@/lib/utils";

const links = [
  { href: "/trabalho", label: "Trabalho" },
  { href: "/sobre", label: "Sobre" },
] as const;

function normalize(path: string): string {
  if (path.length > 1 && path.endsWith("/")) {
    return path.slice(0, -1);
  }
  return path;
}

export function SiteHeader() {
  const pathname = normalize(usePathname());

  return (
    <header className="sticky top-0 z-30 border-b border-border/80 bg-background/85 backdrop-blur-md">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-4 focus:z-50 focus:bg-card focus:px-3 focus:py-2"
      >
        Ir para o conteúdo
      </a>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Link href="/" className="font-display text-2xl leading-none tracking-tight">
          {profile.name}
        </Link>
        <div className="flex items-center gap-3 sm:gap-5">
          <nav aria-label="Seções" className="flex items-center gap-5 text-sm">
            {links.map((link) => {
              const active =
                pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "transition-colors",
                    active ? "text-primary" : "text-foreground hover:text-primary",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
