const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          I’m actively looking for frontend / software engineering
          opportunities. If you like my work or want to discuss a role, feel
          free to reach out.
        </p>
        <a
          href="mailto:yourmail@gmail.com"
          className="bg-sky-400 text-slate-900 px-6 py-3 rounded-lg font-medium"
        >
          Email Me
        </a>
      </div>
    </section>
  );
};

export default Contact;
