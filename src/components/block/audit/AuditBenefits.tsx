import { useTranslation } from 'react-i18next';
import { 
  TrendingUp, 
  Shield, 
  Users, 
  Target, 
  CheckCircle, 
  Award,
  BarChart3,
  Lightbulb,
  Clock,
  DollarSign
} from 'lucide-react';

const AuditBenefits = () => {
  const { t } = useTranslation();

  const benefits = [
    {
      id: 'compliance',
      title: 'Conformité Réglementaire',
      description: 'Assurez-vous de respecter toutes les réglementations en vigueur dans votre secteur d\'activité.',
      icon: Shield,
      color: 'bg-blue-100 text-blue-600',
      stats: '100% de conformité garantie',
      details: [
        'Identification des exigences réglementaires',
        'Vérification de la conformité actuelle',
        'Plan d\'action pour les écarts identifiés',
        'Suivi et maintenance de la conformité'
      ]
    },
    {
      id: 'efficiency',
      title: 'Amélioration des Performances',
      description: 'Optimisez vos processus pour augmenter l\'efficacité et réduire les coûts.',
      icon: TrendingUp,
      color: 'bg-green-100 text-green-600',
      stats: 'Jusqu\'à 30% d\'amélioration',
      details: [
        'Analyse des processus existants',
        'Identification des goulots d\'étranglement',
        'Recommandations d\'optimisation',
        'Mesure des gains de performance'
      ]
    },
    {
      id: 'quality',
      title: 'Amélioration de la Qualité',
      description: 'Renforcez la qualité de vos produits et services pour satisfaire vos clients.',
      icon: Award,
      color: 'bg-yellow-100 text-yellow-600',
      stats: 'Réduction de 50% des défauts',
      details: [
        'Mise en place de systèmes qualité',
        'Formation du personnel',
        'Contrôles et audits internes',
        'Amélioration continue'
      ]
    },
    {
      id: 'risk-management',
      title: 'Gestion des Risques',
      description: 'Identifiez et maîtrisez les risques pour protéger votre entreprise.',
      icon: Target,
      color: 'bg-red-100 text-red-600',
      stats: 'Réduction de 70% des risques',
      details: [
        'Cartographie des risques',
        'Évaluation de la probabilité et impact',
        'Plan de mitigation',
        'Monitoring continu'
      ]
    },
    {
      id: 'team-development',
      title: 'Développement des Compétences',
      description: 'Formez et développez les compétences de vos équipes.',
      icon: Users,
      color: 'bg-purple-100 text-purple-600',
      stats: '100% du personnel formé',
      details: [
        'Formation sur les bonnes pratiques',
        'Sensibilisation aux enjeux qualité',
        'Transfert de compétences',
        'Suivi et évaluation'
      ]
    },
    {
      id: 'competitive-advantage',
      title: 'Avantage Concurrentiel',
      description: 'Distinguez-vous de la concurrence grâce à vos certifications et processus optimisés.',
      icon: BarChart3,
      color: 'bg-indigo-100 text-indigo-600',
      stats: '+25% de parts de marché',
      details: [
        'Certifications reconnues',
        'Processus standardisés',
        'Amélioration de l\'image de marque',
        'Accès à de nouveaux marchés'
      ]
    }
  ];

  const roiStats = [
    {
      icon: DollarSign,
      value: '300%',
      label: 'Retour sur investissement moyen',
      description: 'Les entreprises voient un ROI de 300% dans les 2 ans'
    },
    {
      icon: Clock,
      value: '6 mois',
      label: 'Temps de récupération',
      description: 'Récupération de l\'investissement en moyenne 6 mois'
    },
    {
      icon: TrendingUp,
      value: '+40%',
      label: 'Amélioration de la productivité',
      description: 'Gains de productivité significatifs observés'
    },
    {
      icon: CheckCircle,
      value: '95%',
      label: 'Taux de satisfaction client',
      description: 'Nos clients sont très satisfaits de nos services'
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
            Les Avantages de l'Audit & Consultation
          </h2>
          <p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="200"
          >
            Découvrez comment nos services d'audit et de consultation peuvent transformer 
            votre entreprise et générer des résultats mesurables.
          </p>
        </div>

        {/* Grille des avantages */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={benefit.id}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 group"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay={index * 100}
              >
                {/* En-tête */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${benefit.color} flex-shrink-0`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-brand-blue transition-colors duration-200">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {benefit.description}
                    </p>
                    <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-full">
                      {benefit.stats}
                    </div>
                  </div>
                </div>

                {/* Détails */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Comment nous procédons :</h4>
                  <ul className="space-y-3">
                    {benefit.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section ROI et statistiques */}
        <div 
          className="bg-gradient-to-r from-brand-blue to-blue-600 rounded-2xl p-8 md:p-12 text-white"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="400"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Retour sur Investissement Garanti
            </h3>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Nos clients constatent des améliorations significatives et mesurables 
              dans les mois qui suivent nos interventions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {roiStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div 
                  key={index}
                  className="text-center"
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay={index * 100}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                    <IconComponent className="w-8 h-8 text-yellow-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold text-white mb-2">
                    {stat.label}
                  </div>
                  <div className="text-sm text-white/80">
                    {stat.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section témoignages */}
        <div 
          className="mt-20"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="600"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ce que disent nos clients
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez les témoignages de nos clients qui ont transformé leur entreprise 
              grâce à nos services d'audit et de consultation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Lightbulb key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                "L'audit de qualité nous a permis d'identifier des axes d'amélioration 
                que nous n'avions pas vus. Nos processus sont maintenant 40% plus efficaces."
              </p>
              <div className="font-semibold text-gray-900">Jean M., Directeur Qualité</div>
              <div className="text-sm text-gray-500">Manufacturing Corp</div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Lightbulb key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                "Grâce à leur expertise, nous avons obtenu la certification ISO 9001 
                en seulement 6 mois. Un accompagnement exceptionnel !"
              </p>
              <div className="font-semibold text-gray-900">Marie K., PDG</div>
              <div className="text-sm text-gray-500">Services Pro</div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Lightbulb key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                "L'audit environnemental nous a aidés à réduire nos coûts de 25% 
                tout en améliorant notre image de marque. Un investissement rentable !"
              </p>
              <div className="font-semibold text-gray-900">Pierre L., Directeur</div>
              <div className="text-sm text-gray-500">Eco Solutions</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditBenefits;
