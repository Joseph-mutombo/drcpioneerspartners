import { useTranslation } from 'react-i18next';
import { 
  TrendingUp, 
  Users, 
  Award, 
  Target, 
  Heart, 
  BarChart3,
  Shield,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const IEHWSBenefits = () => {
  const { t } = useTranslation();

  const benefits = [
    {
      icon: Shield,
      title: t('iehws_page.benefits.confidence.title'),
      description: t('iehws_page.benefits.confidence.description'),
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Heart,
      title: t('iehws_page.benefits.happiness.title'),
      description: t('iehws_page.benefits.happiness.description'),
      color: 'bg-pink-100 text-pink-600'
    },
    {
      icon: TrendingUp,
      title: t('iehws_page.benefits.experience.title'),
      description: t('iehws_page.benefits.experience.description'),
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Target,
      title: t('iehws_page.benefits.measurable.title'),
      description: t('iehws_page.benefits.measurable.description'),
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Users,
      title: t('iehws_page.benefits.engagement.title'),
      description: t('iehws_page.benefits.engagement.description'),
      color: 'bg-orange-100 text-orange-600'
    },
    {
      icon: Award,
      title: t('iehws_page.benefits.stability.title'),
      description: t('iehws_page.benefits.stability.description'),
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      icon: BarChart3,
      title: t('iehws_page.benefits.voice.title'),
      description: t('iehws_page.benefits.voice.description'),
      color: 'bg-indigo-100 text-indigo-600'
    },
    {
      icon: Heart,
      title: t('iehws_page.benefits.reputation.title'),
      description: t('iehws_page.benefits.reputation.description'),
      color: 'bg-red-100 text-red-600'
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
            {t('iehws_page.benefits.title')}
          </h2>
          <p 
            className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="200"
          >
            {t('iehws_page.benefits.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay={index * 100}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 ${benefit.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl font-bold text-brand-blue mb-4">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div 
          className="bg-gradient-to-r from-brand-blue to-blue-700 rounded-2xl p-8 md:p-12 text-white text-center"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="800"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            {t('iehws_page.benefits.cta.title')}
          </h3>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            {t('iehws_page.benefits.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/certifications#form"
              className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition-colors duration-200"
            >
              {t('iehws_page.benefits.cta.request_certification')}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-brand-blue transition-colors duration-200"
            >
              {t('iehws_page.benefits.cta.contact_us')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IEHWSBenefits;

