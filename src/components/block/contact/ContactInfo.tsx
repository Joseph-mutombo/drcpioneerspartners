import { useTranslation } from 'react-i18next';
import { Mail, MapPin, Phone } from 'lucide-react';

const ContactInfo = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
      <h2 className="text-2xl font-bold mb-6">{t('contact_form.info_title')}</h2>
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Phone className="w-6 h-6 text-primary" />
          <div>
            <h3 className="font-semibold">{t('contact_form.phone')}</h3>
            <a 
              href="tel:+243978847886" 
              className="text-gray-600 hover:text-primary transition-colors"
            >
              +243 978 847 886
            </a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Mail className="w-6 h-6 text-primary" />
          <div>
            <h3 className="font-semibold">{t('contact_form.technical_support')}</h3>
            <a 
              href="mailto:suport@drcpioneers.com" 
              className="text-gray-600 hover:text-primary transition-colors"
            >
              suport@drcpioneers.com
            </a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <MapPin className="w-6 h-6 text-primary" />
          <div>
            <h3 className="font-semibold">Adresse :</h3>
            <p>60, Boulevard du 30 juin, Immeuble Mayumbe, Niveau 6, Appartement 33</p>
            <p>C/Gombe, Kinshasa, RDC</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
