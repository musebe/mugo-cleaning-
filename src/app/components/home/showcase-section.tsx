'use client';

import React from 'react';
import { motion } from 'motion/react';
import { CldImage } from 'next-cloudinary';

export default function ShowcaseSection() {
  return (
    <section className='container mx-auto px-4 md:px-8 py-24'>
      <div className='flex flex-col md:flex-row items-center gap-8'>
        {/* Left Column: Image with circle overlay */}
        <motion.div
          className='relative flex-1 flex justify-center items-center'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className='w-full max-w-xl md:max-w-2xl'>
            <div className='relative'>
              {/* Circle overlay */}
              <div className='absolute top-6 left-6 z-10 w-24 h-24 bg-primary/80 text-white flex items-center justify-center rounded-full shadow-lg p-2'>
                <p className='text-xs font-bold leading-tight text-center'>
                  We Always
                  <br />
                  Come Clean
                </p>
              </div>

              {/* The main image */}
              <CldImage
                src='mudo/cleaning-company-14'
                alt='Professional Cleaning Showcase'
                width={1000}
                height={800}
                crop='fit'
                priority
                className='object-cover w-full h-auto rounded shadow-sm'
              />
            </div>
          </div>
        </motion.div>

        {/* Right Column: Text */}
        <motion.div
          className='flex-1'
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {/* Main heading */}
          <h2 className='scroll-m-20 text-3xl font-bold tracking-tight mb-2 lg:text-4xl'>
            Welcome to The Deeds Limpeza
          </h2>

          {/* Subheading */}
          <p className='text-xl text-primary font-semibold mb-4'>
            We Always Come Clean
          </p>

          <p className='leading-relaxed text-muted-foreground'>
            The Deeds Limpeza (Kenya) Ltd provides professional cleaning,
            fumigation, landscaping, and garbage collection services across
            Kenya. We started in 2017 with only two staff members and have since
            grown to a team of over two hundred, proudly serving individuals,
            private-sector clients, and government agencies.
          </p>

          {/* Vision / Values */}
          <div className='mt-4 space-y-3 text-muted-foreground'>
            <p className='font-semibold text-primary'>Our Vision</p>
            <p>
              To create a better life for our customers, the communities in
              which we operate, and the staff we employ.
            </p>

            <p className='font-semibold text-primary'>Our Values</p>
            <ul className='list-disc list-inside space-y-1'>
              <li>Creativity & Innovation</li>
              <li>Employee & Investor Satisfaction</li>
              <li>Consistency with Excellence</li>
              <li>Accountability in Resource Utilization</li>
              <li>Professionalism</li>
            </ul>
          </div>

          {/* Closing Statement */}
          <p className='mt-4 leading-relaxed text-muted-foreground'>
            By blending innovation, consistency, and professionalism, we deliver
            top-tier cleaning solutions tailored to your specific needs.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
