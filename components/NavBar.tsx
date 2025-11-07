import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from './icons';
import { trackGtmEvent } from '../App';

interface NavLink {
    name: string;
    href: string;
}

interface NavContent {
    logo: string;
    links: NavLink[];
    cta_text: string;
}

interface ContactContent {
    whatsapp_url: string;
}

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [content, setContent] = useState<NavContent | null>(null);
  const [contactInfo, setContactInfo] = useState<ContactContent | null>(null);

  useEffect(() => {
    Promise.all([
        fetch('/content/navbar.json').then(res => res.json()),
        fetch('/content/contact.json').then(res => res.json())
    ]).then(([navData, contactData]) => {
        setContent(navData);
        setContactInfo(contactData);
    }).catch(console.error);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleCtaClick = () => {
      if (!contactInfo) return;
      trackGtmEvent('hero_cta_click', { source: 'navbar' });
      window.open(contactInfo.whatsapp_url, '_blank');
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const section = document.querySelector(href);
      if (section) {
          const yOffset = -80;
          const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
      }
      if (isOpen) setIsOpen(false);
  };

  if (!content || !contactInfo) {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-gray-900/80">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="text-xl md:text-2xl font-bold text-white">Cargando...</div>
            </nav>
        </header>
    );
  }

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/80 backdrop-blur-xl border-b border-primary-purple-500/20' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#hero" onClick={(e) => scrollToSection(e, '#hero')} className="text-xl md:text-2xl font-bold text-white" dangerouslySetInnerHTML={{ __html: content.logo }}>
        </a>
        <div className="hidden lg:flex items-center space-x-8">
          {content.links.map((link) => (
            <a key={link.name} href={link.href} onClick={(e) => scrollToSection(e, link.href)} className="text-gray-300 hover:text-white transition-colors duration-300">{link.name}</a>
          ))}
        </div>
        <div className="hidden lg:block">
          <button onClick={handleCtaClick} className="px-6 py-2 bg-gradient-to-r from-primary-purple-600 to-primary-blue-600 text-white font-semibold rounded-full hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:ring-offset-gray-900 focus-visible:ring-purple-500">
            {content.cta_text}
          </button>
        </div>
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Abrir menú">
            <Menu className="w-6 h-6 text-white" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 w-4/5 max-w-sm h-full bg-gray-900/90 backdrop-blur-xl z-50 flex flex-col p-8 lg:hidden"
          >
            <button onClick={() => setIsOpen(false)} className="self-end mb-8" aria-label="Cerrar menú">
              <X className="w-8 h-8 text-white" />
            </button>
            <div className="flex flex-col space-y-6 text-center">
              {content.links.map((link) => (
                <a key={link.name} href={link.href} onClick={(e) => scrollToSection(e, link.href)} className="text-2xl text-gray-200 hover:text-primary-purple-400 transition-colors duration-300">{link.name}</a>
              ))}
              <button onClick={handleCtaClick} className="mt-8 px-6 py-3 bg-gradient-to-r from-primary-purple-600 to-primary-blue-600 text-white font-semibold rounded-full hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
                {content.cta_text}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavBar;
