export const featuredProjects = [
  {
    title: "ResumeIQ - AI Powered Resume Analyser",
    type: "AI Resume Analysis",
    description:
      "A React.js web application that compares resumes against job descriptions via REST API calls and delivers structured match feedback through a clear analysis interface.",
    impact: [
      "Implemented component-level state management for seamless multi-step resume analysis flow",
      "Handled asynchronous Puter.js API requests for non-blocking UI interactions and real-time feedback",
      "Designed reusable UI components with clear information hierarchy for match scoring display",
    ],
    tech: [
      "React.js",
      "React Router",
      "JavaScript",
      "Puter.js",
      "REST API",
      "Vercel",
    ],
    github: "https://github.com/rajnish-012/ai-resume-parser",
    live: "https://ai-parseresume.vercel.app/",
  },
  {
    title: "FaithConnect - Cross-Platform Mobile MVP",
    type: "Mobile Community App",
    description:
      "A cross-platform mobile community app built with React Native and TypeScript, targeting iOS and Android from a single codebase with real-time data sync.",
    impact: [
      "Integrated Firebase Auth for secure user onboarding with persistent session management",
      "Used Firestore real-time listeners for live data synchronization across devices",
      "Built scalable mobile screens with TypeScript ensuring type-safe component architecture",
    ],
    tech: [
      "React Native",
      "TypeScript",
      "Firebase",
      "Firestore",
      "Expo",
      "Android",
      "iOS",
    ],
    github: "https://github.com/rajnish-012/faithconnect",
    live: "https://expo.dev/accounts/rajnish_kr/projects/faithconnect/builds/8350720f-cb20-445a-875c-c8e2b2371346",
  },
  {
    title: "DMPL — Delhi Medicos Premier League",
    type: "Full-Stack Web Platform",
    description:
      "A full-stack cricket tournament platform built with React and PocketBase, featuring real-time live scoring, a player auction engine, payment verification, and a protected admin panel.",
    impact: [
      "Built real-time live scoring with PocketBase SSE subscriptions and ball-by-ball stat calculations",
      "Implemented a player auction engine with server-side race-condition protection and bid validation",
      "Engineered a payment verification workflow with UPI QR integration and admin approval flow",
    ],
    tech: [
      "React",
      "Vite",
      "PocketBase",
      "SQLite",
      "Tailwind CSS",
      "Server-Side Events",
    ],
    github: "",
    live: "https://dmplt20.com",
  },
];

export const otherProjects = [
  {
    title: "Vidyartha — AI-Powered EdTech Platform",
    type: "Full-Stack Web Platform",
    description:
      "A full-stack exam preparation platform for UPSC and NEET built with Next.js 15 and NestJS, featuring AI doubt-solving, Razorpay payments, mock tests, and a three-role admin system in a Turborepo monorepo.",
    impact: [
      "Integrated OpenAI GPT-4 for AI doubt-solving, auto quiz generation, and personalized study plan creation",
      "Built Razorpay subscription billing with coupon system, HMAC-SHA256 payment verification, and secure ebook downloads",
      "Architected a NestJS REST API with JWT + refresh token rotation, Google OAuth, RBAC across 4 roles, and 25+ Prisma models",
    ],
    tech: [
      "Next.js 15",
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "TypeScript",
      "OpenAI",
      "Razorpay",
      "Docker",
    ],
    github: "https://github.com/rajnish-012/VIdyartha-Edtech",
    live: null,
  },
  {
    title: "EasyAppoint",
    type: "Appointment Booking Platform",
    description:
      "Engineered a full-stack booking system using PHP, MySQL, and JavaScript, supporting concurrent user and admin appointment workflows.",
    impact: [
      "Designed normalized relational database schema",
      "Built role-aware dashboards for users and admins",
      "Handled scheduling, cancellation, and appointment management flows",
    ],
    tech: ["PHP", "MySQL", "JavaScript", "CSS", "XAMPP"],
    github: "https://github.com/Tanujkumarsingh/EassyAppoint",
    live: null,
  },
  {
    title: "Soil Farming Agent",
    description:
      "Full-stack internship platform with Firebase Authentication, role-based access control, dynamic dashboards, and Firestore real-time operations.",
    tech: ["JavaScript", "Firebase", "Firestore", "HTML", "CSS"],
    github: "https://github.com/rajnish-012/soil-farming-agent",
    live: "https://soil-login-and-signup.web.app/",
  },
  {
    title: "EasyCook",
    description:
      "Recipe discovery web app focused on simple interactions, readable recipe content, and a responsive JavaScript UI.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/rajnish-012/EasyCook",
    live: "https://easy-cook-lyart.vercel.app/",
  },
  {
    title: "Scientific Calculator",
    description:
      "Browser-based scientific calculator with standard and advanced arithmetic operations in a clean interface.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/rajnish-012/Scientific-Calculator",
    live: null,
  },
];
