import { useTranslation } from 'react-i18next';
import { 
  Building2, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Award,
  Globe,
  Target,
  Clock,
  Shield,
  Star
} from 'lucide-react';

const CertificationTypes = () => {
  const { t } = useTranslation();

  const enterpriseFeatures = [
    {
      icon: Building2,
      title: t('certifications_page.types.enterprise.organizational_certification.title'),
      description: t('certifications_page.types.enterprise.organizational_certification.description'),
      benefits: [
        t('certifications_page.types.enterprise.organizational_certification.benefits.recognition'),
        t('certifications_page.types.enterprise.organizational_certification.benefits.brand_improvement'),
        t('certifications_page.types.enterprise.organizational_certification.benefits.competitive_differentiation'),
        t('certifications_page.types.enterprise.organizational_certification.benefits.market_access')
      ]
    },
    {
      icon: Users,
      title: t('certifications_page.types.enterprise.team_training.title'),
      description: t('certifications_page.types.enterprise.team_training.description'),
      benefits: [
        t('certifications_page.types.enterprise.team_training.benefits.skill_development'),
        t('certifications_page.types.enterprise.team_training.benefits.performance_improvement'),
        t('certifications_page.types.enterprise.team_training.benefits.turnover_reduction'),
        t('certifications_page.types.enterprise.team_training.benefits.culture_strengthening')
      ]
    },
    {
      icon: Target,
      title: t('certifications_page.types.enterprise.personalized_support.title'),
      description: t('certifications_page.types.enterprise.personalized_support.description'),
      benefits: [
        t('certifications_page.types.enterprise.personalized_support.benefits.adapted_plan'),
        t('certifications_page.types.enterprise.personalized_support.benefits.flexible_training'),
        t('certifications_page.types.enterprise.personalized_support.benefits.expert_follow_up'),
        t('certifications_page.types.enterprise.personalized_support.benefits.technical_support')
      ]
    }
  ];

  const individualFeatures = [
    {
      icon: Award,
      title: t('certifications_page.types.individual.individual_certification.title'),
      description: t('certifications_page.types.individual.individual_certification.description'),
      benefits: [
        t('certifications_page.types.individual.individual_certification.benefits.cv_enhancement'),
        t('certifications_page.types.individual.individual_certification.benefits.expertise_recognition'),
        t('certifications_page.types.individual.individual_certification.benefits.career_opportunities'),
        t('certifications_page.types.individual.individual_certification.benefits.skill_confidence')
      ]
    },
    {
      icon: Clock,
      title: t('certifications_page.types.individual.flexible_training.title'),
      description: t('certifications_page.types.individual.flexible_training.description'),
      benefits: [
        t('certifications_page.types.individual.flexible_training.benefits.online_presentiel'),
        t('certifications_page.types.individual.flexible_training.benefits.flexible_schedule'),
        t('certifications_page.types.individual.flexible_training.benefits.resource_access'),
        t('certifications_page.types.individual.flexible_training.benefits.continuous_support')
      ]
    },
    {
      icon: Globe,
      title: t('certifications_page.types.individual.international_recognition.title'),
      description: t('certifications_page.types.individual.international_recognition.description'),
      benefits: [
        t('certifications_page.types.individual.international_recognition.benefits.international_validity'),
        t('certifications_page.types.individual.international_recognition.benefits.employer_recognition'),
        t('certifications_page.types.individual.international_recognition.benefits.career_mobility'),
        t('certifications_page.types.individual.international_recognition.benefits.professional_network')
      ]
    }
  ];

  const comparisonData = [
    {
      feature: t('certifications_page.types.comparison.certification'),
      enterprise: t('certifications_page.types.comparison.enterprise_certification'),
      individual: t('certifications_page.types.comparison.individual_certification')
    },
    {
      feature: t('certifications_page.types.comparison.training'),
      enterprise: t('certifications_page.types.comparison.enterprise_training'),
      individual: t('certifications_page.types.comparison.individual_training')
    },
    {
      feature: t('certifications_page.types.comparison.support'),
      enterprise: t('certifications_page.types.comparison.enterprise_support'),
      individual: t('certifications_page.types.comparison.individual_support')
    },
    {
      feature: t('certifications_page.types.comparison.duration'),
      enterprise: t('certifications_page.types.comparison.enterprise_duration'),
      individual: t('certifications_page.types.comparison.individual_duration')
    },
    {
      feature: t('certifications_page.types.comparison.price'),
      enterprise: t('certifications_page.types.comparison.enterprise_price'),
      individual: t('certifications_page.types.comparison.individual_price')
    },
    {
      feature: t('certifications_page.types.comparison.support_type'),
      enterprise: t('certifications_page.types.comparison.enterprise_support_type'),
      individual: t('certifications_page.types.comparison.individual_support_type')
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl font-bold text-gray-900 mb-6"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            {t('certifications_page.types.title')}
          </h2>
          <p 
            className=" text-gray-600 max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="200"
          >
            {t('certifications_page.types.description')}
          </p>
        </div>

        {/* Types de certification */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Entreprises */}
          <div 
            className="bg-brand-blue to-blue-600 rounded-2xl p-8 text-white"
            data-aos="fade-right"
            data-aos-duration="600"
          >
            <div className="flex items-center gap-4 mb-8">
              {/* <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-xl">
                <Building2 className="w-8 h-8 text-yellow-400" />
              </div> */}
              <div>
                <h3 className="text-3xl font-bold">{t('certifications_page.types.enterprise.title')}</h3>
                <p className="text-white/90">{t('certifications_page.types.enterprise.subtitle')}</p>
              </div>
            </div>

            <div className="space-y-6 mb-8">
              {enterpriseFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-400/20 rounded-lg flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-yellow-400" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                        <p className="text-white/90 mb-3">{feature.description}</p>
                        <ul className="space-y-1">
                          {feature.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center gap-2 text-sm text-white/90">
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <button className="w-full group flex items-center justify-center gap-2 px-8 py-4 bg-yellow-500 text-brand-blue font-semibold rounded-lg hover:bg-yellow-600 transition-all duration-200">
              <span>{t('certifications_page.types.enterprise.request_quote')}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>

          {/* Particuliers */}
          <div 
            className="bg-gray-50 rounded-2xl p-8 border border-gray-200"
            data-aos="fade-left"
            data-aos-duration="600"
          >
            <div className="flex items-center gap-4 mb-8">
              {/* <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-xl">
                <Users className="w-8 h-8 text-yellow-400" />
              </div> */}
              <div>
                <h3 className="text-3xl font-bold">{t('certifications_page.types.individual.title')}</h3>
                <p className="text-gray-600">{t('certifications_page.types.individual.subtitle')}</p>
              </div>
            </div>

            <div className="space-y-6 mb-8">
              {individualFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="bg-gray-100 backdrop-blur-sm rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-400/20 rounded-lg flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-yellow-400" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                        <p className="text-gray-600 mb-3">{feature.description}</p>
                        <ul className="space-y-1">
                          {feature.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center gap-2 text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <button className="w-full group flex items-center justify-center gap-2 px-8 py-4 bg-brand-blue text-white font-semibold rounded-lg hover:bg-yellow-600 transition-all duration-200">
              <span>{t('certifications_page.types.individual.register')}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </div>

        {/* Tableau comparatif */}
        <div 
          className="bg-gray-50 rounded-2xl p-8"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="400"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
            {t('certifications_page.types.comparison.title')}
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">{t('certifications_page.types.comparison.features')}</th>
                  <th className="text-center py-4 px-6 font-semibold text-brand-blue">{t('certifications_page.types.comparison.enterprise')}</th>
                  <th className="text-center py-4 px-6 font-semibold text-green-600">{t('certifications_page.types.comparison.individual')}</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-white/50 transition-colors duration-200">
                    <td className="py-4 px-6 font-medium text-gray-900">{row.feature}</td>
                    <td className="py-4 px-6 text-center text-gray-700">{row.enterprise}</td>
                    <td className="py-4 px-6 text-center text-gray-700">{row.individual}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-6">
              {t('certifications_page.types.comparison.need_help')}
            </p>
            <button className="px-8 py-3 bg-brand-blue text-white font-semibold rounded-lg hover:bg-yellow-600 transition-colors duration-200">
              {t('certifications_page.types.comparison.consult_expert')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationTypes;
