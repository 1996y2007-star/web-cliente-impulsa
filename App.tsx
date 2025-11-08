
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Component Imports
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import Analytics from './components/Analytics';
import Plans from './components/Plans';
import Included from './components/Included';
import Guarantee from './components/Guarantee';
import Faq from './components/Faq';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import StickyWhatsApp from './components/StickyWhatsApp';
import CookieConsent from './components/CookieConsent';
import ParticlesCanvas from './components/ParticlesCanvas';
import MorphingShapes from './components/MorphingShapes';

declare global {
  interface Window {
    dataLayer: any[];
  }
}

export const trackGtmEvent = (event: string, data: Record<string, any> = {}) => {
  if (window.dataLayer) {
    window.dataLayer.push({ event, ...data });
    console.log(`GTM Event: ${event}`, data);
  } else {
    console.log(`GTM Event (dataLayer not found): ${event}`, data);
  }
};

const App: React.FC = () => {
  const [showCookieConsent, setShowCookieConsent] = useState(false);
  const scroll50PercentTracked = useRef(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowCookieConsent(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowCookieConsent(false);
  };

  const handleRejectCookies = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setShowCookieConsent(false);
  };

  const handleScroll = useCallback(() => {
    if (scroll50PercentTracked.current) return;
    
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const scrollTop = window.scrollY;

    if (scrollTop > (scrollHeight - clientHeight) / 2) {
      trackGtmEvent('scroll_50_percent');
      scroll50PercentTracked.current = true;
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-dark-start via-dark-mid to-dark-end overflow-hidden">
      <ParticlesCanvas />
      <MorphingShapes />
      
      <div className="relative z-10">
        <NavBar />
        <main>
          <Hero />
          <About />
          <Services />
          <WhyUs />
          <Testimonials />
          <Process />
          <Analytics />
          <Plans />
          <Included />
          <Guarantee />
          <Faq />
          <ContactForm />
        </main>
        <Footer />
        <StickyWhatsApp />
        <AnimatePresence>
          {showCookieConsent && (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.5 }}
            >
              <CookieConsent 
                onAccept={handleAcceptCookies}
                onReject={handleRejectCookies}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default App;
