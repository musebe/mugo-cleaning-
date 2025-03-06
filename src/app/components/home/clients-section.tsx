'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const clients = [
  { src: '/clients/stima.png', alt: 'Stima' },
  { src: '/clients/hotpoint.png', alt: 'Hotpoint' },
  { src: '/clients/toptank.png', alt: 'Top Tank' },
  { src: '/clients/t&c.jpeg', alt: 'T & C' },
  { src: '/clients/hisense.png', alt: 'Hisense' },
];

export default function ClientsSection() {
  return (
    <section className='bg-secondary text-white py-16'>
      <div className='container mx-auto px-4'>
        {/* Heading */}
        <motion.div
          className='mb-10 text-center'
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className='text-3xl md:text-4xl font-bold leading-tight'>
            Trusted By Leading Organizations
          </h2>
          <p className='mt-2 text-white/80'>
            We proudly serve a diverse range of partners and clients
          </p>
        </motion.div>

        {/* Logos Grid */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center'>
          {clients.map((client, index) => (
            <motion.div
              key={client.src}
              className='flex justify-center'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Image
                src={client.src}
                alt={client.alt}
                width={180}
                height={100}
                className='h-auto object-contain'
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
