import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import Container from './Container';
import SectionTitle from './SectionTitle';
import { testimonials } from '../data/testimonials';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay) return;
    
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, autoPlay]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Touch events for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const difference = touchStart - touchEnd;
    if (difference > 5) handleNext(); // swipe left
    if (difference < -5) handlePrev(); // swipe right
    
    setTouchStart(null);
    setTouchEnd(null);
  };

  // Render star rating
  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'fill-dolly-rose-pure text-dolly-rose-pure' : 'text-rose-pure-300'}`} 
      />
    ));
  };

  return (
    <section id="testimonials" className="section-padding bg-dolly-white">
      <Container>
        <SectionTitle 
          title="Ce que nos clientes disent" 
          subtitle="Découvrez les témoignages de nos clientes satisfaites qui nous font confiance pour leur beauté."
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <div className="absolute  top-1/2 -left-12 md:-left-8 transform -translate-y-1/2 z-10">
            <button 
              onClick={handlePrev}
              className="bg-white w-10 h-10 md:w-12 md:h-12 rounded-full shadow-medium flex items-center justify-center text-dolly-rose-pure hover:text-dolly-rose-pure transition-colors hover:scale-110 active:scale-95"
              aria-label="Témoignage précédent"
            >
              <ChevronLeft className="w-5 h-5  md:w-6 md:h-6" />
            </button>
          </div>
          
          <div className="absolute top-1/2 -right-12 md:-right-8 transform -translate-y-1/2 z-10">
            <button 
              onClick={handleNext}
              className="bg-white w-10 h-10 md:w-12 md:h-12 rounded-full shadow-medium flex items-center justify-center text-dolly-rose-pure hover:text-dolly-rose-pure transition-colors hover:scale-110 active:scale-95"
              aria-label="Témoignage suivant"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>

          {/* Testimonial Content */}
          <div 
            className="overflow-hidden p-2"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl shadow-medium p-6 md:p-10 hover:shadow-large transition-shadow"
              >
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-full md:w-1/3 flex flex-col items-center">
                    <div className="aspect-square w-32 md:w-40 overflow-hidden rounded-full border-4 border-dolly-rose/30 mb-4">
                      <img 
                        src={testimonials[currentIndex].image} 
                        alt={testimonials[currentIndex].name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex gap-1 mb-2">
                      {renderStars(testimonials[currentIndex].rating || 5)}
                    </div>
                    <span className="text-sm text-dolly-rose-pure">
                      {testimonials[currentIndex].date}
                    </span>
                  </div>
                  
                  <div className="w-full md:w-2/3">
                    <Quote className="h-10 w-10 text-dolly-rose-pure opacity-80 mb-4" />
                    <p className="text-lg md:text-xl text-dolly-rose-gray italic mb-6">
                      "{testimonials[currentIndex].content}"
                    </p>
                    <div>
                      <h3 className="text-xl md:text-2xl font-molle text-gradient mb-1">
                        {testimonials[currentIndex].name}
                      </h3>
                      <p className="text-dolly-rose-pure/80">
                        {testimonials[currentIndex].service}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-dolly-rose w-6' : 'bg-dolly-rose-pure/30 hover:bg-dolly-rose-pure/50'
                }`}
                aria-label={`Aller au témoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;