import { useTranslation } from 'react-i18next';
import { Award, Globe, CheckCircle, Building2, Users, Heart } from 'lucide-react';
import certificationHero from '@/assets/images/certification.png';

const IEHWSHero = () => {
  const { t } = useTranslation();

  return (
    <div 
      className="text-white overflow-hidden relative"
      style={{
        backgroundImage: 'linear-gradient(rgba(13, 27, 62, 0.9), rgba(13, 27, 62, 0.8)), url("' + certificationHero + '")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-16 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            {/* Badge */}
            <div 
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <Award className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-medium">{t('iehws_page.hero.badge')}</span>
            </div>

            {/* Titre principal */}
            <h1 
              className="text-5xl font-bold mb-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              {t('iehws_page.hero.title')}
              <span className="block text-yellow-400">{t('iehws_page.hero.subtitle')}</span>
            </h1>
            
            {/* Description */}
            <p 
              className="text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto text-lg"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="400"
            >
              {t('iehws_page.hero.description')}
            </p>

            {/* Points clés */}
            <div 
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="600"
            >
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-white/90 text-sm">{t('iehws_page.hero.key_points.employee_happiness')}</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-white/90 text-sm">{t('iehws_page.hero.key_points.wellbeing')}</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-white/90 text-sm">{t('iehws_page.hero.key_points.engagement')}</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-white/90 text-sm">{t('iehws_page.hero.key_points.productivity')}</span>
              </div>
            </div>
          </div>

          {/* Statistiques */}
          {/* <div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="800"
          >
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                <Award className="w-8 h-8 text-yellow-400" />
              </div>
              <div className="text-4xl font-bold text-yellow-500 mb-2">1000</div>
              <div className="text-white/90 text-sm">{t('iehws_page.hero.stats.scoring_points')}</div>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                <Heart className="w-8 h-8 text-yellow-400" />
              </div>
              <div className="text-4xl font-bold text-yellow-500 mb-2">8</div>
              <div className="text-white/90 text-sm">{t('iehws_page.hero.stats.criteria')}</div>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                <Globe className="w-8 h-8 text-yellow-400" />
              </div>
              <div className="text-4xl font-bold text-yellow-500 mb-2">50+</div>
              <div className="text-white/90 text-sm">{t('iehws_page.hero.stats.countries')}</div>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                <Users className="w-8 h-8 text-yellow-400" />
              </div>
              <div className="text-4xl font-bold text-yellow-500 mb-2">1000+</div>
              <div className="text-white/90 text-sm">{t('iehws_page.hero.stats.companies')}</div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default IEHWSHero;

