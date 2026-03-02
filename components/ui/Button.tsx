import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  variant?: ButtonVariant;
  href?: string;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className">;

const variants: Record<ButtonVariant, string> = {
  primary:
    "inline-flex items-center justify-center h-[42px] px-8 text-sm font-medium text-primary-text bg-primary-btn rounded-[8px] hover:opacity-90 transition-opacity duration-150",
  secondary:
    "inline-flex items-center justify-center h-[42px] px-8 text-sm font-medium text-fg bg-surface border border-[#3d3d3d] rounded-[8px] hover:border-[#555] hover:bg-[#2a2a2a] transition-all duration-150",
  ghost:
    "inline-flex items-center gap-2 text-base font-normal text-accent hover:opacity-80 transition-opacity duration-150",
};

export function Button({
  variant = "primary",
  href,
  external,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(variants[variant], className);

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
