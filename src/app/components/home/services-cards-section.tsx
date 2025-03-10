'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CldImage } from 'next-cloudinary';
import Link from 'next/link';
import Image from 'next/image';
import { servicesData } from '@/data/servicesData';

interface Service {
  id: string;
  title: string;
  description: string;
  backImage: string;
  link: string;
  icon: string;
  content: string[];
}

function ServiceCard({ service }: { service: Service }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) {
      setIsTouchDevice(true);
    }
  }, []);

  return (
    <motion.div
      className='relative w-full h-[380px] perspective mx-auto'
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
        {/* --- FRONT SIDE: Title header + Image --- */}
        <div className='absolute inset-0 w-full h-full backface-hidden rounded-lg shadow-lg overflow-hidden flex flex-col'>
          {/* Header area: title on sky-blue background */}
          <div className='p-2 bg-[#89cff0]'>
            <h3 className='text-lg font-bold text-center text-primary'>
              {service.title}
            </h3>
          </div>
          {/* Image area: fills remaining space */}
          <div className='relative flex-1'>
            {service.backImage ? (
              <div className='relative w-full h-full'>
                <CldImage
                  src={service.backImage}
                  alt={service.title}
                  fill
                  crop='fill'
                  className='object-cover'
                />
              </div>
            ) : (
              <div className='bg-[#89cff0] w-full h-full flex items-center justify-center'>
                <p className='text-white font-bold'>No image available</p>
              </div>
            )}
          </div>
        </div>

        {/* --- BACK SIDE: Icon, content and Read More link --- */}
        <div className='absolute inset-0 w-full h-full backface-hidden rounded-lg shadow-lg overflow-hidden rotate-y-180 bg-[#89cff0] text-white flex flex-col'>
          {/* Top: Icon and title */}
          <div className='p-2'>
            <div className='flex items-center justify-center gap-2'>
              <Image
                src={`/icons/${service.icon}`}
                alt={service.title}
                width={48}
                height={48}
              />
              <h3 className='text-lg font-bold text-center text-primary'>
                {service.title}
              </h3>
            </div>
          </div>
          {/* Middle: Full content */}
          <div className='p-4 flex-1 overflow-y-auto'>
            {service.content.map((paragraph, idx) => (
              <p key={idx} className='mb-2 text-justify'>
                {paragraph}
              </p>
            ))}
          </div>
          {/* Bottom: "Read More" link */}
          <div className='p-2 text-center'>
            <Link href={service.link} className='underline text-white'>
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
    <section className='relative w-screen bg-section'>
      <div className='absolute inset-0 w-screen h-full bg-section'></div>
      <div className='relative container mx-auto px-4 md:px-8 py-24 max-w-[1400px]'>
        <div className='text-center mb-8'>
          <h2 className='text-3xl font-bold tracking-tight text-primary'>
            Our Services
          </h2>
          <p className='text-lg mt-2 text-primary font-semibold'>
            AT HOME OR AT WORK, WE WILL GET IT DONE
          </p>
        </div>
        <motion.div
          className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {servicesData.map((service: Service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
