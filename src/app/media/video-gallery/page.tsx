'use client';

import Link from 'next/link';

export default function VideosPage() {
  return (
    <section className='max-w-screen-md mx-auto px-4 py-16 min-h-[80vh]'>
      <h1 className='text-2xl font-bold mb-4'>
        Oops, we don’t have any videos at this time!
      </h1>
      <p className='text-lg mb-8'>
        Please visit our <strong>Photos</strong> page to view our awesome
        images.
      </p>

      {/* Use Next.js Link instead of <a> */}
      <Link
        href='/media/photo-gallery'
        className='inline-block px-6 py-3 bg-primary text-white rounded-lg'
      >
        Go to Photos
      </Link>

      {/* Optional extra content to increase height even more */}
      <div className='mt-8 text-gray-600'>
        <p>
          We are constantly working on producing high-quality cleaning videos.
          In the meantime, check out our photos page for a peek at what we do.
        </p>
        <p className='mt-4'>
          Feel free to explore our other services, read testimonials, and see
          how we’ve helped clients achieve sparkling results.
        </p>
      </div>
    </section>
  );
}
