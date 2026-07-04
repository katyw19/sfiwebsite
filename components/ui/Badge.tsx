import { cn } from "@/lib/utils";

/** Small pill for tags, categories, and event types. */
export function Badge({
  tone = "sage",
  className,
  children,
}: {
  tone?: "sage" | "outline" | "blush";
  className?: string;
  children: React.ReactNode;
}) {
  const tones = {
    sage: "bg-pressed-sage/40 text-charcoal",
    outline: "border border-nordic-linen text-iron-grey",
    blush: "bg-ash-wood/40 text-charcoal",
  } as const;

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
