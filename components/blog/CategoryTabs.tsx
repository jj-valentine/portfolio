"use client";

import { cn } from "@/lib/utils";

type CategoryTabsProps = {
  categories: string[];
  active: string;
  onChange: (cat: string) => void;
};

export function CategoryTabs({ categories, active, onChange }: CategoryTabsProps) {
  const all = ["All", ...categories];

  return (
    <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
      {all.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat === "All" ? "" : cat)}
          className={cn(
            "px-2.5 py-0.5 text-xs font-normal rounded-full whitespace-nowrap transition-colors",
            (cat === "All" && !active) || cat === active
              ? "bg-fg text-primary-text"
              : "bg-surface text-muted hover:text-fg-muted"
          )}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
