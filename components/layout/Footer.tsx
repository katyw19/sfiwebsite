import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { Icon, TikTokIcon } from "@/components/ui/icons";

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "Our Mission", href: "/about/mission" },
  { label: "Our Team", href: "/about/team" },
  { label: "Our Partners", href: "/about/partners" },
  { label: "Events", href: "/events" },
  { label: "Blog", href: "/blog" },
  { label: "Take Action", href: "/take-action" },
];

const involvedLinks = [
  { label: "Volunteer", href: "/take-action#volunteer" },
  { label: "Host a Swap", href: "/take-action#host-a-swap" },
  { label: "Donate", href: "/take-action#donate" },
  { label: "Partner with SFI", href: "/about/partners" },
];

export function Footer() {
  return (
    <footer className="mt-24 bg-moss-oak text-frost-white">
      {/* Newsletter band */}
      <div className="border-b border-frost-white/15">
        <Container className="flex flex-col items-start gap-6 py-12 md:flex-row md:items-center md:justify-between">
          <div className="max-w-md">
            <h2 className="font-serif text-2xl text-frost-white">Never miss an update</h2>
            <p className="mt-2 text-sm text-frost-white/80">
              Get updates on upcoming events, new blog posts, and ways to get involved.
            </p>
          </div>
          <NewsletterForm tone="dark" className="w-full md:w-auto md:min-w-[22rem]" />
        </Container>
      </div>

      {/* Columns */}
      <Container className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="font-serif text-xl text-frost-white">SFI</span>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-frost-white/80">
            Sustainable Fashion Initiative is a nonprofit making sustainable fashion the first choice —
            through community, culture, education, and access.
          </p>
        </div>

        <nav aria-label="Explore">
          <h3 className="text-sm font-bold uppercase tracking-eyebrow text-frost-white/70">Explore</h3>
          <ul className="mt-4 flex flex-col gap-2.5">
            {exploreLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-frost-white/85 transition-colors hover:text-frost-white hover:underline">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Get involved">
          <h3 className="text-sm font-bold uppercase tracking-eyebrow text-frost-white/70">Get Involved</h3>
          <ul className="mt-4 flex flex-col gap-2.5">
            {involvedLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-frost-white/85 transition-colors hover:text-frost-white hover:underline">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-eyebrow text-frost-white/70">Connect</h3>
          <ul className="mt-4 flex flex-col gap-2.5">
            <li>
              <a
                href={siteConfig.socials.instagram.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-frost-white/85 transition-colors hover:text-frost-white"
              >
                <Icon name="Instagram" className="h-4 w-4" /> Instagram
              </a>
            </li>
            <li>
              <a
                href={siteConfig.socials.tiktok.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-frost-white/85 transition-colors hover:text-frost-white"
              >
                <TikTokIcon className="h-4 w-4" /> TikTok
              </a>
            </li>
            <li>
              <a
                href={siteConfig.socials.facebook.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-frost-white/85 transition-colors hover:text-frost-white"
              >
                <Icon name="Facebook" className="h-4 w-4" /> Facebook
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 text-sm text-frost-white/85 transition-colors hover:text-frost-white"
              >
                <Icon name="MessageCircle" className="h-4 w-4" /> {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-frost-white/15">
        <Container className="flex flex-col items-center justify-between gap-2 py-6 text-xs text-frost-white/70 sm:flex-row">
          <p>© 2026 Sustainable Fashion Initiative. All rights reserved.</p>
          <p>501(c)(3) status pending</p>
        </Container>
      </div>
    </footer>
  );
}
