import { motion } from 'framer-motion';
import Container from './Container';
import Button from './Button';
import { FaArrowRight, FaQuoteLeft } from 'react-icons/fa';
import HeroImage from '../images/hero/hero.png';
import HeroImage2 from '../images/hero/hero2.png';
import HeroImage3 from '../images/hero/hero3.png';


const Hero = () => {
  return (
    <section 
      id="hero"
      className="min-h-[90vh] flex items-center  relative overflow-hidden bg-gradient-to-b from-white to-gray-50/50"
    >
      {/* Effets décoratifs */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-dolly-rosepur/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-dolly-gold/10 rounded-full filter blur-3xl"></div>
      
      <Container>
        <main className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">
          {/* Partie gauche : Texte */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="py-12 lg:py-20 space-y-8"
          >
            <div className="space-y-6 mt-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
                Révélez votre <br />
                <span className="text-dolly-rose-pure font-molle">beauté intérieure</span>
              </h1>
              
              <p className="text-gray-600 text-xl md:text-2xl max-w-lg leading-relaxed">
                Soins expertes dans une ambiance luxueuse où chaque détail est pensé pour votre bien-être.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                type="primary"
                href="#services"
                className="group flex items-center justify-center"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span className="mr-2">Découvrir nos services</span>
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
  
              <Button
                type="secondary"
                href="#contact"
                className="flex items-center justify-center"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Prendre rendez-vous
              </Button>
            </div>

            <div className="flex gap-4 pt-6">
              <motion.div 
                whileHover={{ y: -5 }}
                className="overflow-hidden "
              >
                <img 
                  src={HeroImage2} 
                  alt="Onglerie" 
                  className=" w-auto object-cover hover:scale-105 transition-transform duration-500" 
                />
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="overflow-hidden "
              >
                <img 
                  src={HeroImage3} 
                  alt="Soin du visage" 
                  className=" w-auto object-cover hover:scale-105 transition-transform duration-500" 
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Partie droite : Image et citation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src={HeroImage}
                alt="Salon de beauté Dolly Beauty"
                className="w-full scale-x-[-1]"
              />
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute bottom-8 -right-8 bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg max-w-xs border border-white/20"
              >
                <FaQuoteLeft className="text-dolly-rose-pure text-xl mb-2" />
                <p className="italic text-gray-700 text-sm md:text-base">
                  Un havre de paix où je me sens toujours merveilleusement choyée. Leur expertise est incomparable !
                </p>
                <p className="mt-3 text-right text-xs text-gray-500 font-medium">— Marie, fidèle cliente</p>
              </motion.div>
            </div>

            {/* Décoration */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-dolly-gold/20 rounded-full z-0"></div>
            <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-dolly-rosepur/20 rounded-full z-0"></div>
          </motion.div>
         
        </main>
      </Container>
      
    </section>
    
  );
};

export default Hero;