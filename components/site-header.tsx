import { SiteNav } from "@/components/site-nav";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-2 sm:px-4 sm:pt-2.5">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-4 focus:z-10 focus:rounded-full focus:bg-[var(--palette-graphite)] focus:px-3 focus:py-2 focus:text-[var(--palette-cream)] focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-[var(--palette-gold)]"
      >
        Ir para o conteúdo
      </a>
      <div className="relative mx-auto flex h-11 max-w-[1500px] items-center rounded-[0.7rem] border border-[var(--palette-gold-dark)] bg-[var(--palette-graphite)]/95 px-4 text-[var(--palette-cream)] shadow-[0_12px_40px_rgb(0_0_0/0.28)] backdrop-blur-md">
        <SiteNav />
      </div>
    </header>
  );
}
