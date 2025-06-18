import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { List, X,} from '@phosphor-icons/react';
import { Button } from './ui/Button';
import { getLogoPath } from '../utils/assetPaths';


interface HeaderProps {
  cartItems?: number;
}

const Header: React.FC<HeaderProps> = ({ cartItems = 0 }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // Fechar menu mobile quando clicar fora
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (isMobileMenuOpen) {
        const target = event.target as Element;
        const menuButton = document.querySelector('.mobile-menu-button');
        const mobileMenu = document.querySelector('.mobile-menu-safe');
        
        if (menuButton && !menuButton.contains(target) && 
            mobileMenu && !mobileMenu.contains(target)) {
          setIsMobileMenuOpen(false);
        }
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Prevenir scroll quando menu mobile está aberto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);  // Função helper para scroll suave e robusto - versão final
  const scrollToSection = (sectionId: string) => {
    // Fechar o menu primeiro
    setIsMobileMenuOpen(false);
    
    // Aguardar um momento para o menu fechar e depois navegar
    setTimeout(() => {
      const cleanId = sectionId.startsWith('#') ? sectionId.slice(1) : sectionId;
      const element = document.getElementById(cleanId);
      
      if (element) {
        // Calcular posição com offset do header
        const headerHeight = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
        
        // Desabilitar temporariamente o scroll-behavior do CSS
        const htmlElement = document.documentElement;
        const originalScrollBehavior = htmlElement.style.scrollBehavior;
        htmlElement.style.scrollBehavior = 'auto';
        
        // Usar JavaScript para scroll suave
        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: 'smooth'
        });
        
        // Restaurar scroll-behavior após um breve delay
        setTimeout(() => {
          htmlElement.style.scrollBehavior = originalScrollBehavior;
        }, 100);
      } else {
        // Fallback: tentar forçar navigation para o ID
        window.location.hash = cleanId;
      }
    }, 300); // Aumentei um pouco o delay
  };

const navigationItems = [
    { label: 'Início', href: '#hero' },
    { label: 'Produtos', href: '#produtos' },
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Depoimentos', href: '#avaliacoes' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contato', href: '#contato' },
  ];return (    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 header-mobile-safe no-horizontal-overflow ${
        isScrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-xl border-b border-gray-200/20 dark:border-gray-700/20' 
          : 'bg-gradient-to-b from-black/30 via-black/20 to-transparent backdrop-blur-sm shadow-lg'
      }`}
      style={{ zIndex: 1000 }}
    ><div className="container mx-auto header-container">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20 flex-safe">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center space-x-2 sm:space-x-3 logo-mobile-safe"
          >            <img 
              src={getLogoPath()} 
              alt="Corra Contra o Tempo" 
              className="h-7 sm:h-8 md:h-10 w-auto drop-shadow-lg"
            />
            <span className={`font-bold text-base sm:text-lg md:text-xl transition-all duration-300 ${
              isScrolled 
                ? 'text-gray-800 dark:text-white' 
                : 'text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]'
            } hidden sm:block`}>
              {/*"Corra Contra o Tempo"*/}
            </span>
          </motion.div>{/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navigationItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}                
                className={`transition-all duration-200 font-medium text-sm xl:text-base relative group ${
                  isScrolled 
                    ? 'text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400' 
                    : 'text-white hover:text-purple-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]'
                }`}                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
              >
                {item.label}
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:w-full transition-all duration-300"
                  initial={false}
                />
              </motion.a>
            ))}
          </nav>          
          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
                        
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button 
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-200 text-sm xl:text-base"
                onClick={() => scrollToSection('#produtos')}
              >
                Comprar Agora
              </Button>
            </motion.div>
          </div>          {/* Mobile Menu Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="lg:hidden mobile-menu-button"
          >
            <Button
              variant="ghost"
              size="sm"
              className={`relative mobile-menu-button touch-target-enhanced rounded-full transition-all duration-300 flex items-center justify-center ${
                isMobileMenuOpen 
                  ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'                  
                  : `${isScrolled 
                      ? 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800' 
                      : 'text-white hover:bg-white/20 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] bg-black/20'
                    }`
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            ><motion.div
                animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-center"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                ) : (
                  <List className="w-5 h-5 sm:w-6 sm:h-6" />
                )}
              </motion.div>
              
              {/* Pulse indicator when menu is closed and cart has items */}
              {!isMobileMenuOpen && cartItems > 0 && (
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full"
                />
              )}
            </Button>
          </motion.div>
        </div>        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-t border-gray-200/30 dark:border-gray-700/30 shadow-2xl mobile-menu-safe relative"
              style={{ zIndex: 999 }}
            >
              <div className="py-4 px-3 sm:py-6 sm:px-4">                {/* Navigation Items */}
                <div className="space-y-1 mb-4 sm:mb-6">                  {navigationItems.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="relative"
                    >
                      <button
                        type="button"
                        className="w-full flex items-center justify-between px-3 py-3 sm:px-4 sm:py-4 rounded-xl text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-200 font-medium text-base sm:text-lg touch-target text-left"                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          scrollToSection(item.href);
                        }}
                      >
                        <span>{item.label}</span>
                        <motion.div
                          whileHover={{ x: 5 }}
                          className="w-2 h-2 bg-purple-400 rounded-full opacity-60"
                        />
                      </button>
                    </motion.div>
                  ))}
                </div>
                  {/* Actions Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="pt-4 sm:pt-6 border-t border-gray-200/50 dark:border-gray-700/50"
                >
                  {/* Action Icons */}
                  <div className="flex items-center justify-center space-x-8 mb-4 sm:mb-6">             
                  </div>
                  
                  {/* Primary CTA */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-1 sm:px-2"
                  >                    <Button 
                      className="w-full py-3 sm:py-4 text-base sm:text-lg font-semibold bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-200 rounded-xl touch-target"                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        scrollToSection('#produtos');
                      }}
                    >
                      🎮 Comprar Agora
                    </Button>
                  </motion.div>
                    {/* Quick Info */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-3 sm:mt-4 text-center"
                  >
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                      ⚡ Entrega rápida em Moçambique
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
