import fs from "node:fs";
import path from "node:path";

/** Server-only helper: does a /public-relative image path point to a real file? */
export function publicImageExists(p?: string): boolean {
  if (!p || !p.startsWith("/")) return false;
  return fs.existsSync(path.join(process.cwd(), "public", p));
}

/** Return the path if the file exists, otherwise undefined (so callers fall back). */
export function resolvePublicImage(p?: string): string | undefined {
  return publicImageExists(p) ? p : undefined;
}
