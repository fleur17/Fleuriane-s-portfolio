import { AppProject } from "@/types";

export const projects: AppProject[] = [
  {
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
    slug: "newfaces",
    layout: "app-project",
  },
  {
    title: "AI Fashion Intelligent Styling Experience",
    description:
      "I designed a fictionnal UI/UX IA fashion app that helps people find style recommendations being able to virtually try on clothes and get personalized outfit ideas using artificial intelligence.",
    carousel: [
      {
        src: "/images/projects/ai-fashion/home.svg",
      },
      {
        src: "/images/projects/ai-fashion/calendar.svg",
      },
      {
        src: "/images/projects/ai-fashion/chat.svg",
      },
    ],
    researchInsights: {
      research:
        "Through research including surveys and interviews with fashion shoppers, i manage to find some relevant points that could be resolved through my app.",
      insights: [
        "Users want personalized outfit suggestions.",
        "Fashion professionals struggle to keep their schedules updated.",
        "Retailers need smarter ways to showcase products with AI.",
      ],
      image: {
        src: "/images/common/desk.jpg",
        width: 200,
        height: 200,
        alt: "AI Fashion research",
      },
    },
    userPersonas: {
      description:
        "Those are fictionnal personas that helped me define user needs and refine AI-powered features.",
      personas: [
        {
          name: "Mia, Trend-Seeker",
          age: 22,
          goals: "Discover new outfits instantly using AI",
          painPoints: "Hard to match clothes with her style",
          image: {
            src: "/images/common/woman.png",
          },
        },
        {
          name: "Daniel, Profesional model",
          age: 30,
          goals: "Being more informed about the fashion world",
          painPoints: "Not enough time to stay properly informed",
          image: {
            src: "/images/common/man.png",
          },
        },
        {
          name: "Retail Fashion Manager",
          age: 38,
          goals:
            "Improve product visibility and boost customer engagement with AI styling",
          painPoints: "Low visibility, low engagement, and high returns",
          image: {
            src: "/images/common/woman.png",
          },
        },
      ],
    },
    lowFidelityPrototyping: {
      description: "Sketches and wireframes mapping out AI-driven user flows",
      images: [
        {
          src: "/images/projects/ai-fashion/home_proto.svg",
          alt: "Wireframe 1",
        },
        {
          src: "/images/projects/ai-fashion/calendar-proto.svg",
          alt: "Wireframe 2",
        },
      ],
    },
    highFidelityPrototyping: {
      description:
        "Prototypes showcasing AI features and the different pages of the app",
      images: [
        {
          src: "/images/projects/ai-fashion/home.svg",
          alt: "Home page",
        },
        {
          src: "/images/projects/ai-fashion/calendar.svg",
          alt: "Calendar page",
        },
        {
          src: "/images/projects/ai-fashion/chat.svg",
          alt: "Chatbot page",
        },
      ],
    },
    nextSteps:
      "Further user testing to refine AI recommendations and to improve the user flow of the app",
    slug: "ai-fashion",
    layout: "app-project",
  },
];
