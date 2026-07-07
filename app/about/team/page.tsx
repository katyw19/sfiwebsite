import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { buttonClasses } from "@/components/ui/Button";
import { teamMembers, contributors } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the SFI board — a small team committed to reshaping how people think about what they wear.",
};

function initials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
}

/** Circular headshot — real photo when `src` is set, initials fallback otherwise. */
function Avatar({ name, src, size = "lg" }: { name: string; src?: string; size?: "lg" | "sm" }) {
  const px = size === "lg" ? 112 : 64;
  const dim = size === "lg" ? "h-28 w-28" : "h-16 w-16";

  if (src) {
    return (
      <Image
        src={src}
        alt={`${name} headshot`}
        width={px}
        height={px}
        className={`${dim} shrink-0 rounded-full object-cover`}
      />
    );
  }

  return (
    <div
      aria-hidden="true"
      className={`flex ${dim} shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-pressed-sage to-eucalyptus font-serif text-frost-white ${
        size === "lg" ? "text-3xl" : "text-xl"
      }`}
    >
      {initials(name)}
    </div>
  );
}

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="Meet the board."
        intro="SFI is led by a small board committed to reshaping how people think about what they wear."
      />

      <Section bg="frost">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {teamMembers.map((member) => (
            <Card key={member.name} padding="lg" className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:gap-6 sm:text-left">
              <Avatar name={member.name} src={member.image} />
              <div className="mt-5 sm:mt-0">
                <h2 className="font-serif text-2xl text-charcoal">{member.name}</h2>
                <p className="mt-0.5 text-sm font-medium uppercase tracking-eyebrow text-eucalyptus">
                  {member.title}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-iron-grey">{member.bio}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Contributors */}
      <Section bg="linen">
        <SectionHeading
          eyebrow="Contributors"
          title="Program leads & contributors"
          description="Volunteers who help SFI create content and run programs."
        />
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contributors.map((person) => (
            <div key={person.name} className="flex items-center gap-4 rounded-lg border border-nordic-linen bg-frost-white p-6">
              <Avatar name={person.name} size="sm" />
              <div>
                <h3 className="font-serif text-lg text-charcoal">{person.name}</h3>
                <p className="text-sm text-iron-grey">{person.title}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section bg="frost">
        <Card fill="oat" threadBorder padding="lg" className="flex flex-col items-start gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-serif text-2xl text-charcoal">Want to join the team?</h2>
            <p className="mt-2 text-iron-grey">
              Volunteer or become a Program Lead at your school.
            </p>
          </div>
          <Link href="/take-action" className={buttonClasses({ variant: "primary", size: "lg", className: "shrink-0" })}>
            Take Action
          </Link>
        </Card>
      </Section>
    </>
  );
}
