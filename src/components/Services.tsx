import { motion } from 'framer-motion';
import Container from './Container';
import SectionTitle from './SectionTitle';
import { services } from '../data/services';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50/50">
      <Container>
        <SectionTitle 
          title="Nos Prestations" 
          subtitle="Un éventail de services sur-mesure pour sublimer votre beauté naturelle"
          className="mb-16"
        />

        <div className="grid md:grid-cols-2 items-center justify-center lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
              whileHover={{ 
                y: -8,
                boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)"
              }}
              className="group bg-white rounded-xl p-8 border border-gray-100 hover:border-dolly-rose/30 transition-all duration-75 flex flex-col"
            >
              <div className="bg-dolly-rose/10 h-16 w-16 rounded-lg flex items-center justify-center mb-6 transition-all duration-75 group-hover:bg-dolly-rose/20">
                <service.icon className="h-8 w-8 text-dolly-rose-pure" strokeWidth={1.5} />
              </div>
              
              <h3 className="text-2xl font-medium text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
              
              {/* <div className="flex items-center text-dolly-rose-pure font-medium mt-auto">
                <span>Découvrir</span>
                <FiArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </div> */}
            </motion.div>
          ))}
        </div>

        {/* <div className="text-center mt-16">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-dolly-rose-pure text-white rounded-lg shadow-md hover:shadow-lg transition-all"
          >
            Voir tous nos services
          </motion.button>
        </div> */}
      </Container>
    </section>
  );
};

export default Services;