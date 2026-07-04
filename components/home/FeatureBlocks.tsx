import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ThreadLine } from "@/components/ui/ThreadLine";
import { Icon } from "@/components/ui/icons";
import { homeFeatureBlocks } from "@/lib/content";

/** Editorial "learn more" blocks adapted from the old homepage. */
export function FeatureBlocks() {
  return (
    <Section bg="linen">
      <SectionHeading eyebrow="Dig Deeper" title="Learn, reuse, and share" />
      <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-3">
        {homeFeatureBlocks.map((block) => (
          <div key={block.title} className="flex flex-col pl-6">
            <ThreadLine orientation="vertical" className="mb-5 h-8" />
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-oat-milk">
              <Icon name={block.icon} className="h-6 w-6 text-eucalyptus" />
            </div>
            <h3 className="font-serif text-xl text-charcoal">{block.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-iron-grey">{block.description}</p>
            <Link
              href={block.ctaHref}
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-pine-smoke underline underline-offset-4 transition-colors hover:text-moss-oak"
            >
              {block.ctaLabel}
              <Icon name="ArrowRight" className="h-4 w-4" />
            </Link>
          </div>
        ))}
      </div>
    </Section>
  );
}
