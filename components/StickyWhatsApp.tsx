import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from './icons';
import { trackGtmEvent } from '../App';

interface StickyContent {
    tooltip: string;
    badge_number: number;
}

interface ContactContent {
    whatsapp_url: string;
}

const StickyWhatsApp: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [content, setContent] = useState<StickyContent | null>(null);
    const [contactInfo, setContactInfo] = useState<ContactContent | null>(null);
    
    useEffect(() => {
        Promise.all([
            fetch('/content/whatsapp-sticky.json').then(res => res.json()),
            fetch('/content/contact.json').then(res => res.json())
        ]).then(([stickyData, contactData]) => {
            setContent(stickyData);
            setContactInfo(contactData);
        }).catch(console.error);

        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);
    
    const handleClick = () => {
        trackGtmEvent('whatsapp_click', { source: 'sticky_button' });
    };

    if (!content || !contactInfo) {
        return null;
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.a
                    href={contactInfo.whatsapp_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleClick}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1.1, boxShadow: '0 10px 15px -3px rgba(16, 185, 129, 0.3), 0 4px 6px -2px rgba(16, 185, 129, 0.15)' }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                    className="group fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-accent-green-500 to-accent-green-600 rounded-full flex items-center justify-center shadow-lg z-50"
                    aria-label="Contactar por WhatsApp"
                >
                    <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-accent-green-500 opacity-75"></span>
                    <MessageCircle className="w-8 h-8 text-white" />
                    <span className="absolute -top-1 -right-1 flex h-4 w-4">
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 items-center justify-center text-white text-xs">{content.badge_number}</span>
                    </span>
                    <div className="absolute right-full mr-4 px-3 py-1 bg-gray-800 text-white text-sm rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <span dangerouslySetInnerHTML={{ __html: content.tooltip }}></span>
                        <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-gray-800 transform rotate-45"></div>
                    </div>
                </motion.a>
            )}
        </AnimatePresence>
    );
};

export default StickyWhatsApp;