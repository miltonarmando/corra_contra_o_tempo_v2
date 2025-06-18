import React from 'react';
import { useFluidScrollAnimations } from '../hooks/useSmartScrollAnimation';

// Hook para usar em componentes que precisam reagir ao scroll
export function useScrollAwareAnimations() {
  const { isScrolling, scrollingTooFast, getAnimationVariants } = useFluidScrollAnimations();

  const createScrollAwareVariant = React.useCallback((
    baseVariant: {
      transition?: { duration?: number; ease?: string; [key: string]: unknown }
      [key: string]: unknown
    }
  ) => {
    return getAnimationVariants(baseVariant);
  }, [getAnimationVariants]);

  return {
    isScrolling,
    scrollingTooFast,
    createScrollAwareVariant
  };
}
