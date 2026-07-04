import { Icon } from "@/components/ui/icons";

/** Shared inline success confirmation shown after a form submits. */
export function FormSuccess({ message }: { message: string }) {
  return (
    <div
      role="status"
      className="flex items-start gap-3 rounded-lg border border-pressed-sage bg-oat-milk/60 p-5"
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-pressed-sage">
        <Icon name="Check" className="h-5 w-5 text-charcoal" />
      </div>
      <div>
        <p className="font-serif text-lg text-charcoal">Thank you!</p>
        <p className="mt-1 text-sm text-iron-grey">{message}</p>
      </div>
    </div>
  );
}
