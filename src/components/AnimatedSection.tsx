import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimationOptimization } from '../hooks/useScrollOptimization';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade';
  duration?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.8
}) => {
  const { getAnimationConfig, isScrolling, shouldPauseAnimations } = useScrollAnimationOptimization();

  const variants = {
    up: { y: 50, opacity: 0 },
    down: { y: -50, opacity: 0 },
    left: { x: -50, opacity: 0 },
    right: { x: 50, opacity: 0 },
    scale: { scale: 0.8, opacity: 0 },
    fade: { opacity: 0 }
  };

  const visible = {
    y: 0,
    x: 0,
    scale: 1,
    opacity: 1
  };

  // Configuração otimizada baseada no estado do scroll
  const animationConfig = getAnimationConfig({
    initial: variants[direction],
    whileInView: visible,
    viewport: { 
      once: true, 
      margin: shouldPauseAnimations ? "-50px" : "-100px" 
    },
    transition: { 
      duration: isScrolling ? duration * 0.5 : duration, 
      delay: isScrolling ? delay * 0.5 : delay, 
      ease: isScrolling ? "easeOut" : "easeOut" 
    }
  });

  return (
    <motion.div
      {...animationConfig}
      className={`animated-section ${className}`}
      data-scroll-optimized="true"
      style={{
        willChange: isScrolling ? 'transform, opacity' : 'auto'
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
