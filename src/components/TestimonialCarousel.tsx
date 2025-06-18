import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quotes } from '@phosphor-icons/react';
import { Card } from './ui/Card';

interface TestimonialData {
  id: number;
  name: string;
  location: string;
  text: string;
  rating: number;
  avatar: string;
  gameVersion: 'Kids' | 'Adulto';
}

const testimonials: TestimonialData[] = [
  {
    id: 1,
    name: "Maria Santos",
    location: "Maputo",
    text: "Incrível! As crianças adoraram e nós adultos também nos divertimos muito. É realmente um jogo para toda a família.",
    rating: 5,
    avatar: "👩🏾",
    gameVersion: "Adulto"
  },
  {
    id: 2,
    name: "João Machel",
    location: "Beira",
    text: "Perfeito para reunir a família nos fins de semana. Meus filhos aprenderam muito vocabulário novo brincando!",
    rating: 5,
    avatar: "👨🏿",
    gameVersion: "Kids"
  },
  {
    id: 3,
    name: "Ana Sitoe",
    location: "Nampula",
    text: "Qualidade excelente! Os materiais são resistentes e o jogo é muito bem pensado. Recomendo para todos!",
    rating: 5,
    avatar: "👩🏿",
    gameVersion: "Adulto"
  },
  {
    id: 4,
    name: "Carlos Mondlane",
    location: "Matola",
    text: "Meu filho de 8 anos fica horas jogando. É educativo e divertido ao mesmo tempo. Melhor compra do ano!",
    rating: 5,
    avatar: "👨🏾",
    gameVersion: "Kids"
  }
];

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="relative max-w-4xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentTestimonial.id}
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.9 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Card className="relative p-8 sm:p-12 bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-700 border-0 shadow-2xl overflow-hidden">            {/* Decorative quote */}
            <div className="absolute top-4 left-4 opacity-10">
              <Quotes size={80} className="text-orange-500" />
            </div>
            
            {/* Content */}
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                  >
                    <Star size={24} className="text-yellow-400 fill-current mx-1" />
                  </motion.div>
                ))}
              </div>
              
              {/* Testimonial text */}
              <motion.p
                className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 text-center mb-8 leading-relaxed italic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                "{currentTestimonial.text}"
              </motion.p>
              
              {/* Author info */}
              <motion.div
                className="flex items-center justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <div className="text-4xl">{currentTestimonial.avatar}</div>
                <div className="text-center">
                  <h4 className="font-bold text-gray-900 dark:text-white text-lg">
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {currentTestimonial.location}
                  </p>
                  <span className="inline-block mt-1 px-3 py-1 bg-orange-500 text-white text-sm rounded-full">
                    Versão {currentTestimonial.gameVersion}
                  </span>
                </div>
              </motion.div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-orange-300/20 to-red-300/20 rounded-full blur-2xl" />
          </Card>
        </motion.div>
      </AnimatePresence>
      
      {/* Indicators */}
      <div className="flex justify-center mt-8 gap-2">
        {testimonials.map((_, index) => (
          <motion.button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-orange-500 w-8' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentIndex(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
