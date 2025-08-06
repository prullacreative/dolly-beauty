import React, { useState, useEffect } from 'react';
import { Flower2 } from 'lucide-react';
import Container from './Container';
import Button from './Button';
import BookingModal from './BookingModal';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'Accueil', href: '#hero' },
  { name: 'À propos', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Galerie', href: '#gallery' },
  { name: 'Témoignages', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <motion.header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-dolly-white/95 shadow-soft' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Container>
          <nav className="flex items-center justify-between py-4">
            {/* Logo */}
            <motion.a 
              href="#hero" 
              className="flex items-center gap-2 text-2xl font-molle text-gradient"
              whileHover={{ scale: 1.05 }}
              onClick={(e) => scrollToSection(e, '#hero')}
            >
              <Flower2 className="h-8 w-8 text-dolly-rose" />
              <span>Dolly Beauty</span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <ul className="flex items-center gap-6">
                {navLinks.map((link) => (
                  <motion.li key={link.name} whileHover={{ scale: 1.1 }}>
                    <a 
                      href={link.href}
                      className="text-dolly-gray hover:text-dolly-rose transition-colors"
                      onClick={(e) => scrollToSection(e, link.href)}
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <Button type="primary" onClick={() => setIsBookingModalOpen(true)}>
                Prendre rendez-vous
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-dolly-gray" onClick={() => setIsOpen(!isOpen)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </nav>
        </Container>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div 
            className="md:hidden bg-dolly-white shadow-medium py-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <Container>
              <ul className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="block py-2 text-dolly-gray hover:text-dolly-rose transition-colors"
                      onClick={(e) => scrollToSection(e, link.href)}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
                <li className="mt-4">
                  <Button 
                    type="primary" 
                    className="w-full text-center"
                    onClick={() => {
                      setIsOpen(false);
                      setIsBookingModalOpen(true);
                    }}
                  >
                    Prendre rendez-vous
                  </Button>
                </li>
              </ul>
            </Container>
          </motion.div>
        )}
      </motion.header>

      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </>
  );
};

export default Navbar;
