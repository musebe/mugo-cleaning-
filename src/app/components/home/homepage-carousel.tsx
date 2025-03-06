'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CldImage } from 'next-cloudinary';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Type for each slide
interface Slide {
  id: number;
  publicId: string;
  alt: string;
  heading?: string;
  subheading?: string;
  priority?: boolean;
}

// Slide Data
const slides: Slide[] = [
  {
    id: 1,
    publicId: 'mudo/cleaning-company-1',
    alt: 'Hygienic Environment',
    priority: true,
    heading: 'We create a hygienic working environment for your team',
    subheading: 'Focus on your core business, let us handle the cleaning.',
  },
  {
    id: 2,
    publicId: 'mudo/cleaning-company-2',
    alt: 'Office Cleaning',
    priority: true,
  },
  {
    id: 3,
    publicId: 'mudo/cleaning-company-4',
    alt: 'Clean Workspaces',
    priority: true,
    heading: 'We always come clean',
    subheading:
      'We are a professional cleaning, fumigation, landscaping and garbage collection company in Kenya.',
  },
  {
    id: 4,
    publicId: 'mudo/cleaning-company-3',
    alt: 'Sanitary Supplies',
    priority: true,
  },
  {
    id: 5,
    publicId: 'mudo/cleaning-company-5',
    alt: 'Eco-Friendly Cleaning',
    priority: true,
    heading: 'Get your spaces sparkling clean',
    subheading: 'From offices to hospitals, we ensure a spotless environment.',
  },
  {
    id: 6,
    publicId: 'mudo/cleaning-company-7',
    alt: 'Professional Team',
    priority: true,
  },
  {
    id: 7,
    publicId: 'mudo/cleaning-company-6',
    alt: 'Polished Floors',
    priority: true,
    heading: 'Experience our tailored solutions',
    subheading:
      'We adapt to your unique needs, delivering consistent excellence.',
  },
  {
    id: 8,
    publicId: 'mudo/cleaning-company-8',
    alt: 'Team Collaboration',
    priority: true,
  },
  {
    id: 9,
    publicId: 'mudo/cleaning-company-10',
    alt: 'Exceptional Standards',
    priority: true,
    heading: 'Trust our dedicated team',
    subheading: 'We’ve grown from 2 to 200 staff, always focused on quality.',
  },
  {
    id: 10,
    publicId: 'mudo/cleaning-company-9',
    alt: 'Productive Clean Spaces',
    priority: true,
  },
];

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

    slides.forEach((slide) => {
      const img = new Image();
      img.src = getImageUrl(slide.publicId);
      img.onload = () => {
        loadedCount++;
        if (loadedCount === slides.length) setLoaded(true);
      };
    });

    // Fallback in case images don’t load
    const timeout = setTimeout(() => setLoaded(true), 5000);
    return () => clearTimeout(timeout);
  }, []);

  // 2) Auto-slide logic
  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
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
              key={slides[index].id}
              className={`absolute inset-0 w-full h-full ${
                index % 2 === 0 ? 'bg-primary' : 'bg-white'
              } flex justify-center items-center`}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            >
              <CldImage
                src={slides[index].publicId}
                alt={slides[index].alt}
                fill
                priority={true}
                sizes='100vw'
                quality={100}
                crop='fit'
                className='w-full h-full object-cover'
              />
            </motion.div>

            {/* Text Overlay */}
            {slides[index].heading && (
              <motion.div
                key={`text-${slides[index].id}`}
                className='absolute top-16 left-1/2 -translate-x-1/2 w-[90%] max-w-2xl p-4 bg-black/50 rounded-lg text-center text-white'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 1.2, delay: 0.6 }}
              >
                <h2 className='text-2xl md:text-4xl font-bold'>
                  {slides[index].heading}
                </h2>
                {slides[index].subheading && (
                  <p className='mt-2 text-lg md:text-xl'>
                    {slides[index].subheading}
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
              (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
            )
          }
          aria-label='Previous Slide'
          className='absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/20 text-white rounded-full hover:bg-white/30 transition'
        >
          <ChevronLeft className='w-6 h-6' />
        </button>

        <button
          onClick={() =>
            setIndex((prevIndex) => (prevIndex + 1) % slides.length)
          }
          aria-label='Next Slide'
          className='absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/20 text-white rounded-full hover:bg-white/30 transition'
        >
          <ChevronRight className='w-6 h-6' />
        </button>

        {/* Dots (Indicator) */}
        <div className='absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2'>
          {slides.map((_, dotIndex) => (
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
