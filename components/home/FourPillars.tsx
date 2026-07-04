import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/icons";
import { pillars } from "@/lib/content";

export function FourPillars() {
  return (
    <Section bg="linen">
      <SectionHeading
        eyebrow="What We Stand For"
        title="Four pillars for a more thoughtful wardrobe"
        description="Everything we do ladders up to these four commitments."
      />
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        {pillars.map((pillar) => (
          <Card key={pillar.title} fill="oat" threadBorder className="p-7">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-frost-white">
              <Icon name={pillar.icon} className="h-6 w-6 text-eucalyptus" />
            </div>
            <h3 className="mt-5 font-serif text-2xl text-charcoal">{pillar.title}</h3>
            <p className="mt-2 leading-relaxed text-iron-grey">{pillar.short}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
