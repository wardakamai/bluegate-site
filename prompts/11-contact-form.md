# Prompt 11 — Contact Page and Form Handler

Read `CLAUDE.md` §6.11. Build `/contact` with a robust form that handles intent prefill, validates with Zod, and emails via Resend.

## Tasks

### 1. Page — `app/(marketing)/contact/page.tsx`

Two-column layout on desktop, stacked on mobile.

**Left column (60% width):**

- Section label: `CONTACT`
- H1: `Speak to the` italic `Operations Desk.`
- Sub-deck (~30 words): briefing on 24-hour response commitment.
- `<ContactForm />` component.

**Right column (40% width):**

- Section label: `DETAILS`
- Operations email + phone (clickable)
- Commercial email block (if different) — `// TODO: confirm with client`
- HSE email block — `// TODO: confirm with client`
- Inspection / Laboratory email — `// TODO: confirm with client`
- Office hours block
- Emergency 24/7 number (use main phone with `Emergency 24/7` label for now)
- WhatsApp link (`site.contact.whatsapp`)
- Map embed below the contact blocks (reuse `MapEmbed.tsx` from prompt 07)

### 2. Form — `components/forms/ContactForm.tsx`

Use React Hook Form + Zod. Fields:

```ts
import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  company: z.string().min(2, 'Please enter your company'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(5, 'Please enter a phone number'),
  country: z.string().min(2, 'Please enter your country'),
  product: z.enum(['jet-a1', 'diesel-en590', 'virgin-fuel-oil-d6', 'crude-oil', 'other']),
  capacityM3: z.coerce.number().int().positive().optional(),
  periodMonths: z.coerce.number().int().positive().optional(),
  message: z.string().min(20, 'Please add at least a sentence about your requirement'),
  intent: z.enum(['quote', 'visit', 'inspection', 'hse', 'briefing', 'general']).default('general'),
  // honeypot
  website: z.string().max(0).optional(), // bot trap, must stay empty
});
```

UI requirements:

- Use shadcn `Form`, `Input`, `Textarea`, `Select`, `Label`
- Group fields in pairs where appropriate (Name + Company; Email + Phone; Country + Product; Capacity + Period)
- Honeypot field hidden via CSS (not `display: none`; offscreen positioning is fine — must remain in DOM)
- Submit button: `Send Enquiry →`, disabled while submitting, shows spinner
- After submit: render a success card replacing the form (`We've received your enquiry — we'll reply within 24 hours.`)
- On error: show inline field errors and a top-of-form alert
- Read `?intent=` from `useSearchParams` and:
  - Prefill the intent field
  - Prefill the product field if `?product=<slug>` is present
  - Show a contextual intro line above the form (e.g. for `intent=quote`: "Tell us about your storage requirement — we'll prepare a tailored capacity proposal.")
- ARIA: every input has a label and `aria-describedby` for its error message; the form has `aria-labelledby` referencing the H1

### 3. API route — `app/api/contact/route.ts`

```ts
import { Resend } from 'resend';
import { contactSchema } from '@/components/forms/contact-schema';

export async function POST(req: Request) {
  const json = await req.json();
  const parsed = contactSchema.safeParse(json);
  if (!parsed.success) return Response.json({ error: parsed.error.flatten() }, { status: 400 });
  if (parsed.data.website) return Response.json({ ok: true }, { status: 200 }); // honeypot tripped — silently accept

  const resend = new Resend(process.env.RESEND_API_KEY);
  await resend.emails.send({
    from: 'Blue Gate Website <noreply@bluegou.com>',
    to: process.env.CONTACT_EMAIL ?? 'storage@bluegou.com',
    replyTo: parsed.data.email,
    subject: `[Web — ${parsed.data.intent}] ${parsed.data.name} · ${parsed.data.company}`,
    text: buildEmailBody(parsed.data),
  });

  return Response.json({ ok: true });
}
```

- Include a `buildEmailBody()` helper that produces a clean, plain-text formatted email with all fields.
- Add basic rate limiting: track IPs in a Map with a 5-request-per-15-minutes cap. Note in comments that for production this should be replaced with Upstash Redis or Vercel KV.
- Add `// TODO: configure verified sender domain bluegou.com in Resend dashboard before going live`.

### 4. Move contact-schema to its own file

Place `contactSchema` in `components/forms/contact-schema.ts` so both the client form and the API route import from the same source. **This is the single source of truth for form validation.**

### 5. Success and error states

- Success: replace form with a card containing checkmark icon + the success message + `Return to home →` link
- Error: show inline errors per field + a top alert: `Something went wrong — please email storage@bluegou.com directly.`

### 6. SEO metadata

- Title: `Contact — Blue Gate Shipping & Trade`
- Description: `Speak to our operations desk for storage allocation, tariffs, and site visits. 24-hour response.`

### 7. Documentation

Add a short section to the project `README.md`:

- How to set `RESEND_API_KEY` and `CONTACT_EMAIL` in Vercel env vars
- Note on verified domain setup in Resend
- Note on rate limiting upgrade path

## Verification

- [ ] `/contact` renders with form left, details right on desktop; stacked on mobile
- [ ] `/contact?intent=quote` prefills intent and shows the quote-specific intro line
- [ ] `/contact?intent=visit` prefills correctly
- [ ] `/contact?intent=quote&product=jet-a1` prefills both intent and product
- [ ] Submitting an empty form shows field-level Zod errors
- [ ] Submitting a valid form (with a real `RESEND_API_KEY` in `.env.local`) sends an email to the configured address
- [ ] Honeypot: a script that fills the `website` hidden field should be silently accepted but no email sent
- [ ] Rate limit triggers after 5 submissions from the same IP in 15 minutes
- [ ] Lighthouse mobile ≥ 90
- [ ] WCAG keyboard test: tab through the form, focus rings visible on every field

Commit as `feat: contact page with validated form and resend handler`. Await prompt 12.
