"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { submitSwapRequest } from "@/app/actions";
import { Field, Input, Textarea } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import { FormSuccess } from "./FormSuccess";

type Values = {
  name: string;
  email: string;
  organization: string;
  location: string;
  dateRange?: string;
  attendees?: string;
  message?: string;
};

export function SwapRequestForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Values>();
  const [result, setResult] = useState<{ ok: boolean; message: string } | null>(null);

  const onSubmit = async (values: Values) => setResult(await submitSwapRequest(values));

  if (result?.ok) return <FormSuccess message={result.message} />;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Name" required error={errors.name?.message}>
          {(p) => <Input autoComplete="name" {...p} {...register("name", { required: "Name is required." })} />}
        </Field>
        <Field label="Email" required error={errors.email?.message}>
          {(p) => (
            <Input
              type="email"
              autoComplete="email"
              {...p}
              {...register("email", {
                required: "Email is required.",
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email." },
              })}
            />
          )}
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Organization / school" required error={errors.organization?.message}>
          {(p) => <Input {...p} {...register("organization", { required: "This field is required." })} />}
        </Field>
        <Field label="Location" required error={errors.location?.message}>
          {(p) => (
            <Input placeholder="City, state" {...p} {...register("location", { required: "Location is required." })} />
          )}
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Preferred date range" hint="Optional">
          {(p) => <Input placeholder="e.g. late April 2026" {...p} {...register("dateRange")} />}
        </Field>
        <Field label="Estimated attendees" hint="Optional">
          {(p) => <Input type="number" min={1} {...p} {...register("attendees")} />}
        </Field>
      </div>

      <Field label="Message" hint="Anything else we should know?">
        {(p) => <Textarea {...p} {...register("message")} />}
      </Field>

      {result && !result.ok && (
        <p className="text-sm text-ash-wood" role="alert">
          {result.message}
        </p>
      )}

      <Button type="submit" disabled={isSubmitting} size="lg">
        {isSubmitting ? "Sending…" : "Request a Swap"}
      </Button>
    </form>
  );
}
