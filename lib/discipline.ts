import type { Discipline } from "@/content/types";

export function disciplineLabel(discipline: Discipline): string {
  switch (discipline) {
    case "produto":
      return "Produto";
    case "interface":
      return "Interface";
    case "marca":
      return "Marca";
    default: {
      const exhaustive: never = discipline;
      return exhaustive;
    }
  }
}
