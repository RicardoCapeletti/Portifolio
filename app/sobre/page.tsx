import type { Metadata } from "next";

import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: "Sobre",
  description: profile.about[0],
  openGraph: {
    title: "Sobre",
    description: profile.about[0],
    locale: "pt_BR",
    type: "profile",
  },
};

export default function SobrePage() {
  return (
    <main id="conteudo" tabIndex={-1} className="mx-auto w-full max-w-6xl px-5 py-12 focus:outline-none sm:px-8">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="text-sm tracking-[0.18em] text-muted-foreground uppercase">
            {profile.location}
          </p>
          <h1 className="mt-4 font-display text-5xl font-medium tracking-tight sm:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">{profile.role}</p>
          <div className="mt-10 space-y-6 text-lg leading-relaxed">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <aside className="rounded-[1.5rem] border border-border bg-card/70 p-6 lg:col-span-4 lg:col-start-9">
          <h2 className="text-sm tracking-[0.16em] text-muted-foreground uppercase">
            Contato
          </h2>
          <ul className="mt-6 space-y-4">
            <li>
              <a className="text-lg text-[var(--palette-gold)] hover:text-[var(--palette-gold-light)]" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </li>
            {profile.links.map((link) => (
              <li key={link.href}>
                <a
                  className="text-lg text-[var(--palette-gold)] hover:text-[var(--palette-gold-light)]"
                  href={link.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </main>
  );
}
