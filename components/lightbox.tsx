"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { WorkImage as WorkImageType } from "@/content/types";
import { assetSrc } from "@/lib/assets";

type LightboxProps = {
  images: WorkImageType[];
};

export function Lightbox({ images }: LightboxProps) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const current = images[index];

  function openAt(nextIndex: number) {
    setIndex(nextIndex);
    setOpen(true);
  }

  function step(delta: number) {
    if (images.length < 2) {
      return;
    }
    setIndex((value) => (value + delta + images.length) % images.length);
  }

  if (!current) {
    return null;
  }

  return (
    <>
      <ul
        className={
          images.length === 1
            ? "grid gap-6"
            : "grid gap-8 sm:grid-cols-2"
        }
      >
        {images.map((image, imageIndex) => (
          <li key={image.src}>
            <figure>
              <button
                type="button"
                onClick={() => openAt(imageIndex)}
                className="relative block aspect-[16/10] w-full overflow-hidden rounded-[1.25rem] border border-border bg-card text-left"
              >
                <Image
                  src={assetSrc(image.src)}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
                <span className="sr-only">Ampliar imagem</span>
              </button>
              <figcaption className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {image.caption}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className="gap-4 rounded-[1.75rem] bg-card p-4 sm:max-w-5xl sm:p-6"
          onKeyDown={(event) => {
            if (event.key === "ArrowRight") {
              event.preventDefault();
              step(1);
            }
            if (event.key === "ArrowLeft") {
              event.preventDefault();
              step(-1);
            }
          }}
        >
          <DialogHeader className="sr-only">
            <DialogTitle>{current.alt}</DialogTitle>
            <DialogDescription>{current.caption}</DialogDescription>
          </DialogHeader>
          <div className="relative h-[62vh] w-full bg-background">
            <Image
              src={assetSrc(current.src)}
              alt={current.alt}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-xl text-sm leading-relaxed" aria-live="polite">
              {current.caption}
              <span className="mt-1 block text-muted-foreground">
                {index + 1} de {images.length}
              </span>
            </p>
            <div className="flex gap-2">
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() => step(-1)}
                disabled={images.length < 2}
                aria-label="Imagem anterior"
              >
                <ChevronLeftIcon />
              </Button>
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() => step(1)}
                disabled={images.length < 2}
                aria-label="Próxima imagem"
              >
                <ChevronRightIcon />
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
