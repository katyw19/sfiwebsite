import type { Metadata } from "next";
import Link from "next/link";
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
  "92 million tons of textile waste is generated globally every year.",
  "The average American throws away approximately 81 pounds of clothing annually.",
  "A garbage truck's worth of textiles is landfilled or incinerated every second worldwide.",
  "An average piece of clothing is worn 7 times before being discarded or forgotten.",
];

const barriers = ["More expensive", "Less convenient", "Less fashionable", "Less accessible"];

const vision = [
  "Sees secondhand fashion as desirable and stylish",
  "Shares, reuses, and extends the life of clothing",
  "Understands the environmental impact of purchasing decisions",
  "Builds community through fashion",
];

const solutions = [
  "Clothing swaps",
  "Sustainable fashion pop-ups",
  "Styling events / thrifted fashion showcases",
  "Educational content / social media campaigns",
  "Brand collaborations",
];

const built = [
  {
    title: "Clothing swaps across Bay Area schools",
    body: "Hosted annual clothing swap events for students at Castilleja, The Nueva School, Crystal Springs Uplands School, Proof School, and Woodside Priory.",
    icon: "Recycle",
  },
  {
    title: "Educational resources",
    body: "Created outreach materials, sustainability content, and a blog sharing tips, guides, and industry insights.",
    icon: "BookOpen",
  },
  {
    title: "Early partnerships",
    body: "Partnered with Patagonia for clothing donations and giveaway opportunities.",
    icon: "Heart",
  },
];

const next = [
  {
    title: "Sustainable Fashion Showcases",
    body: "Fashion shows featuring thrifted, borrowed, swapped, and upcycled outfits that demonstrate how sustainability and style can coexist.",
  },
  {
    title: "Pop-up Experiences",
    body: "Community clothing swap stands and brand spotlight collaborations.",
  },
  {
    title: "Digital Education on Social Media",
    body: "Content focused on sustainable shopping habits and fashion overconsumption.",
  },
  {
    title: "Strategic Brand Partnerships",
    body: "Collaborating with brands that align with our mission to promote more sustainable practices.",
  },
];

export default function MissionPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Mission"
        title="A future where sustainable fashion is the first choice, not an alternative."
        intro="SFI is a nonprofit making sustainable fashion accessible, aspirational, and community-driven. Our primary audience is 16–30 year olds — a generation uniquely positioned to shape future fashion trends and consumer behavior."
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
            <ul className="mt-6 flex flex-col gap-3">
              {problemStats.map((stat) => (
                <li key={stat} className="flex gap-3 text-iron-grey">
                  <Icon name="ChevronRight" className="mt-1 h-4 w-4 shrink-0 text-eucalyptus" />
                  <span>{stat}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 leading-relaxed text-iron-grey">
              With social media trends, fashion culture is built around constant purchasing — and
              sustainable fashion is often viewed as more expensive, less convenient, less
              fashionable, and less accessible.
            </p>
            <p className="mt-4 font-medium text-charcoal">
              While awareness of fast fashion has increased, overconsumption remains the norm.
            </p>
          </div>

          {/* Perception barriers callout */}
          <div className="lg:pt-16">
            <Card fill="oat" threadBorder padding="lg">
              <h3 className="font-serif text-xl text-charcoal">
                Sustainable fashion is often seen as…
              </h3>
              <ul className="mt-5 flex flex-col gap-3">
                {barriers.map((barrier) => (
                  <li
                    key={barrier}
                    className="flex items-center gap-3 border-b border-nordic-linen pb-3 text-iron-grey last:border-0 last:pb-0"
                  >
                    <Icon name="X" className="h-4 w-4 shrink-0 text-ash-wood" />
                    <span>{barrier}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-relaxed text-iron-grey">
                We&apos;re here to change every one of these perceptions.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* Our Vision */}
      <Section bg="linen">
        <SectionHeading
          eyebrow="Our Vision"
          title="A community that rethinks what it wears"
          description="A future where sustainable fashion is the first choice, not an alternative. We envision a community that:"
        />
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {vision.map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-lg bg-frost-white p-6">
              <Icon name="Sprout" className="h-5 w-5 shrink-0 text-eucalyptus" />
              <span className="text-charcoal">{item}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Our Approach — Four Pillars (expanded) */}
      <Section bg="frost">
        <SectionHeading
          eyebrow="Our Approach"
          title="Four pillars"
          description="Everything we do ladders up to these four commitments."
        />
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {pillars.map((pillar, i) => (
            <div key={pillar.title} className="flex gap-5 pl-6">
              <ThreadLine orientation="vertical" className="shrink-0" />
              <div>
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-oat-milk">
                    <Icon name={pillar.icon} className="h-5 w-5 text-eucalyptus" />
                  </div>
                  <h3 className="font-serif text-2xl text-charcoal">
                    {i + 1}. {pillar.title}
                  </h3>
                </div>
                <p className="leading-relaxed text-iron-grey">{pillar.long}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Our Solution */}
      <Section bg="linen">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Our Solution" title="Experiences people want" />
            <p className="mt-6 leading-relaxed text-iron-grey">
              Rather than telling people what not to buy, we create experiences that make sustainable
              fashion engaging and rewarding.
            </p>
          </div>
          <div className="flex flex-wrap content-start gap-3 lg:pt-16">
            {solutions.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-nordic-linen bg-frost-white px-4 py-2 text-sm text-charcoal"
              >
                <Icon name="Sparkles" className="h-4 w-4 text-eucalyptus" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* What We've Built */}
      <Section bg="frost">
        <SectionHeading
          eyebrow="What We've Built"
          title="Laying the foundation for growth"
          description="Originally launched through student-led clothing swap efforts, SFI has spent the past several years exploring how sustainable fashion can become more accessible."
        />
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {built.map((item) => (
            <Card key={item.title} threadBorder padding="lg">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-oat-milk">
                <Icon name={item.icon} className="h-6 w-6 text-eucalyptus" />
              </div>
              <h3 className="mt-5 font-serif text-lg text-charcoal">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-iron-grey">{item.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* What's Next */}
      <Section bg="linen">
        <SectionHeading eyebrow="What's Next" title="Where we're headed" />
        <ol className="mt-10 flex flex-col gap-6">
          {next.map((item, i) => (
            <li key={item.title} className="flex gap-5">
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pressed-sage font-serif text-base text-charcoal"
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="border-b border-nordic-linen pb-6">
                <h3 className="font-serif text-xl text-charcoal">{item.title}</h3>
                <p className="mt-1.5 leading-relaxed text-iron-grey">{item.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-10 text-iron-grey">
          Want to be part of it?{" "}
          <Link
            href="/take-action"
            className="font-medium text-pine-smoke underline underline-offset-4 hover:text-moss-oak"
          >
            Take action with SFI
          </Link>
          .
        </p>
      </Section>
    </>
  );
}
