"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { submitRSVP } from "@/app/actions";
import { Field, Input, Textarea } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import { FormSuccess } from "@/components/forms/FormSuccess";

type Values = { name: string; email: string; guests?: string; message?: string };

export function RSVPForm({ eventSlug, eventTitle }: { eventSlug: string; eventTitle: string }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Values>();
  const [result, setResult] = useState<{ ok: boolean; message: string } | null>(null);

  const onSubmit = async (values: Values) => {
    const res = await submitRSVP({ ...values, eventSlug, eventTitle });
    setResult(res);
  };

  if (result?.ok) return <FormSuccess message={result.message} />;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>
      <Field label="Name" required error={errors.name?.message}>
        {(p) => (
          <Input autoComplete="name" placeholder="Your name" {...p} {...register("name", { required: "Name is required." })} />
        )}
      </Field>
      <Field label="Email" required error={errors.email?.message}>
        {(p) => (
          <Input
            type="email"
            autoComplete="email"
            placeholder="your@email.com"
            {...p}
            {...register("email", {
              required: "Email is required.",
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email." },
            })}
          />
        )}
      </Field>
      <Field label="Number of guests" hint="Including yourself" error={errors.guests?.message}>
        {(p) => (
          <Input
            type="number"
            min={1}
            max={20}
            defaultValue={1}
            {...p}
            {...register("guests")}
          />
        )}
      </Field>
      <Field label="Message" hint="Optional — anything we should know?">
        {(p) => <Textarea placeholder="Optional message" {...p} {...register("message")} />}
      </Field>

      {result && !result.ok && (
        <p className="text-sm text-ash-wood" role="alert">
          {result.message}
        </p>
      )}

      <Button type="submit" disabled={isSubmitting} size="lg">
        {isSubmitting ? "Sending…" : "Submit RSVP"}
      </Button>
      <p className="text-xs text-iron-grey">We&apos;ll confirm your spot by email within a few days.</p>
    </form>
  );
}
