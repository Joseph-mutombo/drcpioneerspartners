import React from 'react';
import { useTranslation } from 'react-i18next';
import { DollarSign, MapPin, Zap, Users, Award, BarChart3 } from 'lucide-react';

const NavigatorBenefits = () => {
  const { t } = useTranslation();

  const benefits = [
    { text: t('navigators_page.benefits.affordable_sme'), icon: DollarSign },
    { text: t('navigators_page.benefits.adapted_drc_market'), icon: MapPin },
    { text: t('navigators_page.benefits.fast_results'), icon: Zap },
    { text: t('navigators_page.benefits.continuous_support'), icon: Users },
    { text: t('navigators_page.benefits.international_certification'), icon: Award },
    { text: t('navigators_page.benefits.detailed_reports'), icon: BarChart3 }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t('navigators_page.benefits.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('navigators_page.benefits.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gray-50 rounded-lg p-6 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                <div className="flex justify-center mb-4">
                  <benefit.icon className="w-8 h-8 text-brand-blue group-hover:text-white" />
                </div>
                <p className="font-medium">{benefit.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NavigatorBenefits;
