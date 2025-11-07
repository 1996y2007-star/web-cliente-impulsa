import React, { useState, useEffect } from 'react';
import { Mail } from './icons';
import { trackGtmEvent } from '../App';

interface FooterContent {
    logo: string;
    info_line_1: string;
    info_line_2: string;
    copyright: string;
    links: { name: string; href: string }[];
    email_cta: {
        title: string;
        subtitle: string;
        link_text: string;
        subject: string;
        body: string;
    };
}

interface ContactContent {
    whatsapp: string;
    email: string;
}

const Footer: React.FC = () => {
    const [content, setContent] = useState<FooterContent | null>(null);
    const [contactInfo, setContactInfo] = useState<ContactContent | null>(null);

    useEffect(() => {
        Promise.all([
            fetch('/content/footer.json').then(res => res.json()),
            fetch('/content/contact.json').then(res => res.json())
        ]).then(([footerData, contactData]) => {
            setContent(footerData);
            setContactInfo(contactData);
        }).catch(console.error);
    }, []);

    const handleEmailSubscriptionClick = () => {
        trackGtmEvent('email_subscription_click');
    };
    
    if (!content || !contactInfo) {
        return (
            <footer className="bg-dark-start border-t border-white/10 pt-16 pb-8">
                <div className="container mx-auto px-6 text-center text-gray-400">Cargando...</div>
            </footer>
        );
    }
    
    const mailtoLink = `mailto:${contactInfo.email}?subject=${encodeURIComponent(content.email_cta.subject)}&body=${encodeURIComponent(content.email_cta.body)}`;

    return (
        <footer className="bg-dark-start border-t border-white/10 pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-1">
                        <a href="#hero" className="text-2xl font-bold bg-gradient-to-r from-primary-purple-400 to-primary-blue-400 text-transparent bg-clip-text">
                           {content.logo}
                        </a>
                        <p className="mt-4 text-gray-400">{content.info_line_1}</p>
                        <p className="text-gray-400">{content.info_line_2.replace('{whatsapp}', contactInfo.whatsapp)}</p>
                    </div>

                    <div className="md:col-span-1 md:text-center">
                        <p className="text-gray-400">{content.copyright}</p>
                        <div className="mt-4 flex justify-center space-x-4">
                            {content.links.map(link => (
                                <a key={link.name} href={link.href} className="text-sm text-gray-400 hover:text-white">{link.name}</a>
                            ))}
                        </div>
                    </div>
                    
                    <div className="md:col-span-1 flex md:justify-end">
                        <div className="hidden lg:block bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl max-w-sm">
                           <div className="flex items-center gap-4">
                               <Mail className="w-8 h-8 text-primary-purple-400" />
                               <div>
                                   <h4 className="font-bold text-white">{content.email_cta.title}</h4>
                                   <p className="text-sm text-gray-400">{content.email_cta.subtitle}</p>
                                   <a href={mailtoLink} onClick={handleEmailSubscriptionClick} className="text-sm text-primary-blue-400 hover:underline">{content.email_cta.link_text}</a>
                               </div>
                           </div>
                        </div>
                        <div className="lg:hidden">
                             <a href={mailtoLink} onClick={handleEmailSubscriptionClick} className="flex items-center gap-2 text-primary-purple-400 hover:text-primary-purple-300">
                                <Mail className="w-5 h-5" />
                                <span>{contactInfo.email}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;