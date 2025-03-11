'use client';

import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { CldImage } from 'next-cloudinary';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { carouselSlides } from '@/data/carouselData';

export default function HomepageCarousel() {
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const intervalRef = useRef<number | null>(null);

  // 1) Preload images
  useEffect(() => {
    let loadedCount = 0;
    carouselSlides.forEach((slide) => {
      const img = new Image();
      // Pull a reasonably large version so it’s not blurry on wide screens
      img.src = `https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/q_auto,f_auto/${slide.publicId}.jpg`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === carouselSlides.length) {
          setLoaded(true);
        }
      };
    });

    const timeout = setTimeout(() => setLoaded(true), 5000);
    return () => clearTimeout(timeout);
  }, []);

  // 2) Auto-slide every 5 seconds
  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % carouselSlides.length);
    }, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // Handlers
  const prevSlide = () => {
    setIndex(
      (prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length
    );
  };
  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % carouselSlides.length);
  };

  return (
    <div className='w-full overflow-hidden'>
      {/**
       * Removed `max-w-[100vw]` here. `overflow-hidden` stays to avoid wiggle.
       */}
      <section className='relative w-full h-[80vh] bg-section overflow-hidden'>
        {!loaded && (
          <div className='absolute inset-0 flex items-center justify-center bg-white'>
            <p>Loading...</p>
          </div>
        )}

        <AnimatePresence mode='wait'>
          {loaded && (
            <motion.div
              key={carouselSlides[index].id}
              className='absolute inset-0'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
            >
              <CldImage
                src={carouselSlides[index].publicId}
                alt={carouselSlides[index].alt}
                fill
                sizes='100vw'
                priority
                crop='fit'
                quality='auto'
                className='object-contain'
              />
              {carouselSlides[index].heading && (
                <div className='absolute top-16 left-1/2 -translate-x-1/2 w-[90%] max-w-2xl p-4 bg-black/50 rounded-lg text-center text-white'>
                  <h2 className='text-2xl md:text-4xl font-bold'>
                    {carouselSlides[index].heading}
                  </h2>
                  {carouselSlides[index].subheading && (
                    <p className='mt-2 text-lg md:text-xl'>
                      {carouselSlides[index].subheading}
                    </p>
                  )}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          aria-label='Previous Slide'
          className='absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3
                     bg-black/40 text-white rounded-full hover:bg-black/60 transition'
        >
          <ChevronLeft className='w-6 h-6' />
        </button>
        <button
          onClick={nextSlide}
          aria-label='Next Slide'
          className='absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3
                     bg-black/40 text-white rounded-full hover:bg-black/60 transition'
        >
          <ChevronRight className='w-6 h-6' />
        </button>

        {/* Indicators */}
        <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2'>
          {carouselSlides.map((_, dotIndex) => (
            <button
              key={dotIndex}
              onClick={() => setIndex(dotIndex)}
              aria-label={`Go to slide ${dotIndex + 1}`}
              className={`w-3 h-3 rounded-full transition ${
                dotIndex === index ? 'bg-black' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
