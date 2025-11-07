
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Step {
    number: string;
    title: string;
    description: string;
}

interface ProcessContent {
    title: string;
    subtitle: string;
    steps: Step[];
    bottom_note: string;
}

const Process: React.FC = () => {
    const [content, setContent] = useState<ProcessContent | null>(null);

    useEffect(() => {
        fetch('/content/proceso.json')
            .then(res => res.json())
            .then(data => setContent(data))
            .catch(console.error);
    }, []);

    if (!content) {
        return <section className="py-20 md:py-32 bg-dark-bg/50"><div className="container mx-auto px-6 text-center">Cargando...</div></section>;
    }

  return (
    <section className="py-20 md:py-32 bg-dark-bg/50">
      <div className="container mx-auto px-6 text-center">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white clamp-h2">{content.title}</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">{content.subtitle}</p>
        </motion.div>

        <div className="mt-16 max-w-2xl mx-auto">
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-5 bottom-5 w-0.5 bg-white/10" aria-hidden="true"></div>
            {content.steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative flex items-center justify-between mb-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className={`w-2/5 ${index % 2 === 0 ? 'text-right' : 'order-3 text-left'}`}>
                  <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                  <p className="mt-2 text-gray-400">{step.description}</p>
                </div>
                <div className="w-1/5 flex justify-center order-2">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-purple-600 to-primary-blue-500 rounded-full flex items-center justify-center font-bold text-2xl text-white z-10">
                      {step.number}
                    </div>
                  </div>
                </div>
                <div className="w-2/5 order-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
        >
            <div className="inline-block bg-accent-green-500/10 text-accent-green-500 font-semibold px-4 py-2 rounded-full">
            {content.bottom_note}
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
