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
            A brief overview of my background, experience, and journey as a software engineer.
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
              and an aspiring{" "}
              <span className="font-medium">Full Stack Software Engineer</span>.
            </p>

            {/* FULL STACK IDENTITY */}
            <p>
              I specialize in developing modern, scalable, and responsive web
              applications by working across both frontend and backend layers.
              I enjoy translating ideas into real-world products using clean UI
              design, well-structured APIs, and efficient databases.
            </p>

            {/* INTERNSHIP */}
            <p>
              I previously completed a{" "}
              <span className="text-sky-400 font-medium">
                Full Stack Web Development Internship
              </span>{" "}
              at{" "}
              <span className="font-medium">
                Unified Mentor Pvt. Ltd.
              </span>{" "}
              <span className="text-slate-400">
                (Aug 2025 – Oct 2025)
              </span>
              , where I worked on building and deploying responsive web
              applications, integrating RESTful APIs, and enhancing performance
              and usability in production-level projects.
            </p>

            {/* CAREER FOCUS */}
            <p>
              With a strong foundation in computer science fundamentals, I focus
              on writing maintainable, efficient, and scalable code. I am
              actively seeking{" "}
              <span className="font-medium">
                full-time software engineering opportunities
              </span>{" "}
              where I can contribute to impactful products while continuing to
              grow as a developer.
            </p>

            {/* HIGHLIGHTS */}
            <div className="flex flex-wrap gap-3 pt-5">
              {[
                "Full Stack Development",
                "Software Engineering",
                "REST APIs",
                "Scalable Systems",
                "Problem Solving",
                "Clean Code Practices",
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
