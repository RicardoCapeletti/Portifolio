import type { CoverShape, PortfolioPiece } from "@/content/portfolio";

function CoverShapeMark({ shape }: { shape: CoverShape }) {
  switch (shape) {
    case "mark":
      return (
        <span className="absolute top-1/2 left-1/2 size-[38%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/70" />
      );
    case "banner":
      return (
        <>
          <span className="absolute inset-x-[12%] top-[28%] h-[8%] rounded-sm bg-white/80" />
          <span className="absolute inset-x-[12%] top-[44%] h-[8%] w-[46%] rounded-sm bg-white/45" />
        </>
      );
    case "screen":
      return (
        <span className="absolute inset-[16%] overflow-hidden rounded-md bg-white/10 ring-1 ring-white/40">
          <span className="block h-[18%] bg-white/50" />
          <span className="mx-[10%] mt-[12%] block h-[22%] rounded-sm bg-white/70" />
        </span>
      );
    case "card":
      return (
        <span className="absolute inset-x-[18%] inset-y-[22%] rounded-md bg-white/10 ring-1 ring-white/50">
          <span className="absolute top-[18%] left-[14%] h-[8%] w-[42%] rounded-full bg-white/80" />
          <span className="absolute bottom-[18%] left-[14%] h-px w-[50%] bg-white/60" />
        </span>
      );
    case "object":
      return (
        <span className="absolute top-[18%] left-1/2 flex w-[34%] -translate-x-1/2 flex-col items-center">
          <span className="h-[14%] w-[42%] rounded-t-sm bg-white/55" />
          <span className="h-16 w-full rounded-b-2xl rounded-t-md bg-gradient-to-b from-white/50 to-black/40" />
        </span>
      );
    default: {
      const exhaustive: never = shape;
      return exhaustive;
    }
  }
}

export function CoverArt({
  piece,
  className,
}: {
  piece: PortfolioPiece;
  className?: string;
}) {
  return (
    <span
      className={`relative block overflow-hidden ${className ?? ""}`}
      style={{
        background: `linear-gradient(155deg, ${piece.cover.from}, ${piece.cover.to})`,
      }}
      aria-hidden="true"
    >
      <CoverShapeMark shape={piece.cover.shape} />
    </span>
  );
}
