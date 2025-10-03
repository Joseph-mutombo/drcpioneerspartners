import { useTranslation } from 'react-i18next';
import { 
  Clock, 
  BookOpen, 
  Users, 
  Mail, 
  CheckCircle,
  Star,
  Target,
  Award,
  TrendingUp,
  Monitor
} from 'lucide-react';

const FormationComingSoon = () => {
  const { t } = useTranslation();

  const programs = [
    {
      code: 'CXOP',
      name: 'Customer Experience Officer Program',
      description: 'Programme fondamental pour maîtriser les bases de l\'expérience client.',
      icon: BookOpen,
      color: 'bg-blue-100 text-blue-600',
      status: 'En développement',
      progress: 80,
      expectedLaunch: 'Q2 2024'
    },
    {
      code: 'CXMP',
      name: 'Customer Experience Management Program',
      description: 'Programme avancé pour gérer l\'expérience client à l\'échelle organisationnelle.',
      icon: Target,
      color: 'bg-green-100 text-green-600',
      status: 'En développement',
      progress: 65,
      expectedLaunch: 'Q3 2024'
    },
    {
      code: 'CXLP',
      name: 'Customer Experience Leadership Program',
      description: 'Programme expert pour diriger la transformation CX.',
      icon: Award,
      color: 'bg-purple-100 text-purple-600',
      status: 'En développement',
      progress: 45,
      expectedLaunch: 'Q4 2024'
    },
    {
      code: 'MSC',
      name: 'Masterclass Spécialisées',
      description: 'Sessions intensives sur des sujets spécialisés de l\'expérience client.',
      icon: Star,
      color: 'bg-orange-100 text-orange-600',
      status: 'En développement',
      progress: 30,
      expectedLaunch: 'Q1 2025'
    }
  ];

  const developmentPhases = [
    {
      phase: 'Conception du Programme',
      description: 'Définition des objectifs pédagogiques et du contenu de formation',
      icon: BookOpen,
      status: 'completed'
    },
    {
      phase: 'Développement du Contenu',
      description: 'Création des modules de formation et des ressources pédagogiques',
      icon: Target,
      status: 'in-progress'
    },
    {
      phase: 'Tests & Validation',
      description: 'Tests avec des groupes pilotes et validation par des experts',
      icon: CheckCircle,
      status: 'pending'
    },
    {
      phase: 'Lancement Officiel',
      description: 'Mise en ligne des programmes et ouverture des inscriptions',
      icon: Award,
      status: 'pending'
    }
  ];

  const features = [
    {
      icon: Users,
      title: 'Formation Interactive',
      description: 'Sessions dynamiques avec exercices pratiques et cas d\'étude réels',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Monitor,
      title: 'Plateforme Moderne',
      description: 'Interface intuitive et ressources accessibles 24/7',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Award,
      title: 'Certification Reconnue',
      description: 'Certifications professionnelles valorisées par les employeurs',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: TrendingUp,
      title: 'Suivi Personnalisé',
      description: 'Accompagnement individuel et suivi des progrès',
      color: 'bg-orange-100 text-orange-600'
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        {/* En-tête */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-100 rounded-full mb-6">
            <Clock className="w-10 h-10 text-yellow-600" />
          </div>
          
          <h2 
            className="text-4xl font-bold text-gray-900 mb-6"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            Programmes en Cours de Développement
          </h2>
          
          <p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="200"
          >
            Nos équipes d'experts travaillent actuellement sur le développement de nos programmes de formation. 
            Chaque programme est soigneusement conçu pour répondre aux besoins du marché et aux standards internationaux.
          </p>
        </div>

        {/* Grille des programmes en développement */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <div
                key={program.code}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay={index * 100}
              >
                {/* En-tête du programme */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${program.color} flex-shrink-0`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-gray-900">{program.code}</h3>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        <Clock className="w-3 h-3 mr-1" />
                        {program.status}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-2">
                      {program.name}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {program.description}
                    </p>
                  </div>
                </div>

                {/* Barre de progression */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Progression</span>
                    <span className="text-sm text-gray-500">{program.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-brand-blue h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${program.progress}%` }}
                    ></div>
                  </div>
                </div>

                {/* Informations */}
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>Lancement prévu : <strong>{program.expectedLaunch}</strong></span>
                  <button 
                    disabled
                    className="text-brand-blue hover:text-blue-700 font-medium cursor-not-allowed opacity-50"
                  >
                    En savoir plus
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Fonctionnalités à venir */}
        <div 
          className="mb-16"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="400"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Fonctionnalités à Venir
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div 
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 text-center hover:bg-gray-100 transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay={600 + index * 100}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${feature.color} mb-4`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Phases de développement */}
        <div 
          className="bg-gray-50 rounded-2xl p-8 mb-16"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="600"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Notre Processus de Développement
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {developmentPhases.map((phase, index) => {
              const IconComponent = phase.icon;
              const getStatusColor = (status: string) => {
                switch (status) {
                  case 'completed':
                    return 'bg-green-100 text-green-600';
                  case 'in-progress':
                    return 'bg-yellow-100 text-yellow-600';
                  case 'pending':
                    return 'bg-gray-100 text-gray-600';
                  default:
                    return 'bg-gray-100 text-gray-600';
                }
              };
              
              return (
                <div 
                  key={index}
                  className="text-center"
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay={800 + index * 100}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${getStatusColor(phase.status)} mb-4`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {phase.phase}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {phase.description}
                  </p>
                  <div className="mt-3">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      phase.status === 'completed' ? 'bg-green-100 text-green-800' :
                      phase.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {phase.status === 'completed' ? 'Terminé' :
                       phase.status === 'in-progress' ? 'En cours' :
                       'À venir'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Newsletter et contact */}
        <div 
          className="bg-gradient-to-r from-brand-blue to-blue-600 rounded-2xl p-8 md:p-12 text-white text-center"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="800"
        >
          <h3 className="text-3xl font-bold mb-6">
            Restez informé du lancement
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Inscrivez-vous à notre liste d'attente pour être parmi les premiers informés 
            du lancement de nos programmes de formation.
          </p>
          
          <div className="max-w-md mx-auto flex gap-4 mb-8">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
            <button className="px-6 py-3 bg-yellow-600 text-brand-blue font-semibold rounded-lg hover:bg-yellow-700 transition-colors duration-200">
              S'inscrire
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-colors duration-200">
              <Mail className="w-4 h-4" />
              Nous contacter
            </button>
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-colors duration-200">
              <BookOpen className="w-4 h-4" />
              Télécharger le prospectus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormationComingSoon;