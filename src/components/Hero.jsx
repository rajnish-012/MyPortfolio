import {
  motion as Motion,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import profileImage from "../assets/Profile.png";
import Resume from "../assets/Resume_June-Rajnish_kumar.pdf";
import { heroStats, highlights, profile as profileData } from "../data/profile";

/* ─── Variants ─────────────────────────────────────── */

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const fadeUp = (reduce, delay = 0) => ({
  hidden: reduce ? { opacity: 1 } : { opacity: 0, y: 48, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay },
  },
});

const imageVariant = (reduce) => ({
  hidden: reduce
    ? { opacity: 1, scale: 1 }
    : { opacity: 0, scale: 0.92, y: 30 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
});

const chipVariant = {
  hidden: { opacity: 0, scale: 0.8, y: 12 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 22 },
  },
};

const statVariant = {
  hidden: { opacity: 0, y: 20 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const buttonVariant = {
  hidden: { opacity: 0, x: -16 },
  show: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: 0.6 + i * 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

/* ─── Animated Word Headline ────────────────────────── */

const words = [
  { text: "Building", highlight: false },
  { text: "reliable", highlight: true },
  { text: "software", highlight: false },
  { text: "with", highlight: false },
  { text: "strong", highlight: false },
  { text: "frontend", highlight: true },
  { text: "engineering", highlight: false },
  { text: "depth.", highlight: false },
];

const WordReveal = ({ reduce }) => (
  <Motion.h1
    /* FIX 1: reduced lg size from text-6xl → text-5xl so buttons stay visible */
    className="mb-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-4xl lg:text-5xl"
    variants={containerVariants}
    initial="hidden"
    animate="show"
  >
    {words.map(({ text, highlight }, i) => (
      <Motion.span
        key={text}
        className="mr-[0.2em] inline-block"
        variants={
          reduce
            ? {}
            : {
                hidden: { opacity: 0, y: 40, skewX: -6 },
                show: {
                  opacity: 1,
                  y: 0,
                  skewX: 0,
                  transition: {
                    duration: 0.6,
                    delay: 0.3 + i * 0.09,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }
        }
        style={{ display: "inline-block" }}
      >
        {highlight ? (
          <Motion.span
            className="relative inline-block text-sky-300"
            animate={
              reduce
                ? {}
                : {
                    textShadow: [
                      "0 0 0px rgba(125,211,252,0)",
                      "0 0 22px rgba(125,211,252,0.7)",
                      "0 0 0px rgba(125,211,252,0)",
                    ],
                  }
            }
            transition={{ duration: 3, repeat: Infinity, delay: 1.5 + i * 0.2 }}
          >
            {text}
            <Motion.span
              className="absolute -bottom-1 left-0 h-[3px] rounded-full bg-sky-400"
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.8 + i * 0.09,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{ display: "block" }}
            />
          </Motion.span>
        ) : (
          text
        )}
      </Motion.span>
    ))}
  </Motion.h1>
);

/* ─── Magnetic Button ───────────────────────────────── */

const MagneticBtn = ({
  children,
  className,
  href,
  target,
  rel,
  ariaLabel,
  custom,
}) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouse = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.35);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.35);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <Motion.a
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      className={className}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      variants={buttonVariant}
      custom={custom}
      whileTap={{ scale: 0.96 }}
    >
      {children}
    </Motion.a>
  );
};

/* ─── Animated Counter ──────────────────────────────── */

const Counter = ({ value }) => {
  const num = parseInt(value);
  const suffix = value.replace(/[0-9]/g, "");
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    if (isNaN(num)) return;
    let start = 0;
    const duration = 1200;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const prog = Math.min((timestamp - start) / duration, 1);
      setDisplay(Math.floor(prog * num));
      if (prog < 1) requestAnimationFrame(step);
    };
    const timer = setTimeout(() => requestAnimationFrame(step), 600);
    return () => clearTimeout(timer);
  }, [num]);

  if (isNaN(num)) return <span>{value}</span>;
  return (
    <span>
      {display}
      {suffix}
    </span>
  );
};

/* ─── Particle Field ────────────────────────────────── */

const Particle = ({ reduce }) => {
  if (reduce) return null;
  const particles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    duration: Math.random() * 8 + 6,
    delay: Math.random() * 4,
  }));

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {particles.map((p) => (
        <Motion.div
          key={p.id}
          className="absolute rounded-full bg-sky-400/30"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 0.7, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

/* ─── Glitch Badge ──────────────────────────────────── */

const GlitchBadge = ({ children, reduce }) => (
  <Motion.p
    className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-sky-300 md:text-sm"
    initial={reduce ? {} : { opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
  >
    <Motion.span
      animate={reduce ? {} : { opacity: [1, 0.6, 1] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </Motion.span>
  </Motion.p>
);

/* ─── Profile Image ─────────────────────────────────── */

const ProfileImage = ({ reduce }) => {
  return (
    <Motion.div
      variants={imageVariant(reduce)}
      className="relative flex items-end justify-center md:justify-end"
    >
      {/* ── Dramatic spotlight glow behind the figure ── */}
      <Motion.div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[85%] w-[90%] rounded-full"
        animate={
          reduce
            ? {}
            : {
                background: [
                  "radial-gradient(ellipse at 50% 100%, rgba(56,189,248,0.20) 0%, rgba(56,189,248,0.05) 45%, transparent 70%)",
                  "radial-gradient(ellipse at 50% 100%, rgba(99,102,241,0.20) 0%, rgba(99,102,241,0.05) 45%, transparent 70%)",
                  "radial-gradient(ellipse at 50% 100%, rgba(56,189,248,0.20) 0%, rgba(56,189,248,0.05) 45%, transparent 70%)",
                ],
              }
        }
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        style={{ filter: "blur(28px)" }}
      />

      {/* ── Pulsing floor shadow ── */}
      {!reduce && (
        <Motion.div
          aria-hidden="true"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 h-6 w-40 rounded-full bg-sky-500/20"
          animate={{ scaleX: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          style={{ filter: "blur(10px)" }}
        />
      )}

      {/* ── Floating figure wrapper ── */}
      <Motion.div
        className="relative z-10"
        animate={reduce ? {} : { y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* FIX 2: No card/border — pure PNG cutout with drop-shadow tracing silhouette */}
        <Motion.img
          src={profileImage}
          alt="Portrait of Rajnish Kumar"
          loading="eager"
          className="h-[420px] w-auto object-contain object-om sm:h-[480px] md:h-[620px] lg:h-[520px]"
          animate={
            reduce
              ? {}
              : {
                  filter: [
                    "drop-shadow(0 24px 48px rgba(0,0,0,0.95)) drop-shadow(0 0 32px rgba(56,189,248,0.12))",
                    "drop-shadow(0 24px 48px rgba(0,0,0,0.95)) drop-shadow(0 0 52px rgba(56,189,248,0.26))",
                    "drop-shadow(0 24px 48px rgba(0,0,0,0.95)) drop-shadow(0 0 32px rgba(56,189,248,0.12))",
                  ],
                }
          }
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* ── Open to work badge ── */}
        <Motion.div
          className="absolute -top-1 right-4 z-20"
          initial={reduce ? {} : { opacity: 0, y: -10, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-slate-900/85 px-3 py-1.5 shadow-lg shadow-sky-400/10 backdrop-blur-md">
            <Motion.span
              className="h-2 w-2 flex-shrink-0 rounded-full bg-sky-400"
              animate={
                reduce ? {} : { scale: [1, 1.7, 1], opacity: [1, 0.35, 1] }
              }
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-xs font-semibold tracking-wide text-sky-300">
              Open to work
            </span>
          </div>
        </Motion.div>

        {/* ── Name + college + MERN strip at bottom ── */}
        <Motion.div
          className="absolute -bottom-4 left-1/2 z-20 w-[calc(100%-8px)] -translate-x-1/2"
          initial={reduce ? {} : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <div className="rounded-xl border border-white/[0.07] bg-slate-900/85 px-4 py-3 shadow-xl shadow-slate-950/60 backdrop-blur-md">
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="truncate text-sm font-bold text-white">
                  Rajnish Kumar
                </p>
                <p className="mt-0.5 truncate text-[11px] text-slate-400">
                  {profileData.shortSchool} · B.Tech CSE Graduate (2026)
                </p>
              </div>
              {/* FIX 3: MERN as a clean horizontal row, not a 2×2 grid */}
              <div className="flex flex-shrink-0 items-center gap-1">
                {["M", "E", "R", "N"].map((l) => (
                  <span
                    key={l}
                    className="flex h-6 w-6 items-center justify-center rounded-md bg-slate-800 text-[10px] font-bold text-sky-400 ring-1 ring-slate-700/50"
                  >
                    {l}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Motion.div>
      </Motion.div>
    </Motion.div>
  );
};

/* ─── Hero ──────────────────────────────────────────── */

const Hero = () => {
  const reduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="hero"
      aria-label="Hero section"
      className="relative overflow-hidden bg-slate-950 px-6 pb-10 pt-24 md:pb-12"
    >
      {/* ── Background blobs ── */}
      {!reduceMotion && (
        <>
          <Motion.div
            aria-hidden="true"
            className="absolute left-[-12rem] top-24 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl"
            animate={{
              x: [0, 32, 0],
              y: [0, -20, 0],
              opacity: [0.4, 0.9, 0.4],
              scale: [1, 1.15, 1],
            }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          />
          <Motion.div
            aria-hidden="true"
            className="absolute bottom-10 right-[-10rem] h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl"
            animate={{
              x: [0, -28, 0],
              y: [0, 22, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
          <Motion.div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-3xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}

      {/* ── Particle field ── */}
      <Particle reduce={reduceMotion} />

      {/* ── Noise grain overlay ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "180px",
        }}
      />

      <Motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative mx-auto grid min-h-[calc(100svh-8.5rem)] max-w-6xl grid-cols-1 items-center gap-8 md:grid-cols-[1fr_400px] md:gap-10 lg:grid-cols-[1fr_440px]"
      >
        {/* ── Left column ── */}
        <div>
          {/* Badge */}
          <GlitchBadge reduce={reduceMotion}>
            Software Development Engineer / React & MERN Stack
          </GlitchBadge>

          {/* Animated headline */}
          <WordReveal reduce={reduceMotion} />

          {/* Body text */}
          <Motion.p
            className="max-w-xl text-sm leading-relaxed text-slate-300/90 md:text-base lg:text-lg"
            variants={fadeUp(reduceMotion, 0.1)}
          >
            I am <span className="text-white">Rajnish Kumar</span>, a recent{" "}
            <span className="text-white">
              B.Tech Computer Science graduate (2026)
            </span>{" "}
            from{" "}
            <Motion.span
              className="font-medium text-sky-300"
              whileHover={reduceMotion ? {} : { letterSpacing: "0.02em" }}
              transition={{ duration: 0.3 }}
            >
              {profileData.shortSchool}
            </Motion.span>
            . I combine data structures, algorithms, OOP, React, Firebase, REST
            APIs, and product thinking to build maintainable applications.
          </Motion.p>

          {/* Highlight chips */}
          <Motion.div
            className="mt-4 flex flex-wrap gap-2"
            variants={containerVariants}
          >
            {highlights.map((item, i) => (
              <Motion.span
                key={item}
                variants={chipVariant}
                custom={i}
                whileHover={
                  reduceMotion
                    ? {}
                    : {
                        scale: 1.07,
                        borderColor: "rgba(125,211,252,0.6)",
                        color: "#bae6fd",
                        y: -2,
                      }
                }
                className="cursor-default rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-xs font-medium text-slate-300 transition-colors"
              >
                {item}
              </Motion.span>
            ))}
          </Motion.div>

          {/* Stats */}
          <Motion.div
            className="mt-4 grid max-w-xl grid-cols-3 overflow-hidden rounded-lg border border-slate-800 bg-slate-900/55"
            variants={fadeUp(reduceMotion, 0.2)}
          >
            {heroStats.map((stat, i) => (
              <Motion.div
                key={stat.label}
                className="border-r border-slate-800 px-3 py-2.5 last:border-r-0"
                variants={statVariant}
                custom={i}
                whileHover={
                  reduceMotion
                    ? {}
                    : { backgroundColor: "rgba(125,211,252,0.05)" }
                }
                transition={{ duration: 0.2 }}
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                  {stat.label}
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-100">
                  <Counter value={stat.value} />
                </p>
              </Motion.div>
            ))}
          </Motion.div>

          {/* CTA Buttons */}
          <div className="mt-5 flex flex-wrap gap-3">
            <MagneticBtn
              href="#projects"
              ariaLabel="View Projects"
              custom={0}
              className="group inline-flex items-center gap-3 rounded-lg bg-sky-400 px-5 py-2.5 font-semibold text-slate-950 shadow-lg transition-all hover:-translate-y-0.5 hover:bg-sky-300 hover:shadow-sky-400/30 hover:shadow-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-400/40"
            >
              <Motion.span
                className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-sky-600 group-hover:bg-white"
                whileHover={reduceMotion ? {} : { rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.4 }}
              >
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
              </Motion.span>
              View Projects
            </MagneticBtn>

            <MagneticBtn
              href={Resume}
              target="_blank"
              rel="noopener noreferrer"
              ariaLabel="Open Resume"
              custom={1}
              className="inline-flex items-center gap-3 rounded-lg border border-sky-400 px-5 py-2.5 text-sky-300 transition hover:bg-sky-400/10 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-400/30"
            >
              Resume
            </MagneticBtn>

            <MagneticBtn
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              ariaLabel="GitHub Profile"
              custom={2}
              className="inline-flex items-center gap-3 rounded-lg border border-slate-700 px-5 py-2.5 text-slate-200 transition hover:border-slate-500 hover:text-white focus:outline-none focus-visible:ring-4 focus-visible:ring-slate-500/30"
            >
              GitHub
            </MagneticBtn>
          </div>
        </div>

        {/* ── Right column: popped-up profile photo ── */}
        <ProfileImage reduce={reduceMotion} />
      </Motion.div>
    </section>
  );
};

export default Hero;
