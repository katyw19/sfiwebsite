"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { EventCard } from "./EventCard";
import type { EventItem } from "@/lib/events";

type Filter = "upcoming" | "past";

export function EventList({
  upcoming,
  past,
}: {
  upcoming: EventItem[];
  past: EventItem[];
}) {
  // Default to whichever list has content, preferring upcoming.
  const [filter, setFilter] = useState<Filter>(upcoming.length > 0 ? "upcoming" : "past");

  const events = filter === "upcoming" ? upcoming : past;

  const tabs: { key: Filter; label: string; count: number }[] = [
    { key: "upcoming", label: "Upcoming", count: upcoming.length },
    { key: "past", label: "Past", count: past.length },
  ];

  return (
    <div>
      {/* Filter tabs */}
      <div
        role="tablist"
        aria-label="Filter events"
        className="inline-flex rounded-lg border border-nordic-linen bg-frost-white p-1"
      >
        {tabs.map((tab) => (
          <button
            key={tab.key}
            role="tab"
            aria-selected={filter === tab.key}
            onClick={() => setFilter(tab.key)}
            className={cn(
              "rounded-md px-4 py-2 text-sm font-medium transition-colors",
              filter === tab.key
                ? "bg-pressed-sage text-charcoal"
                : "text-iron-grey hover:text-moss-oak",
            )}
          >
            {tab.label}
            <span className="ml-1.5 text-xs opacity-70">{tab.count}</span>
          </button>
        ))}
      </div>

      {/* Grid */}
      {events.length > 0 ? (
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <EventCard key={event.slug} event={event} upcoming={filter === "upcoming"} />
          ))}
        </div>
      ) : (
        <p className="mt-8 rounded-lg border border-dashed border-nordic-linen bg-frost-white p-10 text-center text-iron-grey">
          {filter === "upcoming"
            ? "No upcoming events just yet — check back soon, or subscribe to hear when the next one drops."
            : "No past events to show."}
        </p>
      )}
    </div>
  );
}
