"use client";

import Link from "next/link";

import { ThemeToggle } from "@/components/theme-toggle";
import { profile } from "@/content/profile";
import { wordmarkFont } from "@/lib/fonts";

const focus =
  "rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--palette-gold)]";

export function SiteNav() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <Link
        href="/"
        className={`${wordmarkFont.className} text-center text-[1.15rem] leading-none font-medium tracking-[0.1em] text-[var(--palette-cream)] uppercase sm:text-[1.7rem] sm:tracking-[0.16em] ${focus}`}
      >
        {profile.name}
      </Link>
      <div className="absolute inset-y-0 right-0 z-10 flex items-center">
        <ThemeToggle />
      </div>
    </div>
  );
}
