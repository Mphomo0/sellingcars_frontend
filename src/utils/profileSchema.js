import { z } from 'zod'

const schema = z
  .object({
    name: z.string().min(3, { message: 'Name is required' }),
    email: z.string().email({ message: 'Invalid email address' }),
    password: z.string().min(3, { message: 'password is required' }),
  })
  .required()

export default schema
