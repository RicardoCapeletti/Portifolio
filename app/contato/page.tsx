import type { Metadata } from "next";

import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: "Contato",
  description: "O desenho bom aproxima uma ideia de quem precisa reconhecê-la.",
  openGraph: {
    title: "Contato",
    description: "O desenho bom aproxima uma ideia de quem precisa reconhecê-la.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function ContatoPage() {
  return (
    <main id="conteudo" tabIndex={-1} className="mx-auto w-full max-w-3xl px-5 py-16 focus:outline-none sm:px-8">
      <p className="text-[11px] tracking-[0.2em] text-[var(--palette-gold)] uppercase">Contato</p>
      <h1 className="mt-4 max-w-[16ch] text-4xl leading-[1.05] font-medium tracking-[-0.03em] text-[var(--landing-ink)] sm:text-6xl">
        O desenho bom aproxima uma ideia de quem precisa reconhecê-la.
      </h1>
      <a
        className="mt-10 block text-lg text-[var(--palette-gold)] hover:text-[var(--palette-gold-light)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--palette-gold)]"
        href={`mailto:${profile.email}`}
      >
        {profile.email}
      </a>
      <p className="mt-2 text-sm text-[var(--landing-muted)]">{profile.location}</p>
    </main>
  );
}
