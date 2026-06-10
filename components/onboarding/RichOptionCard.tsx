import React from "react";

type RichOptionCardProps = {
  title: string;
  description: string;
  Icon: React.ElementType;
  selected: boolean;
  onClick: () => void;
};

export default function RichOptionCard({
  title,
  description,
  Icon,
  selected,
  onClick,
}: RichOptionCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative overflow-hidden rounded-2xl border p-4 text-left transition-all duration-300 ${
        selected
          ? "border-blue-500 bg-blue-500/10 shadow-[0_0_35px_rgba(37,99,235,0.2)]"
          : "border-white/10 bg-black/40 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-zinc-900"
      }`}
    >
      <div className="absolute right-0 top-0 h-20 w-20 translate-x-6 -translate-y-6 rounded-full bg-blue-600/10 blur-3xl transition group-hover:bg-blue-500/20" />

      <div className="relative z-10">
        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10">
          <Icon className="h-5 w-5 text-blue-400" />
        </div>

        <h3 className="font-bold text-white">
          {title}
        </h3>

        <p className="mt-2 text-sm leading-6 text-zinc-400">
          {description}
        </p>

        {selected && (
          <p className="mt-3 text-sm font-medium text-blue-400">
            Selecionado
          </p>
        )}
      </div>
    </button>
  );
}