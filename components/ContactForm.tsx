import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { trackGtmEvent } from '../App';
import { ExternalLink, AlertCircle } from './icons';

interface FormContent {
    badge: string;
    title: string;
    subtitle: string;
    fallback_title: string;
    fallback_subtitle: string;
    fallback_button: string;
    legal_note: string;
}

interface ContactContent {
    form_url: string;
}


const ContactForm: React.FC = () => {
    const [iframeError, setIframeError] = useState(false);
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

    const handleFallbackClick = () => {
        if (!contactInfo) return;
        trackGtmEvent('form_fallback_open');
        window.open(`${contactInfo.form_url}?utm_source=landing&utm_medium=fallback`, '_blank');
    };

    if (!content || !contactInfo) {
        return <section id="formulario" className="py-20 md:py-32 bg-dark-bg/50"><div className="container mx-auto px-6 text-center">Cargando...</div></section>;
    }

    return (
        <section id="formulario" className="py-20 md:py-32 bg-dark-bg/50">
            <div className="container mx-auto px-6">
                <motion.div
                    className="text-center max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block bg-primary-purple-500/10 text-primary-purple-400 text-sm font-semibold px-4 py-1 rounded-full">{content.badge}</span>
                    <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white clamp-h2">{content.title}</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">{content.subtitle}</p>
                </motion.div>

                <motion.div
                    className="mt-16 max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {iframeError ? (
                        <div className="bg-red-900/20 border border-red-500/50 rounded-2xl p-8 text-center">
                            <AlertCircle className="w-12 h-12 text-red-400 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-white">{content.fallback_title}</h3>
                            <p className="text-red-300 mt-2">{content.fallback_subtitle}</p>
                            <button onClick={handleFallbackClick} className="mt-6 px-6 py-2 bg-red-500 text-white font-semibold rounded-full hover:bg-red-600 transition-colors flex items-center gap-2 mx-auto">
                                {content.fallback_button} <ExternalLink className="w-4 h-4" />
                            </button>
                        </div>
                    ) : (
                        <div className="bg-white/5 border border-white/10 rounded-2xl shadow-xl overflow-hidden backdrop-blur-xl">
                            <iframe
                                src={`${contactInfo.form_url}?utm_source=landing&utm_medium=embed`}
                                className="w-full h-[650px] border-0"
                                title="Formulario de Auditoría Gratuita"
                                onError={() => setIframeError(true)}
                                onLoad={() => trackGtmEvent('form_load_success')}
                            >
                                Cargando formulario...
                            </iframe>
                        </div>
                    )}
                    <p className="mt-8 text-center text-sm text-gray-500 max-w-2xl mx-auto" dangerouslySetInnerHTML={{ __html: content.legal_note }} />
                </motion.div>
            </div>
        </section>
    );
};

export default ContactForm;