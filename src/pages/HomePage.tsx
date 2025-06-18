import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Clock, Users, Trophy, CaretRight, Star } from '@phosphor-icons/react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { getBoxPath, getBoardPath, getLogoPath } from '../utils/assetPaths';

interface HomePageProps {
  onNavigateToGame?: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigateToGame }) => {
  const [selectedGameMode, setSelectedGameMode] = useState<string>('');
  const gameFeatures = [
    {
      icon: <Clock size={24} />,
      title: 'Contra o Tempo',
      description: 'Desafie-se em corridas de 30 segundos contra o relógio'
    },
    {
      icon: <Users size={24} />,
      title: 'Para Toda Família',
      description: 'Jogue com amigos e família - versões Kids e Adulto'
    },
    {
      icon: <Trophy size={24} />,
      title: 'Divertido',
      description: 'Prove suas habilidades e seja o mais rápido adivinhar'
    }
  ];  const gameVersions = [
    {
      id: 'kids',
      title: 'Versão Kids',
      description: 'Mesmas regras, mas com palavras mais simples',
      image: getBoxPath.kids(),
      playerCount: '2-6 jogadores',
      ageRange: 'Palavras fáceis',
      difficulty: 'Simples'
    },
    {
      id: 'adult',
      title: 'Versão Adulto',
      description: 'Mesmas regras, mas com palavras mais desafiadoras',
      image: getBoxPath.adult(),
      playerCount: '2-6 jogadores',
      ageRange: 'Palavras difíceis',
      difficulty: 'Desafiador'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-12">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
        
        <div className="container mx-auto px-6 relative">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center mb-6">              <img 
                src={getLogoPath()} 
                alt="Corra Contra o Tempo Logo" 
                className="h-16 w-auto"
              />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Corra Contra o Tempo
            </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              O jogo de tabuleiro que vai testar sua velocidade para fazer equipe adivinhar palavras
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <Star className="w-4 h-4 mr-2" />
                Jogo do Ano 2024
              </Badge>
              <Badge variant="outline" className="text-lg px-4 py-2">
                <Users className="w-4 h-4 mr-2" />
                2-6 Jogadores
              </Badge>              <Badge variant="outline" className="text-lg px-4 py-2">
                <Clock className="w-4 h-4 mr-2" />
                30-45 min
              </Badge>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >              <Button 
                size="lg" 
                className="text-xl px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                onClick={onNavigateToGame}
              >
                <Play className="w-6 h-6 mr-2" />
                Começar a Jogar
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50/60 via-teal-50/60 to-cyan-50/60 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Por que você vai amar este jogo?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Descubra os recursos que tornam "Corra Contra o Tempo" uma experiência única
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {gameFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 text-center h-full hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50/80 to-indigo-50/80 backdrop-blur-sm">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white mb-6 mx-auto">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Game Versions Section */}
      <section id="game-versions" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Escolha sua Aventura
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Duas versões especialmente criadas para diferentes faixas etárias e níveis de habilidade
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {gameVersions.map((version, index) => (
              <motion.div
                key={version.id}
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card 
                  className={`p-8 h-full transition-all duration-300 cursor-pointer border-2 ${
                    selectedGameMode === version.id 
                      ? 'border-blue-500 shadow-xl scale-105' 
                      : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 hover:shadow-lg'
                  }`}
                  onClick={() => setSelectedGameMode(version.id)}
                >
                  <div className="text-center mb-6">
                    <img 
                      src={version.image} 
                      alt={version.title}
                      className="w-48 h-48 object-contain mx-auto mb-4 rounded-lg"
                    />
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {version.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {version.description}
                    </p>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-400">Jogadores:</span>
                      <Badge variant="outline">{version.playerCount}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-400">Idade:</span>
                      <Badge variant="outline">{version.ageRange}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-400">Dificuldade:</span>
                      <Badge 
                        variant={version.difficulty === 'Fácil' ? 'secondary' : 'default'}
                      >
                        {version.difficulty}
                      </Badge>
                    </div>
                  </div>                  <Button 
                    className="w-full" 
                    variant={selectedGameMode === version.id ? 'primary' : 'outline'}
                    onClick={onNavigateToGame}
                  >
                    Jogar {version.title}
                    <CaretRight className="w-4 h-4 ml-2" />
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Game Board Preview */}
      <section className="py-20 bg-gradient-to-br from-violet-50/60 via-purple-50/60 to-pink-50/60 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Explore o Tabuleiro
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Tabuleiros únicos e desafiadores para cada versão do jogo
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 text-center">                <img 
                  src={getBoardPath.kids()} 
                  alt="Tabuleiro Kids"
                  className="w-full h-48 object-contain rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Tabuleiro Kids
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Colorido e divertido para os pequenos
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 text-center">                <img 
                  src={getBoardPath.adult()} 
                  alt="Tabuleiro Adulto"
                  className="w-full h-48 object-contain rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Tabuleiro Adulto
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Complexo e estratégico para adultos
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 text-center">                <img 
                  src={getBoardPath.simple()} 
                  alt="Tabuleiro Simples"
                  className="w-full h-48 object-contain rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Tabuleiro Simples
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Versão rápida para partidas expressa
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>      {/* CTA Section */}
      <section id="game-rules" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Regras Rápidas
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="p-6">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Escolha o Modo</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Selecione entre Kids, Adulto ou Simples
                </p>
              </Card>
              <Card className="p-6">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Corra Contra o Tempo</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Complete desafios antes do tempo acabar
                </p>
              </Card>
              <Card className="p-6">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Ganhe Pontos</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Mais rápido = mais pontos = vitória!
                </p>
              </Card>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Pronto para o Desafio?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Junte-se a milhares de jogadores que já descobriram a emoção de correr contra o tempo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">              <Button 
                size="lg" 
                className="text-xl px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                onClick={onNavigateToGame}
              >
                <Play className="w-6 h-6 mr-2" />
                Jogar Agora
              </Button>              <Button 
                size="lg" 
                variant="outline"
                className="text-xl px-8 py-4"
                onClick={() => document.getElementById('game-rules')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Regras do Jogo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;