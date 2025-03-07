'use client';

import React from 'react';
import { motion } from 'motion/react';
import { CldImage } from 'next-cloudinary';
import {
  Lightbulb,
  SmilePlus,
  Repeat,
  ClipboardCheck,
  Briefcase,
  ThumbsUp,
} from 'lucide-react';

export default function AboutUs() {
  return (
    <main className='container mx-auto px-4 md:px-8 py-12 space-y-12'>
      {/* 1) ABOUT US SECTION */}
      <section className='flex flex-col md:flex-row items-start gap-8'>
        {/* Left Column: Image */}
        <motion.div
          className='flex-1 flex justify-center items-center'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <CldImage
            src='mudo/cleaning-company-18' // Replace with your actual publicId
            alt='Professional Cleaning Showcase'
            width={800}
            height={600}
            crop='fit'
            priority
            className='object-cover w-full max-w-md rounded-lg shadow-md'
          />
        </motion.div>

        {/* Right Column: Text */}
        <motion.div
          className='flex-1 mt-6 md:mt-0 space-y-6'
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className='text-3xl font-bold tracking-tight text-primary'>
            About Us
          </h2>
          <p className='text-lg font-semibold text-primary'>
            We are a professional cleaning, fumigation, landscaping, and garbage
            collection company in Kenya.
          </p>
          <p className='leading-relaxed text-muted-foreground'>
            The Deeds Limpeza (Kenya) Ltd is focused on delivering high-quality,
            customized services to{' '}
            <span className='font-semibold text-primary'>
              individuals, the private sector
            </span>
            , and{' '}
            <span className='font-semibold text-primary'>governments</span> in
            Kenya and East African countries. The company was established in
            2017 and began operations with a team of only two staff members.
            However, it has since grown to over two hundred employees, and the
            initial two clients have multiplied many times over.
          </p>
        </motion.div>
      </section>
     
      {/* 2) OUR VISION (Centered Title) */}
      <section className='space-y-4 text-center'>
        <motion.h3
          className='text-xl md:text-2xl font-bold tracking-tight text-primary text-center'  
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Our Vision
        </motion.h3>
        <motion.p
          className='leading-relaxed text-muted-foreground mx-auto max-w-3xl'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
        >
          To create a better life for our customers, the communities in which we
          operate, and the staff we employ.
        </motion.p>
      </section>

      {/* 3) OUR VALUES (2x3 Grid) */}
      <section className='space-y-6'>
        <h3 className='text-xl md:text-2xl font-bold tracking-tight text-primary text-center'>
          Our Values
        </h3>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {/* 1) Creativity & Innovation */}
          <motion.div
            className='flex flex-col items-center text-center p-4 rounded shadow bg-white dark:bg-muted'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Lightbulb className='w-10 h-10 text-primary mb-2' />
            <h4 className='text-lg font-semibold text-primary mb-1'>
              Creativity &amp; Innovation
            </h4>
            <p className='text-sm text-muted-foreground'>
              We continually seek fresh ideas and innovative solutions to
              deliver outstanding results for our clients.
            </p>
          </motion.div>

          {/* 2) Satisfaction of Employees & Investors */}
          <motion.div
            className='flex flex-col items-center text-center p-4 rounded shadow bg-white dark:bg-muted'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <SmilePlus className='w-10 h-10 text-primary mb-2' />
            <h4 className='text-lg font-semibold text-primary mb-1'>
              Satisfaction of Employees &amp; Investors
            </h4>
            <p className='text-sm text-muted-foreground'>
              We create an environment where our teams and stakeholders thrive,
              ensuring shared success and lasting relationships.
            </p>
          </motion.div>

          {/* 3) Consistency with Excellence */}
          <motion.div
            className='flex flex-col items-center text-center p-4 rounded shadow bg-white dark:bg-muted'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Repeat className='w-10 h-10 text-primary mb-2' />
            <h4 className='text-lg font-semibold text-primary mb-1'>
              Consistency with Excellence
            </h4>
            <p className='text-sm text-muted-foreground'>
              We uphold rigorous standards and a dependable approach to deliver
              quality results every time.
            </p>
          </motion.div>

          {/* 4) Accountability in Resource Utilization */}
          <motion.div
            className='flex flex-col items-center text-center p-4 rounded shadow bg-white dark:bg-muted'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <ClipboardCheck className='w-10 h-10 text-primary mb-2' />
            <h4 className='text-lg font-semibold text-primary mb-1'>
              Accountability in Resource Utilization
            </h4>
            <p className='text-sm text-muted-foreground'>
              We ensure transparency and responsibility in how we manage
              resources, optimizing efficiency and sustainability.
            </p>
          </motion.div>

          {/* 5) Professionalism */}
          <motion.div
            className='flex flex-col items-center text-center p-4 rounded shadow bg-white dark:bg-muted'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Briefcase className='w-10 h-10 text-primary mb-2' />
            <h4 className='text-lg font-semibold text-primary mb-1'>
              Professionalism
            </h4>
            <p className='text-sm text-muted-foreground'>
              We adhere to the highest ethical standards and expertise, ensuring
              trust and respect in every client interaction.
            </p>
          </motion.div>

          {/* 6) Quality Service Delivery & Customer Service */}
          <motion.div
            className='flex flex-col items-center text-center p-4 rounded shadow bg-white dark:bg-muted'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <ThumbsUp className='w-10 h-10 text-primary mb-2' />
            <h4 className='text-lg font-semibold text-primary mb-1'>
              Quality Service Delivery &amp; Customer Service
            </h4>
            <p className='text-sm text-muted-foreground'>
              Ensuring exceptional service delivery that meets and exceeds
              customer expectations.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
