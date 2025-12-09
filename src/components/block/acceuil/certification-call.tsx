import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Globe, CheckCircle, Star } from 'lucide-react';

const CertificationCall = () => {
  const { t } = useTranslation();
  
  // Navigation vers la page des certifications
  // const handleDiscoverClick = () => {
  //   console.log('Navigation vers les certifications');
  // };

  const certifications = [
    { name: 'TISSE', description: 'Standards d\'Excellence de Service', link: '/certifications/tisse' },
    { name: 'ICXS', description: 'Certification Expérience Client', link: '/certifications/icxs' },
    { name: 'IDCXS', description: 'Certification Expérience Digitale', link: '/certifications/idcxs' },
    { name: 'IEHWS', description: 'Standards Bien-être Employé', link: '/certifications/iehws' }
  ];

  return (
    <section className="py-16 bg-brand-blue">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              {t('services.certifications.title')}
            </h2>
            <p className="text-lg text-white/90 max-w-4xl mx-auto">
              {t('services.certifications.description')}
            </p>
          </div>

            {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {certifications.map((cert, index) => (
                <Link 
                  key={cert.name}
                  to={cert.link}
                  className="bg-white/10 rounded-lg p-6 border border-white/20 text-center hover:bg-white/20 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-lg"
                >
                  <Award className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
                  <h3 className="font-bold text-white text-lg mb-2">{cert.name}</h3>
                  <p className="text-white/80 text-sm">{cert.description}</p>
                </Link>
              ))}
            </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-500 mb-2">{t('services.certifications.stats.success_rate')}</div>
              <p className="text-white/90">Taux de Réussite</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-500 mb-2">{t('services.certifications.stats.countries')}</div>
              <p className="text-white/90">Pays de Reconnaissance</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-500 mb-2">{t('services.certifications.stats.validation')}</div>
              <p className="text-white/90">Validation Tierce Partie</p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              to="/certifications"
              className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-brand-blue px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              <span>{t('services.certifications.cta')}</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationCall;
