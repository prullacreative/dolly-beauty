import { motion } from 'framer-motion';
import Container from './Container';
import Button from './Button';

const Hero = () => {
  return (
    <section 
      id="hero"
      className="min-h-screen pt-20 flex items-center relative overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(to right, rgba(255, 247, 248, 0.9), rgba(255, 247, 248, 0.7)), url("https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Effets décoratifs */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-dolly-rose/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-dolly-gold/10 rounded-full blur-3xl"></div>

      <Container>
        <div className="grid md:grid-cols-2 gap-8 items-center py-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-gradient leading-tight">
              Révélez votre beauté naturelle
            </h1>
            <p className="text-dolly-gray text-lg md:text-xl mb-8 max-w-lg">
              Soins du visage, coiffure, ongles & bien-être – dans une ambiance douce et raffinée.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                type="primary" 
                href="#services"
                onClick={() => {
                  document.querySelector('#services')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  });
                }}
              >
                Voir nos services
              </Button>
              <Button 
                type="secondary" 
                href="#contact"
                onClick={() => {
                  document.querySelector('#contact')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  });
                }}
              >
                Nous contacter
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="hidden md:block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-dolly-rose/20 rounded-full blur-md transform -translate-x-4 translate-y-4"></div>
              <img 
                src="https://images.pexels.com/photos/3738339/pexels-photo-3738339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Dolly Beauty Salon" 
                className="w-full h-auto object-cover rounded-3xl shadow-medium"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
