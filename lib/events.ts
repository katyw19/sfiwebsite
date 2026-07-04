import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const EVENTS_DIR = path.join(process.cwd(), "content", "events");

export type EventType = "swap" | "showcase" | "popup" | "workshop" | "other";

export interface EventItem {
  slug: string;
  title: string;
  date: string; // ISO date
  time: string;
  location: string;
  address?: string;
  school?: string;
  description: string; // MDX content body
  excerpt: string; // short frontmatter summary for cards
  image?: string;
  rsvpOpen: boolean;
  eventType: EventType;
}

function readAllEvents(): EventItem[] {
  if (!fs.existsSync(EVENTS_DIR)) return [];

  return fs
    .readdirSync(EVENTS_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(EVENTS_DIR, file), "utf8");
      const { data, content } = matter(raw);
      const slug = (data.slug as string) ?? file.replace(/\.mdx$/, "");

      return {
        slug,
        title: data.title ?? slug,
        date: data.date ?? "1970-01-01",
        time: data.time ?? "TBA",
        location: data.location ?? "TBA",
        address: data.address,
        school: data.school,
        description: content.trim(),
        excerpt: data.excerpt ?? "",
        image: data.image,
        rsvpOpen: Boolean(data.rsvpOpen),
        eventType: (data.eventType as EventType) ?? "other",
      } satisfies EventItem;
    });
}

/** Compare an event's date against today (UTC, date-only). */
function isUpcoming(iso: string): boolean {
  const today = new Date();
  const todayUtc = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate());
  const eventDate = new Date(iso + "T00:00:00Z").getTime();
  return eventDate >= todayUtc;
}

/** Upcoming events, soonest first. */
export function getUpcomingEvents(): EventItem[] {
  return readAllEvents()
    .filter((e) => isUpcoming(e.date))
    .sort((a, b) => (a.date > b.date ? 1 : -1));
}

/** Past events, most recent first. */
export function getPastEvents(): EventItem[] {
  return readAllEvents()
    .filter((e) => !isUpcoming(e.date))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

/** All events: upcoming (soonest first) then past (most recent first). */
export function getAllEvents(): EventItem[] {
  return [...getUpcomingEvents(), ...getPastEvents()];
}

export function getEventBySlug(slug: string): EventItem | undefined {
  return readAllEvents().find((e) => e.slug === slug);
}

export function getAllEventSlugs(): string[] {
  return readAllEvents().map((e) => e.slug);
}

export function isEventUpcoming(event: EventItem): boolean {
  return isUpcoming(event.date);
}
