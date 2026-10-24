"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export function HashScroll() {
  const pathname = usePathname();
  const query = useSearchParams().toString();

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const hash = window.location.hash.slice(1);
      if (!hash) return;
      const node = document.getElementById(decodeURIComponent(hash));
      if (!node) return;
      const root = document.documentElement;
      const previous = root.style.scrollBehavior;
      root.style.scrollBehavior = "auto";
      node.scrollIntoView({ block: "start" });
      root.style.scrollBehavior = previous;
    }, 40);
    return () => window.clearTimeout(timer);
  }, [pathname, query]);

  return null;
}
