import { useTranslation } from 'react-i18next';
import { Target, TrendingUp, Users, Heart, ArrowRight } from 'lucide-react';

const ICXSOverview = () => {
  const { t } = useTranslation();

  const questions = [
    t('icxs_page.overview.questions.customer_journey'),
    t('icxs_page.overview.questions.negative_positive'),
    t('icxs_page.overview.questions.experience_creation'),
    t('icxs_page.overview.questions.important_elements'),
    t('icxs_page.overview.questions.improvement')
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-brand-blue mb-6"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            {t('icxs_page.overview.title')}
          </h2>
          <p 
            className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="200"
          >
            {t('icxs_page.overview.description')}
          </p>
        </div>

        {/* Questions clés */}
        <div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="400"
        >
          {questions.map((question, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-blue/10 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-brand-blue" />
                </div>
                <p className="text-gray-700 leading-relaxed">{question}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Service Excellence Model */}
        <div 
          className="bg-gradient-to-r from-brand-blue to-blue-700 rounded-2xl p-8 md:p-12 text-white"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="600"
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-7 h-7" />
              </div>
              <h3 className="text-3xl font-bold">{t('icxs_page.overview.model.title')}</h3>
            </div>
            <p className="text-white/90 text-lg leading-relaxed mb-8">
              {t('icxs_page.overview.model.description')}
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-6 h-6 text-yellow-400" />
                  <h4 className="text-xl font-semibold">{t('icxs_page.overview.model.private_sector.title')}</h4>
                </div>
                <p className="text-white/80">{t('icxs_page.overview.model.private_sector.description')}</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="w-6 h-6 text-yellow-400" />
                  <h4 className="text-xl font-semibold">{t('icxs_page.overview.model.public_sector.title')}</h4>
                </div>
                <p className="text-white/80">{t('icxs_page.overview.model.public_sector.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ICXSOverview;

