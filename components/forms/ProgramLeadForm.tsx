"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { submitProgramLead } from "@/app/actions";
import { Field, Input, Textarea } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import { FormSuccess } from "./FormSuccess";

type Values = {
  name: string;
  email: string;
  organization: string;
  role?: string;
  motivation: string;
  availability?: string;
};

export function ProgramLeadForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Values>();
  const [result, setResult] = useState<{ ok: boolean; message: string } | null>(null);

  const onSubmit = async (values: Values) => setResult(await submitProgramLead(values));

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
        <Field label="School / organization" required error={errors.organization?.message}>
          {(p) => <Input {...p} {...register("organization", { required: "This field is required." })} />}
        </Field>
        <Field label="Grade or role" hint="Optional">
          {(p) => <Input placeholder="e.g. 11th grade, club president" {...p} {...register("role")} />}
        </Field>
      </div>

      <Field label="Why do you want to join?" required error={errors.motivation?.message}>
        {(p) => (
          <Textarea
            placeholder="Tell us a little about what draws you to SFI"
            {...p}
            {...register("motivation", { required: "Please tell us why you'd like to join." })}
          />
        )}
      </Field>

      <Field label="Availability" hint="Optional — e.g. a few hours a week">
        {(p) => <Input {...p} {...register("availability")} />}
      </Field>

      {result && !result.ok && (
        <p className="text-sm text-ash-wood" role="alert">
          {result.message}
        </p>
      )}

      <Button type="submit" disabled={isSubmitting} size="lg">
        {isSubmitting ? "Sending…" : "Apply to Lead"}
      </Button>
    </form>
  );
}
