import React from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useFluidScrollAnimations, useScrollLayoutOptimization } from '../../hooks/useSmartScrollAnimation';

interface FluidScrollWrapperProps {
  children: React.ReactNode;
  className?: string;
  enablePerformanceMode?: boolean;
}

// Wrapper que aplica otimizações automáticas durante scroll
export const FluidScrollWrapper: React.FC<FluidScrollWrapperProps> = ({
  children,
  className = '',
  enablePerformanceMode = true
}) => {
  const { isScrolling, scrollingTooFast, getAnimationVariants } = useFluidScrollAnimations();
  const { isLayoutOptimized } = useScrollLayoutOptimization();// Configuração dinâmica baseada no estado do scroll
  const wrapperVariants: Variants = getAnimationVariants({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' }
  }) as Variants;

  return (
    <motion.div
      className={`fluid-scroll-wrapper ${className}`}
      data-scroll-optimized="true"
      data-scrolling={isScrolling}
      data-scrolling-fast={scrollingTooFast}
      data-layout-optimized={isLayoutOptimized}
      style={{
        willChange: isScrolling ? 'transform, opacity' : 'auto',
        backfaceVisibility: 'hidden',
        perspective: enablePerformanceMode ? '1000px' : 'none'
      }}
      variants={wrapperVariants}
      initial="initial"
      animate="animate"
    >
      {children}
    </motion.div>
  );
};

interface SmartAnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade';
  threshold?: number;
  once?: boolean;
}

// Seção com animações inteligentes que se adaptam ao scroll
export const SmartAnimatedSection: React.FC<SmartAnimatedSectionProps> = ({
  children,
  className = '',
  delay = 0,  direction = 'up',
  threshold = 0.1,
  once = false
}) => {
  const { isScrolling, scrollingTooFast, getAnimationVariants } = useFluidScrollAnimations();

  const baseVariants = {
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
  };  // Aplicar otimizações baseadas no estado do scroll
  const optimizedVariants: Variants = getAnimationVariants({
    initial: baseVariants[direction],
    whileInView: visible,
    transition: { 
      duration: 1.2, 
      delay: scrollingTooFast ? 0 : delay,
      ease: 'easeInOut' 
    }
  }) as Variants;

  return (
    <motion.div
      className={`smart-animated-section ${className}`}
      variants={optimizedVariants}
      initial="initial"
      whileInView="whileInView"      viewport={{ 
        once, 
        amount: threshold,
        margin: scrollingTooFast ? "-200px" : "-100px"
      }}
      style={{
        willChange: isScrolling ? 'transform, opacity' : 'auto',
        contain: scrollingTooFast ? 'layout style' : 'none'
      }}
    >
      {children}
    </motion.div>
  );
};

interface ScrollPerformanceMonitorProps {
  showDebugInfo?: boolean;
  onPerformanceChange?: (isGood: boolean) => void;
}

// Monitor de performance do scroll com debug visual
export const ScrollPerformanceMonitor: React.FC<ScrollPerformanceMonitorProps> = ({
  showDebugInfo = false,
  onPerformanceChange
}) => {
  const { isScrolling, scrollingTooFast, velocity } = useFluidScrollAnimations();

  React.useEffect(() => {
    if (onPerformanceChange) {
      onPerformanceChange(!scrollingTooFast);
    }
  }, [scrollingTooFast, onPerformanceChange]);

  if (!showDebugInfo) return null;

  return (
    <AnimatePresence>
      {isScrolling && (
        <motion.div
          className="fixed top-4 left-4 z-50 bg-black/80 text-white p-3 rounded-lg font-mono text-sm"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
        >
          <div>Scroll Status: {isScrolling ? 'Active' : 'Idle'}</div>
          <div>Velocity: {velocity.toFixed(2)} px/ms</div>
          <div>Performance: {scrollingTooFast ? '🔴 Fast' : '🟢 Smooth'}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

interface ScrollAwareComponentProps {
  children: (scrollState: {
    isScrolling: boolean;
    scrollingTooFast: boolean;
    velocity: number;
  }) => React.ReactNode;
}

// Componente que expõe estado do scroll para children
export const ScrollAwareComponent: React.FC<ScrollAwareComponentProps> = ({ children }) => {
  const scrollState = useFluidScrollAnimations();
  
  return <>{children(scrollState)}</>;
};
