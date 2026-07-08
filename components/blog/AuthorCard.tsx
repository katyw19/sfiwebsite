import { Avatar } from "@/components/team/Avatar";
import { getAuthor } from "@/lib/content";
import { resolvePublicImage } from "@/lib/images";

/** Author byline card shown at the foot of a blog post. */
export function AuthorCard({ name }: { name: string }) {
  const author = getAuthor(name);
  // Show the real headshot when the file exists; otherwise fall back to initials.
  const src = resolvePublicImage(author.image);

  return (
    <div className="flex items-start gap-4 rounded-lg border border-nordic-linen bg-oat-milk/50 p-6">
      <Avatar name={author.name} src={src} sizePx={56} />
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
