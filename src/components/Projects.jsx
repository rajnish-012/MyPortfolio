import { motion as Motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { featuredProjects, otherProjects } from "../data/projects";

const ProjectVisual = ({ title, type }) => (
  <div className="mb-6 rounded-lg border border-slate-800 bg-slate-950 p-4">
    <div className="mb-4 flex items-center gap-2">
      <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
      <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
    </div>
    <div className="rounded-md border border-slate-800 bg-slate-900 p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-300">
        {type || "Project"}
      </p>
      <p className="mt-3 text-xl font-bold text-white">{title}</p>
    </div>
  </div>
);

const ProjectLinks = ({ github, live }) => (
  <div className="mt-6 flex flex-wrap gap-3 text-sm">
    {github && (
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-lg bg-sky-400 px-4 py-2 font-semibold text-slate-950 transition hover:bg-sky-300"
      >
        GitHub
      </a>
    )}
    {live && (
      <a
        href={live}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-lg border border-slate-700 px-4 py-2 font-medium text-slate-200 transition hover:border-sky-400 hover:text-sky-300"
      >
        Live Demo
      </a>
    )}
  </div>
);

const FeaturedProjectCard = ({ project, index }) => (
  <Motion.article
    initial={{ opacity: 0, y: 36, filter: "blur(4px)" }}
    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    transition={{ duration: 0.55, delay: index * 0.08 }}
    whileHover={{ y: -8 }}
    viewport={{ once: true }}
    className="flex flex-col rounded-lg border border-slate-800 bg-slate-900/70 p-6 shadow-xl shadow-slate-950/20 transition hover:border-sky-400/70 hover:shadow-lg hover:shadow-sky-500/10"
  >
    <ProjectVisual title={project.title} type={project.type} />

    <p className="mt-2 text-sm leading-relaxed text-slate-400">
      {project.description}
    </p>

    <ul className="mt-5 space-y-3 text-sm text-slate-300">
      {project.impact.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-sky-400" />
          <span>{item}</span>
        </li>
      ))}
    </ul>

    <div className="mt-6 flex flex-wrap gap-2">
      {project.tech.map((tech) => (
        <span
          key={tech}
          className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300"
        >
          {tech}
        </span>
      ))}
    </div>

    <div className="mt-auto">
      <ProjectLinks github={project.github} live={project.live} />
    </div>
  </Motion.article>
);

const OtherProjectCard = ({ project, index }) => (
  <Motion.article
    initial={{ opacity: 0, y: 28, filter: "blur(4px)" }}
    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    transition={{ duration: 0.5, delay: index * 0.07 }}
    whileHover={{ y: -6 }}
    viewport={{ once: true }}
    className="flex flex-col rounded-lg border border-slate-800 bg-slate-950/70 p-6 transition hover:border-sky-400/60 hover:shadow-lg hover:shadow-sky-950/30"
  >
    <h3 className="text-lg font-semibold text-white">{project.title}</h3>
    <p className="mt-3 text-sm leading-relaxed text-slate-400">
      {project.description}
    </p>

    <div className="mt-5 flex flex-wrap gap-2">
      {project.tech.map((tech) => (
        <span
          key={tech}
          className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300"
        >
          {tech}
        </span>
      ))}
    </div>

    <div className="mt-auto">
      <ProjectLinks github={project.github} live={project.live} />
    </div>
  </Motion.article>
);

const Projects = () => {
  return (
    <section id="projects" className="bg-slate-900/40 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionHeader
            eyebrow="Projects"
            title="Selected"
            accent="Work"
            description="Curated projects that show software engineering fundamentals, frontend architecture, authenticated workflows, real-time data, and product-minded UI decisions."
          />
        </Motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <FeaturedProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>

        <div className="mt-16">
          <Motion.h3
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-6 text-xl font-semibold text-white"
          >
            Additional Projects
          </Motion.h3>
          <div className="grid gap-6 md:grid-cols-3">
            {otherProjects.map((project, index) => (
              <OtherProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;