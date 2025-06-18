import React from 'react';
import { motion } from 'framer-motion';

interface DecorativeElementsProps {
  variant?: 'hero' | 'section' | 'footer';
}

const DecorativeElements: React.FC<DecorativeElementsProps> = ({ variant = 'section' }) => {
  const heroElements = (
    <>
      {/* Geometric shapes floating */}
      <motion.div
        className="absolute top-20 left-10 w-16 h-16 bg-yellow-400/20 rounded-full"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-40 right-20 w-12 h-12 bg-orange-500/30 rounded-lg"
        animate={{
          y: [0, 15, 0],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <motion.div
        className="absolute bottom-32 left-20 w-8 h-8 bg-red-500/40"
        style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
        animate={{
          y: [0, -10, 0],
          rotate: [0, 120, 240, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      {/* Game piece icons */}
      <motion.div
        className="absolute top-60 right-10 text-6xl opacity-10"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        🎲
      </motion.div>
      
      <motion.div
        className="absolute bottom-20 right-40 text-4xl opacity-20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, -15, 15, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5
        }}
      >
        ⏰
      </motion.div>
    </>
  );

  const sectionElements = (
    <>
      {/* Subtle background shapes */}
      <motion.div
        className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-br from-orange-200/10 to-red-200/10 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute -bottom-10 -right-10 w-24 h-24 bg-gradient-to-br from-yellow-200/10 to-orange-200/10 rounded-full blur-xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
    </>
  );

  const footerElements = (
    <>
      <motion.div
        className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </>
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {variant === 'hero' && heroElements}
      {variant === 'section' && sectionElements}
      {variant === 'footer' && footerElements}
    </div>
  );
};

export default DecorativeElements;
