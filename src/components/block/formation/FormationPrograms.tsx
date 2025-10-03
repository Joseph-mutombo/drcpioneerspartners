import { useTranslation } from 'react-i18next';
import { 
  BookOpen, 
  Clock, 
  Users, 
  CheckCircle, 
  Star,
  ArrowRight,
  Award,
  Target,
  TrendingUp,
  Monitor
} from 'lucide-react';

const FormationPrograms = () => {
  const { t } = useTranslation();

  const programs = [
    {
      id: 'cxop',
      code: 'CXOP',
      name: 'Customer Experience Officer Program',
      description: 'Programme fondamental pour maîtriser les bases de l\'expérience client et développer les compétences essentielles.',
      icon: BookOpen,
      color: 'bg-blue-100 text-blue-600',
      duration: '3 jours',
      level: 'Fondamental',
      target: 'Professionnels débutants, Responsables clientèle',
      benefits: [
        'Comprendre les enjeux de l\'expérience client',
        'Maîtriser les outils de mesure CX',
        'Développer une culture client',
        'Certification internationale'
      ],
      status: 'coming-soon',
      price: 'Sur devis'
    },
    {
      id: 'cxmp',
      code: 'CXMP',
      name: 'Customer Experience Management Program',
      description: 'Programme avancé pour gérer et optimiser l\'expérience client à l\'échelle organisationnelle.',
      icon: Target,
      color: 'bg-green-100 text-green-600',
      duration: '5 jours',
      level: 'Avancé',
      target: 'Managers, Chefs de projet CX',
      benefits: [
        'Stratégie CX organisationnelle',
        'Gestion des équipes CX',
        'Optimisation des processus',
        'Métriques et KPIs avancés'
      ],
      status: 'coming-soon',
      price: 'Sur devis'
    },
    {
      id: 'cxlp',
      code: 'CXLP',
      name: 'Customer Experience Leadership Program',
      description: 'Programme expert pour diriger la transformation CX et développer une vision stratégique.',
      icon: Award,
      color: 'bg-purple-100 text-purple-600',
      duration: '7 jours',
      level: 'Expert',
      target: 'Directeurs, VP, Leaders transformationnels',
      benefits: [
        'Leadership transformationnel',
        'Vision stratégique CX',
        'Gestion du changement',
        'Innovation et disruption'
      ],
      status: 'coming-soon',
      price: 'Sur devis'
    },
    {
      id: 'msc',
      code: 'MSC',
      name: 'Masterclass Spécialisées',
      description: 'Sessions intensives sur des sujets spécialisés de l\'expérience client et des technologies émergentes.',
      icon: Star,
      color: 'bg-orange-100 text-orange-600',
      duration: '1-2 jours',
      level: 'Spécialisé',
      target: 'Experts, Consultants, Formateurs',
      benefits: [
        'Sujets d\'actualité',
        'Technologies émergentes',
        'Cas d\'étude avancés',
        'Réseau d\'experts'
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

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Fondamental':
        return 'bg-blue-100 text-blue-800';
      case 'Avancé':
        return 'bg-green-100 text-green-800';
      case 'Expert':
        return 'bg-purple-100 text-purple-800';
      case 'Spécialisé':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
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
            Nos Programmes de Formation
          </h2>
          <p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="200"
          >
            Découvrez notre gamme complète de programmes de formation en Customer Experience, 
            conçus pour répondre aux besoins de tous les niveaux professionnels.
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
                        {program.code}
                      </h3>
                      {getStatusBadge(program.status)}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-2">
                      {program.name}
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

                {/* Niveau */}
                <div className="mb-6">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(program.level)}`}>
                    {program.level}
                  </span>
                </div>

                {/* Bénéfices */}
                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-gray-900 mb-4">Ce que vous apprendrez :</h5>
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
            <button onClick={() => window.location.href = '/contact'} className="px-8 py-4 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-yellow-700 transition-colors duration-200">
              Nous contacter
            </button>
            <button onClick={() => window.location.href = '/contact'} className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-brand-blue transition-colors duration-200">
              Obtenir le prospectus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormationPrograms;
