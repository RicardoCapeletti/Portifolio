"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useSyncExternalStore } from "react";

import { applyTheme, readTheme, type Theme } from "@/lib/theme";

function subscribe(onStoreChange: () => void): () => void {
  const observer = new MutationObserver(onStoreChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, readTheme, (): Theme => "light");
  const dark = theme === "dark";

  return (
    <button
      type="button"
      aria-pressed={dark}
      aria-label={dark ? "Ativar modo claro" : "Ativar modo escuro"}
      className="inline-grid size-7 place-items-center rounded-full text-[var(--palette-gold)] opacity-90 transition-opacity hover:text-[var(--palette-gold-light)] hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--palette-gold)]"
      onClick={() => applyTheme(dark ? "light" : "dark")}
    >
      {dark ? <SunIcon className="size-4" /> : <MoonIcon className="size-4" />}
    </button>
  );
}
