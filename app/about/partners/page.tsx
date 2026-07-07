import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { buttonClasses } from "@/components/ui/Button";
import { Icon } from "@/components/ui/icons";
import { brandPartners, schoolPartners } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Partners",
  description:
    "SFI works with brands and schools that share our commitment to a more sustainable fashion future — including Patagonia and five Bay Area schools.",
};

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Partners"
        title="Building the movement, together."
        intro="SFI works with brands and schools that share our commitment to a more sustainable fashion future."
      />

      {/* Brand partners */}
      <Section bg="frost">
        <SectionHeading eyebrow="Brand Partners" title="Brands on our side" />
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {brandPartners.map((partner) => (
            <Card key={partner.name} padding="lg" className="flex flex-col gap-4">
              {/* TODO: Replace with real partner logo */}
              <div className="flex h-16 w-40 items-center justify-center rounded-lg bg-oat-milk font-serif text-xl text-charcoal">
                {partner.name}
              </div>
              <p className="leading-relaxed text-iron-grey">{partner.description}</p>
            </Card>
          ))}

          {/* Placeholder slot for future partners */}
          <Card padding="lg" className="flex flex-col items-center justify-center gap-3 border-dashed text-center">
            <Icon name="Sparkles" className="h-7 w-7 text-eucalyptus" />
            <p className="font-serif text-lg text-charcoal">Your brand here</p>
            <p className="text-sm text-iron-grey">
              We&apos;re growing our roster of mission-aligned partners.
            </p>
            <Link
              href="/take-action#partner"
              className="text-sm font-medium text-pine-smoke underline underline-offset-4 hover:text-moss-oak"
            >
              Partner with SFI
            </Link>
          </Card>
        </div>
      </Section>

      {/* School partners */}
      <Section bg="linen">
        <SectionHeading
          eyebrow="School Partners"
          title="Where we've hosted swaps"
          description="SFI has hosted clothing swap events and educational programming across the Bay Area."
        />
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {schoolPartners.map((school) => (
            <div
              key={school}
              className="flex items-center gap-3 rounded-lg border border-nordic-linen bg-frost-white p-6"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-oat-milk">
                <Icon name="MapPin" className="h-5 w-5 text-eucalyptus" />
              </div>
              <span className="font-medium text-charcoal">{school}</span>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-iron-grey">
          {/* TODO: Optional — add an embedded map of Bay Area locations. */}
          All five schools are located across the San Francisco Bay Area.
        </p>
      </Section>

      {/* Become a partner */}
      <Section bg="frost">
        <Card fill="oat" threadBorder padding="lg" className="flex flex-col items-start gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-serif text-2xl text-charcoal">Become a partner</h2>
            <p className="mt-2 max-w-xl text-iron-grey">
              Interested in partnering with SFI — as a brand, school, or community organization?
            </p>
          </div>
          <Link
            href="/take-action#partner"
            className={buttonClasses({ variant: "primary", size: "lg", className: "shrink-0" })}
          >
            Get in touch
          </Link>
        </Card>
      </Section>
    </>
  );
}
