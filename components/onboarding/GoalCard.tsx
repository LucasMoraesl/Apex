import React from "react";

type GoalCardProps = {
  title: string;
  description: string;
  Icon: React.ElementType;
  selected: boolean;
  onClick: () => void;
  className?: string;
};

export default function GoalCard({
  title,
  description,
  Icon,
  selected,
  onClick,
  className = "",
}: GoalCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative overflow-hidden rounded-3xl border p-5 text-left transition-all duration-300 ${
        selected
          ? "border-blue-500 bg-blue-500/10 shadow-[0_0_50px_rgba(37,99,235,0.25)]"
          : "border-white/10 bg-black/40 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-zinc-900"
      } ${className}`}
    >
      <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-blue-600/10 blur-3xl transition group-hover:bg-blue-500/20" />

      <div className="relative z-10">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10">
          <Icon className="h-6 w-6 text-blue-400" />
        </div>

        <h3 className="text-xl font-bold">{title}</h3>

        <p className="mt-3 text-sm leading-6 text-zinc-400">
          {description}
        </p>

        {selected && (
          <div className="mt-5 text-sm font-medium text-blue-400">
            ✓ Selecionado
          </div>
        )}
      </div>
    </button>
  );
}