import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, BookOpen, Monitor, Award, TrendingUp, Clock } from 'lucide-react';

const FormationCall = () => {
  const { t } = useTranslation();
  
  // Navigation vers la page des programmes de formation
  // const handleProgramsClick = () => {
  //   console.log('Navigation vers les programmes de formation');
  // };

  const programs = [
    { 
      code: 'CXOP', 
      name: 'Customer Experience Officer Program', 
      duration: '3 jours',
      level: 'Fondamental'
    },
    { 
      code: 'CXMP', 
      name: 'Customer Experience Management Program', 
      duration: '5 jours',
      level: 'Avancé'
    },
    { 
      code: 'CXLP', 
      name: 'Customer Experience Leadership Program', 
      duration: '7 jours',
      level: 'Expert'
    },
    { 
      code: 'MSC', 
      name: 'Masterclass Spécialisées', 
      duration: '1-2 jours',
      level: 'Spécialisé'
    }
  ];

  const benefits = [
    { icon: Users, text: 'Formation en RDC', color: 'text-yellow-500' },
    { icon: Award, text: 'Certification Internationale', color: 'text-brand-blue-light' },
    { icon: TrendingUp, text: 'Développement Professionnel', color: 'text-yellow-500' },
    { icon: Monitor, text: 'Méthodes Modernes', color: 'text-brand-blue-light' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-brand-blue mb-4">
              {t('services.formations.title')}
            </h2>
            <p className="text-lg text-brand-blue/80 max-w-4xl mx-auto">
              {t('services.formations.description')}
            </p>
          </div>

            {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {programs.map((program, index) => (
                <div 
                  key={program.code}
                className="bg-brand-gray rounded-lg p-6 border border-brand-gray-dark text-center"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-bold text-brand-blue text-xl">{program.code}</span>
                  <span className="text-xs bg-yellow-500 text-brand-blue px-2 py-1 rounded font-medium">
                        {program.level}
                      </span>
                    </div>
                <h3 className="font-semibold text-brand-blue text-sm mb-2">
                      {program.name}
                    </h3>
                <div className="flex items-center justify-center space-x-2 text-brand-blue/70">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{program.duration}</span>
                  </div>
                </div>
              ))}
            </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <Users className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              <p className="text-brand-blue font-semibold">Formation en RDC</p>
            </div>
            <div className="text-center">
              <Award className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              <p className="text-brand-blue font-semibold">Certification Internationale</p>
            </div>
                <div className="text-center">
              <div className="text-3xl font-bold text-brand-blue mb-2">{t('services.formations.stats.participants')}</div>
              <p className="text-brand-blue/80">Participants Formés</p>
              </div>
                <div className="text-center">
              <div className="text-3xl font-bold text-brand-blue mb-2">{t('services.formations.stats.satisfaction')}</div>
              <p className="text-brand-blue/80">Satisfaction</p>
          </div>
        </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              to="/formations"
              className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-brand-blue px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              <span>{t('services.formations.cta')}</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormationCall;
