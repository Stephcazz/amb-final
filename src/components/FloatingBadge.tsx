import React from 'react';
import { motion } from 'framer-motion';

export function FloatingBadge() {
  const scrollToForm = () => {
    const element = document.getElementById('contact-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50 cursor-pointer"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      whileHover={{ scale: 1.1 }}
      onClick={scrollToForm}
    >
      <motion.div
        className="relative w-32 h-32"
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full shadow-lg transform-gpu" />
        <div className="absolute inset-1 bg-white rounded-full" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-sm font-medium text-emerald-600">Livret+</span>
          <span className="text-2xl font-bold text-emerald-600">7,35%</span>
        </div>
      </motion.div>
      
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 bg-emerald-400 rounded-full blur-xl opacity-30"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}