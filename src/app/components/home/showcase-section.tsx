'use client';

import React from 'react';
import { motion } from 'motion/react';
import { CldImage } from 'next-cloudinary';

export default function ShowcaseSection() {
  return (
    <section className='container mx-auto px-4 md:px-8 py-24'>
      <div className='flex flex-col md:flex-row items-center gap-8'>
        {/* Left Column: Image with Circle Overlay */}
        <motion.div
          className='relative flex-1 flex justify-center items-center'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className='w-full max-w-xl md:max-w-lg relative'>
            {/* Circle Overlay - Fully Opaque & Adjusted Position */}
            <div
              className='absolute 
              top-0 md:top-[38%] /* Adjusted for desktop */
              left-24 md:-left-16 /* Moved 3 inches right on mobile, kept position on desktop */
              -translate-y-1/2 md:translate-y-0
              w-24 h-24 md:w-28 md:h-28 
              bg-primary text-white flex items-center justify-center 
              rounded-full shadow-lg p-2 md:p-3'
            >
              <p className='text-xs md:text-sm font-bold leading-tight text-center'>
                We Always
                <br />
                Come Clean
              </p>
            </div>

            {/* Company Image */}
            <CldImage
              src='mudo/cleaning-company-18'
              alt='Professional Cleaning Showcase'
              width={1000}
              height={800}
              crop='fit'
              priority
              className='object-cover w-full h-auto rounded-lg shadow-md'
            />
          </div>
        </motion.div>

        {/* Right Column: Text Content */}
        <motion.div
          className='flex-1'
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {/* Heading */}
          <h2 className='text-3xl font-bold tracking-tight mb-4 text-primary lg:text-4xl'>
            About Us
          </h2>

          {/* Subheading */}
          <p className='text-lg font-semibold text-primary mb-2'>
            We are a professional cleaning, fumigation, landscaping, and garbage
            collection company in Kenya.
          </p>

          <p className='leading-relaxed text-muted-foreground'>
            The Deeds Limpeza (Kenya) Ltd is focused on delivering high-quality,
            customized services to
            <span className='font-semibold text-primary'>
              {' '}
              individuals, the private sector,
            </span>{' '}
            and
            <span className='font-semibold text-primary'> governments</span> in
            Kenya and East African countries. Established in 2017 with just two
            staff members, we have since grown to over 200 employees, serving
            both private and government institutions with excellence.
          </p>

          {/* Vision / Values */}
          <div className='mt-6 space-y-4 text-muted-foreground'>
            <div>
              <h3 className='font-semibold text-primary text-xl'>Our Vision</h3>
              <p>
                To create a better life for our customers, the communities in
                which we operate, and the staff we employ.
              </p>
            </div>

            <div>
              <h3 className='font-semibold text-primary text-xl'>Our Values</h3>
              <ul className='list-disc list-inside space-y-1'>
                <li>Creativity & Innovation</li>
                <li>Employee & Investor Satisfaction</li>
                <li>Consistency with Excellence</li>
                <li>Accountability in Resource Utilization</li>
                <li>Professionalism</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
