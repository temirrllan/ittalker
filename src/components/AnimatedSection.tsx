'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

export default function AnimatedSection({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'up'
}: AnimatedSectionProps) {
  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: 50 };
      case 'down':
        return { opacity: 0, y: -50 };
      case 'left':
        return { opacity: 0, x: -50 };
      case 'right':
        return { opacity: 0, x: 50 };
      case 'none':
        return { opacity: 0 };
      default:
        return { opacity: 0, y: 50 };
    }
  };

  return (
    <div className="">
      <motion.div
        initial={getInitialPosition()}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ 
          duration: 0.7, 
          delay,
          ease: "easeOut" 
        }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
} 