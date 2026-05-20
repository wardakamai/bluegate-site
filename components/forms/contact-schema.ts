import { z } from 'zod'

// Preprocess helper: treat empty string from HTML number inputs as undefined
const optionalPositiveInt = z.preprocess(
  (v) => (v === '' || v === null || v === undefined ? undefined : v),
  z.coerce.number().int().positive().optional()
)

export const contactSchema = z.object({
  name:         z.string().min(2, 'Please enter your name'),
  company:      z.string().min(2, 'Please enter your company'),
  email:        z.string().email('Please enter a valid email'),
  phone:        z.string().min(5, 'Please enter a phone number'),
  country:      z.string().min(2, 'Please enter your country'),
  product:      z.enum(
    ['jet-a1', 'diesel-en590', 'virgin-fuel-oil-d6', 'crude-oil', 'other'],
    { errorMap: () => ({ message: 'Please select a product' }) }
  ),
  capacityM3:   optionalPositiveInt,
  periodMonths: optionalPositiveInt,
  message:      z.string().min(20, 'Please add at least a sentence about your requirement'),
  intent:       z
    .enum(['quote', 'visit', 'inspection', 'hse', 'briefing', 'general'])
    .default('general'),
  website:      z.string().max(0).optional(), // honeypot — must stay empty
})

export type ContactFormData = z.infer<typeof contactSchema>
