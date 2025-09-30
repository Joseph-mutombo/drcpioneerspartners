import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Construction, Home, Mail } from 'lucide-react';

const NotImplemented: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-brand-gray flex items-center justify-center px-4 py-20">
      <div className="max-w-2xl mx-auto text-center">
        
        {/* Icon */}
        <div className="mb-8">
          <div className="w-24 h-24 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Construction className="w-12 h-12 text-brand-blue" />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-brand-blue mb-4">
            {t('not_implemented.title')}
          </h1>
          
          <p className="text-lg text-brand-blue/80 mb-8 leading-relaxed">
            {t('not_implemented.description')}
          </p>

          {/* Features Coming Soon */}
          <div className="bg-white rounded-lg p-6 border border-brand-gray-dark mb-8">
            <h3 className="text-xl font-semibold text-brand-blue mb-4">
              {t('not_implemented.coming_soon_title')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-brand-blue/80">{t('not_implemented.features.detailed_content')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-brand-blue/80">{t('not_implemented.features.interactive_interface')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-brand-blue/80">{t('not_implemented.features.advanced_features')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-brand-blue/80">{t('not_implemented.features.optimized_experience')}</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-brand-blue px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              <Home className="w-5 h-5 mr-2" />
              {t('not_implemented.cta_home')}
            </Link>
            
            <Link
              to="/contact"
              className="inline-flex items-center border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-brand-blue px-6 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              <Mail className="w-5 h-5 mr-2" />
              {t('not_implemented.cta_contact')}
            </Link>
          </div>

          {/* Back Button */}
          <div className="pt-6">
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center text-brand-blue/70 hover:text-brand-blue transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t('not_implemented.cta_back')}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default NotImplemented;
