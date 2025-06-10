'use client'

import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import Link from 'next/link';
  interface FormData {
    fullName: string;
    email: string;
    company: string;
    budget: string;
    message: string;
    checkbox: boolean;
  }

const SendEmail = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const handleFormSubmit = async (formData: FormData) => {
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('form submitted', formData);
        const result = await response.json();
        toast.success('Email sent successfully.');
        reset();
        return result;
      } else {

        const errorData = await response.json().catch(() => ({}));
        toast.error(errorData.error || 'Error sending email. Try again later.');
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Error sending email. Try again later.');
      throw new Error(`Failed to send email: ${error}`);
    }
  };

  return (
    <section className='flex flex-col items-center justify-start w-full h-full bg-[var(--background-color)]'>
      <div className='mx-2 md:mx-0 text-center mf:text-left'>
        <h1 className='mt-36 text-[4.8rem] text-[var(--heading-color)]'>Let’s rebel against the ordinary.</h1>
        <p className='text-[2rem] text-[var(--heading-color)] '>Tell us about your idea — we’ll make it unforgettable.</p>
      </div>
      <div className='mx-2 md:mx-0 text-center mf:text-left'>
        <h3 className='mt-48 text-[2.4rem] text-[var(--heading-color)]'>Start a Project</h3>
        <p className='text-[1.8rem] text-[var(--heading-color)] '>Got a project or just a wild idea? Drop us a line — we’ll respond within 24h.</p>
      </div>
      <form onSubmit={handleSubmit((data) => {handleFormSubmit(data)})} className="my-24 w-10/12 md:max-w-5xl space-y-10">
        <div className="space-y-2">
          <label htmlFor="fullName" className="text-lg block text-cyan-400">
            Full Name
          </label>
          <div className="p-[1px] rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500">
            <input
              {...register("fullName", { required: "Full name is required", minLength: {value: 8, message: "Minimum length of full name is 8 characters"} })}
              placeholder="Full Name"
              className="w-full h-16 bg-black text-gray-300 p-3 rounded-xl outline-none border border-transparent"
            />
          </div>
          <p className='text-white text-[1.2rem] ml-2'>{errors.fullName?.message}</p>
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-lg block text-cyan-400">
            Email Address
          </label>
          <div className="p-[1px] rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500">
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Please enter a valid email address (with @ and .xx)"
                },
            })}
              placeholder="your@email.com"
              className="w-full h-16 bg-black text-gray-300 p-3 rounded-xl outline-none border border-transparent"
            />
          </div>
          <p className='text-white text-[1.2rem]ml-2'>{errors.email?.message}</p>
        </div>

        <div className="space-y-2">
          <label htmlFor="company" className="text-lg block text-cyan-400">
            Company/Brand
          </label>
          <div className="p-[1px] rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500">
            <input
              {...register("company", { required: "Company or brand is required", minLength: {value: 5, message: "Minimum length of company or brand name is 5 characters"} })}
              placeholder="Your company name"
              className="w-full h-16 bg-black text-gray-300 p-3 rounded-xl outline-none border border-transparent"
            />
          </div>
          <p className='text-white text-[1.2rem] ml-2'>{errors.company?.message}</p>
        </div>

        <div className="space-y-2">
          <label htmlFor="budget" className="text-lg block text-cyan-400">
            Your Budget
          </label>''
          <div className="p-[1px] rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500">
            <input
              {...register("budget", { required: "Budget is required", pattern: /^\d+(\.\d{1,2})?$/, minLength: {value: 3, message: "The minimum valuen is s00"}, } )}
              placeholder="Write your budget here"
              className="w-full h-16 bg-black text-gray-300 p-3 rounded-xl outline-none border border-transparent"
            />
          </div>
          <p className='text-white text-[1.2rem] ml-2'>{errors.budget?.message}</p>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-lg block text-cyan-400">
            Message
          </label>
          <div className="p-[1px] rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500">
            <textarea
              {...register("message", { required: "Message is required", minLength: {value: 20, message: "Minimum length of message is 20 characters"} })}
              placeholder="Your message"
              className="w-full h-72 bg-black text-gray-300 p-3 rounded-xl outline-none border border-transparent"
            />
          </div>
          <p className='text-white text-[1.2rem] ml-2'>{errors.message?.message}</p>
        </div>
        <div>
          <label className="flex items-center">
          <input
              type="checkbox"
              id="checkbox"
              className="checkbox size-8"
              {...register("checkbox",
                  {
                      required: {
                          value: true,
                          message: 'You must accept the privacy policy'
                      },
                  }
              )}
          />
          <p className="px-2 text-[1.2rem] text-white">
              I have read and accept the
              <Link
                  passHref
                  href="/privacy-policy"
                  className="text-[1.2rem] text-white border-b-2 pb-1"
              >
                  {" "}
                  privacy policy.

              </Link>
          </p>
          </label>
          <p className="text-[1.2rem] text-white mt-4 error-messages px-3">{errors.checkbox?.message}</p>
        </div>

        <button
          type="submit"

          className="w-full z-10 h-16 cursor-pointer py-3 px-4 bg-cyan-500 hover:cursor-pointer hover:bg-cyan-600 text-black text-lg font-medium rounded-lg transition duration-300 ease-in-out"
        >
          Send Message
        </button>
      </form>
  </section>
  )
}

export default SendEmail