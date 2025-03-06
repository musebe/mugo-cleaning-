'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Facebook, Twitter, Clock } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BorderTrail } from './motion-primitives/border-trail';

export default function TopBar() {
  const { scrollY } = useScroll();
  const [lastScroll, setLastScroll] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Switch to using .on("change", callback)
    return scrollY.on('change', (current) => {
      const isScrollingDown = current > lastScroll;
      // Hide only if scrolling down beyond 50px
      setHidden(isScrollingDown && current > 50);
      setLastScroll(current);
    });
  }, [scrollY, lastScroll]);

  return (
    <motion.div
      // Slide up/down on scroll
      animate={{ y: hidden ? -60 : 0 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className='w-full bg-[color:var(--accent)] text-[color:var(--accent-foreground)] shadow-sm z-50'
      style={{ minHeight: '3.5rem' }}
    >
      <div className='max-w-7xl mx-auto px-4 h-full flex flex-col items-center justify-center gap-2 py-2 sm:flex-row sm:justify-between'>
        {/* Left: Social Icons & Hours */}
        <div className='flex flex-wrap items-center gap-3 text-sm sm:text-base'>
          <a
            href='#'
            aria-label='Facebook'
            className='inline-flex items-center hover:opacity-80 transition-opacity'
          >
            <Facebook className='w-5 h-5' />
          </a>
          <a
            href='#'
            aria-label='Twitter'
            className='inline-flex items-center hover:opacity-80 transition-opacity'
          >
            <Twitter className='w-5 h-5' />
          </a>
          <div className='flex items-center gap-1 whitespace-nowrap'>
            <Clock className='w-4 h-4' />
            <span>Mon - Fri: 09:00 AM - 10:00 PM</span>
          </div>
        </div>

        {/* Right: "Get A Quote" Button with BorderTrail */}
        <Link href='/contact'>
          <div className='relative inline-block'>
            <Button
              className='
                relative 
                px-4 
                py-2 
                text-sm sm:text-base 
                font-semibold 
                bg-[color:var(--quote-bg)]
                text-[color:var(--quote-text)]
                hover:opacity-90
                transition-all
                rounded-md
              '
            >
              Get A Quote
            </Button>

            <BorderTrail
              className='
                bg-gradient-to-l
                from-blue-200
                via-blue-500
                to-blue-200
                dark:from-blue-400
                dark:via-blue-500
                dark:to-blue-700
              '
              size={120}
            />
          </div>
        </Link>
      </div>
    </motion.div>
  );
}
