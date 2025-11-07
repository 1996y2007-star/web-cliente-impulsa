import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cpu, HeartHandshake } from './icons';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

interface Stat {
    value: string;
    label: string;
}

interface Feature {
    icon: string;
    title: string;
    description: string;
}

interface AboutContent {
    badge: string;
    title: string;
    paragraph_1: string;
    paragraph_2: string;
    features: Feature[];
    stats: Stat[];
}

const iconMap: { [key: string]: React.ElementType } = {
    Cpu,
    HeartHandshake,
};

const AnimatedStat: React.FC<{ value: string; label: string; delay: number }> = ({ value, label, delay }) => {
    const prefersReducedMotion = usePrefersReducedMotion();

    const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay } }
    };
    
    if (prefersReducedMotion) {
      return (
        <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-purple-400 to-primary-blue-400 text-transparent bg-clip-text">{value}</p>
            <p className="mt-2 text-gray-400">{label}</p>
        </div>
      );
    }
    
    return (
        <motion.div
            className="text-center"
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
        >
            <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-purple-400 to-primary-blue-400 text-transparent bg-clip-text">{value}</p>
            <p className="mt-2 text-gray-400">{label}</p>
        </motion.div>
    );
};


const About: React.FC = () => {
    const [content, setContent] = useState<AboutContent | null>(null);

    useEffect(() => {
        fetch('/content/nosotros.json')
            .then(res => res.json())
            .then(data => setContent(data))
            .catch(console.error);
    }, []);

    if (!content) {
        return <section id="quien-soy" className="py-20 md:py-32 bg-dark-end"><div className="container mx-auto px-6 text-center">Cargando...</div></section>;
    }

    return (
        <section id="quien-soy" className="py-20 md:py-32 bg-dark-end">
            <div className="container mx-auto px-6">
                <motion.div 
                    className="text-center max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block bg-primary-purple-500/10 text-primary-purple-400 text-sm font-semibold px-4 py-1 rounded-full">{content.badge}</span>
                    <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white clamp-h2" dangerouslySetInnerHTML={{ __html: content.title }} />
                </motion.div>

                <div className="mt-12 grid md:grid-cols-5 gap-12 items-center">
                    <motion.div 
                        className="md:col-span-3 bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <p className="text-lg leading-relaxed text-gray-300">
                            {content.paragraph_1}
                        </p>
                        <p className="mt-6 text-lg leading-relaxed text-gray-300">
                           {content.paragraph_2}
                        </p>
                    </motion.div>

                    <motion.div 
                        className="md:col-span-2 space-y-8"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        {content.features.map((feature, index) => {
                            const Icon = iconMap[feature.icon];
                            const isPurple = feature.icon === 'Cpu';
                            return (
                                <div key={index} className="flex items-start gap-4">
                                    <div className={`flex-shrink-0 w-12 h-12 rounded-full ${isPurple ? 'bg-primary-purple-500/10' : 'bg-primary-blue-500/10'} flex items-center justify-center`}>
                                        {Icon && <Icon className={`w-6 h-6 ${isPurple ? 'text-primary-purple-400' : 'text-primary-blue-400'}`} />}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-xl text-white">{feature.title}</h3>
                                        <p className="mt-1 text-gray-400">{feature.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </motion.div>
                </div>

                <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    {content.stats.map((stat, index) => (
                         <AnimatedStat key={index} value={stat.value} label={stat.label} delay={0.2 * (index + 1)} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
