import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Icon, TikTokIcon } from "@/components/ui/icons";
import { ProgramLeadForm } from "@/components/forms/ProgramLeadForm";
import { BrandPartnerForm } from "@/components/forms/BrandPartnerForm";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Take Action",
  description:
    "Get involved with SFI — become a Program Lead, partner your brand with us, or stay connected.",
};

const jumpLinks = [
  { label: "Program Lead", href: "#program-lead" },
  { label: "For Brands", href: "#partner" },
  { label: "Stay Connected", href: "#stay-connected" },
];

/** Two-column action block: description + icon on the left, content on the right. */
function ActionBlock({
  id,
  icon,
  eyebrow,
  title,
  children,
  aside,
  bg,
}: {
  id: string;
  icon: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  aside: React.ReactNode;
  bg: "linen" | "frost";
}) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-24 py-16 md:py-20", bg === "frost" ? "bg-frost-white" : "bg-warm-linen")}
    >
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <div>
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-oat-milk">
            <Icon name={icon} className="h-6 w-6 text-eucalyptus" />
          </div>
          <span className="eyebrow mt-5 block">{eyebrow}</span>
          <h2 className="mt-2 font-serif text-3xl text-charcoal">{title}</h2>
          <div className="mt-4 max-w-md leading-relaxed text-iron-grey">{children}</div>
        </div>
        <div>{aside}</div>
      </Container>
    </section>
  );
}

export default function TakeActionPage() {
  return (
    <>
      <PageHero
        eyebrow="Take Action"
        title="Join the movement."
        intro="Every action counts. Whether you have five minutes or five hours a week, here's how you can help make sustainable fashion the first choice."
      >
        <div className="mt-8 flex flex-wrap gap-2">
          {jumpLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full border border-nordic-linen bg-frost-white px-4 py-1.5 text-sm font-medium text-iron-grey transition-colors hover:border-eucalyptus hover:text-moss-oak"
            >
              {l.label}
            </a>
          ))}
        </div>
      </PageHero>

      {/* Program Lead */}
      <ActionBlock
        id="program-lead"
        icon="Sparkles"
        eyebrow="Become a Program Lead"
        title="Become a Program Lead at your school"
        bg="frost"
        aside={
          <Card padding="lg">
            <ProgramLeadForm />
          </Card>
        }
      >
        <p>
          Help run an SFI program at your school or host a clothing swap. As a Program Lead, you&apos;ll
          organize local events, build community, and be part of shaping the sustainable fashion
          movement from the ground up.
        </p>
      </ActionBlock>

      {/* Partner with SFI (brands) */}
      <ActionBlock
        id="partner"
        icon="Store"
        eyebrow="For Brands"
        title="Partner with SFI"
        bg="linen"
        aside={
          <Card padding="lg">
            <BrandPartnerForm />
          </Card>
        }
      >
        <p>
          Are you a brand that shares our mission? Collaborate on an event, donate product for a swap
          or giveaway, sponsor a program, or get featured across our channels. Tell us what you have
          in mind and we&apos;ll find the right fit.
        </p>
      </ActionBlock>

      {/* Stay Connected */}
      <ActionBlock
        id="stay-connected"
        icon="MessageCircle"
        eyebrow="Stay Connected"
        title="Follow along"
        bg="frost"
        aside={
          <Card padding="lg" className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <a
                href={siteConfig.socials.instagram.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-md border border-nordic-linen p-3 text-charcoal transition-colors hover:border-eucalyptus"
              >
                <Icon name="Instagram" className="h-5 w-5 text-eucalyptus" />
                <span className="font-medium">Instagram</span>
                <span className="text-sm text-iron-grey">{siteConfig.socials.instagram.handle}</span>
              </a>
              <a
                href={siteConfig.socials.tiktok.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-md border border-nordic-linen p-3 text-charcoal transition-colors hover:border-eucalyptus"
              >
                <TikTokIcon className="h-5 w-5 text-eucalyptus" />
                <span className="font-medium">TikTok</span>
                <span className="text-sm text-iron-grey">{siteConfig.socials.tiktok.handle}</span>
              </a>
            </div>
            <div>
              <p className="mb-2 text-sm font-medium text-charcoal">Join the newsletter</p>
              <NewsletterForm />
            </div>
          </Card>
        }
      >
        <p>Get updates on upcoming events, new blog posts, and ways to get involved.</p>
      </ActionBlock>

      {/* Bottom note */}
      <section className="bg-warm-linen pb-20">
        <Container>
          <div className="rounded-lg border border-nordic-linen bg-frost-white p-8 text-center">
            <h2 className="font-serif text-2xl text-charcoal">Have a question or partnership idea?</h2>
            <p className="mt-2 text-iron-grey">
              Reach out anytime at{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-medium text-pine-smoke underline underline-offset-4 hover:text-moss-oak"
              >
                {siteConfig.email}
              </a>
              .
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
