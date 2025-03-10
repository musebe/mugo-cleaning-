'use client';

import Link from 'next/link';

export default function TendersPage() {
  return (
    <main className='bg-section min-h-[70vh] py-12 px-4 md:px-8'>
      <div className='max-w-5xl mx-auto text-center'>
        <h1 className='text-3xl md:text-4xl font-bold mb-4 text-foreground'>
          Tenders
        </h1>
        <p className='text-lg md:text-xl text-foreground/80 leading-relaxed mb-6'>
          Currently, <strong>The Deeds Limpeza</strong> does not have any active
          tenders. We frequently update our offerings to provide the latest
          opportunities, so please check back soon. If you have products or
          services you wish to supply, we encourage you to stay connected and
          watch for future announcements.
        </p>
        <Link
          href='/contact'
          className='inline-block bg-[color:var(--secondary)] text-secondary-foreground font-semibold px-6 py-3 rounded shadow-md hover:opacity-90 transition-opacity'
        >
          Contact Us
        </Link>
      </div>
    </main>
  );
}
