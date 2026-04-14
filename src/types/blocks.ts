import { Card, MediaLayout, MediaType } from "@/types";

export type Position = "left" | "right";

export type HeroBlock = {
  title: string;
  subtitle?: string;
  background?: string;
  carousel?: CarouselBlock;
};

export type CarouselBlock = {
  type: "carousel";
  medias: MediaType[];
};

export type TopicBlock = {
  type: "topic";
  text: string;
  topics: string[];
};

export type TitleBlock = {
  type: "title";
  text: string;
};

export type TextBlock = {
  type: "text";
  text: string;
};

export type MediaBlock = {
  type: "media";
  medias: MediaType[];
  mediasLayout: MediaLayout;
};

export type VideoBlock = {
  type: "video";
  media: MediaType;
};
export type DocumentBlock = {
  type: "document";
  src: string;
};

export type MixBlock = {
  type: "mix";
  text: string;
  media: MediaType;
  position: Position;
};

export type ColumnBlock = {
  type: "column";
  text: string[];
};

export type CardBlock = {
  type: "card";
  text: string;
  cards: Card[];
};

export type Block =
  | CarouselBlock
  | TopicBlock
  | TitleBlock
  | TextBlock
  | MediaBlock
  | VideoBlock
  | DocumentBlock
  | MixBlock
  | ColumnBlock
  | CardBlock;
