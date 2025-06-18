import React from 'react';
import { motion } from 'framer-motion';

// Floating elements animation
export const FloatingCard: React.FC<{ children: React.ReactNode; delay?: number }> = ({ 
  children, 
  delay = 0 
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ 
      y: -10,
      transition: { type: "spring", stiffness: 300 }
    }}
    transition={{ 
      duration: 0.6, 
      delay,
      type: "spring",
      stiffness: 100
    }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
);

// Stagger container for multiple elements
export const StaggerContainer: React.FC<{ children: React.ReactNode; delayChildren?: number }> = ({ 
  children, 
  delayChildren = 0.1 
}) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={{
      hidden: {},
      visible: {
        transition: {
          delayChildren,
          staggerChildren: 0.1
        }
      }
    }}
  >
    {children}
  </motion.div>
);

// Individual stagger item
export const StaggerItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    }}
    transition={{ duration: 0.6 }}
  >
    {children}
  </motion.div>
);

// Scale on hover for interactive elements
export const ScaleOnHover: React.FC<{ 
  children: React.ReactNode; 
  scale?: number;
  className?: string;
}> = ({ 
  children, 
  scale = 1.05,
  className = ""
}) => (
  <motion.div
    className={className}
    whileHover={{ 
      scale,
      transition: { type: "spring", stiffness: 300, damping: 10 }
    }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.div>
);

// Parallax scroll effect
export const ParallaxElement: React.FC<{ 
  children: React.ReactNode;
  offset?: number;
  className?: string;
}> = ({ 
  children, 
  offset = 50,
  className = ""
}) => {
  return (
    <motion.div
      className={className}
      initial={{ y: offset }}
      whileInView={{ y: 0 }}
      transition={{ 
        duration: 0.8,
        ease: "easeOut"
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

// Typewriter effect
export const TypewriterText: React.FC<{ 
  text: string;
  delay?: number;
  className?: string;
}> = ({ 
  text, 
  delay = 0,
  className = ""
}) => {
  return (
    <motion.span
      className={className}
      initial={{ width: 0 }}
      animate={{ width: "auto" }}
      transition={{
        duration: text.length * 0.1,
        delay,
        ease: "easeInOut"
      }}
      style={{ 
        overflow: "hidden",
        whiteSpace: "nowrap",
        display: "inline-block"
      }}
    >
      {text}
    </motion.span>
  );
};

// Fade in from direction
export const FadeInDirection: React.FC<{
  children: React.ReactNode;
  direction: 'left' | 'right' | 'up' | 'down';
  delay?: number;
  distance?: number;
  className?: string;
}> = ({
  children,
  direction,
  delay = 0,
  distance = 50,
  className = ""
}) => {
  const getInitialPosition = () => {
    switch (direction) {
      case 'left': return { x: -distance, opacity: 0 };
      case 'right': return { x: distance, opacity: 0 };
      case 'up': return { y: -distance, opacity: 0 };
      case 'down': return { y: distance, opacity: 0 };
      default: return { opacity: 0 };
    }
  };

  return (
    <motion.div
      className={className}
      initial={getInitialPosition()}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      transition={{ 
        duration: 0.6, 
        delay,
        type: "spring",
        stiffness: 100
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

// Pulse animation for call-to-action elements
export const PulseButton: React.FC<{ 
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => (
  <motion.div
    className={className}
    animate={{
      scale: [1, 1.05, 1],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    {children}
  </motion.div>
);

// Rotate on scroll
export const RotateOnScroll: React.FC<{
  children: React.ReactNode;
  rotations?: number;
  className?: string;
}> = ({ 
  children, 
  rotations = 1,
  className = ""
}) => (
  <motion.div
    className={className}
    initial={{ rotate: 0 }}
    whileInView={{ rotate: 360 * rotations }}
    transition={{ 
      duration: 1, 
      ease: "easeInOut" 
    }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
);

// Loading dots animation
export const LoadingDots: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`flex space-x-1 ${className}`}>
    {[0, 1, 2].map((index) => (
      <motion.div
        key={index}
        className="w-2 h-2 bg-current rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          delay: index * 0.2,
        }}
      />
    ))}
  </div>
);

export default {
  FloatingCard,
  StaggerContainer,
  StaggerItem,
  ScaleOnHover,
  ParallaxElement,
  TypewriterText,
  FadeInDirection,
  PulseButton,
  RotateOnScroll,
  LoadingDots
};
