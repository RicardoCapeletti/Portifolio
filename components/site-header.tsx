"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { ThemeToggle } from "@/components/theme-toggle";
import { profile } from "@/content/profile";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Início" },
  { href: "/trabalho", label: "Trabalho" },
  { href: "/sobre", label: "Sobre" },
] as const;

function normalize(path: string): string {
  if (path.length > 1 && path.endsWith("/")) {
    return path.slice(0, -1);
  }
  return path;
}

function isActive(pathname: string, href: string): boolean {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = normalize(usePathname());

  if (pathname === "/") {
    return null;
  }

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40 px-4 pt-5 sm:px-6">
      <a
        href="#conteudo"
        className="pointer-events-auto sr-only focus:not-sr-only focus:absolute focus:top-5 focus:left-4 focus:z-50 focus:rounded-full focus:bg-background focus:px-3 focus:py-2"
      >
        Ir para o conteúdo
      </a>
      <div className="mx-auto flex max-w-[90rem] items-center justify-between gap-3">
        <Link
          href="/"
          aria-label={profile.name}
          className="pointer-events-auto grid size-10 place-items-center rounded-full border border-border bg-background/55 text-sm backdrop-blur-md"
        >
          <span aria-hidden="true">{profile.name.slice(0, 1)}</span>
        </Link>
        <nav
          aria-label="Seções"
          className="pointer-events-auto flex items-center gap-0.5 rounded-full border border-border bg-background/55 p-1 text-sm backdrop-blur-md"
        >
          {links.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-full px-2.5 py-1.5 text-[13px] transition-colors sm:px-3.5 sm:text-sm",
                  active
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="pointer-events-auto">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
