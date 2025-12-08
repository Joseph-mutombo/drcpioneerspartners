import { useTranslation } from 'react-i18next';
import { Award, TrendingUp, CheckCircle2, Target, BarChart3 } from 'lucide-react';

const IDCXSScoring = () => {
  const { t } = useTranslation();

  const scoringSections = [
    {
      name: t('idcxs_page.scoring.sections.policies'),
      points: 100,
      percentage: 10
    },
    {
      name: t('idcxs_page.scoring.sections.channels'),
      points: 100,
      percentage: 10
    },
    {
      name: t('idcxs_page.scoring.sections.products'),
      points: 150,
      percentage: 15
    },
    {
      name: t('idcxs_page.scoring.sections.processes'),
      points: 200,
      percentage: 20
    },
    {
      name: t('idcxs_page.scoring.sections.people'),
      points: 100,
      percentage: 10
    },
    {
      name: t('idcxs_page.scoring.sections.measurement'),
      points: 250,
      percentage: 25
    },
    {
      name: t('idcxs_page.scoring.sections.results'),
      points: 100,
      percentage: 10
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
            {t('idcxs_page.scoring.title')}
          </h2>
          <p 
            className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="200"
          >
            {t('idcxs_page.scoring.description')}
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
              {t('idcxs_page.scoring.system.title')}
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
                <p className="text-sm text-gray-500 mt-2">{section.percentage}% {t('idcxs_page.scoring.system.of_total')}</p>
              </div>
            ))}
          </div>

          <div className="bg-brand-blue/5 rounded-xl p-6 border border-brand-blue/20">
            <div className="flex items-center gap-3 mb-2">
              <Target className="w-6 h-6 text-brand-blue" />
              <h4 className="text-xl font-bold text-brand-blue">{t('idcxs_page.scoring.system.total')}</h4>
            </div>
            <p className="text-gray-600">{t('idcxs_page.scoring.system.total_description')}</p>
          </div>
        </div>

        {/* Note importante */}
        <div 
          className="bg-yellow-50 rounded-xl p-6 border border-yellow-200"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="600"
        >
          <div className="flex items-start gap-4">
            <CheckCircle2 className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-gray-800 mb-2">{t('idcxs_page.scoring.note.title')}</h4>
              <p className="text-gray-600">{t('idcxs_page.scoring.note.description')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IDCXSScoring;

