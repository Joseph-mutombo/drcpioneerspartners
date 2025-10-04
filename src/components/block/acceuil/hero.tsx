import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SlideData } from './slides/SlideInterface';
import CertificationSlide from './slides/CertificationSlide';
import FormationSlide from './slides/FormationSlide';
import AuditSlide from './slides/AuditSlide';
import NavigatorSlide from './slides/NavigatorSlide';
import heroImage from '@/assets/images/hero.png';
import callCenter from '@/assets/images/call-center.png';
import experts from '@/assets/images/employers.png';
import GlobalSlide from './slides/GlobalSlide';

const HeroSlider = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const slides: SlideData[] = [
    {
      id: 0,
      title: t('slides.certification.title'),
      subtitle: t('slides.certification.description'),
      imageUrl: heroImage,
      imageAlt: "Professionnels africains tenant des certificats de formation",
      component: GlobalSlide
    },
    {
      id: 1,
      title: t('slides.certification.title'),
      subtitle: t('slides.certification.description'),
      imageUrl: heroImage,
      imageAlt: "Professionnels africains tenant des certificats de formation",
      component: CertificationSlide
    },
    {
      id: 2,
      title: t('slides.formation.title'),
      subtitle: t('slides.formation.description'),
      imageUrl: callCenter,
      imageAlt: "Formation en salle avec participants engagés",
      component: FormationSlide
    },
    {
      id: 3,
      title: t('slides.audit.title'),
      subtitle: t('slides.audit.description'),
      imageUrl: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80",
      imageAlt: "Équipe d'experts analysant des données de performance",
      component: AuditSlide
    },
    {
      id: 4,
      title: t('slides.navigator.title'),
      subtitle: t('slides.navigator.description'),
      imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80",
      imageAlt: "Entrepreneurs travaillant ensemble dans un environnement moderne",
      component: NavigatorSlide
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000); // 6 seconds

    return () => clearInterval(interval);
  }, [isAutoPlay, slides.length]);

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlay(false);
  const handleMouseLeave = () => {
    setTimeout(() => setIsAutoPlay(true), 2000); // Resume after 2s
  };

  // Navigation functions
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 3000);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 3000);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 3000);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        goToPrevious();
      } else if (event.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Action handlers
  const handleActionClick = () => {
    // Navigate to specific service page based on current slide
    console.log(`Action clicked for slide ${currentSlide + 1}`);
  };

  const handleContactClick = () => {
    // Navigate to contact page
    console.log('Contact clicked');
  };

  return (
    <section 
    id="accueil" 
    style={{
      backgroundImage: 'linear-gradient(rgba(13, 27, 62, 0.9), rgba(13, 27, 62, 0.7)), url("' + heroImage + '")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}
      className=" sm:min-h-[100%] lg:h-auto flex items-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="region"
      aria-label="Services Hero Slider hero-slider"
      aria-live="polite"
    >
      {/* Content */}
      <div className="mx-auto px-4 sm:px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 items-center">
          
          {/* Left Column - Content */}
          <div key={`slide-content-${currentSlide}`} className='py-3'>
            {React.createElement(slides[currentSlide].component, {
              isActive: true,
              onActionClick: handleActionClick,
              onContactClick: handleContactClick
            })}
          </div>

          {/* Right Column - Visual Indicator */}
          <div 
            className="hidden lg:flex items-center justify-center"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="600"
          >
            <div className="relative">
              <img src={experts} alt={slides[currentSlide].imageAlt} style={{ width: '130%', height: '130%' }} className="object-cover" />
              
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-300/30 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400/20 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      {/* <div className="relative z-10 ">
        
      </div> */}
    </section>
  );
};

export default HeroSlider;
