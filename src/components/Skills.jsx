import { motion as Motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { skillGroups } from "../data/skills";

const Skills = () => {
  return (
    <section id="skills" className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionHeader
            eyebrow="Skills"
            title="Engineering"
            accent="Toolkit"
            description="A focused view of the languages, frameworks, tools, and CS fundamentals I use to build, debug, ship, and maintain modern applications."
          />
        </Motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, index) => (
            <Motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true }}
              className="rounded-lg border border-slate-800 bg-slate-900/70 p-6 shadow-lg shadow-slate-950/10 transition hover:border-sky-400/70 hover:shadow-sky-950/20"
            >
              <h3 className="mb-5 text-lg font-semibold text-sky-400">
                {group.title}
              </h3>

              <ul className="space-y-3 text-sm text-slate-300">
                {group.skills.map((skill) => (
                  <li key={skill} className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-sky-400" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
