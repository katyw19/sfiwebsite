import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Section } from "@/components/ui/Section";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Icon } from "@/components/ui/icons";
import { MDX } from "@/components/mdx/MDX";
import { AuthorCard } from "@/components/blog/AuthorCard";
import { BlogCard } from "@/components/blog/BlogCard";
import { ShareButtons } from "@/components/ShareButtons";
import { getAllPostSlugs, getPostBySlug, getRelatedPosts } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Post not found" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.slug, 3);

  return (
    <article>
      <Container className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-pine-smoke underline underline-offset-4 hover:text-moss-oak"
          >
            <Icon name="ChevronRight" className="h-4 w-4 rotate-180" />
            All posts
          </Link>

          {/* Title + byline first */}
          <h1 className="mt-6 font-serif text-4xl leading-tight text-charcoal md:text-[2.75rem]">
            {post.title}
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-iron-grey">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span aria-hidden="true">·</span>
            <span>{post.author}</span>
            <span aria-hidden="true">·</span>
            <span>{post.readingTime}</span>
          </div>
          {post.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} className="capitalize">
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          {/* Cover image, below the title */}
          {post.image ? (
            <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-xl border border-nordic-linen">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                sizes="(min-width: 768px) 768px, 100vw"
                className="object-cover"
              />
            </div>
          ) : (
            <PlaceholderImage
              seed={post.slug}
              icon={post.tags.includes("guides") ? "BookOpen" : "Leaf"}
              className="mt-8 aspect-[16/9] w-full"
            />
          )}

          {/* Body */}
          <div className="prose prose-sfi mt-10 max-w-none">
            <MDX source={post.content} />
          </div>

          {/* Share */}
          <div className="mt-10 border-t border-nordic-linen pt-6">
            <ShareButtons path={`/blog/${post.slug}`} title={post.title} />
          </div>

          {/* Author */}
          <div className="mt-10">
            <AuthorCard name={post.author} />
          </div>
        </div>
      </Container>

      {/* Related posts */}
      {related.length > 0 && (
        <Section bg="frost">
          <h2 className="font-serif text-2xl text-charcoal">Related posts</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {related.map((r) => (
              <BlogCard key={r.slug} post={r} />
            ))}
          </div>
        </Section>
      )}
    </article>
  );
}
