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
      <div className="space-y-6">
        <h1 
          className="text-4xl lg:text-5xl font-bold text-white leading-tight transition-all duration-700 ease-in-out"
          data-aos="fade-right"
          data-aos-duration="800"
          data-aos-delay="200"
        >
            Transformez votre service client en un avantage concurrentiel décisif en RDC.
        </h1>
        
        <p 
          className="text-xl text-white/90 leading-relaxed max-w-2xl transition-all duration-700 ease-in-out"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="400"
        >
          Dans un marché congolais en pleine mutation, l'attente des clients n'a jamais été aussi élevée. Pour les institutions ambitieuses, se contenter de l'ordinaire n'est plus une option.
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
