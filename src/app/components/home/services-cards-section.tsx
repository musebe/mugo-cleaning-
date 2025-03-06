'use client';

import React, { JSX, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CldImage } from 'next-cloudinary';
import Link from 'next/link';
import { Home, Briefcase, Leaf } from 'lucide-react';

// Define the Service interface
interface Service {
  id: number;
  title: string;
  frontText: string;
  backImage: string;
  link: string;
  icon: JSX.Element;
}

const servicesData: Service[] = [
  {
    id: 1,
    title: 'Domestic Services',
    frontText: `We offer both one-off and regular home cleaning services, catering to all your domestic needs, including ironing, dusting, polishing, and vacuuming.`,
    backImage: 'mudo/cleaning-company-2',
    link: '/services/domestic',
    icon: <Home className='w-8 h-8' />,
  },
  {
    id: 2,
    title: 'Commercial Services',
    frontText: `With 15 years of experience in commercial cleaning across Kenya, our dedicated team provides high-quality cleaning services to companies of all types and sectors.`,
    backImage: 'mudo/cleaning-company-1',
    link: '/services/commercial',
    icon: <Briefcase className='w-8 h-8' />,
  },
  {
    id: 3,
    title: 'Landscaping & Gardening',
    frontText: `We transform terrains from rugged, desolate surfaces into serene, manicured lawns and beautiful flower gardens. Experience aesthetically pleasing and environmentally responsible landscaping.`,
    backImage: 'mudo/cleaning-company-9',
    link: '/services/landscaping',
    icon: <Leaf className='w-8 h-8' />,
  },
];

function ServiceCard({ service }: { service: Service }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Detect if the device supports hover
  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) {
      setIsTouchDevice(true);
    }
  }, []);

  return (
    <motion.div
      className='relative w-full h-[450px] perspective mx-auto'
      onMouseEnter={() => {
        if (!isTouchDevice) setIsFlipped(true);
      }}
      onMouseLeave={() => {
        if (!isTouchDevice) setIsFlipped(false);
      }}
      onClick={() => {
        if (isTouchDevice) setIsFlipped((prev) => !prev);
      }}
      whileTap={{ scale: 0.98 }}
      whileHover={{ scale: 1.02 }}
    >
      <motion.div
        className='relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d]'
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* Front Side */}
        <div className='absolute inset-0 w-full h-full backface-hidden rounded-lg shadow-lg overflow-hidden flex flex-col bg-white dark:bg-muted'>
          <div className='bg-primary text-white p-4 flex items-center gap-2'>
            {service.icon}
            <h3 className='text-lg font-bold'>{service.title}</h3>
          </div>
          <div className='p-6 flex-1 flex items-center'>
            <p className='leading-relaxed text-foreground'>
              {service.frontText}
            </p>
          </div>
        </div>

        {/* Back Side */}
        <div className='absolute inset-0 w-full h-full backface-hidden rounded-lg shadow-lg overflow-hidden rotate-y-180'>
          <CldImage
            src={service.backImage}
            alt={service.title}
            width={800}
            height={600}
            crop='fit'
            className='object-cover w-full h-full'
          />
          <div className='absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-4 text-white'>
            <h3 className='text-lg font-bold mb-2'>{service.title}</h3>
            <Link href={service.link} className='underline hover:text-primary'>
              Read More
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ServicesCardsSection() {
  return (
    <section className='relative w-screen'>
      {/* Full-Width Background Color */}
      <div className='absolute inset-0 w-screen h-full bg-secondary'></div>

      {/* Content Container */}
      <div className='relative container mx-auto px-4 md:px-8 py-24 max-w-[1400px]'>
        <div className='text-center mb-12'>
          <p className='text-sm uppercase font-semibold tracking-wide text-muted-foreground'>
            Our Services
          </p>
          <h2 className='scroll-m-20 text-2xl font-bold tracking-tight lg:text-3xl text-foreground mt-2'>
            AT HOME OR AT WORK, WE WILL GET IT DONE
          </h2>
        </div>

        {/* Services Cards */}
        <motion.div
          className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
