import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

/** MDX element overrides — internal links use next/link, external open safely. */
const components = {
  a: ({ href = "", children, ...props }: ComponentPropsWithoutRef<"a">) => {
    if (href.startsWith("/") || href.startsWith("#")) {
      return (
        <Link href={href} {...props}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  },
};

/** Render an MDX source string to styled JSX (server component). */
export async function MDX({ source }: { source: string }) {
  const { content } = await compileMDX({
    source,
    components,
    options: {
      mdxOptions: { remarkPlugins: [remarkGfm] },
    },
  });
  return content;
}
