'use client'

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import toast from 'react-hot-toast';

  interface FormData {
    fullName: string;
    email: string;
    company: string;
    budget: string;
    message: string;
  }

  const SendEmail = () => {
    const [formData, setFormData] = useState<FormData>({
      fullName: "",
      email: "",
      company: "",
      budget: "",
      message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    };

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      try {
        const response = await fetch('/api/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          console.log("Form submitted");
          const result = await response.json();
          toast.success('Email sent successfully.');

          setFormData({
            fullName: "",
            email: "",
            company: "",
            budget: "",
            message: ""
          });

          return result;
        }
      } catch (error) {
        toast.error(`Error sending email. Try again later.`);
        throw new Error(`Failed to send email: ${error}`);
      };
    };

  return (
    <section className='flex flex-col items-center justify-start w-full h-full bg-[var(--background-color)]'>
      <div className='mx-2 md:mx-0 text-center mf:text-left'>
        <h3 className='mt-36 text-[4.8rem] text-[var(--heading-color)]'>Let’s rebel against the ordinary.</h3>
        <p className='text-[2rem] text-[var(--heading-color)] '>Tell us about your idea — we’ll make it unforgettable.</p>
      </div>
      <div className='mx-2 md:mx-0 text-center mf:text-left'>
        <h3 className='mt-48 text-[2.4rem] text-[var(--heading-color)]'>Start a Project</h3>
        <p className='text-[1.8rem] text-[var(--heading-color)] '>Got a project or just a wild idea? Drop us a line — we’ll respond within 24h.</p>
      </div>
      <div className="my-24 w-10/12 md:max-w-5xl space-y-10">
        <div className="space-y-2">
          <label htmlFor="fullName" className="text-lg block text-cyan-400">
            Full Name
          </label>
          <div className="p-[1px] rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500">
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full h-16 bg-black text-gray-300 p-3 rounded-xl outline-none border border-transparent"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-lg block text-cyan-400">
            Email Address
          </label>
          <div className="p-[1px] rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="w-full h-16 bg-black text-gray-300 p-3 rounded-xl outline-none border border-transparent"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="company" className="text-lg block text-cyan-400">
            Company/Brand
          </label>
          <div className="p-[1px] rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500">
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Your company name"
              className="w-full h-16 bg-black text-gray-300 p-3 rounded-xl outline-none border border-transparent"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="budget" className="text-lg block text-cyan-400">
            Your Budget
          </label>
          <div className="p-[1px] rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500">
            <input
              type="text"
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              placeholder="Write your budget here"
              className="w-full h-16 bg-black text-gray-300 p-3 rounded-xl outline-none border border-transparent"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-lg block text-cyan-400">
            Message
          </label>
          <div className="p-[1px] rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              rows={6}
              className="w-full h-72 bg-black text-gray-300 p-3 rounded-xl outline-none border border-transparent"
            />
          </div>
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          className="w-full z-10 h-16 cursor-pointer py-3 px-4 bg-cyan-500 hover:cursor-pointer hover:bg-cyan-600 text-black text-lg font-medium rounded-lg transition duration-300 ease-in-out"
        >
          Send Message
        </button>
      </div>
  </section>
  )
}

export default SendEmail