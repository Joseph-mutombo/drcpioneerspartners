import { useTranslation } from 'react-i18next';
import { 
  MessageCircle, 
  FileText, 
  BookOpen, 
  CheckCircle, 
  Award,
  ArrowRight,
  Clock,
  Users,
  Target,
  Star,
  Monitor
} from 'lucide-react';

const FormationProcess = () => {
  const { t } = useTranslation();

  const steps = [
    {
      id: 1,
      title: 'Inscription & Évaluation',
      description: 'Inscrivez-vous au programme et passez une évaluation de vos compétences actuelles.',
      icon: MessageCircle,
      color: 'bg-blue-100 text-blue-600',
      details: [
        'Remplissage du formulaire d\'inscription',
        'Évaluation de vos compétences CX',
        'Définition de vos objectifs d\'apprentissage',
        'Planification personnalisée du parcours'
      ],
      duration: '1-2 semaines'
    },
    {
      id: 2,
      title: 'Formation & Apprentissage',
      description: 'Suivez les modules de formation adaptés à votre niveau et vos objectifs.',
      icon: BookOpen,
      color: 'bg-green-100 text-green-600',
      details: [
        'Accès aux ressources de formation',
        'Formation en ligne ou présentiel',
        'Exercices pratiques et cas d\'étude',
        'Support pédagogique continu'
      ],
      duration: '1-7 jours selon le programme'
    },
    {
      id: 3,
      title: 'Pratique & Application',
      description: 'Mettez en pratique vos acquis avec des projets concrets et des simulations.',
      icon: Target,
      color: 'bg-purple-100 text-purple-600',
      details: [
        'Projets pratiques en équipe',
        'Simulations de situations réelles',
        'Études de cas d\'entreprises',
        'Feedback personnalisé'
      ],
      duration: '2-4 semaines'
    },
    {
      id: 4,
      title: 'Évaluation & Certification',
      description: 'Passez l\'évaluation finale et obtenez votre certification professionnelle.',
      icon: Award,
      color: 'bg-orange-100 text-orange-600',
      details: [
        'Évaluation des compétences acquises',
        'Examen pratique et théorique',
        'Délivrance du certificat officiel',
        'Inscription au registre des certifiés'
      ],
      duration: '1-2 semaines'
    }
  ];

  const processFeatures = [
    {
      icon: Clock,
      title: 'Formation Flexible',
      description: 'Apprenez à votre rythme avec des formats adaptés à votre emploi du temps.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Users,
      title: 'Accompagnement Expert',
      description: 'Bénéficiez du support de nos formateurs certifiés tout au long de votre parcours.',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Target,
      title: 'Objectifs Personnalisés',
      description: 'Votre parcours est adapté à vos objectifs professionnels et votre niveau.',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Star,
      title: 'Certification Reconnue',
      description: 'Obtenez une certification reconnue dans le domaine de l\'expérience client.',
      color: 'bg-orange-100 text-orange-600'
    }
  ];

  const learningMethods = [
    {
      method: 'Formation Présentielle',
      description: 'Sessions en salle avec formateurs experts',
      icon: Users,
      duration: '3-7 jours',
      benefits: ['Interaction directe', 'Travail en équipe', 'Feedback immédiat']
    },
    {
      method: 'Formation en Ligne',
      description: 'Modules interactifs accessibles 24/7',
      icon: Monitor,
      duration: 'Flexible',
      benefits: ['Apprentissage autonome', 'Horaires flexibles', 'Ressources permanentes']
    },
    {
      method: 'Formation Hybride',
      description: 'Combinaison de présentiel et d\'e-learning',
      icon: BookOpen,
      duration: 'Variable',
      benefits: ['Meilleur des deux mondes', 'Adaptabilité', 'Efficacité optimale']
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl font-bold text-gray-900 mb-6"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            Votre Parcours de Formation
          </h2>
          <p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="200"
          >
            Découvrez comment nous vous accompagnons étape par étape pour développer 
            vos compétences en Customer Experience et obtenir votre certification.
          </p>
        </div>

        {/* Processus étape par étape */}
        <div className="relative mb-32">
          {/* Ligne de connexion */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-blue via-yellow-400 to-brand-blue"></div>
          
          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={step.id}
                  className="relative"
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay={index * 200}
                >
                  {/* Numéro de l'étape */}
                  <div className="flex items-center justify-center w-16 h-16 bg-brand-blue text-white rounded-full text-2xl font-bold mb-6 mx-auto relative z-10">
                    {step.id}
                  </div>

                  {/* Carte de l'étape */}
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 h-full">
                    {/* Icône */}
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${step.color} mb-4`}>
                      <IconComponent className="w-6 h-6" />
                    </div>

                    {/* Titre */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Détails */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Activités :</h4>
                      <ul className="space-y-1">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="text-sm text-gray-600 flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-brand-blue rounded-full mt-2 flex-shrink-0"></div>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Durée */}
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{step.duration}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Méthodes d'apprentissage */}
        <div 
          className="mb-16 mt-24"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="400"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Méthodes d'Apprentissage
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {learningMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay={600 + index * 100}
                >
                  <div className="text-center mb-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-blue/10 rounded-xl mb-4">
                      <IconComponent className="w-8 h-8 text-brand-blue" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      {method.method}
                    </h4>
                    <p className="text-gray-600 mb-4">
                      {method.description}
                    </p>
                    <div className="text-sm text-brand-blue font-semibold mb-4">
                      Durée : {method.duration}
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {method.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Fonctionnalités du processus */}
        <div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="600"
        >
          {processFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay={800 + index * 100}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${feature.color} mb-4`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Section avantages du processus */}
        <div 
          className="bg-gradient-to-r from-brand-blue to-blue-600 rounded-2xl p-8 md:p-12 text-white"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="800"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">
              Pourquoi choisir notre processus de formation ?
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                  <CheckCircle className="w-8 h-8 text-yellow-400" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Taux de réussite élevé</h4>
                <p className="text-white/90">
                  98% de nos participants obtiennent leur certification grâce à notre accompagnement personnalisé.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                  <Users className="w-8 h-8 text-yellow-400" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Communauté active</h4>
                <p className="text-white/90">
                  Rejoignez une communauté de plus de 500 professionnels formés dans le domaine CX.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                  <Award className="w-8 h-8 text-yellow-400" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Reconnaissance professionnelle</h4>
                <p className="text-white/90">
                  Vos certifications sont reconnues par les employeurs et valorisent votre expertise.
                </p>
              </div>
            </div>

            <div className="mt-12">
              <button className="group inline-flex items-center gap-2 px-8 py-4 bg-yellow-600 text-brand-blue font-semibold rounded-lg hover:bg-yellow-700 transition-all duration-200">
                <span>Commencer ma formation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormationProcess;
