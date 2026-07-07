import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { readingTime as computeReadingTime } from "./utils";
import { resolvePublicImage } from "./images";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  image?: string;
  tags: string[];
  readingTime: string;
  content: string;
}

/** Read + parse every .mdx file in content/blog. */
function readAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
      const { data, content } = matter(raw);
      const slug = (data.slug as string) ?? file.replace(/\.mdx$/, "");

      return {
        slug,
        title: data.title ?? slug,
        date: data.date ?? "1970-01-01",
        author: data.author ?? "SFI",
        excerpt: data.excerpt ?? "",
        image: resolvePublicImage(data.image),
        tags: Array.isArray(data.tags) ? data.tags : [],
        readingTime: data.readingTime ?? computeReadingTime(content),
        content,
      } satisfies BlogPost;
    });
}

/** All posts, newest first. */
export function getAllPosts(): BlogPost[] {
  return readAllPosts().sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return readAllPosts().find((post) => post.slug === slug);
}

export function getAllPostSlugs(): string[] {
  return readAllPosts().map((post) => post.slug);
}

/** Up to `limit` posts sharing at least one tag, falling back to most recent. */
export function getRelatedPosts(slug: string, limit = 2): BlogPost[] {
  const all = getAllPosts();
  const current = all.find((p) => p.slug === slug);
  if (!current) return all.slice(0, limit);

  const scored = all
    .filter((p) => p.slug !== slug)
    .map((p) => ({
      post: p,
      shared: p.tags.filter((t) => current.tags.includes(t)).length,
    }))
    .sort((a, b) => b.shared - a.shared || (a.post.date < b.post.date ? 1 : -1));

  return scored.slice(0, limit).map((s) => s.post);
}

/** Unique tag list across all posts, alphabetised. */
export function getAllTags(): string[] {
  const set = new Set<string>();
  getAllPosts().forEach((p) => p.tags.forEach((t) => set.add(t)));
  return [...set].sort();
}
