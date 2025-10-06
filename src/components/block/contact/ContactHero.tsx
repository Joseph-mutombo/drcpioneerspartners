import { useTranslation } from 'react-i18next';
import callCenter from '@/assets/images/call-ce.png';

const ContactHero = () => {
  const { t } = useTranslation();

  return (
    <div 
    className="text-white overflow-hidden"
    style={{
      backgroundImage: 'linear-gradient(rgba(13, 27, 62, 1), rgba(13, 27, 62, 0.9)), url("' + callCenter + '")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      <div className="mx-auto px-4 sm:px-6 lg:px-16 flex flex-row items-center justify-between gap-16">
        <div
          className="text-cente py-16 max-w-2xl"
          data-aos="fade-right"
          data-aos-duration="800"
          data-aos-delay="200"
        >
          <h1 className="text-5xl font-bold">{t('pages.contact_title')}</h1>
          <p className="mt-4 text-lg text-white/90">
            {t('contact_page.hero.description')}
          </p>
        </div>
        <img 
          src={callCenter} 
          data-aos="fade-left" 
          alt="call center" 
          style={{ width: '45%', height: '45%' }} 
          className="hidden lg:flex object-cover" 
        />
      </div>
    </div>
  );
};

export default ContactHero;
