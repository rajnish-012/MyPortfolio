import SectionHeader from "./SectionHeader";
import AnimatedSection from "./AnimatedSection";
import Chip from "./Chip";

const experiences = [
  {
    role: "MERN Developer Intern",
    company: "ARA Web Technologies",
    initials: "ARA",
    period: "Sep 2026 - Present",
    duration: "Ongoing",
    current: true,
    highlights: [
      // TODO: replace with what you actually work on
      "Building and shipping full-stack features across the frontend and backend of client-facing web applications.",
      "Developing responsive, reusable UI components and integrating them with REST APIs.",
      "Working with the team on code reviews, task planning, and iterative delivery.",
      "Debugging and improving existing features for performance and reliability.",
    ],
    tech: ["React.js", "Next.js", "Node.js", "REST APIs", "JavaScript", "MongoDB"],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Unified Mentor Pvt. Ltd.",
    initials: "UM",
    period: "Aug 2025 - Nov 2025",
    duration: "4 months",
    current: false,
    highlights: [
      "Developed the full-stack Soil Farming Agent platform using Firebase Authentication and role-based access control.",
      "Built dynamic dashboards for multiple user roles, ensuring secure and restricted data access.",
      "Integrated Firestore for real-time database operations, improving system responsiveness.",
      "Collaborated in agile development with sprint planning, standups, and peer code reviews.",
    ],
    tech: ["JavaScript", "Firebase", "Firestore", "Authentication", "Dashboard UI"],
  },
];

const CheckIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="mt-0.5 h-4 w-4 shrink-0 text-sky-400"
  >
    <path
      fillRule="evenodd"
      d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 111.4-1.4l3.8 3.8 6.8-6.8a1 1 0 011.4 0z"
      clipRule="evenodd"
    />
  </svg>
);

const Experience = () => {
  return (
    <section id="experience" className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Experience"
          title="Applied Work"
          accent="Experience"
          description="Full stack internships covering React and Next.js interfaces, Node.js APIs, role-based dashboards, and MongoDB and Firebase data layers."
        />

        <ol className="relative space-y-8 md:pl-10">
          {/* timeline rail (desktop only) */}
          <div
            aria-hidden="true"
            className="absolute bottom-2 left-2.25 top-2 hidden w-px bg-linear-to-b from-sky-400/70 via-slate-700 to-transparent md:block"
          />

          {experiences.map((exp) => (
            <li key={`${exp.company}-${exp.period}`} className="relative">
              {/* timeline dot (desktop only) */}
              <span
                aria-hidden="true"
                className={`absolute -left-9.5 top-9 hidden h-4 w-4 rounded-full border-2 md:block ${
                  exp.current
                    ? "border-sky-400 bg-sky-400 shadow-[0_0_14px_rgba(56,189,248,0.8)]"
                    : "border-slate-600 bg-slate-950"
                }`}
              />

              <AnimatedSection
                as="article"
                className={`rounded-xl p-px transition-colors duration-300 ${
                  exp.current
                    ? "bg-linear-to-br from-sky-400/60 via-slate-800 to-slate-800"
                    : "bg-slate-800 hover:bg-sky-400/40"
                }`}
              >
                <div className="rounded-[11px] bg-slate-900 p-6 md:p-8">
                  <div className="flex flex-col gap-4 border-b border-slate-800 pb-6 md:flex-row md:items-start md:justify-between">
                    <div className="flex items-start gap-4">
                      <div
                        aria-hidden="true"
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-sm font-bold tracking-wide ${
                          exp.current
                            ? "bg-linear-to-br from-sky-400 to-blue-600 text-white"
                            : "border border-slate-700 bg-slate-800 text-slate-300"
                        }`}
                      >
                        {exp.initials}
                      </div>

                      <div>
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                          <h3 className="text-xl font-semibold text-white">
                            {exp.role}
                          </h3>
                          {exp.current && (
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-300">
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 motion-safe:animate-pulse" />
                              Current
                            </span>
                          )}
                        </div>
                        <p className="mt-1 text-sky-300">{exp.company}</p>
                      </div>
                    </div>

                    <div className="flex flex-row items-center gap-3 md:flex-col md:items-end md:gap-1">
                      <p className="text-sm font-medium text-slate-300">
                        {exp.period}
                      </p>
                      <Chip tone="muted">{exp.duration}</Chip>
                    </div>
                  </div>

                  <ul className="mt-6 grid gap-x-8 gap-y-4 text-sm leading-relaxed text-slate-300 md:grid-cols-2">
                    {exp.highlights.map((point) => (
                      <li key={point} className="flex gap-3">
                        <CheckIcon />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2 border-t border-slate-800 pt-6">
                    {exp.tech.map((item) => (
                      <Chip key={item} tone={exp.current ? "accent" : "default"}>
                        {item}
                      </Chip>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;