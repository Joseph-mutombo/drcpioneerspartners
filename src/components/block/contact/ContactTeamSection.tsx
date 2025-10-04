import React from 'react';
import { 
  Award, 
  Users, 
  Globe, 
  CheckCircle,
  Star,
  MessageCircle,
  Phone,
  Mail
} from 'lucide-react';

const ContactTeamSection = () => {
  const teamMembers = [
    {
      name: "Dr. Jean-Baptiste Mbuyi",
      position: "Directeur Général & Expert Principal",
      expertise: "Certifications TISSE & ICXS",
      experience: "15+ années",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      certifications: ["TISSE Master", "ICXS Expert", "BSI Certified"],
      description: "Expert reconnu internationalement dans l'excellence de service et l'expérience client.",
      contact: {
        phone: "+243 978 847 886",
        email: "j.mbuyi@drcpioneers.com"
      }
    },
    {
      name: "Marie-Claire Kabongo",
      position: "Responsable Formations & Certifications",
      expertise: "Programmes de Formation",
      experience: "12+ années",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      certifications: ["CXOP Master", "Formation Internationale", "Pédagogie Avancée"],
      description: "Spécialiste en développement des compétences et formation professionnelle.",
      contact: {
        phone: "+243 978 847 887",
        email: "m.kabongo@drcpioneers.com"
      }
    },
    {
      name: "Patrick Mwamba",
      position: "Consultant Senior en Audit",
      expertise: "Audit & Amélioration Continue",
      experience: "10+ années",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      certifications: ["Audit ISO 9001", "Process Improvement", "Quality Management"],
      description: "Expert en audit de processus et optimisation des performances organisationnelles.",
      contact: {
        phone: "+243 978 847 888",
        email: "p.mwamba@drcpioneers.com"
      }
    }
  ];

  const teamStats = [
    {
      icon: Users,
      value: "50+",
      label: "Experts Certifiés",
      description: "Équipe internationale"
    },
    {
      icon: Award,
      value: "15+",
      label: "Années d'Expérience",
      description: "Cumulée de l'équipe"
    },
    {
      icon: Globe,
      value: "50+",
      label: "Pays d'Intervention",
      description: "Présence internationale"
    },
    {
      icon: CheckCircle,
      value: "98%",
      label: "Satisfaction Client",
      description: "Taux de réussite"
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 
              className="text-4xl lg:text-5xl font-bold text-brand-blue mb-6"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              Rencontrez Notre Équipe d'Experts
            </h2>
            <p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="200"
            >
              Nos experts certifiés possèdent une expertise reconnue internationalement 
              et sont dédiés à votre succès. Chaque membre de notre équipe apporte 
              des années d'expérience et des certifications de pointe.
            </p>
          </div>

          {/* Team Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {teamStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center group"
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay={index * 100}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-blue/10 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-brand-blue" />
                  </div>
                  <div className="text-3xl font-bold text-brand-blue mb-2">{stat.value}</div>
                  <div className="font-semibold text-gray-900 mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.description}</div>
                </div>
              );
            })}
          </div>

          {/* Team Members */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay={index * 200}
              >
                {/* Member Photo */}
                <div className="text-center mb-6">
                  <div className="relative inline-block">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-brand-blue/20 group-hover:border-yellow-400 transition-colors duration-300"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                      <Star className="w-4 h-4 text-brand-blue" />
                    </div>
                  </div>
                </div>

                {/* Member Info */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-brand-blue mb-2">{member.name}</h3>
                  <p className="text-yellow-600 font-semibold mb-2">{member.position}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.description}</p>
                  
                  {/* Experience */}
                  <div className="inline-flex items-center gap-2 bg-brand-blue/10 rounded-full px-4 py-2 mb-4">
                    <Award className="w-4 h-4 text-brand-blue" />
                    <span className="text-sm font-semibold text-brand-blue">{member.experience}</span>
                  </div>
                </div>

                {/* Certifications */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Certifications :</h4>
                  <div className="space-y-2">
                    {member.certifications.map((cert, certIndex) => (
                      <div key={certIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Info */}
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Phone className="w-4 h-4 text-brand-blue" />
                    <span className="text-sm text-gray-600">{member.contact.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-brand-blue" />
                    <span className="text-sm text-gray-600">{member.contact.email}</span>
                  </div>
                </div>

                {/* Contact Button */}
                <button className="w-full mt-4 bg-brand-blue hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  <span>Contacter {member.name.split(' ')[0]}</span>
                </button>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div 
            className="bg-gradient-to-r from-brand-blue to-blue-600 rounded-3xl p-12 text-white text-center"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="400"
          >
            <h3 className="text-3xl font-bold mb-4">Prêt à Travailler avec Nos Experts ?</h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Chaque projet est unique. Nos experts vous accompagnent personnellement 
              pour garantir le succès de votre transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-brand-blue font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Planifier une Consultation
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-brand-blue transition-all duration-300">
                Voir Tous les Experts
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactTeamSection;
