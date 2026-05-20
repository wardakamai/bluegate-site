import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { contactSchema, type ContactFormData } from '@/components/forms/contact-schema'

// TODO: configure verified sender domain bluegou.com in Resend dashboard before going live
// https://resend.com/docs/dashboard/domains/introduction

// In-memory rate limit: 5 requests per IP per 15-minute window.
// Replace with Upstash Redis or Vercel KV for production multi-instance deployments.
const rateLimitStore = new Map<string, { count: number; resetAt: number }>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const windowMs = 15 * 60 * 1000
  const entry = rateLimitStore.get(ip)
  if (!entry || now > entry.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + windowMs })
    return true
  }
  if (entry.count >= 5) return false
  entry.count++
  return true
}

function buildEmailBody(d: ContactFormData): string {
  return [
    `Name:     ${d.name}`,
    `Company:  ${d.company}`,
    `Email:    ${d.email}`,
    `Phone:    ${d.phone}`,
    `Country:  ${d.country}`,
    `Product:  ${d.product}`,
    d.capacityM3   ? `Capacity: ${d.capacityM3.toLocaleString()} m³` : null,
    d.periodMonths ? `Period:   ${d.periodMonths} months`             : null,
    `Intent:   ${d.intent}`,
    '',
    '─── Message ───────────────────────────',
    d.message,
  ]
    .filter((l): l is string => l !== null)
    .join('\n')
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
    ?? req.headers.get('x-real-ip')
    ?? 'unknown'

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: 'Too many requests — please try again in 15 minutes.' },
      { status: 429 }
    )
  }

  let json: unknown
  try {
    json = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const parsed = contactSchema.safeParse(json)
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 })
  }

  // Honeypot: silently accept but do not send email
  if (parsed.data.website) {
    return NextResponse.json({ ok: true })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)
  const to = process.env.CONTACT_EMAIL ?? 'storage@bluegou.com'

  try {
    await resend.emails.send({
      from: 'Blue Gate Website <noreply@bluegou.com>',
      to,
      replyTo: parsed.data.email,
      subject: `[Web — ${parsed.data.intent}] ${parsed.data.name} · ${parsed.data.company}`,
      text: buildEmailBody(parsed.data),
    })
  } catch (err) {
    console.error('[contact] Resend error:', err)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
