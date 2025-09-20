import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, BarChart3, Target, Brain, TrendingUp, Smartphone, Users2 } from 'lucide-react';

const PMECall = () => {
  const { t } = useTranslation();
  
  // Navigation vers la page des ICXI Navigators
  // const handleNavigatorsClick = () => {
  //   console.log('Navigation vers les ICXI Navigators');
  // };

  const navigatorFeatures = [
    { 
      icon: Brain, 
      title: 'IA Intelligente', 
      description: 'Diagnostics automatisés basés sur l\'IA',
      color: 'from-yellow-500 to-yellow-600'
    },
    { 
      icon: BarChart3, 
      title: 'Tableaux de Bord', 
      description: 'Visualisation claire des performances',
      color: 'from-brand-blue to-brand-blue-light'
    },
    { 
      icon: Target, 
      title: 'Solutions Ciblées', 
      description: 'Stratégies adaptées à votre secteur',
      color: 'from-yellow-500 to-yellow-600'
    },
    { 
      icon: TrendingUp, 
      title: 'Croissance Durable', 
      description: 'Plans d\'amélioration concrets',
      color: 'from-brand-blue to-brand-blue-light'
    }
  ];

  const benefits = [
    { text: 'Abordable pour PME', icon: '💰' },
    { text: 'Adapté au marché RDC', icon: '🇨🇩' },
    { text: 'Résultats rapides', icon: '⚡' },
    { text: 'Support continu', icon: '🤝' }
  ];

  return (
    <section className="py-16 bg-brand-gray">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-brand-blue mb-4">
              {t('services.pme_solutions.title')}
            </h2>
            <p className="text-lg text-brand-blue/80 max-w-4xl mx-auto">
              {t('services.pme_solutions.description')}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {navigatorFeatures.map((feature, index) => (
              <div 
                key={feature.title}
                className="bg-white rounded-lg p-6 border border-brand-gray-dark text-center"
              >
                <feature.icon className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
                <h3 className="font-bold text-brand-blue text-lg mb-2">{feature.title}</h3>
                <p className="text-brand-blue/80 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-blue mb-2">{t('services.pme_solutions.stats.improvement')}</div>
              <p className="text-brand-blue/80">PME Améliorées</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-blue mb-2">{t('services.pme_solutions.stats.roi')}</div>
              <p className="text-brand-blue/80">ROI Moyen</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-blue mb-2">{t('services.pme_solutions.stats.market')}</div>
              <p className="text-brand-blue/80">Marché Adapté</p>
            </div>
          </div>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-center space-x-2 bg-white rounded-lg px-4 py-2 border border-brand-gray-dark"
              >
                <span className="text-lg">{benefit.icon}</span>
                <span className="text-brand-blue font-medium text-sm">{benefit.text}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              to="/services#navigators"
              className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-brand-blue px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
                <span>{t('services.pme_solutions.cta')}</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PMECall;
