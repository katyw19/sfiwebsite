import { cn } from "@/lib/utils";
import { ThreadLine } from "./ThreadLine";

type Padding = "none" | "md" | "lg";

/**
 * Comfortable, even interior spacing built from directional utilities (no
 * shorthand, so nothing conflicts). Thread-border cards get extra left room so
 * text clears the accent line rather than crowding it.
 */
function paddingClasses(padding: Padding, threadBorder: boolean): string {
  if (padding === "none") return "";
  if (padding === "lg") {
    return cn("py-8 pr-8 sm:py-9 sm:pr-9", threadBorder ? "pl-10 sm:pl-12" : "pl-8 sm:pl-9");
  }
  return cn("py-7 pr-7", threadBorder ? "pl-9 sm:pl-10" : "pl-7");
}

/**
 * Base card — oat-milk or frost-white fill with a 1px nordic-linen border.
 * `threadBorder` adds the signature thread-line left accent.
 * Use `padding="none"` for cards whose children include an edge-to-edge image.
 */
export function Card({
  as: Tag = "div",
  fill = "frost",
  threadBorder = false,
  hover = false,
  padding = "md",
  className,
  children,
}: {
  as?: keyof JSX.IntrinsicElements;
  fill?: "frost" | "oat";
  threadBorder?: boolean;
  hover?: boolean;
  padding?: Padding;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Tag
      className={cn(
        "relative overflow-hidden rounded-lg border border-nordic-linen",
        fill === "oat" ? "bg-oat-milk" : "bg-frost-white",
        hover && "transition-shadow duration-200 hover:shadow-[0_8px_30px_rgba(58,63,59,0.08)]",
        paddingClasses(padding, threadBorder),
        className,
      )}
    >
      {threadBorder && (
        <ThreadLine orientation="vertical" className="absolute inset-y-0 left-0 h-full" />
      )}
      {children}
    </Tag>
  );
}
