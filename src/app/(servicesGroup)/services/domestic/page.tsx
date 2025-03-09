'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

const subItems = [
  {
    label: 'Fumigation & Pest Control',
    content: [
      'Reliable Fumigation & Pest Control Services',
      'Fumigation is one of the most efficient ways to eliminate pests. At Parapets, we provide expert fumigation and pest control services for homes, schools, and offices, effectively eradicating cockroaches, bedbugs, termites, rodents, snakes, and more.',
      'Why Choose Us?',
      'Thorough Inspection – We assess your property before treatment to identify the extent and type of infestation.',
      'Customized Approach – Our treatments are tailored to target specific pests using the most effective techniques.',
      'Follow-Up Treatments – If necessary, we provide additional treatments to ensure complete pest eradication.',
      'Safe & Compliant – We adhere to COSHH (Control of Substances Hazardous to Health) regulations, ensuring safe fumigation practices.',
      'Preventive Advice – Our experts offer guidance on how to prevent future infestations.',
      'Post-Treatment Check – We revisit your property after about two weeks to monitor progress and confirm success.',
      'With our dedicated team, you can rest easy knowing that pests will no longer be a problem in your space.',
    ],
  },
  {
    label: 'Area Rug',
    content: [
      'Expert Rug Cleaning – Protect Your Investment',
      'When it comes to area rugs, professional cleaning is the only way to go. While tackling the job yourself might seem like a cost-saving idea, it can often do more harm than good. Why? Because rugs require a delicate yet effective cleaning process to maintain their quality and longevity.',
      'At The Deeds Limpeza, our skilled technicians specialize in cleaning all types of area rugs, treating their delicate fibers with the utmost care. Unfortunately, many DIY attempts lead to irreversible damage—whether from excessive scrubbing or using the wrong cleaning products and tools.',
      'Your area rugs are valuable, both in cost and sentiment. Don’t take unnecessary risks—trust The Deeds Limpeza for expert cleaning that keeps your rugs looking fresh and beautiful.',
    ],
  },
  {
    label: 'Landscaping & Gardening',
    content: [
      'Bringing Your Outdoor Space to Life',
      'Our domestic gardening and landscaping services are tailored to enhance your home’s outdoor beauty. Whether you have a cozy backyard or a large estate, our skilled professionals are committed to turning your vision into reality.',
      'We provide a variety of services to suit your needs, including:',
      '• Lawn Maintenance – Regular trimming, fertilization, and upkeep for a lush, green lawn.',
      '• Garden Design & Planting – Beautiful flower gardens that add charm and elegance.',
      '• Outdoor Enhancements – Installation of water features and stylish outdoor living spaces.',
      'No matter the size of your space, we’re here to create a well-maintained and visually stunning landscape for your home.',
    ],
  },
  {
    label: 'Home Spring Cleaning',
    content: [
      'The Deeds Limpeza – Professional House Cleaning Done Right',
      'At The Deeds Limpeza, we go beyond surface cleaning to ensure every inch of your home is spotless. Our skilled and detail-oriented housekeeping team leaves no corner untouched, giving your space a fresh and immaculate feel.',
      'What We Offer:',
      '• Thorough Dusting & Cobweb Removal – We reach every nook and cranny, including ceilings and shelves.',
      '• Furniture & Surface Care – Restoring the shine and elegance of your home’s interior.',
      '• Kitchen & Bathroom Deep Cleaning – Ensuring these high-use areas remain hygienic and sparkling.',
      'Expecting guests or tidying up after an event? Leave the cleaning to us while you focus on what matters most.',
      'For tailored cleaning solutions that suit every budget, trust The Deeds Limpeza—where quality meets excellence.',
    ],
  },
];

// Variants for content animation (sliding/fading on tab change)
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

export default function DomesticServicesPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className='pb-8 pt-4'
    >
      <div className='mx-auto max-w-7xl px-4 md:px-6'>
        {/* Heading Section */}
        <section className='bg-white border border-border p-6 mb-6 rounded shadow-sm text-center'>
          <h1 className='text-3xl md:text-4xl font-bold text-foreground'>
            Domestic Services
          </h1>
          <div className='w-16 h-[3px] bg-[color:var(--accent)] mt-2 mx-auto' />
        </section>

        {/* 2-column layout with motion */}
        <motion.section
          layout
          className='grid grid-cols-1 md:grid-cols-[300px_minmax(0,1fr)] gap-4'
        >
          {/* Sidebar (Tabs) */}
          <motion.aside
            layout
            className='bg-white border border-border rounded md:rounded-none md:rounded-l-lg md:border-r-0 overflow-hidden'
          >
            {subItems.map((item, index) => (
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
                      : 'bg-white text-foreground hover:bg-gray-100'
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
            className='bg-white border border-border p-4 md:p-6 rounded md:rounded-none md:rounded-r-lg'
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
                  {subItems[activeTab].label}
                </h2>
                {subItems[activeTab].content.map((paragraph, idx) => (
                  <p key={idx} className='mb-4 text-foreground leading-relaxed'>
                    {paragraph}
                  </p>
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.section>
      </div>
    </motion.main>
  );
}
