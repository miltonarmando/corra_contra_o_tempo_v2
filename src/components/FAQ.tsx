import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Question, Clock, Users, Package, ChatCircle, Envelope, MagnifyingGlass, Sparkle } from '@phosphor-icons/react';

interface FAQItem {
  question: string;
  answer: string;
  icon?: React.ReactNode;
  category: 'jogo' | 'compra' | 'entrega';
  popular?: boolean;
}

const faqData: FAQItem[] = [
  {
    question: "Diferença Kids vs Adulto?",
    answer: "Ambas as versões têm as mesmas regras e componentes. A diferença está apenas na dificuldade das palavras: Kids tem palavras mais simples, Adulto tem palavras mais desafiadoras.",
    icon: <Users className="w-5 h-5" />,
    category: 'jogo',
    popular: true
  },
  {
    question: "Quantos jogadores?",
    answer: "De 2 a 6 jogadores divididos em equipes. Podem jogar individualmente ou formar equipes de 2-3 pessoas cada.",
    icon: <Users className="w-5 h-5" />,
    category: 'jogo',
    popular: true
  },
  {
    question: "Duração das partidas?",
    answer: "Aproximadamente 30-45 minutos. O jogo termina quando uma equipe completa uma volta inteira no tabuleiro.",
    icon: <Clock className="w-5 h-5" />,
    category: 'jogo'
  },
  {
    question: "Como se joga?",
    answer: "Pegue uma carta, vire a ampulheta e faça sua equipe adivinhar as palavras em 30 segundos. Avance no tabuleiro conforme o número de acertos!",
    icon: <Question className="w-5 h-5" />,
    category: 'jogo'
  },
  {
    question: "Como funciona a entrega?",
    answer: "Todo Moçambique. 3-7 dias (Maputo/Beira/Nampula), 5-10 dias (demais). Rastreamento por SMS.",
    icon: <Package className="w-5 h-5" />,
    category: 'entrega',
    popular: true
  },
  {
    question: "Posso devolver?",
    answer: "30 dias de garantia total. 100% do dinheiro de volta, sem perguntas.",
    icon: <Package className="w-5 h-5" />,
    category: 'compra'
  },
  {
    question: "O que vem na caixa?",
    answer: "1 tabuleiro, 240 cartas com palavras, 6 peões coloridos, 1 ampulheta de 30 segundos, manual de regras e caixa resistente.",
    icon: <Sparkle className="w-5 h-5" />,
    category: 'compra'
  },
  {
    question: "Formas de pagamento?",
    answer: "M-Pesa, transferência, cartão, pagamento na entrega (Maputo/Matola). Todas as operadoras.",
    icon: <Package className="w-5 h-5" />,
    category: 'compra'
  },
  {
    question: "Precisa de app ou internet?",
    answer: "Não! É 100% físico, não precisa de apps, internet, baterias ou celular. Abra a caixa e jogue!",
    icon: <Question className="w-5 h-5" />,
    category: 'jogo'
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeView, setActiveView] = useState<'all' | 'popular'>('popular');

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFAQ = faqData.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesView = activeView === 'all' || (activeView === 'popular' && item.popular);
    return matchesSearch && matchesView;
  });

  const getCategoryInfo = (category: string) => {
    switch (category) {
      case 'jogo': 
        return { 
          color: 'from-blue-500 to-cyan-500', 
          bgGradient: 'from-blue-500/10 via-cyan-500/5 to-blue-500/10',
          emoji: '🎮',
          label: 'Jogo'
        };
      case 'compra': 
        return { 
          color: 'from-emerald-500 to-teal-500', 
          bgGradient: 'from-emerald-500/10 via-teal-500/5 to-emerald-500/10',
          emoji: '💳',
          label: 'Compra'
        };
      case 'entrega': 
        return { 
          color: 'from-orange-500 to-amber-500', 
          bgGradient: 'from-orange-500/10 via-amber-500/5 to-orange-500/10',
          emoji: '🚚',
          label: 'Entrega'
        };
      default: 
        return { 
          color: 'from-gray-500 to-slate-500', 
          bgGradient: 'from-gray-500/10 via-slate-500/5 to-gray-500/10',
          emoji: '❓',
          label: 'Geral'
        };
    }
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-indigo-900 overflow-hidden">
      {/* Advanced background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/10 to-cyan-600/5"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 left-20 w-64 h-64 bg-gradient-conic from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-full blur-3xl"
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
          className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-conic from-purple-500/20 via-pink-500/20 to-orange-500/20 rounded-full blur-2xl"
          animate={{
            rotate: [360, 0],
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Ultra-modern header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div 
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl rounded-full px-6 py-3 mb-8 border border-white/10"
            whileHover={{ scale: 1.05 }}
          >
            <Question className="w-6 h-6 text-blue-400" />
            <span className="text-blue-400 font-semibold">Central de Ajuda</span>
          </motion.div>
          
          <motion.h2 
            className="text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-purple-200 mb-6"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Dúvidas?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Encontre respostas instantâneas para tudo sobre o "Corra Contra o Tempo"
          </motion.p>

          {/* View toggle */}
          <motion.div
            className="flex justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            {[
              { key: 'popular', label: 'Mais Perguntadas', icon: '🔥' },
              { key: 'all', label: 'Todas as Dúvidas', icon: '📝' }
            ].map((view) => (
              <motion.button
                key={view.key}
                onClick={() => setActiveView(view.key as 'all' | 'popular')}
                className={`px-8 py-4 rounded-2xl font-bold transition-all duration-300 ${
                  activeView === view.key
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-2xl shadow-blue-500/25'
                    : 'bg-white/5 backdrop-blur-xl text-gray-300 hover:bg-white/10 border border-white/10'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{view.icon}</span>
                  <span>{view.label}</span>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Advanced FAQ Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeView}-${searchTerm}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            {filteredFAQ.length === 0 ? (
              <motion.div
                className="text-center py-20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center">
                  <MagnifyingGlass className="w-16 h-16 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Nenhuma dúvida encontrada</h3>
                <p className="text-gray-400 mb-8">Tente pesquisar com outras palavras ou navegue pelas categorias.</p>
                <motion.button
                  onClick={() => setSearchTerm('')}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-bold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Limpar pesquisa
                </motion.button>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredFAQ.map((item, index) => {
                  const categoryInfo = getCategoryInfo(item.category);
                  const actualIndex = faqData.indexOf(item);
                  const isOpen = openIndex === actualIndex;
                  
                  return (
                    <motion.div
                      key={actualIndex}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      className="group"
                      layout
                    >
                      <motion.div
                        className={`relative overflow-hidden rounded-3xl transition-all duration-500 ${
                          isOpen 
                            ? 'bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-2 border-blue-500/50 shadow-2xl shadow-blue-500/20' 
                            : 'bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/8'
                        }`}
                        whileHover={{ y: -4, scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Popular badge */}
                        {item.popular && (
                          <motion.div
                            className="absolute top-4 right-4 z-20"
                            animate={{ 
                              rotate: [0, 5, -5, 0],
                              scale: [1, 1.1, 1]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                              <Sparkle className="w-3 h-3" />
                              Popular
                            </div>
                          </motion.div>
                        )}

                        {/* Category gradient overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${categoryInfo.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                        
                        <button
                          onClick={() => toggleFAQ(actualIndex)}
                          className="relative w-full p-8 text-left focus:outline-none"
                        >
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-4">
                              <motion.div 
                                className={`p-3 rounded-2xl bg-gradient-to-r ${categoryInfo.color} text-white shadow-lg`}
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ duration: 0.3 }}
                              >
                                {item.icon}
                              </motion.div>
                              
                              <div>
                                <div className="flex items-center gap-2 mb-2">
                                  <span className="text-sm text-gray-400">{categoryInfo.emoji}</span>
                                  <span className="text-sm text-gray-400 uppercase tracking-wide font-semibold">
                                    {categoryInfo.label}
                                  </span>
                                </div>
                                <h3 className="text-xl font-bold text-white leading-tight">
                                  {item.question}
                                </h3>
                              </div>
                            </div>
                            
                            <motion.div
                              animate={{ rotate: isOpen ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                              className={`flex-shrink-0 p-3 rounded-full transition-all duration-300 ${
                                isOpen 
                                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' 
                                  : 'bg-white/10 text-gray-400 group-hover:bg-white/20 group-hover:text-white'
                              }`}
                            >
                              <Plus className="w-5 h-5" />
                            </motion.div>
                          </div>
                        </button>
                        
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.5, ease: 'easeInOut' }}
                              className="overflow-hidden"
                            >
                              <div className="px-8 pb-8">
                                <motion.div
                                  className={`h-px bg-gradient-to-r ${categoryInfo.color} mb-6 rounded-full`}
                                  initial={{ scaleX: 0 }}
                                  animate={{ scaleX: 1 }}
                                  transition={{ delay: 0.2, duration: 0.6 }}
                                ></motion.div>
                                
                                <motion.div
                                  className="bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.3, duration: 0.5 }}
                                >
                                  <p className="text-gray-300 leading-relaxed text-lg">
                                    {item.answer}
                                  </p>
                                </motion.div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Ultra-modern contact section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="relative max-w-4xl mx-auto">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-3xl blur-3xl"></div>
            
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl border border-white/20 p-12">
              <motion.div
                className="mb-8"
                animate={{
                  y: [0, -10, 0],
                  rotateZ: [0, 1, -1, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
                  <ChatCircle className="w-12 h-12 text-white" />
                </div>
              </motion.div>
              
              <h3 className="text-4xl font-black text-white mb-4">
                Ainda precisa de ajuda?
              </h3>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                Nossa equipe especializada está sempre pronta para resolver qualquer dúvida sobre o jogo!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.a
                  href="mailto:info@corracontraotempo.co.mz"
                  className="group relative overflow-hidden px-10 py-5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-2xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center gap-3">
                    <Envelope className="w-6 h-6" />
                    <span className="text-lg">Email Direto</span>
                  </div>
                </motion.a>
                
                <motion.a
                  href="https://wa.me/258843123456"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden px-10 py-5 bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold rounded-2xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center gap-3">
                    <ChatCircle className="w-6 h-6" />
                    <span className="text-lg">WhatsApp</span>
                  </div>
                </motion.a>
              </div>
              
              <motion.p
                className="text-gray-400 text-sm mt-8"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                ⚡ Resposta em até 2 horas durante o horário comercial
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;

