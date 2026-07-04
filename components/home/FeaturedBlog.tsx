import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BlogCard } from "@/components/blog/BlogCard";
import { Icon } from "@/components/ui/icons";
import { getAllPosts } from "@/lib/mdx";

export function FeaturedBlog() {
  const posts = getAllPosts().slice(0, 3);
  if (posts.length === 0) return null;

  return (
    <Section bg="frost">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="From the Blog"
          title="Read, learn, rethink"
          description="Guides, industry insights, and event recaps from the SFI community."
        />
        <Link
          href="/blog"
          className="inline-flex shrink-0 items-center gap-1.5 font-medium text-pine-smoke underline underline-offset-4 transition-colors hover:text-moss-oak"
        >
          View all posts
          <Icon name="ArrowRight" className="h-4 w-4" />
        </Link>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </Section>
  );
}
