'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { contactSchema, type ContactFormData } from './contact-schema'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import {
  Select, SelectContent, SelectItem,
  SelectTrigger, SelectValue,
} from '@/components/ui/select'

const INTENT_INTRO: Partial<Record<ContactFormData['intent'], string>> = {
  quote:      "Tell us about your storage requirement — we'll prepare a tailored capacity proposal.",
  visit:      "Book a site visit to our Rotterdam terminal — we'll arrange a guided tour with our operations team.",
  inspection: "Request a product inspection or laboratory analysis — our team will confirm availability within 24 hours.",
  hse:        "For HSE enquiries and emergency notifications, fill in the form below or call our 24/7 line.",
  briefing:   "Request a commercial briefing — we'll arrange a call with our senior operations team.",
}

const VALID_INTENTS = new Set(['quote', 'visit', 'inspection', 'hse', 'briefing', 'general'])
const VALID_PRODUCTS = new Set(['jet-a1', 'diesel-en590', 'virgin-fuel-oil-d6', 'crude-oil', 'other'])

export function ContactForm() {
  const params = useSearchParams()
  const intent = VALID_INTENTS.has(params.get('intent') ?? '')
    ? (params.get('intent') as ContactFormData['intent'])
    : ('general' as const)
  const product = VALID_PRODUCTS.has(params.get('product') ?? '')
    ? (params.get('product') as ContactFormData['product'])
    : undefined

  const { register, handleSubmit, control, formState: { errors, isSubmitting } } =
    useForm<ContactFormData>({
      resolver: zodResolver(contactSchema),
      defaultValues: { intent, ...(product ? { product } : {}) },
    })

  const [done, setDone] = useState(false)
  const [serverErr, setServerErr] = useState<string | null>(null)

  async function onSubmit(data: ContactFormData) {
    setServerErr(null)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setDone(true)
      } else {
        setServerErr('Something went wrong — please email storage@bluegou.com directly.')
      }
    } catch {
      setServerErr('Something went wrong — please email storage@bluegou.com directly.')
    }
  }

  if (done) {
    return (
      <div role="status" className="rounded-xl border border-ok/30 bg-ok/10 p-10 text-center space-y-4">
        <CheckCircle className="mx-auto size-12 text-ok" aria-hidden />
        <p className="font-serif text-2xl text-ink">Enquiry received.</p>
        <p className="text-sm text-muted-foreground">We&apos;ve received your enquiry — we&apos;ll reply within 24 hours.</p>
        <Link href="/" className="inline-block text-sm text-brand hover:text-brand-steel transition-colors">
          Return to home →
        </Link>
      </div>
    )
  }

  return (
    <form aria-labelledby="contact-heading" onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {INTENT_INTRO[intent] && (
        <p className="border-l-2 border-brand pl-4 text-sm text-muted-foreground">{INTENT_INTRO[intent]}</p>
      )}

      {serverErr && (
        <div role="alert" className="flex gap-3 rounded-lg border border-alert/30 bg-alert/10 p-4">
          <AlertCircle className="mt-0.5 size-5 shrink-0 text-alert" aria-hidden />
          <p className="text-sm text-alert">{serverErr}</p>
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field id="name" label="Full Name *" error={errors.name?.message}>
          <Input id="name" aria-describedby="name-err" aria-invalid={!!errors.name} {...register('name')} placeholder="Jan de Vries" />
        </Field>
        <Field id="company" label="Company *" error={errors.company?.message}>
          <Input id="company" aria-describedby="company-err" aria-invalid={!!errors.company} {...register('company')} placeholder="ACME Trading B.V." />
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field id="email" label="Email *" error={errors.email?.message}>
          <Input id="email" type="email" aria-describedby="email-err" aria-invalid={!!errors.email} {...register('email')} placeholder="jan@company.com" />
        </Field>
        <Field id="phone" label="Phone *" error={errors.phone?.message}>
          <Input id="phone" type="tel" aria-describedby="phone-err" aria-invalid={!!errors.phone} {...register('phone')} placeholder="+31 6…" />
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field id="country" label="Country *" error={errors.country?.message}>
          <Input id="country" aria-describedby="country-err" aria-invalid={!!errors.country} {...register('country')} placeholder="Netherlands" />
        </Field>
        <Field id="product" label="Product *" error={errors.product?.message}>
          <Controller
            control={control}
            name="product"
            render={({ field }) => (
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger
                  id="product"
                  className="w-full h-8"
                  aria-describedby="product-err"
                  aria-invalid={!!errors.product}
                >
                  <SelectValue placeholder="Select product…" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="jet-a1">Jet A1 Fuel</SelectItem>
                  <SelectItem value="diesel-en590">Diesel EN590</SelectItem>
                  <SelectItem value="virgin-fuel-oil-d6">Virgin Fuel Oil D6</SelectItem>
                  <SelectItem value="crude-oil">Crude Oil</SelectItem>
                  <SelectItem value="other">Other / Multiple</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field id="capacityM3" label="Capacity Required (m³)" error={errors.capacityM3?.message}>
          <Input id="capacityM3" type="number" min={1} aria-describedby="capacityM3-err" aria-invalid={!!errors.capacityM3} {...register('capacityM3')} placeholder="25 000" />
        </Field>
        <Field id="periodMonths" label="Storage Period (months)" error={errors.periodMonths?.message}>
          <Input id="periodMonths" type="number" min={1} aria-describedby="periodMonths-err" aria-invalid={!!errors.periodMonths} {...register('periodMonths')} placeholder="12" />
        </Field>
      </div>

      <input type="hidden" {...register('intent')} />

      <Field id="message" label="Message *" error={errors.message?.message}>
        <Textarea
          id="message"
          rows={5}
          aria-describedby="message-err"
          aria-invalid={!!errors.message}
          {...register('message')}
          placeholder="Please describe your storage requirement, product grade, and timeline…"
        />
      </Field>

      {/* Honeypot — kept in DOM but positioned offscreen; real users never see or fill it */}
      <div
        aria-hidden="true"
        style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}
      >
        <label htmlFor="website">Leave this blank</label>
        <input id="website" tabIndex={-1} autoComplete="off" {...register('website')} />
      </div>

      <Button type="submit" disabled={isSubmitting} className="min-w-44">
        {isSubmitting
          ? <><Loader2 className="mr-2 size-4 animate-spin" aria-hidden />Sending…</>
          : 'Send Enquiry →'}
      </Button>
    </form>
  )
}

function Field({
  id, label, error, children,
}: {
  id: string
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={id}>{label}</Label>
      {children}
      {error && (
        <p id={`${id}-err`} role="alert" className="text-xs text-alert">
          {error}
        </p>
      )}
    </div>
  )
}
