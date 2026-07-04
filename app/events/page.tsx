import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { EventList } from "@/components/events/EventList";
import { getUpcomingEvents, getPastEvents } from "@/lib/events";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Join SFI at a clothing swap, pop-up, or showcase. Bring gently-used clothes, leave with something new to you.",
};

export default function EventsPage() {
  const upcoming = getUpcomingEvents();
  const past = getPastEvents();

  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Come swap, shop, and connect."
        intro="Join us at a clothing swap, pop-up, or showcase. Bring gently-used clothes, leave with something new to you."
      />

      <Section bg="frost">
        <EventList upcoming={upcoming} past={past} />
      </Section>
    </>
  );
}
