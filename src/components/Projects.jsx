import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "EASYAPPOINT",
      desc: "Appointment booking platform with separate client and company dashboards.",
      tech: "HTML, CSS, JavaScript, PHP",
      github: "#",
      live: "#",
    },
    {
      title: "Interactive Quiz App",
      desc: "Timed quiz application with scoring, explanations, and progress tracking.",
      tech: "HTML, CSS, JavaScript",
      github: "#",
      live: "#",
    },
    {
      title: "React Portfolio",
      desc: "Personal portfolio built with React and Tailwind CSS.",
      tech: "React, Tailwind",
      github: "#",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-slate-900/40">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-slate-950 border border-slate-800 rounded-xl p-6 hover:border-sky-400 transition"
            >
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-slate-400 mb-4">{p.desc}</p>
              <p className="text-sm text-sky-400 mb-6">{p.tech}</p>

              <div className="flex gap-4">
                <a
                  href={p.github}
                  target="_blank"
                  className="text-sm border border-sky-400 px-4 py-2 rounded-md text-sky-400"
                >
                  GitHub
                </a>
                <a
                  href={p.live}
                  target="_blank"
                  className="text-sm bg-sky-400 text-slate-900 px-4 py-2 rounded-md"
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
