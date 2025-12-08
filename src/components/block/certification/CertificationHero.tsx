import { useTranslation } from 'react-i18next';
import { Award, Globe, CheckCircle, Building2, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import certificationHero from '@/assets/images/certification.png';

const CertificationHero = () => {
  const { t } = useTranslation();

  const certifications = [
    { name: 'TISSE', description: t('certifications_page.hero.certifications.tisse') },
    { name: 'ICXS', description: t('certifications_page.hero.certifications.icxs') },
    { name: 'IDCXS', description: t('certifications_page.hero.certifications.idcxs') },
    { name: 'IEHWS', description: t('certifications_page.hero.certifications.iehws') }
  ];

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
          {/* En-tête principal */}
          <div className="text-cente mb-16">
            {/* <div 
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <Award className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-medium">Certifications Professionnelles</span>
            </div> */}

            <h1 
              className="text-5xl font-bold mb-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              {t('certifications_page.hero.title')}
              <span className="block text-yellow-400">{t('certifications_page.hero.subtitle')}</span>
            </h1>
            
            <p 
              className="text-white/90 mb-8 leading-relaxed"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="400"
            >
              {t('certifications_page.hero.description')}
            </p>
          </div>

          {/* Grille des certifications */}
          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="600"
          >
            {certifications.map((cert, index) => {
              const isICXS = cert.name === 'ICXS';
              const isIDCXS = cert.name === 'IDCXS';
              const isIEHWS = cert.name === 'IEHWS';
              const CardContent = (
                <>
                  <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-bold text-white text-xl mb-2">{cert.name}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{cert.description}</p>
                </>
              );

              if (isICXS) {
                return (
                  <Link
                    key={cert.name}
                    to="/certifications/icxs"
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center hover:bg-white/20 transition-all duration-300 group cursor-pointer block"
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-delay={800 + index * 100}
                  >
                    {CardContent}
                  </Link>
                );
              }

              if (isIDCXS) {
                return (
                  <Link
                    key={cert.name}
                    to="/certifications/idcxs"
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center hover:bg-white/20 transition-all duration-300 group cursor-pointer block"
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-delay={800 + index * 100}
                  >
                    {CardContent}
                  </Link>
                );
              }

              if (isIEHWS) {
                return (
                  <Link
                    key={cert.name}
                    to="/certifications/iehws"
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center hover:bg-white/20 transition-all duration-300 group cursor-pointer block"
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-delay={800 + index * 100}
                  >
                    {CardContent}
                  </Link>
                );
              }

              return (
                <Link 
                  key={cert.name}
                  to="/certifications/tisse"
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center hover:bg-white/20 transition-all duration-300 group"
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay={800 + index * 100}
                >
                  {CardContent}
                </Link>
              );
            })}
          </div>

          {/* Statistiques */}
          {/* <div 
            className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="1000"
          >
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                <CheckCircle className="w-8 h-8 text-yellow-400" />
              </div>
              <div className="text-4xl font-bold text-yellow-500 mb-2">98%</div>
              <div className="text-white/90">{t('certifications_page.hero.stats.success_rate')}</div>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                <Globe className="w-8 h-8 text-yellow-400" />
              </div>
              <div className="text-4xl font-bold text-yellow-500 mb-2">50+</div>
              <div className="text-white/90">{t('certifications_page.hero.stats.countries')}</div>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                <Building2 className="w-8 h-8 text-yellow-400" />
              </div>
              <div className="text-4xl font-bold text-yellow-500 mb-2">1000+</div>
              <div className="text-white/90">{t('certifications_page.hero.stats.companies')}</div>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                <Users className="w-8 h-8 text-yellow-400" />
              </div>
              <div className="text-4xl font-bold text-yellow-500 mb-2">5000+</div>
              <div className="text-white/90">{t('certifications_page.hero.stats.professionals')}</div>
            </div>
          </div> */}

          {/* Types de certification */}
          {/* <div 
            className="grid md:grid-cols-2 gap-8"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="1200"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-400/20 rounded-lg">
                  <Building2 className="w-6 h-6 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Pour Entreprises</h3>
              </div>
              <p className="text-white/90 mb-6 leading-relaxed">
                Certifiez votre organisation et vos équipes pour améliorer vos performances, 
                renforcer la confiance de vos clients et vous démarquer de la concurrence.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white/90">Certification organisationnelle</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white/90">Formation des équipes</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white/90">Accompagnement personnalisé</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-400/20 rounded-lg">
                  <Users className="w-6 h-6 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Pour Particuliers</h3>
              </div>
              <p className="text-white/90 mb-6 leading-relaxed">
                Développez vos compétences personnelles et professionnelles avec nos certifications 
                reconnues qui valorisent votre expertise et ouvrent de nouvelles opportunités.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white/90">Certification individuelle</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white/90">Formation flexible</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white/90">Reconnaissance internationale</span>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CertificationHero;
