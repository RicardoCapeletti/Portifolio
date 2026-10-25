import type { Metadata } from "next";
import Image from "next/image";

import { profile } from "@/content/profile";
import { assetSrc } from "@/lib/assets";

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
    <main id="conteudo" tabIndex={-1} className="mx-auto w-full max-w-6xl px-5 py-10 focus:outline-none sm:px-8 sm:py-16">
      <h1 className="sr-only">Sobre</h1>
      <div className="grid items-start gap-8 lg:grid-cols-[minmax(16rem,26rem)_minmax(0,1fr)] lg:gap-14">
        <figure className="mx-auto w-full max-w-[26rem] lg:mx-0 lg:max-w-none">
          <div className="relative aspect-square overflow-hidden rounded-[0.7rem] border border-[rgb(141_113_60/42%)] bg-[var(--palette-graphite)]">
            <Image
              src={assetSrc("/ricardo.webp")}
              alt="Retrato em preto e branco de Ricardo Capeletti"
              fill
              priority
              sizes="(min-width: 1024px) 416px, 100vw"
              className="object-cover object-center"
            />
          </div>
        </figure>
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl leading-tight font-medium tracking-tight text-[var(--landing-ink)] sm:text-5xl">
            {profile.aboutHeading}
          </h2>
          <span className="mt-5 block h-px w-16 bg-[var(--palette-gold)]" aria-hidden="true" />
          <p className="mt-5 text-lg leading-snug font-bold text-[var(--landing-ink)]">{profile.aboutLede}</p>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-[var(--landing-muted)] sm:text-lg">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
