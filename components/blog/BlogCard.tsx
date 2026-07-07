import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Icon } from "@/components/ui/icons";
import { formatDate, truncate } from "@/lib/utils";
import type { BlogPost } from "@/lib/mdx";

/** Card only needs metadata, not the full MDX body. */
export type PostMeta = Omit<BlogPost, "content">;

export function BlogCard({ post }: { post: PostMeta }) {
  return (
    <Card as="article" padding="none" className="flex flex-col" hover>
      <Link href={`/blog/${post.slug}`} className="group flex flex-1 flex-col" aria-label={post.title}>
        {post.image ? (
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
        ) : (
          <PlaceholderImage
            seed={post.slug}
            icon={post.tags[0] === "guides" ? "BookOpen" : "Leaf"}
            className="h-48 w-full rounded-none"
            rounded={false}
          />
        )}
        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-center gap-2 text-xs text-iron-grey">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span aria-hidden="true">·</span>
            <span>{post.readingTime}</span>
          </div>
          <h3 className="mt-2 font-serif text-xl leading-snug text-charcoal transition-colors group-hover:text-moss-oak">
            {post.title}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-iron-grey">
            {truncate(post.excerpt, 150)}
          </p>
          <div className="mt-4 flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-pine-smoke">
              Read more
              <Icon name="ArrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </span>
            {post.tags[0] && <Badge>{post.tags[0]}</Badge>}
          </div>
        </div>
      </Link>
    </Card>
  );
}
