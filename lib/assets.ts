export function assetSrc(src: string): string {
  const raw = process.env.NEXT_PUBLIC_BASE_PATH?.trim() ?? "";
  const base = raw === "/" ? "" : raw.replace(/\/$/, "");
  if (!src.startsWith("/")) {
    return src;
  }
  return `${base}${src}`;
}
