import SectionHeader from "./SectionHeader";
import AnimatedSection from "./AnimatedSection";

const About = () => {
  return (
    <section id="about" className="bg-slate-900/40 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <SectionHeader
            eyebrow="About"
            title="SDE With"
            accent="Frontend Depth"
            description="I care about software that is useful, readable, and reliable. My work combines CS fundamentals, React development, API integration, accessibility, and product-minded UI."
          />
        </AnimatedSection>

        <AnimatedSection
          className="grid gap-6 md:grid-cols-[1.5fr_1fr]"
          delay={0.08}
        >
          <div className="rounded-lg border border-slate-800 bg-slate-950/70 p-6 text-slate-300 md:p-8">
            <div className="space-y-5 leading-relaxed">
              <p>
                I am a final-year B.Tech Computer Science student at IIIT
                Tiruchirappalli, focused on software development with a strong
                frontend engineering edge. My foundation includes Data
                Structures, Algorithms, Object-Oriented Programming, DBMS,
                Operating Systems, and Computer Networks.
              </p>

              <p>
                My current stack centers on React.js, React Native, Node.js,
                Express.js, Firebase, REST APIs, MySQL, MongoDB, JavaScript, and
                TypeScript. I like building reliable application workflows with
                clean UI, secure authentication, and practical data handling.
              </p>

              <p>
                I am actively seeking Software Development Engineer and Full
                Stack Developer opportunities where I can contribute across
                application logic, frontend systems, APIs, and user-facing
                product quality.
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-slate-800 bg-slate-950/70 p-6 md:p-8">
            <h3 className="text-lg font-semibold text-white">What I Bring</h3>
            <dl className="mt-6 space-y-5">
              {[
                ["Focus", "SDE roles with frontend/UI engineering depth"],
                ["Strength", "React components, state, forms, and routing"],
                ["Backend", "Node.js, Express.js, Firebase, REST APIs"],
                ["Mindset", "Clean code, debugging, and steady iteration"],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-sky-300">
                    {label}
                  </dt>
                  <dd className="mt-1 text-sm text-slate-300">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default About;
