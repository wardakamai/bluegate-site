'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { contactSchema, type ContactFormData } from './contact-schema';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const INTENT_INTRO: Partial<Record<ContactFormData['intent'], string>> = {
  quote: "Tell us about your storage requirement — we'll get back to you with next steps.",
  visit: "Request a meeting with our team — we'll arrange a call or visit as appropriate.",
  inspection:
    'Request product inspection or laboratory coordination — our team will confirm availability within 24 hours.',
  hse: 'For HSE enquiries and emergency notifications, fill in the form below or call our 24/7 line.',
  briefing: "Request a commercial briefing — we'll arrange a call with our senior operations team.",
};

const VALID_INTENTS = new Set(['quote', 'visit', 'inspection', 'hse', 'briefing', 'general']);
const VALID_PRODUCTS = new Set([
  'jet-a1',
  'diesel-en590',
  'virgin-fuel-oil-d6',
  'crude-oil',
  'other',
]);

export function ContactForm() {
  const params = useSearchParams();
  const intent = VALID_INTENTS.has(params.get('intent') ?? '')
    ? (params.get('intent') as ContactFormData['intent'])
    : ('general' as const);
  const product = VALID_PRODUCTS.has(params.get('product') ?? '')
    ? (params.get('product') as ContactFormData['product'])
    : undefined;

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      intent,
      unit: 'm3',
      vesselStatus: 'not-applicable',
      ...(product ? { product } : {}),
    },
  });

  const [done, setDone] = useState(false);
  const [serverErr, setServerErr] = useState<string | null>(null);

  async function onSubmit(data: ContactFormData) {
    setServerErr(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setDone(true);
      } else {
        setServerErr('Something went wrong — please email storage@bluegou.com directly.');
      }
    } catch {
      setServerErr('Something went wrong — please email storage@bluegou.com directly.');
    }
  }

  if (done) {
    return (
      <div
        role="status"
        className="border-ok/30 bg-ok/10 space-y-4 rounded-xl border p-10 text-center"
      >
        <CheckCircle className="text-ok mx-auto size-12" aria-hidden />
        <p className="text-ink font-serif text-2xl">Storage requirement received.</p>
        <p className="text-muted-foreground text-sm">
          We&apos;ve received your requirement for commercial and operational review — we&apos;ll
          reply within 24 hours. This does not guarantee acceptance, capacity or availability.
        </p>
        <Link
          href="/"
          className="text-brand hover:text-brand-steel inline-block text-sm transition-colors"
        >
          Return to home →
        </Link>
      </div>
    );
  }

  return (
    <form
      aria-labelledby="contact-heading"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="space-y-5"
    >
      {INTENT_INTRO[intent] && (
        <p className="border-brand text-muted-foreground border-l-2 pl-4 text-sm">
          {INTENT_INTRO[intent]}
        </p>
      )}

      {serverErr && (
        <div role="alert" className="border-alert/30 bg-alert/10 flex gap-3 rounded-lg border p-4">
          <AlertCircle className="text-alert mt-0.5 size-5 shrink-0" aria-hidden />
          <p className="text-alert text-sm">{serverErr}</p>
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field id="name" label="Full Name *" error={errors.name?.message}>
          <Input
            id="name"
            aria-describedby="name-err"
            aria-invalid={!!errors.name}
            {...register('name')}
            placeholder="Jan de Vries"
          />
        </Field>
        <Field id="company" label="Company *" error={errors.company?.message}>
          <Input
            id="company"
            aria-describedby="company-err"
            aria-invalid={!!errors.company}
            {...register('company')}
            placeholder="ACME Trading B.V."
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field id="companyWebsite" label="Company Website" error={errors.companyWebsite?.message}>
          <Input
            id="companyWebsite"
            aria-describedby="companyWebsite-err"
            {...register('companyWebsite')}
            placeholder="https://company.com"
          />
        </Field>
        <Field id="country" label="Country *" error={errors.country?.message}>
          <Input
            id="country"
            aria-describedby="country-err"
            aria-invalid={!!errors.country}
            {...register('country')}
            placeholder="Netherlands"
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field id="email" label="Business Email *" error={errors.email?.message}>
          <Input
            id="email"
            type="email"
            aria-describedby="email-err"
            aria-invalid={!!errors.email}
            {...register('email')}
            placeholder="jan@company.com"
          />
        </Field>
        <Field id="phone" label="Phone or WhatsApp *" error={errors.phone?.message}>
          <Input
            id="phone"
            type="tel"
            aria-describedby="phone-err"
            aria-invalid={!!errors.phone}
            {...register('phone')}
            placeholder="+31 6…"
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field id="product" label="Product *" error={errors.product?.message}>
          <Controller
            control={control}
            name="product"
            render={({ field }) => (
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger
                  id="product"
                  className="h-8 w-full"
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
        <Field id="productSpec" label="Product Specification" error={errors.productSpec?.message}>
          <Input
            id="productSpec"
            aria-describedby="productSpec-err"
            {...register('productSpec')}
            placeholder="e.g. EN590 10ppm"
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Field id="quantity" label="Quantity" error={errors.quantity?.message}>
          <Input
            id="quantity"
            type="number"
            min={1}
            aria-describedby="quantity-err"
            aria-invalid={!!errors.quantity}
            {...register('quantity')}
            placeholder="25 000"
          />
        </Field>
        <Field id="unit" label="Unit" error={errors.unit?.message}>
          <Controller
            control={control}
            name="unit"
            render={({ field }) => (
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger id="unit" className="h-8 w-full">
                  <SelectValue placeholder="Select unit…" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="m3">m³</SelectItem>
                  <SelectItem value="metric-tonnes">Metric Tonnes</SelectItem>
                  <SelectItem value="barrels">Barrels</SelectItem>
                  <SelectItem value="litres">Litres</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
        </Field>
        <Field id="preferredPort" label="Preferred Port *" error={errors.preferredPort?.message}>
          <Controller
            control={control}
            name="preferredPort"
            render={({ field }) => (
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger
                  id="preferredPort"
                  className="h-8 w-full"
                  aria-describedby="preferredPort-err"
                  aria-invalid={!!errors.preferredPort}
                >
                  <SelectValue placeholder="Select port…" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rotterdam">Rotterdam</SelectItem>
                  <SelectItem value="houston">Houston</SelectItem>
                  <SelectItem value="jurong-singapore">Jurong, Singapore</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field id="startDate" label="Requested Start Date" error={errors.startDate?.message}>
          <Input
            id="startDate"
            type="date"
            aria-describedby="startDate-err"
            {...register('startDate')}
          />
        </Field>
        <Field
          id="periodMonths"
          label="Storage Duration (months)"
          error={errors.periodMonths?.message}
        >
          <Input
            id="periodMonths"
            type="number"
            min={1}
            aria-describedby="periodMonths-err"
            aria-invalid={!!errors.periodMonths}
            {...register('periodMonths')}
            placeholder="12"
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field id="vesselStatus" label="Vessel Status" error={errors.vesselStatus?.message}>
          <Controller
            control={control}
            name="vesselStatus"
            render={({ field }) => (
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger id="vesselStatus" className="h-8 w-full">
                  <SelectValue placeholder="Select status…" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="not-applicable">Not applicable</SelectItem>
                  <SelectItem value="tbc">To be confirmed</SelectItem>
                  <SelectItem value="confirmed">Confirmed</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
        </Field>
        <Field id="vesselEta" label="Expected Vessel Arrival" error={errors.vesselEta?.message}>
          <Input
            id="vesselEta"
            type="date"
            aria-describedby="vesselEta-err"
            {...register('vesselEta')}
          />
        </Field>
      </div>

      <input type="hidden" {...register('intent')} />

      <Field
        id="transferRequirements"
        label="Transfer or Throughput Requirements"
        error={errors.transferRequirements?.message}
      >
        <Textarea
          id="transferRequirements"
          rows={3}
          aria-describedby="transferRequirements-err"
          {...register('transferRequirements')}
          placeholder="e.g. vessel-to-tank transfer, tank-to-vessel loading, receipt and storage only…"
        />
      </Field>

      <Field id="message" label="Additional Message *" error={errors.message?.message}>
        <Textarea
          id="message"
          rows={5}
          aria-describedby="message-err"
          aria-invalid={!!errors.message}
          {...register('message')}
          placeholder="Please describe your storage requirement, product grade, and timeline…"
        />
      </Field>

      <div className="flex items-start gap-3">
        <input
          id="consent"
          type="checkbox"
          className="border-border-soft mt-1 size-4 shrink-0 rounded"
          aria-describedby="consent-err"
          aria-invalid={!!errors.consent}
          {...register('consent')}
        />
        <Label htmlFor="consent" className="text-muted-foreground text-sm font-normal">
          I agree to be contacted by Blue Gate Tank Farm about this storage requirement. *
        </Label>
      </div>
      {errors.consent && (
        <p id="consent-err" role="alert" className="text-alert text-xs">
          {errors.consent.message}
        </p>
      )}

      {/* Honeypot — kept in DOM but positioned offscreen; real users never see or fill it */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: '-9999px',
          width: '1px',
          height: '1px',
          overflow: 'hidden',
        }}
      >
        <label htmlFor="website">Leave this blank</label>
        <input id="website" tabIndex={-1} autoComplete="off" {...register('website')} />
      </div>

      <Button type="submit" disabled={isSubmitting} className="min-w-44">
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 size-4 animate-spin" aria-hidden />
            Sending…
          </>
        ) : (
          'Submit Storage Requirement →'
        )}
      </Button>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={id}>{label}</Label>
      {children}
      {error && (
        <p id={`${id}-err`} role="alert" className="text-alert text-xs">
          {error}
        </p>
      )}
    </div>
  );
}
