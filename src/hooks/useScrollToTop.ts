import { useEffect } from 'react';

interface UseScrollToTopOptions {
  onRefresh?: boolean;
  onMount?: boolean;
  smooth?: boolean;
  delay?: number;
}

export function useScrollToTop({
  onRefresh = true,
  onMount = true,
  smooth = false,
  delay = 0
}: UseScrollToTopOptions = {}) {
  
  useEffect(() => {
    // Scroll to top on component mount
    if (onMount) {
      const scrollTimer = setTimeout(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: smooth ? 'smooth' : 'instant'
        });
      }, delay);

      return () => clearTimeout(scrollTimer);
    }
  }, [onMount, smooth, delay]);

  useEffect(() => {
    // Handle page refresh/reload
    if (onRefresh) {
      // Force scroll to top on page load
      window.scrollTo(0, 0);
      
      // Override browser's scroll restoration
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
      }

      // Ensure scroll position is reset after any async operations
      const resetScroll = () => {
        window.scrollTo(0, 0);
      };

      // Multiple checkpoints to ensure scroll reset
      setTimeout(resetScroll, 0);
      setTimeout(resetScroll, 50);
      setTimeout(resetScroll, 100);
      
      // Listen for DOM content loaded
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', resetScroll);
        return () => document.removeEventListener('DOMContentLoaded', resetScroll);
      }
    }
  }, [onRefresh]);

  // Manual scroll to top function
  const scrollToTop = (options?: { smooth?: boolean; delay?: number }) => {
    const scrollOptions = {
      smooth: options?.smooth ?? smooth,
      delay: options?.delay ?? delay
    };

    const executeScroll = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: scrollOptions.smooth ? 'smooth' : 'instant'
      });
    };

    if (scrollOptions.delay > 0) {
      setTimeout(executeScroll, scrollOptions.delay);
    } else {
      executeScroll();
    }
  };

  return { scrollToTop };
}

// Hook específico para garantir scroll to top no refresh
export function useScrollToTopOnRefresh() {
  useEffect(() => {
    // Força o scroll para o topo imediatamente
    window.scrollTo(0, 0);
    
    // Desabilita a restauração automática do scroll do browser
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    // Garante que o scroll permaneça no topo após carregamento completo
    const handleLoad = () => {
      window.scrollTo(0, 0);
    };

    // Múltiplas tentativas para garantir o scroll reset
    const timeouts = [0, 10, 50, 100, 200].map(delay => 
      setTimeout(() => window.scrollTo(0, 0), delay)
    );

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
      timeouts.forEach(clearTimeout);
    };
  }, []);
}
