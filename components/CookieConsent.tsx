import React, { useState, useEffect } from 'react';

interface CookieConsentProps {
  onAccept: () => void;
  onReject: () => void;
}

interface CookieContent {
    text: string;
    subtitle: string;
    reject_button: string;
    accept_button: string;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ onAccept, onReject }) => {
  const [content, setContent] = useState<CookieContent | null>(null);
  
  useEffect(() => {
    fetch('/content/cookie-consent.json')
      .then(res => res.json())
      .then(data => setContent(data))
      .catch(console.error)
  }, []);
  
  if (!content) {
    return null;
  }
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900/80 backdrop-blur-lg border-t border-white/10 p-4 z-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <p className="text-white">{content.text}</p>
          <p className="text-sm text-gray-400" dangerouslySetInnerHTML={{ __html: content.subtitle }} />
        </div>
        <div className="flex items-center gap-4 flex-shrink-0">
          <button onClick={onReject} className="text-gray-400 hover:text-white transition-colors">
            {content.reject_button}
          </button>
          <button 
            onClick={onAccept}
            className="px-6 py-2 bg-gradient-to-r from-primary-purple-600 to-primary-blue-500 text-white font-semibold rounded-full hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
          >
            {content.accept_button}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;