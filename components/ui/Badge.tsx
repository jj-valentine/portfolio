import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "active";

type BadgeProps = {
  variant?: BadgeVariant;
  className?: string;
  children: React.ReactNode;
};

const variants: Record<BadgeVariant, string> = {
  default:
    "inline-flex items-center px-2.5 py-0.5 text-xs font-normal text-muted bg-surface rounded-full",
  active:
    "inline-flex items-center px-2.5 py-0.5 text-xs font-normal text-primary-text bg-fg rounded-full",
};

export function Badge({ variant = "default", className, children }: BadgeProps) {
  return (
    <span className={cn(variants[variant], className)}>{children}</span>
  );
}
