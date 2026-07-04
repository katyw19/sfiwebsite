"use client";

import { forwardRef, useId } from "react";
import { cn } from "@/lib/utils";

const controlBase =
  "w-full rounded-md border border-nordic-linen bg-frost-white px-3.5 py-2.5 text-base text-charcoal placeholder:text-iron-grey/60 transition-colors focus:border-eucalyptus focus:outline-none focus:ring-2 focus:ring-pressed-sage/60 disabled:opacity-60";

export const Input = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  function Input({ className, ...props }, ref) {
    return <input ref={ref} className={cn(controlBase, className)} {...props} />;
  },
);

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(function Textarea({ className, rows = 4, ...props }, ref) {
  return <textarea ref={ref} rows={rows} className={cn(controlBase, "resize-y", className)} {...props} />;
});

/**
 * Field wrapper: renders a <label> linked to its control and, when present,
 * an error message wired via aria-describedby. Pass a render function that
 * receives the generated id + describedById so the control stays associated.
 */
export function Field({
  label,
  error,
  required = false,
  hint,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  hint?: string;
  children: (props: { id: string; "aria-describedby"?: string; "aria-invalid"?: boolean }) => React.ReactNode;
}) {
  const id = useId();
  const errorId = `${id}-error`;
  const hintId = `${id}-hint`;
  const describedBy = [error ? errorId : null, hint ? hintId : null].filter(Boolean).join(" ") || undefined;

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-charcoal">
        {label}
        {required && (
          <span className="text-ash-wood" aria-hidden="true">
            {" "}
            *
          </span>
        )}
      </label>
      {hint && (
        <p id={hintId} className="text-xs text-iron-grey">
          {hint}
        </p>
      )}
      {children({ id, "aria-describedby": describedBy, "aria-invalid": error ? true : undefined })}
      {error && (
        <p id={errorId} className="text-sm text-ash-wood" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
