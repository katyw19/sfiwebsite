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
      <ol className="mt-10 border-t border-pressed-sage/50">
        {pillars.map((pillar, i) => (
          <li
            key={pillar.title}
            className="group flex flex-col gap-2 border-b border-pressed-sage/50 py-6 md:flex-row md:items-baseline md:gap-10 md:py-7"
          >
            {/* Index + title */}
            <div className="flex items-baseline gap-4 md:w-[19rem] md:shrink-0">
              <span className="font-serif text-3xl leading-none text-eucalyptus transition-colors group-hover:text-moss-oak md:text-[2.5rem]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-serif text-2xl text-charcoal md:text-[1.75rem]">{pillar.title}</h3>
            </div>

            {/* Description */}
            <p className="flex-1 leading-relaxed text-iron-grey md:text-lg">{pillar.short}</p>

            {/* Quiet icon accent */}
            <Icon
              name={pillar.icon}
              className="hidden h-7 w-7 shrink-0 self-center text-pressed-sage transition-colors group-hover:text-eucalyptus md:block"
            />
          </li>
        ))}
      </ol>
    </Section>
  );
}
