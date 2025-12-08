import { useTranslation } from 'react-i18next';
import { Thermometer, Heart, TrendingUp, CheckCircle } from 'lucide-react';

const IEHWSPathfinder = () => {
  const { t } = useTranslation();

  const surveys = [
    {
      id: 'p18',
      icon: Thermometer,
      name: t('iehws_page.pathfinder.p18.name'),
      description: t('iehws_page.pathfinder.p18.description'),
      questions: 18,
      vectors: [
        { name: t('iehws_page.pathfinder.vectors.leadership'), count: 3 },
        { name: t('iehws_page.pathfinder.vectors.environment'), count: 3 },
        { name: t('iehws_page.pathfinder.vectors.career'), count: 3 },
        { name: t('iehws_page.pathfinder.vectors.teamwork'), count: 3 },
        { name: t('iehws_page.pathfinder.vectors.effectiveness'), count: 3 },
        { name: t('iehws_page.pathfinder.vectors.reward'), count: 3 }
      ],
      color: 'bg-blue-100 text-blue-600'
    },
    {
      id: 'p30',
      icon: Heart,
      name: t('iehws_page.pathfinder.p30.name'),
      description: t('iehws_page.pathfinder.p30.description'),
      questions: 30,
      vectors: [
        { name: t('iehws_page.pathfinder.vectors.leadership'), count: 5 },
        { name: t('iehws_page.pathfinder.vectors.environment'), count: 5 },
        { name: t('iehws_page.pathfinder.vectors.career'), count: 5 },
        { name: t('iehws_page.pathfinder.vectors.teamwork'), count: 5 },
        { name: t('iehws_page.pathfinder.vectors.effectiveness'), count: 5 },
        { name: t('iehws_page.pathfinder.vectors.reward'), count: 5 }
      ],
      color: 'bg-green-100 text-green-600'
    },
    {
      id: 'p60',
      icon: TrendingUp,
      name: t('iehws_page.pathfinder.p60.name'),
      description: t('iehws_page.pathfinder.p60.description'),
      questions: 60,
      vectors: [
        { name: t('iehws_page.pathfinder.vectors.leadership'), count: 10 },
        { name: t('iehws_page.pathfinder.vectors.environment'), count: 10 },
        { name: t('iehws_page.pathfinder.vectors.career'), count: 10 },
        { name: t('iehws_page.pathfinder.vectors.teamwork'), count: 10 },
        { name: t('iehws_page.pathfinder.vectors.effectiveness'), count: 10 },
        { name: t('iehws_page.pathfinder.vectors.reward'), count: 10 }
      ],
      color: 'bg-purple-100 text-purple-600'
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
            {t('iehws_page.pathfinder.title')}
          </h2>
          <p 
            className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="200"
          >
            {t('iehws_page.pathfinder.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {surveys.map((survey, index) => {
            const Icon = survey.icon;
            return (
              <div 
                key={survey.id}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay={index * 100}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 ${survey.color} rounded-xl mb-6`}>
                  <Icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl font-bold text-brand-blue mb-2">
                  {survey.name}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {survey.description}
                </p>

                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <div className="text-3xl font-bold text-brand-blue mb-2">{survey.questions}</div>
                  <div className="text-sm text-gray-600">{t('iehws_page.pathfinder.questions')}</div>
                </div>

                <div className="space-y-2">
                  {survey.vectors.map((vector, vectorIndex) => (
                    <div key={vectorIndex} className="flex items-center justify-between text-sm">
                      <span className="text-gray-700">{vector.name}</span>
                      <span className="font-semibold text-brand-blue">{vector.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IEHWSPathfinder;

