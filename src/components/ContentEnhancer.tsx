import React from 'react';
import { motion } from 'framer-motion';

interface ContentEnhancerProps {
  children: React.ReactNode;
  variant?: 'cards' | 'highlight' | 'feature';
  className?: string;
}

const ContentEnhancer: React.FC<ContentEnhancerProps> = ({ 
  children, 
  variant = 'feature',
  className = '' 
}) => {
  const variants = {
    cards: {
      wrapper: "relative p-6 bg-gradient-to-br from-white via-gray-50 to-orange-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-orange-100 dark:border-gray-700",
      decorations: [
        { emoji: '🎲', className: 'absolute -top-2 -right-2 text-2xl opacity-70 rotate-12' },
        { emoji: '⭐', className: 'absolute top-4 left-4 text-lg opacity-50' },
        { emoji: '✨', className: 'absolute bottom-4 right-4 text-sm opacity-40' }
      ]
    },
    highlight: {
      wrapper: "relative p-8 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-3xl shadow-2xl overflow-hidden",
      decorations: [
        { emoji: '🏆', className: 'absolute top-4 right-4 text-3xl opacity-30' },
        { emoji: '🎯', className: 'absolute bottom-4 left-4 text-2xl opacity-25' }
      ]
    },
    feature: {
      wrapper: "relative",
      decorations: [
        { emoji: '🎪', className: 'absolute -top-4 -left-4 text-4xl opacity-20 z-0' },
        { emoji: '🎨', className: 'absolute -bottom-4 -right-4 text-3xl opacity-15 z-0' }
      ]
    }
  };

  const config = variants[variant];

  return (
    <motion.div 
      className={`${config.wrapper} ${className}`}
      whileHover={{ 
        scale: variant === 'cards' ? 1.02 : 1,
        y: variant === 'cards' ? -5 : 0 
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {config.decorations.map((decoration, index) => (
          <motion.div
            key={index}
            className={decoration.className}
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 4 + index,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.5
            }}
          >
            {decoration.emoji}
          </motion.div>
        ))}
        
        {/* Additional floating elements for cards variant */}
        {variant === 'cards' && (
          <>
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-orange-200/20 to-red-200/20 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Corner sparkles */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`sparkle-${i}`}
                className="absolute w-2 h-2 bg-orange-400 rounded-full"
                style={{
                  left: `${20 + i * 30}%`,
                  top: `${15 + i * 25}%`,
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.7,
                  ease: "easeInOut"
                }}
              />
            ))}
          </>
        )}
        
        {/* Highlight variant special effects */}
        {variant === 'highlight' && (
          <>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" />
            <motion.div
              className="absolute -top-10 -left-10 w-20 h-20 bg-yellow-400/30 rounded-full blur-xl"
              animate={{
                x: [0, 100, 0],
                y: [0, 50, 0],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </>
        )}
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Subtle border glow effect for cards */}
      {variant === 'cards' && (
        <motion.div
          className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-orange-300/50 to-red-300/50 opacity-0 hover:opacity-100 transition-opacity duration-500"
          style={{
            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            maskComposite: 'exclude'
          }}
        />
      )}
    </motion.div>
  );
};

export default ContentEnhancer;
