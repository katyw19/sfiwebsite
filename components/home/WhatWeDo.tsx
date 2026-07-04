import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Icon } from "@/components/ui/icons";
import { whatWeDo } from "@/lib/content";

export function WhatWeDo() {
  return (
    <Section bg="frost">
      <SectionHeading
        eyebrow="What We Do"
        title="Experiences people actually want"
        description="Rather than telling people what not to buy, we create experiences that make sustainable fashion engaging and rewarding."
      />
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {whatWeDo.map((item) => (
          <Card key={item.title} className="flex flex-col" hover>
            {/* TODO: Replace placeholder with real event photography */}
            <PlaceholderImage
              seed={item.title}
              icon={item.icon}
              className="h-44 w-full rounded-none"
              rounded={false}
            />
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-serif text-xl text-charcoal">{item.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-iron-grey">{item.description}</p>
            </div>
          </Card>
        ))}
      </div>
      <div className="mt-10">
        <Link
          href="/events"
          className="inline-flex items-center gap-1.5 font-medium text-pine-smoke underline underline-offset-4 transition-colors hover:text-moss-oak"
        >
          See upcoming events
          <Icon name="ArrowRight" className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  );
}
