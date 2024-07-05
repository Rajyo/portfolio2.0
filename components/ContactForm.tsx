'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Textarea } from "@/components/ui/textarea"
import { Input } from '@/components/ui/input'

const formSchema = z.object({
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
    .max(20, {
      message: 'Email cannot be more than 20 characters.'
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

export function ContactForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    const result = formSchema.safeParse(values)

    if (!result.success) {
      throw new Error('error')
    }
    console.log(values)
  }

  return (
    <div className='mx-auto w-[80%] h-auto rounded-none bg-white p-4 shadow-input dark:bg-black md:rounded-2xl md:p-8'>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='flex flex-col items-center space-y-8'
        >
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem className='w-[80%]'>
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
              <FormItem className='w-[80%]'>
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
              <FormItem className='w-[80%]'>
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
              <FormItem className='w-[80%]'>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea placeholder='Enter Message' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button variant="default" className='w-[80%]' type='submit'>Send Message</Button>

        </form>
      </Form>
    </div>
  )
}

// import { useForm } from 'react-hook-form'
// import emailjs from 'emailjs-com'

// const ContactForm = () => {
//     const {
//         register,
//         handleSubmit,
//         reset,
//         formState: { errors }
//     } = useForm()

//     const onSubmit = async (data) => {
//         const { name, email, message } = data
//         try {
//             const templateParams = {
//                 user_name: name,
//                 user_email: email,
//                 user_message: message
//             }

//             await emailjs.send(
//                 process.env.REACT_APP_EMAILJS_SERVICE ,
//                 process.env.REACT_APP_EMAILJS_TEMPLATE ,
//                 templateParams,
//                 process.env.REACT_APP_EMAILJS_SECRET
//             )

//             reset()
//         } catch (e) {
//             console.log(e)
//         }
//     }

//     return (
//         <form
//             id='contact-form'
//             onSubmit={handleSubmit(onSubmit)}
//             noValidate
//             style={{
//                 backgroundColor: "white",
//                 padding: '1rem 2rem 2rem 2rem',
//                 borderRadius: '1rem'
//             }}
//             className='xl:w-[500px]'
//         >
//             <div className='my-6'>
//                 <label
//                     htmlFor='name'
//                     className='mb-2 block text-lg font-medium text-gray-900 dark:text-white'
//                 >
//                     Name
//                 </label>
//                 <input
//                     type='text'
//                     name='name'
//                     className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
//                     placeholder='Enter your name'
//                     {...register('name', {
//                         required: {
//                             value: true,
//                             message: 'Please enter your name'
//                         },
//                         maxLength: {
//                             value: 30,
//                             message: 'Please use 30 characters or less'
//                         }
//                     })}
//                     required
//                 />
//                 {errors.name && (
//                     <span className='errorMessage'>{errors.name.message}</span>
//                 )}
//             </div>

//             <div className='mb-6'>
//                 <label
//                     htmlFor='email'
//                     className='mb-2 block text-lg font-medium text-gray-900 dark:text-white'
//                 >
//                     Email
//                 </label>
//                 <input
//                     type='email'
//                     id='email'
//                     className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
//                     placeholder='Enter your email'
//                     {...register('email', {
//                         required: true,
//                         pattern:
//                             /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
//                     })}
//                     required
//                 />
//                 {errors.email && (
//                     <span className='errorMessage'>
//                         Please enter a valid email address
//                     </span>
//                 )}
//             </div>

//             <div className='mb-6'>
//                 <label
//                     htmlFor='name'
//                     className='mb-2 block text-lg font-medium text-gray-900 dark:text-white'
//                 >
//                     Subject
//                 </label>
//                 <input
//                     type='text'
//                     name='subject'
//                     className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
//                     placeholder='Enter subject'
//                     {...register('subject', {
//                         required: {
//                             value: true,
//                             message: 'Please enter a subject'
//                         },
//                         maxLength: {
//                             value: 75,
//                             message: 'Subject cannot exceed 75 characters'
//                         }
//                     })}
//                     required
//                 />
//                 {errors.subject && (
//                     <span className='errorMessage'>{errors.subject.message}</span>
//                 )}
//             </div>

//             <div className='mb-6'>
//                 <label
//                     htmlFor='message'
//                     className='mb-2 block text-lg font-medium text-gray-900 dark:text-white'
//                 >
//                     Message
//                 </label>
//                 <textarea
//                     id='message'
//                     name='message'
//                     className='block h-28 w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
//                     placeholder='Enter your message'
//                     {...register('message', {
//                         required: true
//                     })}
//                     required
//                 />
//                 {errors.message && (
//                     <span className='errorMessage'>Please enter a message</span>
//                 )}
//             </div>

//             <div className='flex justify-between'>
//                 <button
//                     className='w-full rounded-md bg-indigo-500 px-4 py-2 text-white hover:bg-indigo-400'
//                     type='submit'
//                 >
//                     Submit
//                 </button>
//             </div>
//         </form>
//     )
// }

// export default ContactForm
