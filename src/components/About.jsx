import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-28 px-6 bg-slate-900/40">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-5xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-slate-400 max-w-2xl">
            A brief introduction to who I am and what I focus on as a developer.
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-3xl text-slate-300 leading-relaxed space-y-5"
        >
          <p>
            I am a final-year B.Tech Computer Science student at{" "}
            <span className="text-sky-400 font-medium">
              IIIT Tiruchirappalli
            </span>
            , with a strong interest in frontend development and UI engineering.
          </p>

          <p>
            I enjoy building clean, responsive, and accessible user interfaces
            using modern web technologies like{" "}
            <span className="text-sky-400">
              React, JavaScript, and Tailwind CSS
            </span>
            . I focus on writing maintainable code and creating smooth user
            experiences.
          </p>

          <p>
            Currently, I am preparing for software engineering roles and
            actively working on real-world projects that strengthen my problem-
            solving skills and understanding of core computer science
            fundamentals.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
