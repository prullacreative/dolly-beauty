import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Phone, MapPin, Clock, MessageCircle, Music } from 'lucide-react';
import { FaTiktok, FaWhatsapp } from 'react-icons/fa';
import Container from './Container';
import SectionTitle from './SectionTitle';

const formVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    } 
  },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const formatMessage = () => {
    return `Bonjour Dolly Beauty,

      Je m'appelle ${formData.name}.

      Message: 
      ${formData.message}

      Merci pour votre réponse !`;
        };

  const handleSubmit = (e: React.FormEvent, platform: 'whatsapp' | 'tiktok') => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const message = encodeURIComponent(formatMessage());
    
    setTimeout(() => {
      if (platform === 'whatsapp') {
        window.open(`https://wa.me/002290159127627?text=${message}`, '_blank');
      } else {
        window.open(`https://www.tiktok.com/@dollybeauty229`, '_blank');
      }
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-white to-gray-50/50">
      <Container>
        <SectionTitle 
          title="Prendre contact" 
          subtitle="Discutons de votre prochain rendez-vous beauté"
          className="mb-16"
        />
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Formulaire */}
          <motion.div
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100">
            
              
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 pl-4">
                Envoyez-nous un message
              </h3>
              
              <form className="space-y-6">
                <div className="space-y-1">
                  <label htmlFor="name" className="block text-gray-600 font-medium">
                    Votre nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-dolly-rose focus:outline-none focus:ring-2 focus:ring-dolly-rose/10 transition-all placeholder-gray-400"
                    placeholder="Marie Dupont"
                  />
                </div>
                
                <div className="space-y-1">
                  <label htmlFor="message" className="block text-gray-600 font-medium">
                    Votre message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-dolly-rose focus:outline-none focus:ring-2 focus:ring-dolly-rose/10 transition-all placeholder-gray-400"
                    placeholder="Bonjour, je souhaite prendre rendez-vous pour..."
                  ></textarea>
                </div>
                
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <motion.button
                    type="button"
                    onClick={(e) => handleSubmit(e, 'whatsapp')}
                    disabled={isSubmitting}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow hover:shadow-md disabled:opacity-70"
                  >
                    <FaWhatsapp className="h-5 w-5" />
                    <span>WhatsApp</span>
                  </motion.button>
                  
                  <motion.button
                    type="button"
                    onClick={(e) => handleSubmit(e, 'tiktok')}
                    disabled={isSubmitting}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-gray-900 to-gray-700 text-white py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow hover:shadow-md disabled:opacity-70"
                  >
                    <FaTiktok className="h-5 w-5" />
                    <span>TikTok</span>
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
          
          {/* Informations */}
          <motion.div
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100 h-full">
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-dolly-rose/10 rounded-2xl flex items-center justify-center">
                <MapPin className="h-8 w-8 text-dolly-rose-pure" strokeWidth={1.5} />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 pl-4">
                Notre salon
              </h3>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="bg-dolly-rose/10 p-3 rounded-lg flex-shrink-0">
                    <MapPin className="h-6 w-6 text-dolly-rose-pure" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">Adresse</h4>
                    <p className="text-gray-600">Aitchédji<br />Abomey-Calavi, Bénin</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-dolly-rose/10 p-3 rounded-lg flex-shrink-0">
                    <Clock className="h-6 w-6 text-dolly-rose-pure" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">Horaires</h4>
                    <ul className="text-gray-600 space-y-2">
                      <li className="flex justify-between max-w-xs">
                        <span>Lun-Ven:</span>
                        <span className="font-medium">9h - 19h</span>
                      </li>
                      <li className="flex justify-between max-w-xs">
                        <span>Samedi:</span>
                        <span className="font-medium">10h - 18h</span>
                      </li>
                      <li className="flex justify-between max-w-xs">
                        <span>Dimanche:</span>
                        <span className="font-medium">Fermé</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-dolly-rose/10 p-3 rounded-lg flex-shrink-0">
                    <Phone className="h-6 w-6 text-dolly-rose-pure" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">Téléphone</h4>
                    <p className="text-gray-600">+229 01 59 12 76 27</p>
                  </div>
                </div>
                
                {/* <div className="flex gap-4">
                  <div className="bg-dolly-rose/10 p-3 rounded-lg flex-shrink-0">
                    <Mail className="h-6 w-6 text-dolly-rose-pure" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">Email</h4>
                    <p className="text-gray-600">contact@dollybeauty.com</p>
                  </div>
                </div> */}
              </div>
              
              
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;