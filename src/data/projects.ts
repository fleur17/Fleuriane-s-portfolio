import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Elastup",
    subtitle: "A multifunctional elastic band turned fashionable",
    description:
      "The Elastup is a versatile and stylish accessory designed to tackle everyday challenges. Combining a durable elastic band with croûte de veau leather, this innovative product features horizontal slots that securely hold pens, cutlery, and other small essentials.",
    slug: "elastup",
    layout: "business-project",
    background: {
      src: "/images/projects/elastup/background.svg",
    },
    topics: ["Business project", "Multifunctional elastic", "A fashion item"],
    showcase: {
      medias: [
        {
          src: "/images/projects/elastup/elastup-group-2.svg",
          alt: "Elastup Showcase",
          width: 2000,
          height: 800,
        },
      ],
    },
    steps: [
      {
        title: "Design Process",
        descriptions: [
          "After several long brainstorming sessions without success, our idea finally came when a team member arrived with a tupperware held together by an elastic band — a simple workaround that inspired the project.",
          "We came up with the idea of a stylish cutlery holder for tupperware, using a wider elastic band for better stability and a leather finish for elegance. Soon, the concept expanded to notebooks, iPads, and more — that is how Elastup was born.",
        ],
        medias: [
          {
            src: "/images/projects/elastup/design-process.svg",
            alt: "Prototype 1",
            width: 2000,
            height: 800,
          },
          {
            src: "/images/projects/elastup/prototypes.svg",
            alt: "Prototype 2",
            width: 2000,
            height: 800,
          },
        ],
        mediaLayout: "full-width",
      },
      {
        title: "Posters of our campaign",
        medias: [
          {
            src: "/images/projects/elastup/blue-elastup.svg",
            alt: "Poster 1",
            width: 400,
            height: 600,
          },
          {
            src: "/images/projects/elastup/grey-elastup.svg",
            alt: "Poster 2",
            width: 400,
            height: 600,
          },
          {
            src: "/images/projects/elastup/green-elastup.svg",
            alt: "Poster 3",
            width: 400,
            height: 600,
          },
        ],
        mediaLayout: "grid",
      },
    ],
    assets: {
      title: "Campaign Video",
      media: {
        src: "/videos/projects/elastup/elastup.mp4",
        placeholder: "/images/projects/elastup/play-video.svg",
        width: 800,
        height: 450,
      },
    },
  },
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
      media: {
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
          media: {
            src: "/images/common/woman.png",
          },
        },
        {
          name: "Lucas, Actor",
          age: 28,
          goals: "Get noticed by agencies quickly",
          painPoints: "Unclear profile visibility and metrics",
          media: {
            src: "/images/common/man.png",
          },
        },
        {
          name: "Agency Manager",
          age: 35,
          goals: "Efficiently discover and manage talent",
          painPoints: "Difficult filtering and slow loading profiles",
          media: {
            src: "/images/common/woman.png",
          },
        },
      ],
    },
    lowFidelityPrototyping: {
      description:
        "To quickly iterate on design concepts, I developed low-fidelity wireframes focusing on layout, navigation, and core functionalities.",
      medias: [
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
      medias: [
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
      media: {
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
          media: {
            src: "/images/common/woman.png",
          },
        },
        {
          name: "Daniel, Profesional model",
          age: 30,
          goals: "Being more informed about the fashion world",
          painPoints: "Not enough time to stay properly informed",
          media: {
            src: "/images/common/man.png",
          },
        },
        {
          name: "Retail Fashion Manager",
          age: 38,
          goals:
            "Improve product visibility and boost customer engagement with AI styling",
          painPoints: "Low visibility, low engagement, and high returns",
          media: {
            src: "/images/common/woman.png",
          },
        },
      ],
    },
    lowFidelityPrototyping: {
      description: "Sketches and wireframes mapping out AI-driven user flows",
      medias: [
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
      medias: [
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
  {
    title: "TeruBot",
    subtitle: "A multifunctional elastic band turned fashionable",
    description:
      "TeruBot is a robot-app system that visualizes the emotional atmosphere of shared spaces. It turns collective feelings into a tangible robotic presence. Inspired by Teru Teru Bōzu, it reinterprets “good weather” as emotional well-being. Through simple animations, it displays group emotions in real time. It fosters emotional awareness and connection.",
    slug: "teru-bot",
    layout: "business-project",
    background: {
      src: "/images/projects/teru-bot/teru-bot-1.jpg",
    },
    topics: [
      "Collective emotion in shared spaces",
      "Community awareness & connection",
      "Social robotics / robot companion",
    ],
    showcase: {
      medias: [
        {
          src: "/images/projects/teru-bot/garden.svg",
          alt: "Garden",
          width: 66,
          height: 135,
        },
        {
          src: "/images/projects/teru-bot/teru-bot-3.png",
          alt: "TeruBot",
          width: 456,
          height: 513,
        },
        {
          src: "/images/projects/teru-bot/stormy.svg",
          alt: "Stormy",
          width: 66,
          height: 135,
        },
        {
          src: "/images/projects/teru-bot/teru-bot-1.jpg",
          alt: "TeruBot Companion App",
          width: 2048,
          height: 1536,
        },
        {
          src: "/images/projects/teru-bot/checkup.svg",
          alt: "Checkup",
          width: 66,
          height: 135,
        },
        {
          src: "/images/projects/teru-bot/teru-bot-4.png",
          alt: "TeruBot Tilt",
          width: 1038,
          height: 1352,
        },
      ],
      mediaLayout: "grid",
    },
    steps: [
      {
        title: "How does it work ?",
        medias: [
          {
            src: "/images/projects/teru-bot/working-process.jpg",
            alt: "Working Process",
            width: 1600,
            height: 1131,
          },
        ],
        mediaLayout: "full-width",
        substeps: [
          {
            title: "1. Hardware",
            descriptions: [
              "Terubot is powered by a Raspberry Pi running a local language model (Qwen 2.5 - 1.5B) to process voice input and detect emotional cues. A compact webcam and microphone enable presence detection and speech interaction. In parallel, the Gemini API is being explored to improve emotion recognition and speech-to-text capabilities.",
              "The system uses three ESP32 microcontrollers: two control dynamic eye displays with real-time animated expressions, while a third manages head movements via a PWM driver for smooth, synchronized motion.",
              "This distributed architecture allows Terubot to translate detected emotions into physical behaviors, combining eye animations and subtle movements. The robot's head was developed through multiple 3D printing iterations to achieve a balance between mechanical reliability and expressive design.",
            ],
            medias: [
              {
                src: "/images/projects/teru-bot/teru-head.jpg",
                alt: "TeruBot Head",
                width: 1824,
                height: 2736,
              },
              {
                src: "/images/projects/teru-bot/teru-neck.png",
                alt: "TeruBot Neck",
                width: 1824,
                height: 2736,
              },
              {
                src: "/images/projects/teru-bot/teru-body.png",
                alt: "TeruBot Body",
                width: 1824,
                height: 2736,
              },
            ],
            mediaLayout: "grid",
          },
          {
            title: "2. App",
            descriptions: [
              "The mobile app is the main interaction point, combining emotional check-ins with the visualization of both personal and collective moods. Unlike traditional mood-tracking tools focused on individual reflection, Terubot introduces a shared dimension through the concept of “emotional weather,” encouraging users to engage with how a community feels.",
              "The app is structured around four core features: a collective mood visualization, a quick daily check-in, a community channel, and a user profile. Emotions are translated into weather states (sunny, cloudy, stormy), making them intuitive, playful, and non-clinical.",
              "To keep interactions lightweight, the check-in is based on four key dimensions—mood, energy, stress, and social connection—allowing users to quickly express their state without writing. A shared, anonymous community channel complements this by fostering positive interactions and a sense of belonging without social pressure.",
            ],
          },
        ],
      },
      {
        title: "First iteration",
        medias: [
          {
            src: "/images/projects/teru-bot/app-v1.png",
            alt: "App V1",
            width: 626,
            height: 626,
            caption:
              "Figure 1 shows the first set of app wireframes developed during this iteration.",
          },
        ],
        mediaLayout: "full-width",
      },
      {
        title: "Second iteration",
        substeps: [
          {
            title: "Visual Design Iteration",
            descriptions: [
              "In the second iteration, we redesigned the app's visual identity to better reflect its emotional purpose. The interface became more expressive and dynamic, with backgrounds adapting in real time to the user's emotional state using warm or cool tones to mirror mood through ambient feedback.",
              "We also introduced simple data visualizations, allowing users to track their emotional trends over the past week, along with supportive, non-judgmental messages.",
              "Finally, an onboarding screen was added to clearly introduce the concept of emotional weather and guide new users through the app's core features.",
            ],
            medias: [
              {
                src: "/images/projects/teru-bot/app-v2.png",
                alt: "App V2",
                width: 908,
                height: 276,
                caption:
                  "Figure 2 presents the second iteration mockups, highlighting the updated visual language",
              },
            ],
            mediaLayout: "full-width",
          },
          {
            title: "User Study & Evaluation",
            descriptions: [
              "A user study (N = 8) evaluated the mobile app and robot through Likert-scale questions, observations, and open feedback. Overall, participants reported a positive experience, highlighting the app's clarity, ease of use, and strong comfort with the emotional check-in process. Most expressed willingness to use it regularly, though deeper emotional reflection could be further developed.",
              "The robot was perceived as intuitive and engaging, with participants especially valuing its contribution to the overall experience. While interpretations of its expressions varied slightly, its physical presence significantly enhanced the system.",
              "Observations revealed that users naturally attempted to touch the robot, suggesting a strong expectation of tactile interaction. This highlights the importance of embodiment in emotional systems.",
              "Future iterations will build on this by adding touch interactions and extending the emotional weather metaphor through physical elements like adaptive clothing, reinforcing Terubot as a tangible and expressive emotional companion.",
            ],
            medias: [
              {
                src: "/images/projects/teru-bot/welcome.png",
                alt: "App Welcome page",
                width: 1206,
                height: 2622,
              },
              {
                src: "/images/projects/teru-bot/onboarding-home.png",
                alt: "App Onboarding Home page",
                width: 1206,
                height: 2622,
              },
              {
                src: "/images/projects/teru-bot/onboarding-goal.png",
                alt: "App Onboarding Goal page",
                width: 1206,
                height: 2622,
              },
              {
                src: "/images/projects/teru-bot/onboarding-weather.png",
                alt: "App Onboarding Weather page",
                width: 1206,
                height: 2622,
              },
              {
                src: "/images/projects/teru-bot/teru-bot-5.jpg",
                alt: "TeruBot Closeup",
                width: 2048,
                height: 2731,
              },
              {
                src: "/images/projects/teru-bot/onboarding-connect.png",
                alt: "App Onboarding Connect page",
                width: 1206,
                height: 2622,
              },
              {
                src: "/images/projects/teru-bot/garden-rainy.png",
                alt: "Rainy Garden",
                width: 1206,
                height: 2622,
              },
              {
                src: "/images/projects/teru-bot/garden-sunny.png",
                alt: "Sunny Garden",
                width: 1206,
                height: 2622,
              },
              {
                src: "/images/projects/teru-bot/garden-stormy.png",
                alt: "Stormy Garden",
                width: 1206,
                height: 2622,
              },
              {
                src: "/images/projects/teru-bot/features.jpg",
                alt: "Features",
                width: 2048,
                height: 817,
                fullWidth: true,
              },
              // {
              //   src: "/videos/projects/teru-bot/teru-bot.mov",
              //   alt: "TeruBot Video",
              // },
              {
                src: "/images/projects/teru-bot/teru-bot-custom.jpg",
                alt: "TeruBot with glasses",
                width: 2048,
                height: 2731,
              },
            ],
            mediaLayout: "grid",
          },
        ],
      },
    ],
    assets: {
      title: "Files (source code, 3D models, hardware schematics)",
      description:
        "You can find all the files and 3D models on our GitHub: Teru Corp",
      // media: {
      //   src: "/videos/projects/teru-bot/app.mp4",
      //   width: 460,
      //   height: 1000,
      // },
    },
  },
];
