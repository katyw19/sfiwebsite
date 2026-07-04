/**
 * Central site configuration — name, tagline, socials, navigation.
 * Imported by layout, metadata, nav, and footer so copy stays consistent.
 */

export const siteConfig = {
  name: "Sustainable Fashion Initiative",
  shortName: "SFI",
  tagline: "Making sustainable fashion the first choice, not an alternative.",
  description:
    "A nonprofit building a more thoughtful relationship with what we wear — through community, culture, education, and access.",
  founder: "Katy Wan",
  location: "Bay Area, California",
  // TODO: Replace with the production domain once chosen (sfi.org / sustainablefashioninitiative.org).
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://sustainablefashioninitiative.org",
  // TODO: Replace with the real inbox once provisioned.
  email: "hello@sfi.org",
  socials: {
    instagram: {
      label: "Instagram",
      handle: "@sfi.org",
      // TODO: Verify the real handle/URL.
      href: "https://instagram.com/sfi.org",
    },
    tiktok: {
      label: "TikTok",
      handle: "@sfi.org",
      // TODO: Verify the real handle/URL.
      href: "https://tiktok.com/@sfi.org",
    },
    facebook: {
      label: "Facebook",
      handle: "Sustainable Fashion Initiative",
      // TODO: Add the real page URL if/when available.
      href: "https://facebook.com",
    },
  },
} as const;

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our Mission", href: "/about/mission" },
      { label: "Our Team", href: "/about/team" },
      { label: "Our Partners", href: "/about/partners" },
    ],
  },
  { label: "Events", href: "/events" },
  { label: "Blog", href: "/blog" },
  { label: "Take Action", href: "/take-action" },
];
