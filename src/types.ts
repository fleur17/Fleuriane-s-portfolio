export type ImageType = {
  src: string;
  width?: number;
  height?: number;
  alt?: string;
  className?: string;
};

export interface ProjectShowcaseData {
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

export type NavLink = {
  href: string;
  label: string;
};

export type Prototyping = {
  description: string;
  images: ImageType[];
};

export type LayoutKey = "app-project";

export type Layout = {
  slug: string;
  layout: LayoutKey;
};

export interface AppProject extends Layout {
  title: string;
  description: string;
  carousel: ImageType[];
  researchInsights: {
    research: string;
    insights: string[];
    image: ImageType;
  };
  userPersonas: {
    description: string;
    personas: {
      name: string;
      age: number;
      goals: string;
      painPoints: string;
      image: ImageType;
    }[];
  };
  lowFidelityPrototyping: Prototyping;
  highFidelityPrototyping: Prototyping;
  nextSteps: string;
}
