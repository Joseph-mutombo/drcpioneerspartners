import { useTranslation } from 'react-i18next';
import { 
  FileText, 
  Smartphone, 
  Package, 
  Workflow, 
  Users, 
  BarChart3, 
  TrendingUp,
  CheckCircle
} from 'lucide-react';

const IDCXSElements = () => {
  const { t } = useTranslation();

  const elements = [
    {
      id: 'policies',
      icon: FileText,
      color: 'bg-blue-100 text-blue-600',
      title: t('idcxs_page.elements.policies.title'),
      description: t('idcxs_page.elements.policies.description'),
      points: [
        t('idcxs_page.elements.policies.point1'),
        t('idcxs_page.elements.policies.point2'),
        t('idcxs_page.elements.policies.point3')
      ]
    },
    {
      id: 'channels',
      icon: Smartphone,
      color: 'bg-green-100 text-green-600',
      title: t('idcxs_page.elements.channels.title'),
      description: t('idcxs_page.elements.channels.description'),
      points: [
        t('idcxs_page.elements.channels.point1'),
        t('idcxs_page.elements.channels.point2'),
        t('idcxs_page.elements.channels.point3')
      ]
    },
    {
      id: 'products',
      icon: Package,
      color: 'bg-purple-100 text-purple-600',
      title: t('idcxs_page.elements.products.title'),
      description: t('idcxs_page.elements.products.description'),
      points: [
        t('idcxs_page.elements.products.point1'),
        t('idcxs_page.elements.products.point2'),
        t('idcxs_page.elements.products.point3')
      ]
    },
    {
      id: 'processes',
      icon: Workflow,
      color: 'bg-orange-100 text-orange-600',
      title: t('idcxs_page.elements.processes.title'),
      description: t('idcxs_page.elements.processes.description'),
      points: [
        t('idcxs_page.elements.processes.point1'),
        t('idcxs_page.elements.processes.point2'),
        t('idcxs_page.elements.processes.point3')
      ]
    },
    {
      id: 'people',
      icon: Users,
      color: 'bg-pink-100 text-pink-600',
      title: t('idcxs_page.elements.people.title'),
      description: t('idcxs_page.elements.people.description'),
      points: [
        t('idcxs_page.elements.people.point1'),
        t('idcxs_page.elements.people.point2'),
        t('idcxs_page.elements.people.point3')
      ]
    },
    {
      id: 'measurement',
      icon: BarChart3,
      color: 'bg-indigo-100 text-indigo-600',
      title: t('idcxs_page.elements.measurement.title'),
      description: t('idcxs_page.elements.measurement.description'),
      points: [
        t('idcxs_page.elements.measurement.point1'),
        t('idcxs_page.elements.measurement.point2'),
        t('idcxs_page.elements.measurement.point3')
      ]
    },
    {
      id: 'results',
      icon: TrendingUp,
      color: 'bg-yellow-100 text-yellow-600',
      title: t('idcxs_page.elements.results.title'),
      description: t('idcxs_page.elements.results.description'),
      points: [
        t('idcxs_page.elements.results.point1'),
        t('idcxs_page.elements.results.point2'),
        t('idcxs_page.elements.results.point3')
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
            {t('idcxs_page.elements.title')}
          </h2>
          <p 
            className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="200"
          >
            {t('idcxs_page.elements.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                
                <p className="text-gray-600 mb-6 leading-relaxed">
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

export default IDCXSElements;

