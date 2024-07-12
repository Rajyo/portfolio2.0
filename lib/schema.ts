import { z } from 'zod'

export const formSchema = z.object({
  name: z
    .string({
      message: 'Invalid Type.'
    })
    .min(2, {
      message: 'Name must be at least 2 characters.'
    })
    .max(20, {
      message: 'Name cannot be more than 20 characters.'
    }),
  email: z
    .string()
    .email({
      message: 'Invalid Type.'
    })
    .min(2, {
      message: 'Email must be at least 2 characters.'
    })
    .max(30, {
      message: 'Email cannot be more than 30 characters.'
    }),
  subject: z
    .string({
      message: 'Invalid Type.'
    })
    .min(2, {
      message: 'Subject must be at least 2 characters.'
    })
    .max(50, {
      message: 'Subject cannot be more than 50 characters.'
    }),
  message: z
    .string({
      message: 'Invalid Type.'
    })
    .min(2, {
      message: 'Message must be at least 2 characters.'
    })
    .max(200, {
      message: 'Message cannot be more than 200 characters.'
    })
})
