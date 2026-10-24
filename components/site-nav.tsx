"use client";

import Link from "next/link";

import { ThemeToggle } from "@/components/theme-toggle";

const focus =
  "rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--palette-gold)]";

export function SiteNav() {
  return (
    <div className="flex w-full items-center gap-3">
      <Link href="/" className={`text-[15px] font-medium tracking-tight text-[var(--palette-cream)] ${focus}`}>
        Ricardo
      </Link>
      <div className="ml-auto">
        <ThemeToggle />
      </div>
    </div>
  );
}
