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
    text: "Meu filho de 8 anos fica horas jogando. É educativo e divertivo ao mesmo tempo. Melhor compra do ano!",
    rating: 5,
    avatar: "👨🏾",
    gameVersion: "Kids"
  },
  {
    id: 5,
    name: "Fátima Mucavel",
    location: "Xai-Xai",
    text: "Compramos para uma festa de aniversário e foi um sucesso total! Todos se divertiram muito.",
    rating: 5,
    avatar: "👩🏽",
    gameVersion: "Adulto"
  },
  {
    id: 6,
    name: "António Macuácua",
    location: "Quelimane",
    text: "O jogo é fantástico! Ajuda muito no desenvolvimento do vocabulário das crianças de forma divertida.",
    rating: 5,
    avatar: "👨🏽",
    gameVersion: "Kids"
  },
  {
    id: 7,
    name: "Rosa Manhiça",
    location: "Chimoio",
    text: "Já jogámos várias vezes e nunca enjoamos! As palavras são bem escolhidas e o tempo voa.",
    rating: 4,
    avatar: "👩🏾",
    gameVersion: "Adulto"
  },
  {
    id: 8,
    name: "Pedro Chissano",
    location: "Inhambane",
    text: "Minha esposa e eu adoramos jogar com nossos netos. É uma excelente forma de passar tempo juntos.",
    rating: 5,
    avatar: "👨🏿",
    gameVersion: "Kids"
  },
  {
    id: 9,
    name: "Lurdes Tembe",
    location: "Tete",
    text: "Produto de qualidade superior! Chegou bem embalado e as cartas são muito bem feitas.",
    rating: 5,
    avatar: "�🏿",
    gameVersion: "Adulto"
  },
  {
    id: 10,
    name: "Sérgio Guambe",
    location: "Pemba",
    text: "Recomendo para todas as famílias! É diversão garantida e ainda ajuda no aprendizado.",
    rating: 5,
    avatar: "�👨🏾",
    gameVersion: "Kids"
  },
  {
    id: 11,
    name: "Celeste Nhamuave",
    location: "Lichinga",
    text: "Jogamos em família toda sexta-feira. Virou tradição lá em casa! Simplesmente perfeito.",
    rating: 5,
    avatar: "👩🏽",
    gameVersion: "Adulto"
  },
  {
    id: 12,
    name: "Eduardo Samo",
    location: "Dondo",
    text: "Comprei para o meu sobrinho e agora ele quer jogar todo dia. Muito educativo e divertido!",
    rating: 4,
    avatar: "👨🏽",
    gameVersion: "Kids"
  },
  {
    id: 13,
    name: "Benedita Mahanjane",
    location: "Nacala",
    text: "Excelente para desenvolver raciocínio rápido! Meus filhos melhoraram muito na escola depois de jogarem.",
    rating: 5,
    avatar: "👩🏾",
    gameVersion: "Adulto"
  },
  {
    id: 14,
    name: "Tomás Nhantumbo",
    location: "Vilanculos",
    text: "Produto 100% moçambicano de qualidade internacional! Orgulho do nosso país.",
    rating: 5,
    avatar: "👨🏿",
    gameVersion: "Kids"
  },
  {
    id: 15,
    name: "Isabel Mangue",
    location: "Cuamba",
    text: "Melhor investimento em entretenimento familiar que já fiz! Vale cada metical gasto.",
    rating: 5,
    avatar: "👩🏿",
    gameVersion: "Adulto"
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
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <h4 className="font-bold text-gray-900 dark:text-white text-lg">
                  {currentTestimonial.name}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {currentTestimonial.location}
                </p>
                <span className="inline-block mt-1 px-3 py-1 bg-orange-500 text-white text-sm rounded-full">
                  Versão {currentTestimonial.gameVersion}
                </span>
              </motion.div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-orange-300/20 to-red-300/20 rounded-full blur-2xl" />
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TestimonialCarousel;
