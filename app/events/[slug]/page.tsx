import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ThreadLine } from "@/components/ui/ThreadLine";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Icon } from "@/components/ui/icons";
import { MDX } from "@/components/mdx/MDX";
import { ShareButtons } from "@/components/ShareButtons";
import { getAllEventSlugs, getEventBySlug, isEventUpcoming } from "@/lib/events";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return getAllEventSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const event = getEventBySlug(params.slug);
  if (!event) return { title: "Event not found" };
  return {
    title: event.title,
    description: event.excerpt,
    openGraph: { title: event.title, description: event.excerpt, type: "article" },
  };
}

export default function EventPage({ params }: { params: { slug: string } }) {
  const event = getEventBySlug(params.slug);
  if (!event) notFound();

  const upcoming = isEventUpcoming(event);

  const meta = [
    { icon: "Calendar", label: formatDate(event.date) },
    { icon: "Clock", label: event.time },
    { icon: "MapPin", label: event.address ? `${event.location} · ${event.address}` : event.location },
  ];

  return (
    <article>
      {/* Hero image */}
      {/* TODO: Replace placeholder with real event photo ({event.image}) */}
      <PlaceholderImage
        seed={event.slug}
        icon={event.eventType === "showcase" ? "Shirt" : "Recycle"}
        className="h-64 w-full rounded-none md:h-80"
        rounded={false}
      />

      <Container className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/events"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-pine-smoke underline underline-offset-4 hover:text-moss-oak"
          >
            <Icon name="ChevronRight" className="h-4 w-4 rotate-180" />
            All events
          </Link>

          <div className="mt-6 flex flex-wrap gap-2">
            <Badge>{event.eventType.charAt(0).toUpperCase() + event.eventType.slice(1)}</Badge>
            <Badge tone={upcoming ? "blush" : "outline"}>{upcoming ? "Upcoming" : "Past event"}</Badge>
            {event.school && <Badge tone="outline">{event.school}</Badge>}
          </div>

          <h1 className="mt-4 font-serif text-4xl leading-tight text-charcoal md:text-5xl">
            {event.title}
          </h1>

          <ThreadLine className="mt-6 w-16" />

          <dl className="mt-6 flex flex-col gap-3">
            {meta.map((m) => (
              <div key={m.label} className="flex items-center gap-2.5 text-iron-grey">
                <Icon name={m.icon} className="h-5 w-5 shrink-0 text-eucalyptus" />
                <dd>{m.label}</dd>
              </div>
            ))}
          </dl>

          <div className="prose prose-sfi mt-8 max-w-none">
            <MDX source={event.description} />
          </div>

          <div className="mt-10 border-t border-nordic-linen pt-6">
            <ShareButtons path={`/events/${event.slug}`} title={event.title} />
          </div>
        </div>
      </Container>
    </article>
  );
}
