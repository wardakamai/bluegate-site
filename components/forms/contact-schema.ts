import { z } from 'zod';

// Preprocess helper: treat empty string from HTML number inputs as undefined
const optionalPositiveInt = z.preprocess(
  (v) => (v === '' || v === null || v === undefined ? undefined : v),
  z.coerce.number().int().positive().optional(),
);

export const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  company: z.string().min(2, 'Please enter your company'),
  companyWebsite: z.string().max(200).optional(),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(5, 'Please enter a phone number'),
  country: z.string().min(2, 'Please enter your country'),
  product: z.enum(['jet-a1', 'diesel-en590', 'virgin-fuel-oil-d6', 'crude-oil', 'other'], {
    errorMap: () => ({ message: 'Please select a product' }),
  }),
  productSpec: z.string().max(200).optional(),
  quantity: optionalPositiveInt,
  unit: z.enum(['m3', 'metric-tonnes', 'barrels', 'litres']).default('m3'),
  preferredPort: z.enum(['rotterdam', 'houston', 'jurong-singapore', 'other'], {
    errorMap: () => ({ message: 'Please select a preferred port' }),
  }),
  startDate: z.string().optional(),
  periodMonths: optionalPositiveInt,
  vesselStatus: z.enum(['confirmed', 'tbc', 'not-applicable']).default('not-applicable'),
  vesselEta: z.string().optional(),
  transferRequirements: z.string().max(500).optional(),
  message: z.string().min(20, 'Please add at least a sentence about your requirement'),
  intent: z.enum(['quote', 'visit', 'inspection', 'hse', 'briefing', 'general']).default('general'),
  consent: z.literal(true, {
    errorMap: () => ({ message: 'Please confirm you agree to be contacted about this enquiry' }),
  }),
  website: z.string().max(0).optional(), // honeypot — must stay empty
});

export type ContactFormData = z.infer<typeof contactSchema>;
