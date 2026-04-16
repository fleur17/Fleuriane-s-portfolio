import { Block } from "@/types";

export type NavLink = {
  href: string;
  label: string;
};

export type Step = {
  blocks: Block[];
  substeps?: Step[];
};
