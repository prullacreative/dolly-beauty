import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import Container from './Container';
import SectionTitle from './SectionTitle';
import Button from './Button';
import { FaTiktok, FaWhatsapp } from 'react-icons/fa';

const socialLinks = [

  {
    name: 'TikTok',
    icon: FaTiktok,
    url: 'https://tiktok.com',
    color: 'bg-gradient-to-br from-gray-900 via-gray-800 to-pink-600',
    shadow: 'shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)]',
    animation: { y: [0, -5, 5, 0] }
  },
  {
    name: 'WhatsApp',
    icon: FaWhatsapp,
    url: 'https://wa.me/002290159127627',
    color: 'bg-gradient-to-br from-green-500 to-green-600',
    shadow: 'shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)]',
    animation: { y: [0, -5, 5, 0] }
  },
];

const iconVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { 
      duration: 0.5,
      ease: "backOut"
    } 
  },
  hover: { 
    scale: 1.1, 
    transition: { 
      duration: 0.3,
      ease: "easeOut"
    } 
  },
  tap: { scale: 0.95 }
};

const Social = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50">
      <Container>
        <SectionTitle 
          title="Rejoignez notre univers" 
          subtitle="Suivez notre aventure beauté au quotidien et découvrez nos dernières créations"
          className="mb-16" 
        />
        
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-16">
            {socialLinks.map((social) => (
              <motion.div
                key={social.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                whileHover="hover"
                whileTap="tap"
                variants={iconVariants}
                className="text-center"
              >
                <motion.a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                  animate={social.animation}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  <div className={`h-20 w-20 md:h-24 md:w-24 rounded-2xl ${social.color} ${social.shadow} flex items-center justify-center relative overflow-hidden group`}>
                    <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-all duration-300"></div>
                    <social.icon className="h-10 w-10 text-white" strokeWidth={1.5} />
                  </div>
                  <p className="mt-4 text-gray-700 font-medium tracking-wide">{social.name}</p>
                </motion.a>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-white rounded-2xl p-8 md:p-10 shadow-medium max-w-2xl mx-auto text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Une question ? Un rendez-vous ?
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Contactez-nous directement sur WhatsApp pour un conseil personnalisé ou pour réserver votre prochaine séance beauté.
            </p>
            <Button 
              type="primary" 
              href="https://wa.me/002290159127627"
              className="inline-flex items-center gap-3 px-8 py-4 text-lg"
            >
              <MessageCircle className="h-6 w-6" />
              <span>Discuter sur WhatsApp</span>
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Social;