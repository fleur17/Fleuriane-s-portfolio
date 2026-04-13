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

export type ProjectDisplayData = {
  textSection: {
    projectType: string;
    name: string;
    description: string;
    href: string;
    media: MediaType;
    position: "left" | "right";
  };
  mediaSection: MediaType[];
};

export type NavLink = {
  href: string;
  label: string;
};

export type Prototyping = {
  description: string;
  medias: MediaType[];
};

export type Project = AppProject | BusinessProject;

export type ProjectBoilerplate = {
  title: string;
  subtitle?: string;
  description: string;
};

export type Layout = {
  slug: string;
};

export type MediaLayout = "full-width" | "grid";

export type Medias = {
  medias?: MediaType[];
  mediaLayout?: MediaLayout;
};

export type Steps = {
  title: string;
  descriptions?: string[];
  substeps?: Steps[];
} & Medias;

export type AppProject = {
  layout: "app-project";
  carousel?: MediaType[];
  researchInsights?: {
    title?: string;
    research: string;
    insights: string[];
    media: MediaType;
  };
  userPersonas?: {
    description: string;
    personas: {
      name: string;
      age: number;
      goals: string;
      painPoints: string;
      media: MediaType;
    }[];
  };
  lowFidelityPrototyping?: Prototyping;
  highFidelityPrototyping?: Prototyping;
  nextSteps: string;
} & ProjectBoilerplate &
  Layout;

export type BusinessProject = {
  layout: "business-project";
  background: MediaType;
  topics: string[];
  showcase: Medias;
  steps: Steps[];
  assets: {
    title: string;
    description?: string;
    media?: MediaType;
  };
} & ProjectBoilerplate &
  Layout;
