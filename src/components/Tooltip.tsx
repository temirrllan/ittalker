'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface TooltipProps {
  text: string;
  children: React.ReactNode;
}

export default function Tooltip({ text, children }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute z-50 w-[700px] h-[10vh] bg-white text-black flex items-center justify-center text-center rounded-3xl shadow-lg -top-20 left-0 -translate-x-1/2"
          >
            <div className="text-xl whitespace-nowrap font-medium">
              {text}
            </div>
            {/* Arrow */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 