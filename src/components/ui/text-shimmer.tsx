import { cn } from "@/lib/utils";

interface TextShimmerProps {
  children: string;
  className?: string;
  shimmerWidth?: number;
}

export default function TextShimmer({
  children,
  className,
  shimmerWidth = 100,
}: TextShimmerProps) {
  return (
    <p
      className={cn(
        "mx-auto max-w-md text-foreground/60",
        // Shimmer effect
        "animate-shimmer bg-clip-text bg-no-repeat [background-position:0_0] [background-size:var(--shimmer-width)_100%] [background-repeat:no-repeat]",
        // Shimmer gradient
        "bg-gradient-to-r from-transparent via-foreground/80 via-50% to-transparent",
        className,
      )}
      style={
        {
          "--shimmer-width": `${shimmerWidth}%`,
        } as React.CSSProperties
      }
    >
      {children}
    </p>
  );
}