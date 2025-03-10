'use client';

import { motion } from 'motion/react';
import { CldImage } from 'next-cloudinary';
import Link from 'next/link';
import React from 'react';

export default function ContactPage() {
  return (
    <main className='py-12 px-4 md:px-8 bg-background'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {/* Left Column: Company Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='space-y-6 text-center md:text-left text-justify'
          >
            <h1 className='text-3xl md:text-4xl font-bold text-primary'>
              Contact Us 
            </h1>
            <p className='text-lg text-foreground/80'>
              We’d love to hear from you! Fill out the form below or send us a
              message.
            </p>

            <div className='border-t border-border my-4'></div>

            <div className='space-y-2'>
              <h2 className='text-2xl font-semibold text-foreground'>
                Contact Information
              </h2>
              <p className='text-base text-foreground/80'>
                Utumishi Coop House,
                <br />
                Mamlaka Road,
                <br />
                P.O Box 23306-00625,
                <br />
                Nairobi, Kenya
              </p>
              <p className='text-base text-foreground/80'>
                Phone: 020 7867119 / +254 725 060 174
              </p>
              <p className='text-base text-foreground/80'>
                Email: info@thedeedslimpeza.co.ke
              </p>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='bg-white dark:bg-muted p-6 rounded-lg shadow text-justify'
          >
            {/* Inviting message on top */}

            <form className='space-y-4'>
              <div>
                <label
                  htmlFor='name'
                  className='block font-semibold text-primary'
                >
                  Your Name
                </label>
                <input
                  type='text'
                  id='name'
                  placeholder='Jane Doe'
                  className='mt-1 w-full p-2 rounded border border-border bg-white dark:bg-muted focus:outline-none focus:ring-2 focus:ring-primary'
                />
              </div>
              <div>
                <label
                  htmlFor='email'
                  className='block font-semibold text-primary'
                >
                  Email Address
                </label>
                <input
                  type='email'
                  id='email'
                  placeholder='you@example.com'
                  className='mt-1 w-full p-2 rounded border border-border bg-white dark:bg-muted focus:outline-none focus:ring-2 focus:ring-primary'
                />
              </div>
              <div>
                <label
                  htmlFor='message'
                  className='block font-semibold text-primary'
                >
                  Message
                </label>
                <textarea
                  id='message'
                  placeholder='How can we help you?'
                  rows={4}
                  className='mt-1 w-full p-2 rounded border border-border bg-white dark:bg-muted focus:outline-none focus:ring-2 focus:ring-primary'
                ></textarea>
              </div>
              <button
                type='submit'
                className='button-primary w-full md:w-auto mt-4 px-4 py-2 font-semibold text-white bg-primary rounded hover:bg-primary/90 focus:ring-2 focus:ring-primary focus:outline-none transition'
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
