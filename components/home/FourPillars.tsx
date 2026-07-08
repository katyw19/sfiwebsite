import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/icons";
import { pillars } from "@/lib/content";

export function FourPillars() {
  return (
    <Section bg="linen" size="compact">
      <SectionHeading
        eyebrow="What We Stand For"
        title="Four pillars for a more thoughtful wardrobe"
        description="Everything we do ladders up to these four commitments."
      />
      <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
        {pillars.map((pillar) => (
          <Card key={pillar.title} fill="oat" threadBorder padding="sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-frost-white">
              <Icon name={pillar.icon} className="h-5 w-5 text-eucalyptus" />
            </div>
            <h3 className="mt-3 font-serif text-xl text-charcoal">{pillar.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-iron-grey">{pillar.short}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
