import Image from "next/image";
import { cn, initials } from "@/lib/utils";

/**
 * Circular headshot — real photo when `src` is set, initials gradient fallback
 * otherwise. Shared by the team grid, the bio modal, and the contributor list.
 */
export function Avatar({
  name,
  src,
  sizePx = 112,
  className,
}: {
  name: string;
  src?: string;
  sizePx?: number;
  className?: string;
}) {
  if (src) {
    return (
      <Image
        src={src}
        alt={`${name} headshot`}
        width={sizePx}
        height={sizePx}
        className={cn("shrink-0 rounded-full object-cover", className)}
      />
    );
  }

  const textSize = sizePx >= 112 ? "text-3xl" : sizePx >= 80 ? "text-2xl" : "text-xl";
  return (
    <div
      aria-hidden="true"
      style={{ width: sizePx, height: sizePx }}
      className={cn(
        "flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-pressed-sage to-eucalyptus font-serif text-frost-white",
        textSize,
        className,
      )}
    >
      {initials(name)}
    </div>
  );
}
