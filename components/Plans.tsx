import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from './icons';
import { trackGtmEvent } from '../App';

interface Plan {
    tag: string;
    title: string;
    description: string;
    features: string[];
    cta_text: string;
    cta_url_param: string;
}

interface PlansContent {
    badge: string;
    title: string;
    subtitle: string;
    plans: Plan[];
    whatsapp_note: string;
    email_note: string;
}

interface ContactContent {
    whatsapp: string;
    email: string;
    whatsapp_url: string;
}

const Plans: React.FC = () => {
    const [content, setContent] = useState<PlansContent | null>(null);
    const [contactInfo, setContactInfo] = useState<ContactContent | null>(null);

    useEffect(() => {
        Promise.all([
            fetch('/content/planes.json').then(res => res.json()),
            fetch('/content/contact.json').then(res => res.json())
        ]).then(([plansData, contactData]) => {
            setContent(plansData);
            setContactInfo(contactData);
        }).catch(console.error);
    }, []);

    const handlePlanClick = (planName: string, url: string) => {
        trackGtmEvent('plan_click', { plan_name: planName });
        window.open(url, '_blank');
    };
    
    if (!content || !contactInfo) {
        return <section id="planes" className="py-20 md:py-32 bg-dark-end"><div className="container mx-auto px-6 text-center">Cargando...</div></section>;
    }
    
    const { whatsapp, email, whatsapp_url } = contactInfo;
    const baseWhatsappUrl = whatsapp_url.split('?')[0];

    return (
        <section id="planes" className="py-20 md:py-32 bg-dark-end">
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

                <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {content.plans.map((plan, index) => (
                         <motion.div
                            key={index}
                            className={`relative bg-white/${index === 0 ? '10' : '5'} border ${index === 0 ? 'border-2 border-primary-purple-500' : 'border-white/10'} rounded-3xl p-8 text-left backdrop-blur-xl ${index === 0 ? 'lg:scale-105' : ''}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 * (index + 1) }}
                        >
                            <span className={`absolute -top-4 left-8 ${index === 0 ? 'bg-primary-purple-500' : 'bg-primary-blue-500'} text-white text-sm font-bold px-4 py-1 rounded-full`}>{plan.tag}</span>
                            <h3 className="text-2xl font-bold text-white">{plan.title}</h3>
                            <p className="mt-4 text-gray-300">{plan.description}</p>
                            <ul className="mt-8 space-y-4">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle className="w-6 h-6 text-accent-green-500 flex-shrink-0 mt-1" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <button onClick={() => handlePlanClick(plan.title, `${baseWhatsappUrl}?text=${plan.cta_url_param}`)} 
                                className={`mt-10 w-full px-6 py-3 font-semibold rounded-full transition-all duration-300 ${index === 0 ? 'bg-gradient-to-r from-primary-purple-600 to-primary-blue-500 text-white hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30' : 'bg-white/10 border border-white/20 text-white hover:bg-white/20'}`}>
                                {plan.cta_text}
                            </button>
                        </motion.div>
                    ))}
                </div>
                
                 <motion.div
                    className="mt-16 text-center text-gray-400"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <p dangerouslySetInnerHTML={{ __html: content.whatsapp_note.replace('{whatsapp}', whatsapp) }} />
                    <p className="mt-2" dangerouslySetInnerHTML={{ __html: content.email_note.replace('{email}', email) }} />
                </motion.div>
            </div>
        </section>
    );
};

export default Plans;
