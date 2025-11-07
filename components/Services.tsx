import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Target, Flash, Smartphone, LineChart, Sparkles } from './icons';

interface Service {
    icon: string;
    title: string;
    description: string;
}

interface ServicesContent {
    badge: string;
    title: string;
    subtitle: string;
    services: Service[];
    cta_text: string;
    cta_button: string;
}

const iconMap: { [key: string]: React.ElementType } = {
    Search,
    Target,
    Flash,
    Smartphone,
    LineChart,
    Sparkles,
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

const Services: React.FC = () => {
  const [content, setContent] = useState<ServicesContent | null>(null);

  useEffect(() => {
    fetch('/content/servicios.json')
        .then(res => res.json())
        .then(data => setContent(data))
        .catch(console.error);
  }, []);

  const scrollToForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const section = document.querySelector('#formulario');
    if (section) {
        const yOffset = -80;
        const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  if (!content) {
    return <section id="beneficios" className="py-20 md:py-32 bg-dark-bg/50"><div className="container mx-auto px-6 text-center">Cargando...</div></section>;
  }

  return (
    <section id="beneficios" className="py-20 md:py-32 bg-dark-bg/50">
      <div className="container mx-auto px-6 text-center">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <span className="inline-block bg-primary-purple-500/10 text-primary-purple-400 text-sm font-semibold px-4 py-1 rounded-full">{content.badge}</span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white clamp-h2">
                {content.title}
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
                {content.subtitle}
            </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 text-left backdrop-blur-xl transition-transform duration-300"
              >
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-purple-500/10 to-primary-blue-500/10 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl blur-xl"></div>
                <div className="relative">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-purple-500/10 flex items-center justify-center mb-6">
                      {Icon && <Icon className="w-6 h-6 text-primary-purple-400" />}
                  </div>
                  <h3 className="font-bold text-xl text-white">{service.title}</h3>
                  <p className="mt-2 text-gray-400">{service.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
        >
            <p className="text-xl text-white">{content.cta_text}</p>
            <button onClick={scrollToForm} className="mt-6 px-8 py-3 bg-gradient-to-r from-primary-purple-600 to-primary-blue-500 text-white font-semibold rounded-full hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:ring-offset-gray-900 focus-visible:ring-purple-500">
            {content.cta_button}
            </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
