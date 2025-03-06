'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Link from 'next/link';
import { MessageSquarePlus, Quote, User } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  feedback: string;
  icon?: React.ReactNode;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'NCSA',
    role: 'Head of Operations',
    feedback:
      '“The Deeds Limpeza has been providing cleaning, sanitary bins, fumigation, and pest control services to our organization. Their standard of service is outstanding, and they consistently demonstrate professionalism, exceptional customer care, and diligent workmanship.”',
    icon: <User className='w-8 h-8 text-primary' />,
  },
  {
    id: 2,
    name: 'Mwende K.',
    role: 'Facilities Manager',
    feedback:
      '“Their integrated cleaning solutions have been a game-changer for our office. The team is responsive, well-trained, and they go above and beyond. Highly recommended for anyone looking for top-notch cleaning services!”',
    icon: <User className='w-8 h-8 text-primary' />,
  },
  {
    id: 3,
    name: 'John M.',
    role: 'Homeowner',
    feedback:
      '“The Deeds Limpeza transformed my home with their deep cleaning service. The staff were punctual, friendly, and left everything sparkling clean. I will definitely use them again.”',
    icon: <User className='w-8 h-8 text-primary' />,
  },
  {
    id: 4,
    name: 'TechSolutions Ltd.',
    role: 'HR Department',
    feedback:
      '“From fumigation to garbage collection, their range of services is impressive. We appreciate their consistent communication and ability to adapt to our needs. A trustworthy partner!”',
    icon: <User className='w-8 h-8 text-primary' />,
  },
];

// Framer Motion variants for slide-in/out
const carouselVariants: Variants = {
  enter: {
    x: '100%',
    opacity: 0,
  },
  center: {
    x: 0,
    opacity: 1,
  },
  exit: {
    x: '-100%',
    opacity: 0,
  },
};

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically move to the next testimonial every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className='bg-background text-foreground py-24 md:py-32'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          {/* Left Column */}
          <div className='space-y-6'>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <p className='text-sm uppercase font-semibold tracking-wide text-muted-foreground'>
                TESTIMONIALS
              </p>
              <h2 className='relative text-2xl sm:text-3xl md:text-4xl font-bold leading-tight break-words'>
                You Are In Very Good Hands
                <br />
                Check What Our Customers Are Saying
                {/* Custom underline */}
                <span className='absolute left-0 -bottom-2 h-[3px] w-[50%] bg-primary' />
              </h2>

              <div className='mt-6'>
                <Link href='/testimonials'>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className='px-6 py-3 inline-flex items-center gap-2 rounded-md font-semibold bg-primary text-white hover:bg-primary/90 transition-colors'
                  >
                    <MessageSquarePlus className='w-5 h-5' />
                    View All Testimonials
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Carousel */}
          <motion.div
            className='relative overflow-hidden h-[250px] md:h-[300px] flex flex-col justify-center'
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <AnimatePresence mode='wait'>
              <motion.div
                key={currentTestimonial.id}
                variants={carouselVariants}
                initial='enter'
                animate='center'
                exit='exit'
                transition={{ duration: 0.8 }}
                className='absolute w-full'
              >
                <div className='p-6 bg-muted rounded-md shadow-md flex flex-col space-y-4'>
                  <Quote className='w-8 h-8 text-primary self-start' />
                  <p className='text-muted-foreground text-sm md:text-base italic'>
                    {currentTestimonial.feedback}
                  </p>
                  <div className='flex items-center gap-3'>
                    {currentTestimonial.icon}
                    <div className='text-sm'>
                      <span className='font-semibold text-primary block'>
                        {currentTestimonial.name}
                      </span>
                      <span className='text-muted-foreground'>
                        {currentTestimonial.role}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
