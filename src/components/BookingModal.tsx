import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, MessageCircle, BookIcon } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    date: '',
    time: '',
    service: 'coiffure', 
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const formatMessage = () => {
    return `Bonjour, je souhaite prendre rendez-vous pour ${formData.service}.
    Nom: ${formData.lastName}
    Prénom: ${formData.firstName}
    Date souhaitée: ${formData.date}
    Heure souhaitée: ${formData.time}`;
  };

  const handleWhatsAppSubmit = () => {
    const message = encodeURIComponent(formatMessage());
    window.open(`https://wa.me/002290159127627?text=${message}`, '_blank');
    onClose();
  };

  const handleTikTokSubmit = () => {
    const message = encodeURIComponent(formatMessage());
    window.open(`https://www.tiktok.com/@dollybeauty229`, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog
          as={motion.div}
          static
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          open={isOpen}
          onClose={onClose}
          className="relative z-50"
        >
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" aria-hidden="true" />

          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel
              as={motion.div}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden"
            >
              <div className="relative">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-dolly-gray hover:text-dolly-rose-pure transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>

                <div className="p-6">
                  <Dialog.Title className="text-2xl font-molle text-gradient mb-6 flex items-center gap-2">
                    <Calendar className="h-6 w-6" />
                    Prendre rendez-vous
                  </Dialog.Title>

                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm text-dolly-gray mb-1">
                          Prénom
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full px-3 py-2 rounded-lg border border-dolly-gold focus:border-dolly-rose focus:outline-none focus:ring-2 focus:ring-dolly-rose/20"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm text-dolly-gray mb-1">
                          Nom
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full px-3 py-2 rounded-lg border border-dolly-gold focus:border-dolly-rose focus:outline-none focus:ring-2 focus:ring-dolly-rose/20"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm text-dolly-gray mb-1">
                        Service souhaité
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-3 py-2 rounded-lg border border-dolly-gold focus:border-dolly-rose focus:outline-none focus:ring-2 focus:ring-dolly-rose/20"
                      >
                        <option value="coiffure">Coiffure</option>
                        <option value="soins-visage">Soins du visage</option>
                        <option value="manucure">Manucure</option>
                        <option value="massage">Massage</option>
                        <option value="maquillage">Maquillage</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="date" className="block text-sm text-dolly-gray mb-1">
                          Date souhaitée
                        </label>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full px-3 py-2 rounded-lg border border-dolly-gold focus:border-dolly-rose focus:outline-none focus:ring-2 focus:ring-dolly-rose/20"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="time" className="block text-sm text-dolly-gray mb-1">
                          Heure souhaitée
                        </label>
                        <input
                          type="time"
                          id="time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          min="09:00"
                          max="19:00"
                          className="w-full px-3 py-2 rounded-lg border border-dolly-gold focus:border-dolly-rose focus:outline-none focus:ring-2 focus:ring-dolly-rose/20"
                          required
                        />
                      </div>
                    </div>

                    <div className="pt-4 space-y-3">
                      <button
                        type="button"
                        onClick={handleWhatsAppSubmit}
                        className="w-full bg-green-500 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-green-600 transition-colors"
                      >
                        <MessageCircle className="h-5 w-5" />
                        Envoyer via WhatsApp
                      </button>
                      <button
                        type="button"
                        onClick={handleTikTokSubmit}
                        className="w-full bg-black text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors"
                      >
                        <BookIcon className="h-5 w-5" />
                        Envoyer via TikTok
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;