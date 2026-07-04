import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ThreadLine } from "@/components/ui/ThreadLine";
import { buttonClasses } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <span className="eyebrow">404</span>
      <h1 className="mt-4 font-serif text-4xl text-charcoal md:text-5xl">
        This page has gone thrifting.
      </h1>
      <ThreadLine className="mt-6 w-16" />
      <p className="mt-6 max-w-md text-lg text-iron-grey">
        The page you&apos;re looking for isn&apos;t here. Try heading home or browsing the blog.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className={buttonClasses({ variant: "primary", size: "lg" })}>
          Home
        </Link>
        <Link href="/blog" className={buttonClasses({ variant: "outline", size: "lg" })}>
          Blog
        </Link>
      </div>
    </Container>
  );
}
