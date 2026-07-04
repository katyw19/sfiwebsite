import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { BlogList } from "@/components/blog/BlogList";
import { getAllPosts, getAllTags } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Educational content about sustainable fashion, event recaps, and industry insights from the SFI community.",
};

export default function BlogPage() {
  // Strip the MDX body so the client list payload stays small.
  const posts = getAllPosts().map(({ content, ...meta }) => meta);
  const tags = getAllTags();

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Read, learn, rethink."
        intro="Guides, industry insights, and event recaps — everything we're learning about building a more thoughtful relationship with what we wear."
      />
      <Section bg="frost">
        <BlogList posts={posts} tags={tags} />
      </Section>
    </>
  );
}
