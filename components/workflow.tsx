"use client";

import { useEffect, useState, type KeyboardEvent } from "react";

import { Lightbox } from "@/components/lightbox";
import type { Stage } from "@/content/types";
import { cn } from "@/lib/utils";

type WorkflowProps = {
  stages: Stage[];
};

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function Workflow({ stages }: WorkflowProps) {
  const [active, setActive] = useState(stages[0]?.id ?? "");

  useEffect(() => {
    const ids = new Set(stages.map((stage) => stage.id));

    function syncFromHash() {
      const id = window.location.hash.replace("#", "");
      if (ids.has(id)) {
        setActive(id);
      }
    }

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        const id = visible?.target.id;
        if (id && ids.has(id)) {
          setActive(id);
        }
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0.15, 0.4, 0.7] },
    );

    for (const stage of stages) {
      const element = document.getElementById(stage.id);
      if (element) {
        observer.observe(element);
      }
    }

    return () => {
      window.removeEventListener("hashchange", syncFromHash);
      observer.disconnect();
    };
  }, [stages]);

  function focusStage(id: string) {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: prefersReducedMotion() ? "auto" : "smooth",
      block: "start",
    });
    const nextHash = `#${id}`;
    if (window.location.hash !== nextHash) {
      history.replaceState(null, "", nextHash);
    }
    setActive(id);
  }

  function onRailKeyDown(event: KeyboardEvent<HTMLElement>) {
    const forward = event.key === "ArrowRight" || event.key === "ArrowDown";
    const backward = event.key === "ArrowLeft" || event.key === "ArrowUp";
    if (!forward && !backward) {
      return;
    }
    event.preventDefault();
    const index = stages.findIndex((stage) => stage.id === active);
    const nextIndex = index + (forward ? 1 : -1);
    const next = stages[nextIndex];
    if (!next) {
      return;
    }
    focusStage(next.id);
  }

  return (
    <div className="lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16">
      <nav
        aria-label="Etapas do fluxo"
        tabIndex={0}
        onKeyDown={onRailKeyDown}
        className="mb-8 rounded-sm focus-visible:ring-2 focus-visible:ring-ring lg:sticky lg:top-24 lg:mb-0 lg:self-start"
      >
        <ol className="border-l border-border">
          {stages.map((stage, index) => {
            const current = active === stage.id;
            return (
              <li key={stage.id}>
                <a
                  href={`#${stage.id}`}
                  aria-current={current ? "step" : undefined}
                  onClick={(event) => {
                    event.preventDefault();
                    focusStage(stage.id);
                  }}
                  className={cn(
                    "flex items-baseline gap-3 border-l-2 py-2 pr-3 pl-4 text-sm -ml-px",
                    current
                      ? "border-primary text-primary"
                      : "border-transparent text-muted-foreground hover:text-foreground",
                  )}
                >
                  <span className="w-6 font-display text-base">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {stage.title}
                </a>
              </li>
            );
          })}
        </ol>
      </nav>

      <div className="space-y-4">
        {stages.map((stage, index) => (
          <section
            key={stage.id}
            id={stage.id}
            className="scroll-mt-28 border-t border-border py-10"
          >
            <p className="text-sm text-primary">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-2 font-display text-4xl tracking-tight">
              {stage.title}
            </h3>
            <p className="mt-4 max-w-2xl leading-relaxed">{stage.summary}</p>
            {stage.decisions.length > 0 ? (
              <ul className="mt-6 max-w-2xl space-y-3">
                {stage.decisions.map((decision) => (
                  <li key={decision} className="flex gap-3 leading-relaxed">
                    <span
                      className="mt-2 size-1.5 shrink-0 bg-primary"
                      aria-hidden="true"
                    />
                    <span>{decision}</span>
                  </li>
                ))}
              </ul>
            ) : null}
            <div className="mt-8">
              {stage.images.length === 0 ? (
                <p className="border border-dashed border-border bg-card px-6 py-10 text-muted-foreground">
                  Esta etapa guarda a decisão, sem imagem.
                </p>
              ) : (
                <Lightbox images={stage.images} />
              )}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
