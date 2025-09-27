import React from 'react';
import { TrendingUp, ChevronRight } from 'lucide-react';
import { SlideProps } from './SlideInterface';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { t } from 'i18next';

const AuditSlide: React.FC<SlideProps> = ({ 
  isActive, 
  onActionClick, 
  onContactClick 
}) => {
  return (
    <div className="space-y-8">
      {/* <div 
        className="flex items-center space-x-4 mb-6"
        data-aos="fade-right"
        data-aos-duration="800"
        data-aos-delay="200"
      >
        <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center text-yellow-500 border border-white/20">
          <TrendingUp className="w-8 h-8" />
        </div>
        <div className="text-yellow-500 font-medium text-lg">
          Audits & Conseil en Amélioration
        </div>
      </div> */}

      <div className="space-y-6">
        <h1 
          className="text-4xl lg:text-5xl font-bold text-white leading-tight transition-all duration-700 ease-in-out"
          data-aos="fade-right"
          data-aos-duration="800"
          data-aos-delay="200"
        >
          Audit de Service TISSE 
        </h1>
        
        <p 
          className="text-xl text-white/90 leading-relaxed max-w-2xl transition-all duration-700 ease-in-out"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="400"
        >
          Évaluez objectivement et optimisez vos performances en expérience client et bien-être employé grâce aux cadres d'audit et de conseil de l'ICXI.
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
          {t('slides.certification.cta_discover')}
          <ChevronRight className="w-5 h-5" />
        </button>
        <button 
          onClick={onContactClick}
          className="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-brand-blue px-8 py-2 rounded-lg font-semibold transition-all duration-300"
        >
          {t('slides.certification.cta_contact')}
        </button>
      </div>
    </div>
  );
};

export default AuditSlide;
