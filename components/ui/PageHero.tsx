import { Container } from "./Container";
import { ThreadLine } from "./ThreadLine";

/** Standard interior-page hero: eyebrow, serif headline, optional intro. */
export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-nordic-linen bg-warm-linen">
      <Container className="py-16 md:py-20">
        <span className="eyebrow">{eyebrow}</span>
        <div className="mt-4 flex items-stretch gap-4">
          <ThreadLine orientation="vertical" className="shrink-0" />
          <h1 className="max-w-4xl font-serif text-4xl leading-[1.08] text-charcoal md:text-5xl">
            {title}
          </h1>
        </div>
        {intro && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-iron-grey">{intro}</p>}
        {children}
      </Container>
    </section>
  );
}
