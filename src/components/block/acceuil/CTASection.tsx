import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Phone, 
  Mail, 
  Calendar,
  Download,
  CheckCircle,
  Target,
  Award,
  Users,
  Building2
} from 'lucide-react';

const CTASection = () => {
  const ctaOptions = [
    {
      title: "Audit Gratuit",
      description: "Évaluez votre niveau actuel d'excellence de service",
      icon: Target,
      color: "from-brand-blue to-blue-600",
      features: [
        "Évaluation complète de vos processus",
        "Rapport détaillé avec recommandations",
        "Plan d'action personnalisé",
        "Consultation gratuite de 30 minutes"
      ],
      ctaText: "Demander un Audit",
      ctaLink: "/audit",
      highlight: "GRATUIT"
    },
    {
      title: "Formation sur Mesure",
      description: "Développez vos équipes avec nos programmes certifiés",
      icon: Users,
      color: "from-yellow-500 to-yellow-600",
      features: [
        "Programmes adaptés à votre secteur",
        "Formation en RDC ou en ligne",
        "Certification internationale",
        "Suivi post-formation inclus"
      ],
      ctaText: "Découvrir les Formations",
      ctaLink: "/formations",
      highlight: "CERTIFIÉ"
    },
    {
      title: "Certification Entreprise",
      description: "Obtenez la reconnaissance de vos standards d'excellence",
      icon: Award,
      color: "from-green-500 to-green-600",
      features: [
        "Certification TISSE, ICXS, IDCXS, IEHWS",
        "Reconnaissance internationale",
        "Accompagnement personnalisé",
        "Valorisation de votre image de marque"
      ],
      ctaText: "En savoir plus",
      ctaLink: "/certifications",
      highlight: "INTERNATIONAL"
    }
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: "Appelez-nous",
      description: "+243 978 847 886",
      action: "Appeler maintenant",
      color: "text-green-600"
    },
    {
      icon: Mail,
      title: "Écrivez-nous",
      description: "info@drcpioneers.com",
      action: "Envoyer un email",
      color: "text-blue-600"
    },
    {
      icon: Calendar,
      title: "Planifiez un RDV",
      description: "Consultation gratuite",
      action: "Réserver un créneau",
      color: "text-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 
              className="text-4xl lg:text-5xl font-bold text-brand-blue mb-6"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              Prêt à Transformer Votre Entreprise ?
            </h2>
            <p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="200"
            >
              Choisissez l'option qui correspond le mieux à vos besoins. 
              Nos experts vous accompagnent à chaque étape de votre transformation.
            </p>
          </div>

          {/* CTA Options Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {ctaOptions.map((option, index) => {
              const IconComponent = option.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden"
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay={index * 200}
                >
                  {/* Highlight Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${option.color} text-white`}>
                      {option.highlight}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${option.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-brand-blue mb-4">{option.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{option.description}</p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {option.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Link
                    to={option.ctaLink}
                    className={`group/btn w-full bg-gradient-to-r ${option.color} text-white px-6 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 transform group-hover:scale-105 shadow-lg hover:shadow-xl`}
                  >
                    <span>{option.ctaText}</span>
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Contact Methods */}
          <div 
            className="bg-gradient-to-r from-brand-blue to-blue-600 rounded-3xl p-12 text-white"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="400"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">Besoin d'Aide pour Choisir ?</h3>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Nos experts sont là pour vous conseiller et vous orienter vers la solution 
                la plus adaptée à votre entreprise.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <div 
                    key={index}
                    className="text-center group"
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-delay={600 + index * 100}
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-yellow-400" />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">{method.title}</h4>
                    <p className="text-white/80 mb-4">{method.description}</p>
                    <button className={`px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 ${method.color}`}>
                      {method.action}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom CTA */}
          <div 
            className="text-center mt-16"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="800"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h4 className="text-2xl font-bold text-brand-blue mb-4">
                Téléchargez notre Brochure Complète
              </h4>
              <p className="text-gray-600 mb-6">
                Découvrez tous nos services, certifications et programmes de formation 
                dans un document détaillé et professionnel.
              </p>
              <button className="group inline-flex items-center gap-3 px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-brand-blue font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <Download className="w-5 h-5" />
                <span>Télécharger la Brochure</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
