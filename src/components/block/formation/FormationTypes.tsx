import { useTranslation } from 'react-i18next';
import { 
  Building2, 
  Users, 
  CheckCircle, 
  ArrowRight,
  BookOpen,
  Clock,
  Award,
  Target,
  Monitor,
  Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';

const FormationTypes = () => {
  const { t } = useTranslation();

  const enterpriseFeatures = [
    {
      icon: Building2,
      title: t('formations_page.types.enterprise.on_site_training.title'),
      description: t('formations_page.types.enterprise.on_site_training.description'),
      benefits: [
        t('formations_page.types.enterprise.on_site_training.benefits.adapted_training'),
        t('formations_page.types.enterprise.on_site_training.benefits.teams_trained_together'),
        t('formations_page.types.enterprise.on_site_training.benefits.reduced_travel_costs'),
        t('formations_page.types.enterprise.on_site_training.benefits.immediate_integration')
      ]
    },
    {
      icon: Users,
      title: t('formations_page.types.enterprise.team_training.title'),
      description: t('formations_page.types.enterprise.team_training.description'),
      benefits: [
        t('formations_page.types.enterprise.team_training.benefits.enhanced_team_cohesion'),
        t('formations_page.types.enterprise.team_training.benefits.common_cx_language'),
        t('formations_page.types.enterprise.team_training.benefits.improved_collaboration'),
        t('formations_page.types.enterprise.team_training.benefits.unified_corporate_culture')
      ]
    },
    {
      icon: Target,
      title: t('formations_page.types.enterprise.personalized_support.title'),
      description: t('formations_page.types.enterprise.personalized_support.description'),
      benefits: [
        t('formations_page.types.enterprise.personalized_support.benefits.customized_plan'),
        t('formations_page.types.enterprise.personalized_support.benefits.personalized_mentoring'),
        t('formations_page.types.enterprise.personalized_support.benefits.progress_tracking'),
        t('formations_page.types.enterprise.personalized_support.benefits.post_training_support')
      ]
    }
  ];

  const individualFeatures = [
    {
      icon: BookOpen,
      title: t('formations_page.types.individual.individual_training.title'),
      description: t('formations_page.types.individual.individual_training.description'),
      benefits: [
        t('formations_page.types.individual.individual_training.benefits.pace_progression'),
        t('formations_page.types.individual.individual_training.benefits.specific_needs_focus'),
        t('formations_page.types.individual.individual_training.benefits.schedule_flexibility'),
        t('formations_page.types.individual.individual_training.benefits.personal_certification')
      ]
    },
    {
      icon: Clock,
      title: t('formations_page.types.individual.flexible_training.title'),
      description: t('formations_page.types.individual.flexible_training.description'),
      benefits: [
        t('formations_page.types.individual.flexible_training.benefits.online_or_presential'),
        t('formations_page.types.individual.flexible_training.benefits.flexible_schedules'),
        t('formations_page.types.individual.flexible_training.benefits.resources_24_7'),
        t('formations_page.types.individual.flexible_training.benefits.continuous_support')
      ]
    },
    {
      icon: Globe,
      title: t('formations_page.types.individual.international_recognition.title'),
      description: t('formations_page.types.individual.international_recognition.description'),
      benefits: [
        t('formations_page.types.individual.international_recognition.benefits.international_validity'),
        t('formations_page.types.individual.international_recognition.benefits.employer_recognition'),
        t('formations_page.types.individual.international_recognition.benefits.professional_mobility'),
        t('formations_page.types.individual.international_recognition.benefits.international_network')
      ]
    }
  ];

  const comparisonData = [
    {
      feature: t('formations_page.types.comparison.format'),
      enterprise: t('formations_page.types.comparison.enterprise_format'),
      individual: t('formations_page.types.comparison.individual_format')
    },
    {
      feature: t('formations_page.types.comparison.duration'),
      enterprise: t('formations_page.types.comparison.enterprise_duration'),
      individual: t('formations_page.types.comparison.individual_duration')
    },
    {
      feature: t('formations_page.types.comparison.support'),
      enterprise: t('formations_page.types.comparison.enterprise_support'),
      individual: t('formations_page.types.comparison.individual_support')
    },
    {
      feature: t('formations_page.types.comparison.certification'),
      enterprise: t('formations_page.types.comparison.enterprise_certification'),
      individual: t('formations_page.types.comparison.individual_certification')
    },
    {
      feature: t('formations_page.types.comparison.price'),
      enterprise: t('formations_page.types.comparison.enterprise_price'),
      individual: t('formations_page.types.comparison.individual_price')
    },
    {
      feature: t('formations_page.types.comparison.support_24_7'),
      enterprise: t('formations_page.types.comparison.enterprise_support_24_7'),
      individual: t('formations_page.types.comparison.individual_support_24_7')
    }
  ];

  const handleRequestFormation = () => {
    const element = document.getElementById('formation-request-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
            {t('formations_page.types.title')}
          </h2>
          <p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="200"
          >
            {t('formations_page.types.description')}
          </p>
        </div>

        {/* Types de formation */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Entreprises */}
          <div 
            className="bg-brand-blue rounded-2xl p-8 text-white"
            data-aos="fade-right"
            data-aos-duration="600"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-xl">
                <Building2 className="w-8 h-8 text-yellow-400" />
              </div>
              <div>
                <h3 className="text-3xl font-bold">{t('formations_page.types.enterprise.title')}</h3>
                <p className="text-white/90">{t('formations_page.types.enterprise.subtitle')}</p>
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
            <Link 
              to="/audit-consultation#audit-request-form" 
              className="w-full group flex items-center justify-center gap-2 px-8 py-4 bg-yellow-500 text-brand-blue font-semibold rounded-lg hover:bg-yellow-600 transition-all duration-200"
            >
              <span>{t('formations_page.types.enterprise.request_quote_button')}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>

          {/* Particuliers */}
          <div 
            className="bg-gray-50 rounded-2xl p-8 border border-gray-200"
            data-aos="fade-left"
            data-aos-duration="600"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-blue/10 rounded-xl">
                <Users className="w-8 h-8 text-brand-blue" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">{t('formations_page.types.individual.title')}</h3>
                <p className="text-gray-600">{t('formations_page.types.individual.subtitle')}</p>
              </div>
            </div>

            <div className="space-y-6 mb-8">
              {individualFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                    <div className="flex items-start gap-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-blue/10 rounded-lg flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-brand-blue" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h4>
                        <p className="text-gray-600 mb-3">{feature.description}</p>
                        <ul className="space-y-1">
                          {feature.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center gap-2 text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
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

            <button onClick={handleRequestFormation} className="w-full group flex items-center justify-center gap-2 px-8 py-4 bg-brand-blue text-white font-semibold rounded-lg hover:bg-yellow-600 transition-all duration-200">
              <span>{t('formations_page.types.individual.register_button')}</span>
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
            {t('formations_page.types.comparison.title')}
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">{t('formations_page.types.comparison.features')}</th>
                  <th className="text-center py-4 px-6 font-semibold text-brand-blue">{t('formations_page.types.comparison.enterprise')}</th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-600">{t('formations_page.types.comparison.individual')}</th>
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
              {t('formations_page.types.comparison.help_text')}
            </p>
            <button className="px-8 py-3 bg-brand-blue text-white font-semibold rounded-lg hover:bg-yellow-600 transition-colors duration-200">
              {t('formations_page.types.comparison.consult_expert_button')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormationTypes;
