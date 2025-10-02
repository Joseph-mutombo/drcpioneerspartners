import { useTranslation } from 'react-i18next';
import { Shield, CheckCircle, Building2, Users } from 'lucide-react';

const AuditHero = () => {
  const { t } = useTranslation();

  return (
    <div 
      className="text-white overflow-hidden relative"
      style={{
        backgroundImage: 'linear-gradient(rgba(13, 27, 62, 0.9), rgba(13, 27, 62, 0.8)), url("https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-16 py-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Contenu principal */}
            <div>
              {/* Badge */}
              {/* <div 
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
                data-aos="fade-up"
                data-aos-duration="600"
              >
                <Shield className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-medium">Services d'Audit & Consultation</span>
              </div> */}

              {/* Titre principal */}
              <h1 
                className="text-5xl font-bold mb-6"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                Audit & Consultation
                <span className="block text-yellow-400">pour Entreprises</span>
              </h1>
              
              {/* Description */}
              <p 
                className="text-white/90 mb-8 leading-relaxed"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="400"
              >
                Optimisez vos processus, assurez la conformité et améliorez vos performances 
                grâce à nos services d'audit et de consultation professionnels. 
                Nos experts vous accompagnent dans votre démarche d'excellence.
              </p>

              {/* Points clés */}
              <div 
                className="space-y-4 mb-8"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="600"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-white/90">Audit complet de vos processus</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-white/90">Conformité réglementaire garantie</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-white/90">Recommandations personnalisées</span>
                </div>
              </div>

              {/* CTA */}
              {/* <div 
                className="flex flex-col sm:flex-row gap-4"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="800"
              >
                <button className="px-8 py-4 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-yellow-700 transition-colors duration-200">
                  Demander un Audit
                </button>
                <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-brand-blue transition-colors duration-200">
                  En savoir plus
                </button>
              </div> */}
            </div>

            {/* Statistiques */}
            <div 
              className="grid grid-cols-2 gap-8"
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="400"
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                  <Building2 className="w-8 h-8 text-yellow-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">500+</div>
                <div className="text-white/80">Entreprises auditées</div>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                  <Users className="w-8 h-8 text-yellow-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">50+</div>
                <div className="text-white/80">Experts certifiés</div>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                  <Shield className="w-8 h-8 text-yellow-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">98%</div>
                <div className="text-white/80">Taux de satisfaction</div>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                  <CheckCircle className="w-8 h-8 text-yellow-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">15+</div>
                <div className="text-white/80">Années d'expérience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditHero;
