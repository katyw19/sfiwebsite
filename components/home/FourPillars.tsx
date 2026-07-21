import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
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
      <ol className="mt-7 border-t border-pressed-sage/50">
        {pillars.map((pillar, i) => (
          <li
            key={pillar.title}
            className="group flex flex-col gap-0.5 border-b border-pressed-sage/50 py-3.5 md:flex-row md:items-baseline md:gap-8 md:py-4"
          >
            {/* Index + title */}
            <div className="flex items-baseline gap-3 md:w-[14rem] md:shrink-0">
              <span className="font-serif text-lg leading-none text-eucalyptus transition-colors group-hover:text-moss-oak md:text-xl">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-serif text-lg text-charcoal">{pillar.title}</h3>
            </div>

            {/* Description */}
            <p className="flex-1 text-sm leading-relaxed text-iron-grey">{pillar.short}</p>

            {/* Quiet icon accent */}
            <Icon
              name={pillar.icon}
              className="hidden h-5 w-5 shrink-0 self-center text-pressed-sage transition-colors group-hover:text-eucalyptus md:block"
            />
          </li>
        ))}
      </ol>
    </Section>
  );
}
