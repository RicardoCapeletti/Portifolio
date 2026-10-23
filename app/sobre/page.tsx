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
    <main id="conteudo" className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="text-sm tracking-[0.18em] text-muted-foreground uppercase">
            {profile.location}
          </p>
          <h1 className="mt-4 font-display text-5xl tracking-tight sm:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">{profile.role}</p>
          <div className="mt-10 space-y-6 text-lg leading-relaxed">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <aside className="border-t border-border pt-8 lg:col-span-4 lg:col-start-9 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
          <h2 className="text-sm tracking-[0.16em] text-muted-foreground uppercase">
            Contato
          </h2>
          <ul className="mt-6 space-y-4">
            <li>
              <a className="text-lg hover:text-primary" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </li>
            {profile.links.map((link) => (
              <li key={link.href}>
                <a
                  className="text-lg hover:text-primary"
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
