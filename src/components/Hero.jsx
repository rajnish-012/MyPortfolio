import { motion as Motion, useReducedMotion } from "framer-motion";
import profileImage from "../assets/profile.jpg";
import Resume from "../assets/Kumar_Rajnish_Resume_06-05-2026.pdf";
import {
  heroStats,
  highlights,
  profile as profileData,
} from "../data/profile";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const textVariant = (reduce) => ({
  hidden: reduce ? { opacity: 1 } : { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
});

const imageVariant = (reduce) => ({
  hidden: reduce ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.94 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
});

const Hero = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="hero"
      aria-label="Hero section"
      className="relative overflow-hidden bg-slate-950 px-6 pb-10 pt-24 md:pb-12"
    >
      {!reduceMotion && (
        <>
          <Motion.div
            aria-hidden="true"
            className="absolute left-[-12rem] top-24 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl"
            animate={{ x: [0, 28, 0], y: [0, -18, 0], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <Motion.div
            aria-hidden="true"
            className="absolute bottom-10 right-[-10rem] h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl"
            animate={{ x: [0, -24, 0], y: [0, 20, 0], opacity: [0.4, 0.75, 0.4] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}

      <Motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative mx-auto grid min-h-[calc(100svh-8.5rem)] max-w-6xl grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-10"
      >
        <Motion.div variants={textVariant(reduceMotion)}>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-sky-300 md:text-sm">
            Software Development Engineer / Frontend-leaning
          </p>

          <h1 className="mb-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Building reliable software with strong frontend engineering depth.
          </h1>

          <p className="max-w-xl text-sm leading-relaxed text-slate-300/90 md:text-base lg:text-lg">
            I am <span className="text-white">Rajnish Kumar</span>, a final-year{" "}
            <span className="text-white">B.Tech Computer Science</span> student
            at{" "}
            <span className="font-medium text-sky-300">
              {profileData.shortSchool}
            </span>
            . I combine data structures, algorithms, OOP, React, Firebase, REST
            APIs, and product thinking to build maintainable applications.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {highlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-xs font-medium text-slate-300"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-5 grid max-w-xl grid-cols-3 overflow-hidden rounded-lg border border-slate-800 bg-slate-900/55">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="border-r border-slate-800 px-3 py-2.5 last:border-r-0"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                  {stat.label}
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-100">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#projects"
              aria-label="View Projects"
              className="group inline-flex items-center gap-3 rounded-lg bg-sky-400 px-5 py-2.5 font-semibold text-slate-950 shadow-lg transition-all hover:-translate-y-0.5 hover:bg-sky-300 hover:shadow-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-400/40"
            >
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-sky-600 group-hover:bg-white">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
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

            <a
              href={Resume}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Resume"
              className="inline-flex items-center gap-3 rounded-lg border border-sky-400 px-5 py-2.5 text-sky-300 transition hover:bg-sky-400/10 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-400/30"
            >
              Resume
            </a>

            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="inline-flex items-center gap-3 rounded-lg border border-slate-700 px-5 py-2.5 text-slate-200 transition hover:border-slate-500 hover:text-white focus:outline-none focus-visible:ring-4 focus-visible:ring-slate-500/30"
            >
              GitHub
            </a>
          </div>
        </Motion.div>

        <Motion.div
          variants={imageVariant(reduceMotion)}
          className="flex justify-center md:justify-end"
        >
          <div className="group relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-400/30 to-indigo-500/10 opacity-70 blur-2xl" />

            <Motion.div
              animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative rounded-full bg-gradient-to-br from-sky-400/40 to-indigo-400/20 p-1 shadow-2xl transition-transform group-hover:-translate-y-1"
            >
              <div className="rounded-full border border-slate-800 bg-slate-900/40 p-1 backdrop-blur-sm">
                <img
                  src={profileImage}
                  alt="Portrait of Rajnish Kumar"
                  loading="eager"
                  className="h-52 w-52 rounded-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:rotate-1 sm:h-56 sm:w-56 md:h-64 md:w-64 lg:h-72 lg:w-72"
                />
              </div>
            </Motion.div>

            <div className="absolute -bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 rounded-full bg-slate-800/60 px-3 py-1 text-xs text-slate-200/80 backdrop-blur-sm sm:flex">
              <span className="h-2 w-2 rounded-full bg-sky-400" />
              {profileData.shortSchool} / Final-year
            </div>
          </div>
        </Motion.div>
      </Motion.div>
    </section>
  );
};

export default Hero;
