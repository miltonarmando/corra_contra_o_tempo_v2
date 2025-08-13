import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Clock,
  Users,
  Trophy,
  Star,
  ShoppingCart,
  Truck,
  Heart,
  Target,
  ArrowDown
} from '@phosphor-icons/react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getBoxPath, getBoardPath, getCardPath, getDecorativePath } from '../utils/assetPaths';
import ScrollProgressIndicator from '../components/ScrollProgressIndicator';
import BackToTop from '../components/BackToTop';
import FloatingParticles from '../components/FloatingParticles';
import SocialProofNotification from '../components/SocialProofNotification';
import AnimatedSection from '../components/AnimatedSection';
import TypewriterEffect from '../components/TypewriterEffect';
import ProductShowcase from '../components/ProductShowcase';
import ContentEnhancer from '../components/ContentEnhancer';
import { SmartAnimatedSection } from '../components/advanced/FluidScrollComponents';
import ChatBot from '../components/ChatBot';
import TestimonialCarousel from '../components/TestimonialCarousel';
import ResellerRegistrationModal from '../components/ResellerRegistrationModal';

interface EcommercePageProps {
  onNavigateToGame?: () => void;
}

// eslint-disable-next-line no-empty-pattern
const EcommercePage: React.FC<EcommercePageProps> = ({ }) => {
  const [selectedVersion, setSelectedVersion] = useState<'kids' | 'adult'>('adult');
  const [isCard1Flipped, setIsCard1Flipped] = useState(false);
  const [isCard2Flipped, setIsCard2Flipped] = useState(false);
  const [isResellerModalOpen, setIsResellerModalOpen] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-800 via-blue-900 to-red-600">
      <ScrollProgressIndicator />
      <Header cartItems={selectedVersion ? 1 : 0} />      {/* Hero Section - Enhanced with board game colors */}      <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-blue-800 via-blue-900 to-red-600 text-white pt-16 min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800/40 via-blue-900/30 to-red-800/20" />
        <FloatingParticles />
          {/* Animated background layers with game-themed decorative elements */}
        <motion.div 
          style={{ y }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-amber-800/20 to-red-800/20" />
          
          {/* Advanced geometric floating elements with board game theme */}
          <motion.div 
            className="absolute top-10 left-10 w-32 h-32 border-2 border-yellow-200/20 rounded-full"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          <motion.div 
            className="absolute top-1/4 right-20 w-16 h-16 bg-gradient-to-r from-amber-400/25 to-orange-500/25 transform rotate-45"
            animate={{
              y: [0, -30, 0],
              rotate: [45, 225, 45],
              scale: [1, 1.3, 1]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div 
            className="absolute bottom-1/4 left-1/4 w-24 h-24 border border-amber-300/20 rounded-lg backdrop-blur-sm"
            animate={{
              rotate: [0, -180, 0],
              x: [0, 20, 0],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          
          <motion.div 
            className="absolute top-2/3 right-10 w-20 h-20"
            animate={{
              scale: [1, 1.4, 1],
              rotate: [0, 360, 0]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="w-full h-full border-2 border-yellow-400/25 rounded-full"></div>
            <div className="absolute inset-2 border border-amber-300/20 rounded-full"></div>
          </motion.div>
          
          {/* Floating hexagons with board game colors */}
          <motion.div 
            className="absolute top-1/2 left-10 w-12 h-12"
            animate={{
              y: [0, -40, 0],
              rotate: [0, 120, 0],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            <div className="w-full h-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 transform rotate-30" style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}></div>
          </motion.div>
          
          {/* Sophisticated gradient orbs with warm tones */}
          <motion.div 
            className="absolute bottom-10 right-1/4 w-40 h-40 bg-gradient-radial from-orange-500/20 via-amber-500/15 to-transparent rounded-full blur-xl"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.4, 0.2],
              x: [0, 30, 0]
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4
            }}
          />
          
          {/* Game-themed floating elements */}
          <motion.div
            className="absolute top-20 right-20 text-5xl opacity-5 hidden md:block z-0"
            animate={{
              rotate: [0, 360],
              y: [0, -25, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            🎲
          </motion.div>
          
          <motion.div
            className="absolute bottom-20 left-20 text-4xl opacity-4 hidden lg:block z-0"
            animate={{
              rotate: [0, -180, 0],
              x: [0, 15, 0],
              scale: [1, 1.15, 1]
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 8            }}
          >
            ⏰
          </motion.div>
          
          {/* Floating decorative images */}
          <motion.img
            src={getDecorativePath.idealParaTi()}
            alt="Ideal para ti"
            className="absolute top-32 left-32 w-20 h-20 md:w-24 md:h-24 opacity-30 hidden lg:block z-0"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          
          <motion.img
            src={getDecorativePath.maisDe2500()}
            alt="Mais de 2500"
            className="absolute bottom-32 right-32 w-20 h-20 md:w-24 md:h-24 opacity-30 hidden lg:block z-0"
            animate={{
              y: [0, 15, 0],
              rotate: [0, -3, 3, 0],
              scale: [0.9, 1.2, 0.9]
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4
            }}
          />
          
          <motion.img
            src={getDecorativePath.facilDeJogar()}
            alt="Fácil de jogar"
            className="absolute top-1/2 left-16 w-18 h-18 md:w-20 md:h-20 opacity-25 hidden md:block z-0"
            animate={{
              x: [0, 10, 0],
              rotate: [0, 10, -10, 0],
              scale: [1, 1.15, 1]
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 6
            }}
          />
          
          <motion.img
            src={getDecorativePath.cartasEspeciais()}
            alt="Cartas especiais"
            className="absolute top-1/3 right-16 w-18 h-18 md:w-20 md:h-20 opacity-25 hidden md:block z-0"
            animate={{
              x: [0, -8, 0],
              y: [0, -12, 0],
              rotate: [0, -8, 8, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </motion.div>        {/* Main content container with 3-column layout for desktop */}
        <div className="relative container mx-auto mobile-container min-h-screen">
          {/* Desktop: 3-column layout (ADULTO | TEXT | KIDS) */}
          {/* Mobile/Tablet: Stacked layout (TEXT above, boxes below) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 mobile-gap items-center min-h-screen py-6">
            
            {/* Left Product Box - ADULTO (Desktop only visible) */}
            <div className="hidden lg:flex justify-center items-center order-1">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                className="relative group"
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <img 
                  src={getBoxPath.adult()} 
                  alt="Versão Adulto"
                  className="w-80 h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] 2xl:w-[32rem] 2xl:h-[32rem] object-contain transform group-hover:scale-110 transition-transform duration-500 filter drop-shadow-2xl"
                />
                <motion.div 
                  className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 bg-red-500 text-white text-xs sm:text-sm font-bold px-2 py-1 rounded-full"
                  animate={{
                    scale: [1, 1.1, 1],
                    boxShadow: [
                      "0 4px 6px rgba(0,0,0,0.1)",
                      "0 8px 25px rgba(239, 68, 68, 0.3)",
                      "0 4px 6px rgba(0,0,0,0.1)"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                >
                  ADULTO
                </motion.div>
                <motion.div 
                  className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 bg-yellow-500 text-black text-xs sm:text-sm font-bold px-2 py-1 rounded-full"
                  animate={{
                    scale: [1, 1.1, 1],
                    boxShadow: [
                      "0 4px 6px rgba(0,0,0,0.1)",
                      "0 8px 25px rgba(234, 179, 8, 0.3)",
                      "0 4px 6px rgba(0,0,0,0.1)"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  MAIS VENDIDO
                </motion.div>
              </motion.div>
            </div>

            {/* Center - Text content */}
            <div className="text-center max-w-4xl mx-auto order-1 lg:order-2">              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              >
                <Badge className="mobile-margin-sm text-mobile-badge bg-gradient-to-r from-blue-800 to-red-600 text-white font-bold rounded-full px-3 py-1 sm:px-4 sm:py-2">
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  CRIADO EM MOÇAMBIQUE
                </Badge>
                
                <h1 className="text-mobile-large font-black mobile-margin-sm leading-none tracking-tight">
                  <span className="bg-gradient-to-r from-blue-300 via-white to-red-300 bg-clip-text text-transparent">
                    CORRA CONTRA O TEMPO
                  </span>
                </h1>
                
                <p className="text-mobile-m text-amber-100 font-light max-w-3xl mx-auto mobile-margin">
                  O jogo de tabuleiro 100% moçambicano que desafia sua agilidade mental e reúne toda a família!
                </p>
                
                <div className="flex flex-col sm:flex-row mobile-gap justify-center mobile-margin">
                  <Button 
                    size="lg" 
                    className="mobile-button bg-gradient-to-r from-blue-700 to-red-500 hover:from-blue-800 hover:to-red-600 text-white font-bold hover:scale-105 transition-all duration-300 shadow-2xl"
                    onClick={() => document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <ShoppingCart className="w-5 h-5 mr-3" />
                    COMPRAR AGORA
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="mobile-button border-2 border-amber-200 text-amber-100 hover:bg-amber-200 hover:text-amber-900 font-bold hover:scale-105 transition-all duration-300"
                    onClick={() => document.getElementById('detalhes')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <ArrowDown className="w-5 h-5 mr-3" />
                    SAIBA MAIS
                  </Button>
                </div>

              </motion.div>
            </div>

            {/* Right Product Box - KIDS (Desktop only visible) */}
            <div className="hidden lg:flex justify-center items-center order-3">
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, delay: 0.7, ease: "easeOut" }}
                className="relative group"
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <img 
                  src={getBoxPath.kids()} 
                  alt="Versão Kids"
                  className="w-68 h-68 lg:w-80 lg:h-80 xl:w-96 xl:h-96 2xl:w-[28rem] 2xl:h-[28rem] object-contain transform group-hover:scale-110 transition-transform duration-500 filter drop-shadow-2xl"
                />
                <motion.div 
                  className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 bg-green-500 text-white text-xs sm:text-sm font-bold px-2 py-1 rounded-full"
                  animate={{
                    scale: [1, 1.1, 1],
                    boxShadow: [
                      "0 4px 6px rgba(0,0,0,0.1)",
                      "0 8px 25px rgba(34, 197, 94, 0.3)",
                      "0 4px 6px rgba(0,0,0,0.1)"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  KIDS
                </motion.div>
              </motion.div>
            </div>

            {/* Mobile/Tablet Product Showcase - Both boxes side by side */}
            <div className="lg:hidden order-2 mt-8">
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                className="flex justify-center items-center mobile-gap"
              >
                <motion.div 
                  className="relative group"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <img 
                    src={getBoxPath.adult()} 
                    alt="Versão Adulto"
                    className="w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 object-contain transform group-hover:scale-110 transition-transform duration-500 filter drop-shadow-2xl"
                  />
                  <motion.div 
                    className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 bg-red-500 text-white mobile-badge"
                    animate={{
                      scale: [1, 1.1, 1],
                      boxShadow: [
                        "0 4px 6px rgba(0,0,0,0.1)",
                        "0 8px 25px rgba(239, 68, 68, 0.3)",
                        "0 4px 6px rgba(0,0,0,0.1)"
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  >
                    ADULTO
                  </motion.div>
                  <motion.div 
                    className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 bg-yellow-500 text-black mobile-badge"
                    animate={{
                      scale: [1, 1.1, 1],
                      boxShadow: [
                        "0 4px 6px rgba(0,0,0,0.1)",
                        "0 8px 25px rgba(234, 179, 8, 0.3)",
                        "0 4px 6px rgba(0,0,0,0.1)"
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  >
                    MAIS VENDIDO
                  </motion.div>
                </motion.div>

                <motion.div 
                  className="relative group"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <img 
                    src={getBoxPath.kids()} 
                    alt="Versão Kids"
                    className="w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 object-contain transform group-hover:scale-110 transition-transform duration-500 filter drop-shadow-2xl"
                  />
                  <motion.div 
                    className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 bg-green-500 text-white mobile-badge"
                    animate={{
                      scale: [1, 1.1, 1],
                      boxShadow: [
                        "0 4px 6px rgba(0,0,0,0.1)",
                        "0 8px 25px rgba(34, 197, 94, 0.3)",
                        "0 4px 6px rgba(0,0,0,0.1)"
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    KIDS
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>      
      {/* How Easy Section - Enhanced with board game colors */}
      <section id='como-funciona' className="mobile-section bg-gradient-to-br from-blue-800 via-blue-900 to-red-600 text-white relative overflow-hidden">        
        
        {/* Floating decorative images for Como Funciona section */}
        <motion.img
          src={getDecorativePath.idealParaTi()}
          alt="Ideal para ti"
          className="absolute top-20 left-8 w-24 h-24 md:w-32 md:h-32 opacity-20 z-0"
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        
        <motion.img
          src={getDecorativePath.facilDeJogar()}
          alt="Fácil de jogar"
          className="absolute top-32 right-12 w-20 h-20 md:w-28 md:h-28 opacity-25 z-0"
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -8, 0]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        <div className="container mx-auto mobile-container">          
          <SmartAnimatedSection direction="up" className="text-center mobile-margin" once={false}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >              
            <h2 className="text-mobile-2xl font-black text-white dark:text-white mobile-margin">
                Como é fácil jogar?
              </h2>
              <div className="mobile-margin-sm">
                <TypewriterEffect 
                  words={["É muuuuito fácil!", "Muito simples!", "Super divertido!"]}
                  className="text-mobile-large font-light text-blue-200 dark:text-blue-300"
                />
              </div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-mobile-small text-blue-100 dark:text-blue-100 max-w-2xl mx-auto"
              >
                Três passos simples para começar a diversão em família!
              </motion.p>
            </motion.div>
          </SmartAnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 max-w-7xl mx-auto mb-16">            {[
              {
                number: 1,
                title: "Forme as Equipes",
                description: "Divida em equipes e escolham seus peões. Cada equipe coloca seu peão na casa de partida do tabuleiro.",
                emoji: "👥",
                delay: 0.1,
                color: "from-blue-500 to-blue-600",
                bgColor: "from-blue-50 to-blue-100"
              },
              {
                number: 2,
                title: "Pegue uma Carta",
                description: "Vire a ampulheta e descreva as palavras da carta para sua equipe em 30 segundos!",
                emoji: "⏰",
                delay: 0.3,
                color: "from-red-500 to-red-600",
                bgColor: "from-red-50 to-red-100"
              },
              {
                number: 3,
                title: "Avance no Tabuleiro",
                description: "Para cada palavra que sua equipe acertar, avance uma casa. Primeira equipe a completar o tabuleiro vence!",
                emoji: "🏆",
                delay: 0.5,
                color: "from-blue-600 to-red-500",
                bgColor: "from-blue-50 to-red-50"
              }
            ].map((step) => (
              <AnimatedSection 
                key={step.number}
                direction="up" 
                delay={step.delay}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className={`relative p-8 sm:p-10 bg-gradient-to-br from-white/95 to-blue-50/95 dark:from-gray-800 dark:to-gray-700 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 dark:border-gray-600/50 overflow-hidden`}                >                  {/* Background pattern - Completamente removido para evitar sobreposição */}
                  
                  {/* Step number - tamanho corrigido */}
                  <motion.div 
                    className={`step-circle-responsive bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white mobile-margin shadow-2xl relative z-10 mt-6 mx-auto`}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
                    }}
                    animate={{
                      boxShadow: [
                        "0 10px 20px rgba(0,0,0,0.1)",
                        "0 15px 30px rgba(234, 88, 12, 0.2)",
                        "0 10px 20px rgba(0,0,0,0.1)"
                      ]
                    }}
                    transition={{
                      boxShadow: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }}
                  >
                    <span className="font-black text-mobile-title">{step.number}</span>
                  </motion.div>
                  
                  {/* Content */}
                  <div className="relative z-10">                <h3 className="text-mobile-title font-bold text-gray-900 dark:text-gray-900 mobile-margin-sm">
                  {step.title}
                </h3>
                <p className="text-mobile-body text-gray-600 dark:text-gray-600 leading-relaxed mobile-margin">
                  {step.description}
                </p>
                    
                    {/* Progress indicator */}
                    <div className="flex justify-center">
                      <div className="flex space-x-2">
                        {[1, 2, 3].map((dot) => (
                          <motion.div
                            key={dot}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                              dot <= step.number 
                                ? `bg-gradient-to-r ${step.color}` 
                                : 'bg-gray-300 dark:bg-gray-600'
                            }`}
                            animate={dot <= step.number ? {
                              scale: [1, 1.3, 1],
                              opacity: [0.7, 1, 0.7]
                            } : {}}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              delay: dot * 0.2
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover glow effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}
                  />
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          {/* Call to action */}
          <AnimatedSection direction="scale" delay={0.7} className="text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="max-w-2xl mx-auto"
            >
              <div className="bg-gradient-to-r from-blue-800 to-red-600 rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
                {/* Background effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-red-700/20" />
                <div className="absolute top-0 left-1/4 w-32 h-32 bg-blue-600/20 rounded-full blur-xl animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-red-600/20 rounded-full blur-xl animate-pulse delay-1000" />
                
                <motion.h3
                  className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4 relative z-10"
                  animate={{
                    textShadow: [
                      "0 0 0px rgba(255,255,255,0)",
                      "0 0 20px rgba(255,255,255,0.5)",
                      "0 0 0px rgba(255,255,255,0)"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Pronto para começar? 🎮
                </motion.h3>
                
                <p className="text-lg sm:text-xl text-blue-100 mb-8 relative z-10">
                  A diversão está a apenas um clique de distância!
                </p>
                
                <Button 
                  size="lg" 
                  className="text-xl px-12 py-5 bg-gradient-to-r from-white to-gray-100 hover:from-gray-100 hover:to-white text-blue-700 font-black transform hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-3xl relative z-10"
                  onClick={() => document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <motion.span
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    QUERO JOGAR AGORA! 🚀
                  </motion.span>
                </Button>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Game Stats - Inspired by 30seconds.ie */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white relative overflow-hidden">
        {/* Improved background contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-slate-800/90 to-gray-900/95"></div>
        
        {/* Floating decorative patterns for better contrast */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            className="absolute top-20 left-20 w-32 h-32 border border-white/10 rounded-full"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          <motion.div 
            className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-r from-white/5 to-gray-200/5 rounded-lg"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 45, 0]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              Por que escolher nosso jogo?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Números que falam por si
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 max-w-7xl mx-auto">            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="mobile-margin-sm relative">
                {/* Background com imagem */}
                <div className="relative mb-6">
                  <motion.img
                    src={getDecorativePath.maisDe2500()}
                    alt="Mais de 2500"
                    className="w-20 h-20 mx-auto opacity-80 filter brightness-110"
                    animate={{
                      y: [0, -5, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full blur-xl"></div>
                </div>
                
                <motion.div 
                  className="text-4xl md:text-5xl font-black mobile-margin-xs bg-gradient-to-b from-yellow-400 to-orange-500 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  +2500
                </motion.div>
                <h3 className="text-lg md:text-xl font-bold mobile-margin-xs text-white group-hover:text-yellow-400 transition-colors">Palavras</h3>
                <p className="text-sm text-gray-300 leading-relaxed px-2">
                  para desafiar os seus conhecimentos
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="mobile-margin-sm relative">
                {/* Background com imagem */}
                <div className="relative mb-6">
                  <motion.img
                    src={getDecorativePath.cartasEspeciais()}
                    alt="Cartas especiais"
                    className="w-20 h-20 mx-auto opacity-80 filter brightness-110"
                    animate={{
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl"></div>
                </div>
                
                <motion.div 
                  className="text-4xl md:text-5xl font-black mobile-margin-xs bg-gradient-to-b from-purple-400 to-pink-500 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  MÍMICAS
                </motion.div>
                <h3 className="text-lg md:text-xl font-bold mobile-margin-xs text-white group-hover:text-purple-400 transition-colors">Cartas Especiais</h3>
                <p className="text-sm text-gray-300 leading-relaxed px-2">
                  para tornar o jogo ainda mais divertido
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="mobile-margin-sm relative">
                {/* Background com imagem */}
                <div className="relative mb-6">
                  <motion.img
                    src={getDecorativePath.idealParaTi()}
                    alt="Ideal para ti"
                    className="w-20 h-20 mx-auto opacity-80 filter brightness-110"
                    animate={{
                      y: [0, -8, 0],
                      rotate: [0, -5, 5, 0]
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-xl"></div>
                </div>
                
                <motion.div 
                  className="text-4xl md:text-5xl font-black mobile-margin-xs bg-gradient-to-b from-blue-400 to-cyan-500 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  IDEAL
                </motion.div>
                <h3 className="text-lg md:text-xl font-bold mobile-margin-xs text-white group-hover:text-blue-400 transition-colors">Para Todas Ocasiões</h3>
                <p className="text-sm text-gray-300 leading-relaxed px-2">
                  festas, família e encontros com amigos
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="mobile-margin relative">
                {/* Background com imagem */}
                <div className="relative mb-6">
                  <motion.img
                    src={getDecorativePath.facilDeJogar()}
                    alt="Fácil de jogar"
                    className="w-20 h-20 mx-auto opacity-80 filter brightness-110"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 360, 0]
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.5
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-full blur-xl"></div>
                </div>
                
                <motion.div 
                  className="text-4xl md:text-5xl font-black mobile-margin-xs bg-gradient-to-b from-green-400 to-emerald-500 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  FÁCIL
                </motion.div>
                <h3 className="text-lg md:text-xl font-bold mobile-margin-xs text-white group-hover:text-green-400 transition-colors">De Jogar</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Impossível de parar!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>      
      {/* Products Section - Enhanced with sophisticated floating elements */}
      <section id="produtos" className="mobile-section bg-gradient-to-br from-blue-800 via-blue-900 to-red-600 text-white relative overflow-hidden">
        
        {/* Floating decorative images for Products section */}
        <motion.img
          src={getDecorativePath.maisDe2500()}
          alt="Mais de 2500"
          className="absolute top-16 right-8 w-28 h-28 md:w-36 md:h-36 opacity-15 z-0"
          animate={{ 
            y: [0, -12, 0],
            x: [0, 8, 0],
            rotate: [0, 3, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        
        <motion.img
          src={getDecorativePath.cartasEspeciais()}
          alt="Cartas especiais"
          className="absolute bottom-32 left-4 w-24 h-24 md:w-32 md:h-32 opacity-20 z-0"
          animate={{ 
            y: [0, 10, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 4.5, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Advanced product section decorations */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Elegant geometric patterns */}
          <motion.div 
            className="absolute top-10 left-20 w-28 h-28 border-2 border-white/25 rounded-full"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.15, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          <motion.div 
            className="absolute top-1/4 right-10 w-20 h-20 bg-gradient-to-br from-white/15 to-blue-200/15 transform rotate-45 rounded-lg"
            animate={{
              y: [0, -25, 0],
              rotate: [45, 225, 45],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          
          <motion.div 
            className="absolute bottom-1/3 left-10 w-24 h-24"
            animate={{
              rotate: [0, -360],
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          >
            <div className="w-full h-full border border-white/20 rounded-lg backdrop-blur-sm"></div>
            <div className="absolute inset-3 border border-white/15 rounded-lg"></div>
          </motion.div>
          
          {/* Sophisticated hexagon cluster */}
          <motion.div 
            className="absolute top-2/3 right-1/4 w-16 h-16"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 120, 0],
              opacity: [0.25, 0.6, 0.25]
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="w-full h-full bg-gradient-to-r from-white/20 to-blue-200/20" style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}></div>
          </motion.div>
          
          {/* Flowing wave elements */}
          <motion.div 
            className="absolute bottom-10 right-20 w-32 h-8 bg-gradient-to-r from-white/15 to-blue-200/15 rounded-full"
            animate={{
              scaleX: [1, 1.5, 1],
              x: [0, 15, 0],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
          />
        </div>
          <div className="container mx-auto mobile-container">          
            <SmartAnimatedSection direction="up" className="text-center mobile-margin" once={false}>
            <h2 className="text-mobile-title font-black text-white dark:text-white mobile-margin-sm">
              Parabéns! Você está prestes a
            </h2>            
            <TypewriterEffect 
              words={["comprar o melhor jogo do mundo*", "ter o jogo mais divertido*", "diversão garantida em casa*"]}
              className="text-mobile-subtitle font-light text-blue-200 dark:text-blue-300"
            />
            <br />
            <br />
          </SmartAnimatedSection><div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
              {/* Adult Version - Enhanced */}
              <SmartAnimatedSection direction="left" className="text-center h-full" once={false}>

                  <ProductShowcase version="adult" className="absolute inset-0" />                  
                    <Card className="mobile-card h-full flex flex-col relative overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 hover:border-blue-300 bg-gradient-to-br from-white/95 to-blue-50/95 backdrop-blur-sm">
                    <div className="absolute top-4 right-4 mobile-badge bg-gradient-to-r from-blue-700 to-red-500 text-white z-10">
                        ADULTO
                    </div>
                    
                    {/* Imagem padronizada */}                    
                    <div className="flex justify-center items-center h-64 sm:h-72 lg:h-80 mobile-margin-sm">
                      <motion.img 
                        src={getBoardPath.adult()} 
                        alt="Corra Contra o Tempo - Adulto"
                        className="w-auto h-full max-w-full object-contain"
                        whileHover={{ 
                          scale: 1.05,
                          rotateY: 15,
                          rotateX: 5
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    
                    {/* Conteúdo do card */}
                    <div className="flex-1 flex flex-col justify-between">                    
                      <div className="mobile-margin-sm">
                        <div className="flex items-center justify-center mobile-gap-sm mobile-margin-sm">
                          <motion.span 
                            className="text-mobile-price text-blue-800"
                            whileHover={{ scale: 1.05 }}
                          >
                            1.500 MT
                          </motion.span>
                          <span className="text-mobile-body text-gray-500 line-through">
                            1.900 MT
                          </span>
                          <Badge className="mobile-badge bg-red-500 text-white animate-pulse">
                            Promo
                          </Badge>
                          {/* Stamp de desconto próximo ao preço */}
                          <motion.div 
                            className="bg-gradient-to-r from-red-500 to-red-600 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg ml-2"
                            animate={{
                              scale: [1, 1.1, 1],
                              boxShadow: [
                                "0 4px 6px rgba(0,0,0,0.1)",
                                "0 8px 25px rgba(239, 68, 68, 0.4)",
                                "0 4px 6px rgba(0,0,0,0.1)"
                              ]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            -21%
                          </motion.div>
                        </div>
                        <p className="text-mobile-body text-gray-600 dark:text-gray-300 text-center mobile-margin-sm">
                          Versão com palavras mais desafiadoras
                        </p>
                      </div>                      
                      <div className="mobile-grid-2 mobile-margin-sm">
                        {[
                          { icon: Users, text: "2-6 Jogadores" },
                          { icon: Clock, text: "30-45 min" },
                          { icon: Target, text: "Palavras difíceis" },
                          { icon: Trophy, text: "Competitivo" }
                        ].map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05, duration: 0.3 }}
                            viewport={{ once: true }}
                          >                            
                          <Badge className="mobile-badge inline-flex justify-center py-2 px-3 text-mobile-caption text-black hover:bg-blue-50 transition-colors duration-200">
                              <item.icon className="icon-responsive-sm mr-1 text-black" />
                              {item.text}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>

                      <div className="mt-auto">                        
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Button 
                            className="w-full px-8 py-4 text-lg bg-gradient-to-r from-blue-700 to-red-500 hover:from-blue-800 hover:to-red-600 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 min-h-[56px]"
                            onClick={() => setSelectedVersion('adult')}
                          >
                            <ShoppingCart className="icon-responsive mr-2" />
                            COMPRAR AGORA
                          </Button>
                        </motion.div>
                        
                        <div className="flex items-center justify-center text-mobile-caption text-gray-600 dark:text-gray-400 mt-3">
                          <Truck className="icon-responsive-sm mr-1" />
                          Entrega para todo Moçambique
                        </div>
                      </div>
                    </div>
                  </Card>

              </SmartAnimatedSection>              
              {/* Kids Version - Enhanced */}
              <SmartAnimatedSection direction="right" delay={0.2} className="text-center h-full" once={false}>
                  <ProductShowcase version="kids" className="absolute inset-0" />
                  
                    <Card className="mobile-card h-full flex flex-col relative overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 hover:border-blue-300 bg-gradient-to-br from-white/95 to-blue-50/95 backdrop-blur-sm">
                    <div className="absolute top-4 right-4 mobile-badge bg-gradient-to-r from-blue-700 to-red-500 text-white z-10">
                      KIDS
                    </div>
                    
                    {/* Imagem padronizada */}
                    <div className="flex justify-center items-center h-64 sm:h-72 lg:h-80 mobile-margin-sm">                      
                      <motion.img 
                        src={getBoardPath.kids()} 
                        alt="Corra Contra o Tempo - Kids"
                        className="w-auto h-full max-w-full object-contain"
                        whileHover={{ 
                          scale: 1.05,
                          rotateY: -15,
                          rotateX: 5
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    {/* Conteúdo do card */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="mobile-margin-sm">
                        <div className="flex items-center justify-center mobile-gap-sm mobile-margin-sm">
                          <motion.span 
                            className="text-mobile-price text-blue-800"
                            whileHover={{ scale: 1.05 }}
                          >
                            1.500 MT
                          </motion.span>
                          <span className="text-mobile-body text-gray-500 line-through">
                            1.800 MT
                          </span>
                          <Badge className="mobile-badge bg-red-500 text-white animate-pulse">
                            Promo
                          </Badge>
                          {/* Stamp de desconto próximo ao preço */}
                          <motion.div 
                            className="bg-gradient-to-r from-green-500 to-green-600 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg ml-2"
                            animate={{
                              scale: [1, 1.1, 1],
                              boxShadow: [
                                "0 4px 6px rgba(0,0,0,0.1)",
                                "0 8px 25px rgba(34, 197, 94, 0.4)",
                                "0 4px 6px rgba(0,0,0,0.1)"
                              ]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: 0.5
                            }}
                          >
                            -17%
                          </motion.div>
                        </div>                        
                        <p className="text-mobile-body text-gray-600 dark:text-gray-300 text-center mobile-margin-sm">
                          Versão com palavras mais simples
                        </p>
                      </div>                      
                      <div className="mobile-grid-2 mobile-margin-sm">
                        {[
                          { icon: Users, text: "2-6 Jogadores" },
                          { icon: Clock, text: "30-45 min" },
                          { icon: Heart, text: "Palavras fáceis" },
                          { icon: Star, text: "Divertido" }
                        ].map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05, duration: 0.3 }}
                            viewport={{ once: true }}                          >
                            <Badge className="mobile-badge inline-flex justify-center py-2 px-3 text-mobile-caption text-black hover:bg-blue-50 transition-colors duration-200">
                              <item.icon className="icon-responsive-sm mr-1 text-black" />
                              {item.text}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>

                      <div className="mt-auto">                        
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Button 
                            className="w-full px-8 py-4 text-lg bg-gradient-to-r from-blue-700 to-red-500 hover:from-blue-800 hover:to-red-600 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 min-h-[56px]"
                            onClick={() => setSelectedVersion('kids')}
                          >
                            <ShoppingCart className="icon-responsive mr-2" />
                            COMPRAR AGORA
                          </Button>
                        </motion.div>
                        
                        <div className="flex items-center justify-center text-mobile-caption text-gray-600 dark:text-gray-400 mt-3">
                          <Truck className="icon-responsive-sm mr-1" />
                          Entrega para todo Moçambique
                        </div>                      
                        </div>
                    </div>
                  </Card>
              </SmartAnimatedSection>
            </div>
            <br />            
            {/* Comparison note - Enhanced */}            
            <SmartAnimatedSection direction="scale" delay={0.4} className="text-center mobile-margin" once={false}>
              <ContentEnhancer variant="highlight">
                <p className="text-mobile-body text-white max-w-3xl mx-auto leading-relaxed">
                  🎯 Ambas as versões têm o mesmo conteúdo e regras, diferindo apenas na dificuldade das palavras.
                  A versão "Kids" tem palavras mais simples, enquanto a "Adulto" tem palavras mais desafiadoras! ✨    
                </p>
              </ContentEnhancer>
            </SmartAnimatedSection>
          </div>
        </div>
      </section>      
      {/* Game Details Section - Ultra-Modern with Advanced UIX */}
      <section id="detalhes" className="mobile-section bg-gradient-to-br from-blue-800 via-blue-900 to-red-600 text-white relative overflow-hidden">
        
        {/* Floating decorative images for Detalhes section */}
        <motion.img
          src={getDecorativePath.cartasEspeciais()}
          alt="Cartas especiais"
          className="absolute top-24 left-8 w-32 h-32 md:w-40 md:h-40 opacity-15 z-0"
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 8, 0]
          }}
          transition={{ 
            duration: 5.5, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        
        <motion.img
          src={getDecorativePath.idealParaTi()}
          alt="Ideal para ti"
          className="absolute bottom-20 right-16 w-28 h-28 md:w-36 md:h-36 opacity-18 z-0"
          animate={{ 
            y: [0, 12, 0],
            x: [0, -6, 0],
            rotate: [0, -4, 0]
          }}
          transition={{ 
            duration: 4.8, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1.5
          }}
        />
        
        {/* Ultra-modern floating patterns */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          {/* Geometric constellation */}
          <motion.div 
            className="absolute top-20 right-10 w-40 h-40"
            animate={{
              rotate: [0, 360],
              scale: [0.8, 1.1, 0.8]
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <div className="absolute inset-0 border border-white/30 dark:border-white/30 rounded-2xl transform rotate-12"></div>
            <div className="absolute inset-6 border border-blue-200/20 dark:border-blue-200/20 rounded-xl transform -rotate-12"></div>
            <div className="absolute inset-12 bg-gradient-conic from-white/20 via-blue-200/20 to-white/20 rounded-full"></div>
          </motion.div>
          
          {/* Flowing wave patterns */}
          <motion.div 
            className="absolute top-1/3 left-8 w-32 h-32"
            animate={{
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="w-full h-full bg-gradient-to-br from-white/20 to-blue-200/20 rounded-3xl transform skew-y-12"></div>
          </motion.div>
          
          {/* Hexagonal mesh */}
          <motion.div 
            className="absolute bottom-1/4 right-1/5 w-24 h-24"
            animate={{
              rotate: [0, 120, 240, 360],
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="w-full h-full border-2 border-white/30 dark:border-white/30" style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)' }}></div>
          </motion.div>
        </div>
        
        <div className="container mx-auto mobile-container">
          {/* Ultra-modern title with glassmorphism */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative inline-block">
              <motion.h4 
                className="text-mobile-title font-black bg-gradient-to-r from-white via-blue-200 to-red-200 dark:from-white dark:via-blue-200 dark:to-red-200 bg-clip-text text-transparent relative z-10"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                O que vem na caixa?
              </motion.h4>
              
              {/* Glassmorphism backdrop */}
              <div className="absolute -inset-4 bg-gradient-to-br from-white/30 to-blue-200/30 backdrop-blur-sm rounded-2xl border border-white/30 -z-10"></div>
            </div>
            
            <motion.p 
              className="text-mobile-body text-blue-100 dark:text-blue-100 mt-4 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Cada componente foi cuidadosamente selecionado para proporcionar a melhor experiência de jogo
            </motion.p>
          </motion.div>

          {/* Ultra-modern grid layout */}
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Components showcase - takes 2 columns */}
            <div className="lg:col-span-2">
              <motion.div
                className="bg-gradient-to-br from-white/95 to-blue-50/95 backdrop-blur-xl rounded-3xl border border-white/40 p-8 shadow-2xl"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
                }}
              >
                {/* Premium components grid */}
                <div className="grid sm:grid-cols-2 gap-6">                  {[
                    { 
                      icon: "🎯", 
                      title: "1 Tabuleiro", 
                      desc: "Tabuleiro colorido e resistente",
                      color: "from-orange-500 to-red-500",
                      bgColor: "from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20"
                    },
                    { 
                      icon: "🎴", 
                      title: "250 Cartas", 
                      desc: "Cartas com palavras para adivinhar",
                      color: "from-purple-500 to-pink-500",
                      bgColor: "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20"
                    },
                    { 
                      icon: "🎲", 
                      title: "6 Peões", 
                      desc: "Peões coloridos para os jogadores",
                      color: "from-green-500 to-emerald-500",
                      bgColor: "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20"
                    },
                    { 
                      icon: "⏳", 
                      title: "1 Ampulheta", 
                      desc: "Conta 30 segundos para cada rodada",
                      color: "from-blue-500 to-cyan-500",
                      bgColor: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20"
                    },
                    { 
                      icon: "📖", 
                      title: "Manual de Regras", 
                      desc: "Instruções completas em português",
                      color: "from-yellow-500 to-orange-500",
                      bgColor: "from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20"
                    },
                    { 
                      icon: "🎁", 
                      title: "Caixa Resistente", 
                      desc: "Para guardar todas as peças",
                      color: "from-indigo-500 to-purple-500",
                      bgColor: "from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20"
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className={`relative p-6 rounded-2xl bg-gradient-to-br ${item.bgColor} border border-white/50 dark:border-gray-600/30 group cursor-pointer`}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      whileHover={{ 
                        scale: 1.05,
                        rotateY: 5,
                        z: 50
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Gradient border effect */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300`}></div>
                      
                      <div className="relative z-10">
                        <motion.div 
                          className={`w-14 h-14 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center text-2xl mb-4 shadow-lg`}
                          whileHover={{ 
                            rotate: 360,
                            scale: 1.1
                          }}
                          transition={{ duration: 0.6 }}
                        >
                          {item.icon}
                        </motion.div>
                        
                        <h5 className="font-bold text-lg text-gray-900 dark:text-white mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                          {item.title}
                        </h5>
                        
                        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                          {item.desc}
                        </p>
                        
                        {/* Hover effect sparkle */}
                        <motion.div
                          className="absolute top-4 right-4 text-yellow-400 opacity-0 group-hover:opacity-100"
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        >
                          ✨
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Download CTA */}
                <motion.div
                  className="mt-8 pt-6 border-t border-gray-200/50 dark:border-gray-600/30"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
            
            {/* Product showcase - takes 1 column */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-white/95 to-blue-50/95 backdrop-blur-xl rounded-3xl border border-white/40 p-6 shadow-2xl h-full">
                <motion.div
                  className="relative group h-full flex flex-col"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Image container */}
                  <div className="relative flex-1 mb-6">
                    {/* Glow effect */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-orange-400/30 to-red-500/30 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                    
                    <motion.img 
                      src={getBoardPath.simple()} 
                      alt="Tabuleiro do Jogo"
                      className="w-full h-auto object-contain rounded-2xl shadow-xl relative z-10 mb-4"
                      whileHover={{ 
                        rotateY: 8,
                        rotateX: 8,
                        scale: 1.05
                      }}
                      transition={{ duration: 0.6 }}
                    />
                    
                    {/* Interactive Cards - Stacked vertically with independent flips */}
                    <div className="flex flex-col items-center gap-3 mb-4 relative">
                      {/* First Card */}
                      <motion.div 
                        className="relative w-80 h-48 cursor-pointer"
                        style={{ perspective: "1000px" }}
                        onClick={() => setIsCard1Flipped(!isCard1Flipped)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <motion.div
                          className="absolute inset-0 w-full h-full"
                          style={{ transformStyle: "preserve-3d" }}
                          animate={{ rotateY: isCard1Flipped ? 180 : 0 }}
                          transition={{ duration: 0.6 }}
                        >
                          {/* Frente da carta */}
                          <motion.img
                            src={getCardPath.front()}
                            alt="Frente da Carta"
                            className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-xl"
                            style={{ backfaceVisibility: "hidden" }}
                          />
                          
                          {/* Verso da carta */}
                          <motion.img
                            src={getCardPath.rear()}
                            alt="Verso da Carta"
                            className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-xl"
                            style={{ 
                              backfaceVisibility: "hidden",
                              transform: "rotateY(180deg)"
                            }}
                          />
                        </motion.div>
                      </motion.div>

                      {/* Second Card */}
                      <motion.div 
                        className="relative w-80 h-48 cursor-pointer"
                        style={{ perspective: "1000px" }}
                        onClick={() => setIsCard2Flipped(!isCard2Flipped)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <motion.div
                          className="absolute inset-0 w-full h-full"
                          style={{ transformStyle: "preserve-3d" }}
                          animate={{ rotateY: isCard2Flipped ? 180 : 0 }}
                          transition={{ duration: 0.6 }}
                        >
                          {/* Frente da carta */}
                          <motion.img
                            src={getCardPath.front()}
                            alt="Frente da Carta"
                            className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-xl"
                            style={{ backfaceVisibility: "hidden" }}
                          />
                          
                          {/* Verso da carta */}
                          <motion.img
                            src={getCardPath.rear()}
                            alt="Verso da Carta"
                            className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-xl"
                            style={{ 
                              backfaceVisibility: "hidden",
                              transform: "rotateY(180deg)"
                            }}
                          />
                        </motion.div>
                      </motion.div>
                      
                      {/* Indicador de clique */}
                      
                    </div>
                    
                    {/* Quality badges */}
                    <motion.div
                      className="absolute -top-3 -right-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg z-20"
                      animate={{
                        y: [0, -3, 0],
                        boxShadow: [
                          "0 4px 6px rgba(0,0,0,0.1)",
                          "0 8px 20px rgba(16, 185, 129, 0.4)",
                          "0 4px 6px rgba(0,0,0,0.1)"
                        ]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      ✅ PREMIUM
                    </motion.div>
                    
                    <motion.div
                      className="absolute -bottom-3 -left-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold shadow-lg z-20"
                      animate={{
                        y: [0, 3, 0],
                        boxShadow: [
                          "0 4px 6px rgba(0,0,0,0.1)",
                          "0 8px 20px rgba(251, 191, 36, 0.4)",
                          "0 4px 6px rgba(0,0,0,0.1)"
                        ]
                      }}
                      transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1.5
                      }}
                    >
                      🇲🇿 MOÇAMBIQUE
                    </motion.div>
                  </div>
                  
                  {/* Description */}
                  <motion.div 
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>      
      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-800 via-blue-900 to-red-600 text-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-white via-blue-200 to-red-200 bg-clip-text text-transparent">
              O que dizem nossos clientes
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Mais de 1000 famílias já se divertem com Corra Contra o Tempo!
            </p>
          </motion.div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* Become a Reseller Section */}
      <section id="revendedor" className="py-20 bg-gradient-to-br from-green-800 via-blue-800 to-purple-800 text-white relative overflow-hidden">
        {/* Advanced background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 via-blue-600/15 to-purple-600/20"></div>
        
        {/* Floating decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
              x: [0, 50, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div 
            className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-2xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.7, 0.4],
              y: [0, -30, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500/20 to-purple-500/20 backdrop-blur-xl rounded-full px-6 py-3 mb-8 border border-white/10"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-green-400 text-2xl">💼</span>
                <span className="text-green-300 font-semibold">Oportunidade de Negócio</span>
              </motion.div>
              
              <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-green-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
                Torne-se um Revendedor
              </h2>
              
              <p className="text-xl text-green-100 mb-12 max-w-3xl mx-auto leading-relaxed">
                Junte-se à nossa rede de revendedores e ganhe dinheiro vendendo o jogo mais divertido de Moçambique! 
                <span className="block mt-2 text-lg text-blue-200">
                  Margens atrativas • Suporte completo • Estoque garantido
                </span>
              </p>
            </motion.div>

            {/* Main CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-purple-500 rounded-2xl blur-xl opacity-30 animate-pulse"></div>
              
              <motion.button
                onClick={() => setIsResellerModalOpen(true)}
                className="relative bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 hover:from-green-600 hover:via-blue-600 hover:to-purple-600 text-white font-black text-2xl px-12 py-6 rounded-2xl shadow-2xl transition-all duration-300 border-2 border-white/20"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="flex items-center justify-center gap-4"
                  animate={{
                    y: [0, -2, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <span className="text-3xl">🚀</span>
                  <span>QUERO SER REVENDEDOR</span>
                  <span className="text-3xl">💰</span>
                </motion.div>
                
                {/* Sparkle effects */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-white rounded-full"
                      style={{
                        left: `${20 + (i * 12)}%`,
                        top: `${30 + (i % 2) * 40}%`,
                      }}
                      animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
              </motion.button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-12 flex flex-wrap justify-center items-center gap-8 text-green-200"
            >
              <div className="flex items-center gap-2">
                <span className="text-green-400 text-xl">✅</span>
                <span className="font-semibold">Produto 100% Moçambicano</span>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-blue-400 text-xl">🎯</span>
                <span className="font-semibold">Alta Demanda</span>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-purple-400 text-xl">💎</span>
                <span className="font-semibold">Qualidade Premium</span>
              </div>
            </motion.div>

            {/* Additional info */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-8 text-gray-300 text-lg"
            >
              Cadastro rápido e simples
            </motion.p>
          </div>
        </div>
      </section>

      {/* FAQ Section - Enhanced with modern animations */}
      {/*<div id="faq">*/}
        {/*<FAQ />*/}
      {/*</div>      */}
      
      
      {/* Contact Section */}
      <section id="contato" className="bg-gradient-to-br from-gray-900 via-blue-900 to-red-900 text-white py-20 relative overflow-hidden">
        
        {/* Floating decorative images for Contact section */}
        <motion.img
          src={getDecorativePath.facilDeJogar()}
          alt="Fácil de jogar"
          className="absolute top-8 left-12 w-20 h-20 md:w-24 md:h-24 opacity-10 z-0"
          animate={{ 
            y: [0, -8, 0],
            rotate: [0, 6, 0]
          }}
          transition={{ 
            duration: 3.5, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        
        <motion.img
          src={getDecorativePath.maisDe2500()}
          alt="Mais de 2500"
          className="absolute bottom-16 right-8 w-24 h-24 md:w-28 md:h-28 opacity-12 z-0"
          animate={{ 
            y: [0, 10, 0],
            x: [0, -4, 0],
            rotate: [0, -3, 0]
          }}
          transition={{ 
            duration: 4.2, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Entre em Contato
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Tem dúvidas sobre o jogo? Nossa equipe está aqui para ajudar!
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <motion.div 
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl mb-4">📞</div>
                <h3 className="text-xl font-bold mb-2">Telefone</h3>
                <p className="text-gray-300">+258 84 312 4567</p>
              </motion.div>
              
              <motion.div 
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl mb-4">✉️</div>
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="text-gray-300">info@corracontraotempo.co.mz</p>
              </motion.div>
              
              <motion.div 
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl mb-4">💬</div>
                <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
                <p className="text-gray-300">Resposta imediata</p>
              </motion.div>
            </div>
          </motion.div>
        </div>      
        </section>
      
      <SocialProofNotification />
      <BackToTop />
      <ChatBot />
      <Footer />
      
      {/* Reseller Registration Modal */}
      <ResellerRegistrationModal 
        isOpen={isResellerModalOpen}
        onClose={() => setIsResellerModalOpen(false)}
      />
    </div>
  );
};

export default EcommercePage;
