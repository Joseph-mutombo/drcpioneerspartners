import { useTranslation } from 'react-i18next';
import { 
  Shield, 
  Home, 
  Briefcase, 
  Users, 
  Target, 
  Award,
  BarChart3, 
  TrendingUp,
  CheckCircle
} from 'lucide-react';

const IEHWSElements = () => {
  const { t } = useTranslation();

  const elements = [
    {
      id: 'leadership',
      icon: Shield,
      color: 'bg-blue-100 text-blue-600',
      title: t('iehws_page.elements.leadership.title'),
      description: t('iehws_page.elements.leadership.description'),
      points: [
        t('iehws_page.elements.leadership.point1'),
        t('iehws_page.elements.leadership.point2'),
        t('iehws_page.elements.leadership.point3')
      ]
    },
    {
      id: 'environment',
      icon: Home,
      color: 'bg-green-100 text-green-600',
      title: t('iehws_page.elements.environment.title'),
      description: t('iehws_page.elements.environment.description'),
      points: [
        t('iehws_page.elements.environment.point1'),
        t('iehws_page.elements.environment.point2'),
        t('iehws_page.elements.environment.point3')
      ]
    },
    {
      id: 'career',
      icon: Briefcase,
      color: 'bg-purple-100 text-purple-600',
      title: t('iehws_page.elements.career.title'),
      description: t('iehws_page.elements.career.description'),
      points: [
        t('iehws_page.elements.career.point1'),
        t('iehws_page.elements.career.point2'),
        t('iehws_page.elements.career.point3')
      ]
    },
    {
      id: 'teamwork',
      icon: Users,
      color: 'bg-orange-100 text-orange-600',
      title: t('iehws_page.elements.teamwork.title'),
      description: t('iehws_page.elements.teamwork.description'),
      points: [
        t('iehws_page.elements.teamwork.point1'),
        t('iehws_page.elements.teamwork.point2'),
        t('iehws_page.elements.teamwork.point3')
      ]
    },
    {
      id: 'effectiveness',
      icon: Target,
      color: 'bg-pink-100 text-pink-600',
      title: t('iehws_page.elements.effectiveness.title'),
      description: t('iehws_page.elements.effectiveness.description'),
      points: [
        t('iehws_page.elements.effectiveness.point1'),
        t('iehws_page.elements.effectiveness.point2'),
        t('iehws_page.elements.effectiveness.point3')
      ]
    },
    {
      id: 'reward',
      icon: Award,
      color: 'bg-yellow-100 text-yellow-600',
      title: t('iehws_page.elements.reward.title'),
      description: t('iehws_page.elements.reward.description'),
      points: [
        t('iehws_page.elements.reward.point1'),
        t('iehws_page.elements.reward.point2'),
        t('iehws_page.elements.reward.point3')
      ]
    },
    {
      id: 'measurement',
      icon: BarChart3,
      color: 'bg-indigo-100 text-indigo-600',
      title: t('iehws_page.elements.measurement.title'),
      description: t('iehws_page.elements.measurement.description'),
      points: [
        t('iehws_page.elements.measurement.point1'),
        t('iehws_page.elements.measurement.point2'),
        t('iehws_page.elements.measurement.point3')
      ]
    },
    {
      id: 'results',
      icon: TrendingUp,
      color: 'bg-red-100 text-red-600',
      title: t('iehws_page.elements.results.title'),
      description: t('iehws_page.elements.results.description'),
      points: [
        t('iehws_page.elements.results.point1'),
        t('iehws_page.elements.results.point2'),
        t('iehws_page.elements.results.point3')
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-brand-blue mb-6"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            {t('iehws_page.elements.title')}
          </h2>
          <p 
            className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="200"
          >
            {t('iehws_page.elements.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {elements.map((element, index) => {
            const Icon = element.icon;
            return (
              <div 
                key={element.id}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay={index * 100}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 ${element.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl font-bold text-brand-blue mb-4">
                  {element.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  {element.description}
                </p>
                
                <ul className="space-y-3">
                  {element.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IEHWSElements;

