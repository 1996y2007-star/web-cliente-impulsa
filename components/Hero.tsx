
import React, { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Rocket, Star } from './icons';
import { VIDEO_ASSETS } from '../constants';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import { trackGtmEvent } from '../App';

interface HeroContent {
    badges: { text: string }[];
    headline_1: string;
    headline_2: string;
    headline_3: string;
    subheadline: string;
    cta_text: string;
    availability_note: string;
    trust_badges: { text: string; icon: string }[];
}

interface ContactContent {
    whatsapp_url: string;
    email: string;
}

const iconMap: { [key: string]: React.ElementType } = {
    rocket: Rocket,
    star: Star,
};

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [content, setContent] = useState<HeroContent | null>(null);
  const [contactInfo, setContactInfo] = useState<ContactContent | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['-5deg', '5deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['5deg', '-5deg']);

  useEffect(() => {
    Promise.all([
        fetch('/content/hero.json').then(res => res.json()),
        fetch('/content/contact.json').then(res => res.json())
    ]).then(([heroData, contactData]) => {
        setContent(heroData);
        setContactInfo(contactData);
    }).catch(console.error);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (prefersReducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        video.pause();
      } else {
        video.play().catch(() => {});
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const promise = video.play();
    if (promise !== undefined) {
      promise.catch(() => {});
    }

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const handleCtaClick = () => {
    if (!contactInfo || !contactInfo.email) return;
    trackGtmEvent('cta_click', { source: 'main_hero_button' });
    const subject = "Solicitud de Consultoría Gratuita";
    const body = "Hola, estoy interesado/a en la consultoría gratuita para impulsar mi marca.";
    window.location.href = `mailto:${contactInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };
  
  if (!content) {
      return <section id="hero" className="relative h-screen min-h-[700px] flex items-center justify-center text-center text-white overflow-hidden"><div>Cargando...</div></section>;
  }

  return (
    <section id="hero" className="relative h-screen min-h-[700px] flex items-center justify-center text-center text-white overflow-hidden" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'%3E%3Crect width='16' height='9' fill='%2306081c'/%3E%3C/svg%3E"
          onError={(e) => (e.currentTarget.src = VIDEO_ASSETS.fallback)}
        >
          <source src={VIDEO_ASSETS.hero} type="video/mp4" />
          <source src={VIDEO_ASSETS.fallback} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-dark-start via-dark-mid/50 to-transparent"></div>
      </div>
      
      <motion.div
        className="relative z-10 p-6"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        <div className="flex justify-center mb-4 space-x-2">
          {content.badges.map((badge, index) => (
            <div key={index} className={`inline-flex items-center text-xs sm:text-sm bg-white/10 text-white py-1 px-3 rounded-full backdrop-blur-sm border border-white/20 ${index === 1 ? 'hidden sm:inline-flex' : ''} ${index === 2 ? 'hidden md:inline-flex' : ''}`}>
                {badge.text}
            </div>
          ))}
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl shadow-2xl p-8 backdrop-blur-2xl" style={{ transform: "translateZ(30px)" }}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight clamp-h1">
                {content.headline_1}
                <br />
                <span className="bg-gradient-to-r from-white to-primary-purple-200 text-transparent bg-clip-text">
                    {content.headline_2}
                </span>
                <br />
                <span className="bg-gradient-to-r from-primary-purple-400 via-primary-blue-400 to-primary-purple-400 text-transparent bg-clip-text bg-[200%_auto] animate-gradient-text">
                     {content.headline_3}
                </span>
            </h1>

            <p className="mt-6 max-w-3xl mx-auto text-base md:text-lg text-gray-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: content.subheadline }} />
        </div>
        
        <div className="mt-10" style={{ transform: "translateZ(15px)" }}>
          <button 
            onClick={handleCtaClick}
            className="relative inline-block px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-primary-purple-600 to-primary-blue-500 rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:ring-offset-gray-900 focus-visible:ring-purple-500"
          >
            <span className="absolute top-0 left-0 w-full h-full bg-white/20 opacity-0 animate-shimmer"></span>
            {content.cta_text}
          </button>
        </div>

        <div className="mt-8 flex flex-wrap justify-center items-center gap-4 text-sm text-gray-400">
            <div className="inline-flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-accent-green-500"></span>{content.availability_note}</div>
            {content.trust_badges.map((badge, index) => {
                const Icon = iconMap[badge.icon];
                return (
                    <div key={index} className="inline-flex items-center gap-2">
                        {Icon && <Icon className={`w-4 h-4 ${badge.icon === 'rocket' ? 'text-primary-purple-400' : 'text-yellow-400'}`} />}
                        {badge.text}
                    </div>
                );
            })}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
