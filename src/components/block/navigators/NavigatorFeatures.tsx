import React from 'react';
import { useTranslation } from 'react-i18next';
import { Brain, BarChart3, Target, TrendingUp } from 'lucide-react';

const NavigatorFeatures = () => {
  const { t } = useTranslation();

  const keyFeatures = [
    {
      icon: Brain,
      title: t('navigators_page.features.ai_intelligence.title'),
      description: t('navigators_page.features.ai_intelligence.description'),
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: BarChart3,
      title: t('navigators_page.features.dashboards.title'),
      description: t('navigators_page.features.dashboards.description'),
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Target,
      title: t('navigators_page.features.targeted_solutions.title'),
      description: t('navigators_page.features.targeted_solutions.description'),
      color: 'from-green-500 to-green-600'
    },
    {
      icon: TrendingUp,
      title: t('navigators_page.features.sustainable_growth.title'),
      description: t('navigators_page.features.sustainable_growth.description'),
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t('navigators_page.features.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('navigators_page.features.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {keyFeatures.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NavigatorFeatures;
