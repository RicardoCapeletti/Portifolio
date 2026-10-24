"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export function HashScroll() {
  const pathname = usePathname();
  const query = useSearchParams().toString();

  useEffect(() => {
    const root = document.documentElement;
    let restoreTimer: number | undefined;

    const align = () => {
      const hash = window.location.hash.slice(1);
      if (!hash) return;
      const node = document.getElementById(decodeURIComponent(hash));
      if (!node) return;
      const previous = root.style.scrollBehavior;
      root.style.scrollBehavior = "auto";
      node.scrollIntoView({ block: "start" });
      window.clearTimeout(restoreTimer);
      restoreTimer = window.setTimeout(() => {
        root.style.scrollBehavior = previous;
      }, 50);
    };

    const first = window.setTimeout(align, 40);
    const second = window.setTimeout(align, 360);
    return () => {
      window.clearTimeout(first);
      window.clearTimeout(second);
      window.clearTimeout(restoreTimer);
    };
  }, [pathname, query]);

  return null;
}
