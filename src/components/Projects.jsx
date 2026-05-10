import { motion as Motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { featuredProjects, otherProjects } from "../data/projects";

const ProjectVisual = ({ title, type, tech }) => (
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
      <div className="mt-5 grid grid-cols-2 gap-2">
        {tech.slice(0, 4).map((item) => (
          <span
            key={item}
            className="rounded-md bg-slate-800 px-2.5 py-2 text-xs text-slate-300"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const ProjectLinks = ({ github, live }) => (
  <div className="mt-6 flex flex-wrap gap-3 text-sm">
    <a
      href={github}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-lg bg-sky-400 px-4 py-2 font-semibold text-slate-950 transition hover:bg-sky-300"
    >
      GitHub
    </a>
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
    initial={{ opacity: 0, y: 36 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.55, delay: index * 0.08 }}
    whileHover={{ y: -8 }}
    viewport={{ once: true }}
    className="rounded-lg border border-slate-800 bg-slate-900/70 p-6 shadow-xl shadow-slate-950/20 transition hover:border-sky-400/70 hover:shadow-sky-950/20"
  >
    <ProjectVisual title={project.title} type={project.type} tech={project.tech} />

    <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
    <p className="mt-4 text-sm leading-relaxed text-slate-400">
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

    <ProjectLinks github={project.github} live={project.live} />
  </Motion.article>
);

const OtherProjectCard = ({ project, index }) => (
  <Motion.article
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.07 }}
    whileHover={{ y: -6 }}
    viewport={{ once: true }}
    className="rounded-lg border border-slate-800 bg-slate-950/70 p-6 transition hover:border-sky-400/60"
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

    <ProjectLinks github={project.github} live={project.live} />
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
          <h3 className="mb-6 text-xl font-semibold text-white">
            Additional Projects
          </h3>
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

