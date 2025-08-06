import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft, ArrowRight } from 'lucide-react';
import Container from './Container';
import SectionTitle from './SectionTitle';
import { galleryItems } from '../data/gallery';

const IMAGES_PER_PAGE = 7;

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(galleryItems.length / IMAGES_PER_PAGE);

  const startIndex = currentPage * IMAGES_PER_PAGE;
  const currentImages = galleryItems.slice(startIndex, startIndex + IMAGES_PER_PAGE);
  const selectedImage = selectedIndex !== null ? galleryItems[selectedIndex] : null;

  const nextImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % galleryItems.length);
    }
  };

  const prevImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + galleryItems.length) % galleryItems.length);
    }
  };

  const gridMap = [
    'image', 'image', 'text',
    'image', 'image', 'image',
    'text',  'image', 'image',
  ];

  let imageIndex = 0;

  const displayedGrid = gridMap.map((type, index) => {
   // Dans la partie où tu gères les éléments "text" du gridMap :
    if (type === 'text') {
      return (
        <div
          key={`text-${index}`}
          className="bg-black border border-white/10 rounded-xl p-4 md:flex items-center justify-center text-center text-white font-medium text-sm hidden" // Ajout de 'md:flex hidden'
        >
          <div>
            <h3 className="text-lg font-bold mb-2">Beauté Sublimée</h3>
            <p>
              Découvrez nos services : ongles en gel, résine, semi-permanent,
              soins spa et plus encore.
            </p>
          </div>
        </div>
      );
    }
    const item = currentImages[imageIndex];
    if (!item) return <div key={`empty-${index}`} />;

    const gridPosition = [
      'col-start-2 row-start-1',
      'col-start-3 row-start-1',
      '',
      'col-start-1 row-start-2',
      'col-start-2 row-start-2',
      'col-start-3 row-start-2',
      '',
      'col-start-2 row-start-3',
      'col-start-3 row-start-3',
    ];

    imageIndex++;

    return (
      <motion.div
        key={item.id}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className={`aspect-[3/4] overflow-hidden relative rounded-xl border border-white/10 cursor-pointer group transition-transform duration-300 hover:scale-105 ${gridPosition[index]}`}
        onClick={() => setSelectedIndex(startIndex + imageIndex - 1)}
      >
        <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
        <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-2 text-center text-sm">
          <h3 className="font-semibold">{item.title}</h3>
          <p className="text-xs text-white/70">{item.category}</p>
        </div>
      </motion.div>
    );
  });

  return (
    <section id="gallery" className="bg-white py-20 font-bartomes text-white">
      <Container>
        <SectionTitle
          title="Notre Galerie"
          subtitle="Une sélection de nos plus belles créations dans une mise en page originale."
        />

        <div className="grid grid-cols-3 gap-4 md:gap-6 mt-12 relative">
          {displayedGrid}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8 gap-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
            disabled={currentPage === 0}
            className="px-4 py-2 bg-black rounded hover:bg-black/20 disabled:opacity-40"
          >
            Précédent
          </button>
          <span className="px-2 py-1 text-sm">
            Page {currentPage + 1} sur {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))
            }
            disabled={currentPage === totalPages - 1}
            className="px-4 py-2 bg-black rounded hover:bg-black/20 disabled:opacity-40"
          >
            Suivant
          </button>
        </div>
      </Container>

      {/* Modal */}
      <Dialog open={selectedIndex !== null} onClose={() => setSelectedIndex(null)} className="relative z-50">
        <div className="fixed inset-0 bg-black/80" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="relative w-full max-w-4xl">
            <button
              className="absolute top-4 right-4 z-10 bg-white/10 backdrop-blur-md rounded-full p-2 text-white hover:bg-white/20"
              onClick={() => setSelectedIndex(null)}
            >
              <X className="h-6 w-6" />
            </button>

            {selectedImage && (
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedImage.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden rounded-2xl relative"
                >
                  <img
                    src={selectedImage.imageUrl}
                    alt={selectedImage.title}
                    className="w-full max-h-[80vh] object-contain"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 text-white text-center backdrop-blur-sm">
                    <h3 className="text-lg font-bold">{selectedImage.title}</h3>
                    <p className="text-sm text-white/80">{selectedImage.category}</p>
                  </div>

                  <button
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/10 p-2 rounded-full hover:bg-white/20"
                    onClick={prevImage}
                  >
                    <ArrowLeft className="w-6 h-6 text-white" />
                  </button>
                  <button
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/10 p-2 rounded-full hover:bg-white/20"
                    onClick={nextImage}
                  >
                    <ArrowRight className="w-6 h-6 text-white" />
                  </button>
                </motion.div>
              </AnimatePresence>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </section>
  );
};

export default Gallery;
