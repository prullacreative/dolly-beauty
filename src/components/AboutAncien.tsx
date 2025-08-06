import React from 'react';
import { motion } from 'framer-motion';
import Container from './Container';
import SectionTitle from './SectionTitle';

const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-dolly-white to-dolly-beige/30">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-dolly-gold/20 rounded-full blur-md transform -translate-x-4 translate-y-4"></div>
              <img 
                src="https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="À propos de Dolly Beauty" 
                className="w-full h-auto object-cover rounded-[40%_60%_60%_40%/50%] shadow-medium"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <SectionTitle 
              title="À propos de Dolly Beauty" 
              centered={false}
            />
            <p className="text-lg mb-6 text-dolly-gray leading-relaxed">
              Dolly Beauty est un cocon de douceur, dédié à la mise en valeur de chaque femme. Notre mission : offrir une expérience beauté unique, où élégance rime avec bien-être.
            </p>
            <p className="text-lg mb-6 text-dolly-gray leading-relaxed">
              Dans notre salon, chaque détail a été pensé pour vous offrir un moment de détente absolue. Nos esthéticiennes passionnées utilisent des produits de qualité pour sublimer votre beauté naturelle.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-white p-4 rounded-xl shadow-soft">
                <h3 className="text-xl mb-2 text-dolly-rose-pure">Expertise</h3>
                <p className="text-dolly-gray">Une équipe de professionnelles expérimentées</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-soft">
                <h3 className="text-xl mb-2 text-dolly-rose-pure">Qualité</h3>
                <p className="text-dolly-gray">Des produits haut de gamme pour des résultats durables</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default About;