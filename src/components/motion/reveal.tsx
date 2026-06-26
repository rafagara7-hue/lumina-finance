'use client';

import { motion } from 'framer-motion';

import { easing } from '@/animations/transitions';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

/** Scroll-into-view reveal used across the marketing page. */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: easing.smooth }}
    >
      {children}
    </motion.div>
  );
}
