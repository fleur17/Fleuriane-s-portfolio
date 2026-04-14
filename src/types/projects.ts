import { HeroBlock, MediaType, Position, Step } from "@/types";

export type ProjectDisplayData = {
  textSection: {
    projectType: string;
    name: string;
    description: string;
    href: string;
    media: MediaType;
    position: Position;
  };
  mediaSection: MediaType[];
};

export type Project = {
  slug: string;
  hero: HeroBlock;
  steps: Step[];
};
