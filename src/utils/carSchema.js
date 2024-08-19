import { z } from 'zod'

const schema = z
  .object({
    name: z.string().min(3, { message: 'Name is required' }),
    make: z.string().min(3, { message: 'Make is required' }),
    model: z.string().min(3, { message: 'Model is required' }),
    year: z
      .number({ invalid_type_error: 'Year must be a number' })
      .int({ message: 'Year must be an integer' })
      .min(1986, { message: 'Year must be later than 1985' })
      .max(new Date().getFullYear(), {
        message: `Year can't be in the future`,
      }),
    fuelType: z.string().min(3, { message: 'Fuel Type is required' }),
    transmission: z.string().min(3, { message: 'Transmission is required' }),
    mileage: z
      .number({ invalid_type_error: 'Mileage must be a number' })
      .min(0, { message: 'Mileage must be a positive number' }),
    description: z.string().min(10, { message: 'Description is required' }),
    price: z
      .number({ invalid_type_error: 'Price must be a number' })
      .positive({ message: 'Price must be a positive number' }),
    tobeFeatured: z.string().min(2, { message: 'Tobe Featured is required' }),
  })
  .required()

export default schema
