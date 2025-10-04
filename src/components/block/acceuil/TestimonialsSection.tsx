import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  Quote, 
  Building2, 
  Users,
  Award,
  CheckCircle
} from 'lucide-react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Jean-Baptiste Mbuyi",
      position: "Directeur Général",
      company: "Banque Commerciale du Congo",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "La certification TISSE a transformé notre approche du service client. En 6 mois, nous avons vu une amélioration de 40% de notre satisfaction client et une réduction de 25% des plaintes. Un investissement qui a payé au-delà de nos attentes.",
      results: [
        { metric: "+40%", label: "Satisfaction Client" },
        { metric: "-25%", label: "Plaintes" },
        { metric: "+30%", label: "Rétention" }
      ]
    },
    {
      id: 2,
      name: "Marie-Claire Kabongo",
      position: "Responsable RH",
      company: "Groupe Rawbank",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "Le programme IEHWS a révolutionné le bien-être de nos employés. Nos équipes sont plus motivées, plus productives et le taux de turnover a chuté de 35%. La formation était excellente et très adaptée à notre contexte local.",
      results: [
        { metric: "-35%", label: "Turnover" },
        { metric: "+45%", label: "Motivation" },
        { metric: "+20%", label: "Productivité" }
      ]
    },
    {
      id: 3,
      name: "Patrick Mwamba",
      position: "CEO",
      company: "Orange RDC",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "Les formations ICXI nous ont permis de standardiser nos processus de service client sur tous nos points de vente. L'impact sur notre image de marque et notre croissance a été immédiat. Je recommande vivement leurs services.",
      results: [
        { metric: "+50%", label: "Efficacité" },
        { metric: "+60%", label: "Standardisation" },
        { metric: "+25%", label: "Croissance" }
      ]
    },
    {
      id: 4,
      name: "Grace Ntumba",
      position: "Directrice Marketing",
      company: "Vodacom RDC",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "La certification IDCXS nous a aidés à optimiser notre expérience digitale. Nos clients apprécient la fluidité de nos processus en ligne et notre NPS a augmenté de 30 points. Un accompagnement professionnel de qualité.",
      results: [
        { metric: "+30", label: "NPS Score" },
        { metric: "+55%", label: "Satisfaction Digitale" },
        { metric: "+40%", label: "Conversion" }
      ]
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  const current = testimonials[currentTestimonial];

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 
              className="text-4xl lg:text-5xl font-bold text-brand-blue mb-6"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              Ce Que Disent Nos Clients
            </h2>
            <p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="200"
            >
              Découvrez comment nos certifications ont transformé les performances 
              de plus de 500 entreprises en République Démocratique du Congo.
            </p>
          </div>

          {/* Testimonial Carousel */}
          <div className="relative">
            <div 
              className="bg-gradient-to-br from-brand-blue to-blue-600 rounded-3xl p-12 text-white overflow-hidden"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="400"
            >
              {/* Quote Icon */}
              <div className="flex justify-center mb-8">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Quote className="w-8 h-8 text-yellow-400" />
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="text-center mb-8">
                <p className="text-xl lg:text-2xl leading-relaxed mb-8 max-w-4xl mx-auto">
                  "{current.text}"
                </p>

                {/* Client Info */}
                <div className="flex items-center justify-center gap-4 mb-6">
                  <img 
                    src={current.image} 
                    alt={current.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-white/20"
                  />
                  <div className="text-left">
                    <h4 className="text-xl font-semibold">{current.name}</h4>
                    <p className="text-white/80">{current.position}</p>
                    <p className="text-yellow-400 font-medium">{current.company}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Results */}
                <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
                  {current.results.map((result, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-yellow-400 mb-1">{result.metric}</div>
                      <div className="text-white/80 text-sm">{result.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Dots */}
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentTestimonial 
                          ? 'bg-yellow-400 w-8' 
                          : 'bg-white/30 hover:bg-white/50'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div 
            className="mt-16 text-center"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="600"
          >
            <p className="text-gray-600 mb-8">Ils nous font confiance</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              <div className="flex items-center justify-center">
                <Building2 className="w-8 h-8 text-brand-blue" />
                <span className="ml-2 font-semibold text-gray-700">Banques</span>
              </div>
              <div className="flex items-center justify-center">
                <Users className="w-8 h-8 text-brand-blue" />
                <span className="ml-2 font-semibold text-gray-700">Télécoms</span>
              </div>
              <div className="flex items-center justify-center">
                <Award className="w-8 h-8 text-brand-blue" />
                <span className="ml-2 font-semibold text-gray-700">Assurances</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-brand-blue" />
                <span className="ml-2 font-semibold text-gray-700">PME</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
