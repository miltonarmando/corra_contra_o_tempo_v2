import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Clock,
  Users,
  Trophy,
  Star,
  ShoppingCart,
  Download,
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
import FAQ from '../components/FAQ';
import { getBoxPath, getBoardPath, getCardPath, getManualPath } from '../utils/assetPaths';
import ScrollProgressIndicator from '../components/ScrollProgressIndicator';
import BackToTop from '../components/BackToTop';
import FloatingParticles from '../components/FloatingParticles';
import SocialProofNotification from '../components/SocialProofNotification';
import AnimatedSection from '../components/AnimatedSection';
import AnimatedCounter from '../components/AnimatedCounter';
import TypewriterEffect from '../components/TypewriterEffect';
import TestimonialCarousel from '../components/TestimonialCarousel';
import ProductShowcase from '../components/ProductShowcase';
import ContentEnhancer from '../components/ContentEnhancer';
import { SmartAnimatedSection } from '../components/advanced/FluidScrollComponents';

interface EcommercePageProps {
  onNavigateToGame?: () => void;
}

// eslint-disable-next-line no-empty-pattern
const EcommercePage: React.FC<EcommercePageProps> = ({ }) => {
  const [selectedVersion, setSelectedVersion] = useState<'kids' | 'adult'>('adult');
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <ScrollProgressIndicator />
      <Header cartItems={selectedVersion ? 1 : 0} />{/* Hero Section - Enhanced with more animations */}      <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 text-white pt-16 min-h-screen">
        <div className="absolute inset-0 bg-black/20" />
        <FloatingParticles />
          {/* Animated background layers with advanced decorative elements */}
        <motion.div 
          style={{ y }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/30 to-pink-600/30" />
          
          {/* Advanced geometric floating elements */}
          <motion.div 
            className="absolute top-10 left-10 w-32 h-32 border-2 border-white/10 rounded-full"
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
            className="absolute top-1/4 right-20 w-16 h-16 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 transform rotate-45"
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
            className="absolute bottom-1/4 left-1/4 w-24 h-24 border border-white/15 rounded-lg backdrop-blur-sm"
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
            <div className="w-full h-full border-2 border-pink-300/20 rounded-full"></div>
            <div className="absolute inset-2 border border-white/10 rounded-full"></div>
          </motion.div>
          
          {/* Floating hexagons */}
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
            <div className="w-full h-full bg-gradient-to-r from-yellow-400/15 to-orange-400/15 transform rotate-30" style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}></div>
          </motion.div>
          
          {/* Sophisticated gradient orbs */}
          <motion.div 
            className="absolute bottom-10 right-1/4 w-40 h-40 bg-gradient-radial from-pink-400/15 via-purple-400/10 to-transparent rounded-full blur-xl"
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
        </motion.div>{/* Main content container with proper grid layout */}
        <div className="relative container mx-auto mobile-container min-h-screen">
          <div className="grid lg:grid-cols-2 mobile-gap items-center min-h-screen py-6">
            
            {/* Left side - Text content */}
            <div className="text-center lg:text-left max-w-4xl mx-auto lg:mx-0 order-2 lg:order-1">              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              ><Badge className="mobile-margin-sm text-mobile-badge bg-gradient-to-r from-green-600 to-red-600 text-white font-bold rounded-full px-3 py-1 sm:px-4 sm:py-2">
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  CRIADO EM MOÇAMBIQUE
                </Badge>
                
                <h1 className="text-mobile-3xl font-black mobile-margin leading-none tracking-tight">
                  <span className="block">CORRA CONTRA O</span>
                  <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                    TEMPO
                  </span>
                </h1>
                
                <p className="text-mobile-small text-orange-100 font-light max-w-3xl mx-auto lg:mx-0 mobile-margin">
                  O jogo de tabuleiro 100% moçambicano que desafia sua agilidade mental e reúne toda a família!
                </p>
                
                <div className="flex flex-col sm:flex-row mobile-gap justify-center lg:justify-start mobile-margin">                  <Button 
                    size="lg" 
                    className="mobile-button bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold hover:scale-105 transition-all duration-300 shadow-2xl"
                    onClick={() => document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <ShoppingCart className="w-5 h-5 mr-3" />
                    COMPRAR AGORA
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="mobile-button border-2 border-white text-white hover:bg-white hover:text-orange-600 font-bold hover:scale-105 transition-all duration-300"
                    onClick={() => document.getElementById('como-funciona')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <ArrowDown className="w-5 h-5 mr-3" />
                    SAIBA MAIS
                  </Button>
                </div>

                <motion.div
                  className="flex flex-wrap items-center justify-center lg:justify-start mobile-gap text-mobile-caption"                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2, duration: 1.2, ease: "easeOut" }}
                >
                  <motion.div 
                    className="flex items-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="flex mr-3">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ delay: 2.2 + (i * 0.1), duration: 0.8, ease: "easeOut" }}
                        >
                          <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="text-orange-100"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2.5, duration: 1.0, ease: "easeOut" }}
                  >
                    <AnimatedCounter to={847} className="font-bold" /> avaliações
                  </motion.div>
                  
                  <motion.div 
                    className="text-orange-100"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2.7, duration: 1.0, ease: "easeOut" }}
                  >
                    <AnimatedCounter to={2000} className="font-bold" suffix="+" /> famílias
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>            {/* Right side - Product showcase */}
            <div className="relative order-1 lg:order-2">
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                className="flex justify-center items-center mobile-gap"
              >                <motion.div 
                  className="relative group"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >                  <img 
                    src={getBoxPath.kids()} 
                    alt="Versão Kids"
                    className="mobile-image-hero transform group-hover:scale-110 transition-transform duration-500 filter drop-shadow-2xl"
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
                  <motion.div 
                  className="relative group"
                  whileHover={{ y: -10 }}                  transition={{ duration: 0.6, ease: "easeOut" }}
                >                  <img 
                    src={getBoxPath.adult()} 
                    alt="Versão Adulto"
                    className="mobile-image-hero transform group-hover:scale-110 transition-transform duration-500 filter drop-shadow-2xl"
                    style={{ width: 'auto', height: 'auto', maxWidth: '100%' }}
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
              </motion.div>
            </div>
          </div>
        </div>
      </section>      {/* How Easy Section - Enhanced with advanced decorative elements */}
      <section id='como-funciona' className="mobile-section bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">        
        {/* Advanced floating decorations */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Geometric shapes */}
          <motion.div 
            className="absolute top-20 left-10 w-24 h-24 border border-orange-200/30 rounded-lg transform rotate-45"
            animate={{
              rotate: [45, 225, 45],
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div 
            className="absolute top-1/3 right-20 w-16 h-16"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360, 0]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <div className="w-full h-full bg-gradient-to-r from-pink-200/20 to-purple-200/20 rounded-full"></div>
            <div className="absolute inset-2 border border-pink-300/30 rounded-full"></div>
          </motion.div>
          
          <motion.div 
            className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-gradient-to-br from-yellow-200/15 to-orange-200/15 rounded-lg backdrop-blur-sm"
            animate={{
              rotate: [0, -180, 0],
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          
          {/* Floating triangles */}
          <motion.div 
            className="absolute top-2/3 right-1/4 w-14 h-14"
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 0],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            <div className="w-full h-full bg-gradient-to-t from-green-200/20 to-blue-200/20 transform rotate-180" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
          </motion.div>
        </div>
        
        <div className="container mx-auto mobile-container">          <SmartAnimatedSection direction="up" className="text-center mobile-margin" once={false}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >              <h2 className="text-mobile-2xl font-black text-gray-900 dark:text-white mobile-margin">
                Como é fácil jogar?
              </h2>
              <div className="mobile-margin-sm">
                <TypewriterEffect 
                  words={["É muuuuito fácil!", "Muito simples!", "Super divertido!"]}
                  className="text-mobile-large font-light text-orange-600 dark:text-orange-400"
                />
              </div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-mobile-small text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
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
                color: "from-blue-500 to-purple-600",
                bgColor: "from-blue-50 to-purple-50"
              },
              {
                number: 2,
                title: "Pegue uma Carta",
                description: "Vire a ampulheta e descreva as palavras da carta para sua equipe em 30 segundos!",
                emoji: "⏰",
                delay: 0.3,
                color: "from-orange-500 to-red-600",
                bgColor: "from-orange-50 to-red-50"
              },
              {
                number: 3,
                title: "Avance no Tabuleiro",
                description: "Para cada palavra que sua equipe acertar, avance uma casa. Primeira equipe a completar o tabuleiro vence!",
                emoji: "🏆",
                delay: 0.5,
                color: "from-green-500 to-emerald-600",
                bgColor: "from-green-50 to-emerald-50"
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
                  className={`relative p-8 sm:p-10 bg-gradient-to-br ${step.bgColor} dark:from-gray-800 dark:to-gray-700 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/50 dark:border-gray-600/50 overflow-hidden`}                >                  {/* Background pattern - Completamente removido para evitar sobreposição */}
                  
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
                  <div className="relative z-10">                <h3 className="text-mobile-title font-bold text-gray-900 dark:text-white mobile-margin-sm">
                  {step.title}
                </h3>
                <p className="text-mobile-body text-gray-600 dark:text-gray-300 leading-relaxed mobile-margin">
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
              <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
                {/* Background effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-red-600/20" />
                <div className="absolute top-0 left-1/4 w-32 h-32 bg-yellow-400/20 rounded-full blur-xl animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-pink-400/20 rounded-full blur-xl animate-pulse delay-1000" />
                
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
                
                <p className="text-lg sm:text-xl text-orange-100 mb-8 relative z-10">
                  A diversão está a apenas um clique de distância!
                </p>
                
                <Button 
                  size="lg" 
                  className="text-xl px-12 py-5 bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-black font-black transform hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-3xl relative z-10"
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
      <section className="py-20 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white">
        <div className="container mx-auto px-6">          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 sm:mb-4">
              Corra Contra o Tempo, em números!
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 max-w-6xl mx-auto">            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="mobile-margin-sm">
                <motion.div 
                  className="text-responsive-4xl font-black mobile-margin-xs bg-gradient-to-b from-yellow-300 to-orange-400 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <AnimatedCounter to={240} />
                </motion.div>
                <h3 className="text-mobile-title font-bold mobile-margin-xs">Cartas de Desafio</h3>
                <p className="text-mobile-body text-orange-100 leading-relaxed px-2">
                  Centenas de palavras para descrever e adivinhar em diferentes categorias
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="mobile-margin-sm">                <motion.div 
                  className="text-responsive-4xl font-black mobile-margin-xs bg-gradient-to-b from-yellow-300 to-orange-400 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  2-6
                </motion.div>
                <h3 className="text-mobile-title font-bold mobile-margin-xs">Jogadores</h3>
                <p className="text-mobile-body text-orange-100 leading-relaxed px-2">
                  Perfeito para toda a família, divididos em equipes ou jogando individualmente
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="mobile-margin">
                <div className="text-responsive-4xl font-black mobile-margin-xs bg-gradient-to-b from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                  30
                </div>
                <h3 className="text-mobile-title font-bold mobile-margin-xs">Segundos por Rodada</h3>                <p className="text-mobile-body text-orange-100 leading-relaxed">
                  Cada rodada dura 30 segundos. Uma partida completa dura entre 30-45 minutos
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>      {/* Products Section - Enhanced with sophisticated floating elements */}
      <section id="produtos" className="mobile-section bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50 relative overflow-hidden">
        {/* Advanced product section decorations */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Elegant geometric patterns */}
          <motion.div 
            className="absolute top-10 left-20 w-28 h-28 border-2 border-orange-300/25 rounded-full"
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
            className="absolute top-1/4 right-10 w-20 h-20 bg-gradient-to-br from-pink-300/15 to-purple-300/15 transform rotate-45 rounded-lg"
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
            <div className="w-full h-full border border-green-300/20 rounded-lg backdrop-blur-sm"></div>
            <div className="absolute inset-3 border border-green-400/15 rounded-lg"></div>
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
            <div className="w-full h-full bg-gradient-to-r from-blue-300/20 to-teal-300/20" style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}></div>
          </motion.div>
          
          {/* Flowing wave elements */}
          <motion.div 
            className="absolute bottom-10 right-20 w-32 h-8 bg-gradient-to-r from-yellow-300/15 to-orange-300/15 rounded-full"
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
          <div className="container mx-auto mobile-container">          <SmartAnimatedSection direction="up" className="text-center mobile-margin" once={false}>
            <h2 className="text-mobile-title font-black text-gray-900 dark:text-white mobile-margin-sm">
              Parabéns! Você está prestes a
            </h2>            
            <TypewriterEffect 
              words={["comprar o melhor jogo do mundo*", "ter o jogo mais divertido*", "diversão garantida em casa*"]}
              className="text-mobile-subtitle font-light text-orange-600 dark:text-orange-400"
            />
            <p className="text-mobile-caption text-gray-500 mt-2">* Segundo nossa equipe, é claro</p>
            <br />
            <br />
          </SmartAnimatedSection><div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
              {/* Adult Version - Enhanced */}
              <SmartAnimatedSection direction="left" className="text-center h-full" once={false}>

                  <ProductShowcase version="adult" className="absolute inset-0" />                  
                    <Card className="mobile-card h-full flex flex-col relative overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 hover:border-orange-300 bg-gradient-to-br from-orange-50/80 to-red-50/80 backdrop-blur-sm">
                    <div className="absolute top-4 right-4 mobile-badge bg-gradient-to-r from-yellow-400 to-orange-400 text-black z-10">
                        ADULTO
                    </div>
                    
                    {/* Imagem padronizada */}                    <div className="flex justify-center items-center h-64 sm:h-72 lg:h-80 mobile-margin-sm">
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
                    <div className="flex-1 flex flex-col justify-between">                    <div className="mobile-margin-sm">
                        <div className="flex items-center justify-center mobile-gap-sm mobile-margin-sm">
                          <motion.span 
                            className="text-mobile-price text-orange-600"
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
                        </div>
                        <p className="text-mobile-body text-gray-600 dark:text-gray-300 text-center mobile-margin-sm">
                          Versão com palavras mais desafiadoras
                        </p>
                      </div>                      <div className="mobile-grid-2 mobile-margin-sm">
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
                          >                            <Badge className="mobile-badge inline-flex justify-center py-2 px-3 text-mobile-caption hover:bg-orange-50 transition-colors duration-200">
                              <item.icon className="icon-responsive-sm mr-1" />
                              {item.text}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>

                      <div className="mt-auto">                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Button 
                            className="w-full px-8 py-4 text-lg bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 min-h-[56px]"
                            onClick={() => setSelectedVersion('adult')}
                          >
                            <ShoppingCart className="icon-responsive mr-2" />
                            COMPRAR AGORA
                          </Button>
                        </motion.div>
                        
                        <div className="flex items-center justify-center text-mobile-caption text-gray-600 dark:text-gray-400 mt-3">
                          <Truck className="icon-responsive-sm mr-1" />
                          Entrega grátis para todo Moçambique com Custo Adicional
                        </div>
                      </div>
                    </div>
                  </Card>

              </SmartAnimatedSection>              {/* Kids Version - Enhanced */}
              <SmartAnimatedSection direction="right" delay={0.2} className="text-center h-full" once={false}>
                  <ProductShowcase version="kids" className="absolute inset-0" />
                  
                    <Card className="mobile-card h-full flex flex-col relative overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 hover:border-green-300 bg-gradient-to-br from-emerald-50/80 to-teal-50/80 backdrop-blur-sm">
                    <div className="absolute top-4 right-4 mobile-badge bg-gradient-to-r from-green-400 to-emerald-400 text-white z-10">
                      KIDS
                    </div>
                    
                    {/* Imagem padronizada */}
                    <div className="flex justify-center items-center h-64 sm:h-72 lg:h-80 mobile-margin-sm">                      <motion.img 
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
                            className="text-mobile-price text-green-600"
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
                        </div>                        <p className="text-mobile-body text-gray-600 dark:text-gray-300 text-center mobile-margin-sm">
                          Versão com palavras mais simples
                        </p>
                      </div>                      <div className="mobile-grid-2 mobile-margin-sm">
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
                            <Badge className="mobile-badge inline-flex justify-center py-2 px-3 text-mobile-caption hover:bg-green-50 transition-colors duration-200">
                              <item.icon className="icon-responsive-sm mr-1" />
                              {item.text}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>

                      <div className="mt-auto">                        
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Button 
                            className="w-full px-8 py-4 text-lg bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 min-h-[56px]"
                            onClick={() => setSelectedVersion('kids')}
                          >
                            <ShoppingCart className="icon-responsive mr-2" />
                            COMPRAR AGORA
                          </Button>
                        </motion.div>
                        
                        <div className="flex items-center justify-center text-mobile-caption text-gray-600 dark:text-gray-400 mt-3">
                          <Truck className="icon-responsive-sm mr-1" />
                          Entrega grátis para todo Moçambique com Custo Adicional
                        </div>                      </div>
                    </div>
                  </Card>
              </SmartAnimatedSection>
            </div>
            <br />            
            {/* Comparison note - Enhanced */}            <SmartAnimatedSection direction="scale" delay={0.4} className="text-center mobile-margin" once={false}>
              <ContentEnhancer variant="highlight">
                <p className="text-mobile-body text-white max-w-3xl mx-auto leading-relaxed">
                  🎯 Ambas as versões têm o mesmo conteúdo e regras, diferindo apenas na dificuldade das palavras.
                  A versão "Kids" tem palavras mais simples, enquanto a "Adulto" tem palavras mais desafiadoras! ✨                </p>
              </ContentEnhancer>
            </SmartAnimatedSection>
          </div>
        </div>
      </section>      {/* Game Details Section - Ultra-Modern with Advanced UIX */}
      <section id="detalhes" className="mobile-section bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 relative overflow-hidden">
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
            <div className="absolute inset-0 border border-orange-200/30 dark:border-orange-700/30 rounded-2xl transform rotate-12"></div>
            <div className="absolute inset-6 border border-red-200/20 dark:border-red-700/20 rounded-xl transform -rotate-12"></div>
            <div className="absolute inset-12 bg-gradient-conic from-orange-200/20 via-red-200/20 to-orange-200/20 rounded-full"></div>
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
            <div className="w-full h-full bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-3xl transform skew-y-12"></div>
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
            <div className="w-full h-full border-2 border-blue-200/30 dark:border-blue-700/30" style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)' }}></div>
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
                className="text-mobile-title font-black bg-gradient-to-r from-gray-900 via-orange-600 to-red-600 dark:from-white dark:via-orange-400 dark:to-red-400 bg-clip-text text-transparent relative z-10"
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
              <div className="absolute -inset-4 bg-gradient-to-br from-amber-100/30 to-orange-100/30 backdrop-blur-sm rounded-2xl border border-amber-200/30 -z-10"></div>
            </div>
            
            <motion.p 
              className="text-mobile-body text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto"
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
                className="bg-gradient-to-br from-amber-100/80 to-yellow-100/80 backdrop-blur-xl rounded-3xl border border-amber-200/40 p-8 shadow-2xl"
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
                      title: "240 Cartas", 
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
                    <Button 
                      size="lg"
                      className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 min-h-[64px] group"                      onClick={() => {
                        const link = document.createElement('a');
                        link.href = getManualPath();
                        link.download = 'Manual-Corra-Contra-o-Tempo.pdf';
                        link.click();
                      }}
                    >
                      <motion.div 
                        className="flex items-center justify-center"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Download className="w-6 h-6 mr-3 group-hover:animate-bounce" />
                        <span className="text-lg">Baixar Manual Completo (PDF)</span>
                      </motion.div>
                    </Button>
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
              <div className="bg-gradient-to-br from-rose-100/80 to-pink-100/80 backdrop-blur-xl rounded-3xl border border-rose-200/40 p-6 shadow-2xl h-full">
                <motion.div
                  className="relative group h-full flex flex-col"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >                  {/* Image container */}
                  <div className="relative flex-1 mb-6">
                    {/* Glow effect */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-orange-400/30 to-red-500/30 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                      {/* Images container with responsive layout */}
                    <div className="space-y-4 md:space-y-6">
                      <motion.img 
                        src={getBoardPath.simple()} 
                        alt="Tabuleiro do Jogo"
                        className="responsive-image board-image-mobile sm:max-w-sm mx-auto rounded-2xl shadow-xl relative z-10"
                        whileHover={{ 
                          rotateY: 8,
                          rotateX: 8,
                          scale: 1.05
                        }}
                        transition={{ duration: 0.6 }}
                      />
                      
                      {/* Cards container - side by side on larger screens, stacked on mobile */}
                      <div className="mobile-card-grid sm:tablet-card-grid gap-3 md:gap-4">
                        <motion.img 
                          src={getCardPath.front()} 
                          alt="Carta Frente"
                          className="responsive-image card-image-mobile sm:max-w-none mx-auto rounded-2xl shadow-xl relative z-10"
                          whileHover={{ 
                            rotateY: 8,
                            rotateX: 8,
                            scale: 1.05
                          }}
                          transition={{ duration: 0.6 }}
                        />
                        <motion.img 
                          src={getCardPath.rear()} 
                          alt="Carta Verso"
                          className="responsive-image card-image-mobile sm:max-w-none mx-auto rounded-2xl shadow-xl relative z-10"
                          whileHover={{ 
                            rotateY: 8,
                            rotateX: 8,
                            scale: 1.05
                          }}
                          transition={{ duration: 0.6 }}
                        />
                      </div>
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
                    <h5 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                      🎨 Design Exclusivo
                    </h5>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      Tabuleiro premium com acabamento especial, desenvolvido especialmente para famílias moçambicanas
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>      {/* Testimonials Section - Enhanced with premium floating elements */}
      <section id="avaliacoes" className="mobile-section bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 relative overflow-hidden">
        {/* Testimonials floating decorations */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Sophisticated star constellation */}
          <motion.div 
            className="absolute top-16 left-16 w-6 h-6 bg-gradient-to-r from-yellow-300/30 to-orange-300/30 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.4, 0.8, 0.4],
              y: [0, -10, 0]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div 
            className="absolute top-32 left-32 w-4 h-4 bg-gradient-to-r from-yellow-400/25 to-orange-400/25 rounded-full"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.7, 0.3],
              y: [0, -8, 0]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          
          <motion.div 
            className="absolute top-24 left-48 w-3 h-3 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.3, 0.6, 0.3],
              y: [0, -6, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          
          {/* Elegant curved paths */}
          <motion.div 
            className="absolute top-1/3 right-20 w-24 h-24 border border-pink-300/20 rounded-full"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          <motion.div 
            className="absolute bottom-1/4 left-20 w-20 h-20 bg-gradient-to-br from-purple-200/15 to-blue-200/15 rounded-lg transform rotate-30"
            animate={{
              rotate: [30, 390, 30],
              scale: [1, 1.3, 1],
              x: [0, 15, 0]
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          
          {/* Heart-shaped floating elements */}
          <motion.div 
            className="absolute top-2/3 right-1/3 w-12 h-12"
            animate={{
              y: [0, -25, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          >
            <div className="w-full h-full bg-gradient-to-r from-red-200/20 to-pink-200/20 rounded-full transform rotate-45"></div>
            <div className="absolute top-2 left-2 w-6 h-6 bg-gradient-to-r from-red-300/15 to-pink-300/15 rounded-full"></div>
          </motion.div>
        </div>
        
        <div className="container mx-auto mobile-container">
          <AnimatedSection direction="up" className="text-center mobile-margin">
            <p className="text-mobile-huge  font-black text-gray-900 dark:text-white mobile-margin">
              O que dizem nossas famílias
            </p>
            <p className="text-mobile-body text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Histórias reais de famílias moçambicanas que já vivem momentos especiais com o nosso jogo
            </p>
          </AnimatedSection>

          <AnimatedSection direction="scale" delay={0.3}>
            <TestimonialCarousel />
          </AnimatedSection>

          {/* Trust indicators */}
          <AnimatedSection direction="up" delay={0.6} className="mobile-margin">
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600 dark:text-gray-400">
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-mobile-body">🏆</div>
                <span className="text-mobile-caption font-semibold">Produto do Ano 2024</span>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-mobile-body">🇲🇿</div>
                <span className="text-mobile-caption font-semibold">100% Moçambicano</span>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-2xl">👨‍👩‍👧‍👦</div>
                <span className="font-semibold">
                  <AnimatedCounter to={50000} suffix="+" /> famílias
                </span>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-2xl">⭐</div>
                <span className="font-semibold">4.9/5 avaliação</span>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div id="faq">
        <FAQ />
      </div>      {/* CTA Final - Enhanced with premium floating elements */}
      <section className="mobile-section bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white relative overflow-hidden">
        {/* Advanced CTA decorative elements */}
        <div className="absolute inset-0">
          {/* Sophisticated gradient orbs */}
          <motion.div 
            className="absolute top-10 left-10 w-48 h-48 bg-gradient-radial from-yellow-400/25 via-orange-400/15 to-transparent rounded-full blur-2xl"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.3, 0.6, 0.3],
              x: [0, 20, 0]
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div 
            className="absolute bottom-10 right-10 w-64 h-64 bg-gradient-radial from-pink-400/20 via-purple-400/15 to-transparent rounded-full blur-2xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.5, 0.2],
              y: [0, -30, 0]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          
          {/* Premium geometric overlay */}
          <motion.div 
            className="absolute top-1/4 right-1/4 w-32 h-32 border-2 border-white/15 rounded-full"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          <motion.div 
            className="absolute top-2/3 left-1/4 w-24 h-24 bg-gradient-to-br from-white/10 to-yellow-300/15 rounded-lg transform rotate-45"
            animate={{
              rotate: [45, 405, 45],
              y: [0, -20, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          
          {/* Elegant flowing ribbons */}
          <motion.div 
            className="absolute bottom-1/3 left-10 w-40 h-6 bg-gradient-to-r from-white/15 to-yellow-300/20 rounded-full"
            animate={{
              scaleX: [1, 1.5, 1],
              x: [0, 25, 0],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
          />
        </div>
        
        <div className="container mx-auto mobile-container text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-mobile-giant font-black mobile-margin leading-tight">
              Pronto para a
              <span className="block bg-gradient-to-r from-yellow-300 to-white bg-clip-text text-transparent">
                DIVERSÃO?
              </span>
            </h2>
            <p className="text-mobile-title text-orange-100 font-light max-w-4xl mx-auto leading-relaxed mobile-margin">
              Junte-se às famílias moçambicanas que já têm o seu!
            </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mobile-margin">
              <Button 
                size="lg" 
                className="w-full sm:w-auto px-12 py-6 text-xl bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-black shadow-2xl transition-all duration-300 min-h-[64px]"
                onClick={() => document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <ShoppingCart className="w-8 h-8 mr-4" />
                COMPRAR AGORA - 1.500 MT
              </Button>
            </div>
              <div className="space-y-2 text-orange-100 mobile-margin">
              <div className="text-mobile-body font-semibold">
                ⏰ Oferta por tempo limitado • 🚚 Entrega nacional • ✅ Produto moçambicano
              </div>
              <div className="text-mobile-caption">
                ⭐ Criado em Moçambique • 💝 30 dias de garantia • 🔒 Compra 100% segura
              </div>
            </div>

            {/* Urgency elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
              className="mobile-margin mobile-padding bg-black/20 rounded-2xl max-w-2xl mx-auto backdrop-blur-sm"
            >
              <div className="text-yellow-300 text-mobile-body font-bold mobile-margin-xs">
                🔥 EDIÇÃO LIMITADA! Produto 100% moçambicano
              </div>
              <div className="text-orange-100 text-mobile-caption">
                Apoie a produção nacional - <span className="font-bold text-yellow-300">Feito em Moçambique</span>
              </div>
            </motion.div>
          </motion.div></div>      </section>
      
      {/* Contact Section */}
      <section id="contato" className="bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white py-20">
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
        </div>      </section>
      
      <SocialProofNotification />
      <BackToTop />
      <Footer />
    </div>
  );
};

export default EcommercePage;
