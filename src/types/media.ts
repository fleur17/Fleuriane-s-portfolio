export type MediaType = {
  src: string;
  width?: number;
  height?: number;
  alt?: string;
  className?: string;
  caption?: string;
  fullWidth?: boolean;
  placeholder?: string;
};

export type MediaLayout = "full-width" | "grid";

export type Medias = {
  medias?: MediaType[];
  mediaLayout?: MediaLayout;
};
