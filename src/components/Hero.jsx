import { motion, useReducedMotion } from "framer-motion";
import profile from "../assets/profile.jpg";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const textVariant = (reduce) => ({
  hidden: reduce ? { opacity: 1 } : { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
});

const imageVariant = (reduce) => ({
  hidden: reduce ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.94 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: "circOut" },
  },
});

const Hero = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="hero"
      aria-label="Hero section"
      className="relative min-h-screen flex items-center pt-28 px-6 bg-gradient-to-b from-slate-900/40 to-slate-900 overflow-hidden"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center"
      >
        {/* LEFT — TEXT */}
        <motion.div variants={textVariant(reduceMotion)}>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-sky-400 to-indigo-400">
              Hi, I’m
            </span>
            <span className="text-white/95">Rajnish Kumar</span>
          </h1>

          <p className="max-w-xl text-lg md:text-xl text-slate-300/90 leading-relaxed">
            Final-year <span className="text-white">B.Tech Computer Science</span>{" "}
            student at{" "}
            <span className="text-sky-300 font-medium">
              IIIT Tiruchirappalli
            </span>
            . I build scalable, accessible, and user-focused web applications
            with modern tech stacks.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            {/* Projects */}
            <a
              href="#projects"
              aria-label="View Projects"
              className="group inline-flex items-center gap-3 bg-sky-400 text-slate-900 px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-400/40"
            >
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/90 text-sky-600 group-hover:bg-white">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12h14"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M12 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              View Projects
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/rajnish-012"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="inline-flex items-center gap-3 border border-sky-400 px-6 py-3 rounded-xl text-sky-300 hover:bg-sky-400/10 transition focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-400/30"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .5C5.73.5.9 5.34.9 11.6c0 4.79 3.1 8.86 7.4 10.3.54.1.74-.24.74-.52 0-.26-.01-.95-.01-1.87-3.01.65-3.64-1.45-3.64-1.45-.5-1.27-1.22-1.61-1.22-1.61-.99-.68.07-.67.07-.67 1.1.08 1.68 1.13 1.68 1.13.97 1.67 2.55 1.19 3.17.91.1-.71.38-1.19.69-1.46-2.4-.27-4.94-1.2-4.94-5.33 0-1.18.42-2.15 1.12-2.91-.11-.28-.49-1.42.11-2.96 0 0 .92-.29 3.02 1.1a10.3 10.3 0 0 1 5.5 0c2.1-1.39 3.02-1.1 3.02-1.1.6 1.54.22 2.68.11 2.96.7.76 1.12 1.73 1.12 2.91 0 4.14-2.55 5.05-4.98 5.32.39.34.74 1.03.74 2.08 0 1.5-.01 2.71-.01 3.08 0 .29.2.62.75.51C19 20.45 22.1 16.4 22.1 11.6 22.1 5.34 17.27.5 12 .5z" />
              </svg>
              GitHub
            </a>

            {/* Contact */}
            <a
              href="#contact"
              aria-label="Contact Me"
              className="inline-flex items-center gap-3 border border-slate-700 px-6 py-3 rounded-xl text-slate-200 hover:border-slate-500 hover:text-white transition focus:outline-none focus-visible:ring-4 focus-visible:ring-slate-500/30"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M3 8.5v7A2.5 2.5 0 0 0 5.5 18h13A2.5 2.5 0 0 0 21 15.5v-7" />
                <path d="M21 8.5L12 13 3 8.5" />
              </svg>
              Contact
            </a>
          </div>
        </motion.div>

        {/* RIGHT — IMAGE */}
        <motion.div
          variants={imageVariant(reduceMotion)}
          className="flex justify-center md:justify-end"
        >
          <div className="relative group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-400/30 to-indigo-500/10 blur-2xl opacity-70" />

            <div className="relative rounded-full p-1 bg-gradient-to-br from-sky-400/40 to-indigo-400/20 shadow-2xl transition-transform group-hover:-translate-y-1">
              <div className="rounded-full bg-slate-900/40 p-1 backdrop-blur-sm border border-slate-800">
                <img
                  src={profile}
                  alt="Portrait of Rajnish Kumar"
                  loading="eager"
                  className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:rotate-1"
                />
              </div>
            </div>

            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex items-center gap-2 bg-slate-800/60 px-3 py-1 rounded-full text-xs text-slate-200/80 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              IIIT Tiruchirappalli • Final-year
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
