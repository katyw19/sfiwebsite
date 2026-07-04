import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "onDark" | "onDarkOutline";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md font-bold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pressed-sage focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed";

const sizes: Record<Size, string> = {
  sm: "text-sm px-4 py-2",
  md: "text-base px-5 py-2.5",
  lg: "text-base px-7 py-3.5",
};

const variants: Record<Variant, string> = {
  // pressed-sage fill, charcoal text; hover → eucalyptus (per spec)
  primary: "bg-pressed-sage text-charcoal hover:bg-eucalyptus",
  outline: "border border-eucalyptus text-charcoal hover:bg-pressed-sage/40",
  // For placement on dark/eucalyptus bands
  onDark: "bg-frost-white text-moss-oak hover:bg-oat-milk",
  onDarkOutline: "border border-frost-white text-frost-white hover:bg-frost-white/10",
};

export function buttonClasses({
  variant = "primary",
  size = "md",
  className,
}: {
  variant?: Variant;
  size?: Size;
  className?: string;
} = {}) {
  return cn(base, sizes[size], variants[variant], className);
}

/** A styled anchor using Next's Link — for navigation CTAs. */
export function ButtonLink({
  href,
  variant,
  size,
  className,
  children,
  ...props
}: {
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
} & Omit<React.ComponentProps<typeof Link>, "href" | "className">) {
  return (
    <Link href={href} className={buttonClasses({ variant, size, className })} {...props}>
      {children}
    </Link>
  );
}

/** A native button — for form submits and client interactions. */
export function Button({
  variant,
  size,
  className,
  children,
  ...props
}: {
  variant?: Variant;
  size?: Size;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={buttonClasses({ variant, size, className })} {...props}>
      {children}
    </button>
  );
}
