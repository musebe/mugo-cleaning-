'use client';

import React from 'react';
import { motion } from 'motion/react';

export default function ContactPage() {
  return (
    <main className='container mx-auto px-4 md:px-8 py-12 space-y-12'>
      {/* Heading Section */}
      <section className='text-center space-y-2'>
        <motion.h1
          className='text-3xl md:text-4xl font-bold text-primary'
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Contact Us
        </motion.h1>
        <motion.p
          className='text-muted-foreground'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          We’d love to hear from you! Fill out the form below or send us an
          email.
        </motion.p>
      </section>

      {/* Contact Form Section */}
      <motion.section
        className='mx-auto w-full max-w-xl bg-muted p-6 rounded-lg shadow'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <form className='space-y-4'>
          <div>
            <label htmlFor='name' className='block font-semibold text-primary'>
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
            <label htmlFor='email' className='block font-semibold text-primary'>
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
      </motion.section>
    </main>
  );
}
