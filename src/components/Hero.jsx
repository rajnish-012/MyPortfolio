import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-28 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        {/* LEFT: TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Hi, I’m <span className="text-sky-400">Rajnish Kumar</span>
          </h1>

          <p className="max-w-xl text-lg md:text-xl text-slate-400 leading-relaxed">
            Final-year B.Tech Computer Science student at{" "}
            <span className="text-sky-400">IIIT Tiruchirappalli</span>. Software
            Engineer & Full Stack Developer passionate about building modern web
            applications.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="bg-sky-400 text-slate-900 px-7 py-3 rounded-lg font-semibold
                         hover:bg-sky-300 transition"
            >
              View Projects
            </a>

            <a
              href="https://github.com/rajnish-012"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-sky-400 px-7 py-3 rounded-lg text-sky-400
                         hover:bg-sky-400/10 transition"
            >
              GitHub
            </a>

            <a
              href="#contact"
              className="border border-slate-600 px-7 py-3 rounded-lg text-slate-300
                         hover:border-slate-400 hover:text-white transition"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* RIGHT: IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-sky-400/20 blur-2xl"></div>
            <img
              src={profile}
              alt="Rajnish Kumar"
              className="relative w-64 h-full md:w-80 md:h-80 rounded-full
                         object-top shadow-xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
