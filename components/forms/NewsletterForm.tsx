"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { subscribeNewsletter } from "@/app/actions";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/icons";

type FormValues = { email: string; firstName?: string };

/**
 * Newsletter signup. `tone="dark"` styles it for the moss-oak footer band;
 * `tone="light"` for linen backgrounds. Success shows an inline confirmation
 * with no page redirect (per spec).
 */
export function NewsletterForm({
  tone = "light",
  withName = false,
  className,
}: {
  tone?: "dark" | "light";
  withName?: boolean;
  className?: string;
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();
  const [result, setResult] = useState<{ ok: boolean; message: string } | null>(null);

  const dark = tone === "dark";

  const onSubmit = async (values: FormValues) => {
    const res = await subscribeNewsletter(values);
    setResult(res);
    if (res.ok) reset();
  };

  if (result?.ok) {
    return (
      <p
        className={cn(
          "flex items-center gap-2 text-sm font-medium",
          dark ? "text-frost-white" : "text-moss-oak",
          className,
        )}
        role="status"
      >
        <Icon name="Check" className="h-4 w-4" />
        {result.message}
      </p>
    );
  }

  const inputCls = cn(
    "w-full rounded-md border px-3.5 py-2.5 text-base transition-colors focus:outline-none focus:ring-2 focus:ring-pressed-sage/70",
    dark
      ? "border-frost-white/30 bg-frost-white/10 text-frost-white placeholder:text-frost-white/60"
      : "border-nordic-linen bg-frost-white text-charcoal placeholder:text-iron-grey/60",
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn("flex flex-col gap-2", className)} noValidate>
      <div className="flex flex-col gap-2 sm:flex-row">
        {withName && (
          <label className="sr-only" htmlFor="newsletter-firstname">
            First name
          </label>
        )}
        {withName && (
          <input
            id="newsletter-firstname"
            type="text"
            placeholder="First name"
            className={cn(inputCls, "sm:max-w-[9rem]")}
            {...register("firstName")}
          />
        )}
        <label className="sr-only" htmlFor="newsletter-email">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="your@email.com"
          aria-invalid={errors.email ? true : undefined}
          className={inputCls}
          {...register("email", {
            required: "Email is required.",
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email." },
          })}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            "shrink-0 rounded-md px-5 py-2.5 text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pressed-sage focus-visible:ring-offset-2 disabled:opacity-60",
            dark
              ? "bg-frost-white text-moss-oak hover:bg-oat-milk focus-visible:ring-offset-moss-oak"
              : "bg-pressed-sage text-charcoal hover:bg-eucalyptus",
          )}
        >
          {isSubmitting ? "…" : "Subscribe"}
        </button>
      </div>
      {(errors.email || result?.ok === false) && (
        <p className={cn("text-sm", dark ? "text-ash-wood" : "text-ash-wood")} role="alert">
          {errors.email?.message ?? result?.message}
        </p>
      )}
    </form>
  );
}
