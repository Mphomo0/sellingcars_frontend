import { z } from 'zod'

const phoneRegex = /^(\d{3})\s(\d{3})\s(\d{4})$/

const schema = z
  .object({
    name: z.string().min(3, { message: 'Name is required' }),
    email: z.string().email({ message: 'Invalid email address' }),
    phone: z.string().regex(phoneRegex, {
      message: 'Phone number must be in the format 000 000 0000',
    }),
    comment: z.string().min(10, { message: 'Message is required' }),
  })
  .required()

export default schema
