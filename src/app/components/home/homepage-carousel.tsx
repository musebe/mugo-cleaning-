'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CldImage } from 'next-cloudinary';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Type for each slide
interface Slide {
  id: number;
  publicId: string;
  alt: string;
  heading?: string; // optional heading
  subheading?: string; // optional subheading
  priority?: boolean;
}

// Example slides with some text overlay on select slides
const slides: Slide[] = [
  {
    id: 1,
    publicId: 'mudo/cleaning-company-1',
    alt: 'Hygienic Environment - Slide 1',
    priority: true,
    heading: 'We create a hygienic working environment for your team',
    subheading: 'Focus on your core business, let us handle the cleaning.',
  },
  {
    id: 2,
    publicId: 'mudo/cleaning-company-2',
    alt: 'Office Cleaning - Slide 2',
    priority: true,
  },
  {
    id: 3,
    publicId: 'mudo/cleaning-company-4',
    alt: 'Clean Workspaces - Slide 3',
    priority: true,
    heading: 'We always come clean',
    subheading:
      'We are a professional cleaning, fumigation, landscaping and garbage collection company in Kenya.',
  },
  {
    id: 4,
    publicId: 'mudo/cleaning-company-3',
    alt: 'Sanitary Supplies - Slide 4',
    priority: true,
  },
  {
    id: 5,
    publicId: 'mudo/cleaning-company-5',
    alt: 'Eco-Friendly Cleaning - Slide 5',
    priority: true,
    heading: 'Get your spaces sparkling clean',
    subheading: 'From offices to hospitals, we ensure a spotless environment.',
  },
  {
    id: 6,
    publicId: 'mudo/cleaning-company-7',
    alt: 'Professional Team - Slide 6',
    priority: true,
  },
  {
    id: 7,
    publicId: 'mudo/cleaning-company-6',
    alt: 'Polished Floors - Slide 7',
    priority: true,
    heading: 'Experience our tailored solutions',
    subheading:
      'We adapt to your unique needs, delivering consistent excellence.',
  },
  {
    id: 8,
    publicId: 'mudo/cleaning-company-8',
    alt: 'Team Collaboration - Slide 8',
    priority: true,
  },
  {
    id: 9,
    publicId: 'mudo/cleaning-company-10',
    alt: 'Exceptional Standards - Slide 9',
    priority: true,
    heading: 'Trust our dedicated team',
    subheading: 'We’ve grown from 2 to 200 staff, always focused on quality.',
  },
  {
    id: 10,
    publicId: 'mudo/cleaning-company-9',
    alt: 'Productive Clean Spaces - Slide 10',
    priority: true,
  },
];

// Read your Cloudinary cloud name from env (fallback if missing)
const cloudName =
  process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'hackit-africa';

// We have three background classes to choose from
const backgroundClasses = ['bg-primary', 'bg-secondary', 'bg-accent'];

// Simple function to build a Cloudinary URL for preloading (adjust extension if needed)
function getImageUrl(publicId: string): string {
  return `https://res.cloudinary.com/${cloudName}/image/upload/c_fit/${publicId}.jpeg`;
}

export default function HomepageCarousel() {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // Using number | null so that window.setInterval returns a number in the browser
  const intervalRef = useRef<number | null>(null);

  // 1) Assign a random background color to each slide exactly once
  const slidesWithBg = useMemo(() => {
    return slides.map((slide) => {
      const randomBg =
        backgroundClasses[Math.floor(Math.random() * backgroundClasses.length)];
      return { ...slide, bgClass: randomBg };
    });
  }, []);

  // 2) Preload images before starting the slideshow
  useEffect(() => {
    let loadedCount = 0;

    slidesWithBg.forEach((slide) => {
      const img = new Image();
      const url = getImageUrl(slide.publicId);

      console.log(`Preloading image URL for ${slide.publicId}: ${url}`);

      img.onload = () => {
        loadedCount++;
        if (loadedCount === slidesWithBg.length) {
          setLoaded(true);
        }
      };
      img.onerror = () => {
        console.error(`Failed to load image: ${slide.publicId} at ${url}`);
        loadedCount++;
        if (loadedCount === slidesWithBg.length) {
          setLoaded(true);
        }
      };
      img.src = url;
    });

    // Fallback: start slideshow after 5 seconds even if some images fail
    const timeout = window.setTimeout(() => {
      setLoaded(true);
    }, 5000);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [slidesWithBg]);

  // 3) Auto-slide logic (only when images are loaded and not hovered)
  useEffect(() => {
    if (!loaded || isHovered) return;

    intervalRef.current = window.setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slidesWithBg.length);
    }, 5000); // 5 seconds interval

    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, [index, isHovered, loaded, slidesWithBg.length]);

  return (
    <section
      className='relative w-full h-[85vh] overflow-hidden'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {!loaded ? (
        <div className='absolute inset-0 flex items-center justify-center bg-muted'>
          <p>Loading...</p>
        </div>
      ) : (
        <AnimatePresence>
          {/* Slide Background & Image */}
          <motion.div
            key={slidesWithBg[index].id}
            className={`absolute inset-0 w-full h-full ${slidesWithBg[index].bgClass}`}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }} // slower transition
          >
            <CldImage
              src={slidesWithBg[index].publicId}
              alt={slidesWithBg[index].alt}
              fill
              priority={true} // mark as priority to avoid LCP warnings
              sizes='100vw'
              quality={100}
              crop='fit'
              className='w-full h-full object-contain'
            />
          </motion.div>

          {/* Text overlay (only if defined for this slide) */}
          {slidesWithBg[index].heading && (
            <motion.div
              key={`text-${slidesWithBg[index].id}`}
              className='absolute top-10 left-1/2 -translate-x-1/2 w-[90%] max-w-2xl p-4 bg-black/40 rounded drop-shadow-lg text-center text-white'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1.2, delay: 0.6 }}
            >
              <h2 className='text-xl md:text-3xl font-bold'>
                {slidesWithBg[index].heading}
              </h2>
              {slidesWithBg[index].subheading && (
                <p className='mt-2 text-base md:text-lg'>
                  {slidesWithBg[index].subheading}
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
              (prevIndex - 1 + slidesWithBg.length) % slidesWithBg.length
          )
        }
        aria-label='Previous Slide'
        className='absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 dark:bg-black/60 text-white rounded-full hover:bg-black/70 transition'
      >
        <ChevronLeft className='w-5 h-5' />
      </button>

      <button
        onClick={() =>
          setIndex((prevIndex) => (prevIndex + 1) % slidesWithBg.length)
        }
        aria-label='Next Slide'
        className='absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 dark:bg-black/60 text-white rounded-full hover:bg-black/70 transition'
      >
        <ChevronRight className='w-5 h-5' />
      </button>

      {/* Dots (Indicator) */}
      <div className='absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2'>
        {slidesWithBg.map((_, dotIndex) => (
          <button
            key={dotIndex}
            onClick={() => setIndex(dotIndex)}
            aria-label={`Go to slide ${dotIndex + 1}`}
            className={`w-3 h-3 rounded-full transition ${
              dotIndex === index ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
