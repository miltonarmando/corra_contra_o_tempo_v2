import React from 'react';
import { motion } from 'framer-motion';
import { 
  InstagramLogo, 
  FacebookLogo, 
  TwitterLogo,
  MapPin,
  Copyright
} from '@phosphor-icons/react';
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
    { icon: <InstagramLogo size={24} />, href: 'https://instagram.com/corracontraotempo', label: 'Instagram', color: 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600' },
    { icon: <FacebookLogo size={24} />, href: 'https://facebook.com/corracontraotempo', label: 'Facebook', color: 'bg-blue-600 hover:bg-blue-700' },
    { icon: <TwitterLogo size={24} />, href: 'https://twitter.com/corracontraotempo', label: 'Twitter', color: 'bg-sky-500 hover:bg-sky-600' },
  ];
  const quickLinks = [
    { label: 'Início', href: '#hero' },
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Produtos', href: '#produtos' },
    { label: 'Componentes', href: '#detalhes' },
    { label: 'Testemunhos', href: '#testimonials' },
    { label: 'Revendedor', href: '#revendedor' },
  ];  const supportLinks = [
    { label: 'Entre em Contato', href: '#contato' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-12">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left"
          {...staggerChildren}
        >
          {/* Company Info - From Left */}
          <motion.div
            {...slideFromLeft}
          >
            <div className="flex items-center justify-center md:justify-start space-x-4 mb-6">              
              <img 
                src={getLogoPath()} 
                alt="Corra Contra o Tempo" 
                className="h-8 w-auto"
              />
            </div>
                      
            <motion.div 
              className="flex justify-center md:justify-start space-x-4"
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
                  className={`w-10 h-10 ${social.color} rounded-full flex items-center justify-center transition-all duration-300 shadow-lg`}
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
            <h4 className="text-lg font-bold mb-6 text-center md:text-left">Navegação</h4>
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
                  className="text-center md:text-left"
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
            <h4 className="text-lg font-bold mb-6 text-center md:text-left">Suporte & Ajuda</h4>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index} className="text-center md:text-left">
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
          </motion.div>          
          {/* Contact Info - From Right */}
          <motion.div
            {...slideFromRight}
            transition={{ ...slideFromRight.transition, delay: 0.4 }}
          >
            <h4 className="text-lg font-bold mb-6 text-center md:text-left">Endereço</h4>
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, staggerChildren: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="flex items-start justify-center md:justify-start space-x-3"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                <MapPin className="w-5 h-5 text-purple-400 mt-1" />
                <div className="text-gray-300 text-center md:text-left">
                  <p className="font-semibold">Maputo, Moçambique</p>
                  <p className="text-sm">Rua Principal, 123</p>
                  <p className="text-sm">CEP: 1100</p>                
                  </div>
              </motion.div>
            </motion.div>            
          </motion.div>        
          </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div 
        className="border-t border-gray-700 bg-gray-800/50"
        {...slideFromBottom}
      >
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
            <div className="flex items-center space-x-2 text-gray-400">
              <Copyright className="w-4 h-4" />
              <span>2025 Corra Contra o Tempo. Todos os direitos reservados.</span>
            </div>
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400 mr-8">
                <span className="flex items-center">
                  Desenvolvido pela Tekinova
                </span>
              </div>          
            </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
