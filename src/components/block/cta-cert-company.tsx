import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import heroImage from '../../assets/images/hero.png';
import { ArrowRight } from "lucide-react";

export const CtaCertCompany = () => (
  <section
  style={{
      backgroundImage: 'linear-gradient(rgba(13, 27, 62, 0.9), rgba(13, 27, 62, 0.7)), url("' + heroImage + '")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}
  className="py-16 bg-white" >
    <div 
    className="container mx-auto text-center"
    data-aos="fade-right"
    data-aos-duration="800"
    data-aos-delay="200"
    >
      <h2 className="text-4xl font-bold mb-4  text-white">Certifiez Votre Entreprise</h2>
      <p className="text-lg mb-8  text-white">Augmentez la satisfaction de vos clients et améliorez vos processus internes grâce à nos normes de certification.</p>
      
            <Link
                to="/contact"
                className="inline-flex bg-yellow-500 hover:bg-yellow-600 text-brand-blue px-6 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors duration-300"
            >
                <span>Demander un Audit</span>
                <ArrowRight className="w-5 h-5" />
            </Link>
    </div>
  </section>
);