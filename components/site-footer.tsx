"use client";

import { usePathname } from "next/navigation";

import { profile } from "@/content/profile";

function normalize(path: string): string {
  if (path.length > 1 && path.endsWith("/")) {
    return path.slice(0, -1);
  }
  return path;
}

export function SiteFooter() {
  const pathname = normalize(usePathname());

  if (pathname === "/") {
    return null;
  }

  return (
    <footer className="px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          {profile.name}
          <span aria-hidden="true"> · </span>
          <span className="sr-only">, </span>
          {profile.location}
        </p>
        <a className="hover:text-foreground" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
      </div>
    </footer>
  );
}
