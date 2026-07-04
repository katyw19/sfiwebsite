import { cn } from "@/lib/utils";
import { Container } from "./Container";

/**
 * Vertical section rhythm (64px mobile / 96px desktop) with the alternating
 * linen ↔ frost-white backgrounds the spec calls for.
 */
export function Section({
  bg = "linen",
  size = "normal",
  className,
  containerClassName,
  id,
  children,
}: {
  bg?: "linen" | "frost" | "oat" | "none";
  size?: "normal" | "compact";
  className?: string;
  containerClassName?: string;
  id?: string;
  children: React.ReactNode;
}) {
  const bgMap = {
    linen: "bg-warm-linen",
    frost: "bg-frost-white",
    oat: "bg-oat-milk",
    none: "",
  } as const;

  const sizeMap = {
    normal: "py-16 md:py-24",
    compact: "py-12 md:py-16",
  } as const;

  return (
    <section id={id} className={cn(sizeMap[size], bgMap[bg], className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
