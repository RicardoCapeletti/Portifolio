import Image from "next/image";

import { assetSrc } from "@/lib/assets";

type WorkImageProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function WorkImage({
  src,
  alt,
  className,
  priority = false,
  sizes = "(min-width: 1024px) 960px, 100vw",
}: WorkImageProps) {
  return (
    <Image
      src={assetSrc(src)}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      className={className}
    />
  );
}
