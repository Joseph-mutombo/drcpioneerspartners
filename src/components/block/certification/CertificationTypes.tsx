import { useTranslation } from 'react-i18next';
import { 
  Building2, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Award,
  Globe,
  Target,
  Clock,
  Shield,
  Star
} from 'lucide-react';

const CertificationTypes = () => {
  const { t } = useTranslation();

  const enterpriseFeatures = [
    {
      icon: Building2,
      title: 'Certification Organisationnelle',
      description: 'Certifiez votre entreprise entière selon nos standards d\'excellence reconnus internationalement.',
      benefits: [
        'Reconnaissance de votre excellence organisationnelle',
        'Amélioration de votre image de marque',
        'Différenciation concurrentielle',
        'Accès à de nouveaux marchés'
      ]
    },
    {
      icon: Users,
      title: 'Formation des Équipes',
      description: 'Formez vos employés aux meilleures pratiques et obtenez des certifications individuelles.',
      benefits: [
        'Développement des compétences de vos équipes',
        'Amélioration de la performance collective',
        'Réduction du turnover',
        'Culture d\'entreprise renforcée'
      ]
    },
    {
      icon: Target,
      title: 'Accompagnement Personnalisé',
      description: 'Bénéficiez d\'un accompagnement sur mesure pour réussir votre certification.',
      benefits: [
        'Plan de certification adapté à vos besoins',
        'Formation en interne ou externe',
        'Suivi personnalisé par nos experts',
        'Support technique dédié'
      ]
    }
  ];

  const individualFeatures = [
    {
      icon: Award,
      title: 'Certification Individuelle',
      description: 'Développez vos compétences personnelles et obtenez une certification reconnue.',
      benefits: [
        'Valorisation de votre CV',
        'Reconnaissance de votre expertise',
        'Nouvelles opportunités professionnelles',
        'Confiance en vos compétences'
      ]
    },
    {
      icon: Clock,
      title: 'Formation Flexible',
      description: 'Apprenez à votre rythme avec des formats adaptés à votre emploi du temps.',
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
      description: 'Obtenez une certification reconnue dans plus de 50 pays à travers le monde.',
      benefits: [
        'Validité internationale',
        'Reconnaissance par les employeurs',
        'Mobilité professionnelle facilitée',
        'Réseau international de professionnels'
      ]
    }
  ];

  const comparisonData = [
    {
      feature: 'Certification',
      enterprise: 'Organisationnelle + Individuelle',
      individual: 'Individuelle uniquement'
    },
    {
      feature: 'Formation',
      enterprise: 'Sur site + En ligne',
      individual: 'En ligne + Présentiel optionnel'
    },
    {
      feature: 'Accompagnement',
      enterprise: 'Dédié + Suivi personnalisé',
      individual: 'Support communautaire + Tutorat'
    },
    {
      feature: 'Durée',
      enterprise: '6-12 mois',
      individual: '3-6 mois'
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
            Certification pour Tous
          </h2>
          <p 
            className=" text-gray-600 max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="200"
          >
            Que vous soyez un particulier souhaitant développer vos compétences ou une entreprise 
            cherchant à certifier votre organisation, nous avons la solution adaptée à vos besoins.
          </p>
        </div>

        {/* Types de certification */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Entreprises */}
          <div 
            className="bg-brand-blue to-blue-600 rounded-2xl p-8 text-white"
            data-aos="fade-right"
            data-aos-duration="600"
          >
            <div className="flex items-center gap-4 mb-8">
              {/* <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-xl">
                <Building2 className="w-8 h-8 text-yellow-400" />
              </div> */}
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
              {/* <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-xl">
                <Users className="w-8 h-8 text-yellow-400" />
              </div> */}
              <div>
                <h3 className="text-3xl font-bold">Pour Particuliers</h3>
                <p className="text-gray-600">Développez vos compétences personnelles</p>
              </div>
            </div>

            <div className="space-y-6 mb-8">
              {individualFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="bg-gray-100 backdrop-blur-sm rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-400/20 rounded-lg flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-yellow-400" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                        <p className="text-gray-600 mb-3">{feature.description}</p>
                        <ul className="space-y-1">
                          {feature.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center gap-2 text-sm text-gray-600">
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
                  <th className="text-center py-4 px-6 font-semibold text-green-600">Particuliers</th>
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

export default CertificationTypes;
