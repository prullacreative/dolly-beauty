import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'primary' | 'secondary';
  className?: string;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  type = 'primary', 
  className = '',
  href
}) => {
  const buttonClass = type === 'primary' ? 'btn-primary' : 'btn-secondary';
  
  const buttonContent = (
    <motion.span
      className={`inline-block ${buttonClass} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return <a href={href}>{buttonContent}</a>;
  }

  return buttonContent;
};

export default Button;