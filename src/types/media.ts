export type MediaType = {
  src: string;
  width?: number;
  height?: number;
  alt?: string;
  className?: string;
  caption?: string;
  placeholder?: string;
};

export type MediaLayout = "full-width" | "grid";

export type Medias = {
  medias?: MediaType[];
  mediasLayout?: MediaLayout;
};
