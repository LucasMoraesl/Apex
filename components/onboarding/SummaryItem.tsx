import React from "react";

type SummaryItemProps = {
  icon: React.ElementType;
  label: string;
  value: string;
};

export default function SummaryItem({
  icon: Icon,
  label,
  value,
}: SummaryItemProps) {
  return (
    <div className="rounded-2xl bg-black/30 p-4">
      <div className="flex items-center gap-2">
        <Icon className="h-4 w-4 text-blue-400" />

        <p className="text-xs text-zinc-500">
          {label}
        </p>
      </div>

      <p className="mt-2 font-semibold">
        {value}
      </p>
    </div>
  );
}