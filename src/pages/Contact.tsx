
import { useTranslation } from 'react-i18next';
import ContactHero from '@/components/block/contact/ContactHero';
import ContactForm from '@/components/block/contact/ContactForm';
import ContactInfo from '@/components/block/contact/ContactInfo';
import ContactMap from '@/components/block/contact/ContactMap';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Contact = () => {
  const { t } = useTranslation();

  const location = useLocation();

  useEffect(() => {
    // Scroll vers l'élément si un hash est présent dans l'URL
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
      }
    } else {
      // Si aucun hash, scroll vers le haut de la page
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.hash]);

  return (
    <div>
      <ContactHero />
      
      <div className="mx-auto px-4 sm:px-6 lg:px-16 py-16" id="contact-form">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-blue mb-4">
            {t('contact_page.form_section.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('contact_page.form_section.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-start mb-16">
          <ContactForm />
          
          <div>
            <ContactInfo />
            <ContactMap />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
