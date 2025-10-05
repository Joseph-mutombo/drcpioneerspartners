import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, BarChart3, Heart } from 'lucide-react';

const NavigatorTypes = () => {
  const { t } = useTranslation();

  const navigatorTypes = [
    {
      id: 'icxn2025',
      name: t('navigators_page.types.icxn2025.name'),
      fullName: t('navigators_page.types.icxn2025.full_name'),
      description: t('navigators_page.types.icxn2025.description'),
      icon: Users,
      color: 'from-blue-500 to-blue-600',
      features: [
        t('navigators_page.types.icxn2025.features.customer_journey'),
        t('navigators_page.types.icxn2025.features.touchpoint_analysis'),
        t('navigators_page.types.icxn2025.features.satisfaction_measurement'),
        t('navigators_page.types.icxn2025.features.personalized_recommendations')
      ],
      cta: t('navigators_page.types.icxn2025.cta')
    },
    {
      id: 'ibdn2025',
      name: t('navigators_page.types.ibdn2025.name'),
      fullName: t('navigators_page.types.ibdn2025.full_name'),
      description: t('navigators_page.types.ibdn2025.description'),
      icon: BarChart3,
      color: 'from-green-500 to-green-600',
      features: [
        t('navigators_page.types.ibdn2025.features.organizational_maturity'),
        t('navigators_page.types.ibdn2025.features.business_process_analysis'),
        t('navigators_page.types.ibdn2025.features.competitive_benchmarking'),
        t('navigators_page.types.ibdn2025.features.improvement_strategies')
      ],
      cta: t('navigators_page.types.ibdn2025.cta')
    },
    {
      id: 'iehwn2025',
      name: t('navigators_page.types.iehwn2025.name'),
      fullName: t('navigators_page.types.iehwn2025.full_name'),
      description: t('navigators_page.types.iehwn2025.description'),
      icon: Heart,
      color: 'from-purple-500 to-purple-600',
      features: [
        t('navigators_page.types.iehwn2025.features.employee_engagement_survey'),
        t('navigators_page.types.iehwn2025.features.corporate_culture_analysis'),
        t('navigators_page.types.iehwn2025.features.wellbeing_assessment'),
        t('navigators_page.types.iehwn2025.features.personalized_improvement_plan')
      ],
      cta: t('navigators_page.types.iehwn2025.cta')
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t('navigators_page.types.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('navigators_page.types.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {navigatorTypes.map((navigator, index) => (
            <div key={navigator.id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${navigator.color} mb-6`}>
                <navigator.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{navigator.name}</h3>
              <p className="text-lg text-gray-600 mb-4">{navigator.fullName}</p>
              <p className="text-gray-600 mb-6">{navigator.description}</p>
              <ul className="space-y-2 mb-8">
                {navigator.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`inline-flex items-center w-full justify-center bg-gradient-to-r ${navigator.color} text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-300`}
              >
                <span>{navigator.cta}</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NavigatorTypes;
