import SectionHeader from "./SectionHeader";
import AnimatedSection from "./AnimatedSection";
import Chip from "./Chip";

const layers = [
  {
    name: "Frontend",
    role: "Interfaces and state",
    items: [
      "React.js",
      "Next.js",
      "JavaScript",
      "Tailwind CSS",
    ],
  },
  {
    name: "Backend",
    role: "APIs and authentication",
    items: ["Node.js", "Express.js", "REST APIs", "JWT & OAuth"],
  },
  {
    name: "Database",
    role: "Data and storage",
    items: ["MongoDB", "MySQL", "Firestore"],
  },
];

const About = () => {
  return (
    <section id="about" className="bg-slate-900/40 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <SectionHeader
            eyebrow="About"
            title="Full Stack Developer,"
            accent="UI to Database"
            description="I build web applications end to end: the interface people use, the API behind it, and the data underneath. I care about code that is readable, secure, and easy to change."
          />
        </AnimatedSection>

        <AnimatedSection
          className="grid gap-6 md:grid-cols-[1.4fr_1fr]"
          delay={0.08}
        >
          <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-6 text-slate-300 md:p-8">
            <div className="space-y-5 leading-relaxed">
              <p>
                I am a recent B.Tech Computer Science and Engineering graduate
                (2026) from IIIT Tiruchirappalli. My foundation includes Data
                Structures, Algorithms, Object-Oriented Programming, DBMS,
                Operating Systems, and Computer Networks.
              </p>

              <p>
                On top of that I work across the stack with React.js, Next.js,
                React Native, Node.js, Express.js, NestJS, REST APIs,
                PostgreSQL, MongoDB, MySQL, Firebase, and TypeScript. I like building reliable workflows:
                clean UI, secure authentication, role-based access, and
                practical data handling.
              </p>

              <p>
                I am currently a Full Stack Developer Intern at ARA Web
                Technology, and I am looking for Full Stack Developer and
                Software Development Engineer roles where I can own features
                from the screen to the database.
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-6 md:p-8">
            <h3 className="text-lg font-semibold text-white">My stack</h3>
            <p className="mt-1 text-sm text-slate-400">
              How a request travels through what I build.
            </p>

            <ol className="mt-6 space-y-6 border-l border-slate-800 pl-6">
              {layers.map((layer) => (
                <li key={layer.name} className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute -left-7.75 top-1 h-3 w-3 rounded-full border-2 border-sky-400 bg-slate-950"
                  />
                  <p className="text-sm font-semibold text-white">
                    {layer.name}
                  </p>
                  <p className="text-xs text-slate-500">{layer.role}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {layer.items.map((item) => (
                      <Chip key={item}>{item}</Chip>
                    ))}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default About;