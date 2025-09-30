import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Zap, Award, GraduationCap, Users, BarChart3, Globe, Star, Clock, Target, Brain } from 'lucide-react';

const Normes = () => {
  const { t } = useTranslation();
  
  const services = [
    {
      id: 'ICXS',
      title: 'ICXS',
      subtitle: "(International Customer eXperience Standard)",
      description: "La norme phare de l'ICXI axée sur l'Expérience Client (CX). Elle est conçue pour l'évaluation et l'amélioration de l'ensemble des parcours clients, du début à la fin.",
      icon: BookOpen,
      color: 'from-yellow-500 to-yellow-600',
      features: [
        { icon: Users, text: t('services.formations.features.training_drc') },
        { icon: Award, text: t('services.formations.features.international_cert') },
      ],
      stats: { value: t('services.formations.stats.participants'), label: t('services.formations.stats.participants_label') },
      ctaText: t('services.formations.cta'),
      category: 'formation'
    },
    {
      id: 'IDCXS',
      title: 'IDCXS',
      subtitle: "(International Digital Customer eXperience Standard)",
      description: "Cette norme se concentre spécifiquement sur la Qualité et l'Excellence de l'Expérience Client dans le Domaine Numérique. Elle est essentielle pour les entreprises gérant des plateformes en ligne, des applications mobiles, et l'automatisation du service.",
      icon: Zap,
      color: 'from-brand-blue to-brand-blue-light',
      features: [
        { icon: Users, text: t('services.formations.features.training_drc') },
        { icon: Award, text: t('services.formations.features.international_cert') },
      ],
      stats: { value: t('services.pme_solutions.stats.improvement'), label: t('services.pme_solutions.stats.improvement_label') },
      ctaText: t('services.pme_solutions.cta'),
      category: 'solution'
    },
    {
      id: 'IEWHS',
      title: 'IEWHS',
      subtitle: "(International Employee Wellness and Happiness Standard)",
      description: "Cette norme traite de l'Expérience Employé (EX), reconnaissant que le bien-être et le bonheur du personnel sont cruciaux pour l'excellence de service. Elle évalue les pratiques de bien-être, l'engagement et l'environnement de travail.",
      icon: Award,
      color: 'from-yellow-500 to-yellow-600',
      features: [
        { icon: Users, text: t('services.formations.features.training_drc') },
        { icon: Award, text: t('services.formations.features.international_cert') },
      ],
      stats: { value: t('services.certifications.stats.success_rate'), label: t('services.certifications.stats.success_rate_label') },
      ctaText: t('services.certifications.cta'),
      category: 'certification'
    },
  ];

  const getServiceLink = (serviceId: string) => {
    switch (serviceId) {
      case 'formations':
        return '/formations';
      case 'certifications':
        return '/certifications';
      case 'navigators':
        return '/services#navigators';
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
          <h2 className="text-3xl font-bold text-brand-blue mb-4">
            Nos Normes d'Excellence Spécialisées
          </h2>
          <p className="text-lg text-brand-blue/80 max-w-4xl mx-auto">
            Découvrez nos normes d'excellence spécialisées, conçues pour répondre aux besoins uniques des entreprises en RDC. Que vous cherchiez à former vos équipes, certifier vos services, ou adopter des solutions innovantes, nous avons la norme qu'il vous faut.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="bg-brand-gray rounded-lg p-8 border border-brand-gray-dark hover:border-yellow-500 transition-all duration-300"
            >
              {/* Service Header */}
              <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-brand-blue mb-1">
                    {service.title}
                  </h3>
                  <p className="text-yellow-600 font-semibold text-sm">
                    {service.subtitle}
                  </p>
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
                className="inline-flex bg-yellow-500 hover:bg-yellow-600 text-brand-blue px-6 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors duration-300"
              >
                <span>{service.ctaText}</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Normes;
