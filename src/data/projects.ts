import { AppProject, ProjectShowcaseData } from "@/types";

export const projectsShowcases: ProjectShowcaseData[] = [
  {
    textSection: {
      projectType: "ART PROJECT",
      name: "The NeuroPortals",
      description: "What if you can be the master of your brain through art ?",
      href: "/neuroportal",
      image: {
        src: "/images/common/touchdesigner.svg",
        width: 150,
        height: 50,
        alt: "Touchdesigner",
      },
      position: "left",
    },
    imageSection: [
      {
        src: "/images/projects/neuroportal/neuro.svg",
        alt: "Neuro background",
        width: 800,
        height: 800,
        className: "group-hover:hidden",
      },
      {
        src: "/images/projects/neuroportal/hover-neuro-home.svg",
        alt: "Neuro background hover",
        width: 800,
        height: 800,
        className: "hidden group-hover:block",
      },
    ],
  },
  {
    textSection: {
      projectType: "BUSINESS PROJECT",
      name: "The Elastup",
      description: "For your notebook, Tupperware and more ...",
      href: "/elastup",
      image: {
        src: "/images/common/kickstarter-logo.svg",
        width: 200,
        height: 100,
        alt: "Kickstarter",
      },
      position: "right",
    },
    imageSection: [
      {
        src: "/images/projects/elastup/elastup-group.svg",
        alt: "Elastup",
        width: 700,
        height: 700,
      },
    ],
  },
  {
    textSection: {
      projectType: "UX/UI PROJECT",
      name: "NewFaces",
      description: "The App that will teach you all about fashion!",
      href: "/newfaces",
      image: {
        src: "/images/common/figma-logo.svg",
        width: 150,
        height: 50,
        alt: "Figma",
      },
      position: "left",
    },
    imageSection: [
      {
        src: "/images/projects/newfaces/newfaces.png",
        alt: "New Faces background",
        width: 800,
        height: 800,
      },
    ],
  },
  {
    textSection: {
      projectType: "UX/UI PROJECT",
      name: "AI Fashion",
      description: "Designing an AI-powered fashion ecosystem",
      href: "/ai-fashion",
      image: {
        src: "/images/common/figma-logo.svg",
        width: 150,
        height: 50,
        alt: "Figma",
      },
      position: "right",
    },
    imageSection: [
      {
        src: "/images/projects/ai-fashion/ai-fashion.svg",
        alt: "AI Fashion",
        width: 800,
        height: 800,
      },
    ],
  },
];

export const projects: AppProject[] = [
  {
    slug: "newfaces",
    layout: "app-project",
    title: "NewFaces — Your Fashion Learning Platform",
    description:
      "I designed NewFace a fictionnal user-centric platform to streamline talent discovery for actors, models, and agencies, enhancing profile visibility and engagement through intuitive UX/UI design.",
    carousel: [
      {
        src: "/images/projects/newfaces/home-page-2.svg",
      },
      {
        src: "/images/projects/newfaces/courses-page.svg",
      },
      {
        src: "/images/projects/newfaces/portfolio.svg",
      },
      {
        src: "/images/projects/newfaces/final-page.svg",
      },
    ],
    researchInsights: {
      research:
        "To understand the needs of actors, models, and agencies, I conducted user interviews, surveys, and competitive analysis. Key pain points emerged around profile discoverability, navigation, and visual clarity.",
      insights: [
        "Users struggle to quickly find relevant talent profiles.",
        "Mobile navigation is often cumbersome in existing platforms.",
        "Agencies need clear indicators of talent availability and experience.",
      ],
      image: {
        src: "/images/common/desk.jpg",
        width: 200,
        height: 200,
        alt: "User Research",
      },
    },
    userPersonas: {
      description:
        "Based on the research, I created detailed personas to guide design decisions.",
      personas: [
        {
          name: "Emma, Model",
          age: 24,
          goals: "Find opportunities and showcase portfolio easily",
          painPoints: "Navigation confusion, poor image layout",
          image: {
            src: "/images/common/woman.png",
          },
        },
        {
          name: "Lucas, Actor",
          age: 28,
          goals: "Get noticed by agencies quickly",
          painPoints: "Unclear profile visibility and metrics",
          image: {
            src: "/images/common/man.png",
          },
        },
        {
          name: "Agency Manager",
          age: 35,
          goals: "Efficiently discover and manage talent",
          painPoints: "Difficult filtering and slow loading profiles",
          image: {
            src: "/images/common/woman.png",
          },
        },
      ],
    },
    lowFidelityPrototyping: {
      description:
        "To quickly iterate on design concepts, I developed low-fidelity wireframes focusing on layout, navigation, and core functionalities.",
      images: [
        {
          src: "/images/projects/newfaces/proto-1.svg",
          alt: "Wireframe 1",
        },
        {
          src: "/images/projects/newfaces/proto-2.svg",
          alt: "Wireframe 2",
        },
      ],
    },
    highFidelityPrototyping: {
      description:
        "Interactive prototypes were created to validate flows and test usability before development.",
      images: [
        {
          src: "/images/projects/newfaces/home-page-2.svg",
          alt: "Landing Page",
        },
        {
          src: "/images/projects/newfaces/courses-page.svg",
          alt: "Courses",
        },
        {
          src: "/images/projects/newfaces/portfolio.svg",
          alt: "Portfolio Detail",
        },
        {
          src: "/images/projects/newfaces/final-page.svg",
          alt: "Portfolio Detail",
        },
      ],
    },
    nextSteps:
      "Conduct usability testing with real users, refine micro-interactions, and collaborate with developers to ensure design fidelity during implementation.",
  },
];
