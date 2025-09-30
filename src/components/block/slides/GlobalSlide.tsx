import React from 'react';
import { TrendingUp, ChevronRight } from 'lucide-react';
import { SlideProps } from './SlideInterface';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { t } from 'i18next';

const GlobalSlide: React.FC<SlideProps> = ({ 
  isActive, 
  onActionClick, 
  onContactClick 
}) => {
  return (
    <div className="space-y-8">
      <div 
        className="flex items-center space-x-2 mb-2"
        data-aos="fade-right"
        data-aos-duration="800"
        data-aos-delay="200"
      >
        <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-yellow-500 border border-white/20">
          <TrendingUp className="w-8 h-8" />
        </div>
        <div className="text-yellow-500 font-medium text-lg">
          Partenaire exclusif de l’ICXI en RDC
        </div>
      </div>
      <div className="space-y-6">
        <h1 
          className="text-4xl lg:text-5xl line-height font-bold text-white leading-tight transition-all duration-700 ease-in-out"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="200"
        >
          Elevez votre service client grâce à la Certification TISSE.
        </h1>
        
        <p 
          className="text-xl text-white/95 leading-relaxed max-w-2xl transition-all duration-700 ease-in-out"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="400"
        >
          Devenez une référence mondiale. Implémentez la norme Internationale d'Excellence de Service (TISSE) pour des résultats mesurables et une fidélité client durable.
        </p>
      </div>

      <div 
        className="flex flex-col sm:flex-row gap-4"
        data-aos="fade-in"
        data-aos-duration="800"
        data-aos-delay="500"
      >
        <button 
          onClick={onActionClick}
          className="bg-yellow-500 hover:bg-yellow-600 text-brand-blue px-8 py-2 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          En savoir plus
          <ChevronRight className="w-5 h-5" />
        </button>
        <button 
          onClick={onContactClick}
          className="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-brand-blue px-8 py-2 rounded-lg font-semibold transition-all duration-300"
        >
          Nous contacter
        </button>
      </div>
    </div>
  );
};

export default GlobalSlide;
