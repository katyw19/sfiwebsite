/**
 * Structured site copy reused across multiple pages (home, mission, team,
 * partners). Real content from the SFI pitch deck + content pack; placeholder
 * text is marked with a TODO where a real bio/description is still needed.
 *
 * `icon` values are lucide-react icon names resolved via components/ui/icons.
 */

export interface Stat {
  value: string;
  label: string;
}

export const impactStats: Stat[] = [
  { value: "92M tons", label: "of textile waste generated globally each year" },
  { value: "81 lbs", label: "of clothing discarded per American, annually" },
  { value: "7 wears", label: "the average garment sees before being thrown away" },
  { value: "1 truck/sec", label: "of textiles landfilled worldwide" },
];

export interface Pillar {
  title: string;
  icon: string;
  short: string;
  long: string;
}

export const pillars: Pillar[] = [
  {
    title: "Community",
    icon: "Users",
    short: "Creating opportunities for people to exchange, share, and connect through fashion.",
    long: "We create opportunities for people to exchange, share, and connect through fashion — clothing swaps at schools, pop-up events, and community meetups.",
  },
  {
    title: "Culture",
    icon: "Sparkles",
    short: "Making sustainable fashion exciting, creative, and desirable.",
    long: "We make sustainable fashion exciting, creative, and desirable — through showcases, styling events, and thrifted fashion features.",
  },
  {
    title: "Education",
    icon: "BookOpen",
    short: "Providing resources and content that encourage more informed fashion choices.",
    long: "We provide resources and content that encourage more informed fashion choices — blog posts, social campaigns, and educational partnerships.",
  },
  {
    title: "Access",
    icon: "Unlock",
    short: "Removing barriers to sustainable fashion through affordable and shared alternatives.",
    long: "We remove barriers to sustainable fashion through affordable and shared alternatives — swaps, giveaways, and access to sustainable brands.",
  },
];

export interface FeatureBlock {
  title: string;
  description: string;
  icon: string;
  ctaLabel: string;
  ctaHref: string;
}

/** "What We Do" home section — experiences people actually want. */
export const whatWeDo: FeatureBlock[] = [
  {
    title: "Clothing Swaps",
    icon: "Recycle",
    description:
      "Bring gently-used items, leave with something new to you. Our swaps give clothes a second life and build community around sustainability.",
    ctaLabel: "See upcoming events",
    ctaHref: "/events",
  },
  {
    title: "Fashion Showcases",
    icon: "Shirt",
    description:
      "Fashion shows featuring thrifted, borrowed, swapped, and upcycled outfits — proof that sustainability and style can coexist.",
    ctaLabel: "See upcoming events",
    ctaHref: "/events",
  },
  {
    title: "Pop-up Experiences",
    icon: "Store",
    description:
      "Community clothing swap stands and brand-spotlight collaborations that meet people where they already are.",
    ctaLabel: "See upcoming events",
    ctaHref: "/events",
  },
];

/** Home "Feature Blocks" adapted from the old homepage. */
export const homeFeatureBlocks: FeatureBlock[] = [
  {
    title: "The True Cost of Clothing",
    icon: "Receipt",
    description:
      "Fashion is one of the most polluting industries on Earth. We break down what's really behind the tag — from carbon emissions to garment worker conditions — so you can shop with clear eyes.",
    ctaLabel: "Read the blog",
    ctaHref: "/blog",
  },
  {
    title: "Reuse, Recycle, Repurpose",
    icon: "Recycle",
    description:
      "From Earth Day swaps to school pop-ups, our events give clothes a second life and build community around sustainability.",
    ctaLabel: "See events",
    ctaHref: "/events",
  },
  {
    title: "Your View of Sustainable Fashion",
    icon: "MessageCircle",
    description:
      "Have a story, tip, or perspective on sustainable fashion? We'd love to feature you.",
    ctaLabel: "Get in touch",
    ctaHref: "/take-action",
  },
];

export interface TeamMember {
  name: string;
  title: string;
  bio: string;
  image?: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Katy Wan",
    title: "President & Founder",
    bio: "Katy founded SFI after learning the true cost of the clothes she loved. She discovered that the fashion industry is responsible for 10% of annual global carbon emissions and that many garments take hundreds of years to decompose. She started SFI to help build a more thoughtful relationship with what we wear. Outside of SFI, she enjoys digital art, crafting, and writing.",
    // TODO: Replace with real headshot at /images/team/katy-wan.jpg
  },
  {
    name: "Kavita Sarin",
    title: "Vice President",
    // TODO: Replace with real bio.
    bio: "Bio coming soon. Kavita helps guide SFI's strategy and growth as Vice President.",
  },
  {
    name: "Dan Wan",
    title: "Secretary / Legal",
    // TODO: Replace with real bio.
    bio: "Bio coming soon. Dan supports SFI's governance and legal foundation as Secretary.",
  },
  {
    name: "Cassandra McClure",
    title: "Board Advisor",
    // TODO: Replace with real bio.
    bio: "Bio coming soon. Cassandra advises the SFI board on nonprofit strategy and impact.",
  },
];

export interface Contributor {
  name: string;
  title: string;
}

export const contributors: Contributor[] = [
  { name: "Kyle Wan", title: "Contributing Writer" },
  { name: "Katelyn Wan", title: "Contributing Writer" },
];

/** Blog author bios, keyed by the frontmatter `author` name. */
export const authors: Record<string, { name: string; role: string; bio: string; image?: string }> = {
  "Katy Wan": {
    name: "Katy Wan",
    role: "President & Founder",
    bio: "Katy founded SFI to help build a more thoughtful relationship with what we wear. Outside of SFI, she enjoys digital art, crafting, and writing.",
  },
  "Kyle Wan": {
    name: "Kyle Wan",
    role: "Contributing Writer",
    bio: "Kyle writes for SFI on fashion policy, industry history, and the systems shaping how we make and discard clothing.",
  },
  "Katelyn Wan": {
    name: "Katelyn Wan",
    role: "Contributing Writer",
    bio: "Katelyn writes practical guides for SFI — from hosting clothing swaps to shopping more sustainably and talking to friends and family about fast fashion.",
  },
};

export function getAuthor(name: string) {
  return (
    authors[name] ?? {
      name,
      role: "Contributor",
      bio: "",
    }
  );
}

export interface BrandPartner {
  name: string;
  description: string;
  logo?: string;
}

export const brandPartners: BrandPartner[] = [
  {
    name: "Patagonia",
    description:
      "Patagonia has partnered with SFI to donate clothing and support giveaway opportunities at our events. Their leadership in sustainable manufacturing and circular fashion makes them a natural fit for our mission.",
    // TODO: Replace with real logo at /images/partners/patagonia.svg
  },
];

export const schoolPartners: string[] = [
  "Castilleja School",
  "The Nueva School",
  "Crystal Springs Uplands School",
  "Proof School",
  "Woodside Priory School",
];
