'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CldImage } from 'next-cloudinary';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { carouselSlides } from '@/data/carouselData';


// Type for each slide
interface Slide {
  id: number;
  publicId: string;
  alt: string;
  heading?: string;
  subheading?: string;
  priority?: boolean;
}

// Cloudinary Cloud Name
const cloudName =
  process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'hackit-africa';

// Function to generate Cloudinary image URLs
function getImageUrl(publicId: string): string {
  return `https://res.cloudinary.com/${cloudName}/image/upload/c_fit/${publicId}.jpeg`;
}

export default function HomepageCarousel() {
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const intervalRef = useRef<number | null>(null);

  // 1) Preload images for a smooth first render
  useEffect(() => {
    let loadedCount = 0;

    carouselSlides.forEach((slide) => {
      const img = new Image();
      img.src = getImageUrl(slide.publicId);
      img.onload = () => {
        loadedCount++;
        if (loadedCount === carouselSlides.length) setLoaded(true);
      };
    });

    // Fallback in case images don’t load
    const timeout = setTimeout(() => setLoaded(true), 5000);
    return () => clearTimeout(timeout);
  }, []);

  // 2) Auto-slide logic
  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % carouselSlides.length);
    }, 5000);

    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, [index]);

  return (
    <div className='w-full overflow-hidden'>
      <section className='relative w-full h-[85vh] max-w-[100vw] overflow-hidden'>
        {!loaded ? (
          <div className='absolute inset-0 flex items-center justify-center bg-white'>
            <p>Loading...</p>
          </div>
        ) : (
          <AnimatePresence>
            {/* Slide Background & Image */}
            <motion.div
              key={carouselSlides[index].id}
              className={`absolute inset-0 w-full h-full ${
                index % 2 === 0 ? 'bg-primary' : 'bg-white'
              } flex justify-center items-center`}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            >
              <CldImage
                src={carouselSlides[index].publicId}
                alt={carouselSlides[index].alt}
                fill
                priority={true}
                sizes='100vw'
                quality={100}
                crop='fit'
                className='w-full h-full object-cover'
              />
            </motion.div>

            {/* Text Overlay */}
            {carouselSlides[index].heading && (
              <motion.div
                key={`text-${carouselSlides[index].id}`}
                className='absolute top-16 left-1/2 -translate-x-1/2 w-[90%] max-w-2xl p-4 bg-black/50 rounded-lg text-center text-white'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 1.2, delay: 0.6 }}
              >
                <h2 className='text-2xl md:text-4xl font-bold'>
                  {carouselSlides[index].heading}
                </h2>
                {carouselSlides[index].subheading && (
                  <p className='mt-2 text-lg md:text-xl'>
                    {carouselSlides[index].subheading}
                  </p>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        )}

        {/* Navigation Arrows */}
        <button
          onClick={() =>
            setIndex(
              (prevIndex) =>
                (prevIndex - 1 + carouselSlides.length) % carouselSlides.length
            )
          }
          aria-label='Previous Slide'
          className='absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/20 text-white rounded-full hover:bg-white/30 transition'
        >
          <ChevronLeft className='w-6 h-6' />
        </button>

        <button
          onClick={() =>
            setIndex((prevIndex) => (prevIndex + 1) % carouselSlides.length)
          }
          aria-label='Next Slide'
          className='absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/20 text-white rounded-full hover:bg-white/30 transition'
        >
          <ChevronRight className='w-6 h-6' />
        </button>

        {/* Dots (Indicator) */}
        <div className='absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2'>
          {carouselSlides.map((_, dotIndex) => (
            <button
              key={dotIndex}
              onClick={() => setIndex(dotIndex)}
              aria-label={`Go to slide ${dotIndex + 1}`}
              className={`w-3 h-3 rounded-full transition ${
                dotIndex === index ? 'bg-primary' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
