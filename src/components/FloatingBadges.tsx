import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Heart, Shield, Crown, Medal } from '@phosphor-icons/react';

interface FloatingBadgesProps {
  className?: string;
}

const FloatingBadges: React.FC<FloatingBadgesProps> = ({ className = '' }) => {
  const badges = [
    {
      icon: Trophy,
      text: "Melhor Jogo 2024",
      color: "from-yellow-400 to-orange-500",
      position: { top: '10%', right: '5%' },
      delay: 0
    },
    {
      icon: Star,
      text: "4.9★ Avaliação",
      color: "from-blue-400 to-purple-500",
      position: { top: '60%', left: '2%' },
      delay: 1
    },
    {
      icon: Heart,
      text: "Favorito das Famílias",
      color: "from-pink-400 to-red-500",
      position: { bottom: '20%', right: '8%' },
      delay: 2
    },
    {
      icon: Shield,
      text: "100% Seguro",
      color: "from-green-400 to-emerald-500",
      position: { top: '40%', right: '2%' },
      delay: 0.5
    },
    {
      icon: Crown,
      text: "Premium",
      color: "from-purple-400 to-pink-500",
      position: { bottom: '50%', left: '5%' },
      delay: 1.5
    },
    {
      icon: Medal,
      text: "Produto Moçambicano",
      color: "from-orange-400 to-red-500",
      position: { top: '80%', right: '12%' },
      delay: 3
    }
  ];

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {badges.map((badge, index) => {
        const IconComponent = badge.icon;
        return (
          <motion.div
            key={index}
            className="absolute z-10"
            style={badge.position}
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ 
              opacity: [0, 1, 0.8, 1],
              scale: [0, 1.2, 1],
              rotate: [-180, 10, -5, 0],
              y: [0, -10, 0]
            }}
            transition={{
              duration: 2,
              delay: badge.delay,
              ease: "easeOut",
              y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: badge.delay + 2
              }
            }}
          >
            <div className={`
              bg-gradient-to-r ${badge.color} 
              px-3 py-2 rounded-full shadow-lg 
              text-white text-xs font-bold 
              flex items-center gap-2
              backdrop-blur-sm
              border border-white/20
              transform hover:scale-110 transition-transform duration-300
            `}>
              <IconComponent className="w-4 h-4" />
              <span className="whitespace-nowrap">{badge.text}</span>
            </div>
            
            {/* Glow effect */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-r ${badge.color} rounded-full blur-md opacity-50 -z-10`}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: badge.delay + 1
              }}
            />
          </motion.div>
        );
      })}
      
      {/* Additional sparkle effects */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute w-1 h-1 bg-yellow-300 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
            rotate: [0, 360]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export default FloatingBadges;
