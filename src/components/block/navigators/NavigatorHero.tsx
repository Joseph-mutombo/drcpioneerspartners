import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Download } from 'lucide-react';
import navigatorHero from '@/assets/images/navigators.jpg';

const NavigatorHero = () => {
  const { t } = useTranslation();

  return (
    <section className="overflow-hidden relative text-white py-20"
    style={{
      backgroundImage: 'linear-gradient(rgba(13, 27, 62, 0.9), rgba(13, 27, 62, 0.8)), url("' + navigatorHero + '")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">
            {t('navigators_page.hero.title')}
          </h1>
          <p className="mb-8 max-w-4xl mx-auto">
            {t('navigators_page.hero.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-brand-blue px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
            >
              <span>{t('navigators_page.hero.cta_order')}</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <button className="inline-flex items-center bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300">
              <Download className="w-5 h-5 mr-2" />
              <span>{t('navigators_page.hero.cta_brochure')}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavigatorHero;
