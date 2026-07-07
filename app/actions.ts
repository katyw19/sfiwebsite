"use server";

/**
 * Server actions for SFI's forms. Called directly from client components that
 * use React Hook Form for field-level validation; these re-validate on the
 * server and would deliver the submission by email + optional data store.
 *
 * TODO: Wire delivery to a real provider (Resend/Formspree for email to the
 * SFI admin inbox, and optionally Airtable/Google Sheets for storage). For now
 * submissions are validated and logged so the UI flow works end to end.
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export interface ActionResult {
  ok: boolean;
  message: string;
}

function requireFields(fields: Record<string, unknown>, required: string[]): string | null {
  for (const key of required) {
    const value = fields[key];
    if (value === undefined || value === null || String(value).trim() === "") {
      return "Please fill in all required fields.";
    }
  }
  return null;
}

async function deliver(kind: string, payload: Record<string, unknown>): Promise<void> {
  // TODO: replace with real email/data-store delivery.
  console.info(`[SFI form:${kind}]`, JSON.stringify(payload));
}

export async function subscribeNewsletter(input: {
  email: string;
  firstName?: string;
}): Promise<ActionResult> {
  if (!EMAIL_RE.test(input.email ?? "")) {
    return { ok: false, message: "Please enter a valid email address." };
  }
  await deliver("newsletter", input);
  return { ok: true, message: "Thanks — you're on the list." };
}

export async function submitVolunteer(input: {
  name: string;
  email: string;
  phone?: string;
  interests: string[];
  message?: string;
}): Promise<ActionResult> {
  const missing = requireFields(input, ["name", "email"]);
  if (missing) return { ok: false, message: missing };
  if (!EMAIL_RE.test(input.email)) {
    return { ok: false, message: "Please enter a valid email address." };
  }
  await deliver("volunteer", input);
  return { ok: true, message: "Thanks for signing up! We'll be in touch within 3–5 days." };
}

export async function submitBrandPartner(input: {
  brand: string;
  name: string;
  email: string;
  website?: string;
  interests: string[];
  message?: string;
}): Promise<ActionResult> {
  const missing = requireFields(input, ["brand", "name", "email"]);
  if (missing) return { ok: false, message: missing };
  if (!EMAIL_RE.test(input.email)) {
    return { ok: false, message: "Please enter a valid email address." };
  }
  await deliver("brand-partner", input);
  return {
    ok: true,
    message: "Thanks for reaching out! We'll be in touch within 3–5 days to explore a partnership.",
  };
}

export async function submitSwapRequest(input: {
  name: string;
  email: string;
  organization: string;
  location: string;
  dateRange?: string;
  attendees?: string;
  message?: string;
}): Promise<ActionResult> {
  const missing = requireFields(input, ["name", "email", "organization", "location"]);
  if (missing) return { ok: false, message: missing };
  if (!EMAIL_RE.test(input.email)) {
    return { ok: false, message: "Please enter a valid email address." };
  }
  await deliver("swap-request", input);
  return { ok: true, message: "Request received! We'll reach out within 3–5 days to help you plan." };
}

export async function submitProgramLead(input: {
  name: string;
  email: string;
  organization: string;
  role?: string;
  motivation: string;
  availability?: string;
}): Promise<ActionResult> {
  const missing = requireFields(input, ["name", "email", "organization", "motivation"]);
  if (missing) return { ok: false, message: missing };
  if (!EMAIL_RE.test(input.email)) {
    return { ok: false, message: "Please enter a valid email address." };
  }
  await deliver("program-lead", input);
  return { ok: true, message: "Application received! We'll follow up within 3–5 days." };
}

export async function submitRSVP(input: {
  name: string;
  email: string;
  guests?: string;
  message?: string;
  eventSlug: string;
  eventTitle: string;
}): Promise<ActionResult> {
  const missing = requireFields(input, ["name", "email"]);
  if (missing) return { ok: false, message: missing };
  if (!EMAIL_RE.test(input.email)) {
    return { ok: false, message: "Please enter a valid email address." };
  }
  await deliver("rsvp", input);
  return { ok: true, message: "You're on the list! Check your email for a confirmation." };
}
