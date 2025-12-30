import { useTranslation } from 'react-i18next';
import { 
  Shield, 
  Users, 
  Globe, 
  Heart, 
  CheckCircle, 
  Clock,
  ArrowRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AuditServices = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleRequestService = () => {
    const element = document.getElementById('audit-request-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      id: 'audit-cx',
      title: t('audit_page.services.cx_audit.title'),
      description: t('audit_page.services.cx_audit.description'),
      icon: Users,
      color: 'bg-blue-100 text-blue-600',
      features: [
        t('audit_page.services.cx_audit.features.customer_journey'),
        t('audit_page.services.cx_audit.features.touchpoint_analysis'),
        t('audit_page.services.cx_audit.features.satisfaction_measurement'),
        t('audit_page.services.cx_audit.features.improvement_roadmap')
      ],
      duration: t('audit_page.services.cx_audit.duration'),
      price: t('audit_page.services.cx_audit.price')
    },
    {
      id: 'audit-excellence-service',
      title: t('audit_page.services.service_excellence.title'),
      description: t('audit_page.services.service_excellence.description'),
      icon: Shield,
      color: 'bg-yellow-100 text-yellow-600',
      features: [
        t('audit_page.services.service_excellence.features.tisse_standards'),
        t('audit_page.services.service_excellence.features.process_evaluation'),
        t('audit_page.services.service_excellence.features.benchmarking'),
        t('audit_page.services.service_excellence.features.best_practices')
      ],
      duration: t('audit_page.services.service_excellence.duration'),
      price: t('audit_page.services.service_excellence.price')
    },
    {
      id: 'audit-digital',
      title: t('audit_page.services.digital_experience.title'),
      description: t('audit_page.services.digital_experience.description'),
      icon: Globe,
      color: 'bg-green-100 text-green-600',
      features: [
        t('audit_page.services.digital_experience.features.ux_evaluation'),
        t('audit_page.services.digital_experience.features.usability_testing'),
        t('audit_page.services.digital_experience.features.accessibility_audit'),
        t('audit_page.services.digital_experience.features.performance_analysis')
      ],
      duration: t('audit_page.services.digital_experience.duration'),
      price: t('audit_page.services.digital_experience.price')
    },
    {
      id: 'audit-bien-etre',
      title: t('audit_page.services.employee_wellbeing.title'),
      description: t('audit_page.services.employee_wellbeing.description'),
      icon: Heart,
      color: 'bg-red-100 text-red-600',
      features: [
        t('audit_page.services.employee_wellbeing.features.engagement_survey'),
        t('audit_page.services.employee_wellbeing.features.culture_analysis'),
        t('audit_page.services.employee_wellbeing.features.workplace_assessment'),
        t('audit_page.services.employee_wellbeing.features.improvement_plan')
      ],
      duration: t('audit_page.services.employee_wellbeing.duration'),
      price: t('audit_page.services.employee_wellbeing.price')
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
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">{t('audit_page.services.included_features')}</h4>
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
                <button onClick={handleRequestService} className="w-full group/btn flex items-center justify-center gap-2 px-6 py-3 bg-brand-blue text-white font-semibold rounded-lg hover:bg-yellow-600 transition-colors duration-200">
                  <span>{t('audit_page.services.request_service')}</span>
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
              {t('audit_page.services.custom_service_title')}
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              {t('audit_page.services.custom_service_description')}
            </p>
            <button 
              onClick={() => navigate('/contact')} 
              className="px-8 py-4 bg-gradient-to-r from-brand-blue to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              {t('audit_page.services.request_custom_consultation')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditServices;