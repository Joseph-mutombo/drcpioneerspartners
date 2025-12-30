import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  Calendar, 
  MessageCircle,
  Download,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Award
} from 'lucide-react';

const ContactCTASection = () => {
  const contactOptions = [
    {
      title: "Consultation Gratuite",
      description: "Évaluez vos besoins avec nos experts",
      icon: MessageCircle,
      color: "from-brand-blue to-blue-600",
      features: [
        "Évaluation personnalisée de vos besoins",
        "Recommandations adaptées à votre secteur",
        "Plan d'action personnalisé",
        "Durée : 30 minutes"
      ],
      ctaText: "Réserver une Consultation",
      ctaLink: "#consultation",
      highlight: "GRATUIT",
      urgency: "Réponse sous 2h"
    },
    {
      title: "Audit Express",
      description: "Diagnostic rapide de vos processus",
      icon: Clock,
      color: "from-yellow-500 to-yellow-600",
      features: [
        "Audit de vos processus actuels",
        "Identification des points d'amélioration",
        "Rapport détaillé avec recommandations",
        "Durée : 1 heure"
      ],
      ctaText: "Demander un Audit",
      ctaLink: "/audit",
      highlight: "EXPRESS",
      urgency: "Disponible immédiatement"
    },
    {
      title: "Formation sur Mesure",
      description: "Programme adapté à votre équipe",
      icon: Users,
      color: "from-green-500 to-green-600",
      features: [
        "Formation personnalisée pour vos équipes",
        "Certification internationale incluse",
        "Suivi post-formation",
        "Durée : 1-5 jours"
      ],
      ctaText: "Planifier une Formation",
      ctaLink: "/formations",
      highlight: "SUR MESURE",
      urgency: "Démarrage sous 48h"
    }
  ];

  const quickActions = [
    {
      icon: Phone,
      title: "Appel Direct",
      description: "Parlez à un expert maintenant",
      value: "+243 862121612",
      action: "Appeler",
      color: "text-green-600"
    },
    {
      icon: Mail,
      title: "Email Rapide",
      description: "Réponse garantie sous 24h",
      value: "contact@drcpioneers.com",
      action: "Écrire",
      color: "text-blue-600"
    },
    {
      icon: Calendar,
      title: "Planifier un RDV",
      description: "Choisissez votre créneau",
      value: "Calendrier en ligne",
      action: "Réserver",
      color: "text-purple-600"
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 
              className="text-4xl lg:text-5xl font-bold text-brand-blue mb-6"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              Comment Souhaitez-Vous Nous Contacter ?
            </h2>
            <p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="200"
            >
              Choisissez la méthode qui correspond le mieux à vos besoins. 
              Nos experts sont disponibles pour vous accompagner dans votre démarche d'excellence.
            </p>
          </div>

          {/* Contact Options Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {contactOptions.map((option, index) => {
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

                  {/* Urgency Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-600">
                      {option.urgency}
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

          {/* Quick Actions */}
          <div 
            className="bg-gradient-to-r from-brand-blue to-blue-600 rounded-3xl p-12 text-white"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="400"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">Actions Rapides</h3>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Besoin d'une réponse immédiate ? Utilisez nos canaux de contact directs.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {quickActions.map((action, index) => {
                const IconComponent = action.icon;
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
                    <h4 className="text-xl font-semibold mb-2">{action.title}</h4>
                    <p className="text-white/80 mb-4">{action.description}</p>
                    <p className="text-2xl font-bold text-yellow-400 mb-4">{action.value}</p>
                    <button className={`px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 ${action.color}`}>
                      {action.action}
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
    </div>
  );
};

export default ContactCTASection;
