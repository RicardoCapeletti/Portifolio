import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main id="conteudo" className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-5 py-24 sm:px-8">
      <p className="text-sm tracking-[0.18em] text-muted-foreground uppercase">
        404
      </p>
      <h1 className="mt-4 max-w-xl font-display text-5xl tracking-tight sm:text-6xl">
        Esse caminho não existe.
      </h1>
      <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
        O endereço não corresponde a um estudo de caso nem a uma seção do
        portfólio.
      </p>
      <div className="mt-8">
        <Button asChild>
          <Link href="/trabalho">Voltar ao trabalho</Link>
        </Button>
      </div>
    </main>
  );
}
