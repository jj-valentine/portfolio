import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  asLink?: boolean;
}

const sizes = {
  sm: { box: 28, fontSize: 9, radius: 6 },
  md: { box: 36, fontSize: 11.5, radius: 8 },
  lg: { box: 48, fontSize: 15, radius: 10 },
};

export function Logo({ size = "md", className, asLink = true }: LogoProps) {
  const { box, fontSize, radius } = sizes[size];

  const mark = (
    <svg
      width={box}
      height={box}
      viewBox={`0 0 ${box} ${box}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "transition-transform duration-200 hover:scale-105",
        className
      )}
      aria-label="JV logo"
    >
      <defs>
        <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="50%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
        <linearGradient id="logo-border" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.2" />
        </linearGradient>
      </defs>

      {/* Background rect */}
      <rect
        width={box}
        height={box}
        rx={radius}
        fill="url(#logo-grad)"
        fillOpacity="0.08"
      />
      <rect
        width={box}
        height={box}
        rx={radius}
        stroke="url(#logo-border)"
        strokeWidth="1"
        fill="none"
      />

      {/* JV text */}
      <text
        x="50%"
        y="54%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize={fontSize}
        fontWeight="600"
        fontFamily="inherit"
        letterSpacing="-0.3"
        fill="url(#logo-grad)"
      >
        JV
      </text>
    </svg>
  );

  if (!asLink) return mark;

  return (
    <Link href="/" aria-label="Home">
      {mark}
    </Link>
  );
}
