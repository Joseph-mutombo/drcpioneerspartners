import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';

const NavigatorCTA = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-gradient-to-r from-brand-blue to-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-6">
          {t('navigators_page.cta.title')}
        </h2>
        <p className="mb-8 max-w-3xl mx-auto">
          {t('navigators_page.cta.description')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-brand-blue px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
          >
            <span>{t('navigators_page.cta.order_now')}</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
          <button className="inline-flex items-center bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300">
            <Download className="w-5 h-5 mr-2" />
            <span>{t('navigators_page.cta.download_brochure')}</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default NavigatorCTA;
