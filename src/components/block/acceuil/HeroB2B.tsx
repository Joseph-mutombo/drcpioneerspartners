import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Building2, 
  Users, 
  Award, 
  Globe,
  TrendingUp,
  Shield,
  Target,
  Star
} from 'lucide-react';

const HeroB2B = () => {
  const { t } = useTranslation();

  const keyBenefits = [
    { icon: Globe, text: "Standards Internationaux", highlight: "Reconnus mondialement" },
    { icon: Building2, text: "500+ Entreprises", highlight: "Accompagnées en RDC" },
    { icon: Award, text: "98% Satisfaction", highlight: "Client garantie" },
    { icon: TrendingUp, text: "ROI Mesurable", highlight: "Performance prouvée" }
  ];

  const certifications = [
    { name: "TISSE", description: "Standards d'Excellence de Service" },
    { name: "ICXS", description: "Certification Expérience Client" },
    { name: "IDCXS", description: "Certification Expérience Digitale" },
    { name: "IEHWS", description: "Standards Bien-être Employé" }
  ];

  return (
    <div 
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(135deg, rgba(13, 27, 62, 0.95), rgba(13, 27, 62, 0.85)), url("https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 via-transparent to-yellow-500/10"></div>
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'2\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
      }}></div>

      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-16 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column - Content */}
            <div className="text-white">
              {/* Badge */}
              <div 
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8"
                data-aos="fade-up"
                data-aos-duration="600"
              >
                <Shield className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-medium">Leader en Excellence de Service en RDC</span>
              </div>

              {/* Main Title */}
              <h1 
                className="text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                Élevez Vos Standards
                <span className="block text-yellow-400">d'Excellence</span>
                <span className="block text-3xl lg:text-4xl font-normal text-white/90 mt-2">
                  avec les Certifications ICXI
                </span>
              </h1>

              {/* Subtitle */}
              <p 
                className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="400"
              >
                Transformez votre entreprise avec nos certifications internationales reconnues. 
                Développez l'excellence de service, améliorez l'expérience client et optimisez 
                le bien-être de vos équipes grâce à nos standards TISSE, ICXS, IDCXS et IEHWS.
              </p>

              {/* Key Benefits */}
              <div 
                className="grid grid-cols-2 gap-4 mb-8"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="600"
              >
                {keyBenefits.map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-yellow-400/20 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-yellow-400" />
                      </div>
                      <div>
                        <div className="font-semibold text-white">{benefit.text}</div>
                        <div className="text-sm text-white/70">{benefit.highlight}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* CTA Buttons */}
              <div 
                className="flex flex-col sm:flex-row gap-4"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="800"
              >
                <Link
                  to="/certifications"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-brand-blue font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <span>Découvrir nos Certifications</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-brand-blue transition-all duration-300"
                >
                  <span>Demander un Audit</span>
                  <Target className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Right Column - Visual Content */}
            <div 
              className="relative"
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="400"
            >
              {/* Main Visual Card */}
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                {/* Certifications Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {certifications.map((cert, index) => (
                    <div 
                      key={cert.name}
                      className="bg-white/10 rounded-xl p-4 text-center border border-white/20"
                    >
                      <Award className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                      <h3 className="font-bold text-white text-lg mb-1">{cert.name}</h3>
                      <p className="text-white/80 text-xs">{cert.description}</p>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-1">500+</div>
                    <div className="text-white/80 text-sm">Entreprises</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-1">98%</div>
                    <div className="text-white/80 text-sm">Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-1">15+</div>
                    <div className="text-white/80 text-sm">Années</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-1">50+</div>
                    <div className="text-white/80 text-sm">Pays</div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 -left-8 w-12 h-12 bg-yellow-400/30 rounded-full animate-bounce delay-500"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 fill-white">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroB2B;