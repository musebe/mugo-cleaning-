'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, Search, X, Sun, Moon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';

const links = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Careers', href: '/careers' },
  { name: 'Tenders', href: '/tenders' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

const mobileMenuVariants = {
  hidden: { x: '-100%', opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: 'easeInOut' },
  },
  exit: {
    x: '-100%',
    opacity: 0,
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.nav
      className='
        sticky top-0 z-40 w-full
        bg-[color:var(--primary)]
        text-[color:var(--primary-foreground)]
        shadow-md
      '
    >
      <div className='max-w-7xl mx-auto flex items-center justify-between px-6 py-3'>
        {/* 
          1) Wrap the logo in a container 
          2) Give it a white background
          3) Add some padding or border radius if desired
        */}
        <div className='bg-white px-3 py-2 rounded'>
          <Link href='/'>
            <div className='relative w-[120px] h-[40px] cursor-pointer'>
              <Image
                src='/logo.png'
                alt='Logo'
                fill
                className='object-contain'
              />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className='hidden md:flex items-center gap-6 text-base font-medium'>
          {links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className='hover:text-[color:var(--accent)] transition-colors'
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Side: Search, Dark Mode Toggle, Mobile Menu Button */}
        <div className='flex items-center gap-4'>
          <Search className='w-5 h-5 cursor-pointer hover:opacity-80 hidden md:block' />

          <Button
            variant='ghost'
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className='p-2'
          >
            {mounted &&
              (theme === 'dark' ? (
                <Sun className='w-5 h-5' />
              ) : (
                <Moon className='w-5 h-5' />
              ))}
          </Button>

          <Button
            variant='ghost'
            className='md:hidden p-2'
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X className='w-6 h-6' />
            ) : (
              <Menu className='w-6 h-6' />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key='mobile-menu'
            variants={mobileMenuVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
            className='
              md:hidden
              bg-[color:var(--primary)]
              text-[color:var(--primary-foreground)]
              py-4 px-6
              space-y-4
            '
          >
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className='
                  block text-center py-2 text-lg
                  hover:text-[color:var(--accent)]
                  transition-colors
                '
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
