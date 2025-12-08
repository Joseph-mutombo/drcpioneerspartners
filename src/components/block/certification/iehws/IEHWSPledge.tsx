import { useTranslation } from 'react-i18next';
import { Heart, Handshake, Users, CheckCircle, ArrowRight } from 'lucide-react';

const IEHWSPledge = () => {
  const { t } = useTranslation();

  const pledgePoints = [
    t('iehws_page.pledge.points.formal_promise'),
    t('iehws_page.pledge.points.declaration'),
    t('iehws_page.pledge.points.dedication'),
    t('iehws_page.pledge.points.commitment')
  ];

  const pledgeBenefits = [
    {
      icon: Heart,
      title: t('iehws_page.pledge.benefits.workplace.title'),
      description: t('iehws_page.pledge.benefits.workplace.description')
    },
    {
      icon: Users,
      title: t('iehws_page.pledge.benefits.morale.title'),
      description: t('iehws_page.pledge.benefits.morale.description')
    },
    {
      icon: Handshake,
      title: t('iehws_page.pledge.benefits.culture.title'),
      description: t('iehws_page.pledge.benefits.culture.description')
    }
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
            {t('iehws_page.pledge.title')}
          </h2>
          <p 
            className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="200"
          >
            {t('iehws_page.pledge.description')}
          </p>
        </div>

        {/* Qu'est-ce que le Pledge */}
        <div 
          className="bg-white rounded-2xl p-8 md:p-12 shadow-xl mb-16"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="400"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center">
              <Handshake className="w-7 h-7 text-brand-blue" />
            </div>
            <h3 className="text-3xl font-bold text-brand-blue">
              {t('iehws_page.pledge.what_is.title')}
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {pledgePoints.map((point, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 bg-gray-50 rounded-xl p-6 border border-gray-200"
              >
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <p className="text-gray-700 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-brand-blue to-blue-700 rounded-xl p-8 text-white">
            <h4 className="text-2xl font-bold mb-4">{t('iehws_page.pledge.goal.title')}</h4>
            <p className="text-white/90 text-lg leading-relaxed">
              {t('iehws_page.pledge.goal.description')}
            </p>
          </div>
        </div>

        {/* Bénéfices du Pledge */}
        <div 
          className="grid md:grid-cols-3 gap-8 mb-16"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="600"
        >
          {pledgeBenefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-blue/10 rounded-xl mb-6">
                  <Icon className="w-8 h-8 text-brand-blue" />
                </div>
                <h4 className="text-xl font-bold text-brand-blue mb-4">
                  {benefit.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div 
          className="bg-gradient-to-r from-brand-blue to-blue-700 rounded-2xl p-8 md:p-12 text-white text-center"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="800"
        >
          <div className="max-w-3xl mx-auto">
            <Heart className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              {t('iehws_page.pledge.cta.title')}
            </h3>
            <p className="text-white/90 text-lg mb-8 leading-relaxed">
              {t('iehws_page.pledge.cta.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IEHWSPledge;

