import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import EcommercePage from './pages/EcommercePage';
import GamePage from './pages/GamePage';
import { ThemeProvider } from './providers/ThemeProvider';
import { useScrollToTopOnRefresh } from './hooks/useScrollToTop';

type CurrentPage = 'home' | 'game';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<CurrentPage>('home');

  // Garantir scroll to top em cada refresh
  useScrollToTopOnRefresh();

  // Override window.history.back for our SPA navigation
  React.useEffect(() => {
    const originalBack = window.history.back;
    window.history.back = () => {
      if (currentPage === 'game') {
        setCurrentPage('home');
      } else {
        originalBack.call(window.history);
      }
    };

    return () => {
      window.history.back = originalBack;
    };
  }, [currentPage]);

  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <AnimatePresence mode="wait">
          {currentPage === 'home' ? (
            <EcommercePage key="home" onNavigateToGame={() => setCurrentPage('game')} />
          ) : (
            <GamePage key="game" />
          )}
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
};

export default App;