export type MediaType = {
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
    media: MediaType;
    position: "left" | "right";
  };
  mediaSection: MediaType[];
}

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

export type Steps = {
  title: string;
  descriptions?: string[];
  medias?: MediaType[];
  mediaLayout?: MediaLayout;
  substeps?: Steps;
};

export type AppProject = ProjectBoilerplate &
  Layout & {
    layout: "app-project";
    carousel: MediaType[];
    researchInsights: {
      research: string;
      insights: string[];
      media: MediaType;
    };
    userPersonas: {
      description: string;
      personas: {
        name: string;
        age: number;
        goals: string;
        painPoints: string;
        media: MediaType;
      }[];
    };
    lowFidelityPrototyping: Prototyping;
    highFidelityPrototyping: Prototyping;
    nextSteps: string;
  };

export type BusinessProject = ProjectBoilerplate &
  Layout & {
    layout: "business-project";
    background: MediaType;
    topics: string[];
    showcase: MediaType;
    steps: Steps[];
    assets: {
      title: string;
      description?: string;
      media: MediaType;
      placeholder?: MediaType;
    };
  };
