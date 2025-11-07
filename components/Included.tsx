
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Globe, Mail, ShieldCheck, Eye, BarChart, Zap } from './icons';

interface Benefit {
    icon: string;
    title: string;
    description: string;
}

interface IncludedContent {
    title: string;
    subtitle: string;
    benefits: Benefit[];
}

const iconMap: { [key: string]: React.ElementType } = {
    Globe,
    Mail,
    ShieldCheck,
    Eye,
    BarChart,
    Zap,
};

const Included: React.FC = () => {
    const [content, setContent] = useState<IncludedContent | null>(null);

    useEffect(() => {
        fetch('/content/included.json')
            .then(res => res.json())
            .then(data => setContent(data))
            .catch(console.error);
    }, []);

    if (!content) {
        return null;
    }

    return (
        <section id="incluido" className="py-20 md:py-32 bg-dark-bg/50">
            <div className="container mx-auto px-6">
                <motion.div
                    className="text-center max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white clamp-h2">{content.title}</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">{content.subtitle}</p>
                </motion.div>

                <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    {content.benefits.map((benefit, index) => {
                        const Icon = iconMap[benefit.icon];
                        return (
                            <motion.div
                                key={index}
                                className="flex items-start gap-4"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-purple-500/10 flex items-center justify-center">
                                    {Icon && <Icon className="w-5 h-5 text-primary-purple-400" />}
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white">{benefit.title}</h3>
                                    <p className="mt-1 text-sm text-gray-400">{benefit.description}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Included;
