import { useTranslation } from 'react-i18next';
import { Award, TrendingUp, CheckCircle2, Target, BarChart3 } from 'lucide-react';

const ICXSScoring = () => {
  const { t } = useTranslation();

  const scoringSections = [
    {
      name: t('icxs_page.scoring.sections.policies'),
      points: 100,
      percentage: 10
    },
    {
      name: t('icxs_page.scoring.sections.places'),
      points: 100,
      percentage: 10
    },
    {
      name: t('icxs_page.scoring.sections.products'),
      points: 100,
      percentage: 10
    },
    {
      name: t('icxs_page.scoring.sections.processes'),
      points: 200,
      percentage: 20
    },
    {
      name: t('icxs_page.scoring.sections.people'),
      points: 200,
      percentage: 20
    },
    {
      name: t('icxs_page.scoring.sections.measurement'),
      points: 200,
      percentage: 20
    },
    {
      name: t('icxs_page.scoring.sections.results'),
      points: 100,
      percentage: 10
    }
  ];

  const performanceLevels = [
    {
      range: '0% – 24.9%',
      level: t('icxs_page.scoring.performance.zero.title'),
      description: t('icxs_page.scoring.performance.zero.description'),
      color: 'bg-red-500'
    },
    {
      range: '25% – 49.9%',
      level: t('icxs_page.scoring.performance.documentation.title'),
      description: t('icxs_page.scoring.performance.documentation.description'),
      color: 'bg-orange-500'
    },
    {
      range: '50% – 74.9%',
      level: t('icxs_page.scoring.performance.communication.title'),
      description: t('icxs_page.scoring.performance.communication.description'),
      color: 'bg-yellow-500'
    },
    {
      range: '75% – 89.9%',
      level: t('icxs_page.scoring.performance.implementation.title'),
      description: t('icxs_page.scoring.performance.implementation.description'),
      color: 'bg-blue-500'
    },
    {
      range: '90% – 100%',
      level: t('icxs_page.scoring.performance.adoption.title'),
      description: t('icxs_page.scoring.performance.adoption.description'),
      color: 'bg-green-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-brand-blue mb-6"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            {t('icxs_page.scoring.title')}
          </h2>
          <p 
            className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="200"
          >
            {t('icxs_page.scoring.description')}
          </p>
        </div>

        {/* Système de scoring */}
        <div 
          className="bg-white rounded-2xl p-8 md:p-12 shadow-xl mb-16"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="400"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center">
              <Award className="w-7 h-7 text-brand-blue" />
            </div>
            <h3 className="text-3xl font-bold text-brand-blue">
              {t('icxs_page.scoring.system.title')}
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {scoringSections.map((section, index) => (
              <div 
                key={index}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-gray-800">{section.name}</h4>
                  <span className="text-2xl font-bold text-brand-blue">{section.points}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-brand-blue h-3 rounded-full transition-all duration-500"
                    style={{ width: `${section.percentage}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-500 mt-2">{section.percentage}% {t('icxs_page.scoring.system.of_total')}</p>
              </div>
            ))}
          </div>

          <div className="bg-brand-blue/5 rounded-xl p-6 border border-brand-blue/20">
            <div className="flex items-center gap-3 mb-2">
              <Target className="w-6 h-6 text-brand-blue" />
              <h4 className="text-xl font-bold text-brand-blue">{t('icxs_page.scoring.system.total')}</h4>
            </div>
            <p className="text-gray-600">{t('icxs_page.scoring.system.total_description')}</p>
          </div>
        </div>

        {/* Niveaux de performance */}
        <div 
          className="bg-white rounded-2xl p-8 md:p-12 shadow-xl"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="600"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-7 h-7 text-yellow-600" />
            </div>
            <h3 className="text-3xl font-bold text-brand-blue">
              {t('icxs_page.scoring.performance.title')}
            </h3>
          </div>

          <div className="space-y-4">
            {performanceLevels.map((level, index) => (
              <div 
                key={index}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-4 h-4 ${level.color} rounded-full mt-2 flex-shrink-0`}></div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-gray-800">{level.range}</span>
                      <span className="text-sm font-semibold text-gray-600">{level.level}</span>
                    </div>
                    <p className="text-gray-600">{level.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-yellow-50 rounded-xl p-6 border border-yellow-200">
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-gray-800 mb-2">{t('icxs_page.scoring.performance.consistency.title')}</h4>
                <p className="text-gray-600">{t('icxs_page.scoring.performance.consistency.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ICXSScoring;

