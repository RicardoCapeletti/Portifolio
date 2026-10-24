import type { CoverMotif, PortfolioPiece } from "@/content/portfolio";

function CoverMotifMark({ motif }: { motif: CoverMotif }) {
  switch (motif) {
    case "seal":
      return (
        <>
          <span className="absolute top-1/2 left-1/2 size-[46%] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white/80" />
          <span className="absolute top-1/2 left-1/2 h-0.5 w-[28%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/80" />
        </>
      );
    case "bars":
      return (
        <span className="absolute top-[30%] left-[16%] flex h-[40%] w-[68%] flex-col justify-center gap-[14%]">
          <span className="h-[16%] w-full rounded-sm bg-white/85" />
          <span className="h-[16%] w-[72%] rounded-sm bg-white/55" />
          <span className="h-[16%] w-[40%] rounded-sm bg-white/35" />
        </span>
      );
    case "arch":
      return (
        <>
          <span className="absolute bottom-[18%] left-1/2 h-[48%] w-[52%] -translate-x-1/2 rounded-t-full border-2 border-b-0 border-white/75" />
          <span className="absolute bottom-[18%] left-[18%] h-px w-[64%] bg-white/70" />
        </>
      );
    case "bands":
      return (
        <>
          <span className="absolute inset-x-[10%] top-[28%] h-[16%] rounded-sm bg-white/80" />
          <span className="absolute inset-x-[10%] top-[52%] h-[16%] rounded-sm bg-white/35" />
        </>
      );
    case "poster":
      return (
        <span className="absolute top-[14%] left-1/2 h-[72%] w-[42%] -translate-x-1/2 rounded-sm bg-white/10 ring-1 ring-white/55">
          <span className="absolute top-[16%] left-[14%] h-[8%] w-[70%] rounded-sm bg-white/80" />
          <span className="absolute top-[32%] left-[14%] h-[5%] w-[46%] rounded-sm bg-white/45" />
          <span className="absolute right-[14%] bottom-[14%] left-[14%] h-[28%] rounded-sm bg-white/20" />
        </span>
      );
    case "column":
      return (
        <span className="absolute inset-[14%] overflow-hidden rounded-md bg-white/10 ring-1 ring-white/45">
          <span className="block h-[14%] bg-white/40" />
          <span className="mx-auto mt-[12%] block h-[48%] w-[38%] rounded-sm bg-white/75" />
        </span>
      );
    case "spread":
      return (
        <span className="absolute inset-x-[12%] top-[18%] bottom-[18%] flex gap-[4%]">
          <span className="relative flex-1 rounded-sm bg-white/15 ring-1 ring-white/45">
            <span className="absolute top-[14%] left-[12%] h-[8%] w-[60%] rounded-sm bg-white/75" />
            <span className="absolute top-[30%] right-[12%] bottom-[14%] left-[12%] rounded-sm bg-white/25" />
          </span>
          <span className="relative flex-1 rounded-sm bg-white/10 ring-1 ring-white/35">
            <span className="absolute top-[18%] right-[14%] left-[14%] h-[6%] rounded-sm bg-white/55" />
            <span className="absolute top-[32%] right-[14%] left-[14%] h-[6%] rounded-sm bg-white/30" />
            <span className="absolute top-[46%] right-[14%] left-[14%] h-[6%] w-[50%] rounded-sm bg-white/30" />
          </span>
        </span>
      );
    case "app":
      return (
        <span className="absolute top-[12%] left-1/2 h-[76%] w-[34%] -translate-x-1/2 rounded-[1.1rem] bg-white/10 ring-1 ring-white/50">
          <span className="absolute inset-x-[16%] top-[18%] h-[12%] rounded-sm bg-white/75" />
          <span className="absolute inset-x-[16%] top-[38%] h-[10%] rounded-sm bg-white/35" />
          <span className="absolute inset-x-[16%] top-[54%] h-[10%] rounded-sm bg-white/35" />
          <span className="absolute inset-x-[16%] bottom-[12%] h-[12%] rounded-full bg-white/80" />
        </span>
      );
    case "ticket":
      return (
        <span className="absolute inset-x-[12%] top-1/2 h-[46%] -translate-y-1/2 rounded-md bg-white/10 ring-1 ring-white/55">
          <span className="absolute top-1/2 left-0 size-[18%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--cover-from,#3f2a22)]" />
          <span className="absolute top-[28%] left-[18%] h-[12%] w-[46%] rounded-sm bg-white/85" />
          <span className="absolute top-[52%] left-[18%] h-px w-[38%] bg-white/60" />
        </span>
      );
    case "fold":
      return (
        <>
          <span className="absolute top-[22%] left-[18%] h-[56%] w-[40%] rounded-sm bg-white/25 ring-1 ring-white/40" />
          <span className="absolute top-[22%] left-[42%] h-[56%] w-[40%] rounded-sm bg-white/10 ring-1 ring-white/60">
            <span className="absolute top-[20%] left-[16%] h-[8%] w-[60%] rounded-sm bg-white/80" />
            <span className="absolute top-[40%] left-[16%] h-[6%] w-[70%] rounded-sm bg-white/40" />
            <span className="absolute top-[54%] left-[16%] h-[6%] w-[48%] rounded-sm bg-white/40" />
          </span>
        </>
      );
    case "lamp":
      return (
        <>
          <span className="absolute top-[16%] left-1/2 size-[42%] -translate-x-1/2 rounded-full bg-white/20 ring-1 ring-white/70" />
          <span className="absolute top-[50%] left-1/2 h-[22%] w-[5%] -translate-x-1/2 bg-white/75" />
          <span className="absolute top-[70%] left-1/2 h-[7%] w-[36%] -translate-x-1/2 rounded-full bg-white/85" />
        </>
      );
    case "tin":
      return (
        <span className="absolute top-[18%] left-1/2 flex h-[64%] w-[38%] -translate-x-1/2 flex-col items-center">
          <span className="h-[16%] w-[78%] rounded-[50%] bg-white/50" />
          <span className="relative h-[70%] w-full rounded-b-[1rem] bg-gradient-to-b from-white/45 to-black/25 ring-1 ring-white/30">
            <span className="absolute top-[38%] left-1/2 h-[14%] w-[72%] -translate-x-1/2 rounded-sm bg-white/75" />
          </span>
        </span>
      );
    case "vase":
      return (
        <span className="absolute bottom-[16%] left-1/2 h-[58%] w-[46%] -translate-x-1/2 rounded-t-[40%] rounded-b-[1.4rem] bg-white/20 ring-1 ring-white/55">
          <span className="absolute top-0 left-1/2 h-[16%] w-[70%] -translate-x-1/2 -translate-y-1/3 rounded-[50%] border-2 border-white/70" />
        </span>
      );
    default: {
      const exhaustive: never = motif;
      return exhaustive;
    }
  }
}

export function CoverArt({
  piece,
  className,
  flat = false,
}: {
  piece: PortfolioPiece;
  className?: string;
  flat?: boolean;
}) {
  return (
    <span
      className={`relative block overflow-hidden ${className ?? ""}`}
      style={{
        background: flat ? "transparent" : `linear-gradient(155deg, ${piece.cover.from}, ${piece.cover.to})`,
        ["--cover-from" as string]: piece.cover.from,
      }}
      aria-hidden="true"
    >
      <CoverMotifMark motif={piece.cover.motif} />
    </span>
  );
}
