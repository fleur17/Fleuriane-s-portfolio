export type ImageType = {
  src: string;
  width: number;
  height: number;
  alt: string;
  className?: string;
};

export interface ProjectData {
  textSection: {
    projectType: string;
    name: string;
    description: string;
    href: string;
    image: ImageType;
    position: "left" | "right";
  };
  imageSection: ImageType[];
}
