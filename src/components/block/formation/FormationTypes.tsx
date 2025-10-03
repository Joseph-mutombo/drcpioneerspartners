import { useTranslation } from 'react-i18next';
import { 
  Building2, 
  Users, 
  CheckCircle, 
  ArrowRight,
  BookOpen,
  Clock,
  Award,
  Target,
  Monitor,
  Globe
} from 'lucide-react';

const FormationTypes = () => {
  const { t } = useTranslation();

  const enterpriseFeatures = [
    {
      icon: Building2,
      title: 'Formation sur Site',
      description: 'Formations personnalisées dans vos locaux pour vos équipes.',
      benefits: [
        'Formation adaptée à votre contexte',
        'Équipes formées ensemble',
        'Réduction des coûts de déplacement',
        'Intégration immédiate des apprentissages'
      ]
    },
    {
      icon: Users,
      title: 'Formation des Équipes',
      description: 'Programmes conçus pour développer les compétences collectives.',
      benefits: [
        'Cohésion d\'équipe renforcée',
        'Langage commun CX',
        'Collaboration améliorée',
        'Culture d\'entreprise unifiée'
      ]
    },
    {
      icon: Target,
      title: 'Accompagnement Personnalisé',
      description: 'Suivi individuel et collectif pour maximiser l\'impact.',
      benefits: [
        'Plan de formation sur mesure',
        'Mentoring personnalisé',
        'Suivi des progrès',
        'Support post-formation'
      ]
    }
  ];

  const individualFeatures = [
    {
      icon: BookOpen,
      title: 'Formation Individuelle',
      description: 'Développement personnel de vos compétences en CX.',
      benefits: [
        'Progression à votre rythme',
        'Focus sur vos besoins spécifiques',
        'Flexibilité des horaires',
        'Certification personnelle'
      ]
    },
    {
      icon: Clock,
      title: 'Formation Flexible',
      description: 'Formats adaptés à votre emploi du temps et vos contraintes.',
      benefits: [
        'Formation en ligne ou présentiel',
        'Horaires flexibles',
        'Accès aux ressources 24/7',
        'Support pédagogique continu'
      ]
    },
    {
      icon: Globe,
      title: 'Reconnaissance Internationale',
      description: 'Certifications reconnues dans le monde entier.',
      benefits: [
        'Validité internationale',
        'Reconnaissance par les employeurs',
        'Mobilité professionnelle',
        'Réseau international'
      ]
    }
  ];

  const comparisonData = [
    {
      feature: 'Format',
      enterprise: 'Sur site + En ligne',
      individual: 'En ligne + Présentiel optionnel'
    },
    {
      feature: 'Durée',
      enterprise: '3-7 jours par programme',
      individual: '1-7 jours selon le niveau'
    },
    {
      feature: 'Accompagnement',
      enterprise: 'Dédié + Suivi personnalisé',
      individual: 'Support communautaire + Tutorat'
    },
    {
      feature: 'Certification',
      enterprise: 'Certification d\'équipe + Individuelle',
      individual: 'Certification individuelle'
    },
    {
      feature: 'Prix',
      enterprise: 'Sur devis (volume)',
      individual: 'Tarif individuel'
    },
    {
      feature: 'Support',
      enterprise: '24/7 + Hotline dédiée',
      individual: 'Email + Forum communautaire'
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
            Formation pour Tous
          </h2>
          <p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="200"
          >
            Que vous soyez un particulier souhaitant développer vos compétences ou une entreprise 
            cherchant à former vos équipes, nous avons la solution adaptée à vos besoins.
          </p>
        </div>

        {/* Types de formation */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Entreprises */}
          <div 
            className="bg-brand-blue rounded-2xl p-8 text-white"
            data-aos="fade-right"
            data-aos-duration="600"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-xl">
                <Building2 className="w-8 h-8 text-yellow-400" />
              </div>
              <div>
                <h3 className="text-3xl font-bold">Pour Entreprises</h3>
                <p className="text-white/90">Solutions complètes pour votre organisation</p>
              </div>
            </div>

            <div className="space-y-6 mb-8">
              {enterpriseFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-400/20 rounded-lg flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-yellow-400" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                        <p className="text-white/90 mb-3">{feature.description}</p>
                        <ul className="space-y-1">
                          {feature.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center gap-2 text-sm text-white/90">
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <button className="w-full group flex items-center justify-center gap-2 px-8 py-4 bg-yellow-500 text-brand-blue font-semibold rounded-lg hover:bg-yellow-600 transition-all duration-200">
              <span>Demander un devis entreprise</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>

          {/* Particuliers */}
          <div 
            className="bg-gray-50 rounded-2xl p-8 border border-gray-200"
            data-aos="fade-left"
            data-aos-duration="600"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-blue/10 rounded-xl">
                <Users className="w-8 h-8 text-brand-blue" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">Pour Particuliers</h3>
                <p className="text-gray-600">Développez vos compétences personnelles</p>
              </div>
            </div>

            <div className="space-y-6 mb-8">
              {individualFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                    <div className="flex items-start gap-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-blue/10 rounded-lg flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-brand-blue" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h4>
                        <p className="text-gray-600 mb-3">{feature.description}</p>
                        <ul className="space-y-1">
                          {feature.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center gap-2 text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <button className="w-full group flex items-center justify-center gap-2 px-8 py-4 bg-brand-blue text-white font-semibold rounded-lg hover:bg-yellow-600 transition-all duration-200">
              <span>S'inscrire en tant que particulier</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </div>

        {/* Tableau comparatif */}
        <div 
          className="bg-gray-50 rounded-2xl p-8"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="400"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Comparaison des Offres
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Fonctionnalités</th>
                  <th className="text-center py-4 px-6 font-semibold text-brand-blue">Entreprises</th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-600">Particuliers</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-white/50 transition-colors duration-200">
                    <td className="py-4 px-6 font-medium text-gray-900">{row.feature}</td>
                    <td className="py-4 px-6 text-center text-gray-700">{row.enterprise}</td>
                    <td className="py-4 px-6 text-center text-gray-700">{row.individual}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-6">
              Besoin d'aide pour choisir la solution qui vous convient ?
            </p>
            <button className="px-8 py-3 bg-brand-blue text-white font-semibold rounded-lg hover:bg-yellow-600 transition-colors duration-200">
              Consulter un expert
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormationTypes;
