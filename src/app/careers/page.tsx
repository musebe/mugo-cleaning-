'use client';

import { motion } from 'motion/react';
import { CldImage } from 'next-cloudinary';
import { ThumbsUp, Users, CheckCircle, Lightbulb, Smile } from 'lucide-react';

export default function CareersPage() {
  return (
    <main className='flex flex-col'>
      {/* SECTION 1: CAREERS INTRO (bg-background) */}
      <section className='bg-background w-full py-12 px-4 md:px-8'>
        <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
          {/* Left Column: Heading & Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className='text-3xl md:text-5xl font-bold text-foreground mb-4'>
              Careers
            </h1>
            <p className='text-lg md:text-xl text-foreground/80 leading-relaxed mb-6'>
              Join <strong>The Deeds Limpeza</strong>! We’re always looking for
              passionate, talented individuals to become part of our growing
              team. We believe in fostering a supportive environment that
              encourages professional development and a rewarding future.
            </p>
          </motion.div>

          {/* Right Column: Cloudinary Image */}
          <motion.div
            className='relative w-full h-[300px] md:h-[400px] rounded overflow-hidden shadow-md'
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <CldImage
              src='mudo/cleaning-company-17'
              alt='Careers at The Deeds Limpeza'
              width={800}
              height={600}
              crop='fill'
              className='object-cover w-full h-full'
            />
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: OUR VALUES (bg-section) */}
      <section className='bg-section w-full py-12 px-4 md:px-8'>
        <div className='max-w-7xl mx-auto text-center'>
          <motion.h2
            className='text-2xl md:text-3xl font-bold text-foreground mb-6'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our Values
          </motion.h2>
          <motion.p
            className='text-lg text-foreground/80 leading-relaxed max-w-3xl mx-auto mb-10'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Regardless of the role, these are the core qualities we value most
            in our team members:
          </motion.p>

          {/* Icons Row */}
          <motion.div
            className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-items-center'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Example Icon 1 */}
            <div className='flex flex-col items-center'>
              <CheckCircle className='w-10 h-10 mb-2 text-[color:var(--accent)]' />
              <p className='text-sm font-semibold text-foreground'>
                Adaptability
              </p>
            </div>
            {/* Example Icon 2 */}
            <div className='flex flex-col items-center'>
              <Users className='w-10 h-10 mb-2 text-[color:var(--accent)]' />
              <p className='text-sm font-semibold text-foreground'>
                Customer Focus
              </p>
            </div>
            {/* Example Icon 3 */}
            <div className='flex flex-col items-center'>
              <ThumbsUp className='w-10 h-10 mb-2 text-[color:var(--accent)]' />
              <p className='text-sm font-semibold text-foreground'>
                Team Player
              </p>
            </div>
            {/* Example Icon 4 */}
            <div className='flex flex-col items-center'>
              <Smile className='w-10 h-10 mb-2 text-[color:var(--accent)]' />
              <p className='text-sm font-semibold text-foreground'>
                Great Attitude
              </p>
            </div>
            {/* Example Icon 5 */}
            <div className='flex flex-col items-center'>
              <Lightbulb className='w-10 h-10 mb-2 text-[color:var(--accent)]' />
              <p className='text-sm font-semibold text-foreground'>
                Creative &amp; Innovative
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: CURRENT OPENINGS (bg-background) */}
      <section className='bg-background w-full py-12 px-4 md:px-8 flex-1'>
        <div className='max-w-5xl mx-auto text-center'>
          <motion.h3
            className='text-2xl md:text-3xl font-bold text-foreground mb-4'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Current Openings
          </motion.h3>
          <motion.p
            className='text-lg md:text-xl text-foreground/80 leading-relaxed'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            We currently do not have any open positions. Please check back soon
            for new opportunities!
          </motion.p>
        </div>
      </section>
    </main>
  );
}
