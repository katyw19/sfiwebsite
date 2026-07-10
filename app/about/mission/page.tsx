import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { ThreadLine } from "@/components/ui/ThreadLine";
import { Icon } from "@/components/ui/icons";
import { pillars } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Mission",
  description:
    "A future where sustainable fashion is the first choice, not an alternative. How SFI addresses fashion's culture of overconsumption.",
};

const problemStats = [
  { value: "~10%", label: "of global carbon emissions come from the fashion industry" },
  { value: "2,700 L", label: "of water go into making a single cotton t-shirt" },
  { value: "85%", label: "of textiles end up in landfills or incinerated each year" },
  { value: "<1%", label: "of clothing is recycled into new clothing" },
];

const barriers = ["More expensive", "Less convenient", "Less fashionable", "Less accessible"];

const vision = [
  {
    title: "Secondhand is the aspiration",
    icon: "Sparkles",
    body: "Pre-loved, vintage, and swapped pieces are seen as stylish and desirable — never a compromise.",
  },
  {
    title: "Clothes get a longer life",
    icon: "Recycle",
    body: "Sharing, swapping, and mending keep garments in rotation for years, not a handful of wears.",
  },
  {
    title: "Choices made with awareness",
    icon: "Leaf",
    body: "People understand the water, carbon, and labor behind the clothes they buy.",
  },
  {
    title: "Fashion that builds community",
    icon: "Users",
    body: "Getting dressed becomes a way to connect and express — not just to consume.",
  },
];

const solutions = [
  {
    title: "Clothing swaps",
    icon: "Recycle",
    body: "Bring what you no longer wear, leave with something new to you — always free.",
  },
  {
    title: "Pop-up experiences",
    icon: "Store",
    body: "Community swap stands and brand-spotlight collaborations that meet people where they already are.",
  },
  {
    title: "Styling & showcases",
    icon: "Shirt",
    body: "Thrifted, borrowed, and upcycled fashion shows that prove secondhand can be stunning.",
  },
  {
    title: "Educational content",
    icon: "BookOpen",
    body: "Blog guides and social campaigns that make more informed fashion choices easy.",
  },
  {
    title: "Brand collaborations",
    icon: "Sparkles",
    body: "Partnerships with brands that share our commitment to circular, sustainable fashion.",
  },
];

export default function MissionPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Mission"
        title="A future where sustainable fashion is the first choice, not an alternative."
        intro="SFI is a nonprofit making sustainable fashion accessible, aspirational, and community-driven — built for a generation uniquely positioned to shape the future of fashion trends and consumer behavior."
      />

      {/* The Problem */}
      <Section bg="frost">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="The Problem" title="Fashion has normalized overconsumption" />
            <p className="mt-6 leading-relaxed text-iron-grey">
              Today&apos;s fashion system encourages people to buy more, wear less, and discard
              clothing faster than ever before.
            </p>
            <ul className="mt-6 flex flex-col">
              {problemStats.map((stat) => (
                <li
                  key={stat.value}
                  className="flex items-baseline gap-4 border-b border-nordic-linen py-3 first:pt-0 last:border-0 last:pb-0"
                >
                  <span className="min-w-[5.5rem] shrink-0 font-serif text-2xl text-moss-oak">
                    {stat.value}
                  </span>
                  <span className="text-sm leading-snug text-iron-grey">{stat.label}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 leading-relaxed text-iron-grey">
              With social media trends, fashion culture is built around constant purchasing — and
              sustainability is too often treated as a compromise.
            </p>
            <p className="mt-4 font-medium text-charcoal">
              While awareness of fast fashion has increased, overconsumption remains the norm.
            </p>
          </div>

          {/* Photo + perception barriers callout */}
          <div className="flex flex-col gap-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-nordic-linen">
              <Image
                src="/images/mission/problem.jpg"
                alt="A rack of neutral-toned clothing against a sage-green wall"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <Card fill="oat" threadBorder padding="lg">
              <h3 className="font-serif text-xl text-charcoal">
                Sustainable fashion is often seen as…
              </h3>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {barriers.map((barrier) => (
                  <div
                    key={barrier}
                    className="flex items-center gap-2.5 rounded-lg bg-frost-white px-3.5 py-3"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ash-wood/25">
                      <Icon name="X" className="h-3 w-3 text-ash-wood" />
                    </span>
                    <span className="text-sm text-iron-grey line-through decoration-ash-wood/50">
                      {barrier}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-5 flex items-center gap-2 text-sm font-medium text-moss-oak">
                <Icon name="Check" className="h-4 w-4 shrink-0 text-eucalyptus" />
                We&apos;re here to change every one of these.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* Our Vision */}
      <Section bg="linen" size="compact">
        <SectionHeading
          eyebrow="Our Vision"
          title="A community that rethinks what it wears"
          description="We picture a culture where secondhand, shared, and long-lasting clothing is simply the norm."
        />
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {vision.map((item) => (
            <div key={item.title} className="rounded-lg bg-frost-white p-5">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-oat-milk">
                <Icon name={item.icon} className="h-5 w-5 text-eucalyptus" />
              </div>
              <h3 className="font-serif text-lg text-charcoal">{item.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-iron-grey">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Our Approach — Four Pillars (expanded) */}
      <Section bg="frost" size="compact">
        <SectionHeading
          eyebrow="Our Approach"
          title="Four pillars"
          description="Everything we do ladders up to these four commitments."
        />
        <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2">
          {pillars.map((pillar, i) => (
            <div key={pillar.title} className="flex gap-4 pl-5">
              <ThreadLine orientation="vertical" className="shrink-0" />
              <div>
                <div className="mb-2 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-oat-milk">
                    <Icon name={pillar.icon} className="h-5 w-5 text-eucalyptus" />
                  </div>
                  <h3 className="font-serif text-xl text-charcoal">
                    {i + 1}. {pillar.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-iron-grey">{pillar.long}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Our Solution */}
      <Section bg="linen">
        <SectionHeading
          eyebrow="Our Solution"
          title="Experiences people actually want"
          description="Rather than telling people what not to buy, we create experiences that make sustainable fashion engaging and rewarding. Here's what that looks like in practice:"
        />
        {/* Examples in action */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-nordic-linen">
            <Image
              src="/images/mission/swap.jpg"
              alt="Two people sharing a shirt at a clothing swap"
              fill
              sizes="(min-width: 640px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-nordic-linen">
            <Image
              src="/images/mission/styling.jpg"
              alt="Styling a thrifted outfit in front of a mirror"
              fill
              sizes="(min-width: 640px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((item) => (
            <div
              key={item.title}
              className="flex flex-col rounded-lg border border-nordic-linen bg-frost-white p-6 transition-shadow hover:shadow-[0_8px_30px_rgba(58,63,59,0.08)]"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-oat-milk">
                <Icon name={item.icon} className="h-5 w-5 text-eucalyptus" />
              </div>
              <h3 className="font-serif text-lg text-charcoal">{item.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-iron-grey">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
