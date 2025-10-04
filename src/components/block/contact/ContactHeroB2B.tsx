import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  Users,
  Award,
  CheckCircle
} from 'lucide-react';

const ContactHeroB2B = () => {
  const { t } = useTranslation();

  const contactMethods = [
    {
      icon: Phone,
      title: t('contact_page.hero.contact_methods.direct_call.title'),
      description: t('contact_page.hero.contact_methods.direct_call.description'),
      value: t('contact_page.hero.contact_methods.direct_call.value'),
      action: t('contact_page.hero.contact_methods.direct_call.action'),
      color: "from-green-500 to-green-600"
    },
    {
      icon: Mail,
      title: t('contact_page.hero.contact_methods.email.title'),
      description: t('contact_page.hero.contact_methods.email.description'),
      value: t('contact_page.hero.contact_methods.email.value'),
      action: t('contact_page.hero.contact_methods.email.action'),
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: MessageCircle,
      title: t('contact_page.hero.contact_methods.chat.title'),
      description: t('contact_page.hero.contact_methods.chat.description'),
      value: t('contact_page.hero.contact_methods.chat.value'),
      action: t('contact_page.hero.contact_methods.chat.action'),
      color: "from-purple-500 to-purple-600"
    }
  ];

  const whyContactUs = [
    {
      icon: Users,
      title: t('contact_page.hero.why_contact.team_experts.title'),
      description: t('contact_page.hero.why_contact.team_experts.description')
    },
    {
      icon: Award,
      title: t('contact_page.hero.why_contact.certifications.title'),
      description: t('contact_page.hero.why_contact.certifications.description')
    },
    {
      icon: CheckCircle,
      title: t('contact_page.hero.why_contact.results.title'),
      description: t('contact_page.hero.why_contact.results.description')
    }
  ];

  return (
    <div 
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(135deg, rgba(13, 27, 62, 0.95), rgba(13, 27, 62, 0.85)), url("https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 via-transparent to-yellow-500/10"></div>
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'2\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
      }}></div>

      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-16 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column - Content */}
            <div className="text-white">
              {/* Badge */}
              <div 
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8"
                data-aos="fade-up"
                data-aos-duration="600"
              >
                <MessageCircle className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-medium">{t('contact_page.hero.badge')}</span>
              </div>

              {/* Main Title */}
              <h1 
                className="text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                {t('contact_page.hero.title')}
                <span className="block text-yellow-400">{t('contact_page.hero.title_highlight')}</span>
                <span className="block text-3xl lg:text-4xl font-normal text-white/90 mt-2">
                  {t('contact_page.hero.subtitle')}
                </span>
              </h1>

              {/* Subtitle */}
              <p 
                className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="400"
              >
                {t('contact_page.hero.description')}
              </p>

              {/* Why Contact Us */}
              <div 
                className="grid grid-cols-1 gap-4 mb-8"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="600"
              >
                {whyContactUs.map((reason, index) => {
                  const IconComponent = reason.icon;
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-yellow-400/20 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-yellow-400" />
                      </div>
                      <div>
                        <div className="font-semibold text-white">{reason.title}</div>
                        <div className="text-sm text-white/70">{reason.description}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Contact Info */}
              <div 
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="800"
              >
                <div className="flex items-center gap-4 mb-4">
                  <MapPin className="w-6 h-6 text-yellow-400" />
                  <div>
                    <h3 className="font-semibold text-white">{t('contact_page.hero.office.title')}</h3>
                    <p 
                      className="text-white/80 text-sm"
                      dangerouslySetInnerHTML={{ __html: t('contact_page.hero.office.address') }}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Clock className="w-6 h-6 text-yellow-400" />
                  <div>
                    <h3 className="font-semibold text-white">{t('contact_page.hero.office.hours_title')}</h3>
                    <p 
                      className="text-white/80 text-sm"
                      dangerouslySetInnerHTML={{ __html: t('contact_page.hero.office.hours') }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Methods */}
            <div 
              className="relative"
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="400"
            >
              <div className="space-y-6">
                {contactMethods.map((method, index) => {
                  const IconComponent = method.icon;
                  return (
                    <div 
                      key={index}
                      className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-white mb-1">{method.title}</h3>
                          <p className="text-white/80 text-sm">{method.description}</p>
                        </div>
                      </div>
                      <div className="mb-4">
                        <p className="text-2xl font-bold text-yellow-400 mb-2">{method.value}</p>
                        <button className="text-white hover:text-yellow-400 transition-colors duration-300 font-semibold">
                          {method.action} →
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 fill-white">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default ContactHeroB2B;