import Image from "next/image";
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
      {/* Subtle on-brand background photo, washed out for legibility */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/images/page-header.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-warm-linen/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-warm-linen via-warm-linen/80 to-warm-linen/20" />
      </div>
      <Container className="relative py-16 md:py-20">
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
