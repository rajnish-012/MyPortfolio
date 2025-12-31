import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Resume from "../assets/Resume.pdf";

const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    const form = formRef.current;
    const phone = form.phone.value.trim();
    const email = form.email.value.trim();

    // Validation
    if (!/^\d{10}$/.test(phone)) {
      setStatus("Phone number must be exactly 10 digits.");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setStatus("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    setStatus("");

    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/meeqwybp", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("success");
        form.reset();

        // Auto-hide success message
        setTimeout(() => setStatus(""), 4000);
      } else {
        setStatus(
          result?.errors
            ? result.errors.map((e) => e.message).join(", ")
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
    <section id="contact" className="py-24 px-6 bg-slate-900/40">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-start">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold">
            Contact <span className="text-sky-400">Me</span>
          </h2>

          <p className="text-slate-400 max-w-md">
            Open to internships, full-time roles, and exciting frontend projects.
            Let’s build something impactful together.
          </p>

          {/* Info Cards */}
          <div className="grid gap-4">
            <div className="flex items-center gap-4 bg-slate-900/60 border border-slate-800 rounded-lg p-4 hover:border-sky-400/60 transition">
              <span className="text-lg">📧</span>
              <div>
                <p className="text-xs text-slate-400">Email</p>
                <a
                  href="mailto:companyk47@gmail.com"
                  className="text-sky-400 hover:underline"
                >
                  companyk47@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-slate-900/60 border border-slate-800 rounded-lg p-4 hover:border-sky-400/60 transition">
              <span className="text-lg">📍</span>
              <div>
                <p className="text-xs text-slate-400">Location</p>
                <p className="text-slate-300">India</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 pt-2">
            <a
              href="https://github.com/rajnish-012"
              target="_blank"
              className="px-4 py-2 rounded-lg border border-slate-700 text-slate-300 hover:text-sky-400 hover:border-sky-400 transition"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/rajnish-kumar-1a2b93348"
              target="_blank"
              className="px-4 py-2 rounded-lg border border-slate-700 text-slate-300 hover:text-sky-400 hover:border-sky-400 transition"
            >
              LinkedIn
            </a>

            <a
              href={Resume}
              target="_blank"
              className="px-4 py-2 rounded-lg bg-sky-400 text-slate-900 font-medium hover:bg-sky-300 transition"
            >
              Resume
            </a>
          </div>
        </motion.div>

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900/60 border border-slate-800 rounded-xl p-7"
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            {/* Honeypot */}
            <input type="text" name="_gotcha" className="hidden" />

            <input
              aria-label="Your full name"
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-slate-200 focus:border-sky-400 focus:outline-none"
            />

            <input
              aria-label="Your email address"
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-slate-200 focus:border-sky-400 focus:outline-none"
            />

            <input
              aria-label="Your phone number"
              type="tel"
              name="phone"
              placeholder="Your Phone (10 digits)"
              required
              maxLength="10"
              className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-slate-200 focus:border-sky-400 focus:outline-none"
            />

            <textarea
              aria-label="Your message"
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-slate-200 focus:border-sky-400 focus:outline-none resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className={`bg-sky-400 text-slate-900 py-2.5 rounded-lg font-semibold transition ${
                loading ? "opacity-60 cursor-not-allowed" : "hover:bg-sky-300"
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-green-400 text-sm">
                ✅ Message sent successfully!
              </p>
            )}

            {status && status !== "success" && (
              <p className="text-red-400 text-sm">❌ {status}</p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
