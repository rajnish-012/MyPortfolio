import SectionHeader from "./SectionHeader";
import AnimatedSection from "./AnimatedSection";
import Chip from "./Chip";
import { featuredProjects, otherProjects } from "../data/projects";

const ProjectVisual = ({ title, type }) => (
  <div className="mb-6 rounded-lg border border-slate-800 bg-slate-950 p-4">
    <div className="mb-4 flex items-center gap-2" aria-hidden="true">
      <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
      <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
    </div>
    <div className="rounded-md border border-slate-800 bg-slate-900 p-4">
      <p className="text-sm font-medium text-sky-300">{type || "Project"}</p>
      <p className="mt-2 text-xl font-bold text-white">{title}</p>
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
        className="rounded-lg bg-sky-400 px-4 py-2 font-semibold text-slate-950 transition hover:bg-sky-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-400/40"
      >
        GitHub
      </a>
    )}
    {live && (
      <a
        href={live}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-lg border border-slate-700 px-4 py-2 font-medium text-slate-200 transition hover:border-sky-400 hover:text-sky-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-400/30"
      >
        Live Demo
      </a>
    )}
  </div>
);

const TechChips = ({ tech }) => (
  <ul className="flex flex-wrap gap-2">
    {tech.map((item) => (
      <li key={item}>
        <Chip>{item}</Chip>
      </li>
    ))}
  </ul>
);

const FeaturedProjectCard = ({ project, index }) => (
  <AnimatedSection
    as="article"
    delay={index * 0.08}
    className="flex h-full flex-col rounded-xl border border-slate-800 bg-slate-950/70 p-6 transition-colors duration-300 hover:border-sky-400/50"
  >
    <ProjectVisual title={project.title} type={project.type} />

    <p className="text-sm leading-relaxed text-slate-400">
      {project.description}
    </p>

    <ul className="mt-5 space-y-3 text-sm text-slate-300">
      {project.impact.map((item) => (
        <li key={item} className="flex gap-3">
          <span
            aria-hidden="true"
            className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-sky-400"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>

    <div className="mt-6">
      <TechChips tech={project.tech} />
    </div>

    <div className="mt-auto">
      <ProjectLinks github={project.github} live={project.live} />
    </div>
  </AnimatedSection>
);

const OtherProjectCard = ({ project, index }) => (
  <AnimatedSection
    as="article"
    delay={index * 0.07}
    className="flex h-full flex-col rounded-xl border border-slate-800 bg-slate-950/40 p-6 transition-colors duration-300 hover:border-sky-400/50"
  >
    {project.type && (
      <p className="mb-2 text-sm font-medium text-sky-300">{project.type}</p>
    )}
    <h3 className="text-lg font-semibold text-white">{project.title}</h3>
    <p className="mt-3 text-sm leading-relaxed text-slate-400">
      {project.description}
    </p>

    <div className="mt-5">
      <TechChips tech={project.tech} />
    </div>

    <div className="mt-auto">
      <ProjectLinks github={project.github} live={project.live} />
    </div>
  </AnimatedSection>
);

const Projects = () => {
  return (
    <section id="projects" className="bg-slate-900/40 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Projects"
            title="Selected"
            accent="Work"
            description="Projects that cover the full stack: React interfaces, authenticated workflows, APIs, real-time data, and the databases behind them."
          />
        </AnimatedSection>

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
          <AnimatedSection>
            <h3 className="mb-6 text-xl font-semibold text-white">
              Additional Projects
            </h3>
          </AnimatedSection>
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