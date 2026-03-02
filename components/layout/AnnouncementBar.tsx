"use client";

import { useState } from "react";
import { X } from "lucide-react";

const ANNOUNCEMENT_TEXT = "Available for senior engineering roles.";
const ANNOUNCEMENT_LINK = "/contact";

export function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="relative h-[42.5px] bg-announcement border-b border-border-subtle">
      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />
      <div className="relative h-full max-w-[1158px] mx-auto px-4 md:px-8 flex items-center justify-center">
        <a
          href={ANNOUNCEMENT_LINK}
          className="flex items-center gap-2 text-sm font-normal text-fg hover:opacity-80 transition-opacity"
        >
          <span>{ANNOUNCEMENT_TEXT}</span>
          <span className="text-accent">Read more →</span>
        </a>
        <button
          onClick={(e) => {
            e.preventDefault();
            setDismissed(true);
          }}
          className="absolute right-4 md:right-8 p-1 text-muted hover:text-fg transition-colors"
          aria-label="Dismiss announcement"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
}
