import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { buttonClasses } from "@/components/ui/Button";
import { Icon } from "@/components/ui/icons";
import { dateBadge } from "@/lib/utils";
import type { EventItem } from "@/lib/events";

const typeLabels: Record<EventItem["eventType"], string> = {
  swap: "Clothing Swap",
  showcase: "Showcase",
  popup: "Pop-up",
  workshop: "Workshop",
  other: "Event",
};

export function EventCard({ event, upcoming }: { event: EventItem; upcoming: boolean }) {
  const badge = dateBadge(event.date);
  const canRsvp = upcoming && event.rsvpOpen;

  return (
    <Card as="article" hover className="flex flex-col p-6">
      <div className="flex items-start justify-between gap-4">
        {/* Date badge */}
        <div className="flex flex-col items-center rounded-lg bg-pressed-sage/40 px-4 py-2 text-center">
          <span className="font-mono text-xs font-medium uppercase tracking-wide text-pine-smoke">
            {badge.month}
          </span>
          <span className="font-mono text-2xl font-medium leading-none text-charcoal">
            {badge.day}
          </span>
          <span className="font-mono text-[0.65rem] text-iron-grey">{badge.year}</span>
        </div>
        <div className="flex flex-wrap justify-end gap-2">
          <Badge>{typeLabels[event.eventType]}</Badge>
          <Badge tone={upcoming ? "blush" : "outline"}>{upcoming ? "Upcoming" : "Past"}</Badge>
        </div>
      </div>

      <h3 className="mt-4 font-serif text-xl leading-snug text-charcoal">{event.title}</h3>

      <p className="mt-2 flex items-center gap-1.5 text-sm text-iron-grey">
        <Icon name="MapPin" className="h-4 w-4 shrink-0 text-eucalyptus" />
        {event.location}
      </p>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-iron-grey">{event.excerpt}</p>

      <div className="mt-5">
        <Link
          href={`/events/${event.slug}`}
          className={buttonClasses({ variant: canRsvp ? "primary" : "outline", size: "sm" })}
        >
          {canRsvp ? "RSVP" : "Learn More"}
        </Link>
      </div>
    </Card>
  );
}
