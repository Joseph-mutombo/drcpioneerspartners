
import { useTranslation } from 'react-i18next';
import ContactHero from '@/components/block/contact/ContactHero';
import ContactForm from '@/components/block/contact/ContactForm';
import ContactInfo from '@/components/block/contact/ContactInfo';
import ContactMap from '@/components/block/contact/ContactMap';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div>
      <ContactHero />
      
      <div className="mx-auto px-4 sm:px-6 lg:px-16 py-16">
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
