import { useTranslation } from 'react-i18next';
import { 
  Shield, 
  FileText, 
  Users, 
  Target, 
  CheckCircle, 
  Clock,
  ArrowRight
} from 'lucide-react';

const AuditServices = () => {
  const { t } = useTranslation();

  const services = [
    {
      id: 'audit-qualite',
      title: 'Audit de Qualité',
      description: 'Évaluation complète de vos systèmes de management de la qualité selon les normes ISO 9001.',
      icon: Shield,
      color: 'bg-blue-100 text-blue-600',
      features: [
        'Analyse des processus existants',
        'Identification des non-conformités',
        'Recommandations d\'amélioration',
        'Plan d\'action personnalisé'
      ],
      duration: '2-5 jours',
      price: 'Sur devis'
    },
    {
      id: 'audit-environnement',
      title: 'Audit Environnemental',
      description: 'Vérification de la conformité environnementale et évaluation de l\'impact écologique.',
      icon: FileText,
      color: 'bg-green-100 text-green-600',
      features: [
        'Conformité ISO 14001',
        'Évaluation des risques environnementaux',
        'Optimisation des ressources',
        'Rapport détaillé'
      ],
      duration: '3-7 jours',
      price: 'Sur devis'
    },
    {
      id: 'audit-securite',
      title: 'Audit de Sécurité',
      description: 'Analyse de la sécurité au travail et conformité aux réglementations en vigueur.',
      icon: Target,
      color: 'bg-red-100 text-red-600',
      features: [
        'Évaluation des risques professionnels',
        'Conformité OHSAS 18001',
        'Formation du personnel',
        'Mise à jour des procédures'
      ],
      duration: '2-4 jours',
      price: 'Sur devis'
    },
    {
      id: 'consultation-strategique',
      title: 'Consultation Stratégique',
      description: 'Accompagnement dans la mise en place de systèmes de management intégrés.',
      icon: Users,
      color: 'bg-purple-100 text-purple-600',
      features: [
        'Stratégie de certification',
        'Formation des équipes',
        'Suivi et accompagnement',
        'Optimisation continue'
      ],
      duration: 'Variable',
      price: 'Sur devis'
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
            Nos Services d'Audit & Consultation
          </h2>
          <p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="200"
          >
            Découvrez notre gamme complète de services d'audit et de consultation 
            adaptés aux besoins spécifiques de votre entreprise.
          </p>
        </div>

        {/* Grille des services */}
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 group"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay={index * 100}
              >
                {/* En-tête du service */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${service.color} flex-shrink-0`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-brand-blue transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Fonctionnalités */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Ce qui est inclus :</h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Informations pratiques */}
                <div className="flex items-center justify-between mb-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{service.duration}</span>
                    </div>
                    <div className="text-sm font-semibold text-brand-blue">
                      {service.price}
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <button className="w-full group/btn flex items-center justify-center gap-2 px-6 py-3 bg-brand-blue text-white font-semibold rounded-lg hover:bg-yellow-600 transition-colors duration-200">
                  <span>Demander ce service</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Section CTA globale */}
        <div 
          className="mt-16 text-center"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="400"
        >
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Besoin d'un service personnalisé ?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Nos experts peuvent adapter nos services à vos besoins spécifiques. 
              Contactez-nous pour discuter de votre projet.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-brand-blue to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl">
              Demander une consultation personnalisée
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditServices;
