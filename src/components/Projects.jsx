import { motion } from "framer-motion";

const projects = [
  
  {
    title: "MyPortfolio",
    description:
      "Personal portfolio site showcasing projects, skills, and experience.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/rajnish-012/MyPortfolio",
    live: "#" 
  },
  {
    title: "soil-farming-agent",
    description:
      "Role-based agricultural management platform for farmers, distributors, and admins. Integrated Firebase Auth & Hosting.",
    tech: ["CSS", "HTML" , "javaScript", "Firebase" , " Firestore"],
    github: "https://github.com/rajnish-012/soil-farming-agent",
    live: "#"
  },
  {
    title: "react-learning",
    description:
      "React practice project — learning React concepts and building small features.",
    tech: ["JavaScript", "React"],
    github: "https://github.com/rajnish-012/react-learning",
    live: "#"
  },
  {
    title: "My-Portfolio",
    description:
      "Another portfolio website version (HTML based).",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/rajnish-012/My-Portfolio",
    live: "#"
  },
  {
    title: "EasyCook",
    description:
      "JavaScript application for cooking recipes or easy cook features (fill details).",
    tech: ["JavaScript"],
    github: "https://github.com/rajnish-012/EasyCook",
    live: "#"
  },
  
  {
    title: "Basic Calculator",
    description:
      "A simple, responsive web-based calculator built using HTML, CSS, and JavaScript. It supports standard arithmetic operations with keyboard input and intuitive error handling.", 
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/rajnish-012/Basic-Calculator",
    live: "https://basic-calculator-rnyk.vercel.app" // from README demo link :contentReference[oaicite:1]{index=1}
  },
  {
    title: "Tic Tac Toe",
    description:
      "A responsive, two-player browser game with automatic win detection and a clean user interface.",
    tech: ["HTML", "CSS", "JavaScript"], // adjust if it uses Python or something else
    github: "https://github.com/rajnish-012/Tic-Tac-Toe",
    live: "#" // add live link if deployed
  },
  {
    title: "Rock Paper Scissor",
    description:
      "A modern take on the classic game with animations, score tracking, and smooth UX.",
    tech: ["HTML", "CSS", "JavaScript"], // change this if the project is Python or another language
    github: "https://github.com/rajnish-012/rock-paper-scissor",
    live: "#" // add live link if deployed
  },
  {
    title: "Login and Register",
    description:
      "Clean authentication UI with modern form design and transitions. Great template for web apps.",
    tech: ["HTML", "CSS", "JavaScript"], // add backend tech if used (PHP, Node, etc.)
    github: "https://github.com/rajnish-012/Login-and-Register",
    live: "#" // add live link if deployed
  },
  {
    title: "Amazone-Clone",
    description:
      "Frontend replica of Amazon homepage with responsive design and interactive sections.",
    tech: ["HTML", "CSS"],
    github: "https://github.com/rajnish-012/Amazone-Clone",
    live: "#"
  },
  {
    title: "magic-lcm-game",
    description:
      "Interactive math game that helps childs learn LCM concepts through challenges and animations.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/rajnish-012/magic-lcm-game",
    live: "#"
  },
  {
    title: "Basic-Calculator",
    description:
      "A simple calculator supporting all basic arithmetic operations with modern UI.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/rajnish-012/Basic-Calculator",
    live: "#"
  },
  {
    title: "simplelang-compiler",
    description:
      "Basic compiler implementation for a simple language (from name — add details).",
    tech: ["Python", "Compiler Concepts"],
    github: "https://github.com/rajnish-012/simplelang-compiler",
    live: "#"
  },
  {
    title: "CryptoBot",
    description:
      "Automated trading bot using machine learning to predict cryptocurrency trends and execute trades with real-time data.",
    tech: ["Python"],
    github: "https://github.com/rajnish-012/CryptoBot",
    live: "#"
  },
  {
    title: "AI-Tool-Integrator-Report",
    description:
      "Report related to an AI tool integrator — include summary from README.",
    tech: ["Documentation", "AI"],
    github: "https://github.com/rajnish-012/AI-Tool-Integrator-Report",
    live: "#"
  },
  {
    title: "delivery-management-system",
    description:
      "Go Order tracking and delivery system built with Go, Docker, PostgreSQL, and Redis. Real-time updates for admins and users.",
    tech: ["Go"],
    github: "https://github.com/rajnish-012/delivery-management-system",
    live: "#"
  },
  {
    title: "frontend-assignment",
    description:
      "React + TypeScript + TailwindCSS component assignment with Storybook.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/rajnish-012/frontend-assignment",
    live: "#"
  }
];

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
            A collection of my most creative and technically challenging work — blending design, logic, and performance.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-900/60 border border-slate-800 rounded-xl p-6
                         hover:border-sky-400/60 transition"
            >
              <h3 className="text-xl font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 rounded-full
                               bg-slate-800 text-slate-300"
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
                <a
                  href={project.live}
                  target="_blank"
                  className="text-slate-300 hover:underline"
                >
                  Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
