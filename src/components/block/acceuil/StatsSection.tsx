import React from 'react';
import { 
  Building2, 
  Users, 
  Award, 
  Globe, 
  TrendingUp, 
  CheckCircle,
  Star,
  Target
} from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: Building2,
      value: "500+",
      label: "Entreprises Accompagnées",
      description: "En République Démocratique du Congo",
      color: "from-brand-blue to-blue-600"
    },
    {
      icon: Users,
      value: "2,500+",
      label: "Professionnels Formés",
      description: "Experts certifiés en Customer Experience",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: Award,
      value: "98%",
      label: "Taux de Satisfaction",
      description: "Clients satisfaits de nos services",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Globe,
      value: "50+",
      label: "Pays de Reconnaissance",
      description: "Standards reconnus internationalement",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: TrendingUp,
      value: "35%",
      label: "Amélioration Moyenne",
      description: "Des performances client après certification",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: CheckCircle,
      value: "15+",
      label: "Années d'Expérience",
      description: "Dans l'excellence de service",
      color: "from-pink-500 to-pink-600"
    }
  ];

  const achievements = [
    {
      title: "Certification BSI Validée",
      description: "Nos standards sont validés par le British Standards Institution",
      icon: Star
    },
    {
      title: "Partenaires Internationaux",
      description: "Collaboration avec des leaders mondiaux du secteur",
      icon: Globe
    },
    {
      title: "ROI Garanti",
      description: "Retour sur investissement mesurable et documenté",
      icon: Target
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 
              className="text-4xl lg:text-5xl font-bold text-brand-blue mb-6"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              Des Résultats qui Parlent
            </h2>
            <p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="200"
            >
              Plus de 15 ans d'excellence au service des entreprises congolaises. 
              Nos chiffres témoignent de notre expertise et de notre impact.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay={index * 100}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-brand-blue mb-1">{stat.value}</div>
                      <div className="text-lg font-semibold text-gray-900">{stat.label}</div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">{stat.description}</p>
                </div>
              );
            })}
          </div>

          {/* Achievements Section */}
          <div 
            className="bg-gradient-to-r from-brand-blue to-blue-600 rounded-3xl p-12 text-white"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="400"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">Notre Excellence Reconnue</h3>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Des certifications et partenariats qui attestent de la qualité de nos services
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <div 
                    key={index}
                    className="text-center group"
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-delay={600 + index * 100}
                  >
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-10 h-10 text-yellow-400" />
                    </div>
                    <h4 className="text-xl font-semibold mb-3">{achievement.title}</h4>
                    <p className="text-white/90 leading-relaxed">{achievement.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom CTA */}
          <div 
            className="text-center mt-16"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="800"
          >
            <p className="text-lg text-gray-600 mb-6">
              Rejoignez les entreprises qui font confiance à notre expertise
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-brand-blue font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Découvrir nos Services
              </button>
              <button className="px-8 py-4 border-2 border-brand-blue text-brand-blue font-semibold rounded-xl hover:bg-brand-blue hover:text-white transition-all duration-300">
                Télécharger notre Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
