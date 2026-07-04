import { cn } from "@/lib/utils";
import { Container } from "./Container";

/**
 * Vertical section rhythm (64px mobile / 96px desktop) with the alternating
 * linen ↔ frost-white backgrounds the spec calls for.
 */
export function Section({
  bg = "linen",
  className,
  containerClassName,
  id,
  children,
}: {
  bg?: "linen" | "frost" | "oat" | "none";
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

  return (
    <section id={id} className={cn("py-16 md:py-24", bgMap[bg], className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
