import { cn } from "@/lib/utils";

type CardProps = {
  hover?: boolean;
  className?: string;
  children: React.ReactNode;
};

export function Card({ hover = true, className, children }: CardProps) {
  return (
    <div
      className={cn(
        "border border-border rounded-[8px] bg-bg",
        hover && "transition-colors duration-150 hover:border-[rgba(119,119,119,0.6)]",
        className
      )}
    >
      {children}
    </div>
  );
}
