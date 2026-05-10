import SectionHeader from "./SectionHeader";
import { profile } from "../data/profile";
import AnimatedSection from "./AnimatedSection";

const Education = () => {
  const coursework = [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Database Management Systems",
    "Computer Networks",
    "Software Engineering",
  ];

  const certifications = [
    "Cloud Computing - NPTEL (IIT Kharagpur)",
    "Ethical Hacking - NPTEL (IIT Kharagpur)",
  ];

  return (
    <section id="education" className="bg-slate-900/40 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Education"
          title="Academic"
          accent="Foundation"
          description="A computer science foundation backed by practical application development, software engineering coursework, and frontend-focused product work."
        />

        <AnimatedSection
          className="rounded-lg border border-slate-800 bg-slate-950/70 p-6 md:p-8"
        >
          <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <div>
              <h3 className="text-xl font-semibold text-white">
                {profile.degree}
              </h3>
              <p className="mt-1 text-sky-300">{profile.school}</p>
            </div>
            <div className="text-sm font-medium text-slate-400 md:text-right">
              <p>{profile.collegeDuration}</p>
              <p>CGPA: {profile.cgpa}</p>
            </div>
          </div>

          <div className="mt-6 rounded-lg border border-slate-800 bg-slate-900/60 p-4">
            <h4 className="text-sm font-semibold text-white">
              Intermediate in Science (PCM)
            </h4>
            <p className="mt-1 text-sm text-slate-400">
              R.N.T.S College, Sitamarhi / Jun 2020 - Feb 2022 / 85%
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {coursework.map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs text-slate-300"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8">
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-sky-300">
              Certifications
            </h4>
            <div className="flex flex-wrap gap-2">
              {certifications.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Education;
