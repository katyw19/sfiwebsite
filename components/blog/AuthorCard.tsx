import { getAuthor } from "@/lib/content";

function initials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
}

/** Author byline card shown at the foot of a blog post. */
export function AuthorCard({ name }: { name: string }) {
  const author = getAuthor(name);

  return (
    <div className="flex items-start gap-4 rounded-lg border border-nordic-linen bg-oat-milk/50 p-6">
      {/* TODO: Replace with real author headshot */}
      <div
        aria-hidden="true"
        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-pressed-sage to-eucalyptus font-serif text-lg text-frost-white"
      >
        {initials(author.name)}
      </div>
      <div>
        <p className="font-serif text-lg text-charcoal">{author.name}</p>
        <p className="text-sm font-medium uppercase tracking-eyebrow text-eucalyptus">
          {author.role}
        </p>
        {author.bio && <p className="mt-2 text-sm leading-relaxed text-iron-grey">{author.bio}</p>}
      </div>
    </div>
  );
}
