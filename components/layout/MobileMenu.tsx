"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { mainNav } from "@/lib/site";
import { buttonClasses } from "@/components/ui/Button";
import { Icon } from "@/components/ui/icons";

/** Slide-out drawer navigation for mobile (below md). */
export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const pathname = usePathname();
  const closeRef = useRef<HTMLButtonElement>(null);

  // Close on route change
  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Escape to close + body scroll lock + focus the close button when opened
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  const linkItems = mainNav.filter((item) => item.label !== "Take Action");

  return (
    <div
      className={cn("fixed inset-0 z-50 md:hidden", open ? "pointer-events-auto" : "pointer-events-none")}
      aria-hidden={!open}
    >
      {/* Overlay */}
      <div
        className={cn(
          "absolute inset-0 bg-charcoal/40 transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0",
        )}
        onClick={onClose}
      />

      {/* Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={cn(
          "absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col border-l border-pressed-sage bg-warm-linen shadow-2xl transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex h-16 items-center justify-between border-b border-pressed-sage px-6">
          <span className="font-serif text-xl text-charcoal">SFI</span>
          <button
            ref={closeRef}
            type="button"
            className="rounded-md p-2 text-charcoal transition-colors hover:bg-oat-milk"
            aria-label="Close menu"
            onClick={onClose}
          >
            <Icon name="X" className="h-6 w-6" />
          </button>
        </div>

        <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-4 py-6">
          <ul className="flex flex-col gap-1">
            {linkItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    "block rounded-md px-3 py-2.5 text-lg font-medium text-charcoal transition-colors hover:bg-oat-milk",
                    (item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)) &&
                      "text-moss-oak",
                  )}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="ml-3 mt-1 flex flex-col gap-0.5 border-l border-pressed-sage pl-3">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          onClick={onClose}
                          className={cn(
                            "block rounded-md px-3 py-2 text-base text-iron-grey transition-colors hover:bg-oat-milk hover:text-moss-oak",
                            pathname === child.href && "text-moss-oak",
                          )}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-pressed-sage p-4">
          <Link
            href="/take-action"
            onClick={onClose}
            className={buttonClasses({ variant: "primary", size: "md", className: "w-full" })}
          >
            Take Action
          </Link>
        </div>
      </div>
    </div>
  );
}
