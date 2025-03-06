'use client';

import React, { JSX, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CldImage } from 'next-cloudinary';
import Link from 'next/link';
import { Home, Briefcase, Leaf, Trash2, SprayCan, Toilet } from 'lucide-react';

// Define the Service interface
interface Service {
  id: number;
  title: string;
  frontText: string;
  backImage: string;
  link: string;
  icon: JSX.Element;
}

const servicesData: Service[] = [
  {
    id: 1,
    title: 'Domestic Cleaning',
    frontText: `You're happier and healthier when your 
    living space is clean. However, finding the 
    time and energy for thorough house cleaning 
    can be challenging. That's where we come in 
    – so you can focus on what matters to you. 
    We offer both one-off and regular home 
    cleaning services, catering to all your 
    domestic cleaning needs, including ironing, 
    dusting, polishing, and vacuuming.`,
    backImage: 'mudo/cleaning-company-2',
    link: '/services/domestic',
    icon: <Home className='w-6 h-6 md:w-8 md:h-8' />,
  },
  {
    id: 2,
    title: 'Commercial Cleaning',
    frontText: `With 15 years of experience in commercial 
    cleaning across Kenya, our dedicated team 
    understands all aspects of the industry. We 
    provide high-quality cleaning services to 
    companies of all types across various 
    sectors, including offices, hotels, banks, 
    airports, and more.`,
    backImage: 'mudo/cleaning-company-1',
    link: '/services/commercial',
    icon: <Briefcase className='w-6 h-6 md:w-8 md:h-8' />,
  },
  {
    id: 3,
    title: 'Landscaping & Gardening',
    frontText: `We transform terrains from rugged, 
    desolate surfaces into serene, manicured 
    lawns and beautiful flower gardens. 
    Experience aesthetically pleasing and 
    environmentally responsible landscaping.`,
    backImage: 'mudo/cleaning-company-9',
    link: '/services/landscaping',
    icon: <Leaf className='w-6 h-6 md:w-8 md:h-8' />,
  },
  {
    id: 4,
    title: 'Fumigation & Pest Control',
    frontText: `We have perfected the art of eradicating 
    pests by recognizing infestation trends and 
    developing safe, eco-friendly treatment 
    methods. Our services include baiting, 
    applying repellents, and complete 
    eradication of termites, cockroaches, 
    bedbugs, ants, and more.`,
    backImage: 'mudo/cleaning-company-7',
    link: '/services/fumigation',
    icon: <SprayCan className='w-6 h-6 md:w-8 md:h-8' />,
  },
  {
    id: 5,
    title: 'Sanitary Hygiene Solutions',
    frontText: `We provide high-quality washroom 
    services and hygiene solutions across 
    Kenya at affordable prices. Our services 
    include installing and maintaining 
    dispensers, pedal bins, paper rolls, 
    sanitizers, and other essential washroom 
    consumables.`,
    backImage: 'mudo/cleaning-company-5',
    link: '/services/hygiene',
    icon: <Toilet className='w-6 h-6 md:w-8 md:h-8' />,
  },
  {
    id: 6,
    title: 'Garbage & Waste Management',
    frontText: `We offer professional garbage 
    collection services for corporate and 
    residential clients. Our environmentally 
    friendly cleaning units ensure that garbage 
    bins remain clean while waste is safely 
    disposed of to maintain a hygienic 
    environment.`,
    backImage: 'mudo/cleaning-company-8',
    link: '/services/waste-management',
    icon: <Trash2 className='w-6 h-6 md:w-8 md:h-8' />,
  },
];

function ServiceCard({ service }: { service: Service }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Detect if the device supports hover
  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) {
      setIsTouchDevice(true);
    }
  }, []);

  return (
    <motion.div
      className='relative w-full h-[380px] perspective mx-auto'
      onMouseEnter={() => {
        if (!isTouchDevice) setIsFlipped(true);
      }}
      onMouseLeave={() => {
        if (!isTouchDevice) setIsFlipped(false);
      }}
      onClick={() => {
        if (isTouchDevice) setIsFlipped((prev) => !prev);
      }}
      whileTap={{ scale: 0.98 }}
      whileHover={{ scale: 1.02 }}
    >
      <motion.div
        className='relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d]'
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* Front Side */}
        <div className='absolute inset-0 w-full h-full backface-hidden rounded-lg shadow-lg overflow-hidden flex flex-col bg-white dark:bg-muted'>
          <div className='bg-primary text-white p-4 flex flex-col items-center justify-center gap-2'>
            {service.icon}
            <h3 className='text-lg font-bold text-center'>{service.title}</h3>
          </div>

          <div className='p-4 flex-1 flex items-center'>
            <p className='leading-relaxed text-foreground text-justify'>
              {service.frontText}
            </p>
          </div>
        </div>

        {/* Back Side */}
        <div className='absolute inset-0 w-full h-full backface-hidden rounded-lg shadow-lg overflow-hidden rotate-y-180'>
          <CldImage
            src={service.backImage}
            alt={service.title}
            width={800}
            height={600}
            crop='fit'
            className='object-cover w-full h-full'
          />
          <div className='absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-4 text-white'>
            <h3 className='text-lg font-bold mb-2'>{service.title}</h3>
            <Link href={service.link} className='underline hover:text-primary'>
              Read More
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ServicesCardsSection() {
  return (
    <section className='relative w-screen'>
      {/* Full-Width Background Color */}
      <div className='absolute inset-0 w-screen h-full bg-secondary'></div>

      {/* Content Container */}
      <div className='relative container mx-auto px-4 md:px-8 py-24 max-w-[1400px]'>
        <div className='text-center mb-8'>
          <h2 className='text-3xl font-bold tracking-tight text-foreground'>
            Our Services
          </h2>
          <p className='text-lg mt-2 text-foreground font-semibold'>
            AT HOME OR AT WORK, WE WILL GET IT DONE
          </p>
        </div>

        {/* Services Cards */}
        <motion.div
          className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
