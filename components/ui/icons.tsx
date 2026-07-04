import {
  ArrowRight,
  BookOpen,
  Calendar,
  Check,
  ChevronDown,
  ChevronRight,
  Clock,
  Facebook,
  Heart,
  Instagram,
  Leaf,
  Link2,
  MapPin,
  Menu,
  MessageCircle,
  Receipt,
  Recycle,
  Share2,
  Shirt,
  Sparkles,
  Sprout,
  Store,
  Unlock,
  Users,
  X,
  type LucideIcon,
} from "lucide-react";

/** Named icon registry so content data can reference icons by string. */
export const iconMap: Record<string, LucideIcon> = {
  ArrowRight,
  BookOpen,
  Calendar,
  Check,
  ChevronDown,
  ChevronRight,
  Clock,
  Facebook,
  Heart,
  Instagram,
  Leaf,
  Link2,
  MapPin,
  Menu,
  MessageCircle,
  Receipt,
  Recycle,
  Share2,
  Shirt,
  Sparkles,
  Sprout,
  Store,
  Unlock,
  Users,
  X,
};

export function Icon({
  name,
  className,
  strokeWidth = 1.5,
  "aria-hidden": ariaHidden = true,
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
  "aria-hidden"?: boolean;
}) {
  const Cmp = iconMap[name] ?? Leaf;
  return <Cmp className={className} strokeWidth={strokeWidth} aria-hidden={ariaHidden} />;
}

/** TikTok is not part of lucide — provide a matching thin-line glyph. */
export function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}
