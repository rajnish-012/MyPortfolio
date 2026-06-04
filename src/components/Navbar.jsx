import { useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";
import Resume from "../assets/Kumar_Rajnish_Resume_06-05-2026.pdf";

const links = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  {name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const MenuIcon = ({ open }) => (
  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    {open ? (
      <path
        d="M6 6l12 12M18 6 6 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    ) : (
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    )}
  </svg>
);

const Navbar = () => {
  const [active, setActive] = useState("#hero");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const onScroll = () => {
      const scrollY = window.scrollY + 120;

      sections.forEach((section) => {
        if (
          scrollY >= section.offsetTop &&
          scrollY < section.offsetTop + section.offsetHeight
        ) {
          setActive(`#${section.id}`);
        }
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-800 bg-slate-950/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#hero" className="text-xl font-bold tracking-wide text-sky-400">
          Rajnish<span className="text-slate-200">.</span>
        </a>

        <div className="hidden items-center gap-7 text-sm font-medium md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative transition ${
                active === link.href
                  ? "text-sky-400"
                  : "text-slate-300 hover:text-sky-400"
              }`}
            >
              {link.name}
              {active === link.href && (
                <Motion.span
                  layoutId="underline"
                  className="absolute -bottom-1 left-0 h-0.5 w-full rounded bg-sky-400"
                />
              )}
            </a>
          ))}
          <a
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-sky-400 px-3 py-2 text-sky-300 transition hover:bg-sky-400/10"
          >
            Resume
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
          className="rounded-lg border border-slate-800 p-2 text-slate-300 transition hover:border-sky-400 hover:text-sky-400 md:hidden"
        >
          <MenuIcon open={open} />
        </button>
      </div>

      {open && (
        <Motion.div
          id="mobile-menu"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="border-t border-slate-800 bg-slate-950/95 md:hidden"
        >
          <div className="flex flex-col px-6 py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-2 py-3 text-sm ${
                  active === link.href
                    ? "text-sky-400"
                    : "text-slate-300 hover:text-sky-400"
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href={Resume}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg bg-sky-400 px-3 py-3 text-center text-sm font-semibold text-slate-950"
            >
              Resume
            </a>
          </div>
        </Motion.div>
      )}
    </nav>
  );
};

export default Navbar;
