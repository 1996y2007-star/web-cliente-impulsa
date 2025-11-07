
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { trackGtmEvent } from '../App';
import { CheckCircle } from './icons';

interface FormContent {
    badge: string;
    title: string;
    subtitle: string;
    benefits_title: string;
    benefits: string[];
    closing_line: string;
    cta_text: string;
}

interface ContactContent {
    email: string;
}

const ContactForm: React.FC = () => {
    const [content, setContent] = useState<FormContent | null>(null);
    const [contactInfo, setContactInfo] = useState<ContactContent | null>(null);

    useEffect(() => {
        Promise.all([
            fetch('/content/formulario.json').then(res => res.json()),
            fetch('/content/contact.json').then(res => res.json())
        ]).then(([formData, contactData]) => {
            setContent(formData);
            setContactInfo(contactData);
        }).catch(console.error);
    }, []);

    const handleCtaClick = () => {
        if (!contactInfo || !contactInfo.email) return;
        trackGtmEvent('cta_click', { source: 'final_cta_button' });
        const subject = "Solicitud de Consultoría Gratuita";
        const body = "Hola, estoy interesado/a en la consultoría gratuita para impulsar mi marca.";
        window.location.href = `mailto:${contactInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    if (!content || !contactInfo) {
        return <section id="formulario" className="py-20 md:py-32 bg-dark-bg/50"><div className="container mx-auto px-6 text-center">Cargando...</div></section>;
    }

    return (
        <section id="formulario" className="py-20 md:py-32 bg-dark-bg/50">
            <div className="container mx-auto px-6">
                <motion.div
                    className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 text-center backdrop-blur-xl"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block bg-primary-purple-500/10 text-primary-purple-400 text-sm font-semibold px-4 py-1 rounded-full">{content.badge}</span>
                    <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white clamp-h2">{content.title}</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">{content.subtitle}</p>
                    
                    <div className="mt-8 text-left max-w-md mx-auto bg-white/5 p-6 rounded-xl">
                        <h4 className="font-bold text-white text-center">{content.benefits_title}</h4>
                        <ul className="mt-4 space-y-3">
                            {content.benefits.map((benefit, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-accent-green-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-300">{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    <p className="mt-8 text-lg text-gray-300">{content.closing_line}</p>

                    <div className="mt-10">
                        <button 
                            onClick={handleCtaClick}
                            className="relative inline-block px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-primary-purple-600 to-primary-blue-500 rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:ring-offset-gray-900 focus-visible:ring-purple-500"
                        >
                            <span className="absolute top-0 left-0 w-full h-full bg-white/20 opacity-0 animate-shimmer"></span>
                            {content.cta_text}
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactForm;
