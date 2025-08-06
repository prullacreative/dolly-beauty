import React, { useEffect, useState } from 'react';
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
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
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
          isScrolled ? 'bg-white/90 shadow-md' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Container>
          <div className="relative flex items-center justify-between py-4 px-4 md:px-8">
            {/* Nav gauche */}
            <div className="hidden md:flex gap-6 text-sm text-black">
              {navLinks.slice(0, Math.ceil(navLinks.length / 2)).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="hover:text-dolly-rose-pure transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Logo centré */}
            <motion.a
              href="#hero"
              className="absolute left-1/3 -translate-x-1/2 flex items-center justify-center gap-2 text-xl font-molle text-gradient z-10"
              whileHover={{ scale: 1.05 }}
              onClick={(e) => scrollToSection(e, '#hero')}
            >
        
              <span>Dolly Beauty</span>
            </motion.a>

            {/* Nav droite + bouton */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.slice(Math.ceil(navLinks.length / 2)).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="hover:text-dolly-rose-pure transition-colors text-sm text-black"
                >
                  {link.name}
                </a>
              ))}
              <Button type="primary" onClick={() => setIsBookingModalOpen(true)}>
                Prendre rendez-vous
              </Button>
            </div>

            {/* Mobile: Hamburger */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-dolly-gray">
                {isOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </Container>


        {/* Mobile menu */}
        {isOpen && (
          <motion.div
            className="md:hidden bg-white py-4 border-t border-dolly-gray/20"
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
                      className="block py-2 text-dolly-gray hover:text-dolly-rose-pure transition-colors"
                      onClick={(e) => scrollToSection(e, link.href)}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
                <li className="mt-4">
                  <Button
                    type="primary"
                    className="w-full"
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
