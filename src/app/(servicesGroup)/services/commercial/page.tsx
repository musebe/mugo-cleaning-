'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

// Define each tab's label & content
const subItems = [
  {
    label: 'Commercial Property Cleaning',
    content: [
      'Professional Commercial Cleaning Services by The Deeds Limpeza',
      'At The Deeds Limpeza, we specialize in high-quality cleaning solutions for commercial buildings, industries, factories, and warehouses. Whether you need a one-time deep clean or ongoing contractual services, we ensure efficiency, reliability, and minimal disruption to your operations.',
      'What Sets Us Apart?',
      '• Strict Supervision & Quality Assurance – Every project is closely monitored to maintain top-tier standards.',
      '• Well-Trained & Dedicated Staff – Our full-time employees undergo continuous training to deliver exceptional results.',
      '• Smart & Innovative Cleaning Methods – We use advanced techniques to enhance efficiency and customer satisfaction.',
      'We proudly serve churches, hospitals, banks, cold rooms, factories, and office buildings, keeping them spotless and well-maintained.',
      'For a cleaning service you can trust, choose The Deeds Limpeza—where quality meets professionalism.',
    ],
  },
  {
    label: 'Event Cleanup',
    content: [
      'Flawless Event Cleaning by The Deeds Limpeza',
      'At The Deeds Limpeza, our event cleaning expertise speaks for itself—whether for indoor or outdoor gatherings. We are committed to excellence in both service delivery and logistical operations, ensuring a spotless and well-maintained environment for your event.',
      'No matter the event size, guest count, or unexpected challenges, we’ve got you covered! From backyard barbecues to large-scale events like sporting activities (e.g., Marathon events), expos, and fashion shows, our team ensures seamless cleaning from start to finish.',
      'Let The Deeds Limpeza handle the cleanup, so you can focus on creating a successful event!',
    ],
  },
  {
    label: 'Executive Office Cleaning',
    content: [
      'Expert Office & Commercial Cleaning by The Deeds Limpeza',
      'At The Deeds Limpeza, office and commercial cleaning are at the heart of what we do. We are committed to providing professional, efficient, and high-quality cleaning solutions tailored to your specific needs. Whether you require routine maintenance or deep cleaning, we ensure a spotless and hygienic workspace with minimal disruption.',
      'A clean, organized office boosts productivity, enhances employee satisfaction, and creates a welcoming environment for clients. We work with you to develop a customized cleaning program that meets your business requirements.',
      'Our Services Include:',
      '• Routine Office Cleaning – Daily, weekly, or customized schedules to maintain a pristine workspace.',
      '• Special Event Cleaning – Pre- and post-cleaning for meetings, conferences, and corporate events.',
      '• Sanitization & Touchpoint Cleaning – Regular disinfection of high-contact surfaces to prevent germ spread.',
      '• Floor & Carpet Care – Cleaning and maintenance of hard floors, carpets, and upholstery.',
      '• Washroom Hygiene Management – Stocking and restocking of hygiene and janitorial supplies.',
      '• Noise-Reduced & HEPA-Filtered Equipment – Ensuring quiet, efficient cleaning with improved air quality.',
      '• Reception & Messenger Support – Additional staff to assist with office operations.',
      '• Eco-Friendly Waste Management – Responsible recycling and disposal in line with company policies.',
      'A well-maintained office contributes to a healthier, safer, and more productive workplace. Our flexible cleaning schedules allow us to operate during or after business hours, ensuring your space remains in top condition without disrupting your workflow.',
      'For professional, reliable, and customized office cleaning solutions, trust The Deeds Limpeza—because a cleaner office means a better business.',
    ],
  },
  {
    label: 'Façade Cleaning',
    content: [
      'Façade Cleaning Services',
      'Content for façade cleaning is not provided, so here is a placeholder. You can add or modify details for façade cleaning as needed.',
    ],
  },
  {
    label: 'Garbage & Waste Management Service',
    content: [
      'Sustainable Waste Management Services by The Deeds Limpeza',
      'At The Deeds Limpeza, we offer a comprehensive waste management service designed to be environmentally friendly and fully self-contained. Our approach ensures that waste is disposed of responsibly, with a strong commitment to reducing, recycling, and minimizing environmental impact.',
      'We focus on sustainable waste solutions that not only keep your premises clean but also support a greener future. Whether for commercial, industrial, or residential waste, we handle disposal with efficiency and strict adherence to environmental regulations.',
      'For a cleaner, greener, and more sustainable waste management solution, trust The Deeds Limpeza.',
    ],
  },
  {
    label: 'Post Construction/Post Renovation Cleaning',
    content: [
      'Post-Construction Cleaning by The Deeds Limpeza',
      "Whether you're rebuilding, renovating, or remodeling, maintaining a clean space is essential for ongoing construction, inspections, final presentations, leasing, or selling. A well-kept construction site enhances safety, efficiency, and overall project success.",
      'Before installing cubicles, doors, windows, flooring, paint, or wall coverings, surfaces must be properly cleaned. Our post-construction cleaning services ensure walls, ceilings, floors, and crawl spaces are free from dust, dirt, and debris—making your space ready for occupancy or presentation.',
      "Don't let construction waste slow you down. The Deeds Limpeza is your trusted partner for pre- and post-construction cleanup, ensuring a hygienic, polished, and move-in-ready space.",
    ],
  },
  {
    label: 'Sanitary and Washroom Solution',
    content: [
      'Hygienic Sanitary Bin Services by The Deeds Limpeza',
      'At The Deeds Limpeza, we understand the importance of maintaining a clean and hygienic restroom environment in commercial spaces. Our sanitary bin services provide a discreet and efficient solution for the safe disposal of sanitary waste, ensuring comfort and compliance with hygiene standards.',
      'We supply and install modern, pedal-operated sanitary bins, which are serviced and replaced regularly based on your needs. Our process maintains high sanitation levels, effectively preventing contamination and ensuring a fresh, germ-free environment for all users.',
      'Choose The Deeds Limpeza for professional, reliable, and hygienic sanitary waste management solutions tailored to your business.',
    ],
  },
  {
    label: 'Support Services',
    content: [
      'Outsourced Support Services by The Deeds Limpeza',
      'At The Deeds Limpeza, we offer professional outsourced support services to help businesses run smoothly. Whether you need assistance on a one-time basis or a long-term contract, we provide trained and reliable personnel to support your office operations.',
      'Our services include:',
      '• Secretarial Support – Skilled professionals to assist with administrative tasks.',
      '• Messengerial Services – Efficient document and package delivery within and outside the office.',
      '• Tea Services – Dedicated staff to ensure your workplace maintains a hospitable and organized environment.',
      'Our team is well-trained, professional, and equipped to integrate seamlessly into your office setting, ensuring efficiency and convenience.',
      'For reliable and professional office support, trust The Deeds Limpeza to meet your business needs.',
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

export default function CommercialServicesPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    // Fade in the whole page container
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className='pb-8 pt-4'
    >
      <div className='mx-auto max-w-7xl px-4 md:px-6'>
        {/* Section box for the heading */}
        <section className='bg-white border border-border p-6 mb-6 rounded shadow-sm text-center'>
          <h1 className='text-3xl md:text-4xl font-bold text-foreground'>
            Commercial Services
          </h1>
          {/* Small underline centered */}
          <div className='w-16 h-[3px] bg-[color:var(--accent)] mt-2 mx-auto' />
        </section>

        {/* 2-column layout with layout animation for the tabs */}
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
