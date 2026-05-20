import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(2),
  company: z.string().optional(),
  email: z.string().email(),
  phone: z.string().optional(),
  intent: z.enum(['quote', 'visit', 'general']).default('general'),
  message: z.string().min(10),
});

export async function POST(request: NextRequest) {
  const body: unknown = await request.json();
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }

  const { name, company, email, phone, intent, message } = parsed.data;
  const to = process.env.CONTACT_EMAIL ?? 'storage@bluegou.com';

  try {
    await resend.emails.send({
      from: 'Blue Gate Website <noreply@bluegou.com>',
      to,
      replyTo: email,
      subject: `[${intent.toUpperCase()}] New enquiry from ${name}`,
      text: [
        `Name: ${name}`,
        company ? `Company: ${company}` : '',
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : '',
        `Intent: ${intent}`,
        '',
        message,
      ]
        .filter(Boolean)
        .join('\n'),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
