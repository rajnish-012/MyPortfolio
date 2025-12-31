import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const links = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("#hero");
  const [open, setOpen] = useState(false);

  // Detect active section on scroll
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

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <a
          href="#hero"
          className="text-xl font-bold tracking-wide text-sky-400"
        >
          Rajnish<span className="text-slate-200">.</span>
        </a>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
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
                <motion.span
                  layoutId="underline"
                  className="absolute -bottom-1 left-0 h-[2px] w-full bg-sky-400 rounded"
                />
              )}
            </a>
          ))}
        </div>

        {/* MOBILE BUTTON */}
        <button
          aria-label="Toggle Menu"
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-300 hover:text-sky-400 transition"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="md:hidden bg-slate-950/95 border-t border-slate-800"
        >
          <div className="flex flex-col px-6 py-4 space-y-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-sm ${
                  active === link.href
                    ? "text-sky-400"
                    : "text-slate-300 hover:text-sky-400"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
