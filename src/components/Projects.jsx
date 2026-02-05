import { motion } from "framer-motion";

/* =======================
   FEATURED PROJECTS
======================= */
const featuredProjects = [
  {
    title: "EasyAppoint",
    description:
      "Appointment booking platform with secure login, dynamic dashboards, and real-time scheduling.",
    tech: ["Php", "CSS", "JavaScript", "MySQL", "XAMPP"],
    github: "https://github.com/Tanujkumarsingh/EassyAppoint",
    live: "#",
  },
  {
    title: "FaithConnect",
    description:
      "A mobile-first, role-based application connecting users with community leaders, featuring onboarding, content feeds, and real-time one-to-one messaging.",
    tech: ["React Native", "TypeScript", "Firebase", "Firestore"],
    github: "https://github.com/rajnish-012/faithconnect",
    live: null,
  },
  {
    title: "ResumeIQ",
    description:
      "An AI-powered resume analyzer that compares resumes against job descriptions and generates ATS compatibility scores with actionable feedback through a multi-step React interface.",
    tech: ["React.js", "React Router", "JavaScript", "Puter.js"],
    github: "https://github.com/rajnish-012/ai-resume-parser",
    live: null,
  },

  {
    title: "Soil Farming Agent",
    description:
      "A role-based agricultural management platform for farmers, distributors, and admins with Firebase authentication and cloud hosting.",
    tech: ["HTML", "CSS", "JavaScript", "Firebase", "Firestore"],
    github: "https://github.com/rajnish-012/soil-farming-agent",
    live: "https://soil-login-and-signup.web.app/",
  },
  {
    title: "EasyCook",
    description:
      "A JavaScript-based web application designed to simplify cooking by providing easy-to-follow recipes and a clean user experience.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/rajnish-012/EasyCook",
    live: "https://easy-cook-lyart.vercel.app/",
  },
  {
    title: "Scientific Calculator",
    description:
      "A fully functional web-based scientific calculator that performs basic and advanced arithmetic operations with a user-friendly interface.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/rajnish-012/Scientific-Calculator",
    live: null,
  },

  // {
  //   title: "Delivery Management System",
  //   description:
  //     "A backend-focused delivery tracking system built with Go, supporting scalable order handling and real-time status updates.",
  //   tech: ["Go", "PostgreSQL", "Docker", "Redis"],
  //   github: "https://github.com/rajnish-012/delivery-management-system",
  //   live: "https://delivery-management-system-weld.vercel.app/",
  // },
];

/* =======================
   OTHER PROJECTS
======================= */
const otherProjects = [
  {
    title: "My Portfolio (React)",
    description:
      "Personal portfolio website showcasing projects, skills, and experience using React and Tailwind CSS.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/rajnish-012/MyPortfolio",
    live: "#",
  },
  {
    title: "Tic Tac Toe",
    description:
      "A browser-based two-player game with automatic win detection and a clean interface.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/rajnish-012/Tic-Tac-Toe",
    live: "https://tic-tac-toe-icve.vercel.app/",
  },
  {
    title: "My-Portfolio",
    description: "Another portfolio website version (HTML based).",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/rajnish-012/My-Portfolio",
    live: "https://my-portfolio-vwea.vercel.app/index.html",
  },

  {
    title: "Amazon Clone",
    description:
      "Frontend replica of the Amazon homepage with responsive layout and interactive UI sections.",
    tech: ["HTML", "CSS"],
    github: "https://github.com/rajnish-012/Amazone-Clone",
    live: "https://amazone-clone-lemon.vercel.app/",
  },
  {
    title: "Basic Calculator",
    description:
      "A responsive calculator supporting standard arithmetic operations with keyboard input.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/rajnish-012/Basic-Calculator",
    live: "https://basic-calculator-rnyk.vercel.app",
  },

  {
    title: "Rock Paper Scissors",
    description:
      "Interactive implementation of the classic game with score tracking and animations.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/rajnish-012/rock-paper-scissor",
    live: "https://rock-paper-scissor-kmuk.vercel.app/",
  },
  // {
  //   title: "Frontend Assignment",
  //   description:
  //     "A modern frontend assignment built using React, TypeScript, and Tailwind CSS with component-driven development principles.",
  //   tech: ["React", "TypeScript", "Tailwind CSS"],
  //   github: "https://github.com/rajnish-012/frontend-assignment",
  //   live: "#",
  // },
  // {
  //   title: "SimpleLang Compiler",
  //   description:
  //     "A basic compiler implementation demonstrating lexical analysis and parsing concepts.",
  //   tech: ["Python", "Compiler Design"],
  //   github: "https://github.com/rajnish-012/simplelang-compiler",
  //   live: "#",
  // },
  // {
  //   title: "CryptoBot",
  //   description:
  //     "An automated cryptocurrency trading bot using Python to analyze trends and execute trades.",
  //   tech: ["Python"],
  //   github: "https://github.com/rajnish-012/CryptoBot",
  //   live: "#",
  // },
];

const ProjectGrid = ({ projects }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {projects.map((project, index) => (
      <motion.div
        key={project.title}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.08 }}
        viewport={{ once: true }}
        className="bg-slate-900/60 border border-slate-800 rounded-xl p-6
                   hover:border-sky-400/60 transition"
      >
        <h3 className="text-xl font-semibold mb-3">{project.title}</h3>

        <p className="text-slate-400 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-xs px-3 py-1 rounded-full bg-slate-800 text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 text-sm">
          <a
            href={project.github}
            target="_blank"
            className="text-sky-400 hover:underline"
          >
            GitHub
          </a>
          {project.live !== "#" && (
            <a
              href={project.live}
              target="_blank"
              className="text-slate-300 hover:underline"
            >
              Live Demo
            </a>
          )}
        </div>
      </motion.div>
    ))}
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <p className="text-slate-400 max-w-2xl">
            A curated selection of projects demonstrating my skills in frontend,
            backend, and problem-solving.
          </p>
        </motion.div>

        {/* Featured */}
        <h3 className="text-xl font-semibold mb-6 text-sky-400">
          Featured Projects
        </h3>
        <ProjectGrid projects={featuredProjects} />

        {/* Other */}
        <h3 className="text-xl font-semibold mt-16 mb-6">Other Projects</h3>
        <ProjectGrid projects={otherProjects} />
      </div>
    </section>
  );
};

export default Projects;
