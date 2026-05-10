const SectionHeader = ({ eyebrow, title, accent, description }) => {
  return (
    <div className="mb-12">
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-sky-300">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold text-white md:text-4xl">
        {title} {accent && <span className="text-sky-400">{accent}</span>}
      </h2>
      {description && (
        <p className="mt-4 max-w-3xl text-slate-400 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;

