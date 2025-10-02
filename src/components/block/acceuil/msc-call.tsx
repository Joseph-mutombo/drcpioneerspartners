import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, BookOpen, Award, Globe, Users, Star, Trophy } from 'lucide-react';

const MSCCall = () => {
  const { t } = useTranslation();
  
  // Navigation vers la page du programme MSc
  // const handleMSCClick = () => {
  //   console.log('Navigation vers le programme MSc');
  // };

  const academicPartners = [
    { 
      name: 'Al-Maktoum College', 
      location: 'Émirats Arabes Unis',
      specialty: 'Excellence Académique'
    },
    { 
      name: 'Abertay University', 
      location: 'Écosse, Royaume-Uni',
      specialty: 'Innovation Pédagogique'
    }
  ];

  const programHighlights = [
    { 
      icon: GraduationCap, 
      title: 'Diplôme International', 
      description: 'Reconnaissance mondiale du diplôme',
      color: 'from-indigo-500 to-purple-500'
    },
    { 
      icon: BookOpen, 
      title: 'Curriculum Expert', 
      description: 'Contenu de pointe en CX & Service',
      color: 'from-blue-500 to-indigo-500'
    },
    { 
      icon: Users, 
      title: 'Réseau International', 
      description: 'Connexions professionnelles globales',
      color: 'from-purple-500 to-pink-500'
    },
    { 
      icon: Trophy, 
      title: 'Leadership RDC', 
      description: 'Formation des leaders de demain',
      color: 'from-amber-500 to-orange-500'
    }
  ];

  const achievements = [
    { metric: '98%', label: 'Taux de Réussite', icon: '🎯' },
    { metric: '15+', label: 'Pays Représentés', icon: '🌍' },
    { metric: '500+', label: 'Diplômés Alumni', icon: '👥' },
    { metric: '4.9★', label: 'Satisfaction', icon: '⭐' }
  ];

  return (
    <section className="py-16 bg-brand-blue">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              {t('services.msc_program.title')}
            </h2>
            <p className="text-lg text-white/90 max-w-4xl mx-auto">
              {t('services.msc_program.description')}
            </p>
          </div>

          {/* Academic Partners */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-white mb-6">Partenaires Académiques</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {academicPartners.map((partner, index) => (
                <div 
                  key={partner.name}
                  className="bg-white/10 rounded-lg p-6 border border-white/20 text-center"
                >
                  <Globe className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
                  <h4 className="font-bold text-white text-lg mb-2">{partner.name}</h4>
                  <p className="text-white/80 text-sm mb-1">{partner.location}</p>
                  <p className="text-yellow-500 text-sm">{partner.specialty}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Program Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {programHighlights.map((highlight, index) => (
              <div 
                key={highlight.title}
                className="bg-white/10 rounded-lg p-6 border border-white/20 text-center"
              >
                <highlight.icon className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
                <h3 className="font-bold text-white text-lg mb-2">{highlight.title}</h3>
                <p className="text-white/80 text-sm">{highlight.description}</p>
              </div>
            ))}
          </div>

          {/* Achievement Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {achievements.map((achievement, index) => (
              <div 
                key={achievement.label}
                className="text-center"
              >
                <div className="text-4xl font-bold text-yellow-500 mb-2">{achievement.metric}</div>
                <p className="text-white/90">{achievement.label}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              to="/formations#msc"
              className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-brand-blue px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              <span>{t('services.msc_program.cta')}</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MSCCall;
