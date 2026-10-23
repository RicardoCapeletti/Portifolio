export const disciplines = ["produto", "interface", "marca"] as const;

export type Discipline = (typeof disciplines)[number];

export type WorkImage = {
  src: string;
  alt: string;
  caption: string;
};

export type Stage = {
  id: string;
  title: string;
  summary: string;
  decisions: string[];
  images: WorkImage[];
};

export type Project = {
  slug: string;
  title: string;
  year: string;
  discipline: Discipline;
  role: string;
  summary: string;
  cover: WorkImage;
  accent: string;
  brief: {
    problem: string;
    approach: string;
    outcomes: [string, string, string];
  };
  stages: Stage[];
  gallery: WorkImage[];
};
