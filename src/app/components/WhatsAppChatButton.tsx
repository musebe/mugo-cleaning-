'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';

export default function WhatsAppChatButton() {
  // Omit the "+" in the link:
  // e.g., +254 722 254458 becomes "254722254458"
  const phoneNumber = '254722254458';

  // Build the WhatsApp link (no message text)
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <div className='fixed bottom-6 right-6 z-50'>
      <Link
        href={whatsappUrl}
        aria-label='Chat on WhatsApp'
        target='_blank'
        rel='noopener noreferrer'
      >
        {/* White “frame” around the green button */}
        <motion.div
          className='bg-white p-2 rounded shadow-lg'
          // Optional gentle bounce animation
          animate={{ y: [0, -3, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'loop',
          }}
        >
          <img
            src='/icons/WhatsAppButtonGreenSmall.svg'
            alt='Chat on WhatsApp'
            // Let the image size itself; remove max-w if you want it larger
            className='h-auto w-auto'
          />
        </motion.div>
      </Link>
    </div>
  );
}
