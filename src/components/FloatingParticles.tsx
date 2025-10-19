'use client';

import { motion } from 'framer-motion';

export const FloatingParticles = () => {
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
    x: Math.random() * 100,
    y: Math.random() * 100,
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          animate={{
            y: [0, -window.innerHeight],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'linear',
          }}
          className="absolute rounded-full"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            bottom: '0%',
            background: particle.id % 3 === 0 ? '#7B2CBF' : particle.id % 3 === 1 ? '#4ADE80' : '#3B82F6',
            boxShadow: `0 0 ${particle.size * 2}px currentColor`,
          }}
        />
      ))}
    </div>
  );
};
