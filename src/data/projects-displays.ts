import { ProjectDisplayData } from "@/types";

export const projectsDisplays: ProjectDisplayData[] = [
  {
    textSection: {
      projectType: "ART PROJECT",
      name: "The NeuroPortals",
      description: "What if you can be the master of your brain through art ?",
      href: "/neuroportal",
      media: {
        src: "/images/common/touchdesigner.svg",
        width: 150,
        height: 50,
        alt: "Touchdesigner",
      },
      position: "left",
    },
    mediaSection: [
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
      media: {
        src: "/images/common/kickstarter-logo.svg",
        width: 200,
        height: 100,
        alt: "Kickstarter",
      },
      position: "right",
    },
    mediaSection: [
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
      media: {
        src: "/images/common/figma-logo.svg",
        width: 150,
        height: 50,
        alt: "Figma",
      },
      position: "left",
    },
    mediaSection: [
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
      media: {
        src: "/images/common/figma-logo.svg",
        width: 150,
        height: 50,
        alt: "Figma",
      },
      position: "right",
    },
    mediaSection: [
      {
        src: "/images/projects/ai-fashion/ai-fashion.svg",
        alt: "AI Fashion",
        width: 800,
        height: 800,
      },
    ],
  },
  {
    textSection: {
      projectType: "BUSINESS PROJECT",
      name: "TeruBot",
      description:
        "Materializing collective emotions through an embodied robotic metaphor",
      href: "/teru-bot",
      media: {
        src: "/images/common/figma-logo.svg",
        width: 150,
        height: 50,
        alt: "Figma",
      },
      position: "left",
    },
    mediaSection: [
      {
        src: "/images/projects/teru-bot/teru-bot-1.jpg",
        alt: "TeruBot",
        width: 800,
        height: 800,
      },
    ],
  },
];
