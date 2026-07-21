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
          <div className="h-px w-full bg-pine-smoke/55" />
          <span className="absolute -left-1 -top-1 h-2 w-2 rounded-full bg-pine-smoke/70" />
          <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-pine-smoke/70" />
        </div>

        <ol className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 md:gap-x-6 md:pt-[4.5rem]">
          {pillars.map((pillar, i) => (
            <li
              key={pillar.title}
              className="group relative flex flex-col items-center text-center"
            >
              {/* String tying the icon to the line (desktop) */}
              <span
                className="absolute left-1/2 top-[-4.5rem] hidden h-[4.5rem] w-px -translate-x-1/2 bg-pine-smoke/45 md:block"
                aria-hidden="true"
              >
                <span className="absolute -top-[3px] left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-pine-smoke/70" />
              </span>

              {/* Icon "bauble" hanging from the line — gently sways on hover */}
              <div className="relative z-10 origin-top transition-transform duration-500 ease-out group-hover:rotate-[5deg]">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-pressed-sage bg-frost-white shadow-[0_4px_14px_rgba(58,63,59,0.06)]">
                  <Icon name={pillar.icon} className="h-6 w-6 text-eucalyptus" />
                </div>

                {/* Little garment tag accessory (carries the number) */}
                <span className="absolute -right-7 top-2 rotate-[12deg]" aria-hidden="true">
                  <span className="relative flex h-6 items-center rounded-md border border-ash-wood/40 bg-nordic-linen pl-4 pr-2 font-serif text-[0.7rem] tracking-wide text-moss-oak shadow-[0_2px_6px_rgba(58,63,59,0.08)]">
                    <span className="absolute left-1.5 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full border border-ash-wood/60 bg-warm-linen" />
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </span>
              </div>

              <h3 className="mt-5 font-serif text-xl text-charcoal">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-iron-grey">{pillar.short}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
