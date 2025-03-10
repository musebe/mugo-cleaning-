'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { commercialServicesData } from '@/data/commercialServicesData';

// Variants for the content animation
const contentVariants = {
  hidden: { opacity: 0, x: 30 },
  enter: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    x: -30,
    transition: { duration: 0.3, ease: 'easeIn' },
  },
};

export default function CommercialServicesPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className='bg-white min-h-screen'
    >
      <div className='mx-auto max-w-7xl px-4 md:px-6'>
        {/* Extra spacing below the navbar */}
        <div className='mt-8' />

        {/* Gray container that holds the heading + tab layout */}
        <section className='bg-muted dark:bg-muted py-12 px-4 rounded shadow-sm min-h-[500px] flex flex-col justify-start'>
          {/* Heading */}
          <div className='text-center mb-8'>
            <h1 className='text-3xl md:text-4xl font-bold text-foreground'>
              Commercial Services
            </h1>
            {/* Small underline centered */}
            <div className='w-16 h-[3px] bg-[color:var(--accent)] mt-2 mx-auto' />
          </div>

          {/* Two-column layout in white boxes */}
          <motion.section
            layout
            className='grid grid-cols-1 md:grid-cols-[300px_minmax(0,1fr)] gap-4 flex-grow'
          >
            {/* Sidebar (Tabs) */}
            <motion.aside
              layout
              className='bg-white dark:bg-muted border border-border rounded md:rounded-none md:rounded-l-lg md:border-r-0 overflow-hidden'
            >
              {commercialServicesData.map((item, index) => (
                <motion.button
                  key={item.label}
                  layout
                  onClick={() => setActiveTab(index)}
                  className={`
            w-full text-left px-4 py-3 text-sm font-semibold uppercase
            border-b border-border last:border-b-0
            transition-colors
            ${
              activeTab === index
                ? 'bg-[color:var(--secondary)] text-black'
                : 'bg-white dark:bg-muted text-foreground hover:bg-gray-100 dark:hover:bg-muted-foreground/20'
            }
          `}
                >
                  {item.label}
                </motion.button>
              ))}
            </motion.aside>

            {/* Main Content */}
            <motion.div
              layout
              className='bg-white dark:bg-muted border border-border p-4 md:p-6 rounded md:rounded-none md:rounded-r-lg'
            >
              <AnimatePresence mode='wait'>
                <motion.div
                  key={activeTab}
                  variants={contentVariants}
                  initial='hidden'
                  animate='enter'
                  exit='exit'
                >
                  <h2 className='text-xl md:text-2xl font-bold mb-4 text-foreground'>
                    {commercialServicesData[activeTab].label}
                  </h2>
                  {commercialServicesData[activeTab].content.map(
                    (paragraph, idx) => (
                      <p
                        key={idx}
                        className='mb-4 text-foreground leading-relaxed'
                      >
                        {paragraph}
                      </p>
                    )
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </motion.section>
        </section>
      </div>
    </motion.main>
  );
}
