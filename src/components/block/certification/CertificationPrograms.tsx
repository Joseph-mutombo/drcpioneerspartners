import { useTranslation } from 'react-i18next';
import { 
  Award, 
  Clock, 
  Users, 
  CheckCircle, 
  Star,
  ArrowRight,
  Globe,
  Shield,
  Target,
  Heart
} from 'lucide-react';

const CertificationPrograms = () => {
  const { t } = useTranslation();

  const programs = [
    {
      id: 'tisse',
      name: 'TISSE',
      fullName: 'Standards d\'Excellence de Service',
      description: 'Certification qui établit les standards d\'excellence dans la prestation de services, garantissant une qualité supérieure et une satisfaction client optimale.',
      icon: Star,
      color: 'bg-yellow-100 text-yellow-600',
      duration: '3-6 mois',
      level: 'Intermédiaire',
      target: 'Professionnels du service client',
      benefits: [
        'Amélioration de la satisfaction client',
        'Standardisation des processus de service',
        'Reconnaissance internationale',
        'Accès à un réseau de professionnels certifiés'
      ],
      status: 'coming-soon',
      price: 'Sur devis'
    },
    {
      id: 'icxs',
      name: 'ICXS',
      fullName: 'Certification Expérience Client',
      description: 'Programme spécialisé dans l\'optimisation de l\'expérience client à travers tous les points de contact et canaux de communication.',
      icon: Users,
      color: 'bg-blue-100 text-blue-600',
      duration: '4-8 mois',
      level: 'Avancé',
      target: 'Gestionnaires CX, Chefs de projet',
      benefits: [
        'Optimisation de l\'expérience client',
        'Mesure et analyse des métriques CX',
        'Stratégies de fidélisation',
        'Certification reconnue par les employeurs'
      ],
      status: 'coming-soon',
      price: 'Sur devis'
    },
    {
      id: 'idcxs',
      name: 'IDCXS',
      fullName: 'Certification Expérience Digitale',
      description: 'Certification axée sur l\'excellence de l\'expérience digitale, couvrant les plateformes numériques, l\'UX/UI et les technologies émergentes.',
      icon: Globe,
      color: 'bg-green-100 text-green-600',
      duration: '5-10 mois',
      level: 'Expert',
      target: 'Développeurs, Designers UX/UI, Product Managers',
      benefits: [
        'Maîtrise des technologies digitales',
        'Design d\'expériences utilisateur optimales',
        'Intégration des dernières tendances',
        'Certification tech reconnue'
      ],
      status: 'coming-soon',
      price: 'Sur devis'
    },
    {
      id: 'iehws',
      name: 'IEHWS',
      fullName: 'Standards Bien-être Employé',
      description: 'Programme dédié à l\'amélioration du bien-être et de l\'engagement des employés, créant un environnement de travail sain et productif.',
      icon: Heart,
      color: 'bg-red-100 text-red-600',
      duration: '3-6 mois',
      level: 'Intermédiaire',
      target: 'RH, Managers, Responsables d\'équipe',
      benefits: [
        'Amélioration du bien-être au travail',
        'Réduction du turnover',
        'Augmentation de la productivité',
        'Culture d\'entreprise positive'
      ],
      status: 'coming-soon',
      price: 'Sur devis'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'coming-soon':
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            <Clock className="w-3 h-3 mr-1" />
            Bientôt disponible
          </span>
        );
      case 'available':
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
            <CheckCircle className="w-3 h-3 mr-1" />
            Disponible
          </span>
        );
      default:
        return null;
    }
  };

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
            Nos Programmes de Certification
          </h2>
          <p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="200"
          >
            Découvrez nos programmes de certification professionnels conçus pour développer 
            vos compétences et valoriser votre expertise dans différents domaines.
          </p>
        </div>

        {/* Grille des programmes */}
        <div className="grid lg:grid-cols-2 gap-8">
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <div
                key={program.id}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 group"
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
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-brand-blue transition-colors duration-200">
                        {program.name}
                      </h3>
                      {getStatusBadge(program.status)}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-2">
                      {program.fullName}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {program.description}
                    </p>
                  </div>
                </div>

                {/* Informations du programme */}
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span><strong>Durée:</strong> {program.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Target className="w-4 h-4 text-gray-400" />
                    <span><strong>Niveau:</strong> {program.level}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users className="w-4 h-4 text-gray-400" />
                    <span><strong>Public:</strong> {program.target}</span>
                  </div>
                </div>

                {/* Bénéfices */}
                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-gray-900 mb-4">Bénéfices de la certification :</h5>
                  <ul className="space-y-2">
                    {program.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Prix et CTA */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                  <div className="text-lg font-semibold text-brand-blue">
                    {program.price}
                  </div>
                  <button 
                    disabled={program.status === 'coming-soon'}
                    className={`group/btn flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                      program.status === 'coming-soon'
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-brand-blue text-white hover:bg-yellow-600 hover:scale-105'
                    }`}
                  >
                    <span>
                      {program.status === 'coming-soon' ? 'Bientôt disponible' : 'S\'inscrire'}
                    </span>
                    {program.status !== 'coming-soon' && (
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section d'information */}
        <div 
          className="mt-16 bg-gradient-to-r from-brand-blue to-blue-600 rounded-2xl p-8 md:p-12 text-white text-center"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="400"
        >
          <h3 className="text-3xl font-bold mb-6">
            Programmes en cours de finalisation
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Nos équipes d'experts travaillent actuellement sur le contenu détaillé de chaque programme. 
            Inscrivez-vous à notre liste d'attente pour être informé dès le lancement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-yellow-700 transition-colors duration-200">
              S'inscrire à la liste d'attente
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-brand-blue transition-colors duration-200">
              Télécharger le prospectus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationPrograms;
