import { useTranslation } from 'react-i18next';
import { 
  TrendingUp, 
  Users, 
  BookOpen, 
  Lightbulb, 
  Shield, 
  Target,
  ChevronRight,
  Mail
} from 'lucide-react';

const BlogCategories = () => {
  const { t } = useTranslation();

  const categories = [
    {
      id: 'actualites',
      name: 'Actualités & Tendances',
      description: 'Les dernières nouvelles du secteur de la certification',
      icon: TrendingUp,
      color: 'bg-green-100 text-green-600',
      count: 0,
      comingSoon: true
    },
    {
      id: 'conseils',
      name: 'Conseils d\'Experts',
      description: 'Des conseils pratiques de nos spécialistes',
      icon: Users,
      color: 'bg-purple-100 text-purple-600',
      count: 0,
      comingSoon: true
    },
    {
      id: 'guides',
      name: 'Guides Pratiques',
      description: 'Des guides détaillés pour vos démarches',
      icon: BookOpen,
      color: 'bg-orange-100 text-orange-600',
      count: 0,
      comingSoon: true
    },
    {
      id: 'innovation',
      name: 'Innovation & Technologie',
      description: 'Les innovations dans le domaine de la qualité',
      icon: Lightbulb,
      color: 'bg-blue-100 text-blue-600',
      count: 0,
      comingSoon: true
    },
    {
      id: 'certification',
      name: 'Certification',
      description: 'Tout sur les processus de certification',
      icon: Shield,
      color: 'bg-red-100 text-red-600',
      count: 0,
      comingSoon: true
    },
    {
      id: 'formation',
      name: 'Formation',
      description: 'Conseils et ressources pour la formation',
      icon: Target,
      color: 'bg-indigo-100 text-indigo-600',
      count: 0,
      comingSoon: true
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16">
        {/* En-tête */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Explorez nos catégories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez nos différents thèmes d'articles pour trouver le contenu qui vous intéresse
          </p>
        </div>

        {/* Grille des catégories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className="group bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${category.color} mb-4`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="mr-1">{category.count}</span>
                    <span>articles</span>
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-brand-blue transition-colors duration-200">
                  {category.name}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {category.description}
                </p>

                {category.comingSoon && (
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      Bientôt disponible
                    </span>
                    <button 
                      disabled
                      className="text-sm text-gray-400 cursor-not-allowed"
                    >
                      Voir les articles
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Message d'encouragement */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Vous avez des suggestions ?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Aidez-nous à créer du contenu qui vous intéresse. Partagez-nous vos idées d'articles 
              ou vos questions sur la certification et la formation.
            </p>
            <button className="inline-flex items-center px-6 py-3 bg-brand-blue text-white font-semibold rounded-lg hover:bg-yellow-600 transition-colors duration-200">
              <Mail className="w-4 h-4 mr-2" />
              Proposer un sujet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCategories;
