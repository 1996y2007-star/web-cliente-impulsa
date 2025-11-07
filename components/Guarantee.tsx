
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from './icons';

interface GuaranteeContent {
    title: string;
    description: string;
    closing_line: string;
}

const Guarantee: React.FC = () => {
    const [content, setContent] = useState<GuaranteeContent | null>(null);

    useEffect(() => {
        fetch('/content/guarantee.json')
            .then(res => res.json())
            .then(data => setContent(data))
            .catch(console.error);
    }, []);

    if (!content) {
        return null;
    }

    return (
        <section id="garantia" className="py-10 md:py-20">
            <div className="container mx-auto px-6">
                <motion.div
                    className="max-w-3xl mx-auto bg-white/5 border border-accent-green-500/30 rounded-2xl p-8 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <ShieldCheck className="w-12 h-12 text-accent-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white">{content.title}</h3>
                    <p className="mt-4 text-lg text-gray-300">{content.description}</p>
                    <p className="mt-4 font-semibold text-accent-green-400">{content.closing_line}</p>
                </motion.div>
            </div>
        </section>
    );
};

export default Guarantee;
