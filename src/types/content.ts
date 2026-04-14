import { Block, MediaType } from "@/types";

export type NavLink = {
  href: string;
  label: string;
};

export type Step = {
  blocks: Block[];
  substeps?: Step[];
};

export type Card = {
  model: MediaType;
  name?: string;
  role: string;
  age: number;
  text: string;
};
