'use client';

import React, { useEffect, useState } from 'react';
import { motion, animate } from 'framer-motion';
import { CldImage } from 'next-cloudinary';
import { UserCheck, Users, ThumbsUp } from 'lucide-react';

// A small helper component for the animated counter
function AnimatedCounter({ from = 0, to = 100, duration = 1 }) {
  const [count, setCount] = useState(from);

  useEffect(() => {
    const controls = animate(from, to, {
      duration,
      onUpdate(value) {
        setCount(Math.floor(value));
      },
    });
    return () => controls.stop();
  }, [from, to, duration]);

  return <>{count}</>;
}

export default function EmpoweredTeamSection() {
  return (
    <section className='bg-section text-foreground py-24 md:py-32'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
          {/* Left Column: Image */}
          <motion.div
            className='w-full h-full'
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className='relative w-full h-auto rounded overflow-hidden'>
              {/* Example Cloudinary image; replace `src` as needed */}
              <CldImage
                src='mudo/cleaning-company-14'
                alt='Empowered Team'
                width={800}
                height={600}
                crop='fit'
                className='w-full h-auto object-cover'
              />
            </div>
          </motion.div>

          {/* Right Column: Text & Stats */}
          <motion.div
            className='space-y-6'
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p className='text-sm uppercase font-semibold tracking-wide text-foreground/80'>
              THE BEST INTEGRATED FACILITIES MANAGEMENT SOLUTIONS PROVIDER
            </p>

            {/* Heading with custom underline */}
            <h2 className='relative inline-block text-3xl md:text-4xl font-bold leading-tight text-foreground'>
              EMPOWERED TEAM TO DELIVER CLIENT EXCELLENCE
              {/* Underline now dynamically styled based on theme */}
              <span className='absolute left-0 -bottom-2 h-[3px] w-[60%] bg-foreground/50' />
            </h2>

            <p className='leading-relaxed text-foreground/90'>
              We lead this industry by providing integrated world-class cleaning
              services and support solutions through efficient use of resources
              &amp; technology, using sustainable products and an empowered
              workforce.
            </p>

            {/* Stats Row with circular boxes */}
            <motion.div
              className='grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Stat 1 */}
              <div className='flex flex-col items-center bg-muted p-6 rounded-full text-center shadow-lg'>
                <UserCheck className='w-8 h-8 mb-2 text-primary' />
                <span className='text-4xl font-bold text-primary'>
                  <AnimatedCounter from={0} to={8300} duration={2} />
                </span>
                <span className='text-sm uppercase font-medium text-foreground/80 mt-1'>
                  Happy Customers
                </span>
              </div>

              {/* Stat 2 */}
              <div className='flex flex-col items-center bg-muted p-6 rounded-full text-center shadow-lg'>
                <Users className='w-8 h-8 mb-2 text-primary' />
                <span className='text-4xl font-bold text-primary'>
                  <AnimatedCounter from={0} to={400} duration={2} />
                </span>
                <span className='text-sm uppercase font-medium text-foreground/80 mt-1'>
                  Employees
                </span>
              </div>

              {/* Stat 3 */}
              <div className='flex flex-col items-center bg-muted p-6 rounded-full text-center shadow-lg'>
                <ThumbsUp className='w-8 h-8 mb-2 text-primary' />
                <span className='text-4xl font-bold text-primary'>
                  <AnimatedCounter from={0} to={100} duration={2} />%
                </span>
                <span className='text-sm uppercase font-medium text-foreground/80 mt-1'>
                  Satisfaction Rate
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
