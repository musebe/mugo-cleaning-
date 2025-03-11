'use client';

import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { CldImage } from 'next-cloudinary';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { photosData } from '@/data/photosData';

export default function PhotosPage() {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Open the modal with the selected index
  const handleOpenModal = (index: number) => {
    setCurrentIndex(index);
  };

  // Close the modal
  const handleCloseModal = () => {
    setCurrentIndex(null);
  };

  // Show previous photo
  const showPrev = () => {
    if (currentIndex === null) return;
    setCurrentIndex(
      (prev) => (prev! - 1 + photosData.length) % photosData.length
    );
  };

  // Show next photo
  const showNext = () => {
    if (currentIndex === null) return;
    setCurrentIndex((prev) => (prev! + 1) % photosData.length);
  };

  // Auto-advance every 4s while modal is open
  useEffect(() => {
    if (currentIndex !== null) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => ((prev ?? 0) + 1) % photosData.length);
      }, 4000);
    } else {
      // If modal is closed, clear interval
      if (intervalRef.current) clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [currentIndex]);

  return (
    <section className='max-w-screen-xl mx-auto py-8 px-4'>
      {/* Centered heading in DarkBlue (var(--primary)) */}
      <h1 className='text-2xl font-bold mb-6 text-center text-primary'>
        Our Photo Gallery
      </h1>

      {/* Responsive grid: 2 columns on mobile, 3 columns on md+ */}
      <div className='grid gap-4 grid-cols-2 md:grid-cols-3'>
        {photosData.map((photo, index) => (
          <div
            key={photo.id}
            className='relative cursor-pointer border border-gray-300 p-1 rounded-md'
          >
            <CldImage
              src={photo.publicId}
              alt={photo.alt}
              width='400'
              height='300'
              crop='fill'
              className='object-cover w-full h-auto'
              onClick={() => handleOpenModal(index)}
            />
          </div>
        ))}
      </div>

      {/* AnimatePresence for the modal/slideshow */}
      <AnimatePresence>
        {currentIndex !== null && (
          <motion.div
            className='fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Click the backdrop to close */}
            <div className='absolute inset-0' onClick={handleCloseModal} />

            {/* Modal content (photo, arrows, close button, no title) */}
            <motion.div
              className='relative max-w-3xl w-full flex items-center justify-center 
                         border-4 border-primary p-4 bg-white dark:bg-[#0A0F2C] 
                         rounded-xl'
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              {/* Close button */}
              <button
                onClick={handleCloseModal}
                className='absolute top-3 right-3 p-2 text-white bg-black/50 rounded-full'
              >
                <X className='w-6 h-6' />
              </button>

              {/* Left arrow */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  showPrev();
                }}
                className='absolute left-3 p-2 text-white bg-black/50 rounded-full'
              >
                <ChevronLeft className='w-6 h-6' />
              </button>

              {/* The main image */}
              <CldImage
                src={photosData[currentIndex].publicId}
                alt={photosData[currentIndex].alt}
                width='800'
                height='600'
                crop='fit'
                quality='auto'
                className='object-contain max-h-[80vh]'
              />

              {/* Right arrow */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  showNext();
                }}
                className='absolute right-3 p-2 text-white bg-black/50 rounded-full'
              >
                <ChevronRight className='w-6 h-6' />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
