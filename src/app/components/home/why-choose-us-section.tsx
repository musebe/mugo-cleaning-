'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Sparkles, Award, ClipboardCheck, TrendingUp } from 'lucide-react'; // or any icons you prefer

export default function WhyChooseUsSection() {
  const reasons = [
    {
      title: 'Creativity & Innovation',
      text: 'We continuously explore new methods to deliver top-tier cleaning solutions.',
      icon: <Sparkles className='w-6 h-6' />,
    },
    {
      title: 'Professionalism',
      text: 'We approach every project with dedication and skill, ensuring quality results.',
      icon: <Award className='w-6 h-6' />,
    },
    {
      title: 'Accountability',
      text: 'We utilize resources responsibly, guaranteeing transparency in our operations.',
      icon: <ClipboardCheck className='w-6 h-6' />,
    },
    {
      title: 'Consistency with Excellence',
      text: 'We maintain high standards in every task, ensuring reliable and excellent outcomes.',
      icon: <TrendingUp className='w-6 h-6' />,
    },
  ];

  return (
    <section
      className='bg-background text-foreground py-24 md:py-32 min-h-[700px]'
      // The min-h ensures a taller section
    >
      <div className='container mx-auto px-4'>
        {/* Two-column layout on medium screens and above */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center'>
          {/* Left Column */}
          <motion.div
            className='flex flex-col space-y-6'
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p className='text-sm uppercase font-semibold tracking-wide text-muted-foreground'>
              WHY PEOPLE CHOOSE US?
            </p>
            <h2 className='text-3xl md:text-4xl font-bold leading-tight text-primary'>
              All the Right Reasons for You to Choose The Deeds Limpeza
            </h2>
            <p className='leading-relaxed text-muted-foreground'>
              At The Deeds Limpeza (Kenya) Ltd, we have grown from just two
              employees to a team of over two hundred, delivering professional
              cleaning, fumigation, landscaping, and garbage collection services
              across Kenya. Our dedication to quality, innovation, and customer
              satisfaction sets us apart.
            </p>
            <div>
              <Link href='/about'>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='px-6 py-3 rounded-md font-semibold
                             bg-primary text-white
                             hover:bg-primary/90 transition-colors'
                >
                  READ MORE
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Right Column (Reasons / Icons) */}
          <motion.div
            className='grid grid-cols-1 sm:grid-cols-2 gap-8'
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {reasons.map((reason, idx) => (
              <div
                key={idx}
                className='flex flex-col items-center text-center space-y-4'
              >
                {/* Icon in a circular background */}
                <div className='p-4 bg-primary text-white rounded-full'>
                  {reason.icon}
                </div>
                <h3 className='text-lg font-semibold text-primary'>
                  {reason.title}
                </h3>
                <p className='leading-relaxed text-muted-foreground'>
                  {reason.text}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
