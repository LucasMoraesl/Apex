type OptionCardProps = {
  label: string;
  selected: boolean;
  onClick: () => void;
};

export default function OptionCard({
  label,
  selected,
  onClick,
}: OptionCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-2xl border p-5 text-left transition-all duration-300 ${
        selected
          ? "border-blue-500 bg-blue-500/10 shadow-[0_0_40px_rgba(37,99,235,0.2)]"
          : "border-white/10 bg-black/40 hover:border-blue-500/50 hover:bg-zinc-900"
      }`}
    >
      <span className="font-semibold">{label}</span>
    </button>
  );
}