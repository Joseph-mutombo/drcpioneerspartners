import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  // Fonction pour détecter le scroll
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Fonction pour remonter en haut
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Écouter l'événement de scroll
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    
    // Nettoyer l'event listener
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-40 bg-yellow-500 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
          data-aos="fade-up"
          data-aos-duration="400"
          aria-label={t('totop.aria_label')}
        >
          <ChevronUp className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
          
          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            {t('totop.tooltip')}
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
          </div>
        </button>
      )}
    </>
  );
};

export default GoToTop;
