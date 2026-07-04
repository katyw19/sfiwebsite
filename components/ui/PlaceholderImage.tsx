import { cn } from "@/lib/utils";
import { Icon } from "./icons";

/**
 * On-brand gradient stand-in for real photography. Deterministic from `seed`
 * so the same subject keeps the same look across renders. Replace with a
 * next/image once real photos are available.
 * TODO: Replace placeholders with real photography (see /public/images).
 */
const PALETTE = ["#B9C1AE", "#8F9E8A", "#7A857C", "#5F6F60", "#E4DECF", "#E7ADA2"];

function hash(seed: string): number {
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  }
  return h;
}

export function PlaceholderImage({
  seed,
  alt,
  icon,
  className,
  rounded = true,
}: {
  seed: string;
  /** Provide when the image is meaningful; omit for purely decorative use. */
  alt?: string;
  icon?: string;
  className?: string;
  rounded?: boolean;
}) {
  const h = hash(seed);
  const c1 = PALETTE[h % PALETTE.length];
  const c2 = PALETTE[(h * 7 + 3) % PALETTE.length];
  const angle = 120 + (h % 90);

  return (
    <div
      role={alt ? "img" : undefined}
      aria-label={alt}
      aria-hidden={alt ? undefined : true}
      className={cn(
        "relative flex items-center justify-center overflow-hidden",
        rounded && "rounded-lg",
        className,
      )}
      style={{ backgroundImage: `linear-gradient(${angle}deg, ${c1}, ${c2})` }}
    >
      {/* Faint thread-line texture overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(255,255,255,0.5) 0 1px, transparent 1px 44px)",
        }}
      />
      {icon && (
        <Icon name={icon} className="relative h-10 w-10 text-frost-white/80" strokeWidth={1.25} />
      )}
    </div>
  );
}
