import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';
import Container from './Container';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-dolly-beige pt-12 pb-6 relative">
      
      <Container>
       
        
        <div className="flex flex-col items-center text-center mb-8">
          <div className="flex items-center gap-2 mb-4">
            {/* <Flower2 className="h-8 w-8 text-dolly-rose-pure" strokeWidth={1.5} /> */}
            <span className="text-2xl font-molle text-gradient">Dolly Beauty</span>
          </div>
          
          <p className="text-dolly-gray max-w-lg text-sm mb-6">
            Votre expérience beauté sur mesure dans une ambiance élégante et raffinée.
          </p>
        </div>
        
       
        <div className="border-t border-dolly-gold/20 pt-6 flex flex-col items-center">
          <div className="flex justify-center w-full mb-4">
            <motion.button 
              className="bg-white text-dolly-rose-pure p-3 rounded-full shadow-md border border-dolly-gold/20"
              onClick={scrollToTop}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUp className="h-5 w-5" />
            </motion.button>
          </div>
          
          <p className="text-dolly-gray text-xs mb-1">
            © {new Date().getFullYear()} Dolly Beauty
          </p>
          <p className="text-dolly-gray/70 text-xs flex items-center justify-center gap-1">
             Réalisé  avec <Heart className="h-4 w-4 text-dolly-rose-pure" /> par <a href="mailto:prullacreative@gmail.com" className='cursor-pointer'>prullacreative</a>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;