"use client";

import Link from "next/link";

import { ThemeToggle } from "@/components/theme-toggle";
import { profile } from "@/content/profile";

const focus =
  "rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--palette-gold)]";

export function SiteNav({ showWordmark = true }: { showWordmark?: boolean }) {
  return (
    <div className={`flex items-center gap-3 ${showWordmark ? "w-full" : ""}`}>
      {showWordmark ? (
        <Link href="/" className={`text-[15px] font-medium tracking-tight text-[var(--palette-cream)] ${focus}`}>
          {profile.name}
        </Link>
      ) : null}
      <div className={showWordmark ? "ml-auto" : ""}>
        <ThemeToggle />
      </div>
    </div>
  );
}
