type MiniMetricProps = {
  label: string;
  value: string;
  suffix: string;
};

export default function MiniMetric({
  label,
  value,
  suffix,
}: MiniMetricProps) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-zinc-950/70 px-4 py-3">
      <span className="text-sm text-zinc-500">
        {label}
      </span>

      <span className="font-semibold text-white">
        {value} {value !== "--" ? suffix : ""}
      </span>
    </div>
  );
}