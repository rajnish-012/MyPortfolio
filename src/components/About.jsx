import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-28 bg-slate-900/40">
      <div className="max-w-6xl mx-auto px-6">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-sky-400">Me</span>
          </h2>
          <p className="text-slate-400 max-w-2xl">
            A brief overview of my background, experience, and journey as a frontend-focused software engineer.
          </p>
        </motion.div>

        {/* CONTENT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 md:p-12"
        >
          <div className="max-w-4xl space-y-7 text-slate-300 leading-relaxed">

            {/* INTRO */}
            <p>
              Hi, I’m{" "}
              <span className="text-sky-400 font-semibold">
                Rajnish Kumar
              </span>
              , a final-year{" "}
              <span className="font-medium">B.Tech Computer Science</span>{" "}
              student at{" "}
              <span className="text-sky-400 font-medium">
                IIIT Tiruchirappalli
              </span>{" "}
              with a strong focus on{" "}
              <span className="font-medium">
                Frontend Development and Software Engineering
              </span>.
            </p>

            {/* FRONTEND IDENTITY */}
            <p>
              I specialize in building clean, responsive, and performance-oriented
              user interfaces using modern frontend technologies like{" "}
              <span className="font-medium">React.js, Next.js</span>, and
              component-based architectures. I enjoy translating product
              requirements into scalable UI solutions with attention to
              usability, accessibility, and performance.
            </p>

            {/* INTERNSHIP */}
            <p>
              I completed a{" "}
              <span className="text-sky-400 font-medium">
                Full Stack Web Development Internship
              </span>{" "}
              at{" "}
              <span className="font-medium">
                Unified Mentor Pvt. Ltd.
              </span>{" "}
              <span className="text-slate-400">
                (Aug 2025 – Nov 2025)
              </span>
              , where I worked on frontend-heavy applications involving
              role-based dashboards, authentication flows, and real-time data
              integration using JavaScript and Firebase.
            </p>

            {/* CAREER FOCUS */}
            <p>
              With a solid foundation in computer science fundamentals and hands-on
              project experience, I focus on writing maintainable, efficient, and
              scalable code. I am actively seeking{" "}
              <span className="font-medium">
                entry-level Software Engineer or Frontend Developer roles
              </span>{" "}
              where I can contribute to building user-centric products and grow
              as an engineer.
            </p>

            {/* HIGHLIGHTS */}
            <div className="flex flex-wrap gap-3 pt-5">
              {[
                "Frontend Development",
                "Software Engineering",
                "React & UI Engineering",
                "REST API Integration",
                "Problem Solving",
                "Performance Optimization",
              ].map((item) => (
                <span
                  key={item}
                  className="px-4 py-1.5 text-sm rounded-full 
                             bg-slate-800 border border-slate-700 
                             text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
