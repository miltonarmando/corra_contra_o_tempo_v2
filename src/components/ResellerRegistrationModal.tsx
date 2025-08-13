import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  User, 
  Envelope, 
  Phone, 
  MapPin, 
  Buildings, 
  Briefcase,
  PaperPlaneTilt,
  CheckCircle,
  Warning
} from '@phosphor-icons/react';
import emailjs from '@emailjs/browser';
import { Button } from './ui/Button';
import { Card } from './ui/Card';
import { EMAIL_CONFIG } from '../config/email';

interface ResellerRegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  city: string;
  address: string;
  businessType: string;
  experience: string;
}

const ResellerRegistrationModal: React.FC<ResellerRegistrationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    city: '',
    address: '',
    businessType: '',
    experience: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Nome é obrigatório';
    if (!formData.email.trim()) newErrors.email = 'Email é obrigatório';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email inválido';
    if (!formData.phone.trim()) newErrors.phone = 'Telefone é obrigatório';
    if (!formData.city.trim()) newErrors.city = 'Cidade é obrigatória';
    if (!formData.businessType.trim()) newErrors.businessType = 'Tipo de negócio é obrigatório';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // EmailJS configuration
      const templateParams = {
        to_name: 'Equipe Corra Contra o Tempo',
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        city: formData.city,
        address: formData.address,
        business_type: formData.businessType,
        experience: formData.experience,
        message: `Novo pedido de cadastro de revendedor:
        
Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}
Cidade: ${formData.city}
Endereço: ${formData.address}
Tipo de Negócio: ${formData.businessType}
Experiência: ${formData.experience}`
      };

      // Send email using EmailJS
      await emailjs.send(
        EMAIL_CONFIG.SERVICE_ID, 
        EMAIL_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAIL_CONFIG.PUBLIC_KEY
      );
      
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          city: '',
          address: '',
          businessType: '',
          experience: ''
        });
        setSubmitStatus('idle');
        onClose();
      }, 3000);
      
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="bg-gradient-to-br from-white via-gray-50 to-blue-50 border-0 shadow-2xl">
              {/* Header */}
              <div className="relative p-8 pb-6 bg-gradient-to-r from-blue-600 to-red-500 text-white rounded-t-3xl">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-200"
                >
                  <X className="w-5 h-5" />
                </button>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <h2 className="text-3xl font-black mb-2">
                    Cadastro de Revendedor
                  </h2>
                  <p className="text-blue-100 text-lg">
                    Junte-se à nossa rede de parceiros e comece a ganhar dinheiro!
                  </p>
                </motion.div>
              </div>

              {/* Success/Error States */}
              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div
                    className="p-6 bg-green-50 border-l-4 border-green-500 m-6 rounded-r-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <div className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                      <div>
                        <h3 className="text-green-800 font-bold">Cadastro enviado com sucesso!</h3>
                        <p className="text-green-700">Entraremos em contato em breve.</p>
                      </div>
                    </div>
                  </motion.div>
                )}
                
                {submitStatus === 'error' && (
                  <motion.div
                    className="p-6 bg-red-50 border-l-4 border-red-500 m-6 rounded-r-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <div className="flex items-center">
                      <Warning className="w-6 h-6 text-red-500 mr-3" />
                      <div>
                        <h3 className="text-red-800 font-bold">Erro ao enviar cadastro</h3>
                        <p className="text-red-700">Tente novamente ou entre em contato conosco.</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-8 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Nome Completo */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      <User className="inline w-4 h-4 mr-2" />
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${
                        errors.name ? 'border-red-500' : 'border-gray-200 focus:border-blue-500'
                      }`}
                      placeholder="Seu nome completo"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </motion.div>

                  {/* Email */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      <Envelope className="inline w-4 h-4 mr-2" />
                      Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${
                        errors.email ? 'border-red-500' : 'border-gray-200 focus:border-blue-500'
                      }`}
                      placeholder="seu.email@exemplo.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </motion.div>

                  {/* Telefone */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      <Phone className="inline w-4 h-4 mr-2" />
                      Telefone/WhatsApp *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${
                        errors.phone ? 'border-red-500' : 'border-gray-200 focus:border-blue-500'
                      }`}
                      placeholder="+258 84 xxx xxxx"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                    )}
                  </motion.div>

                  {/* Cidade */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      <MapPin className="inline w-4 h-4 mr-2" />
                      Cidade *
                    </label>
                    <select
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${
                        errors.city ? 'border-red-500' : 'border-gray-200 focus:border-blue-500'
                      }`}
                    >
                      <option value="">Selecione sua cidade</option>
                      <option value="Maputo">Maputo</option>
                      <option value="Matola">Matola</option>
                      <option value="Beira">Beira</option>
                      <option value="Nampula">Nampula</option>
                      <option value="Quelimane">Quelimane</option>
                      <option value="Tete">Tete</option>
                      <option value="Chimoio">Chimoio</option>
                      <option value="Nacala">Nacala</option>
                      <option value="Pemba">Pemba</option>
                      <option value="Lichinga">Lichinga</option>
                      <option value="Xai-Xai">Xai-Xai</option>
                      <option value="Inhambane">Inhambane</option>
                      <option value="Maxixe">Maxixe</option>
                      <option value="Outro">Outro</option>
                    </select>
                    {errors.city && (
                      <p className="text-red-500 text-sm mt-1">{errors.city}</p>
                    )}
                  </motion.div>
                </div>

                {/* Endereço */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    <Buildings className="inline w-4 h-4 mr-2" />
                    Endereço do Negócio
                  </label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    placeholder="Rua, bairro, distrito"
                  />
                </motion.div>

                {/* Tipo de Negócio */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    <Briefcase className="inline w-4 h-4 mr-2" />
                    Tipo de Negócio *
                  </label>
                  <select
                    value={formData.businessType}
                    onChange={(e) => handleInputChange('businessType', e.target.value)}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${
                      errors.businessType ? 'border-red-500' : 'border-gray-200 focus:border-blue-500'
                    }`}
                  >
                    <option value="">Selecione o tipo de negócio</option>
                    <option value="Loja de Brinquedos">Loja de Brinquedos</option>
                    <option value="Papelaria">Papelaria</option>
                    <option value="Livraria">Livraria</option>
                    <option value="Vendas Online">Vendas Online</option>
                    <option value="Vendas Domiciliares">Vendas Domiciliares</option>
                    <option value="Supermercado">Supermercado</option>
                    <option value="Outro">Outro</option>
                  </select>
                  {errors.businessType && (
                    <p className="text-red-500 text-sm mt-1">{errors.businessType}</p>
                  )}
                </motion.div>

                {/* Experiência */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Experiência em Vendas
                  </label>
                  <textarea
                    value={formData.experience}
                    onChange={(e) => handleInputChange('experience', e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 resize-none"
                    placeholder="Conte-nos sobre sua experiência em vendas..."
                  />
                </motion.div>

                {/* Motivação */}
                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="pt-4"
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-red-500 hover:from-blue-700 hover:to-red-600 text-white font-bold text-lg rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <motion.div
                        className="flex items-center justify-center"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-3"></div>
                        Enviando...
                      </motion.div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <PaperPlaneTilt className="w-5 h-5 mr-3" />
                        Enviar Cadastro
                      </div>
                    )}
                  </Button>
                </motion.div>

                {/* Info Text */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1 }}
                  className="text-center text-sm text-gray-600 mt-4"
                >
                  Seus dados serão tratados com total confidencialidade. 
                  <br />
                  Entraremos em contato em até 48 horas.
                </motion.p>
              </form>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResellerRegistrationModal;
