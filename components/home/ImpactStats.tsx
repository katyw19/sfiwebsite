import { Container } from "@/components/ui/Container";
import { ThreadLine } from "@/components/ui/ThreadLine";
import { impactStats } from "@/lib/content";

export function ImpactStats() {
  return (
    <section className="bg-frost-white py-14 md:py-16" aria-label="Impact statistics">
      <Container>
        <dl className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
          {impactStats.map((stat) => (
            <div key={stat.value} className="flex flex-col gap-3">
              <ThreadLine className="w-10" />
              <dt className="font-serif text-4xl leading-tight text-charcoal md:text-5xl">
                {stat.value}
              </dt>
              <dd className="text-sm leading-snug text-iron-grey">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
