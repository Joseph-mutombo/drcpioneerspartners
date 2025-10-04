import { useTranslation } from 'react-i18next';
import { 
  MessageCircle, 
  FileText, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Calendar,
  Clock
} from 'lucide-react';

const AuditProcess = () => {
  const { t } = useTranslation();

  const steps = [
    {
      id: 1,
      title: t('audit_page.process.step1.title'),
      description: t('audit_page.process.step1.description'),
      icon: MessageCircle,
      color: 'bg-blue-100 text-blue-600',
      details: [
        t('audit_page.process.step1.details.request_analysis'),
        t('audit_page.process.step1.details.needs_assessment'),
        t('audit_page.process.step1.details.scope_definition'),
        t('audit_page.process.step1.details.methodology_presentation')
      ],
      duration: t('audit_page.process.step1.duration')
    },
    {
      id: 2,
      title: t('audit_page.process.step2.title'),
      description: t('audit_page.process.step2.description'),
      icon: FileText,
      color: 'bg-green-100 text-green-600',
      details: [
        t('audit_page.process.step2.details.audit_plan'),
        t('audit_page.process.step2.details.document_preparation'),
        t('audit_page.process.step2.details.appointment_planning'),
        t('audit_page.process.step2.details.team_training')
      ],
      duration: t('audit_page.process.step2.duration')
    },
    {
      id: 3,
      title: t('audit_page.process.step3.title'),
      description: t('audit_page.process.step3.description'),
      icon: Users,
      color: 'bg-purple-100 text-purple-600',
      details: [
        t('audit_page.process.step3.details.on_site_audit'),
        t('audit_page.process.step3.details.staff_interviews'),
        t('audit_page.process.step3.details.process_verification'),
        t('audit_page.process.step3.details.evidence_collection')
      ],
      duration: t('audit_page.process.step3.duration')
    },
    {
      id: 4,
      title: t('audit_page.process.step4.title'),
      description: t('audit_page.process.step4.description'),
      icon: CheckCircle,
      color: 'bg-orange-100 text-orange-600',
      details: [
        t('audit_page.process.step4.details.data_analysis'),
        t('audit_page.process.step4.details.improvement_points'),
        t('audit_page.process.step4.details.final_report'),
        t('audit_page.process.step4.details.personalized_recommendations')
      ],
      duration: t('audit_page.process.step4.duration')
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl font-bold text-gray-900 mb-6"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            {t('audit_page.process.title')}
          </h2>
          <p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="200"
          >
            {t('audit_page.process.description')}
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

        {/* Section avantages du processus */}
        <div 
          className="bg-gradient-to-r from-brand-blue to-blue-600 rounded-2xl p-8 md:p-12 text-white mt-24"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="600"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">
              Pourquoi choisir notre processus ?
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                  <Calendar className="w-8 h-8 text-yellow-400" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Planification rigoureuse</h4>
                <p className="text-white/90">
                  Chaque étape est soigneusement planifiée pour optimiser votre temps et nos ressources.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                  <Users className="w-8 h-8 text-yellow-400" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Équipe experte</h4>
                <p className="text-white/90">
                  Nos auditeurs certifiés possèdent une expertise reconnue dans leur domaine.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                  <CheckCircle className="w-8 h-8 text-yellow-400" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Résultats garantis</h4>
                <p className="text-white/90">
                  Nous nous engageons à vous fournir des recommandations concrètes et applicables.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditProcess;
