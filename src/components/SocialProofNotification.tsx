import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, X } from '@phosphor-icons/react';

interface PurchaseNotification {
  id: number;
  name: string;
  product: string;
  location: string;
  timeAgo: string;
}

const notifications: PurchaseNotification[] = [
/*  {
    id: 1,
    name: "Maria S.",
    product: "Corra Contra o Tempo - Adulto",
    location: "Maputo",
    timeAgo: "2 minutos atrás"
  },
  {
    id: 2,
    name: "João P.",
    product: "Corra Contra o Tempo - Kids",
    location: "Beira",
    timeAgo: "5 minutos atrás"
  },
  {
    id: 3,
    name: "Ana C.",
    product: "Corra Contra o Tempo - Adulto",
    location: "Nampula",
    timeAgo: "8 minutos atrás"
  },
  {
    id: 4,
    name: "Carlos R.",
    product: "Corra Contra o Tempo - Kids",
    location: "Matola",
    timeAgo: "12 minutos atrás"
  },
  {
    id: 5,
    name: "Fernanda L.",
    product: "Corra Contra o Tempo - Adulto",
    location: "Quelimane",
    timeAgo: "15 minutos atrás"
  }*/
];

const SocialProofNotification: React.FC = () => {
  const [currentNotification, setCurrentNotification] = useState<PurchaseNotification | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showNotification = () => {
      const randomNotification = notifications[Math.floor(Math.random() * notifications.length)];
      setCurrentNotification(randomNotification);
      setIsVisible(true);

      // Auto hide after 5 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    };

    // Show first notification after 3 seconds
    const initialTimeout = setTimeout(showNotification, 3000);

    // Show subsequent notifications every 15-25 seconds
    const interval = setInterval(() => {
      if (!isVisible) {
        showNotification();
      }
    }, Math.random() * 10000 + 15000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [isVisible]);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && currentNotification && (
        <motion.div
          initial={{ x: -400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -400, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-6 left-6 z-50 max-w-sm"
        >
          <div className="bg-gradient-to-br from-emerald-50/95 to-teal-50/95 backdrop-blur-lg rounded-lg shadow-2xl border border-emerald-200/40 p-4 pr-12">
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-gray-900 dark:text-white">
                  <span className="font-bold">{currentNotification.name}</span> acabou de comprar
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300 truncate">
                  {currentNotification.product}
                </div>
                <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mt-1">
                  <span>📍 {currentNotification.location}</span>
                  <span className="mx-2">•</span>
                  <span>{currentNotification.timeAgo}</span>
                </div>
              </div>
            </div>
            
            <div className="mt-3 text-xs text-green-600 dark:text-green-400 font-medium">
              ✅ Compra verificada
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SocialProofNotification;
