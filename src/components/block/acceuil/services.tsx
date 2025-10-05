import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Zap, Award, GraduationCap, Users, BarChart3, Globe, Star, Clock, Target, Brain } from 'lucide-react';

const Services = () => {
  const { t } = useTranslation();
  
  const services = [
    {
      id: 'formations',
      title: t('services.formations.title'),
      subtitle: t('services.formations.subtitle'),
      description: t('services.formations.description'),
      icon: BookOpen,
      color: 'from-yellow-500 to-yellow-600',
      features: [
        { icon: Users, text: t('services.formations.features.training_drc') },
        { icon: Award, text: t('services.formations.features.international_cert') },
        { icon: Clock, text: t('services.formations.features.duration') },
        { icon: Star, text: t('services.formations.features.satisfaction') }
      ],
      stats: { value: t('services.formations.stats.participants'), label: t('services.formations.stats.participants_label') },
      ctaText: t('services.formations.cta'),
      category: 'formation'
    },
    {
      id: 'navigators',
      title: t('services.pme_solutions.title'),
      subtitle: t('services.pme_solutions.subtitle'),
      description: t('services.pme_solutions.description'),
      icon: Zap,
      color: 'from-brand-blue to-brand-blue-light',
      features: [
        { icon: Brain, text: t('services.pme_solutions.features.ai_intelligence') },
        { icon: BarChart3, text: t('services.pme_solutions.features.dashboards') },
        { icon: Target, text: t('services.pme_solutions.features.targeted_solutions') },
        { icon: Globe, text: t('services.pme_solutions.features.drc_market') }
      ],
      stats: { value: t('services.pme_solutions.stats.improvement'), label: t('services.pme_solutions.stats.improvement_label') },
      ctaText: t('services.pme_solutions.cta'),
      category: 'solution'
    },
    {
      id: 'certifications',
      title: t('services.certifications.title'),
      subtitle: t('services.certifications.subtitle'),
      description: t('services.certifications.description'),
      icon: Award,
      color: 'from-yellow-500 to-yellow-600',
      features: [
        { icon: Globe, text: t('services.certifications.features.international_recognition') },
        { icon: Star, text: t('services.certifications.features.bsi_validated') },
        { icon: Award, text: t('services.certifications.features.four_certifications') },
        { icon: Target, text: t('services.certifications.features.global_standards') }
      ],
      stats: { value: t('services.certifications.stats.success_rate'), label: t('services.certifications.stats.success_rate_label') },
      ctaText: t('services.certifications.cta'),
      category: 'certification'
    },
    {
      id: 'msc',
      title: t('services.msc_program.title'),
      subtitle: t('services.msc_program.subtitle'),
      description: t('services.msc_program.description'),
      icon: GraduationCap,
      color: 'from-brand-blue to-brand-blue-light',
      features: [
        { icon: GraduationCap, text: t('services.msc_program.features.international_diploma') },
        { icon: Globe, text: t('services.msc_program.features.prestigious_partners') },
        { icon: Users, text: t('services.msc_program.features.international_network') },
        { icon: Star, text: t('services.msc_program.features.academic_excellence') }
      ],
      stats: { value: t('services.msc_program.stats.success_rate'), label: t('services.msc_program.stats.success_rate_label') },
      ctaText: t('services.msc_program.cta'),
      category: 'academique'
    }
  ];

  const getServiceLink = (serviceId: string) => {
    switch (serviceId) {
      case 'formations':
        return '/formations';
      case 'certifications':
        return '/certifications';
      case 'navigators':
        return '/navigators';
      case 'msc':
        return '/formations#msc';
      default:
        return '/services';
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-brand-blue mb-4">
            {t('services.title')}
          </h2>
          <p className="text-lg text-brand-blue/80 max-w-4xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="bg-brand-gray rounded-lg p-8 border border-brand-gray-dark hover:border-yellow-500 transition-all duration-300"
            >
              {/* Service Header */}
              <div className="flex items-start space-x-4 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-brand-blue mb-1">
                    {service.title}
                  </h3>
                  <p className="text-yellow-600 font-semibold text-sm">
                    {service.subtitle}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-brand-blue">{service.stats.value}</div>
                  <div className="text-brand-blue/70 text-xs">{service.stats.label}</div>
                </div>
              </div>

              {/* Service Description */}
              <p className="text-brand-blue/80 mb-6">
                {service.description}
              </p>

              {/* Service Features */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div 
                    key={featureIndex}
                    className="flex items-center space-x-2 p-2 bg-white rounded-lg"
                  >
                    <feature.icon className="w-4 h-4 text-yellow-600" />
                    <span className="text-brand-blue text-sm">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Link
                to={getServiceLink(service.id)}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-brand-blue px-6 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors duration-300"
              >
                <span>{service.ctaText}</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom Summary */}
        <div className="text-center bg-brand-gray rounded-lg p-8 border border-brand-gray-dark">
          <h3 className="text-xl font-bold text-brand-blue mb-4">
            {t('services.summary.brand')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-brand-blue mb-1">Standards</div>
              <p className="text-brand-blue/80 text-sm">Internationaux</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-brand-blue mb-1">Formation</div>
              <p className="text-brand-blue/80 text-sm">En RDC</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-brand-blue mb-1">Partenaires</div>
              <p className="text-brand-blue/80 text-sm">Prestigieux</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-brand-blue mb-1">Excellence</div>
              <p className="text-brand-blue/80 text-sm">Garantie</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
