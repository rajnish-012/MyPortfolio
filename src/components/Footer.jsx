import { profile } from "../data/profile";

const linkClass =
  "rounded text-slate-400 transition hover:text-sky-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60";

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-center md:text-left">
          <p className="font-semibold text-white">Rajnish Kumar</p>
          <p className="mt-1 text-sm text-slate-400">
            Full stack developer. Built with React, Tailwind CSS, and Framer
            Motion.
          </p>
        </div>

        <nav
          aria-label="Footer"
          className="flex flex-wrap items-center justify-center gap-6 text-sm"
        >
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className={linkClass}>
            Email
          </a>
          <a href="#hero" className={`${linkClass} text-sky-300`}>
            Back to top
          </a>
        </nav>
      </div>

      <p className="mx-auto mt-8 max-w-6xl border-t border-slate-800/70 pt-6 text-center text-xs text-slate-500 md:text-left">
        © {new Date().getFullYear()} Rajnish Kumar. Open to Full Stack Developer
        opportunities.
      </p>
    </footer>
  );
};

export default Footer;