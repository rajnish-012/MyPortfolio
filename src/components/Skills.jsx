import SectionHeader from "./SectionHeader";
import AnimatedSection from "./AnimatedSection";
import Chip from "./Chip";
import { skillGroups } from "../data/skills";

const svgProps = {
  "aria-hidden": "true",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: "h-6 w-6",
};

const ICONS = {
  monitor: (
    <svg {...svgProps}>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16v4" />
    </svg>
  ),
  database: (
    <svg {...svgProps}>
      <ellipse cx="12" cy="6" rx="8" ry="3" />
      <path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6" />
      <path d="M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
    </svg>
  ),
  code: (
    <svg {...svgProps}>
      <path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" />
    </svg>
  ),
  settings: (
    <svg {...svgProps}>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h0a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8v0a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z" />
    </svg>
  ),
};

const Skills = () => {
  return (
    <section id="skills" className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Skills"
            title="Engineering"
            accent="Toolkit"
            description="The languages, frameworks, databases, and tools I use to build, debug, and ship full stack applications."
          />
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <AnimatedSection
              key={group.title}
              as="article"
              delay={index * 0.06}
              className="relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/60 p-6 transition-colors duration-300 hover:border-sky-400/50 md:p-8"
            >
              {/* soft corner glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-sky-400/10 blur-3xl"
              />

              <div className="relative flex items-start gap-4">
                <div
                  aria-hidden="true"
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-sky-400/30 bg-sky-400/10 text-sky-300"
                >
                  {ICONS[group.icon] || ICONS.code}
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-semibold text-white">
                    {group.title}
                  </h3>
                  {group.summary && (
                    <p className="mt-0.5 text-sm text-slate-400">
                      {group.summary}
                    </p>
                  )}
                </div>

                <p className="shrink-0 text-xs font-medium text-slate-500">
                  {group.skills.length} skills
                </p>
              </div>

              <ul className="relative mt-6 flex flex-wrap gap-2 border-t border-slate-800 pt-6">
                {group.skills.map((skill) => (
                  <li key={skill}>
                    <Chip>{skill}</Chip>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;