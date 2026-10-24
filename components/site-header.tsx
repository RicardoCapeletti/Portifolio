import { SiteNav } from "@/components/site-nav";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex h-[var(--site-header)] items-center px-4 text-[var(--landing-ink)] sm:px-6">
      <div
        className="pointer-events-none absolute inset-0 border-b border-[var(--landing-line)] bg-[#efece7]/80 backdrop-blur-md dark:bg-[#070708]/80"
        aria-hidden="true"
      />
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-4 focus:z-10 focus:rounded-full focus:bg-[var(--landing-frame)] focus:px-3 focus:py-2 focus:outline focus:outline-2 focus:outline-offset-2"
      >
        Ir para o conteúdo
      </a>
      <div className="relative mx-auto w-full max-w-[1600px]">
        <SiteNav tone="bar" />
      </div>
    </header>
  );
}
