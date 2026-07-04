import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { buttonClasses } from "@/components/ui/Button";

export function CTABanner({
  headline = "Ready to rethink your wardrobe?",
  cta = { label: "Take Action", href: "/take-action" },
}: {
  headline?: string;
  cta?: { label: string; href: string };
}) {
  return (
    <section className="bg-eucalyptus">
      <Container className="flex flex-col items-center gap-6 py-16 text-center md:flex-row md:justify-between md:text-left">
        <h2 className="max-w-2xl font-serif text-3xl text-frost-white md:text-4xl">{headline}</h2>
        <Link
          href={cta.href}
          className={buttonClasses({ variant: "onDark", size: "lg", className: "shrink-0" })}
        >
          {cta.label}
        </Link>
      </Container>
    </section>
  );
}
