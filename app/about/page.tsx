import { redirect } from "next/navigation";

// /about is an overview entry point — redirect to the mission page.
export default function AboutIndexPage() {
  redirect("/about/mission");
}
