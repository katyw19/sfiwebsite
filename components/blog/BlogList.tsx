"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { BlogCard, type PostMeta } from "./BlogCard";

const PAGE_SIZE = 6;

export function BlogList({ posts, tags }: { posts: PostMeta[]; tags: string[] }) {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered = useMemo(
    () => (activeTag ? posts.filter((p) => p.tags.includes(activeTag)) : posts),
    [posts, activeTag],
  );

  const shown = filtered.slice(0, visible);

  const selectTag = (tag: string | null) => {
    setActiveTag(tag);
    setVisible(PAGE_SIZE);
  };

  return (
    <div>
      {/* Tag filter bar */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by tag">
          <TagButton active={activeTag === null} onClick={() => selectTag(null)}>
            All
          </TagButton>
          {tags.map((tag) => (
            <TagButton key={tag} active={activeTag === tag} onClick={() => selectTag(tag)}>
              {tag}
            </TagButton>
          ))}
        </div>
      )}

      {/* Grid */}
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {shown.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>

      {visible < filtered.length && (
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={() => setVisible((v) => v + PAGE_SIZE)}
            className="rounded-md border border-eucalyptus px-6 py-3 text-base font-bold text-charcoal transition-colors hover:bg-pressed-sage/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pressed-sage focus-visible:ring-offset-2"
          >
            Load more
          </button>
        </div>
      )}
    </div>
  );
}

function TagButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-full border px-4 py-1.5 text-sm font-medium capitalize transition-colors",
        active
          ? "border-pressed-sage bg-pressed-sage text-charcoal"
          : "border-nordic-linen bg-frost-white text-iron-grey hover:border-eucalyptus hover:text-moss-oak",
      )}
    >
      {children}
    </button>
  );
}
