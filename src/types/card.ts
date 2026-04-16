import { MediaType } from "@/types";

export type Card = PersonaCard | MediaTypeCard;

export type MediaTypeCard = MediaType & {
  type: "media";
  title?: string;
};

export type PersonaCard = {
  type: "persona";
  model: MediaType;
  name?: string;
  role: string;
  age: number;
  text: string;
};
