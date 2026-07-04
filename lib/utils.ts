import { clsx, type ClassValue } from "clsx";

/** Merge conditional class names. */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}

/** Format an ISO date string as e.g. "June 15, 2026". */
export function formatDate(iso: string): string {
  const date = new Date(iso + (iso.length === 10 ? "T00:00:00" : ""));
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

/** Short month + day for date badges, e.g. { month: "APR", day: "22" }. */
export function dateBadge(iso: string): { month: string; day: string; year: string } {
  const date = new Date(iso + (iso.length === 10 ? "T00:00:00" : ""));
  return {
    month: date.toLocaleDateString("en-US", { month: "short", timeZone: "UTC" }).toUpperCase(),
    day: date.toLocaleDateString("en-US", { day: "2-digit", timeZone: "UTC" }),
    year: date.toLocaleDateString("en-US", { year: "numeric", timeZone: "UTC" }),
  };
}

/** Estimate reading time from raw text at ~200 wpm. */
export function readingTime(text: string): string {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

/** Truncate to a character budget on a word boundary, appending an ellipsis. */
export function truncate(text: string, max = 150): string {
  if (text.length <= max) return text;
  const clipped = text.slice(0, max);
  return clipped.slice(0, clipped.lastIndexOf(" ")).trimEnd() + "…";
}
