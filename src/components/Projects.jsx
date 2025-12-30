import { motion } from "framer-motion";

const projects = [
  {
    title: "Personal Portfolio",
    description:
      "A modern, responsive developer portfolio built with React and Tailwind CSS to showcase skills and projects.",
    tech: ["React", "Tailwind CSS", "Vite"],
    github: "https://github.com/rajnish-012",
    live: "#",
  },
  {
    title: "EasyAppoint",
    description:
      "An appointment booking system with separate dashboards for clients and companies.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: "#",
    live: "#",
  },
  {
    title: "Quiz Application",
    description:
      "Interactive quiz app with timer, scoring, and result summary.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "#",
    live: "#",
  },
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
            A selection of projects that demonstrate my frontend skills and
            real-world problem solving.
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
