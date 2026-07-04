import { cn } from "@/lib/utils";
import { ThreadLine } from "./ThreadLine";

/**
 * Section heading with an eyebrow, a serif title, and the thread-line vertical
 * accent bar the spec calls for next to section headings.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as: Tag = "h2",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  const centered = align === "center";
  return (
    <div className={cn("flex flex-col gap-3", centered && "items-center text-center", className)}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <div className={cn("flex items-stretch gap-4", centered && "justify-center")}>
        {!centered && <ThreadLine orientation="vertical" className="shrink-0" />}
        <Tag className="font-serif text-3xl leading-tight md:text-4xl">{title}</Tag>
      </div>
      {description && (
        <p className={cn("max-w-2xl text-lg text-iron-grey", centered && "mx-auto")}>{description}</p>
      )}
    </div>
  );
}
