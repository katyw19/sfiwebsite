"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { mainNav } from "@/lib/site";
import { buttonClasses } from "@/components/ui/Button";
import { ThreadLine } from "@/components/ui/ThreadLine";
import { Icon } from "@/components/ui/icons";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Nav items rendered as text links (Take Action is a CTA button, handled separately)
  const linkItems = mainNav.filter((item) => item.label !== "Take Action");

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-pressed-sage bg-warm-linen/80 transition-shadow",
        scrolled && "shadow-[0_1px_16px_rgba(58,63,59,0.06)] backdrop-blur-md",
      )}
    >
      <nav aria-label="Primary" className="container-sfi flex h-16 items-center justify-between gap-4">
        {/* Logo lockup */}
        <Link href="/" className="flex items-center gap-2.5" aria-label="Sustainable Fashion Initiative — home">
          <span className="font-serif text-2xl leading-none text-charcoal">SFI</span>
          <ThreadLine orientation="vertical" className="hidden h-6 sm:block" />
          <span className="hidden text-[0.7rem] font-medium uppercase tracking-eyebrow text-eucalyptus sm:block">
            Sustainable Fashion Initiative
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {linkItems.map((item, i) => (
            <li key={item.href} className="flex items-center">
              {i > 0 && <ThreadLine orientation="vertical" className="mr-1 h-3.5 opacity-60" />}
              {item.children ? (
                <div className="group relative">
                  <Link
                    href={item.href}
                    className={cn(
                      "inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-iron-grey transition-colors hover:text-moss-oak",
                      isActive(item.href) && "text-moss-oak",
                    )}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <Icon name="ChevronDown" className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                  </Link>
                  <div className="invisible absolute left-0 top-full w-52 translate-y-1 pt-2 opacity-0 transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    <ul className="overflow-hidden rounded-lg border border-nordic-linen bg-frost-white py-1.5 shadow-[0_8px_30px_rgba(58,63,59,0.1)]">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className={cn(
                              "block px-4 py-2 text-sm text-iron-grey transition-colors hover:bg-oat-milk hover:text-moss-oak",
                              pathname === child.href && "text-moss-oak",
                            )}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-medium text-iron-grey transition-colors hover:text-moss-oak",
                    isActive(item.href) && "text-moss-oak",
                  )}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
          <li className="ml-2">
            <Link href="/take-action" className={buttonClasses({ variant: "primary", size: "sm" })}>
              Take Action
            </Link>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-charcoal transition-colors hover:bg-oat-milk md:hidden"
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(true)}
        >
          <Icon name="Menu" className="h-6 w-6" />
        </button>
      </nav>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
