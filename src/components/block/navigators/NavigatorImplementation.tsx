import React from 'react';
import { useTranslation } from 'react-i18next';
import { CheckCircle, Users, Shield, Globe } from 'lucide-react';

const NavigatorImplementation = () => {
  const { t } = useTranslation();

  const implementationMethods = [
    {
      title: t('navigators_page.implementation.self_assessment.title'),
      description: t('navigators_page.implementation.self_assessment.description'),
      icon: Users,
      benefits: [
        t('navigators_page.implementation.self_assessment.benefits.total_autonomy'),
        t('navigators_page.implementation.self_assessment.benefits.reduced_cost'),
        t('navigators_page.implementation.self_assessment.benefits.schedule_flexibility')
      ]
    },
    {
      title: t('navigators_page.implementation.assisted_evaluation.title'),
      description: t('navigators_page.implementation.assisted_evaluation.description'),
      icon: Shield,
      benefits: [
        t('navigators_page.implementation.assisted_evaluation.benefits.expert_support'),
        t('navigators_page.implementation.assisted_evaluation.benefits.training_included'),
        t('navigators_page.implementation.assisted_evaluation.benefits.optimized_results')
      ]
    },
    {
      title: t('navigators_page.implementation.outsourced_evaluation.title'),
      description: t('navigators_page.implementation.outsourced_evaluation.description'),
      icon: Globe,
      benefits: [
        t('navigators_page.implementation.outsourced_evaluation.benefits.time_saving'),
        t('navigators_page.implementation.outsourced_evaluation.benefits.complete_expertise'),
        t('navigators_page.implementation.outsourced_evaluation.benefits.detailed_report')
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t('navigators_page.implementation.title')}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {t('navigators_page.implementation.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {implementationMethods.map((method, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-blue mb-6">
                <method.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{method.title}</h3>
              <p className="text-gray-600 mb-6">{method.description}</p>
              <ul className="space-y-2">
                {method.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NavigatorImplementation;
