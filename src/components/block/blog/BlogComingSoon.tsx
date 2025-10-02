import { useTranslation } from 'react-i18next';
import { Clock, PenTool, Users, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogComingSoon = () => {
  const { t } = useTranslation();

  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16">
        {/* Message principal */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-blue-100 rounded-full mb-6">
            <PenTool className="w-10 h-10 text-brand-blue" />
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Contenu en préparation
          </h2>
          
          <p className=" text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Notre équipe d'experts travaille actuellement sur des articles de qualité 
            pour vous offrir des insights précieux sur la certification, la formation et l'innovation.
          </p>
        </div>

        {/* Catégories à venir */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
              <Clock className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Actualités & Tendances
            </h3>
            <p className="text-gray-600 mb-4">
              Restez informé des dernières évolutions dans le domaine de la certification et de la qualité.
            </p>
            <div className="text-sm text-gray-500">
              Bientôt disponible
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6">
              <Users className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Conseils d'Experts
            </h3>
            <p className="text-gray-600 mb-4">
              Des conseils pratiques de nos spécialistes pour optimiser vos processus de certification.
            </p>
            <div className="text-sm text-gray-500">
              Bientôt disponible
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6">
              <PenTool className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Guides Pratiques
            </h3>
            <p className="text-gray-600 mb-4">
              Des guides détaillés pour vous accompagner dans vos démarches de certification.
            </p>
            <div className="text-sm text-gray-500">
              Bientôt disponible
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-gradient-to-r from-brand-blue to-blue-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Restez informé
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Inscrivez-vous à notre newsletter pour être notifié dès la publication de nouveaux articles.
          </p>
          
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
            <button className="px-6 py-3 bg-white text-brand-blue font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200">
              S'abonner
            </button>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-700 mb-6">
            Contactez-nous pour plus d'informations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <Link 
              to="/" 
              className="inline-flex items-center px-8 py-3 bg-brand-blue text-white font-semibold rounded-lg hover:bg-yellow-600 transition-colors duration-200"
            >
              Nos Services
            </Link> */}
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-3 border-2 border-brand-blue text-brand-blue font-semibold rounded-lg hover:bg-brand-blue hover:text-white transition-colors duration-200"
            >
              Nous Contacter
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogComingSoon;
