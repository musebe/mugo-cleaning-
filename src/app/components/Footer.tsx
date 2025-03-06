'use client';

import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer
      className='
        bg-[color:var(--primary)]
        text-[color:var(--primary-foreground)]
        py-12 px-6 sm:px-12
        transition-colors
      '
    >
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
        {/* Contact Info */}
        <div>
          <h3 className='text-lg font-semibold'>Contact Info</h3>
          <p className='text-sm mt-2'>
            We are a professional cleaning, fumigation, landscaping, and garbage
            collection company in Kenya.
          </p>
          <p className='text-sm font-medium mt-1'>
            QUALITY SERVICE, ALL DAY, EVERY DAY!
          </p>
          <div className='mt-4 space-y-3 text-sm'>
            <p className='flex items-center gap-2'>
              <MapPin className='w-5 h-5 text-[color:var(--accent)]' />
              Utumishi Coop House, Mamlaka Road, Nairobi, Kenya
            </p>
            <p className='flex items-center gap-2'>
              <Phone className='w-5 h-5 text-[color:var(--accent)]' />
              020 7867119, +254 725 060 174
            </p>
            <p className='flex items-center gap-2'>
              <Mail className='w-5 h-5 text-[color:var(--accent)]' />
              info@deedslimpeza.co.ke
            </p>
          </div>
        </div>

        {/* Quick Navigation */}
        <div>
          <h3 className='text-lg font-semibold'>Quick Navigation</h3>
          <ul className='mt-4 space-y-2 text-sm'>
            <li>
              <a
                href='#'
                className='hover:text-[color:var(--accent)] transition-colors'
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href='#'
                className='hover:text-[color:var(--accent)] transition-colors'
              >
                Board of Directors
              </a>
            </li>
            <li>
              <a
                href='#'
                className='hover:text-[color:var(--accent)] transition-colors'
              >
                Our Team
              </a>
            </li>
            <li>
              <a
                href='#'
                className='hover:text-[color:var(--accent)] transition-colors'
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href='#'
                className='hover:text-[color:var(--accent)] transition-colors'
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href='#'
                className='hover:text-[color:var(--accent)] transition-colors'
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                href='#'
                className='hover:text-[color:var(--accent)] transition-colors'
              >
                Videos
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className='text-lg font-semibold'>Services</h3>
          <ul className='mt-4 space-y-2 text-sm'>
            <li>
              <a
                href='#'
                className='hover:text-[color:var(--accent)] transition-colors'
              >
                Domestic Services
              </a>
            </li>
            <li>
              <a
                href='#'
                className='hover:text-[color:var(--accent)] transition-colors'
              >
                Commercial Services
              </a>
            </li>
            <li>
              <a
                href='#'
                className='hover:text-[color:var(--accent)] transition-colors'
              >
                Fumigation &amp; Pest Control
              </a>
            </li>
            <li>
              <a
                href='#'
                className='hover:text-[color:var(--accent)] transition-colors'
              >
                Sanitary Hygiene Solutions
              </a>
            </li>
            <li>
              <a
                href='#'
                className='hover:text-[color:var(--accent)] transition-colors'
              >
                Garbage Collection
              </a>
            </li>
            <li>
              <a
                href='#'
                className='hover:text-[color:var(--accent)] transition-colors'
              >
                Landscaping &amp; Gardening
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className='mt-10 border-t border-[color:var(--border)] pt-6 text-sm text-center'>
        <div className='flex flex-col sm:flex-row justify-between items-center gap-4 max-w-7xl mx-auto'>
          <p>
            &copy; {new Date().getFullYear()} Deeds Limpeza. All Rights
            Reserved.
          </p>

          {/* Social Media Icons */}
          <div className='flex gap-4'>
            <a
              href='#'
              className='hover:text-[color:var(--accent)] transition-colors'
            >
              <Facebook className='w-5 h-5' />
            </a>
            <a
              href='#'
              className='hover:text-[color:var(--accent)] transition-colors'
            >
              <Twitter className='w-5 h-5' />
            </a>
            <a
              href='#'
              className='hover:text-[color:var(--accent)] transition-colors'
            >
              <Instagram className='w-5 h-5' />
            </a>
            <a
              href='#'
              className='hover:text-[color:var(--accent)] transition-colors'
            >
              <Linkedin className='w-5 h-5' />
            </a>
            <a
              href='#'
              className='hover:text-[color:var(--accent)] transition-colors'
            >
              <Youtube className='w-5 h-5' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
