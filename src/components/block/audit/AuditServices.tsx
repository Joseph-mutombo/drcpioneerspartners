import { useTranslation } from 'react-i18next';
import { 
  Shield, 
  FileText, 
  Users, 
  Target, 
  CheckCircle, 
  Clock,
  ArrowRight
} from 'lucide-react';

const AuditServices = () => {
  const { t } = useTranslation();

  const services = [
    {
      id: 'audit-qualite',
      title: t('audit_page.services.quality.title'),
      description: t('audit_page.services.quality.description'),
      icon: Shield,
      color: 'bg-blue-100 text-blue-600',
      features: [
        t('audit_page.services.quality.features.process_analysis'),
        t('audit_page.services.quality.features.non_conformities'),
        t('audit_page.services.quality.features.improvement_recommendations'),
        t('audit_page.services.quality.features.action_plan')
      ],
      duration: t('audit_page.services.quality.duration'),
      price: t('audit_page.services.quality.price')
    },
    {
      id: 'audit-environnement',
      title: t('audit_page.services.environmental.title'),
      description: t('audit_page.services.environmental.description'),
      icon: FileText,
      color: 'bg-green-100 text-green-600',
      features: [
        t('audit_page.services.environmental.features.iso_14001'),
        t('audit_page.services.environmental.features.risk_assessment'),
        t('audit_page.services.environmental.features.resource_optimization'),
        t('audit_page.services.environmental.features.detailed_report')
      ],
      duration: t('audit_page.services.environmental.duration'),
      price: t('audit_page.services.environmental.price')
    },
    {
      id: 'audit-securite',
      title: t('audit_page.services.safety.title'),
      description: t('audit_page.services.safety.description'),
      icon: Target,
      color: 'bg-red-100 text-red-600',
      features: [
        t('audit_page.services.safety.features.risk_assessment'),
        t('audit_page.services.safety.features.ohsas_18001'),
        t('audit_page.services.safety.features.staff_training'),
        t('audit_page.services.safety.features.procedure_update')
      ],
      duration: t('audit_page.services.safety.duration'),
      price: t('audit_page.services.safety.price')
    },
    {
      id: 'consultation-strategique',
      title: t('audit_page.services.strategic.title'),
      description: t('audit_page.services.strategic.description'),
      icon: Users,
      color: 'bg-purple-100 text-purple-600',
      features: [
        t('audit_page.services.strategic.features.certification_strategy'),
        t('audit_page.services.strategic.features.team_training'),
        t('audit_page.services.strategic.features.follow_up'),
        t('audit_page.services.strategic.features.continuous_optimization')
      ],
      duration: t('audit_page.services.strategic.duration'),
      price: t('audit_page.services.strategic.price')
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl font-bold text-gray-900 mb-6"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            {t('audit_page.services.title')}
          </h2>
          <p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="200"
          >
            {t('audit_page.services.description')}
          </p>
        </div>

        {/* Grille des services */}
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 group"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay={index * 100}
              >
                {/* En-tête du service */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${service.color} flex-shrink-0`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-brand-blue transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Fonctionnalités */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Ce qui est inclus :</h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Informations pratiques */}
                <div className="flex items-center justify-between mb-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{service.duration}</span>
                    </div>
                    <div className="text-sm font-semibold text-brand-blue">
                      {service.price}
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <button className="w-full group/btn flex items-center justify-center gap-2 px-6 py-3 bg-brand-blue text-white font-semibold rounded-lg hover:bg-yellow-600 transition-colors duration-200">
                  <span>Demander ce service</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Section CTA globale */}
        <div 
          className="mt-16 text-center"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="400"
        >
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Besoin d'un service personnalisé ?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Nos experts peuvent adapter nos services à vos besoins spécifiques. 
              Contactez-nous pour discuter de votre projet.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-brand-blue to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl">
              Demander une consultation personnalisée
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditServices;
