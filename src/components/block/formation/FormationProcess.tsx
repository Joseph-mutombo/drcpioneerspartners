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
      title: t('formations_page.process.step1.title'),
      description: t('formations_page.process.step1.description'),
      icon: MessageCircle,
      color: 'bg-blue-100 text-blue-600',
      details: [
        t('formations_page.process.step1.details.registration_form'),
        t('formations_page.process.step1.details.skills_assessment'),
        t('formations_page.process.step1.details.learning_objectives'),
        t('formations_page.process.step1.details.personalized_planning')
      ],
      duration: t('formations_page.process.step1.duration')
    },
    {
      id: 2,
      title: t('formations_page.process.step2.title'),
      description: t('formations_page.process.step2.description'),
      icon: BookOpen,
      color: 'bg-green-100 text-green-600',
      details: [
        t('formations_page.process.step2.details.training_resources'),
        t('formations_page.process.step2.details.online_or_presential'),
        t('formations_page.process.step2.details.practical_exercises'),
        t('formations_page.process.step2.details.continuous_support')
      ],
      duration: t('formations_page.process.step2.duration')
    },
    {
      id: 3,
      title: t('formations_page.process.step3.title'),
      description: t('formations_page.process.step3.description'),
      icon: Target,
      color: 'bg-purple-100 text-purple-600',
      details: [
        t('formations_page.process.step3.details.team_projects'),
        t('formations_page.process.step3.details.real_situations'),
        t('formations_page.process.step3.details.case_studies'),
        t('formations_page.process.step3.details.personalized_feedback')
      ],
      duration: t('formations_page.process.step3.duration')
    },
    {
      id: 4,
      title: t('formations_page.process.step4.title'),
      description: t('formations_page.process.step4.description'),
      icon: Award,
      color: 'bg-orange-100 text-orange-600',
      details: [
        t('formations_page.process.step4.details.skills_evaluation'),
        t('formations_page.process.step4.details.practical_theoretical_exam'),
        t('formations_page.process.step4.details.official_certificate'),
        t('formations_page.process.step4.details.certified_registry')
      ],
      duration: t('formations_page.process.step4.duration')
    }
  ];

  const processFeatures = [
    {
      icon: Clock,
      title: t('formations_page.process.features.flexible_training.title'),
      description: t('formations_page.process.features.flexible_training.description'),
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Users,
      title: t('formations_page.process.features.expert_support.title'),
      description: t('formations_page.process.features.expert_support.description'),
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Target,
      title: t('formations_page.process.features.personalized_goals.title'),
      description: t('formations_page.process.features.personalized_goals.description'),
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Star,
      title: t('formations_page.process.features.recognized_certification.title'),
      description: t('formations_page.process.features.recognized_certification.description'),
      color: 'bg-orange-100 text-orange-600'
    }
  ];

  const learningMethods = [
    {
      method: t('formations_page.process.methods.presential.method'),
      description: t('formations_page.process.methods.presential.description'),
      icon: Users,
      duration: t('formations_page.process.methods.presential.duration'),
      benefits: [
        t('formations_page.process.methods.presential.benefits.direct_interaction'),
        t('formations_page.process.methods.presential.benefits.team_work'),
        t('formations_page.process.methods.presential.benefits.immediate_feedback')
      ]
    },
    {
      method: t('formations_page.process.methods.online.method'),
      description: t('formations_page.process.methods.online.description'),
      icon: Monitor,
      duration: t('formations_page.process.methods.online.duration'),
      benefits: [
        t('formations_page.process.methods.online.benefits.autonomous_learning'),
        t('formations_page.process.methods.online.benefits.flexible_schedules'),
        t('formations_page.process.methods.online.benefits.permanent_resources')
      ]
    },
    {
      method: t('formations_page.process.methods.hybrid.method'),
      description: t('formations_page.process.methods.hybrid.description'),
      icon: BookOpen,
      duration: t('formations_page.process.methods.hybrid.duration'),
      benefits: [
        t('formations_page.process.methods.hybrid.benefits.best_of_both'),
        t('formations_page.process.methods.hybrid.benefits.adaptability'),
        t('formations_page.process.methods.hybrid.benefits.optimal_efficiency')
      ]
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
            {t('formations_page.process.title')}
          </h2>
          <p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="200"
          >
            {t('formations_page.process.description')}
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
          className="mb-16 mt-32"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="400"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            {t('formations_page.process.learning_methods.title')}
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
              {t('formations_page.process.advantages.title')}
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                  <CheckCircle className="w-8 h-8 text-yellow-400" />
                </div>
                <h4 className="text-xl font-semibold mb-2">{t('formations_page.process.advantages.high_success_rate.title')}</h4>
                <p className="text-white/90">
                  {t('formations_page.process.advantages.high_success_rate.description')}
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                  <Users className="w-8 h-8 text-yellow-400" />
                </div>
                <h4 className="text-xl font-semibold mb-2">{t('formations_page.process.advantages.active_community.title')}</h4>
                <p className="text-white/90">
                  {t('formations_page.process.advantages.active_community.description')}
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                  <Award className="w-8 h-8 text-yellow-400" />
                </div>
                <h4 className="text-xl font-semibold mb-2">{t('formations_page.process.advantages.professional_recognition.title')}</h4>
                <p className="text-white/90">
                  {t('formations_page.process.advantages.professional_recognition.description')}
                </p>
              </div>
            </div>

            <div className="mt-12">
              <button className="group inline-flex items-center gap-2 px-8 py-4 bg-yellow-600 text-brand-blue font-semibold rounded-lg hover:bg-yellow-700 transition-all duration-200">
                <span>{t('formations_page.process.start_training_button')}</span>
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
