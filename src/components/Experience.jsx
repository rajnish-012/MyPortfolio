import SectionHeader from "./SectionHeader";
import AnimatedSection from "./AnimatedSection";

const Experience = () => {
  return (
    <section id="experience" className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Experience"
          title="Applied Work"
          accent="Experience"
          description="Hands-on development experience across application workflows, authenticated dashboards, Firebase-backed features, and frontend-heavy product interfaces."
        />

        <AnimatedSection
          as="article"
          className="rounded-lg border border-slate-800 bg-slate-900/60 p-6 md:p-8"
        >
          <div className="flex flex-col gap-3 border-b border-slate-800 pb-6 md:flex-row md:items-start md:justify-between">
            <div>
              <h3 className="text-xl font-semibold text-white">
                Full Stack Developer Intern
              </h3>
              <p className="mt-1 text-sky-300">Unified Mentor Pvt. Ltd.</p>
            </div>
            <p className="text-sm font-medium text-slate-400">
              Aug 2025 - Nov 2025
            </p>
          </div>

          <ul className="mt-6 grid gap-4 text-sm leading-relaxed text-slate-300 md:grid-cols-2">
            <li className="rounded-lg border border-slate-800 bg-slate-950/60 p-4">
              Developed the full-stack Soil Farming Agent platform using
              Firebase Authentication and role-based access control.
            </li>
            <li className="rounded-lg border border-slate-800 bg-slate-950/60 p-4">
              Built dynamic dashboards for multiple user roles, ensuring secure
              and restricted data access.
            </li>
            <li className="rounded-lg border border-slate-800 bg-slate-950/60 p-4">
              Integrated Firestore for real-time database operations, improving
              system responsiveness.
            </li>
            <li className="rounded-lg border border-slate-800 bg-slate-950/60 p-4">
              Collaborated in agile development with sprint planning, standups,
              and peer code reviews.
            </li>
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            {["JavaScript", "Firebase", "Firestore", "Authentication", "Dashboard UI"].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs text-slate-300"
                >
                  {item}
                </span>
              )
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Experience;
