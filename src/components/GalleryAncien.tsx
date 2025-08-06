import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog } from '@headlessui/react';
import { X } from 'lucide-react';
import Container from './Container';
import SectionTitle from './SectionTitle';
import { galleryItems, GalleryItem } from '../data/gallery';

const galleryVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="section-padding bg-gradient-to-b from-white to-dolly-beige/20">
      <Container>
        <SectionTitle 
          title="Notre Galerie" 
          subtitle="Découvrez nos plus belles réalisations et laissez-vous inspirer pour votre prochaine visite."
        />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={galleryVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="cursor-pointer relative group overflow-hidden rounded-2xl"
              onClick={() => setSelectedImage(item)}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-molle">{item.title}</h3>
                <p className="text-white/80 text-sm">{item.category}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>

      {/* Lightbox Modal */}
      <Dialog 
        open={selectedImage !== null} 
        onClose={() => setSelectedImage(null)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/80" aria-hidden="true" />
        
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="relative w-full max-w-4xl">
            <button 
              className="absolute top-4 right-4 z-10 bg-white/10 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/20 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </button>
            
            {selectedImage && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative overflow-hidden rounded-2xl"
              >
                <img 
                  src={selectedImage.imageUrl} 
                  alt={selectedImage.title} 
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm p-4">
                  <h3 className="text-white text-xl font-molle">{selectedImage.title}</h3>
                  <p className="text-white/80">{selectedImage.category}</p>
                </div>
              </motion.div>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </section>
  );
};

export default Gallery;