import { cn } from "@/lib/utils";

/** Centered max-1200px wrapper with responsive horizontal padding. */
export function Container({
  as: Tag = "div",
  className,
  children,
}: {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children: React.ReactNode;
}) {
  return <Tag className={cn("container-sfi", className)}>{children}</Tag>;
}
