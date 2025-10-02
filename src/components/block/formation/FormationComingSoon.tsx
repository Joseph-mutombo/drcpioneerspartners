import { useTranslation } from 'react-i18next';
import { Clock, BookOpen, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const FormationComingSoon = () => {
  const { t } = useTranslation();

  return (
    <div className="text-center py-16">
      <div className="max-w-4xl mx-auto">
        {/* Icône principale */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-blue-100 rounded-full mb-6">
            <BookOpen className="w-12 h-12 text-brand-blue" />
          </div>
        </div>

        {/* Message principal */}
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Formations en préparation
        </h2>
        
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Nous travaillons actuellement sur le contenu des formations afin de vous garantir une qualité optimale. 
          Merci de votre patience.
        </p>

        {/* Informations supplémentaires */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <Clock className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Contenu en cours
            </h3>
            <p className="text-gray-600">
              Nos experts travaillent sur des formations de haute qualité
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
              <BookOpen className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Qualité garantie
            </h3>
            <p className="text-gray-600">
              Chaque formation est soigneusement préparée par nos spécialistes
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
              <Users className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Bientôt disponible
            </h3>
            <p className="text-gray-600">
              Restez connecté pour être informé du lancement
            </p>
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-12">
          <p className="text-lg text-gray-700 mb-6">
            En attendant, n'hésitez pas à nous contacter pour toute question
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-8 py-3 bg-brand-blue text-white font-semibold rounded-lg hover:bg-yellow-600 transition-colors duration-200"
          >
            <span>Nous contacter</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FormationComingSoon;
