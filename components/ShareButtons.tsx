"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/icons";

/** Copy-link + social share row for blog posts and events. */
export function ShareButtons({ path, title }: { path: string; title: string }) {
  const [copied, setCopied] = useState(false);
  const url = `${siteConfig.url}${path}`;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — no-op */
    }
  };

  const btn =
    "inline-flex items-center gap-1.5 rounded-md border border-nordic-linen bg-frost-white px-3 py-2 text-sm text-iron-grey transition-colors hover:border-eucalyptus hover:text-moss-oak";

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-sm font-medium text-charcoal">Share</span>
      <button type="button" onClick={copy} className={cn(btn)} aria-label="Copy link">
        <Icon name={copied ? "Check" : "Link2"} className="h-4 w-4" />
        {copied ? "Copied" : "Copy link"}
      </button>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className={btn}
        aria-label="Share on Facebook"
      >
        <Icon name="Facebook" className="h-4 w-4" />
      </a>
      <a
        href={`https://x.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`}
        target="_blank"
        rel="noopener noreferrer"
        className={btn}
        aria-label="Share on X"
      >
        <Icon name="Share2" className="h-4 w-4" />
      </a>
    </div>
  );
}
