import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  reverse?: boolean;
  pauseOnHover?: boolean;
  className?: string;
  repeat?: number;
}

export function Marquee({
  children,
  reverse = false,
  pauseOnHover = false,
  className,
  repeat = 4,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "group flex overflow-hidden p-2 [--duration:25s] [--gap:1rem] [gap:var(--gap)]",
        className,
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn(
              "flex shrink-0 justify-around [gap:var(--gap)]",
              reverse ? "animate-marquee-reverse" : "animate-marquee",
              pauseOnHover && "group-hover:[animation-play-state:paused]",
            )}
          >
            {children}
          </div>
        ))}
    </div>
  );
}