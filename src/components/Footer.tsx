import React from 'react';
import { motion } from 'framer-motion';
import { 
  InstagramLogo, 
  FacebookLogo, 
  TwitterLogo, 
  EnvelopeSimple,
  Phone,
  MapPin,
  Copyright
} from '@phosphor-icons/react';
import { Button } from './ui/Button';
import { getLogoPath } from '../utils/assetPaths';

const Footer: React.FC = () => {
  // Variações de animação para entrada lateral profissional
  const slideFromLeft = {
    initial: { opacity: 0, x: -60 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
    viewport: { once: true, margin: "-50px" }
  };

  const slideFromRight = {
    initial: { opacity: 0, x: 60 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
    viewport: { once: true, margin: "-50px" }
  };

  const slideFromBottom = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: "easeOut" },
    viewport: { once: true, margin: "-30px" }
  };

  const staggerChildren = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const socialLinks = [
    { icon: <InstagramLogo size={24} />, href: 'https://instagram.com/corracontraotempo', label: 'Instagram' },
    { icon: <FacebookLogo size={24} />, href: 'https://facebook.com/corracontraotempo', label: 'Facebook' },
    { icon: <TwitterLogo size={24} />, href: 'https://twitter.com/corracontraotempo', label: 'Twitter' },
  ];
  const quickLinks = [
    { label: 'Início', href: '#hero' },
    { label: 'Produtos', href: '#produtos' },
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Depoimentos', href: '#avaliacoes' },
    { label: 'FAQ', href: '#faq' },
  ];  const supportLinks = [
    { label: 'Central de Ajuda', href: '#faq' },
    { label: 'Como Jogar', href: '#detalhes' },
    { label: 'Entre em Contato', href: '#contato' },
    { label: 'Suporte ao Cliente', href: '#contato' },
  ];

  return (
    <footer className="bg-gray-900 text-white">      {/* Newsletter Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-8">
        <div className="container mx-auto px-6">
          <motion.div
            {...slideFromLeft}
            className="text-center max-w-2xl mx-auto"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Fique por Dentro das Novidades!
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Receba promoções exclusivas e seja o primeiro a saber sobre novos lançamentos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-6 py-3">
                Inscrever-se
              </Button>
            </div>
            <p className="text-sm mt-3 opacity-75">
              Prometemos não enviar spam. Cancele a qualquer momento.
            </p>
          </motion.div>
        </div>
      </section>      {/* Main Footer */}
      <div className="container mx-auto px-6 py-12">
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          {...staggerChildren}
        >
          {/* Company Info - From Left */}
          <motion.div
            {...slideFromLeft}
          >
            <div className="flex items-center space-x-3 mb-6">              <img 
                src={getLogoPath()} 
                alt="Corra Contra o Tempo" 
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold">
                Corra Contra o Tempo
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              O jogo de tabuleiro que está revolucionando as noites em família em Moçambique. 
              Diversão garantida para todas as idades!
            </p>            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, staggerChildren: 0.1 }}
              viewport={{ once: true }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gray-700 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors"
                  aria-label={social.label}
                  viewport={{ once: true }}
                >
                  {social.icon}                </motion.a>
              ))}
            </motion.div>
          </motion.div>          {/* Navigation Links - From Right */}
          <motion.div
            {...slideFromRight}
          >
            <h4 className="text-lg font-bold mb-6">Navegação</h4>
            <motion.ul 
              className="space-y-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, staggerChildren: 0.1 }}
              viewport={{ once: true }}
            >
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-gray-300 hover:text-purple-400 transition-colors hover:underline inline-block"
                    onClick={(e) => {
                      if (link.href.startsWith('#')) {
                        e.preventDefault();
                        document.querySelector(link.href)?.scrollIntoView({ 
                          behavior: 'smooth' 
                        });
                      }
                    }}
                  >
                    {link.label}
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>          {/* Support & Help - From Left */}
          <motion.div
            {...slideFromLeft}
            transition={{ ...slideFromLeft.transition, delay: 0.3 }}
          >
            <h4 className="text-lg font-bold mb-6">Suporte & Ajuda</h4>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-purple-400 transition-colors hover:underline"
                    onClick={(e) => {
                      if (link.href.startsWith('#')) {
                        e.preventDefault();
                        document.querySelector(link.href)?.scrollIntoView({ 
                          behavior: 'smooth' 
                        });
                      }
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>          {/* Contact Info - From Right */}
          <motion.div
            {...slideFromRight}
            transition={{ ...slideFromRight.transition, delay: 0.4 }}          >
            <h4 className="text-lg font-bold mb-6">Contato</h4>
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, staggerChildren: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="flex items-start space-x-3"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                <MapPin className="w-5 h-5 text-purple-400 mt-1" />
                <div className="text-gray-300">
                  <p className="font-semibold">Maputo, Moçambique</p>
                  <p className="text-sm">Rua Principal, 123</p>
                  <p className="text-sm">CEP: 1100</p>                </div>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-3"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                viewport={{ once: true }}
              >
                <Phone className="w-5 h-5 text-purple-400" />
                <div className="text-gray-300">
                  <p className="font-semibold">+258 84 312 4567</p>
                  <p className="text-sm">WhatsApp disponível</p>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-3"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
              >
                <EnvelopeSimple className="w-5 h-5 text-purple-400" />
                <div className="text-gray-300">
                  <p className="font-semibold">info@corracontraotempo.co.mz</p>
                  <p className="text-sm">Resposta em até 24h</p>
                </div>
              </motion.div>
            </motion.div>            
            <motion.div 
              className="mt-6 p-4 bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-lg border border-purple-700/30"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h5 className="font-bold mb-2 text-yellow-400 flex items-center">
                ⏰ Horário de Atendimento
              </h5>
              <div className="text-sm text-gray-300 space-y-1">
                <p><strong>Segunda a Sexta:</strong> 8h às 17h</p>
                <p><strong>Sábado:</strong> 9h às 13h</p>                <p><strong>Domingo:</strong> Fechado</p>
              </div>
            </motion.div>
          </motion.div>        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div 
        className="border-t border-gray-700 bg-gray-800/50"
        {...slideFromBottom}
      >
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <Copyright className="w-4 h-4" />
              <span>2024 Corra Contra o Tempo. Todos os direitos reservados.</span>
            </div>
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
                <span className="flex items-center">
                  Desenvolvido com ❤️ pela Tekinova
                </span>
              </div>          
            </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
