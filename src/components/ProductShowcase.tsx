import React from 'react';
import { motion } from 'framer-motion';
import { Sparkle } from '@phosphor-icons/react';

interface ProductShowcaseProps {
  version: 'adult' | 'kids';
  className?: string;
}

const ProductShowcase: React.FC<ProductShowcaseProps> = ({ version, className = '' }) => {
  const isAdult = version === 'adult';
  
  return (
    <div className={`relative ${className}`}>
      {/* Decorative background */}
      <div className="absolute inset-0 -m-4">
        <div className={`absolute inset-0 bg-gradient-to-r ${
          isAdult 
            ? 'from-orange-100 via-red-50 to-pink-100' 
            : 'from-green-100 via-emerald-50 to-blue-100'
        } rounded-3xl opacity-50`} />
        
        {/* Floating decorative elements */}
        <motion.div
          className={`absolute top-4 right-4 text-3xl opacity-30`}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {isAdult ? '🎯' : '🌟'}
        </motion.div>
        
        <motion.div
          className={`absolute bottom-4 left-4 text-2xl opacity-20`}
          animate={{
            y: [0, -10, 0],
            rotate: [0, -10, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          {isAdult ? '🏆' : '🎨'}
        </motion.div>
        
        <motion.div
          className={`absolute top-1/2 left-1/4 text-xl opacity-15`}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          ✨
        </motion.div>
      </div>
      
      {/* Sparkle effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${20 + (i * 15)}%`,
              top: `${10 + (i * 20)}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              rotate: [0, 180, 360],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          >
            <Sparkle 
              className={`w-4 h-4 ${
                isAdult ? 'text-orange-400' : 'text-green-400'
              }`} 
            />
          </motion.div>
        ))}
      </div>
      
      {/* Corner decorations */}
      <div className="absolute -bottom-1 -left-1 z-10">
        <motion.div
          className={`w-8 h-8 rounded-full ${
            isAdult ? 'bg-orange-200' : 'bg-green-200'
          } opacity-60`}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>
    </div>
  );
};

export default ProductShowcase;
