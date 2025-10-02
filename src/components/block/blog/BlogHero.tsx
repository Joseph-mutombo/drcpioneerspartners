import { useTranslation } from 'react-i18next';
import { BookOpen, Search, Calendar } from 'lucide-react';

const BlogHero = () => {
  const { t } = useTranslation();

  return (
    <div 
      className="text-white overflow-hidden relative"
      style={{
        backgroundImage: 'linear-gradient(rgba(13, 27, 62, 0.9), rgba(13, 27, 62, 0.8)), url("https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-16 py-10">
        <div className="">

          {/* Titre principal */}
          <h1 
            className="text-5xl font-bold mb-6"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            Blog
          </h1>
          
          {/* Sous-titre */}
          <p 
            className="text-white/90 mb-8 leading-relaxed"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="400"
          >
            Découvrez nos dernières actualités, conseils d'experts et insights sur la certification, 
            la formation et l'innovation dans le domaine de la qualité.
          </p>

          {/* Barre de recherche */}
          <div 
            className="max-w-3xl mb-8"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="600"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher des articles..."
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
              />
            </div>
          </div>

          {/* Statistiques */}
          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="800"
          >
            <div className="text-cente">
              <div className="text-3xl font-bold text-white mb-2">0</div>
              <div className="text-white/80">Articles publiés</div>
            </div>
            <div className="text-cente">
              <div className="text-3xl font-bold text-white mb-2">5+</div>
              <div className="text-white/80">Catégories</div>
            </div>
            <div className="text-cente">
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-white/80">Contenu expert</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHero;
