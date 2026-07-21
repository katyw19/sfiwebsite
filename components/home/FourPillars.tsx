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
          <div className="h-[3px] w-full rounded-full bg-pine-smoke/60" />
          <span className="absolute -left-1 -top-[3px] h-2.5 w-2.5 rounded-full bg-pine-smoke/70" />
          <span className="absolute -right-1 -top-[3px] h-2.5 w-2.5 rounded-full bg-pine-smoke/70" />
        </div>

        <ol className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 md:gap-x-6 md:pt-6">
          {pillars.map((pillar, i) => (
            <li
              key={pillar.title}
              className="group relative flex flex-col items-center text-center"
            >
              {/* Wooden clothespin clipping the icon onto the line (desktop) */}
              <span
                className="absolute left-1/2 top-[-1.5rem] z-20 hidden h-8 w-3 -translate-x-1/2 rounded-[4px] border border-ash-wood/45 bg-nordic-linen shadow-[0_1px_3px_rgba(58,63,59,0.14)] md:block"
                aria-hidden="true"
              >
                <span className="absolute left-1/2 top-1.5 h-5 w-px -translate-x-1/2 bg-ash-wood/45" />
              </span>

              {/* Icon "bauble" + little garment tag */}
              <div className="relative z-10 origin-top transition-transform duration-500 ease-out group-hover:rotate-[3deg]">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-pressed-sage bg-frost-white shadow-[0_6px_16px_rgba(58,63,59,0.08)]">
                  <Icon name={pillar.icon} className="h-6 w-6 text-eucalyptus" />
                </div>

                {/* Small garment tag accessory (carries the number) */}
                <span className="absolute -right-7 top-3 rotate-[12deg]" aria-hidden="true">
                  <span className="relative flex h-6 items-center rounded-md border border-ash-wood/40 bg-nordic-linen pl-4 pr-2 font-serif text-[0.7rem] tracking-wide text-moss-oak shadow-[0_2px_6px_rgba(58,63,59,0.08)]">
                    <span className="absolute left-1.5 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full border border-ash-wood/60 bg-warm-linen" />
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </span>
              </div>

              <h3 className="mt-6 font-serif text-xl text-charcoal">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-iron-grey">{pillar.short}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
