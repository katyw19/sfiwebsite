import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { getAllPosts } from "@/lib/mdx";
import { getAllEvents } from "@/lib/events";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  const staticRoutes = [
    "",
    "/about/mission",
    "/about/team",
    "/about/partners",
    "/events",
    "/blog",
    "/take-action",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date("2026-07-04"),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const postRoutes = getAllPosts().map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  const eventRoutes = getAllEvents().map((event) => ({
    url: `${base}/events/${event.slug}`,
    lastModified: new Date(event.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...postRoutes, ...eventRoutes];
}
