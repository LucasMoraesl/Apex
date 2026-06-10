type InputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: string;
  suffix?: string;
  warning?: string;
  onBlur?: () => void;
};

export default function Input({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  suffix,
  warning,
  onBlur,
}: InputProps) {
  return (
    <div>
      <label className="mb-2 block text-sm text-zinc-400">
        {label}
      </label>

      <div className="relative">
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          placeholder={placeholder}
          className={`w-full rounded-xl border bg-black/50 p-4 outline-none transition ${
            warning
              ? "border-red-500/50 focus:border-red-500"
              : "border-white/10 focus:border-blue-500"
          } ${suffix ? "pr-20" : ""}`}
        />

        {suffix && (
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-zinc-500">
            {suffix}
          </span>
        )}
      </div>

      {warning && (
        <p className="mt-2 text-xs text-red-400">
          {warning}
        </p>
      )}
    </div>
  );
}