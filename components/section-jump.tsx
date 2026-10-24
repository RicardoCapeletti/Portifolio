"use client";

import { ChevronDownIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from "react";

const sections = [
  { id: "inicio", label: "Início" },
  { id: "sobre", label: "Sobre" },
  { id: "servicos", label: "Serviços" },
  { id: "projetos", label: "Projetos" },
  { id: "faq", label: "FAQ" },
  { id: "contato", label: "Contato" },
] as const;

type SectionId = (typeof sections)[number]["id"];

const focus =
  "rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--palette-gold)]";

function normalize(path: string): string {
  if (path.length > 1 && path.endsWith("/")) {
    return path.slice(0, -1);
  }
  return path;
}

function destination(id: SectionId, onHome: boolean): string {
  return onHome ? `#${id}` : `/#${id}`;
}

export function SectionJump({ tone }: { tone: "hero" | "bar" }) {
  const onHome = normalize(usePathname()) === "/";
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const itemRefs = useRef<Array<HTMLAnchorElement | null>>([]);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    itemRefs.current[active]?.focus();
  }, [open, active]);

  useEffect(() => {
    if (!open) return;

    function onPointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setOpen(false);
      buttonRef.current?.focus();
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  function openAt(index: number) {
    setActive(index);
    setOpen(true);
  }

  function onButtonKeyDown(event: ReactKeyboardEvent<HTMLButtonElement>) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      openAt(0);
      return;
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      openAt(sections.length - 1);
      return;
    }
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      if (open) {
        setOpen(false);
        return;
      }
      openAt(0);
      return;
    }
    if (event.key === "Escape" && open) {
      event.preventDefault();
      setOpen(false);
    }
  }

  function onMenuKeyDown(event: ReactKeyboardEvent<HTMLUListElement>) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActive((index) => (index + 1) % sections.length);
      return;
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActive((index) => (index - 1 + sections.length) % sections.length);
      return;
    }
    if (event.key === "Home") {
      event.preventDefault();
      setActive(0);
      return;
    }
    if (event.key === "End") {
      event.preventDefault();
      setActive(sections.length - 1);
      return;
    }
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      itemRefs.current[active]?.click();
      return;
    }
    if (event.key === "Tab") {
      setOpen(false);
    }
  }

  const buttonTone =
    tone === "hero"
      ? "border-[var(--palette-gold-dark)] text-[var(--palette-cream)] hover:border-[var(--palette-gold)] hover:text-[var(--palette-gold-light)]"
      : "border-[var(--palette-gold-dark)] text-[var(--landing-ink)] hover:border-[var(--palette-gold)] hover:text-[var(--palette-gold)]";

  const menuTone =
    "border-[var(--palette-gold-dark)] bg-[var(--palette-graphite)] text-[var(--palette-cream)] shadow-[0_16px_40px_rgba(0,0,0,0.28)]";

  const itemTone =
    "hover:bg-white/5 hover:text-[var(--palette-gold-light)] focus-visible:bg-white/5 focus-visible:text-[var(--palette-gold-light)]";

  return (
    <div ref={rootRef} className="relative">
      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label="Ir para uma seção"
        className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[12px] tracking-[0.14em] uppercase ${buttonTone} ${focus}`}
        onClick={() => (open ? setOpen(false) : openAt(0))}
        onKeyDown={onButtonKeyDown}
      >
        Ir para
        <ChevronDownIcon className={`size-3.5 ${open ? "rotate-180" : ""}`} aria-hidden="true" />
      </button>
      {open ? (
        <ul
          id={menuId}
          role="menu"
          aria-label="Seções"
          className={`absolute top-[calc(100%+0.4rem)] right-0 z-50 min-w-40 overflow-hidden rounded-xl border py-1 ${menuTone}`}
          onKeyDown={onMenuKeyDown}
        >
          {sections.map((section, index) => {
            const itemClass = `block px-3 py-2 text-left text-[13px] tracking-normal normal-case ${itemTone} ${focus}`;
            const itemProps = {
              role: "menuitem" as const,
              tabIndex: index === active ? 0 : -1,
              className: itemClass,
              onClick: () => setOpen(false),
              onMouseEnter: () => setActive(index),
              ref: (node: HTMLAnchorElement | null) => {
                itemRefs.current[index] = node;
              },
            };

            if (onHome) {
              return (
                <li key={section.id} role="none">
                  <a href={destination(section.id, true)} {...itemProps}>
                    {section.label}
                  </a>
                </li>
              );
            }

            return (
              <li key={section.id} role="none">
                <Link href={destination(section.id, false)} scroll={false} {...itemProps}>
                  {section.label}
                </Link>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
