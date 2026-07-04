import { cn } from "@/lib/utils";
import { ThreadLine } from "./ThreadLine";

/**
 * Base card — oat-milk or frost-white fill with a 1px nordic-linen border.
 * `threadBorder` adds the signature thread-line left accent.
 */
export function Card({
  as: Tag = "div",
  fill = "frost",
  threadBorder = false,
  hover = false,
  className,
  children,
}: {
  as?: keyof JSX.IntrinsicElements;
  fill?: "frost" | "oat";
  threadBorder?: boolean;
  hover?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Tag
      className={cn(
        "relative overflow-hidden rounded-lg border border-nordic-linen",
        fill === "oat" ? "bg-oat-milk" : "bg-frost-white",
        hover && "transition-shadow duration-200 hover:shadow-[0_8px_30px_rgba(58,63,59,0.08)]",
        threadBorder && "pl-1",
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
