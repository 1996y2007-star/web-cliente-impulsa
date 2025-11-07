
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, MessageCircle, Target, Repeat, Brain, BadgePercent } from './icons';

interface Reason {
    icon: string;
    title: string;
    description: string;
}

interface WhyUsContent {
    title: string;
    reasons: Reason[];
}

const iconMap: { [key: string]: React.ElementType } = {
    Clock,
    MessageCircle,
    Target,
    Repeat,
    Brain,
    BadgePercent,
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

const WhyUs: React.FC = () => {
  const [content, setContent] = useState<WhyUsContent | null>(null);

  useEffect(() => {
    fetch('/content/why-us.json')
        .then(res => res.json())
        .then(data => setContent(data))
        .catch(console.error);
  }, []);

  if (!content) {
    return <section id="porque-nosotros" className="py-20 md:py-32 bg-dark-mid/50"><div className="container mx-auto px-6 text-center">Cargando...</div></section>;
  }

  return (
    <section id="porque-nosotros" className="py-20 md:py-32 bg-dark-mid/50">
      <div className="container mx-auto px-6 text-center">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white clamp-h2">
                {content.title}
            </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.reasons.map((reason, index) => {
            const Icon = iconMap[reason.icon];
            return (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 text-left backdrop-blur-xl"
              >
                <div className="relative">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-blue-500/10 flex items-center justify-center mb-6">
                      {Icon && <Icon className="w-6 h-6 text-primary-blue-400" />}
                  </div>
                  <h3 className="font-bold text-xl text-white">{reason.title}</h3>
                  <p className="mt-2 text-gray-400">{reason.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;