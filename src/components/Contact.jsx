import { useRef, useState } from "react";
import { motion as Motion } from "framer-motion";
import Resume from "../assets/Resume_June-Rajnish_kumar.pdf";
import SectionHeader from "./SectionHeader";
import { profile } from "../data/profile";

const contactLinks = [
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "Resume", href: Resume },
];

const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (loading) return;

    const form = formRef.current;
    const phone = form.phone.value.trim();
    const email = form.email.value.trim();

    if (phone && !/^\d{10}$/.test(phone)) {
      setStatus("Phone number must be exactly 10 digits.");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setStatus("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("https://formspree.io/f/meeqwybp", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus(""), 4000);
      } else {
        setStatus(
          result?.errors
            ? result.errors.map((error) => error.message).join(", ")
            : "Something went wrong. Please try again."
        );
      }
    } catch {
      setStatus("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-slate-950 px-6 py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 md:grid-cols-2">
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SectionHeader
            eyebrow="Contact"
            title="Let Us"
            accent="Connect"
            description="Open to entry-level SDE roles, software engineering internships, frontend-heavy product work, and teams building reliable user-facing applications."
          />

          <div className="grid gap-4">
            <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                Email
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="mt-1 inline-block break-all text-sky-400 hover:underline"
              >
                {profile.email}
              </a>
            </div>

            <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                Location
              </p>
              <p className="mt-1 text-slate-300">{profile.location}</p>
            </div>

            <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                Phone
              </p>
              <a
                href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}
                className="mt-1 inline-block text-slate-300 hover:text-sky-300"
              >
                {profile.phone}
              </a>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {contactLinks.map((link) => (
              <Motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-sky-400 hover:text-sky-300"
              >
                {link.label}
              </Motion.a>
            ))}
          </div>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-lg border border-slate-800 bg-slate-900/60 p-6"
        >
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input type="text" name="_gotcha" className="hidden" tabIndex="-1" />

            <label className="text-sm font-medium text-slate-300" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-slate-200 outline-none transition focus:border-sky-400"
            />

            <label className="text-sm font-medium text-slate-300" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="you@example.com"
              required
              className="rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-slate-200 outline-none transition focus:border-sky-400"
            />

            <label className="text-sm font-medium text-slate-300" htmlFor="phone">
              Phone <span className="text-slate-500">(optional)</span>
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="10 digit phone number"
              maxLength="10"
              inputMode="numeric"
              className="rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-slate-200 outline-none transition focus:border-sky-400"
            />

            <label className="text-sm font-medium text-slate-300" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Tell me about the role, project, or opportunity."
              required
              className="resize-none rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-slate-200 outline-none transition focus:border-sky-400"
            />

            <button
              type="submit"
              disabled={loading}
              className={`mt-2 rounded-lg bg-sky-400 py-2.5 font-semibold text-slate-950 transition ${
                loading ? "cursor-not-allowed opacity-60" : "hover:bg-sky-300"
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-sm text-green-400" role="status">
                Message sent successfully.
              </p>
            )}

            {status && status !== "success" && (
              <p className="text-sm text-red-400" role="alert">
                {status}
              </p>
            )}
          </form>
        </Motion.div>
      </div>
    </section>
  );
};

export default Contact;
