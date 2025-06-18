import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  Pause, 
  Stop, 
  Timer, 
  Users, 
  ArrowCounterClockwise, 
  Trophy, 
  Target,
  Lightning,
  ArrowLeft
} from '@phosphor-icons/react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Progress } from '../components/ui/Progress';
import { getAvatarPath, getBoardPath } from '../utils/assetPaths';

interface Player {
  id: number;
  name: string;
  score: number;
  position: number;
  avatar: string;
}

interface GameSettings {
  gameMode: 'kids' | 'adult' | 'simple';
  players: number;
  timeLimit: number;
}

const GamePage: React.FC = () => {
  const [gameState, setGameState] = useState<'setup' | 'playing' | 'paused' | 'finished'>('setup');
  const [timeLeft, setTimeLeft] = useState(60);
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [players, setPlayers] = useState<Player[]>([]);
  const [gameSettings, setGameSettings] = useState<GameSettings>({
    gameMode: 'adult',
    players: 2,
    timeLimit: 60
  });

  // Game timer
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (gameState === 'playing' && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setGameState('finished');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [gameState, timeLeft]);

  // Initialize players
  const initializePlayers = () => {
    const newPlayers: Player[] = [];
    for (let i = 0; i < gameSettings.players; i++) {
      newPlayers.push({
        id: i + 1,
        name: `Jogador ${i + 1}`,
        score: 0,
        position: 0,
        avatar: i % 2 === 0 ? getAvatarPath.man() : getAvatarPath.woman()
      });
    }
    setPlayers(newPlayers);
  };

  const startGame = () => {
    initializePlayers();
    setTimeLeft(gameSettings.timeLimit);
    setGameState('playing');
    setCurrentPlayer(0);
  };

  const pauseGame = () => {
    setGameState(gameState === 'playing' ? 'paused' : 'playing');
  };

  const stopGame = () => {
    setGameState('setup');
    setTimeLeft(gameSettings.timeLimit);
    setCurrentPlayer(0);
    setPlayers([]);
  };

  const nextPlayer = () => {
    setCurrentPlayer((prev) => (prev + 1) % players.length);
  };

  const updatePlayerScore = (playerId: number, points: number) => {
    setPlayers(prev => prev.map(player => 
      player.id === playerId 
        ? { ...player, score: player.score + points }
        : player
    ));
  };
  const getGameBoardImage = () => {
    switch (gameSettings.gameMode) {
      case 'kids':
        return getBoardPath.kids();
      case 'adult':
        return getBoardPath.adult();
      case 'simple':
        return getBoardPath.simple();
      default:
        return getBoardPath.adult();
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getTimeProgress = () => {
    return ((gameSettings.timeLimit - timeLeft) / gameSettings.timeLimit) * 100;
  };

  const winner = players.length > 0 ? players.reduce((prev, current) => 
    prev.score > current.score ? prev : current
  ) : null;

  if (gameState === 'setup') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 p-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-8">
              <Button 
                variant="ghost" 
                onClick={() => window.history.back()}
                className="mr-4"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Voltar
              </Button>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                Configurar Jogo
              </h1>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Game Settings */}
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Configurações
                </h2>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                      Modo de Jogo
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'kids', label: 'Kids', color: 'bg-green-500' },
                        { id: 'adult', label: 'Adulto', color: 'bg-blue-500' },
                        { id: 'simple', label: 'Simples', color: 'bg-purple-500' }
                      ].map((mode) => (
                        <Button
                          key={mode.id}
                          variant={gameSettings.gameMode === mode.id ? 'primary' : 'outline'}
                          onClick={() => setGameSettings(prev => ({ ...prev, gameMode: mode.id as 'kids' | 'adult' | 'simple' }))}
                          className="w-full"
                        >
                          {mode.label}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                      Número de Jogadores
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {[2, 3, 4, 6].map((num) => (
                        <Button
                          key={num}
                          variant={gameSettings.players === num ? 'primary' : 'outline'}
                          onClick={() => setGameSettings(prev => ({ ...prev, players: num }))}
                        >
                          {num}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                      Tempo Limite (segundos)
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[60, 120, 180].map((time) => (
                        <Button
                          key={time}
                          variant={gameSettings.timeLimit === time ? 'primary' : 'outline'}
                          onClick={() => setGameSettings(prev => ({ ...prev, timeLimit: time }))}
                        >
                          {time}s
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>

                <Button 
                  onClick={startGame}
                  className="w-full mt-8 text-lg py-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Iniciar Jogo
                </Button>
              </Card>

              {/* Game Preview */}
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Preview do Tabuleiro
                </h2>
                <div className="text-center">
                  <img 
                    src={getGameBoardImage()}
                    alt={`Tabuleiro ${gameSettings.gameMode}`}
                    className="w-full max-w-sm mx-auto rounded-lg shadow-lg"
                  />
                  <div className="mt-4 space-y-2">
                    <Badge variant="secondary" className="text-lg px-4 py-2">
                      <Users className="w-4 h-4 mr-2" />
                      {gameSettings.players} Jogadores
                    </Badge>
                    <Badge variant="outline" className="text-lg px-4 py-2">
                      <Timer className="w-4 h-4 mr-2" />
                      {gameSettings.timeLimit}s
                    </Badge>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 p-6">
      <div className="container mx-auto max-w-7xl">
        <AnimatePresence>
          {/* Game Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap items-center justify-between mb-8"
          >
            <div className="flex items-center space-x-4">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Corra Contra o Tempo
              </h1>
              <Badge variant="secondary" className="text-lg px-3 py-1">
                {gameSettings.gameMode.toUpperCase()}
              </Badge>
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {formatTime(timeLeft)}
                </div>
                <Progress 
                  value={getTimeProgress()} 
                  className="w-32 h-2"
                />
              </div>
              
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  onClick={pauseGame}
                  disabled={gameState === 'finished'}
                >
                  {gameState === 'playing' ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </Button>
                <Button
                  variant="destructive"
                  onClick={stopGame}
                >
                  <Stop className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Game Content */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Game Board */}
            <div className="lg:col-span-2">
              <Card className="p-6">
                <div className="text-center">
                  <img 
                    src={getGameBoardImage()}
                    alt="Game Board"
                    className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
                  />
                </div>
              </Card>
            </div>

            {/* Game Info */}
            <div className="space-y-6">
              {/* Current Player */}
              {players.length > 0 && gameState !== 'finished' && (
                <Card className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Vez do Jogador
                  </h3>
                  <div className="flex items-center space-x-4 mb-4">
                    <img 
                      src={players[currentPlayer]?.avatar}
                      alt={players[currentPlayer]?.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <div className="font-bold text-lg">
                        {players[currentPlayer]?.name}
                      </div>
                      <div className="text-gray-600 dark:text-gray-400">
                        Pontos: {players[currentPlayer]?.score}
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button 
                      onClick={() => updatePlayerScore(players[currentPlayer].id, 10)}
                      className="flex-1"
                      variant="success"
                    >
                      <Target className="w-4 h-4 mr-2" />
                      +10
                    </Button>
                    <Button 
                      onClick={() => updatePlayerScore(players[currentPlayer].id, 5)}
                      className="flex-1"
                      variant="secondary"
                    >
                      <Lightning className="w-4 h-4 mr-2" />
                      +5
                    </Button>
                  </div>
                  <Button 
                    onClick={nextPlayer}
                    className="w-full mt-3"
                    variant="outline"
                  >
                    Próximo Jogador
                  </Button>
                </Card>
              )}

              {/* Players Score */}
              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Placar
                </h3>
                <div className="space-y-3">
                  {players.map((player, index) => (
                    <motion.div
                      key={player.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`flex items-center justify-between p-3 rounded-lg ${
                        currentPlayer === index && gameState === 'playing'
                          ? 'bg-blue-100 dark:bg-blue-900/50 border-2 border-blue-500'
                          : 'bg-gray-100 dark:bg-gray-800'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <img 
                          src={player.avatar}
                          alt={player.name}
                          className="w-8 h-8 rounded-full"
                        />
                        <span className="font-medium">{player.name}</span>
                      </div>
                      <Badge variant="secondary">
                        {player.score} pts
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </Card>

              {/* Game Stats */}
              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Estatísticas
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Tempo Decorrido:</span>
                    <span className="font-medium">
                      {formatTime(gameSettings.timeLimit - timeLeft)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Jogadores:</span>
                    <span className="font-medium">{players.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Modo:</span>
                    <span className="font-medium capitalize">
                      {gameSettings.gameMode}
                    </span>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Game Finished Modal */}
          {gameState === 'finished' && winner && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-gradient-to-br from-blue-50/95 to-indigo-50/95 backdrop-blur-lg rounded-xl p-8 max-w-md w-full mx-4"
              >
                <div className="text-center">
                  <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    Jogo Finalizado!
                  </h2>
                  <div className="mb-6">
                    <img 
                      src={winner.avatar}
                      alt={winner.name}
                      className="w-20 h-20 rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-2xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">
                      🏆 {winner.name} Venceu!
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                      Com {winner.score} pontos
                    </p>
                  </div>
                  <div className="flex space-x-3">
                    <Button 
                      onClick={stopGame}
                      className="flex-1"
                      variant="outline"
                    >
                      <ArrowCounterClockwise className="w-4 h-4 mr-2" />
                      Novo Jogo
                    </Button>
                    <Button 
                      onClick={() => window.history.back()}
                      className="flex-1"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Menu Principal
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default GamePage;