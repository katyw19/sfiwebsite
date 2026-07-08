import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { buttonClasses } from "@/components/ui/Button";
import { Avatar } from "@/components/team/Avatar";
import { TeamMembers } from "@/components/team/TeamMembers";
import { teamMembers, contributors } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the SFI board — a small team committed to reshaping how people think about what they wear.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="Meet the board."
        intro="SFI is led by a small board committed to reshaping how people think about what they wear. Select any board member to read their bio."
      />

      <Section bg="frost">
        <TeamMembers members={teamMembers} />
      </Section>

      {/* Contributors */}
      <Section bg="linen" size="compact">
        <SectionHeading
          eyebrow="Contributors"
          title="Program leads & contributors"
          description="Volunteers who help SFI create content and run programs."
        />
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contributors.map((person) => (
            <div key={person.name} className="flex items-center gap-4 rounded-lg border border-nordic-linen bg-frost-white p-6">
              <Avatar name={person.name} src={person.image} sizePx={64} />
              <div>
                <h3 className="font-serif text-lg text-charcoal">{person.name}</h3>
                <p className="text-sm text-iron-grey">{person.title}</p>
                {person.school && (
                  <p className="mt-0.5 text-xs font-medium text-eucalyptus">{person.school}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-frost-white py-10 md:py-12">
        <Container>
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
        </Container>
      </section>
    </>
  );
}
