import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '../../lib/utils';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  bg?: 'stone-50' | 'stone-100' | 'white' | 'violet';
  id?: string;
}

export function SectionWrapper({ children, className, bg = 'white', id }: SectionWrapperProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const bgClass = {
    'stone-50': 'bg-stone-50',
    'stone-100': 'bg-stone-100',
    'white': 'bg-white',
    'violet': 'bg-gradient-to-br from-violet-600 to-violet-800 text-white',
  }[bg];

  return (
    <section
      id={id}
      ref={ref}
      className={cn('py-16 md:py-24', bgClass, className)}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {children}
      </motion.div>
    </section>
  );
}
