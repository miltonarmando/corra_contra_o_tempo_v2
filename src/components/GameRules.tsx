import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Trophy, Target, Lightning, Lightbulb } from '@phosphor-icons/react';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';

const GameRules: React.FC = () => {
  const rules = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Objetivo Principal",
      description: "Seja o jogador mais rápido a completar os desafios dentro do tempo limite estabelecido."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Número de Jogadores",
      description: "O jogo pode ser jogado com 2 a 6 jogadores, dependendo da versão escolhida."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Como Pontuar",
      description: "Complete tarefas corretamente para ganhar pontos. Tarefas mais difíceis valem mais pontos."
    },
    {
      icon: <Lightning className="w-6 h-6" />,
      title: "Velocidade",
      description: "A velocidade é fundamental! Quanto mais rápido você completar os desafios, mais pontos ganhará."
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Vitória",
      description: "O jogador com mais pontos ao final do tempo ganha a partida!"
    }
  ];

  const gameVersions = [
    {
      title: "Versão Kids",
      age: "6-12 anos",
      players: "2-4 jogadores",
      time: "30-45 min",
      difficulty: "Fácil",
      description: "Versão simplificada com desafios adequados para crianças, focando em diversão e aprendizado."
    },
    {
      title: "Versão Adulto",
      age: "13+ anos",
      players: "2-6 jogadores", 
      time: "45-60 min",
      difficulty: "Avançado",
      description: "Versão completa com desafios complexos que testam estratégia, velocidade e conhecimento."
    },
    {
      title: "Versão Simples",
      age: "Todas as idades",
      players: "2-4 jogadores",
      time: "15-30 min",
      difficulty: "Médio",
      description: "Versão rápida perfeita para partidas expressas ou iniciantes."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Como Jogar
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Aprenda as regras do "Corra Contra o Tempo" e domine este jogo emocionante!
        </p>
      </motion.div>

      {/* Game Rules */}
      <section>
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center"
        >
          <Lightbulb className="w-8 h-8 mr-3 text-yellow-500" />
          Regras Básicas
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rules.map((rule, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full card-hover">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white mr-4">
                    {rule.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {rule.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {rule.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Game Versions */}
      <section>
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-3xl font-bold text-gray-900 dark:text-white mb-8"
        >
          Versões do Jogo
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {gameVersions.map((version, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full card-hover">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {version.title}
                  </h3>
                  <Badge 
                    variant={version.difficulty === 'Fácil' ? 'success' : version.difficulty === 'Médio' ? 'secondary' : 'primary'}
                    className="text-lg px-3 py-1"
                  >
                    {version.difficulty}
                  </Badge>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Idade:</span>
                    <Badge variant="outline">{version.age}</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Jogadores:</span>
                    <Badge variant="outline">{version.players}</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Duração:</span>
                    <Badge variant="outline">{version.time}</Badge>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 text-center">
                  {version.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Setup Instructions */}
      <section>
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-3xl font-bold text-gray-900 dark:text-white mb-8"
        >
          Preparação do Jogo
        </motion.h2>
        
        <Card className="p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Configuração Inicial
              </h3>
              <ol className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                  Escolha a versão do jogo (Kids, Adulto ou Simples)
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                  Defina o número de jogadores (2-6 dependendo da versão)
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                  Estabeleça o tempo limite da partida
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</span>
                  Cada jogador escolhe seu avatar e nome
                </li>
              </ol>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Durante o Jogo
              </h3>
              <ol className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                  Os jogadores se revezam em turnos cronometrados
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                  Complete os desafios o mais rápido possível
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                  Ganhe pontos baseado na velocidade e precisão
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</span>
                  O jogador com mais pontos ao final vence!
                </li>
              </ol>
            </div>
          </div>
        </Card>
      </section>

      {/* Tips */}
      <section>
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-3xl font-bold text-gray-900 dark:text-white mb-8"
        >
          Dicas Estratégicas
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <Lightning className="w-5 h-5 mr-2 text-yellow-500" />
              Para Iniciantes
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Comece com a versão Simples para se familiarizar</li>
              <li>• Foque na precisão antes da velocidade</li>
              <li>• Observe as estratégias dos outros jogadores</li>
              <li>• Pratique os movimentos básicos</li>
            </ul>
          </Card>
          
          <Card className="p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <Trophy className="w-5 h-5 mr-2 text-yellow-500" />
              Para Avançados
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Desenvolva padrões de movimento eficientes</li>
              <li>• Antecipe os próximos desafios</li>
              <li>• Use a pressão do tempo a seu favor</li>
              <li>• Mantenha a calma em situações tensas</li>
            </ul>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default GameRules;
