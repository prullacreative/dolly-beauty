import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  centered = true 
}) => {
  return (
    <motion.div 
      className={`mb-12 ${centered ? 'text-center' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 text-gradient">
        {title}
      </h2>
      {subtitle && (
        <p className="text-dolly-gray max-w-2xl mx-auto text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;