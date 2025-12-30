import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, TrendingUp, Award, BookOpen, BarChart3, Compass, ChevronDown } from 'lucide-react';
import AOS from 'aos';
import heroImage from '@/assets/images/hero.png';
import employers from '@/assets/images/employers.png';
import professional from '@/assets/images/professional.png';
import groupe1 from '@/assets/images/groupe1.png';
import pro3 from '@/assets/images/pro3.png';
import pro4 from '@/assets/images/pro4.png';
import audit from '@/assets/images/audit.png';
import navigators from '@/assets/images/navigators.jpg';
import p1 from '@/assets/images/p1.png';
import p2 from '@/assets/images/p2.png';
import p3 from '@/assets/images/p3.png';
import p4 from '@/assets/images/p4.png';

interface HeroSlide {
  id: number;
  titleKey: string;
  subtitleKey: string;
  descriptionKey: string;
  icon: React.ReactNode;
  backgroundImage: string;
  visualImage?: string;
  imageAlt: string;
  primaryCtaLabel: string;
  primaryCtaLink?: string;
  primaryCtaOnClick?: () => void;
  secondaryCtaLabel: string;
  secondaryCtaLink?: string;
  secondaryCtaOnClick?: () => void;
  badges?: string[];
}

const HeroSlider: React.FC = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  // Définition des slides
  const slides: HeroSlide[] = [
    {
      id: 0,
      titleKey: 'hero.slides.global.title',
      subtitleKey: 'hero.slides.global.subtitle',
      descriptionKey: 'hero.slides.global.description',
      icon: <TrendingUp className="w-8 h-8" />,
      backgroundImage: heroImage,
      visualImage: p1,
      imageAlt: 'Global Services',
      primaryCtaLabel: t('hero.slides.global.cta_primary') || 'Découvrir',
      primaryCtaLink: '/about',
      secondaryCtaLabel: t('hero.slides.global.cta_secondary') || 'Nous Contacter',
      secondaryCtaLink: '/contact',
      badges: [t('hero.slides.global.badge') || 'Partenaire Régional ICXI']
    },
    {
      id: 1,
      titleKey: 'hero.slides.certification.title',
      subtitleKey: 'hero.slides.certification.subtitle',
      descriptionKey: 'hero.slides.certification.description',
      icon: <Award className="w-8 h-8" />,
      backgroundImage: groupe1,
      visualImage: p4,
      imageAlt: 'Certifications',
      primaryCtaLabel: t('hero.slides.certification.cta_primary') || 'Voir Certifications',
      primaryCtaLink: '/certifications',
      secondaryCtaLabel: t('hero.slides.certification.cta_secondary') || 'Nous Contacter',
      secondaryCtaLink: '/contact',
      badges: [t('hero.slides.certification.badge') || 'Certifications Internationales ICXI']
    },
    {
      id: 2,
      titleKey: 'hero.slides.formation.title',
      subtitleKey: 'hero.slides.formation.subtitle',
      descriptionKey: 'hero.slides.formation.description',
      icon: <BookOpen className="w-8 h-8" />,
      backgroundImage: heroImage,
      visualImage: employers,
      imageAlt: 'Formations',
      primaryCtaLabel: t('hero.slides.formation.cta_primary') || 'Voir Formations',
      primaryCtaLink: '/formations',
      secondaryCtaLabel: t('hero.slides.formation.cta_secondary') || 'Contact',
      secondaryCtaLink: '/contact',
      badges: [t('hero.slides.formation.badge') || 'Programmes de Formation']
    },
    {
      id: 3,
      titleKey: 'hero.slides.audit.title',
      subtitleKey: 'hero.slides.audit.subtitle',
      descriptionKey: 'hero.slides.audit.description',
      icon: <BarChart3 className="w-8 h-8" />,
      backgroundImage: audit,
      visualImage: p3,
      imageAlt: 'Audit & Consultation',
      primaryCtaLabel: t('hero.slides.audit.cta_primary') || 'Découvrir',
      primaryCtaLink: '/audit-consultation',
      secondaryCtaLabel: t('hero.slides.audit.cta_secondary') || 'Contact',
      secondaryCtaLink: '/contact',
      badges: [t('hero.slides.audit.badge') || 'Services d\'Audit']
    },
    {
      id: 4,
      titleKey: 'hero.slides.navigator.title',
      subtitleKey: 'hero.slides.navigator.subtitle',
      descriptionKey: 'hero.slides.navigator.description',
      icon: <Compass className="w-8 h-8" />,
      backgroundImage: navigators,
      visualImage: employers,
      imageAlt: 'ICXI Navigators',
      primaryCtaLabel: t('hero.slides.navigator.cta_primary') || 'Explorer',
      primaryCtaLink: '/navigators',
      secondaryCtaLabel: t('hero.slides.navigator.cta_secondary') || 'Contact',
      secondaryCtaLink: '/contact',
      badges: [t('hero.slides.navigator.badge') || 'Solutions ICXI Navigators']
    }
  ];

  // Navigation
  const goToPrevious = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setAnimationKey((prev) => prev + 1);
      setIsFading(false);
    }, 300);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 5000);
  };

  const goToNext = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setAnimationKey((prev) => prev + 1);
      setIsFading(false);
    }, 300);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 5000);
  };

  const goToSlide = (index: number) => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setAnimationKey((prev) => prev + 1);
      setIsFading(false);
    }, 300);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 5000);
  };

  // Auto-play effect
  useEffect(() => {
    if (!isAutoPlay || isPaused) return;

    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setAnimationKey((prev) => prev + 1);
        setIsFading(false);
      }, 300);
    }, 7000); // Change slide toutes les 7 secondes

    return () => clearInterval(interval);
  }, [isAutoPlay, isPaused, slides.length]);

  // Gestion du clavier
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') goToPrevious();
      if (event.key === 'ArrowRight') goToNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Réinitialiser AOS à chaque changement de slide
  useEffect(() => {
    AOS.refresh();
  }, [animationKey]);

  const activeSlide = slides[currentSlide];

  return (
    <section
      role="region"
      aria-label="Services Hero Slider"
      aria-live="polite"
      className="relative w-full"
      id="accueil"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false);
      }}
    >
      {/* Hero Section Background */}
      <div
        className={`relative w-full h-screen overflow-hidden transition-opacity duration-500 ${
          isFading ? 'opacity-70' : 'opacity-100'
        }`}
        style={{
          backgroundImage: `linear-gradient(rgba(13, 27, 62, 0.85), rgba(13, 27, 62, 0.75)), url("${activeSlide.backgroundImage}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Grid Layout: 2 Colonnes */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center h-full py-8 lg:py-0">
            
            {/* Colonne Gauche: Contenu Texte */}
            <div key={`left-${animationKey}`} className="flex flex-col justify-center z-10 text-white">
              
              {/* Badge */}
              {activeSlide.badges && activeSlide.badges.length > 0 && (
                <div
                  className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 w-fit"
                  data-aos="fade-right"
                  data-aos-duration="600"
                >
                  <div className="text-yellow-400">{activeSlide.icon}</div>
                  <span className="text-sm font-medium">{activeSlide.badges[0]}</span>
                </div>
              )}

              {/* Titre */}
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                {t(activeSlide.titleKey)}
              </h1>

              {/* Sous-titre */}
              <p
                className="text-xl sm:text-2xl text-yellow-400 font-semibold mb-6"
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="400"
              >
                {t(activeSlide.subtitleKey)}
              </p>

              {/* Description */}
              <p
                className="text-base sm:text-lg text-white/90 mb-8 leading-relaxed max-w-2xl"
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="600"
              >
                {t(activeSlide.descriptionKey)}
              </p>

              {/* CTAs */}
              <div
                className="flex flex-col sm:flex-row gap-4 mb-12"
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="800"
              >
                <Link
                  to={activeSlide.primaryCtaLink || '#'}
                  onClick={activeSlide.primaryCtaOnClick}
                  className="inline-flex items-center justify-center bg-yellow-500 hover:bg-yellow-600 text-brand-blue px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  {activeSlide.primaryCtaLabel}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                
                <Link
                  to={activeSlide.secondaryCtaLink || '#'}
                  onClick={activeSlide.secondaryCtaOnClick}
                  className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white border border-white/30 hover:border-yellow-400/50 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  {activeSlide.secondaryCtaLabel}
                </Link>
              </div>

              {/* Scroll Indicator */}
              {/* <div
                className="flex items-center gap-2 text-white/70 animate-bounce"
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="1000"
              >
                <span className="text-sm">{t('hero.scroll_down') || 'Scroll'}</span>
                <ChevronDown className="w-5 h-5" />
              </div> */}
            </div>

            {/* Colonne Droite: Image + Animations */}
            <div key={`right-${animationKey}`} className="hidden lg:flex items-center justify-center relative h-screen">
              <div className="relative w-full h-full flex items-center justify-center">
                
                {/* Image principale */}
                <img
                  src={activeSlide.visualImage || employers}
                  alt={activeSlide.imageAlt}
                  className="w-full h-full object-fill rounded-lg shadow-2xl transition-transform duration-1000 hover:scale-105"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                />

                {/* Orbes animés en arrière-plan */}
                <div
                  className="absolute -bottom-12 -right-12 w-32 h-32 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"
                  style={{ animationDuration: '4s' }}
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  data-aos-delay="400"
                />
                <div
                  className="absolute -top-12 -left-12 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl animate-pulse"
                  style={{ animationDuration: '6s', animationDelay: '1s' }}
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  data-aos-delay="600"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          className={`absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-yellow-400 ${
            isPaused ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
          }`}
          aria-label="Slide précédente"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>

        <button
          onClick={goToNext}
          className={`absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-yellow-400 ${
            isPaused ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
          }`}
          aria-label="Slide suivante"
        >
          <ArrowRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? 'bg-yellow-500 w-3 h-3'
                  : 'bg-white/40 hover:bg-white/60 w-2 h-2'
              }`}
              aria-label={`Aller à la slide ${index + 1}`}
            />
          ))}
        </div> */}

      </div>
    </section>
  );
};

export default HeroSlider;
