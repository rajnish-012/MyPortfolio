const SectionHeader = ({ eyebrow, title, accent, description }) => {
  return (
    <div className="mb-12">
      {eyebrow && (
        <p className="mb-3 flex items-center gap-3 text-sm font-medium tracking-wide text-sky-300">
          <span aria-hidden="true" className="h-px w-8 bg-sky-400/70" />
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
        {title} {accent && <span className="text-sky-400">{accent}</span>}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl leading-relaxed text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;