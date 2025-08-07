import { motion } from 'framer-motion';
import Container from './Container';
import SectionTitle from './SectionTitle';
import { FiAward, FiHeart, FiStar, FiSmile } from 'react-icons/fi';

const About = () => {
  const features = [
    {
      icon: <FiAward className="h-6 w-6 text-dolly-rose-pure" />,
      title: "Expertise",
      description: "Professionnelles certifiées et expérimentées"
    },
    {
      icon: <FiHeart className="h-6 w-6 text-dolly-rose-pure" />,
      title: "Bien-être",
      description: "Approche douce et personnalisée"
    },
    {
      icon: <FiStar className="h-6 w-6 text-dolly-rose-pure" />,
      title: "Qualité",
      description: "Produits premium soigneusement sélectionnés"
    },
    {
      icon: <FiSmile className="h-6 w-6 text-dolly-rose-pure" />,
      title: "Satisfaction",
      description: "Clientes fidèles depuis 10 ans"
    }
  ];

  const AboutIllustration = "https://res.cloudinary.com/dl2yc7401/image/upload/v1754601418/about_lgcli3.png";

  return (
    <section id="about" className="bg-white py-16 md:py-24 overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image avec effet décoratif */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="absolute -z-10 -left-10 -top-10 w-64 h-64 bg-dolly-gold/10 rounded-full blur-xl"></div>
            <div className="">
              <img 
                src={AboutIllustration} 
                alt="Salon Dolly Beauty" 
                className="w-full scale-x-[-1]  h-auto items-center justify-center  object-cover transform  transition-transform duration-700 "
              />
            </div>
          </motion.div>
          
          {/* Contenu texte */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <SectionTitle 
              title="Notre philosophie" 
              // subtitle="À propos de Dolly Beauty"
              centered={false}
            />
            
            <div className="space-y-6">
              <p className="text-lg text-dolly-gray leading-relaxed">
                 <span className="text-dolly-rose-pure font-medium">Dolly Beauty</span> est bien plus qu'un simple salon. C'est un havre de paix où chaque femme retrouve confiance en sa beauté naturelle.
              </p>
              
              <p className="text-lg text-dolly-gray leading-relaxed">
                Notre équipe d'expertes allie savoir-faire technique et écoute attentive pour créer des <span className="text-dolly-rose-pure font-medium">moments uniques</span> qui transcendent la simple prestation esthétique.
              </p>
            </div>

            {/* Grille de fonctionnalités */}
            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-dolly-rose/10 p-3 rounded-full">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-gray-900 mb-1">{feature.title}</h3>
                      <p className="text-dolly-gray">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default About;