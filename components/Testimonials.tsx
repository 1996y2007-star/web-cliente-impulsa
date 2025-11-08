import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, TrendingUp, Clock, Users, Star } from './icons';

interface Testimonial {
  id: number;
  title: string;
  category: string;
  client: string;
  quote: string;
  images: string[];
  metrics: {
    conversion: string;
    loadTime: string;
    traffic: string;
    satisfaction: string;
  };
  tags: string[];
}

interface TestimonialsContent {
    badge: string;
    title: string;
    subtitle: string;
    testimonials: Testimonial[];
}

const TestimonialModal: React.FC<{ testimonial: Testimonial; onClose: () => void }> = ({ testimonial, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === testimonial.images.length - 1 ? 0 : prev + 1));
  }, [testimonial.images.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonial.images.length - 1 : prev - 1));
  };
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, nextSlide, prevSlide]);

  const metricIcons: { [key: string]: React.ElementType } = {
    conversion: TrendingUp,
    loadTime: Clock,
    traffic: Users,
    satisfaction: Star,
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 25 }}
        className="relative w-full max-w-5xl h-[90vh] bg-gray-900 rounded-2xl overflow-hidden flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full md:w-2/3 h-1/2 md:h-full relative overflow-hidden group">
          <AnimatePresence initial={false}>
            <motion.img
              key={currentIndex}
              src={testimonial.images[currentIndex]}
              alt={`${testimonial.title} image ${currentIndex + 1}`}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="absolute top-0 left-0 w-full h-full object-cover"
              loading="lazy"
              width="800"
              height="600"
            />
          </AnimatePresence>
          <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"><ChevronLeft /></button>
          <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"><ChevronRight /></button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {testimonial.images.map((_, i) => (
              <button key={i} onClick={() => setCurrentIndex(i)} className={`w-2 h-2 rounded-full ${i === currentIndex ? 'bg-white' : 'bg-white/50'}`}></button>
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/3 h-1/2 md:h-full p-8 overflow-y-auto">
          <h3 className="text-2xl font-bold text-white">{testimonial.title}</h3>
          <p className="text-primary-purple-400">{testimonial.category}</p>
          <div className="flex items-center my-4 text-yellow-400">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
          </div>
          <p className="text-gray-300 italic">"{testimonial.quote}"</p>
          <p className="text-right mt-2 text-gray-400">- {testimonial.client}</p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {Object.entries(testimonial.metrics).map(([key, value]) => {
              const Icon = metricIcons[key as keyof typeof metricIcons];
              return (
                <div key={key} className="bg-white/5 p-3 rounded-lg">
                  <div className="flex items-center gap-2 text-primary-blue-400">
                    <Icon className="w-4 h-4" />
                    <span className="text-sm capitalize">{key}</span>
                  </div>
                  <p className="text-xl font-bold text-white mt-1">{value}</p>
                </div>
              );
            })}
          </div>
        </div>
        <button onClick={onClose} className="absolute top-4 right-4 bg-black/50 p-2 rounded-full text-white"><X /></button>
      </motion.div>
    </motion.div>
  );
};


const Testimonials: React.FC = () => {
    const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);
    const [content, setContent] = useState<TestimonialsContent | null>(null);

    useEffect(() => {
        fetch('/content/testimonios.json')
            .then(res => res.json())
            .then(data => setContent(data))
            .catch(console.error);
    }, []);

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.1, duration: 0.5 },
        }),
    };

    if (!content) {
        return <section id="portfolio" className="py-20 md:py-32 bg-dark-end"><div className="container mx-auto px-6 text-center">Cargando...</div></section>;
    }

    return (
        <section id="portfolio" className="py-20 md:py-32 bg-dark-end">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block bg-primary-purple-500/10 text-primary-purple-400 text-sm font-semibold px-4 py-1 rounded-full">{content.badge}</span>
                    <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white clamp-h2">{content.title}</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">{content.subtitle}</p>
                </motion.div>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {content.testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            custom={index}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            whileHover={{ y: -8, scale: 1.02,
                                boxShadow: '0 20px 25px -5px rgba(168, 85, 247, 0.1), 0 10px 10px -5px rgba(168, 85, 247, 0.04)'
                            }}
                            className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden cursor-pointer backdrop-blur-xl"
                            onClick={() => setSelectedTestimonial(testimonial)}
                        >
                            <img src={testimonial.images[0]} alt={testimonial.title} className="w-full h-48 object-cover" loading="lazy" width="800" height="600" />
                            <div className="p-6">
                                <h3 className="font-bold text-xl text-white">{testimonial.title}</h3>
                                <p className="text-primary-purple-400 text-sm">{testimonial.category}</p>
                                <p className="mt-4 text-gray-400 text-left italic line-clamp-3">"{testimonial.quote}"</p>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                            <div className="absolute bottom-6 left-6 flex flex-wrap gap-2">
                                {testimonial.tags.map(tag => (
                                    <span key={tag} className="text-xs bg-primary-blue-500/20 text-primary-blue-300 px-2 py-1 rounded-full">{tag}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <AnimatePresence>
                {selectedTestimonial && <TestimonialModal testimonial={selectedTestimonial} onClose={() => setSelectedTestimonial(null)} />}
            </AnimatePresence>
        </section>
    );
};

export default Testimonials;