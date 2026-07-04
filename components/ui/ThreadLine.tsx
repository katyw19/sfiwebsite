import { cn } from "@/lib/utils";

/**
 * The "thread line" — SFI's signature decorative element. A thin pressed-sage
 * rule echoing the vertical green bars in the pitch deck, evoking a thread.
 */
export function ThreadLine({
  orientation = "horizontal",
  className,
}: {
  orientation?: "horizontal" | "vertical";
  className?: string;
}) {
  if (orientation === "vertical") {
    return (
      <span
        aria-hidden="true"
        className={cn("inline-block w-[2px] rounded-full bg-pressed-sage", className)}
      />
    );
  }

  return (
    <span
      aria-hidden="true"
      className={cn("block h-[2px] rounded-full bg-pressed-sage", className)}
    />
  );
}
