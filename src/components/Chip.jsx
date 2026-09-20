const tones = {
  default: "border-slate-700 bg-slate-800 text-slate-300",
  accent: "border-sky-400/30 bg-sky-400/10 text-sky-200",
  muted: "border-slate-800 bg-slate-900/70 text-slate-400",
};

const Chip = ({ children, tone = "default", className = "" }) => {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
};

export default Chip;