import { useTranslation } from 'react-i18next';
import { BookOpen, Users, Award, Clock, TrendingUp, Monitor, CheckCircle } from 'lucide-react';
import formationHero from '@/assets/images/professor.png';

const FormationHero = () => {
  const { t } = useTranslation();
  const handleRequestService = (code: string) => {
    const element = document.getElementById(`${code.toLowerCase()}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const programs = [
    {
      code: 'CXOP',
      name: t('formations_page.hero.programs.cxop.name'),
      duration: t('formations_page.hero.programs.cxop.duration'),
      level: t('formations_page.hero.programs.cxop.level')
    },
    {
      code: 'CXMP',
      name: t('formations_page.hero.programs.cxmp.name'),
      duration: t('formations_page.hero.programs.cxmp.duration'),
      level: t('formations_page.hero.programs.cxmp.level')
    },
    {
      code: 'CXLP',
      name: t('formations_page.hero.programs.cxlp.name'),
      duration: t('formations_page.hero.programs.cxlp.duration'),
      level: t('formations_page.hero.programs.cxlp.level')
    },
    {
      code: 'MSC',
      name: t('formations_page.hero.programs.msc.name'),
      duration: t('formations_page.hero.programs.msc.duration'),
      level: t('formations_page.hero.programs.msc.level')
    }
  ];

  const benefits = [
    { icon: Users, text: t('formations_page.hero.benefits.training_rdc'), color: 'text-yellow-500' },
    { icon: Award, text: t('formations_page.hero.benefits.international_certification'), color: 'text-brand-blue' },
    { icon: TrendingUp, text: t('formations_page.hero.benefits.professional_development'), color: 'text-yellow-500' },
    { icon: Monitor, text: t('formations_page.hero.benefits.modern_methods'), color: 'text-brand-blue' }
  ];

  return (
    <div
      className="text-white overflow-hidden relative"
      style={{
        backgroundImage: 'linear-gradient(rgba(13, 27, 62, 0.9), rgba(13, 27, 62, 0.8)), url("' + formationHero + '")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-16 py-10">
        <div className="max-w-6xl mx-auto">
          {/* En-tête principal */}
          <div className=" mb-16">
            {/* <div 
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <BookOpen className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-medium">Programmes de Formation</span>
            </div> */}

            <h1
              className="text-5xl font-bold mb-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              {t('formations_page.hero.title')}
              <span className="block text-yellow-400">{t('formations_page.hero.subtitle')}</span>
            </h1>

            <p
              className=" text-white/90 mb-8 max-w-4xl leading-relaxed"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="400"
            >
              {t('formations_page.hero.description')}
            </p>
          </div>

          {/* Grille des programmes */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="600"
          >
            {programs.map((program, index) => (
              <div
                key={program.code}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center hover:bg-white/20 transition-all duration-300 group"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay={800 + index * 100}
                onClick={() => handleRequestService(program.code)}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-bold text-yellow-400 text-xl">{program.code}</span>
                  <span className="text-xs bg-yellow-500 text-brand-blue px-2 py-1 rounded font-medium">
                    {program.level}
                  </span>
                </div>
                <h3 className="font-semibold text-white text-sm mb-2">
                  {program.name}
                </h3>
                <div className="flex items-center justify-center space-x-2 text-white/70">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{program.duration}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Statistiques */}
          {/* <div 
            className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="1000"
          >
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                <Users className="w-8 h-8 text-yellow-400" />
              </div>
              <div className="text-4xl font-bold text-yellow-500 mb-2">500+</div>
              <div className="text-white/90">Participants Formés</div>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                <Award className="w-8 h-8 text-yellow-400" />
              </div>
              <div className="text-4xl font-bold text-yellow-500 mb-2">98%</div>
              <div className="text-white/90">Satisfaction</div>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                <BookOpen className="w-8 h-8 text-yellow-400" />
              </div>
              <div className="text-4xl font-bold text-yellow-500 mb-2">4</div>
              <div className="text-white/90">Programmes Disponibles</div>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                <TrendingUp className="w-8 h-8 text-yellow-400" />
              </div>
              <div className="text-4xl font-bold text-yellow-500 mb-2">15+</div>
              <div className="text-white/90">Années d'Expérience</div>
            </div>
          </div> */}

          {/* Avantages */}
          {/* <div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="1200"
          >
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300"
                >
                  <IconComponent className={`w-8 h-8 ${benefit.color} mx-auto mb-3`} />
                  <p className="text-white font-semibold text-sm">{benefit.text}</p>
                </div>
              );
            })}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default FormationHero;