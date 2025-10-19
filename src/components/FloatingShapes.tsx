'use client';

import { motion } from 'framer-motion';

export const FloatingShapes = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Large purple gradient blob */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-0 -left-32 w-72 h-72 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, #7B2CBF, transparent)',
        }}
      />

      {/* Blue gradient blob */}
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/3 -right-40 w-80 h-80 rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, #3B82F6, transparent)',
        }}
      />

      {/* Green gradient blob */}
      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -bottom-32 left-1/3 w-96 h-96 rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, #4ADE80, transparent)',
        }}
      />
    </div>
  );
};
