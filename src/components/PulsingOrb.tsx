'use client';

import { motion } from 'framer-motion';

export const PulsingOrb = () => {
  return (
    <div className="relative w-48 h-48 mb-12 mx-auto">
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          boxShadow: [
            '0 0 60px rgba(123, 44, 191, 0.5)',
            '0 0 100px rgba(123, 44, 191, 0.8)',
            '0 0 60px rgba(123, 44, 191, 0.5)',
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute inset-0 rounded-full"
        style={{
          background: 'linear-gradient(135deg, #7B2CBF, #4ADE80)',
        }}
      />
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute inset-0 rounded-full"
        style={{
          background: 'conic-gradient(from 0deg, #7B2CBF, #3B82F6, #4ADE80, #7B2CBF)',
          opacity: 0.3,
        }}
      />
      <div className="absolute inset-4 rounded-full bg-opacity-20 backdrop-blur-sm" />
    </div>
  );
};
