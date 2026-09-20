import SectionHeader from "./SectionHeader";
import AnimatedSection from "./AnimatedSection";
import Chip from "./Chip";
import { profile } from "../data/profile";

const coursework = [
  "DSA",
  "OOPs",
  "DDBMS",
  "Computer Networks",
  "Software Engineering",
];

const certifications = [
  { name: "Cloud Computing", issuer: "NPTEL (IIT Kharagpur)" },
  { name: "Ethical Hacking", issuer: "NPTEL (IIT Kharagpur)" },
];

const card =
  "relative overflow-hidden rounded-xl border border-slate-800 bg-slate-950/70 p-6 transition-colors duration-300 hover:border-sky-400/50 md:p-8";

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

const CapIcon = () => (
  <svg {...svgProps}>
    <path d="M22 9 12 4 2 9l10 5 10-5Z" />
    <path d="M6 11.5V16c0 1.2 2.7 3 6 3s6-1.8 6-3v-4.5" />
    <path d="M22 9v6" />
  </svg>
);

const BookIcon = () => (
  <svg {...svgProps}>
    <path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5Z" />
    <path d="M4 19a2 2 0 0 1 2-2h13" />
  </svg>
);

const LayersIcon = () => (
  <svg {...svgProps}>
    <path d="m12 3 9 5-9 5-9-5 9-5Z" />
    <path d="m3 13 9 5 9-5" />
  </svg>
);

const AwardIcon = () => (
  <svg {...svgProps}>
    <circle cx="12" cy="9" r="6" />
    <path d="m8.5 14.5-1.5 6.5 5-3 5 3-1.5-6.5" />
  </svg>
);

const Glow = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-sky-400/10 blur-3xl"
  />
);

const IconTile = ({ children, solid = false }) => (
  <div
    aria-hidden="true"
    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
      solid
        ? "bg-linear-to-br from-sky-400 to-blue-600 text-white"
        : "border border-sky-400/30 bg-sky-400/10 text-sky-300"
    }`}
  >
    {children}
  </div>
);

const Stat = ({ label, value }) => (
  <div className="rounded-lg border border-slate-800 bg-slate-900/60 px-4 py-3">
    <dt className="text-xs font-medium text-slate-500">{label}</dt>
    <dd className="mt-1 text-sm font-semibold text-slate-100">{value}</dd>
  </div>
);

const Education = () => {
  return (
    <section id="education" className="bg-slate-900/40 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Education"
            title="Academic"
            accent="Foundation"
            description="A computer science degree with the fundamentals behind full stack work: data structures, databases, networks, and software engineering."
          />
        </AnimatedSection>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Degree */}
          <AnimatedSection
            as="article"
            className={`${card} lg:col-span-3`}
          >
            <Glow />
            <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-4">
                <IconTile solid>
                  <CapIcon />
                </IconTile>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {profile.degree}
                  </h3>
                  <p className="mt-1 text-sky-300">{profile.school}</p>
                </div>
              </div>

              <dl className="grid grid-cols-2 gap-3 md:min-w-88">
                <Stat label="Duration" value={profile.collegeDuration} />
                <Stat label="CGPA" value={profile.cgpa} />
              </dl>
            </div>
          </AnimatedSection>

          {/* Intermediate */}
          <AnimatedSection as="article" delay={0.06} className={card}>
            <Glow />
            <div className="relative flex items-start gap-4">
              <IconTile>
                <BookIcon />
              </IconTile>
              <div className="min-w-0">
                <h4 className="text-lg font-semibold text-white">
                  Intermediate in Science (PCM)
                </h4>
                <p className="mt-0.5 text-sm text-slate-400">
                  R.N.T.S College Morshand, Sitamarhi
                </p>
              </div>
            </div>

            <dl className="relative mt-6 grid grid-cols-2 gap-3 border-t border-slate-800 pt-6">
              <Stat label="Duration" value="Jun 2020 - Feb 2022" />
              <Stat label="Percentage" value="85%" />
            </dl>
          </AnimatedSection>

          {/* Coursework */}
          <AnimatedSection as="article" delay={0.12} className={card}>
            <Glow />
            <div className="relative flex items-start gap-4">
              <IconTile>
                <LayersIcon />
              </IconTile>
              <div>
                <h4 className="text-lg font-semibold text-white">Coursework</h4>
                <p className="mt-0.5 text-sm text-slate-400">
                  Core computer science subjects
                </p>
              </div>
            </div>

            <ul className="relative mt-6 flex flex-wrap gap-2 border-t border-slate-800 pt-6">
              {coursework.map((item) => (
                <li key={item}>
                  <Chip>{item}</Chip>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Certifications */}
          <AnimatedSection as="article" delay={0.18} className={card}>
            <Glow />
            <div className="relative flex items-start gap-4">
              <IconTile>
                <AwardIcon />
              </IconTile>
              <div>
                <h4 className="text-lg font-semibold text-white">
                  Certifications
                </h4>
                <p className="mt-0.5 text-sm text-slate-400">
                  Cloud and security
                </p>
              </div>
            </div>

            <ul className="relative mt-6 space-y-4 border-t border-slate-800 pt-6">
              {certifications.map((cert) => (
                <li key={cert.name} className="flex items-start gap-3">
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
                  <div>
                    <p className="text-sm font-medium text-slate-200">
                      {cert.name}
                    </p>
                    <p className="text-xs text-slate-500">{cert.issuer}</p>
                  </div>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Education;