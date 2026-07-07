import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { buttonClasses } from "@/components/ui/Button";
import { Icon } from "@/components/ui/icons";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-warm-linen">
      <Container className="grid grid-cols-1 items-center gap-10 py-14 md:gap-12 lg:min-h-[86vh] lg:grid-cols-2 lg:gap-16 lg:py-20">
        {/* Photo — left on desktop, below text on mobile */}
        <div className="order-2 lg:order-1">
          <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-nordic-linen shadow-[0_20px_50px_rgba(58,63,59,0.12)]">
            <Image
              src="/images/home/hero.jpg"
              alt="A rack of neutral-toned secondhand clothing beside a leafy rubber plant"
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Text — right on desktop */}
        <div className="order-1 animate-fade-in-up lg:order-2">
          <span className="eyebrow">A Bay Area nonprofit for a more thoughtful wardrobe</span>
          <h1 className="mt-4 font-serif text-4xl leading-[1.05] text-charcoal sm:text-5xl lg:text-hero">
            Sustainable Fashion Initiative
          </h1>
          <p className="mt-6 font-serif text-2xl leading-snug text-moss-oak md:text-3xl">
            Making sustainable fashion the first choice, not an alternative.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-iron-grey">
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

      {/* Scroll-down indicator (desktop) */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:block" aria-hidden="true">
        <Icon name="ChevronDown" className="h-7 w-7 animate-bounce-slow text-eucalyptus" />
      </div>
    </section>
  );
}
