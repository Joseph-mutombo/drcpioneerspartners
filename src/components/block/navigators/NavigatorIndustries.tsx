import React from 'react';
import { useTranslation } from 'react-i18next';

const NavigatorIndustries = () => {
  const { t } = useTranslation();

  const industries = t('navigators_page.industries.list', { returnObjects: true }) as string[];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t('navigators_page.industries.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('navigators_page.industries.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {industries.map((industry, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-brand-blue hover:text-white transition-colors duration-300">
              <span className="font-medium">{industry}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NavigatorIndustries;
