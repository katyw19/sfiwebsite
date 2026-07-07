"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { submitBrandPartner } from "@/app/actions";
import { Field, Input, Textarea } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import { FormSuccess } from "./FormSuccess";

type Values = {
  brand: string;
  name: string;
  email: string;
  website?: string;
  interests?: string[];
  message?: string;
};

const INTERESTS = [
  "Product donations",
  "Feature / spotlight",
  "Event collaboration",
  "Sponsorship",
  "Other",
];

export function BrandPartnerForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Values>();
  const [result, setResult] = useState<{ ok: boolean; message: string } | null>(null);

  const onSubmit = async (values: Values) => {
    const res = await submitBrandPartner({ ...values, interests: values.interests ?? [] });
    setResult(res);
  };

  if (result?.ok) return <FormSuccess message={result.message} />;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Brand / company" required error={errors.brand?.message}>
          {(p) => (
            <Input
              autoComplete="organization"
              {...p}
              {...register("brand", { required: "Brand name is required." })}
            />
          )}
        </Field>
        <Field label="Your name" required error={errors.name?.message}>
          {(p) => <Input autoComplete="name" {...p} {...register("name", { required: "Name is required." })} />}
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
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
        <Field label="Website" hint="Optional">
          {(p) => <Input type="url" placeholder="https://" {...p} {...register("website")} />}
        </Field>
      </div>

      <fieldset className="flex flex-col gap-2.5">
        <legend className="text-sm font-medium text-charcoal">How would you like to partner?</legend>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {INTERESTS.map((interest) => (
            <label key={interest} className="flex items-center gap-2.5 text-sm text-iron-grey">
              <input
                type="checkbox"
                value={interest}
                className="h-4 w-4 rounded border-nordic-linen text-eucalyptus focus:ring-pressed-sage"
                {...register("interests")}
              />
              {interest}
            </label>
          ))}
        </div>
      </fieldset>

      <Field label="Message" hint="Tell us what you have in mind">
        {(p) => <Textarea {...p} {...register("message")} />}
      </Field>

      {result && !result.ok && (
        <p className="text-sm text-ash-wood" role="alert">
          {result.message}
        </p>
      )}

      <Button type="submit" disabled={isSubmitting} size="lg">
        {isSubmitting ? "Sending…" : "Send Partnership Inquiry"}
      </Button>
    </form>
  );
}
