'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import emailjs from '@emailjs/browser'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/use-toast'
import { Loader2 } from 'lucide-react'
import { useState } from 'react'
import { formSchema } from '@/lib/schema'

export function ContactForm() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true)
    const result = formSchema.safeParse(values)

    if (!result.success) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Invalid data type.'
      })
      setLoading(false)
    }

    const { name, email, subject, message } = values
    const templateParams = {
      user_name: name,
      user_email: email,
      user_subject: subject,
      user_message: message
    }

    await emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE as string,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC as string
      )
      .then(
        () => {
          console.log('SUCCESS!')
          toast({
            title: 'Success',
            description: 'Your message has been sent.'
          })
          form.reset()
          setLoading(false)
        },
        error => {
          console.log('FAILED...', error.text)
          toast({
            variant: 'destructive',
            title: 'Uh oh! Something went wrong.',
            description: 'There was a problem with your request.'
          })
          form.reset()
          setLoading(false)
        }
      )
  }

  return (
    <div className='mx-auto h-auto w-[90%] self-center rounded-2xl bg-white px-2 py-8 shadow-xl shadow-slate-300 dark:bg-black dark:shadow-neutral-800 min-[400px]:w-[80%] min-[500px]:w-[70%] min-[600px]:w-[60%] md:w-[100%] xl:w-[95%] 2xl:w-[90%] md:p-4 lg:p-6 xl:p-8'>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='flex flex-col items-center space-y-8'
        >
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem className='w-[90%]'>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder='Enter Name' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem className='w-[90%]'>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder='Enter Email' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='subject'
            render={({ field }) => (
              <FormItem className='w-[90%]'>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input placeholder='Enter Subject' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='message'
            render={({ field }) => (
              <FormItem className='w-[90%]'>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea placeholder='Enter Message' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {loading ? (
            <Button disabled className='w-[90%]'>
              <Loader2 className='mr-2 h-4 w-4 animate-spin' />
              Please wait
            </Button>
          ) : (
            <Button
              variant='default'
              className='w-[90%]'
              type='submit'
            >
              Send Message
            </Button>
          )}
        </form>
      </Form>
    </div>
  )
}
