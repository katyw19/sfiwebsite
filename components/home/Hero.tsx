import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { buttonClasses } from "@/components/ui/Button";
import { Icon } from "@/components/ui/icons";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden">
      {/* Full-bleed background image with a warm overlay tint */}
      {/* TODO: Replace placeholder with a sustainable-fashion editorial / clothing-rack photo */}
      <PlaceholderImage
        seed="home-hero-clothing-rack"
        className="absolute inset-0 h-full w-full rounded-none"
        rounded={false}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-warm-linen/92 via-warm-linen/80 to-frost-white/70"
      />

      <Container className="relative py-24">
        <div className="max-w-3xl animate-fade-in-up">
          <span className="eyebrow">A nonprofit for a more thoughtful wardrobe</span>
          <h1 className="mt-4 font-serif text-4xl leading-[1.05] text-charcoal sm:text-5xl lg:text-hero">
            Making sustainable fashion the first choice, not an alternative.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-iron-grey">
            SFI creates community-driven experiences — clothing swaps, showcases, and pop-ups — that
            make sustainability the fun, obvious choice.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/take-action" className={buttonClasses({ variant: "primary", size: "lg" })}>
              Get Involved
            </Link>
            <Link href="/about/mission" className={buttonClasses({ variant: "outline", size: "lg" })}>
              Our Mission
            </Link>
          </div>
        </div>
      </Container>

      {/* Scroll-down indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2" aria-hidden="true">
        <Icon name="ChevronDown" className="h-7 w-7 animate-bounce-slow text-eucalyptus" />
      </div>
    </section>
  );
}
