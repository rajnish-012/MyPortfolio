import { useRef, useState } from "react";
import { motion as Motion } from "framer-motion";
import Resume from "../assets/Rajnish_Kumar_Resume.pdf";
import SectionHeader from "./SectionHeader";
import AnimatedSection from "./AnimatedSection";
import { profile } from "../data/profile";

const contactLinks = [
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "Resume", href: Resume },
];

const iconProps = {
  "aria-hidden": "true",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: "h-5 w-5",
};

const MailIcon = () => (
  <svg {...iconProps}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

const PinIcon = () => (
  <svg {...iconProps}>
    <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

const PhoneIcon = () => (
  <svg {...iconProps}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </svg>
);

const InfoRow = ({ icon, label, children }) => (
  <div className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-900/60 p-4">
    <div
      aria-hidden="true"
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-700 bg-slate-800 text-sky-300"
    >
      {icon}
    </div>
    <div className="min-w-0">
      <p className="text-xs font-medium text-slate-400">{label}</p>
      <div className="mt-0.5 wrap-break-word">{children}</div>
    </div>
  </div>
);

const fieldClass =
  "rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-slate-200 outline-none transition placeholder:text-slate-500 focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20";

const labelClass = "text-sm font-medium text-slate-300";

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
            : "Something went wrong. Please try again.",
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
        <AnimatedSection>
          <SectionHeader
            eyebrow="Contact"
            title="Let Us"
            accent="Connect"
            description="Open to Full Stack Developer roles and internships, and to teams that want someone who can take a feature from the interface to the database."
          />

          <div className="grid gap-4">
            <InfoRow icon={<MailIcon />} label="Email">
              <a
                href={`mailto:${profile.email}`}
                className="text-sky-400 hover:underline"
              >
                {profile.email}
              </a>
            </InfoRow>

            <InfoRow icon={<PinIcon />} label="Location">
              <p className="text-slate-300">{profile.location}</p>
            </InfoRow>

            <InfoRow icon={<PhoneIcon />} label="Phone">
              <a
                href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}
                className="text-slate-300 hover:text-sky-300"
              >
                {profile.phone}
              </a>
            </InfoRow>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {contactLinks.map((link) => (
              <Motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileTap={{ scale: 0.96 }}
                className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-sky-400 hover:text-sky-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-400/30"
              >
                {link.label}
              </Motion.a>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection
          delay={0.08}
          className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 md:p-8"
        >
          <h3 className="text-lg font-semibold text-white">Send a message</h3>
          <p className="mt-1 text-sm text-slate-400">
            Tell me about the role or project. I reply by email.
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-6 flex flex-col gap-4"
          >
            <input
              type="text"
              name="_gotcha"
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <label className={labelClass} htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              autoComplete="name"
              placeholder="Your name"
              required
              className={fieldClass}
            />

            <label className={labelClass} htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              autoComplete="email"
              placeholder="you@example.com"
              required
              className={fieldClass}
            />

            <label className={labelClass} htmlFor="phone">
              Phone <span className="text-slate-500">(optional)</span>
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              autoComplete="tel-national"
              placeholder="10 digit phone number"
              maxLength={10}
              inputMode="numeric"
              className={fieldClass}
            />

            <label className={labelClass} htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Tell me about the role, project, or opportunity."
              required
              className={`resize-none ${fieldClass}`}
            />

            <button
              type="submit"
              disabled={loading}
              className={`mt-2 rounded-lg bg-sky-400 py-2.5 font-semibold text-slate-950 transition focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-400/40 ${
                loading ? "cursor-not-allowed opacity-60" : "hover:bg-sky-300"
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            <div aria-live="polite">
              {status === "success" && (
                <p className="text-sm text-green-400" role="status">
                  Message sent. I will get back to you soon.
                </p>
              )}

              {status && status !== "success" && (
                <p className="text-sm text-red-400" role="alert">
                  {status}
                </p>
              )}
            </div>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Contact;
