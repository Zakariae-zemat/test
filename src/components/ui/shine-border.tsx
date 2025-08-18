import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ShineBorderProps {
  children: ReactNode;
  className?: string;
  color?: string;
  size?: number;
  duration?: number;
}

export function ShineBorder({ 
  children, 
  className, 
  color = "hsl(var(--primary))", 
  size = 300, 
  duration = 14 
}: ShineBorderProps) {
  const keyframes = `
    @keyframes shine-${duration} {
      0% {
        background-position: -${size}% 0;
      }
      100% {
        background-position: ${size}% 0;
      }
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: keyframes }} />
      <div
        className={cn(
          "relative overflow-hidden rounded-lg p-[1px]",
          className
        )}
        style={{
          background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
          backgroundSize: `${size}% 100%`,
          animation: `shine-${duration} ${duration}s linear infinite`,
        }}
      >
        <div className="relative h-full w-full rounded-lg bg-background">
          {children}
        </div>
      </div>
    </>
  );
}