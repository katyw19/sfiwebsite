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

      <div className="relative mt-16">
        {/* The clothesline */}
        <div className="absolute inset-x-0 top-0 hidden md:block" aria-hidden="true">
          <div className="h-0.5 w-full rounded-full bg-pine-smoke/55" />
          <span className="absolute -top-[3px] left-0 h-2 w-2 rounded-full bg-pine-smoke/70" />
          <span className="absolute -top-[3px] right-0 h-2 w-2 rounded-full bg-pine-smoke/70" />
        </div>

        <ol className="grid grid-cols-2 gap-x-5 gap-y-9 md:grid-cols-4 md:gap-x-6 md:pt-12">
          {pillars.map((pillar, i) => (
            <li key={pillar.title} className="group relative flex">
              {/* String from line to tag */}
              <span
                className="absolute left-1/2 top-[-3rem] hidden h-[3.25rem] w-px -translate-x-1/2 bg-pine-smoke/50 md:block"
                aria-hidden="true"
              />

              {/* Garment hang-tag */}
              <div
                className={`relative w-full origin-top rounded-2xl border border-nordic-linen bg-frost-white px-5 pb-6 pt-8 text-center shadow-[0_8px_22px_rgba(58,63,59,0.07)] transition-transform duration-500 ease-out md:group-hover:rotate-0 ${
                  i % 2 === 0 ? "md:-rotate-2" : "md:rotate-2"
                }`}
              >
                {/* Punched eyelet */}
                <span
                  className="absolute left-1/2 top-3 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-pressed-sage bg-warm-linen"
                  aria-hidden="true"
                />
                <Icon name={pillar.icon} className="mx-auto mt-2 h-6 w-6 text-eucalyptus" />
                <span className="mt-2 block font-serif text-xs tracking-[0.25em] text-pressed-sage">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-0.5 font-serif text-lg text-charcoal">{pillar.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-iron-grey">{pillar.short}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
