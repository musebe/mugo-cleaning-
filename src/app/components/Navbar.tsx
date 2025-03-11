'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // or 'motion/react' if using Motion One
import {
  Menu,
  Search,
  X,
  Sun,
  Moon,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';

interface NavItem {
  name: string;
  href: string;
  subItems?: { name: string; href: string }[];
}

const navItems: NavItem[] = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About Us',
    href: '/about',
    subItems: [{ name: 'Who we are', href: '/about' }],
  },
  {
    name: 'Services',
    href: '/services',
    subItems: [
      { name: 'Commercial Services', href: '/services/commercial' },
      { name: 'Domestic Services', href: '/services/domestic' },
    ],
  },
  {
    name: 'Careers',
    href: '/careers',
  },
  {
    name: 'Tenders',
    href: '/tenders',
  },
  {
    name: 'Media',
    href: '/media',
    subItems: [
      { name: 'Photo Gallery', href: '/media/photo-gallery' },
      { name: 'Video Gallery', href: '/media/video-gallery' },
    ],
  },
  {
    name: 'Contact',
    href: '/contact',
  },
];

// Framer Motion variants for the mobile slide-in menu
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
  const [menuOpen, setMenuOpen] = useState(false); // For entire mobile menu
  const [openDropdowns, setOpenDropdowns] = useState<{
    [key: string]: boolean;
  }>({});
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Desktop: open the sub-menu with delayed close
  const handleMouseEnter = (itemName: string) => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setHoveredItem(itemName);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setHoveredItem(null);
    }, 300);
  };

  // Mobile: toggle sub-menu by name
  const toggleSubMenu = (itemName: string) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [itemName]: !prev[itemName],
    }));
  };

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
        {/* LOGO: removed the white background container */}
        <Link href='/'>
          <div className='relative w-[120px] h-[40px] cursor-pointer'>
            <Image src='/logo2.png' alt='Logo' fill className='object-contain' />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className='hidden md:flex items-center gap-6 text-base font-medium'>
          {navItems.map((item) => {
            const hasSubItems = item.subItems && item.subItems.length > 0;
            if (!hasSubItems) {
              return (
                <li key={item.name}>
                  <Link
                    href={item.href || '#'}
                    className='hover:text-[color:var(--accent)] transition-colors'
                  >
                    {item.name}
                  </Link>
                </li>
              );
            }
            return (
              <li
                key={item.name}
                className='relative'
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                <span className='flex items-center cursor-pointer hover:text-[color:var(--accent)] transition-colors'>
                  {item.name}
                  <ChevronDown className='w-4 h-4 ml-1' />
                </span>
                {hoveredItem === item.name && (
                  <div
                    onMouseEnter={() => {
                      if (closeTimeoutRef.current)
                        clearTimeout(closeTimeoutRef.current);
                      setHoveredItem(item.name);
                    }}
                    onMouseLeave={handleMouseLeave}
                    className='absolute left-0 mt-2 w-64 rounded bg-[#89cff0] text-white py-2 z-10 shadow-md divide-y divide-white'
                  >
                    {item.subItems!.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className='block px-4 py-2 hover:bg-[#78b6d6] transition-colors'
                        onClick={() => setHoveredItem(null)}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            );
          })}
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
            {navItems.map((item) => {
              const hasSubItems = item.subItems && item.subItems.length > 0;
              if (!hasSubItems) {
                return (
                  <Link
                    key={item.name}
                    href={item.href || '#'}
                    onClick={() => setMenuOpen(false)}
                    className='
                      block py-2 text-lg
                      hover:text-[color:var(--accent)]
                      transition-colors
                    '
                  >
                    {item.name}
                  </Link>
                );
              }
              const isOpen = !!openDropdowns[item.name];
              return (
                <div key={item.name}>
                  <div
                    className='
                      flex items-center justify-between
                      py-2 px-2 text-lg font-semibold
                      hover:text-[color:var(--accent)]
                      transition-colors
                      cursor-pointer
                    '
                  >
                    <span>{item.name}</span>
                    <button
                      onClick={() => toggleSubMenu(item.name)}
                      className='bg-black text-white p-1 rounded'
                    >
                      {isOpen ? (
                        <ChevronUp className='w-4 h-4' />
                      ) : (
                        <ChevronDown className='w-4 h-4' />
                      )}
                    </button>
                  </div>
                  {isOpen && (
                    <div className='ml-4 border-l border-[color:var(--primary-foreground)] pl-4 mt-2 space-y-2'>
                      {item.subItems!.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          onClick={() => {
                            setMenuOpen(false);
                            setOpenDropdowns({});
                          }}
                          className='
                            block text-base
                            hover:text-[color:var(--accent)]
                            transition-colors
                          '
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
